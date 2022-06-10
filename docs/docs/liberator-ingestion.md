---
title: Liberator data ingestion
description: "Description of the ingestion process for Liberator data"
layout: playbook_js
tags: [playbook]
---

This section describes how the Liberator dataset gets ingested into the data platform. 

#### 1. SQL dump is uploaded into the platform.

The company who owns the datset (Farthest Gate) uploads a zipped SQL dump of the whole databse to S3 bucket in the data platform production AWS account at the path `s3://dataplatform-stg-liberator-data-storage/parking/`.
The file needs to be named `liberator_dump_210604.zip` where the date stamp at the end is the current date.

#### 2. RDS snapshot it created from the SQL dump

The upload of the S3 file triggers a cloudwatch event that in turn triggers the following two things.

First, it starts a lambda (`*liberator-prod-to-pre-prod`) which copies the zip file to pre-production then the remaining steps run in both accounts.
This is a temporary process, when we have finished our move to production we will only copy down raw & refined zone liberator data with the rest of the data in the platform. 

Secondly, it triggers the start of an ECS task (`*liberator-to-rds-snapshot`). 
The task does the following:
- Deletes any RDS snapshots that already exist
- Unzips the file
- Creates a new database from the SQL dump
- Starts off the process to create a database snapshot from this database


#### 3. Getting the data from the RDS snapshot into the landing zone as parquet files

An event is published to an SNS topic (`*-rds-snapshot-to-s3`) on the creation of the snapshot being created. 
An SQS queue (`*-rds-snapshot-to-s3`) subscribes to this topic and a lambda function (`-*rds-snapshot-to-s3`) reads from that SQS queue.

The lambda function first finds the latest snapshot.
If it is still creating then it puts a message back into the queue with a 15 minute delay.
If it has finished creating, it starts an RDS export task that writes the snapshot to S3 (`s3://rds-export-storage`) in parquet format.

It then puts a message into another queue (`*-s3-to-s3-copier`) with a 15 minute delay.

Another lambda function (`*-s3-to-s3-copier`) read from the copier queue.
This lambda first checks if the export task has finished.
If not it puts another message back into the queue with a 15 minute delay.
If it has finished, it will copy all the files into the landing zone, with the standard date partitions added to the objects keys and any extra partitions added by the RDS export task removed.

The lambda function will then start the glue parking libertor workflow (`*parking-liberator-data-workflow`), which copies the data into the raw zone and runs a number of transformation jobs scheduled into the workflow.
