---
title: Using Watermarks to Record AWS GLue Job States Between Runs
description: "Empty String"
layout: playbook_js
tags: [playbook]
---
# Using Watermarks to Record AWS Glue Job States Between Runs
A common pattern for ingesting data to the data analytics platform is to do an initial full load of any existing data, then incrementally load any change (delta).

Watermarks allow us to capture a check point or state from any previous execution, extract the incremental data since that check point and update this check point ready for the next run. Common attributes for these check points may be a _last_modified_ field or an _id_ you know to be sequential in nature. 

The data platform provides a DynamoDB table (_glue-watermarks_) to record these state logs and a python Watermarks class with methods to help interact with it.

## Example usage
First you need to import the Watermarks class. You can do this using the following statement along with other imports you may be including in your script.
```python
from scripts.helpers.watermarks import Watermarks
```

You then need to create a watermarks object to interact with underlying DynamoDB table. We do this by passing the table name argument, usually *glue-watermarks*.
```python
watermarks = Watermarks(table_name="glue-watermarks") 
```
Now create a watermark item using the _create_watermark_item_ method with the job name and id derived from the job and some arbitrary watermark data.

```python
###The getResolvedOptions method allows us to access the job name and run id from within the Glue job
from awsglue.utils import getResolvedOptions
args = getResolvedOptions(sys.argv)
job_run_id = args["JOB_RUN_ID"]
job_name = args["JOB_NAME"]

last_processed_data = "2023-03-16 15:45:00"
watermark_item = watermarks.create_watermark_item(job_id=job_name, run_id=job_run_id, latest_data=last_processed_data)
```
This method supports multiple keyword arguments so as well as the latest_data, we might also want to record the number of rows that were processed 
```python
rows_count = 808
watermark_item = watermarks.create_watermark_item(job_id=job_name, run_id=job_run_id, latest_data=last_processed_data, rows_collected=rows_count)
```
We can now add this watermark to the _glue-watermarks_ table 
```python
watermarks.add_watermark(watermark_item)
```
The last_processed_data value can now be retrieved for use in a subsequent execution of the Glue job like so
```python
most_recent_run_id = watermarks.get_most_recent_run_id(job_id=job_name)
watermark = watermarks.get_watermark(job_id=job_name, run_id=most_recent_run_id)
last_processed_date = watermark["watermarks"]["last_processed_date"]
```

