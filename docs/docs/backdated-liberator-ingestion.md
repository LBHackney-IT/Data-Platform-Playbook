---
title: Backdated Liberator data ingestion
description: "Description of the backdated ingestion process for Liberator data"
layout: playbook_js
tags: [playbook]
---

This section describes how a previous days Liberator dataset can be ingested onto the data platform. 

#### 1. Disable Cloudwatch s3 event trigger (optional)

The company who owns the dataset (Farthest Gate) uploads a zipped SQL dump of the whole database to S3 bucket in the data platform production AWS account at the path `s3://dataplatform-prod-liberator-data-storage/parking/`.
The file needs to be named `liberator_dump_210604.zip` where the date stamp at the end is the current date.

If this file has not been uploaded then you will need to obtain it from Farthest Gate and upload manually. If this is the case then
you will also need to disable the cloudwatch trigger before uploading

Open Cloudwatch and search for `liberator-to-rds-snapshot-event` and disable the trigger

#### 2. Trigger the ECS task to start the backdated ingestion process

* Open ECS and in `Task Definitions` select `liberator-to-rds-snapshot`
* Click on the `Deploy` dropdown and select `Run Task`
* This next page includes a lot of options, unless specified below leave all options as they are:
    * Exisiting Cluster: `dataplatform-prod-workers`
    * Launch Type: `FARGATE`
    * Platform Version: `LATEST`
* Expand the `Networking` tab
    * VPC: Select the one VPC available
    * Subnets: Select all subnets available one by one
    * Public IP: `Turned off`
* Expand the `Container overrides` section:
    * Expand the `liberator-to-rds-snapshot` section:
        * Click on  `Add Environment Variable`
        * Set the key to `IMPORT_DATE_OVERRIDE`
        * Set the value to the date used in the liberator dump file you wish to ingest. This date must be in the following format: yyyy-mm-dd eg. 2022-06-01
* Click `Create` at the bottom of the page

This can take a long time to run (>1hr), the logs for the task will output `Done` when the task is complete. 

#### 3. Automated ingestion of backdated liberator data starts

From here the ingestion is fully automated and closely follows the normal liberator 
ingestion process detailed in [Liberator Ingestion Process](./liberator-ingestion.md)

The difference between the normal liberator process and this one is that the date used to ingest from is taken from the `IMPORT_DATE_OVERIDE` environment
variable that you input in step 2 instead of always assuming we are ingesting data for the current day

This process triggers a backdated glue workflow that will transfer the data from the landing
zone into the raw zone in the correct partition. This glue workflow is called `parking-liberator-backdated-data-workflow`

When finished the backdated liberator data will be ingested into the raw zone 
in the partition date that matches the `IMPORT_DATE_OVERIDE` environment variable that you input in step 2

These onward tasks will also take a long time (>1hr) to complete.
#### 4. Enable Cloudwatch s3 event trigger (optional)

Please enable the cloudwatch trigger that you disabled in step 1. This is very important otherwise the next days liberator ingestion will not happen

