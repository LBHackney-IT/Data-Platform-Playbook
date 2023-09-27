---
title: Adding Tascomi tables to the Data Platform (Simplified)
description: "How to add tables to the ingestion and refinement pipeline for Tascomi planning data and considerations along the way"
layout: playbook_js
tags: [playbook]
---

<!---
This markdown has Docusaurus :::features::: that will need uncommenting and enabling later...
--->

# How to add Tascomi tables to the Data Platform

This playbook guide aims to describe in simple terms, how the Tascomi Planning data ingestion and refinement processes can be extended to include new table resources. The original full description of the ingestion can be found ► [here](https://playbook.hackney.gov.uk/Data-Platform-Playbook/docs/tascomi-ingestion).

This guide will lead you through updating and testing the Tascomi Glue jobs in Pre-production so that it will not be necessary to test the [Tascomi API](https://hackney-planning.tascomi.com/rest/v1/documentation.html?public_key=dd95bcd473f46a4325a4021d54500c7d#available-resources) endpoints using a local Jupyter installation.

This guide makes it unnecessary to add tables to the [column type dictionary](https://github.com/LBHackney-IT/Data-Platform/blob/main/scripts/jobs/planning/tascomi-column-type-dictionary.json) because this has already been done for all the current Tascomi API resources. There are some exceptions to the column types which are explained later.

## Who this playbook guide is intended for

**Given** you are a data analysts or engineer with access to the Data Platform via the AWS `Management console`,  
**and** your [AWS Start page](https://d-936715b9ec.awsapps.com/start#/) expands below the `AWS Account` box to show the following:

- `DataPlatformPlanningProd` listed under `DataPlatform-Production`
- `AWSPowerUserAccess` listed under `DataPlatform-Pre-Production`

This guide assumes a basic understanding of AWS Glue and Amazon Athena and how to use them. In additional have a  basic understanding of how Git and Github work, eg. how to create a new branch and subsequently merge it with the main trunk of development. In practice, analysts will in any case need to reach out to members, or other members, of the Data Platform team for code review and assistance in deploying the changes and rolling back faults in production.

### The scenario

A data user has identified Tascomi API table resources needed by Planning, which are not currently unavailable from the `dataplatform-prod-Tascomi-refined-zone` of the Production Data Platform, and therefore must be added to the Tascomi data pipeline.

This guide will take you through the process of adding those new table resources. However other scenarios might arise, which although based on a need for Tascomi data resources by data users, might actually require some alternative remedy as follows:

### Alternative scenarios considered

#### a) Discovering new data attributes were added by the vendor, added to the static tables

 It is generally rare for vendors to frequently change REST API schemas that their customers rely upon. Far more likely with Tascomi though, are additions to attributes or coded-lookups, possibly required by changes to Planning procedures or legislation and implemented in the Tascomi software by the vendor.

 In such cases, involving static tables, the existing ingestion pipeline should automatically absorb those changes and it will be the job of data analysts to expose data linked to new attributes or lookups, in their own applications or pipelines. Indeed, they should be mindful of how any such additions in future might have side effects, eg. consider how aggregates are performed by their applications.

 Because changes to static tables occur infrequently, any attributes added to static tables will be ingested on a weekly basis. But on discovery if this is needed sooner, ingestion could be manually triggered any time.

#### b) Discovering changes made to Tascomi API by the vendor

Although it ought to be rare for the Tascomi vendor to change it's REST API schema, there remain however, weaknesses in the Tascomi data model that could force such changes in future.

Indeed, it is conceivable that the main Tascomi `Application` table might be extended further with new columns. This is a high risk future requirement due to this table's insufficient normalization by the vendor, such that the `Application` table has grown to a colossal 752 columns. Alternatively, columns might have been logically grouped and migrated to separate tables, instead of being left in this unwieldy current form.

But if the main `Application` table were to change then the following guide will be of little immediate use since the existing Tascomi data pipeline would need to be re-engineered and tested first. In such an event you would need to seek advise from the Data Platform team.

<!---:::info--->  
>**`ⓘ` INFO**  
>Details of a toolkit in development, comprising AWS Glue & Athena scripts, including an Athena SQL script to be used later in Pre-production, will be added here later. This will allow the currently ingested table resources with their API columns embedded within a single JSON column in the database, to be compared with the current API documentation so that schema changes can be discovered before proceeding further.
<!---:::--->  

---

## The scenario in detail

Consider your service request factored into the following ticket template. Each of the following sections may be transcribed to a new [***numbered Jira ticket***](#the-scenario-in-detail)...

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

### Creating and checking out a new Git branch for your code changes

**Given** you have a `Github` account  
**and** have been added to the [LBHackney-IT/Data-Platform](https://github.com/LBHackney-IT/Data-Platform) repository  
**and** have set yourself up to use Git on your computer, preferably using a code editor eg. [Visual Code Studio](https://code.visualstudio.com/download).  
**When** you create and check out a new-named Git branch...

The name of the branch should refer to the [***Jira ticket number***](#the-scenario-in-detail) generated above. For example `"DPP-426 Add Tascomi table resources"`, with `DPP-426` substituted by the [***ticket number***](#the-scenario-in-detail), which will assist the Data Platform team in tracking the changes you are about to make.

**Then** all the changes outlined below should be committed to this branch as we go along.

### Checking the tables to be added against entries in the [column-type dictionary](https://github.com/LBHackney-IT/Data-Platform/blob/main/scripts/jobs/planning/tascomi-column-type-dictionary.json)

This JSON dictionary supports the 'recast increment' step that converts column strings, those not defined as text, into their correct data types. New table resources, before they can be fully added to the ingestion pipeline, must have all their columns checked against this dictionary.

There will be an opportunity to [test this later](#testing-your-code-changes-in-pre-production) in Pre-Production

Although we have opportunities to fix API anomalies for individual tables as they are discovered, because that might imply the vendor had changed it's API specification in other ways, you might want to pause and discover if any existing pipeline resources have been affected by API changes as per the [alternative scenarios considered](#alternative-scenarios-considered) above.

<!---:::warning--->  
>**`⚠` WARNING**  
>Please be aware, at the time of writing, of two existing tables `asset_constraints` and `pre_applications` that were deliberately left out of the column-type conversion dictionary due to other pipelines depending upon them in their unconverted state. The plan is to remove this warning from the documentation only when the issue is finally resolved.
<!---:::--->  

### Adding the new tables to the [Terraform script](https://github.com/LBHackney-IT/Data-Platform/blob/main/terraform/etl/24-aws-glue-tascomi-data.tf)

You will need to decide whether new tables should be ingested daily by appending them to the `tascomi_table_names` list, or ingested weekly by appending them to the `tascomi_static_tables` list.  

Studying what these tables represent and examining their relationship to each other via embedded `_id` columns, may help you decide which list each new table should be in. You may also refer to the [Tascomi API schema diagram](../docs/images/tascomi-API-schema.png) for help.

However, you will test your assumptions later in Pre-Production, so it is not necessary to decide correctly from the outset. So if you are really not sure about where some tables belong, just add them to the `tascomi_table_names` list for bow and we can move them to the to the `tascomi_static_tables` later if needed.

### Add the basic data quality tests in the relevant scripts

<!---:::note--->  
>**`ⓘ` NOTE**  
>This section will be simplified later when it is no longer necessary to make changes to the following scripts other than in exceptional situations.
<!---:::--->  

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

---

## Testing your code changes in Pre-Production

This section will guide you through manually running AWS Glue scripts in Pre-production for just the new tables you want to add to make sure each stage ETL process will work and we can check the results using Amazon Athena. Before you proceed make sure you are already logged into the AWS `Management console` via `AWSPowerUserAccess` listed under `DataPlatform-Pre-Production`.

**Given** you have navigated to `AWS Glue` via the console menu,  
**and** from the menu selected [`ETL jobs`](https://eu-west-2.console.aws.amazon.com/gluestudio/home?region=eu-west-2#/jobs),  
**When** in the search field under `Your Jobs` where it says *Filter jobs*, you type: ***stg tascomi***,  
**Then** you should see listed under `Job name` below, all the current Glue ETL jobs belonging to the current Tascomi data ingestion pipeline.

If you do not see the following ingestion jobs listed, which should have been generated in Pre-Production by Terraform Continuous Integration, then please consult the Data Platform team:

1. `stg tascomi_api_ingestion`
2. `stg tascomi_parse_tables_increments`
3. `stg tascomi_recast_tables_increments`
4. `stg tascomi_create_daily_snapshot`

All being well, use the following sections to test your code changes, step by step.

### 1. Testing the Tascomi API Ingestion

You must test your new table resources, one at a time, to ensure the Tascomi API does what we expect. In the sections further, on involving the subsequent jobs, you will be able to test all your tables at once, so the testing process will speed up as you go along.

#### 1.1 Clone the API ingestion job

This section covers cloning a job in detailed steps. Sections beyond this that involve cloning other jobs will not repeat this level of detail since the process is practically the same and you probably will remember how you did it the first time around, although you can always refer back here if you need to.

**`🖱` Step 1.1.1**  
>**Given** the ingestion jobs are shown as below...
![screenshot-1-1-1](../docs/images/tascomi-adding-tables-screenshot-1-1-1.png)  
**When** you check `☑` against `stg tascomi_api_ingestion`  
**and** select `Clone Job` from the `Actions` menu  
**Then** you should immediately be taken to `Glue Studio`.

**`🖱` Step 1.1.2**  
>**Given** the cloned API ingestion job is shown in `Glue Studio` as below...  
![screenshot-1-1-2](../docs/images/tascomi-adding-tables-screenshot-1-1-2.png)  
**When** you change `🖊` the job name from `stg tascomi_api_ingestion-copy` to  
`stg tascomi_api_ingestion-TEST-DPP-426` with `DPP-426` substituted by the [***ticket number***](#the-scenario-in-detail)  
**and** click `Save` over on the right  
**Then** you may edit the script name under `Job details`.

**`🖱` Step 1.1.3**  
>**Given** the `Job details` of the cloned job is shown in `Glue Studio` as below...  
![screenshot-1-1-3](../docs/images/tascomi-adding-tables-screenshot-1-1-3.png)  
**When** you expand `Advanced Properties` below `Job details`  
**and** change the script name from `tascomi_api_ingestion.py` to  
`tascomi_api_ingestion-DPP-426.py` with `DPP-426` substituted by the [***ticket number***](#the-scenario-in-detail)  
**and** click `Save` over on the right  
**Then** you may add the `Resource` parameter to this job.

**`🖱` Step 1.1.4**  
>**Given** the `Advanced Properties` is expanded below the `Job details` of the cloned job in `Glue Studio` as shown below  
**and** the script name was changed to `tascomi_api_ingestion-DPP-426.py` with `DPP-426` substituted by the [***ticket number***](#the-scenario-in-detail)...  
![screenshot-1-1-4](../docs/images/tascomi-adding-tables-screenshot-1-1-4.png)  
**When** you scroll down `Advanced Properties` to `Job parameters`  
**and** add a new `Resource` entry
**and** click `Save` over on the right  
**Then** you may begin testing each new API resource using this now fully cloned job.

#### 1.2 Test each new API resource using the cloned job
<!---TO DO--->  
>[**Insert a detailed steps with screen shots**]
<!---TO DO--->  

### 2. Testing the Tascomi Parse table increments job

Unlike the previous section, in this section and sections involving the subsequent jobs, you will be able to test all your tables at once, so the testing process will speed from this point onward.

#### 2.1 Clone the Tascomi Parse Tables Increments job
<!---TO DO--->  
>[**Insert abridged steps without need for screen shots**]
<!---TO DO--->  

#### 2.2 Edit the Tascomi Parse Tables Increments job to reflect your code changes
<!---:::note--->  
>**`ⓘ` NOTE**  
>In the next development iteration, Section 2.2 will be only be required for testing changes to this script for handling exceptional situations.
<!---:::--->  

#### 2.3 Test the Tascomi Parse Tables Increments job
<!---TO DO--->  
>[**Insert a detailed steps with screen shots**]
<!---TO DO--->  

### 3. Testing the Tascomi Recast table increments job
<!---TO DO--->  
>[**Insert abridged sections and steps without too much need for screen shots**]
<!---TO DO--->  

### 4. Testing the Tascomi Create_daily_snapshot job
<!---TO DO--->  
>[**Insert abridged sections and steps without too much need for screen shots**]
<!---TO DO--->  

---

## Deploy the code changes into Production

### Commit your code changes in the new branch and open a pull request

Unit tests will run automatically when you push the changes. At the moment, tests are implemented for all bits of the process except from the 'parse table increments' one.  

### Have your changes deployed with help from the Data Platform Team

At this time of writing, a tool is in our development backlog for assisting the Data Platform team in speedily rolling back faults that made it into production. In the meantime you will require assistance from team members with higher access privileges to manually perform fault rollback tasks which could take several hours depending on the nature of the fault. Therefore it is important to organize stand-by cover beforehand to ensure a member of the team is available to rollback data in production if needed. On previous occasions this has required some out-of-hours work to ensure the work was carried out before the scheduled overnight processes could run normally.
