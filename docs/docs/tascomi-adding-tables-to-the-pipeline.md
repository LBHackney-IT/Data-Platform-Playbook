---
title: Adding Tascomi tables to the Data Platform (Simplified)
description: "How to add tables to the ingestion and refinement pipeline for Tascomi planning data and considerations along the way"
layout: playbook_js
tags: [playbook]
---

# How to add Tascomi tables to the Data Platform

This playbook guide aims to describe in simpler terms, how the Tascomi Planning data ingestion and refinement processes can be extended to include new table resources. The original full description of the ingestion can be found ► [here](https://playbook.hackney.gov.uk/Data-Platform-Playbook/docs/tascomi-ingestion).

This guide will lead you through updating and testing the Tascomi Glue jobs in Pre-production so that it will not be necessary to test the [Tascomi API](https://hackney-planning.tascomi.com/rest/v1/documentation.html?public_key=dd95bcd473f46a4325a4021d54500c7d#available-resources) endpoints using a local Jupyter installation.

This guide makes it unnecessary to add tables to the [column type dictionary](https://github.com/LBHackney-IT/Data-Platform/blob/main/scripts/jobs/planning/tascomi-column-type-dictionary.json) because this has already been done for all the current Tascomi API resources. There are some exceptions to the column types which are explained later.

## Who this playbook guide is intended for

You will be a data analysts or engineer with access to the Data Platform via the AWS `Management console`, so that your [AWS Start page](https://d-936715b9ec.awsapps.com/start#/), expanded below the `AWS Account` box, includes the following:

- `DataPlatformPlanningProd` listed under `DataPlatform-Production`
- `AWSPowerUserAccess` listed under `DataPlatform-Pre-Production`

This guide assumes a basic understanding of AWS Glue and Amazon Athena and how to use them. In additional have a  basic understanding of how Git and Github work, eg. how to create a new branch and subsequently merge it with the main trunk of development. In practice, analysts will in any case need to reach out to members, or other members, of the Data Platform team for code review and assistance in deploying the changes and rolling back faults in production.

### The primary scenario

This assumes the Tascomi API table resources needed and identified by Planning data users are not currently unavailable from the `dataplatform-prod-Tascomi-refined-zone` of the Production Data Platform and need to be added to the data pipeline as soon as possible.

This guide will fulfill this basic requirement. However other scenarios could arise, which although appear similar, will actually require alternative remedies as follows:

### Alternative scenarios

#### 1. Discovering new attributes added by the vendor, added to the static tables

 It is generally rare for vendors to frequently change REST API schemas that their customers rely upon. Far more likely with Tascomi though, are additions to attributes or coded-lookups required by changes to Planning procedures or legislation and implemented in the Tascomi software.

 In such cases, involving static tables, the existing ingestion pipeline should absorb those changes and it will be the job of data analysts to expose data linked to new attributes or lookups.

 Because changes to static tables occur infrequently, attributes added to static tables are ingested on a weekly basis, although ingestion could be manually triggered any time if needed. Analysts' data dashboards that rely upon such attributes should be designed with additions able to be incorporated later, being mindful of how such additions might have side effects, say with certain aggregates that are performed.

#### 2. Discovering changes made to Tascomi API by the vendor

Although it ought to be rare for the Tascomi vendor to change it's REST API schema, there are however, weaknesses in the Tascomi data model that could force such changes in future.

Indeed, it is conceivable that the main Tascomi `Application` table might be extended further with new columns. This is a high risk future requirement due to this table's insufficient normalization by the vendor, such that the `Application` table has grown to a colossal 752 columns. Alternatively, columns might have been logically grouped and migrated to separate tables, instead of being left in this unwieldy current form.

But if the main `Application` table were to change then the following guide will be of little immediate use since the existing Tascomi data pipeline would need to be re-worked and tested first. In such an event you would need to seek advise from the Data Platform team.

```:::info:::
ⓘ INFO  
Details of a toolkit in development, comprising AWS Glue & Athena scripts, including an Athena SQL script to be used later in Pre-production, will be added here later. This will allow the currently ingested table resources, with their API columns embedded within a single JSON column in the database, to be compared with the current API documentation so that schema changes can be detected before proceeding further.
```

---

## The primary scenario in detail

Consider your service request factored into the following ticket template. Each of the following sections may be transcribed to a new Jira ticket...

### User story

> **As a** [Data Analyst]  
> **I want** tables from [Tascomi] added to the Data Platform for exploration and analysis  
> **So that** I can better understand and continue to find answers to my questions about [Tascomi] data and further develop the data and insights that [Planning] needs.

### Agency

> **[Data Analyst or Engineer] will** seek to understand [Data Analyst]s' need for new tables and implement the required changes to [Tascomi] data ingestion.

### User acceptance behaviors

> **Given** I can log into my Hackney Council Google account  
> **and** I can access to the Data Platform via the AWS `Management console` link via [DataPlatformPlanningProd]
 and I am currently using `Amazon Athena`  
> **When** I select [dataplatform-stg-Tascomi-refined-zone] listed below `Database`  
> **and** I explore the list of tables below that  
> **and** expand the table names to see their columns listed  
> **Then** I should find [Tascomi] tables and column names with their respective equivalent data types from [[Tascomi API resources](https://hackney-planning.tascomi.com/rest/v1/documentation.html?public_key=dd95bcd473f46a4325a4021d54500c7d#available-resources)].

### Delivery

> **The [Data Analyst or Engineer] will** test the required changes first in Pre-Production to foresee and fix faults before going to in Production.  
> **The [Data Analyst or Engineer] will** communicate with the Data Platform Team to ensure the required changes are deployed correctly into Production and ensure unforeseen faults can be rolled back swiftly to minimize the impact on the exiting pipelines and minimize potential disruption for [the data users].  
> **The [Data Analyst or Engineer] will** communicate with [Data Analyst]s to ensure these acceptance behaviors are met.

---

## How to proceed with your code changes

### Create and check out a new branch in the [Data-Platform](https://github.com/LBHackney-IT/Data-Platform) Github repository for your code changes

All the changes outlined below will be committed to this branch as we go along.
The name of the branch should refer to the Jira ticket reference generated above. For example `DPP-999 Add Tascomi table resources` This will assist the Data Platform team in tracking the changes you are about to make.

### Check the tables to be added against the [column-type dictionary](https://github.com/LBHackney-IT/Data-Platform/blob/main/scripts/jobs/planning/tascomi-column-type-dictionary.json)

This JSON dictionary supports the 'recast increment' step that converts column strings, those not defined as text, into their correct data types. New table resources, before they can be fully added to the ingestion pipeline, must have all their columns checked against this dictionary.

There will be an opportunity to [test this later](#test-your-code-changes-in-pre-production) in Pre-Production

Although we have opportunities to fix anomalies for individual tables, as soon as such anomalies are detected it is wise to pause to discover if any existing resources are affected as per the [alternative scenarios](#alternative-scenarios) above.

```:::warning:::
⚠ WARNING  
Please be aware, at the time of writing, of two existing tables [asset_constraints] and
[pre_applications] that were deliberately left out of the column-type conversion dictionary due to other pipelines depending upon them in their unconverted state. This warning will be removed from the documentation when the issue finally resolved. 
```

### Add the new tables to the [Terraform script](https://github.com/LBHackney-IT/Data-Platform/blob/main/terraform/etl/24-aws-glue-tascomi-data.tf)

You will need to decide whether new tables should be ingested daily by appending them to the `tascomi_table_names` list, or ingested weekly by appending them to the `tascomi_static_tables` list.  

Studying what these tables represent and examining their relationship to each other via embedded `_id` columns, may help you decide which list each new table should be in. You may also refer to the [Tascomi API schema diagram](../docs/images/tascomi-API-schema.png) for help.

However, you will test your assumptions later in Pre-Production, so it is not necessary to decide correctly from the outset.

### Add the basic data quality tests in the relevant scripts

```:::note:::
ⓘ NOTE  
This section will be simplified later when it is no longer necessary to make changes to the following scripts other than in exceptional situations.
```

[Quality testing with PyDeequ](https://playbook.hackney.gov.uk/Data-Platform-Playbook/playbook/transforming-data/guides-to-testing-in-the-platform/data-quality-testing-guide) is parameterized inside each relevant script.

The [parse table increments script](https://github.com/LBHackney-IT/Data-Platform/blob/main/scripts/jobs/planning/tascomi_parse_tables_increments.py) has tests implemented. For your new tables to be quality-checked each day, you will need to open this script and add lines in this section for each new table name you want to add, as follows:

```python
dq_params = {'<table-name>': {'unique': ['id', 'import_date'], 'complete': 'id'}
             }
```

In this example, for the job to complete successfully, in the table called `api_response_<table-name>`, the combination of `'id'` and `'import_date'` should be unique, and the `'id'` field should be `'complete'`.

Because just on one 'complete' test is allowed per table you may decide to change the `'id'` on the right for another column from the table instead.

Elsewhere similar tests are implemented in the [create daily snapshots script](https://github.com/LBHackney-IT/Data-Platform/blob/main/scripts/jobs/planning/tascomi_create_daily_snapshot.py) as follows:

```python
dq_params = {'<table-name>': {'unique': ['id']}
             }
```

Here in this example, for the job to complete successfully, in the table called `increment_<table-name>`, just needs the `'id'` column to be unique.

## Test your code changes in Pre-Production

> [**Insert a detailed explanation with screen shots**]

## Deploy the code changes into Production

### Commit your code changes in the new branch and open a pull request

Unit tests will run automatically when you push the changes. At the moment, tests are implemented for all bits of the process except from the 'parse table increments' one.  

### Have your changes deployed with help from the Data Platform Team

At this time of writing, a tool is being developed to assist the Data Platform team in speedily rolling back faults that made it into production. In the meantime you will require assistance from team members with higher access privileges to manually perform fault rollback tasks which could take several hours depending on the nature of the fault. Therefore it is important to organize stand-by cover beforehand to ensure a member of the team is available to rollback data in production if needed. On previous occasions this has required some out-of-hours work to ensure the work was carried out before the scheduled overnight processes could run normally.
