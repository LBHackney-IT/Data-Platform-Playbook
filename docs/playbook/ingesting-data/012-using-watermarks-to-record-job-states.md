---
title: Using Watermarks to Record AWS GLue Job States Between Runs
description: 
layout: playbook_js
tags: [playbook]
---
# Using Watermarks to Record AWS Glue Job States Between Runs
A common pattern for ingesting data to the data platform is to do an initial full load of any existing data, then incrementally load any change (delta).

Watermarks allow us to capture a check point or state from any previous run, extract the incremental data since that check point and update this check point ready for the next run. Common attributes for these check points may be a _last_modified_ field or a _id_ you know to be sequential in nature. 

The data platform provides a DynamoDB table (_glue-watermarks_) to record these state logs and a python Watermarks class with methods to help interact with it.

## Example usage
First you need to import the Watermarks class. You can do this using the folling statement along with other imports you may be including in your script.
```python
from scripts.helpers.watermarks import Watermarks
```

You then need to create a Watermarks object  to interact with underlying DynamoDB table. We do this by passing the table name argument, usually *glue-watermarks*.
```python
watermarks = Watermarks("glue-watermarks") 
```

Let's suppose we have a Glue job that extracts the data from a table that includes a _last_modified_ field that allows us to know when an item was last changed. Each time the Glue job is run it records the maximum value for this _last_modified_ field and writes this to the _glue_watermarks_ table. We can retrieve 
watermark items for a given job using the _get_watermark()_ method, by default this will return the most recent watermark item.
```python
args = getResolvedOptions(sys.argv)
job_run_id = args["JOB_RUN_ID"]
job_name = args["JOB_NAME"] #the name of the current job

watermark_from_previous_run = watermarks.get_watermark(job_name)
```
We can then use this value to filter the table for new and updated records
```python
df_increment = df.filter(
    df.last_modified > watermark_from_previous_run["watermarks"]["last_modified"]
)
```
Having loaded and transformed the new records we want to update the watermark for the job with the _last_modified_ value.
```python
max_modified_date = df_increment.agg({"last_modified": "max"}).collect()[0][0]
watermark = watermarks.create_watermark_item(
    job_name, job_run_id, last_modified=max_modified_date
)
```
It may, for example, also be useful to know how many rows were included in the most recent increment. The _create_watermark_item()_ method supports multiple keyword arguments that can used to record different state attributes from a job run.
```python
increment_row_count = df_increment.count()
watermark = watermarks.create_watermark_item(
    job_name, job_run_id, last_modified=max_modified_date, rows_extracted=increment_row_count
)
```
Once a watermark item is created with the attributes we want to record from the job we need to update the _glue-watermarks_ table with this new item. We do this using the _add_watermark()_ method:
```python
watermarks.add_watermark(watermark)
```
