---
title: Guide to testing data quality in Glue Jobs
description: "A guide to continuous data quality testing in Glue Jobs"
layout: playbook_js
tags: playbook
---

## Resources
- [PyDeequ README][pydeequ-readme]

## Prerequisites

- Need to include `s3://dataplatform-stg-glue-scripts/jars/deequ-1.0.3.jar` in the glue job extra jars (--extra-jars).
- Need to include `s3://dataplatform-stg-glue-scripts/python-modules/pydeequ-1.0.1.zip` in the glue job extra python files (--extra-py-files).
- Write your metrics repository data to the S3 location which uses the template format `s3://dataplatform-stg-EXAMPLE-zone/quality-metrics/department=EXAMPLE/dataset=EXAMPLE/deequ-metrics.json`

### Example Check

Here is an example of using deequ checks to validate a dataframe, and storing related metrics to S3.
The `description_of_work` column is checked to be complete, and `work_priority_priority_code` between
1 and 4 inclusively.

```python
metrics_target_location = "s3://dataplatform-stg-refined-zone/quality-metrics/department=housing-repairs/dataset=tv-aerials-cleaned/deequ-metrics.json"

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
```

Here is a [list of checks][pydeequ-checks] that are available to use.

### Example Anomaly Detection

Anomaly detection uses historic metrics to determine if a value is invalid.
For example we check if the size of a dataframe has increased by more than twice the previous size.

```python
metrics_target_location = "s3://dataplatform-stg-refined-zone/quality-metrics/department=housing-repairs/dataset=tv-aerials-cleaned/deequ-metrics.json"

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
