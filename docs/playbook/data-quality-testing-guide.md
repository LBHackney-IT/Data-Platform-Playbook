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
  
:::caution

There is a [defect with PyDeequ][defect with PyDeequ] which causes the Glue Spark session to hang.
While this issue still exists, we recommend wrapping your data quality verification code in a "try/finally" block (see example [here][try-finally-example]).

```python
try:
  ...
finally:
    spark_session.sparkContext._gateway.close()
    spark_session.stop()
```
:::

### Example Check

Here is an example of using deequ checks to validate a dataframe, and storing related metrics to S3.
The `description_of_work` column is checked to be complete, and `work_priority_priority_code` between
1 and 4 inclusively. 
There is also the option to include a hint message on each of the checks which will be 
displayed to the user in the event there is a failing constraint to help diagnose the problem.
For example, the `hasMin` check has the hint message: "`The minimum(work_priority_priority_code) >= 1')`". 

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
        .hasMin("work_priority_priority_code", lambda x: x >= 1, 'The minimum(work_priority_priority_code) >= 1') \
        .hasMax("work_priority_priority_code", lambda x: x <= 4, 'The maximum(work_priority_priority_code) <= 4')  \
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
from helpers import get_metrics_target_location, cancel_job_if_failing_quality_checks
from pydeequ.verification import VerificationSuite, VerificationResult
from pydeequ.repository import FileSystemMetricsRepository, ResultKey
from pydeequ.anomaly_detection import RelativeRateOfChangeStrategy

metrics_target_location = get_metrics_target_location()

metricsRepository = FileSystemMetricsRepository(spark_session, metrics_target_location)
resultKey = ResultKey(spark_session, ResultKey.current_milli_time(), {})

anomalyVerificationSuite = VerificationSuite(spark_session) \
    .onData(df) \
    .useRepository(metricsRepository) \
    .addAnomalyCheck(RelativeRateOfChangeStrategy(maxRateIncrease = 2.0), Size())

cancel_job_if_failing_quality_checks(VerificationResult.checkResultsAsDataFrame(spark_session, anomalyVerificationSuite.run()))

# Only update the metrics repository if cancel_job_if_failing_quality_checks succeeds.
# Otherwise the next time anomaly check runs it will compare against "incorrect" metrics.
anomalyVerificationSuite.saveOrAppendResult(resultKey).run()
```

Here is a [list of anomaly detection types][pydeequ-checks] that are available to use.

### Stopping Glue jobs when constraint checks fail

In order to ensure that only trusted data is outputted from your Glue job, it is important
to make an assertion against your constraints to check that they have been satisfied.

You can do this by including a helper function called `cancel_job_if_failing_quality_checks()`
in your script (see [helpers.py][helpers.py] for more info).
You can see an example usage in the [Example Anomaly Detection](#example-anomaly-detection) section.

When a constraint check fails, an error message will be provided which might look something like
the below message:

```markdown
  Exception: data quality checks. Value: 1.0 does not meet the constraint requirement!
  The minimum(work_priority_priority_code) >= 2
  | Anomaly check for Size(None). Value: 486.0 does not meet the constraint requirement!
```

Multiple constraint failures are delimited by a `|` character in the error message.


[pydeequ-readme]: https://github.com/awslabs/python-deequ
[pydeequ-checks]: https://pydeequ.readthedocs.io/en/latest/pydeequ.html#module-pydeequ.checks
[pydeequ-anomaly-detection]: https://pydeequ.readthedocs.io/en/latest/pydeequ.html#module-pydeequ.anomaly_detection
[helpers.py]: https://github.com/LBHackney-IT/Data-Platform/blob/main/scripts/helpers.py
[defect with PyDeequ]: https://github.com/awslabs/python-deequ/issues/7
[try-finally-example]: https://github.com/LBHackney-IT/Data-Platform/blob/6468778d865c6203d1d11df78805720da9cd22b5/scripts/elec_mech_fire_tv_aerials_cleaning.py#L79-L105
