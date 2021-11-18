---
id: data-quality-testing-guide
title: Guide to testing data quality in Glue Jobs
description: "A guide to continuous data quality testing in Glue Jobs"
layout: playbook_js
tags: [playbook]
---

## Resources

- [PyDeequ README][pydeequ-readme]

## Context

Data Quality tests are used to verify the quality of production datasets.
They are intended to make assertions against the data itself as opposed to the code when unit testing.

This guide introduces the Python library 'PyDeequ' which can be used to perform data quality testing in your Glue scripts.
PyDeequ allows you to calculate data quality metrics on your dataset, define and verify data quality constraints,
and be informed about changes in the data distribution.

## Pre-requisites of data quality testing

In order to efficiently test your data, it is necessary that you define and set the right expectations from the ETL process and the data itself.
It is therefore helpful to have a good understanding of the purpose of the data and think about the following questions:

- What do you want to achieve with your data?

  - Knowing what the intended purpose of the data is and what specific business questions it will help answer.

- What does high-quality data mean to you?
  - You must understand the metrics that will help you to measure data quality.

## Pre-requisites to using PyDeequ

1. Update the job arguments of your Glue job to include:

- Metrics repository S3 target location using the template format:

  ```
  "--deequ_metrics_location" = "s3://${module.<ZONE>_zone.bucket_id}/quality-metrics/department=<YOUR-DEPARTMENT-NAME>/dataset=<DATASET-NAME>/deequ-metrics.json"
  ```

  _`<ZONE>` refers to either: `raw`, `landing`, `refined`, or `trusted` S3 zones._

  _`<YOUR-DEPARTMENT-NAME>` and `<DATASET-NAME>` must be all lowercase with words separated by hyphens._

  For example:

  ```
  "--deequ_metrics_location" = "s3://${module.refined_zone.bucket_id}/quality-metrics/department=housing-repairs/dataset=repairs-axis/deequ-metrics.json"
  ```

  The metrics stored here can help you understand the profile of your data as well as help you come up with suitable constraints to measure the data quality of your dataset.

2. Import the following functions from PyDeequ in the top of your script.
   As you are writing your tests, you may discover that you need additional functions from the PyDeequ library.
   You may import these as required. The examples in this guide also introduce some functions that may be used.

```
from pydeequ.repository import FileSystemMetricsRepository, ResultKey
from pydeequ.verification import VerificationSuite, VerificationResult
from helpers.data_quality_testing import get_metrics_target_location, cancel_job_if_failing_quality_checks
```

:::caution

There is a [defect with PyDeequ][defect with pydeequ] which causes the Glue Spark session to hang.
While this issue still exists, we recommend wrapping your data quality verification code in a "try/finally" block (see example [here][try-finally-example]).

```python
try:
  ...
finally:
    spark_session.sparkContext._gateway.close()
    spark_session.stop()
```

:::

## Types of Data Quality tests

We introduce two types of data quality tests; **fact-checking of data values** and **historical analysis of the dataset** being processed.

- **Fact-checking of data values**: involves validating the values of columns and checking that they conform to set standards.
  For example, an ID column only contains unique values or values in a given column should be in a specific range, between a minimum and maximum value.

- **Historical analysis of the dataset**: involves analysing a dataset as it evolves over time and testing that the new data is consistent with a baseline.
  This requires having a profile or baseline of the data to compare to.

Below are examples of these two types of data quality tests.

### 1. Fact-checking of data values example

Here is an example of using Deequ checks to validate a dataframe, and storing related metrics to S3.
The `description_of_work` column is checked to be complete, and `work_priority_priority_code` between
1 and 4 inclusively.
There is also the option to include a hint message on each of the checks which will be
displayed to the user in the event there is a failing constraint to help diagnose the problem.
For example, the `hasMin` check has the hint message:

```
'The minimum(work_priority_priority_code) >= 1'
```

```python
from pydeequ.checks import Check, CheckLevel
from pydeequ.repository import FileSystemMetricsRepository, ResultKey
from pydeequ.verification import VerificationSuite, VerificationResult, RelativeRateOfChangeStrategy
from helpers.data_quality_testing import get_metrics_target_location

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

### 2. Historical analysis of the dataset - Example Anomaly Detection

Anomaly detection uses historic metrics to determine if a value is invalid.

:::caution
You can only run an anomaly check if there are historic metrics results in the metrics repository you are using.
If no historic metrics results exist, you will get the below error message:

```markdown
Can't execute the assertion: requirement failed:
There have to be previous results in the MetricsRepository!!
```

To avoid this error, run the standard verification constraint checks first (see [Fact-checking of data values example](#1-fact-checking-of-data-values-example) section above) and then add your anomaly constraint checks afterwards.
:::

For example, we check if the size of a dataframe has increased by more than twice the previous size.

```python
from pydeequ.verification import VerificationSuite, VerificationResult
from pydeequ.repository import FileSystemMetricsRepository, ResultKey
from pydeequ.anomaly_detection import RelativeRateOfChangeStrategy
from helpers.data_quality_testing import get_metrics_target_location, cancel_job_if_failing_quality_checks

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

Here is a [list of anomaly detection types][pydeequ-anomaly-detection] that are available to use.

## Providing tags to metrics for verification constraint checks

You can add tags to your verification metrics which may be helpful when reviewing the metric
results for a particular job.
To do this, include a dictionary containing key value pairs in the `ResultKey` as shown in example below:

```python
import sys
from awsglue.utils import getResolvedOptions

args = getResolvedOptions(sys.argv, ['JOB_NAME'])

resultKey = ResultKey(spark_session, ResultKey.current_milli_time(), {
    "source_database": source_catalog_database,
    "source_table": source_catalog_table,
    "glue_job_id": args['JOB_RUN_ID']
})
```

## Stopping Glue jobs when constraint checks fail

In order to ensure that only trusted data is outputted from your Glue job, it is important
to make an assertion against your constraints to check that they have been satisfied.

You can do this by including a helper function called `cancel_job_if_failing_quality_checks()`
in your script (see [data quality testing helpers][data-quality-testing-helpers] for more info).
You can see an example usage in the [Historical analysis of the dataset - Example Anomaly Detection](#2-historical-analysis-of-the-dataset---example-anomaly-detection) section.

When a constraint check fails, the Glue job will fail and, an error message will be provided which might look something like
the below message:

```markdown
Exception: data quality checks. Value: 1.0 does not meet the constraint requirement!
The minimum(work_priority_priority_code) >= 2
| Anomaly check for Size(None). Value: 486.0 does not meet the constraint requirement!
```

Multiple constraint failures are delimited by a `|` character in the error message.

## Commit your data quality tests to your Glue job

Once you are satisfied with your data quality tests, you will need to commit them to the Data Platform project so that they can be deployed to your existing Glue job.

- Submit your changes by referring to the [Committing changes][committing-changes] section of the **Using Github** guide.
  The Data Platform team needs to approve any changes to the code, so your change won't happen automatically.

:::important
If you are working with a new Glue job that has not yet been deployed to the Data Platform project, refer to [this guide][deploy-glue-jobs] to have it added to the project.
:::

## Email notifications of failing Glue jobs

Each time a Glue job fails as a result of failing constraint checks, an email notification with details of the error message is sent to the respective department, and their subscribed members.

The message will include:

- Name of the Glue job
- Error message from the failing constraint check
- Time of failure
- Job start time
- Job end time
- Job last modified time
- A link to log in to Hackney SSO and view the Job run details

In order to receive email notifications, you will need to ensure that you are subscribed to receive emails from your department's [Google group][google-groups] and that you have confirmed your subscription to receive AWS Notifications when prompted.

:::important
If you are still prototyping your data quality tests in Glue Studio, ensure the **PlatformDepartment** tag is correctly set in the _Advanced details_ section in the Glue job's _Job Details_ (see [Using Glue Studio][using-glue-studio]).
:::

[pydeequ-readme]: https://github.com/awslabs/python-deequ
[pydeequ-checks]: https://pydeequ.readthedocs.io/en/latest/pydeequ.html#module-pydeequ.checks
[pydeequ-anomaly-detection]: https://pydeequ.readthedocs.io/en/latest/pydeequ.html#module-pydeequ.anomaly_detection
[data-quality-testing-helpers]: https://github.com/LBHackney-IT/Data-Platform/blob/main/scripts/helpers/data_quality_testing.py
[defect with pydeequ]: https://github.com/awslabs/python-deequ/issues/7
[try-finally-example]: https://github.com/LBHackney-IT/Data-Platform/blob/6468778d865c6203d1d11df78805720da9cd22b5/scripts/elec_mech_fire_tv_aerials_cleaning.py#L79-L105
[using-glue-studio]: ../using-aws-glue/using-glue-studio
[google-groups]: https://groups.google.com/my-groups
[committing-changes]: ../../getting-set-up/using-github#committing-your-changes-to-the-data-platform-project
[deploy-glue-jobs]: ../using-aws-glue/deploy-glue-jobs
