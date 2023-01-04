---
title: Optimizing Glue jobs
description: "Elements for optimizing glue jobs"
layout: playbook_js
tags: [playbook]
---

This article proposes a few principles to follow so that Glue jobs don’t run unnecessarily slowly.

# Making sure the job processes the minimum amount of data
Most of the time, we only are interested in the latest partition of the source data. 
When working from the *Trusted zone*, most of the time, only the latest data is available so there is nothing to do. But when working from the refined or the raw zone, historical partitions exist that we need to discard. This section describes several ways to do this.

As shown on the picture below, the typical job first loads some data from S3 using `Execution_context.get_dataframe` or `glueContext.create_dynamic_frame.from_catalog`, and then filters it down to only keep the latest records using `df.get_latest_partition` or
`df.get_latest_partition_optimized`.

![Typical steps when loading and processing data from S3](../../images/loading-processing-steps.png)

There are opportunities to filter data at both stages: before creating the dataframe and afterwards. Options are described below.

## Filtering data before creating the dataframe
In this section we’ll explore job bookmarks and pushdown predicates.

## Job bookmarks
### How it works
Job Bookmark is a Glue feature that operates at file level. It completely ignores partitions. 
With Bookmark on, the Glue job will only load files that have changed or have been created in the source bucket/folder since the last successful run. It will result in a smaller dataframe.

![Loading and processing data from S3 using Glue job bookmarks](../../images/loading-processing-steps-with-bookmarks.png)

### Pros
- Glue built-in feature.
- Rewind, reset, disable the bookmark in the Glue console without touching the script.
- The bookmark does not rely on crawlers, partitions or catalogue.
- Fine grained filtering: if a new file comes in the middle of the day while others have been processed a few hours earlier, you can run your job and only process the new one. You cannot do that if filtering at partition level.

### Cons
- If an old file changes in the source bucket, it will be processed, whatever partition it is in. To prevent this, additional precautions may be taken (extra filtering using SQL or pushdown predicate).
- Job bookmarks are not very transparent. It is difficult to know what was the last file processed. 
- Users may not know how, or not have permissions to, reset or rewind the bookmark (it used to be only accessible in the legacy pages). 

### Scenarios when not to use it
Bookmarks are not very convenient for a test job that is meant to process several times the same data. Not great if you have several data sources with different filtering requirements: you can choose to use the bookmark or not for each source (using the transformation_ctx in the loading block), but you cannot rewind or reset the bookmark for only one source.

### How to use it in a job
Enabling bookmarks requires 2 steps.
1. In the job parameters or in Terraform: Use the standard job parameter `bookmark=enable` (It is disabled by default in Glue console and in our Job terraform module).

![Enabling job bookmarks in Terraform](../../images/enabling-bookmark-in-terraform.png)

2. In the job script: for incremental data sources that need bookmarking, set the `transformation_ctx` to a unique string value when creating the data frame. For data sources that don't change and need to be processed each time, don't set a `transformation_ctx` and the bookmark won't apply.

![Setting the transformation_ctx for job bookmarks](../../images/setting-transformation-ctx-for-job-bookmarks.png)

### External doc about job bookmarks
https://docs.aws.amazon.com/glue/latest/dg/monitor-continuations.html
https://medium.com/analytics-vidhya/implementing-glue-etl-job-with-job-bookmarks-b76a8ba38dc8
Datasets with different update cycles: https://aws.amazon.com/blogs/big-data/process-data-with-varying-data-ingestion-frequencies-using-aws-glue-job-bookmarks/

## Pushdown predicates
When using a pushdown predicate, Glue will only load partitions (S3 folders) meeting the predicate. 
This example assumes import_date is a partition key: 

```
df = glueContext.create_dynamic_frame.from_catalog(
            name_space=database_name,
            table_name=table_name,
            push_down_predicate = "import_date=='20221001'")
```

This statement results in a smaller dataframe.

How to create the pushdown predicate in a script? Using the DP helpers, there are 2 ways to set the date dynamically:
- Using the current date and adding a few days buffer before this date (i.e. loading everything in the last n days)
- Using the latest partition date by checking the Glue catalogue (i.e. loading the latest written data, whatever its age is)

These 2 approaches and their pros/cons are described below.

### Pushdown predicate based on the current date + a few days buffer
This methos loads the current day's partition + the n previous ones.

![Loading and processing data from S3 using a pushdown predicate with a 1 day buffer](../../images/loading-processing-steps-with-pushdown-predicate-buffer.png)

#### Pros
This approach gives you a security buffer when you're not sure which is the latest non-empty partition. For instance, if a job runs every day except from the weekend, a 2 days buffer will ensure you always load some data, even on a Monday morning. A 1 day buffer is also useful if you’re not sure if the source data is produced before or after midnight.

#### Cons
- This method can be expensive (i.e. load more data than needed) if you want a large buffer.
- You can miss data if there is a longer gap than expected in the catalogue

#### Scenarios when not to use it
This is not suitable if the data source comes very irregularly, because you may not know which size of buffer to use.

#### How to use it in a job
1. Import the helper function called `create_pushdown_predicate`.
2. Call the `create_pushdown_predicate()` method in the `push_down_predicate` option of the `createDataFrame` block. Pass the name of the partition column as the first argument and the number of days before the current date as the second argument. For instance, to load the data written in the last 7 days, write:

![Write a pushdown predicate with a 7 days buffer](../../images/write-pushdown-predicate-with-7-days-buffer.png)

*Warning*: a buffer size of 0 means that you’re loading the full dataset.

3. Later in your script, you can use `get_latest_partitions()` on the resulting dataframe to only keep one day's worth of data.

### Pushdown predicate based on the lasted partition from the Glue catalogue
With this method, a helper queries the Glue catalogue with boto3 to get the latest partition value as a string, i.e. 20221005 (this string can also be returned). It then creates a pushdown predicate to load only this partition.

![Loading and processing data from S3 using a pushdown predicate fetching the latest date value from the Glue catalogue](../../images/loading-processing-steps-with-pushdown-predicate-boto3.png)

#### Pros
- This approach never loads more than one day’s worth of data, so it is cheap.
- It works even if you have no idea when source data was last produced
- You don't need a GetLatestPartitions query after loading your dataframe

#### Cons
This approach relies on the Glue catalogue being up-to-date and not containing empty partitions. If data is deleted, we want the corresponding partition to be removed from the catalogue. If crawlers are used to update the catalogue, they must be set up with the non-standard option as below::

![Crawler option to delete empty partitions](../../images/crawler-option-to-delete-empty-partitions.png)

