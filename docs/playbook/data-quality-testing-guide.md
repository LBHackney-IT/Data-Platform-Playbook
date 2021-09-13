---
title: Guide to testing data quality in Glue Jobs
description: "A guide to continuous data quality testing in Glue Jobs"
layout: playbook_js
tags: playbook
---

## Resources
- [PyDeequ README][pydeequ-readme]

## Prerequisites

Update the job arguments of your Glue job to include:
- Extra jars: `--extra-jars = s3://dataplatform-stg-glue-scripts/jars/deequ-1.0.3.jar` 
- Extra Python files: `--extra-py-file = s3://dataplatform-stg-glue-scripts/python-modules/pydeequ-1.0.1.zip` 
- Metrics repository S3 target location using the template format: 
  `--deequ_metrics_location = s3://dataplatform-stg-EXAMPLE-zone/quality-metrics/department=EXAMPLE/dataset=EXAMPLE/deequ-metrics.json`

### Example Check

Here is an example of using deequ checks to validate a dataframe, and storing related metrics to S3.
The `description_of_work` column is checked to be complete, and `work_priority_priority_code` between
1 and 4 inclusively.

```python
from helpers import get_metrics_target_location
from pydeequ.checks import Check, CheckLevel
from pydeequ.repository import FileSystemMetricsRepository, ResultKey
from pydeequ.verification import VerificationSuite, VerificationResult, RelativeRateOfChangeStrategy

metrics_target_location = get_metrics_target_location()

metricsRepository = FileSystemMetricsRepository(spark_session, metrics_target_location)
resultKey = ResultKey(spark_session, ResultKey.current_milli_time(), {})

checkResult = VerificationSuite(spark_session) \
    .onData(df) \
    .useRepository(metricsRepository) \
    .addCheck(Check(spark_session, CheckLevel.Error, "data quality checks") \
        .hasMin("work_priority_priority_code", lambda x: x >= 1) \
        .hasMax("work_priority_priority_code", lambda x: x <= 4)  \
        .isComplete("description_of_work")) \
    .saveOrAppendResult(resultKey) \
    .run()
    
checkResult_df = VerificationResult.checkResultsAsDataFrame(spark_session, checkResult)
checkResult_df.show()
```

Here is a [list of checks][pydeequ-checks] that are available to use.

### Example Anomaly Detection

Anomaly detection uses historic metrics to determine if a value is invalid.
For example, we check if the size of a dataframe has increased by more than twice the previous size.

```python
from helpers import get_metrics_target_location
from pydeequ.verification import VerificationSuite, VerificationResult
from pydeequ.repository import FileSystemMetricsRepository, ResultKey
from pydeequ.anomaly_detection import RelativeRateOfChangeStrategy

metrics_target_location = get_metrics_target_location()

metricsRepository = FileSystemMetricsRepository(spark_session, metrics_target_location)
resultKey = ResultKey(spark_session, ResultKey.current_milli_time(), {})

anomalyCheckResult = VerificationSuite(spark_session) \
    .onData(df) \
    .useRepository(metricsRepository) \
    .addAnomalyCheck(RelativeRateOfChangeStrategy(maxRateIncrease = 2.0), Size()) \
    .saveOrAppendResult(resultKey) \
    .run()

anomalyCheckResult_df = VerificationResult.checkResultsAsDataFrame(spark_session, anomalyCheckResult)
anomalyCheckResult_df.show()
```

Here is a [list of anomaly detection types][pydeequ-checks] that are available to use.


[pydeequ-readme]: https://github.com/awslabs/python-deequ
[pydeequ-checks]: https://pydeequ.readthedocs.io/en/latest/pydeequ.html#module-pydeequ.checks
[pydeequ-anomaly-detection]: https://pydeequ.readthedocs.io/en/latest/pydeequ.html#module-pydeequ.anomaly_detection
