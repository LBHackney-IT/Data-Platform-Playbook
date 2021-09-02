---
title: Guide to testing data quality in Glue Jobs
description: "A guide to testing data quality in Glue Jobs"
layout: playbook_js
tags: playbook
---

## Resources
- [PyDeequ README][pydeequ-readme]

Better quality data

## How?

- Need the inclue `s3://dataplatform-stg-glue-scripts/jars/deequ-1.0.3.jar` in the glue job extra jars.

### Saving metrics to S3

Here is an example of analysing your data and saving the resulting metrics to S3.

```python
# s3_bucket_target is the path where the output data is saved in S3.
metrics_target_location = f"{s3_bucket_target}/metrics.json"
metricsRepository = FileSystemMetricsRepository(spark, metrics_target_location)

# Add any tags to be saved against the metrics here.
# A timestamp is already added on the line below.
tags = {'data_set': 'housing_repairs_elec_mech_fire_tv_aerials_cleaned', 'department': 'housing-repairs'}
resultKey = ResultKey(spark, ResultKey.current_milli_time(), tags)

# Add as many analyzers as you list here.
analysisResult = AnalysisRunner(spark) \
                    .onData(df) \
                    .addAnalyzer(Size()) \
                    .addAnalyzer(Completeness("description_of_work")) \
                    .addAnalyzer(Minimum("work_priority_priority_code")) \
                    .addAnalyzer(Maximum("work_priority_priority_code")) \
                    .useRepository(metricsRepository) \
                    .saveOrAppendResult(resultKey) \
                    .run()
```

Here is a [list of analysers][pydeequ-analysers] that are available to use.

Metrics which are calculating when [validating against constraints](#validating-against-a-pre-defined-constraints) can be saved to the metrics file at the point of validation. 

### Validating against a pre defined constraints





[pydeequ-readme]: https://github.com/awslabs/python-deequ 
[pydeequ-analysers]: https://pydeequ.readthedocs.io/en/latest/pydeequ.html#pydeequ.analyzers.ApproxCountDistinct