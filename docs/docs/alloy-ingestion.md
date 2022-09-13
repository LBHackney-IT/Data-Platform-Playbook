---
title: Alloy data ingestion
description: "Description of the ingestion and refinement pipeline for Alloy Environmental Services data"
layout: playbook_js
tags: [playbook]
---

This article describes the Alloy data ingestion process.

## Overview of process

The following diagram describes the process steps that make up the pipeline for ingesting Alloy data:

![Alloy data ingestion process](../docs/images/alloy_pipeline.png)

- A Glue job that checks for existing data and requests either:
  - an initial extract of the full data set
  - an extract of records that have changed since the last extraction
- The returned data is then saved to the _raw zone_ as csv
- This data is then converted to parquet format and saved to s3
- Once this data is crawled, a second Glue job is triggered that creates a daily snapshot of the data, either:
  - the full initial extract
  - the updated records applied to the previous snapshot, similar to an UPSERT
- This job then also checks for a column header dictionary and where present applies the new headers
- This data is then crawled and made available in the _refined zone_

## Retrieving a data extract from the Alloy API

[*This Glue job*](https://github.com/LBHackney-IT/Data-Platform/blob/main/scripts/jobs/env_services/alloy_api_ingestion.py) sends queries to the Alloy API that request an extract of datasets described in [Alloy Query Syntax (AQS)](https://help.alloyapp.io/alloy-query-syntax/alloy-query-syntax.html) and uploaded to [this folder in the Data Platform GitHub repository](https://github.com/LBHackney-IT/Data-Platform/tree/main/scripts/jobs/env_services/aqs).

Each query creates a new job for that dataset that runs independently of any other queries.  

The script first checks whether an existing dataset for the query exists on platform, and where one does updates the query to retrieve only new or updated records. The default behaviour is to request all records. 

A request is then sent to the API and once the export is complete the data is downloaded and extracted as a csv in S3. This csv is then read from the S3 bucket to a spark data frame. Minimal transformation is applied to allow for conversion to parquet format and import datetime columns are added to allow for partitioning of the data. 

## Creating the daily snapshot

[*The second Glue job*](https://github.com/LBHackney-IT/Data-Platform/blob/main/scripts/jobs/env_services/alloy_create_snapshot.py) takes the returned data from the _raw zone_ and  appends it to previous extracts replacing any records that have been updated since the last load.

Additionally, the job checks for the presence of a column naming file in the _raw zone_ bucket with the following key:

> env-services/alloy/mapping-files/table_name.json

This takes the form:


>{
>"old_name1": "new_name1",
>"old_name2": "new_name2",
>...
>}

If a key is not present in the table no action will be taken, and similarly if there is no key for a column that is present in the table it remains unchanged. 
 


