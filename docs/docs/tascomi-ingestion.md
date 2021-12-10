---
title: Tascomi data ingestion
description: "Description of the ingestion and refinement pipeline for Tascomi planning data"
layout: playbook_js
tags: [playbook]
---

This section describes how Tascomi Planning data gets ingested and refined in the data platform. The process relies on [Tascomi API](https://hackney-planning.tascomi.com/rest/v1/documentation.html?public_key=dd95bcd473f46a4325a4021d54500c7d#available-resources) and is composed of the following steps steps:

- An initial full ingestion from Tascomi API (only once, happened thougout October 2021)
- A daily call to the Tascomi API to get latest updated records (increment)
- Parsing of the json data increment returned by the API
- Refinement of the parsed data to recast all columns to the right data type
- Creation of a full snapshot by applying the daily increment to the previous snapshot

# Details of individual steps
## 0 - Initial full ingestion
This [process](https://eu-west-2.console.aws.amazon.com/gluestudio/home?region=eu-west-2#/editor/job/stg%20tascomi_api_ingestion_planning/script) queries one API endpoint (e.g. the applications endpoint) and writes the data into a table of the same name.

This process wrote into the raw zone, in the 'api_response' bucket. The data is partitioned by import_date.
## 1 - Daily ingestion of latest updated records
This [process](https://eu-west-2.console.aws.amazon.com/gluestudio/home?region=eu-west-2#/editor/job/stg%20tascomi_api_ingestion_planning/script) is the same as the previous one, but it only queries the data updated since a certain date. It relies on the ```last_updated``` column that is present on all Tascomi tables.

This process writes into the raw zone, in the 'api_response' bucket. The data is partitioned by import_date.
## 2 - Daily parsing of the json increments
This [process](https://eu-west-2.console.aws.amazon.com/gluestudio/home?region=eu-west-2#/editor/job/stg%20tascomi_parse_tables_increments_planning/script) uses job bookmarking to only process new increments.
It processes all tables in a loop. For each table, the large json blob containing all the fields is exploded into separate textual columns.

This process writes into the raw zone, in the 'parsed' bucket. The data is partitioned by import_date.
## 3 - Daily refinement of the parsed increments
This [process](https://eu-west-2.console.aws.amazon.com/gluestudio/home?region=eu-west-2#/editor/job/stg%20tascomi_recast_tables_increments_planning/script) uses job bookmarking to only process new increments.
It processes all tables in a loop. For each table, the text columns are converted into correct data types (dates, boolean etc.). It uses a [column type dictionary](https://github.com/LBHackney-IT/Data-Platform/blob/main/scripts/jobs/planning/tascomi-column-type-dictionary.json) saved in a separate json file. This dictionary was created semi-automatically with FME (an ETL tool used in the Data and Insight team), by converting the list of columns described in the [API endpoints documentation](https://hackney-planning.tascomi.com/rest/v1/documentation.html?public_key=dd95bcd473f46a4325a4021d54500c7d#available-resources).

This process writes into the refined zone, in the 'increment' bucket. The data is partitioned by import_date.
## 4 - Creation of the daily snapshot
This [process](https://eu-west-2.console.aws.amazon.com/gluestudio/home?region=eu-west-2#/editor/job/stg%20tascomi_create_daily_snapshot_planning/script) combines the latest snapshot and all increments created since that day, to create a new snapshot. It uses pushdown predicate and job bookmarking to only process new increments. Like the 2 previous steps, it processes all tables in a loop. If several days increments need to be applied, the process first ensures that no duplicate records are present, by only keeping the latest updated one (for instance, if a planning application has changed status 2 times, it only keeps the record with the latest status). To apply the increments to the previous snapshot, we just replace pre-existing records with the newer version, using the unique id. A new column 'snapshot_date' is created and set to the current date. 

This process writes into the refined zone, in the 'snapshot' bucket. The data is partitioned by snapshot_date.

# Full workflow and scheduling
The full workflow is defined in the [glue-tascomi-data terraform script](https://github.com/LBHackney-IT/Data-Platform/blob/main/terraform/24-aws-glue-tascomi-data.tf). 
It defines a list of tables that needs updating everyday, and a list of static tables that are only updated weekly (these are the static tables like application types). The schedule is as follows:
- 3am: as many jobs as tables to update are triggered. Each job queries one API endpoint for latest updated records. That's 25 jobs on Sundays (including static tables), about half of that on other days.
- 4am: a crawler crawls the API results bucket
  - the previous crawler triggers the parsing job and the crawling of its results
  - the previous crawler triggers the recasting job and the crawling of its results
  - the previous crawler triggers the daily snapshot creation job and the crawling of its results
- 5am: the API results bucket gets crawled again - this is in case the ingestion had not finished at 4am when the first crawling happened, and some tables were missed.
  - the previous crawler triggers the parsing job and the crawling of its results. Most of the time, there won't be new data process so the job will finish early.
  - the previous crawler triggers the recasting job and the crawling of its results. Most of the time, there won't be new data process so the job will finish early.
  - the previous crawler triggers the daily snapshot creation job and the crawling of its results. Most of the time, there won't be new data process so the job will finish early.

# Structure of the S3 buckets and Glue tables
The data created along the process (initial full load, increments and snapshots) is stored in S3 in the raw and refined zones, with one folder per table.

The ready-for-use data is in the Refined zone Planning bucket, in the snapshot area. The corresponding tables in the Glue catalog are simply called applications, appeals, etc. To get the latest data, the query must refer to the snapshot_date latest partition, for example 
```
select count(*) from "dataplatform-stg-tascomi-refined-zone"."applications" where snapshot_date = (select max(snapshot_date) from "dataplatform-stg-tascomi-refined-zone"."applications")
```
The refined increments are in the Refined zone Planning bucket, in the increments area. The tables are prefixed with increment_. To count the increment loaded on a specific day, you could use: 
```
select count(*) from "dataplatform-stg-tascomi-refined-zone"."increment_applications" where import_date = '20211208'
```

The parsed increments are in the Raw zone Planning bucket, in the parsed area. The tables are not prefixed, and partitioned by import_date with. To count the increment loaded on a specific day, you could use: 
```
select count(*) from "dataplatform-stg-tascomi-raw-zone"."applications" where import_date = '20211208'
```

The raw data returned by the API is in the Raw zone Planning bucket, in the api_response area. The tables are prefixed with api_response_, and partitioned by import_date with. To count the increment loaded on a specific day, you could use: 
```
select count(*) from "dataplatform-stg-tascomi-raw-zone"."api_response_applications" where import_date = '20211208'
```
