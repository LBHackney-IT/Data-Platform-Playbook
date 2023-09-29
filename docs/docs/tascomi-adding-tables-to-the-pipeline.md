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

>**Given** you are a data analyst or engineer with access granted to the ***Data Platform***  
**~and** your [AWS Start page](https://d-936715b9ec.awsapps.com/start#/) expands below the `AWS Account` box to show:

- `DataPlatformPlanningProd` listed under `DataPlatform-Production`
- `AWSPowerUserAccess` listed under `DataPlatform-Pre-Production`

>**When** you enter via the AWS `Management console`  
**Then** you should have access to `AWS Glue` and `Athena` via the **☷ Services** menu

This guide assumes a basic understanding of `AWS Glue` and `Amazon Athena` and how to use them. In additional have a  basic understanding of how ***Git*** and ***Github*** work, eg. how to create a new branch and subsequently merge it with the main trunk of development. In practice, analysts will in any case need to reach out to members, or other members, of the Data Platform team for code review and assistance in deploying the changes and rolling back faults in production.

### The scenario

A data user has identified ***Tascomi API resources*** needed by **Planning**, which are not currently unavailable as tables in the `dataplatform-prod-Tascomi-refined-zone` of the ***Production Data Platform***, and therefore must be added to the ***Tascomi data pipeline***.

This guide will take you through the process of adding new table resources. However other scenarios might arise, which although based on similar needs for Tascomi data resources by data users, might actually require alternative remedies, as follows:

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
> **~and** I can access to the Data Platform via the AWS `Management console` link via [DataPlatformPlanningProd]
 and I am currently using `Amazon Athena`  
> **When** I select [dataplatform-stg-Tascomi-refined-zone] listed below `Database`  
> **~and** I explore the list of tables below that  
> **~and** expand the table names to see their columns listed  
> **Then** I should find [Tascomi] tables and column names with their respective equivalent data types from [[Tascomi API resources](https://hackney-planning.tascomi.com/rest/v1/documentation.html?public_key=dd95bcd473f46a4325a4021d54500c7d#available-resources)].

### Delivery

> **The [Data Analyst or Engineer] will** test the required changes first in Pre-Production to foresee and fix faults before going to in Production.  
> **The [Data Analyst or Engineer] will** communicate with the Data Platform Team to ensure the required changes are deployed correctly into Production and ensure unforeseen faults can be rolled back swiftly to minimize the impact on the exiting pipelines and minimize potential disruption for [the data users].  
> **The [Data Analyst or Engineer] will** communicate with [Data Analyst]s to ensure these acceptance behaviors are met.

---

## How to proceed with your code changes

### Creating and checking out a new Git branch for your code changes

>**Given** you have a ***Github*** account  
**~and** have been added to the [LBHackney-IT/Data-Platform](https://github.com/LBHackney-IT/Data-Platform) repository  
**~and** have set yourself up to use ***Git*** on your computer, preferably using a code editor eg. [Visual Code Studio](https://code.visualstudio.com/download),  
**When** you *create* and *check out* a new ***Git*** *branch*  
**~and** the name of *your new branch* refers to the [***Jira ticket number***](#the-scenario-in-detail) generated above. For example `"DPP-426 Add Tascomi table resources"`, with `DPP-426` substituted by the [***ticket number***](#the-scenario-in-detail),  
**Then** your *branch name* will assist the ***Data Platform team*** in tracking your changes  
**~and** you may proceed to commit all your changes, as outlined below, via *your own branch*.

### Checking the tables to be added against entries in the column-type dictionary

This [JSON dictionary](https://github.com/LBHackney-IT/Data-Platform/blob/main/scripts/jobs/planning/tascomi-column-type-dictionary.json) supports the **'recast increment'** steps that convert column strings, those not defined as text by the ***Tascomi API***, into their correct data types for the ***Data Platform***. New resource tables, before they can be fully added to the ingestion pipeline, must have all their columns checked against this dictionary.

There will be an opportunity to [test this later](#testing-your-code-changes-in-pre-production) in Pre-Production

Although we have opportunities to fix API anomalies for individual tables as they are discovered, because that might imply the vendor had changed it's API specification in other ways, you might want to pause and discover if any existing pipeline resources have been affected by API changes as per the [alternative scenarios considered](#alternative-scenarios-considered) above.

<!---:::warning--->  
>**`⚠` WARNING**  
>Please be aware, at the time of writing, of two existing tables `asset_constraints` and `pre_applications` that were deliberately left out of the column-type conversion dictionary due to other pipelines depending upon them in their unconverted state. The plan is to remove this warning from the documentation only when the issue is finally resolved.
<!---:::--->  

### Adding the new tables to the [Terraform script](https://github.com/LBHackney-IT/Data-Platform/blob/main/terraform/etl/24-aws-glue-tascomi-data.tf)

You will need to decide whether new tables should be ingested daily by appending them to the `tascomi_table_names` list, or ingested weekly by appending them to the `tascomi_static_tables` list.  

Studying what these tables represent and examining their relationship to each other via embedded `_id` columns, may help you decide which list each new table should be in. You may also refer to the [Tascomi API schema diagram](../docs/images/tascomi-API-schema.png) for help.

However, you will test your assumptions later in Pre-Production, so it is not necessary to decide correctly from the outset. So if you are really not sure about where some tables belong, just add them to the `tascomi_table_names` list for now and you will still be able to move them to the to the `tascomi_static_tables` later, as required.

<!---:::note--->  
>**`ⓘ` SIDE NOTE**  
>Our goal should always be to cut waste as much as possible, remove unnecessary complexity from our data pipelines and simplify overall processes. Doing that not only helps us reduce our platform running costs, it reduces the total cost of ownership (TCO) as provisioning procedures are also simplified.
>
>With that in mind and notwithstanding radical upgrades the vendor might make to it's ***Tascomi API*** in future, the objective set for the next iteration of this playbook guide is to ensure the only code changes actually required would be to the [Terraform script](https://github.com/LBHackney-IT/Data-Platform/blob/main/terraform/etl/24-aws-glue-tascomi-data.tf).
>
>But at the very least, the lessons learned and subsequent suggested improvements, taken from this API ingestion pipeline, a development that was done early on in the history of the Data Platform while we were still learning, should be made actionable for all future API integrations coupled to data ingestion pipelines.
>
>Case in point, the following section concerning the implementation of [PyDeequ](https://playbook.hackney.gov.uk/Data-Platform-Playbook/playbook/transforming-data/guides-to-testing-in-the-platform/data-quality-testing-guide) should greatly be simplified, or consigned to an appendix, because code changes should be deemed unnecessary other than in exceptional situations, given that every API resource should already be accounted for within the code; API resources should not require further provisioning when introduced to the pipeline because the code required should already present even though not yet implemented via the job resource parameters contained in the [Terraform script](https://github.com/LBHackney-IT/Data-Platform/blob/main/terraform/etl/24-aws-glue-tascomi-data.tf).
<!---:::--->  

### Add the basic data quality tests in of the relevant scripts

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

This section will guide you through running `AWS Glue` scripts manually in Pre-production for the new tables you want to add to ensure each stage ETL process actually works and we can check the results later using `Amazon Athena`.

**`🖱`** ***When you are ready we can begin...***  
>**Given** you logged into the AWS `Management console` via the `AWSPowerUserAccess` link  under `DataPlatform-Pre-Production`  
**~and** have navigated to `AWS Glue` via the **☷ Services** menu  
**~and** from the left menu have selected [`ETL jobs`](https://eu-west-2.console.aws.amazon.com/gluestudio/home?region=eu-west-2#/jobs),  
**When** in the search field under `Your Jobs` where it says *Filter jobs*, you type: ***stg tascomi***,  
**Then** you should see listed below `Job name`, all the current Glue ETL jobs belonging to the current Tascomi data ingestion pipeline, as shown down in [**step 1.1.1**](#11-clone-the-api-ingestion-job)  

**`🖱`** ***Did that work for you?***  
>**But** if in your own console, you do not see the following listed ingestion jobs, which should have been generated in **Pre-Production** by ***Terraform Continuous Integration***, then please consult the Data Platform team:

1. `stg tascomi_api_ingestion`
2. `stg tascomi_parse_tables_increments`
3. `stg tascomi_recast_tables_increments`
4. `stg tascomi_create_daily_snapshot`

All being well, use the following sections to test your code changes, step by step.

<!---:::note--->  
>**`ⓘ` SIDE NOTE**  
>These sections might be greatly simplified later when it becomes unnecessary to run crawlers because the Data Catalog is updated directly by the ingestion jobs. Indeed, it might be simplified even further, for example, by combining **(2) the parse-job** with **(3) the recast-job**. Thus, it can be envisioned, running combined jobs with data-frames still held in memory; held in situ instead of re-scanning the same S3 data over-and-over and writing to S3 more times than actually needed.
<!---:::--->

### 1. Testing the Tascomi API Ingestion

You must test your new table resources, one at a time, to ensure the Tascomi API does what we expect. In the sections further, on involving the subsequent jobs, you will be able to test all your tables at once, so the testing process will speed up as you go along.

#### 1.1 Clone the API ingestion job

This section covers cloning a job in detailed steps. Sections beyond this that also involve cloning other jobs will not repeat this level of detail since the process is practically the same and you probably will remember how you did it the first time around. You can always refer back here if you need to.

**`🖱` Step 1.1.1** find the script to clone
>**Given** the ingestion jobs are shown as below...
![screenshot-1-1-1](../docs/images/tascomi-adding-tables-screenshot-1-1-1.png)  
**When** you check `☑` against `stg tascomi_api_ingestion`  
**~and** select `Clone Job` from the `Actions` menu  
**Then** you should immediately be taken to `Glue Studio`.

**`🖱` Step 1.1.2** in Glue Studio
>**Given** the cloned API ingestion job is shown in `Glue Studio` as below...  
![screenshot-1-1-2](../docs/images/tascomi-adding-tables-screenshot-1-1-2.png)  
**When** you change `🖊` the job name from `stg tascomi_api_ingestion-copy` to  
`stg tascomi_api_ingestion-TEST-DPP-426` with `DPP-426` substituted by the [***ticket number***](#the-scenario-in-detail)  
**~and** click `Save` over on the right  
**Then** you may proceed to test your API resource tables.

#### 1.2 Test each new API resource using the cloned job until done

There are alternative ways to proceed. You should either:  

**a)** Simply, repeat all **steps 1.2.1 to 1.2.4** for each and every new API resource.

**b)** Or more quickly, repeat **step 1.2.1** each and every new resource, then run **step 1.2.2** just once to crawl all the table outputs, then proceed with **step 1.2.3** and **step 1.2.4** to check each table's results in quick succession.  

If you are not confident but you have many new resources to add, then you might proceed along option **(a)** for your first API resource, then proceed along option **(b)** to more quickly process the remainder of your API resources.

**`🖱` Step 1.2.1** configure and run each new resource for API testing 
>**Given** your cloned job is open in `Glue Studio`  
**~and** you have expanded `Advanced Properties` at the bottom of the `Job details` tab  
**~and** have scrolled down to `Job parameters` as shown below...  
![screenshot-1-2-1](../docs/images/tascomi-adding-tables-screenshot-1-2-1.png)  
**When** you add or update the `--resource` ***Key*** with the corresponding ***Value*** set to name of your next API resource  
**~and** click `Save` then `Run` over on the right  
**Then** you should immediately see this message telling you your job has started...  
![screenshot-1-2-1-then](../docs/images/tascomi-adding-tables-screenshot-1-2-1-then.png)  
**~and** clicking on ***Run details*** should take you to the `Runs` tab  
**~and** you should see the ***Run status*** of your job which after a few minutes should say ***✓ Succeeded***  
**~and** your new API data should be added in the S3 bucket `dataplatform-stg-raw-zone` in the path `planning/tascomi/api-responses/` (as also shown above)  
**~and** you may proceed to crawl this new data for the target database `dataplatform-stg-tascomi-raw-zone` for the `AwsDataCatalogue`.

**`🖱` Step 1.2.2** crawl the new API data for the Data Catalog
>**Given** you navigated to `AWS Glue` via via the ☷ Services menu  
**~and** from the left menu expanded the `Data Catalog` sub-menu  
**~and** have selected [`Crawlers`](https://eu-west-2.console.aws.amazon.com/glue/home?region=eu-west-2#/v2/data-catalog/crawlers),  
**When** in the search field under `View and manage all available crawlers.` where it says *Filter crawlers*, you type: ***tascomi-api*** and hit enter  
**~and** you check `☑` against `tascomi_api_response-crawler`  
**~and** click `Run` over on the right,  
**Then** you should immediately see the ***✓ Crawler successfully starting*** message, as shown below...
![screenshot-1-2-2-when](../docs/images/tascomi-adding-tables-screenshot-1-2-2-when.png)  
**~and** after a few minutes, you should observe the ***State*** of the crawler `tascomi_api_response-crawler` change from **⟳Running** to **✓Succeeded**  
**~and** the `AwsDataCatalogue` should be updated with the new `api_response_<table-name>` table and data in the `dataplatform-stg-tascomi-raw-zone` database  
**~and** you may proceed to query the data using `Amazon Athena`.

**`🖱` Step 1.2.3** find the new table using Amazon Athena
>**Given** you navigated to `Amazon Athena` via the ☷ Services menu  
>**~and** over on the top right, my **Workgroup** has `planning` selected  
>**~and** on left under **Data**, my **Data source** has `AwsDataCatalogue` selected  
>**~and** below that, my **Database** has `dataplatform-stg-tascomi-raw-zone` selected, as shown below...  
![screenshot-1-2-3](../docs/images/tascomi-adding-tables-screenshot-1-2-3.png)  
**When** you expand **Tables** and scroll down the list below,  
**Then** you should find the table `api_response_<table-name>` where `<table-name>` is the name of the next API resource you are hoping to see  
**~and** expanding that table you should see it's column names and types, as shown above  
**~and** and you may proceed to test the data in that table by running a query.

**`🖱` Step 1.2.4** query the new data using Amazon Athena
>**Given** with `Amazon Athena` you found `api_response_<table-name>` where `<table-name>` is the name of the next API resource you want to query,  
**When** you ***copy-and-paste*** the following **SQL code** into the query editor  
**~and** replace `<table-name>` with the resource you want to query, as shown above,

```sql
WITH
generation AS (
    SELECT MAX(import_date) AS last_import_date
        FROM "dataplatform-stg-tascomi-raw-zone"."api_response_<table-name>"
)
SELECT g.*, a.* 
    FROM "dataplatform-stg-tascomi-raw-zone"."api_response_<table-name>" a
INNER JOIN generation g
ON a.import_date = g.last_import_date
ORDER BY a.import_datetime DESC 
limit 10;
```

>**~and** click `Run` underneath on the left,  
**Then** the **Query result** should show `last_import_date` as ***today's date*** (when you did **step 2.1.1**)  
**~and** you should see a column, headed by the **resource name**, containing ***a JSON data string*** which holds ***the API response***  
**~and** you may proceed to [test your next new API resource table](#12-test-each-new-api-resource-using-the-cloned-job-until-done)  
**~and** when all the new tables are done you may proceed to [test the increment jobs](#2-testing-the-tascomi-parse-table-increment-job).
  
**`🖱`** ***Did that work for you?***  
>**But** when these steps do not *behave* as described, if you suspect the fault with the Tascomi API, or you encounter some other problem preventing you from proceeding, and you are unable to resolve these issues by yourself, please then seek help from the Data Platform team.

All being well, you may either proceed to the next section.

<!---:::note--->  
>**`ⓘ` SIDE NOTE**  
>Already envisioned, is a simpler, less complex approach for ingesting the API responses whereby the data is not required to land in separate tables, such that a single uniform `api_responses` table structure would suffice, with data captured into a single JSON column of the same name `api_response`, instead of changing the name each time. The resource name on the other hand, would be captured in a separate S3-partition column called `resource` for optimizing data-scanning performance by subsequent jobs. The parquet files themselves already hold the resource name in the `import_api_url_requested` column, however, it will help to capture that in a separate `api_resource` column.
>
>As envisioned, the testing of the output would be simplified by this approach since it would run the same Athena test query every time, so no further test queries would need to be written.
<!---:::--->

### 2. Testing the Tascomi Parse table increment job

Unlike the previous section, in this section and sections involving the subsequent jobs, you will be able to test all your tables at once, so the testing process will speed from this point onward.

#### 2.1 Clone the Tascomi Parse table increment job
<!---TO DO--->  
>[**Insert abridged earlier steps without need for screenshots similar to previous**]
<!---TO DO--->  

#### 2.2 Edit the cloned Tascomi Parse table increment job to introduce your code changes
<!---:::note--->  
>**`ⓘ` NOTE**  
>In the next development iteration, Section 2.2 will be only be required for testing changes to this script for handling exceptional situations. Which means section 2.1.3 becomes redundant. 
<!---:::--->  
**`🖱` Step 2.2.1**  make a test script
>**Given** the `Job details` of the cloned job is shown in `Glue Studio` as below...  
![screenshot-2-2-1](../docs/images/tascomi-adding-tables-screenshot-2-2-1.png)  
**When** you expand `Advanced Properties` below `Job details`  
**~and** change the script name from `tascomi_parse_tables_increments.py` to  
`tascomi_parse_tables_increments-DPP-426.py` with `DPP-426` substituted by the [***ticket number***](#the-scenario-in-detail)  
**~and** click `Save` over on the right  
**Then** you may now edit the test script that was just created.

**`🖱` Step 2.2.2** edit test script

#### 2.3 Test your new tables with the cloned Tascomi Parse table increment job

**`🖱` Step 2.3.1**  
>**Given** the `Advanced Properties` is expanded below the `Job details` of the cloned job in `Glue Studio` as shown below  
**~and** the script name was changed to `tascomi_parse_tables_increments-DPP-426.py` with `DPP-426` substituted by the [***ticket number***](#the-scenario-in-detail)...  
![screenshot-2-3-1](../docs/images/tascomi-adding-tables-screenshot-2-3-1.png)  
**When** you scroll down `Advanced Properties` to `Job parameters`  
**~and** add a new `Resources` entry  
**~and** click `Save` over on the right  
**Then** you may begin testing each new API resource using this now fully cloned job.
<!---TO DO--->  
>[**Insert a detailed steps with screen shots**]
<!---TO DO--->  

### 3. Testing the Tascomi Recast table increment job
<!---TO DO--->  
>[**Insert abridged sections and steps without too much need for screen shots**]
<!---TO DO--->  

### 4. Testing the Tascomi Create daily snapshot job
<!---TO DO--->  
>[**Insert abridged sections and steps without too much need for screen shots**]
<!---TO DO--->  

---

## Deploy the code changes into Production

### Commit your code changes in the new branch and open a pull request

Unit tests will run automatically when you push the changes. At the moment, tests are implemented for all bits of the process except from the 'parse table increments' one.  

### Have your changes deployed with help from the Data Platform Team

At this time of writing, a tool is in our development backlog for assisting the Data Platform team in speedily rolling back faults that made it into production. In the meantime you will require assistance from team members with higher access privileges to manually perform fault rollback tasks which could take several hours depending on the nature of the fault. Therefore it is important to organize stand-by cover beforehand to ensure a member of the team is available to rollback data in production if needed. On previous occasions this has required some out-of-hours work to ensure the work was carried out before the scheduled overnight processes could run normally.
