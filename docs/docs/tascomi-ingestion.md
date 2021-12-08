---
title: Tascomi data ingestion
description: "Details about the ingestion and pre-processing of Tascomi planning data in the platform"
layout: playbook_js
tags: [playbook]
---

This section describes how Tascomi Planning data gets ingested and transformed in the data platform. The steps are as follows:

- An initial full ingestion from Tascomi API (only once, happened thougout October 2021)
- A daily call to the Tascomi API to get latest updated records (increment)
- Parsing of the json data increment returned by the API
- Refinement of the parsed data to recast all columns to the right data type
- Creation of a full snapshot by applying the daily increment to the previous snapshot

# Initial full ingestion

# Daily ingestion of latest updated records

# Daily parsing of the json increments

# Daily refinement of the parsed increments

# Creation of the daily snapshot

# Full workflow and scheduling
The full workflow is defined in the [glue-tascomi-data terraform script] (https://github.com/LBHackney-IT/Data-Platform/blob/main/terraform/24-aws-glue-tascomi-data.tf). 
It defines a list of tables that needs updating everyday, and a list of static tables that are only updated weekly (these are the static tables like application types). The schedule is as follows:
- 3am: as many jobs as tables to update are triggered. Each job queries one API endpoint for latest updated records. That's 25 jobs on Sundays (including static tables), about half of that on other days.
- 4am: a crawler crawls the API results bucket
  - the previous crawler triggers the parsing job and the crawling of its results
  - the previous crawler triggers the recasting job and the crawling of its results
  - the previsous crawler triggers the daily snapshot creation job and the crawling of its results
- 5am: a crawler crawls the API results bucket again - this is in case the ingestion had not finished at 4am when the first crawling happened, and some tables were missed.
  - the previous crawler triggers the parsing job and the crawling of its results. Most of the time, there won't be new data process so the job will finish early.
  - the previous crawler triggers the recasting job and the crawling of its results. Most of the time, there won't be new data process so the job will finish early.
  - the previsous crawler triggers the daily snapshot creation job and the crawling of its results. Most of the time, there won't be new data process so the job will finish early.

