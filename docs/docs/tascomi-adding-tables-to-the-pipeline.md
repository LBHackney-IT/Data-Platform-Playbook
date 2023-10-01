---
title: How to add Tascomi tables to the Data Platform
description: "A critical guide for analysts and engineers, for adding the Tascomi API resources that Planning data users need, to the Data Platform ingestion and refinement data pipeline."
layout: playbook_js
tags: [playbook]
---

<!---
This markdown has Docusaurus :::features::: that will need uncommenting and enabling later. Alternatively, **`ⓘ` SIDE NOTE** features may be linked-and-moved out of the main document altogether into separate markdown files maintained in a ../side-notes sub folder.
--->

# How to add Tascomi tables to the Data Platform

## Introduction

This playbook guide describes how the Tascomi Planning data ingestion and refinement processes can be extended to include new table resources. The original description of the ingestion, which is written from the developer's perspective can be found ► [here](https://playbook.hackney.gov.uk/Data-Platform-Playbook/docs/tascomi-ingestion).

This guide will lead you through updating and testing the Tascomi Glue jobs in the **Data Platform** ***Pre-production*** environment. It diverges from the original developer guide in many respects, for example:

* It will not be necessary to test the [Tascomi API](https://hackney-planning.tascomi.com/rest/v1/documentation.html?public_key=dd95bcd473f46a4325a4021d54500c7d#available-resources) endpoints using a local Jupyter installation. So all of the testing is done in **Pre-Production** via  the ***AWS Management console***.

* It will not be necessary to add tables to the [column type dictionary](https://github.com/LBHackney-IT/Data-Platform/blob/main/scripts/jobs/planning/tascomi-column-type-dictionary.json) because this has already been done for all the current Tascomi API resources. There are some exceptions to the column types which are explained later.

This guide is written in the BDD (Behavior Driven Design) narrative style of ***Given-When-Then***.

<!---:::note--->  
>**`ⓘ` SIDE NOTE**  
***"Given-When-Then"*** is a narrative style taken from [BDD](https://en.wikipedia.org/wiki/Behavior-driven_development) where each step (or BDD scenario) is self contained, so may easily be lifted and re-used without the need for previous steps to build the context. Whether in a production-line or a training room scenario, the ***Given*** can be used to summarize everything achieved by the previous step before moving on. ***Given*** context also permits operators or trainees to move on at their own pace and not get lost (hopefully!).
>
>But the main advantage and reason for using [BDD](https://en.wikipedia.org/wiki/Behavior-driven_development) is it's ability to apply critical tests to the underlying software and processes, even when (or though not ideally) applied retrospectively. It easily exposes operational weaknesses and over-complexity in ***the design*** and forces us to think about how the software and processes might be better engineered toward users' needs.
>
>So regardless of who was originally responsible for ***the design***, applying BDD empowers us to take ownership so that it becomes ***our design***.
>
>Applicable at every level, from design to development to production to deployment, BDD testing is meant to help us identify the critical refinements needed to improve our product and cut waste, thereby leading us quickly toward the next product iteration and help us draw down value more quickly.
<!---:::--->  

Here, the immediate user is **[the analyst]** being asked to operate an essential and therefore well-defined production-line task for the **Data Platform**, with the BBD narrative expressed in the [2nd person grammar](https://www.grammarly.com/blog/first-second-and-third-person).

But this guide does not ignore the customer, the end-user, so the [***grand scenario***](#the-grand-scenario) is also expressed in detailed terms with the ***user story*** and ***acceptance behavior*** written in the 1st person grammar; how we might write the ***Jira ticket***, so we can understand the drawn-down value in a way that the platform team can all understand and be able to prioritize.

Where further simplifications and enhancements to the overall process might be implemented in future, these are discussed in **`ⓘ` SIDE NOTE** features along the way. So the curious reader, wondering how such a complex procedure might be simplified, can be aware of discussions already had.

---

## Who this playbook guide is intended for

### This guide is both essential and useful for

#### a) ***Data analysts or engineers*** asked to perform this task while working with or alongside the ***Data Platform team*** and can get started right away  

>**Given** you are a ***data analyst or engineer*** with access granted to the ***Data Platform***  
**~and** your [AWS Start page](https://d-936715b9ec.awsapps.com/start#/) expands below the `AWS Account` box to show:

* `DataPlatformPlanningProd` listed under `DataPlatform-Production`
* `AWSPowerUserAccess` listed under `DataPlatform-Pre-Production`

>**When** you enter via the AWS `Management console`  
**Then** you should have access to `AWS Glue` and `Athena` via the **☷ Services** menu

#### b) Alternatively, this guide is for ***any data professional*** curious about the Data Platform and needing to understand how to maintain a data pipeline involving an API resource like Tascomi

>How can API data resources be added to an existing data pipeline to produce new data tables in the Data Platform and refreshed daily. How hard is it actual practice? What can I learn from those having already done it? How can I make these processes more efficient and what opportunities are there to reduce platform running costs and make it easier to use and maintain?  

Either way, this guide assumes a basic understanding of `AWS Glue` and `Amazon Athena` and what they are for. Also a practiced understanding of how ***Git*** and ***Github*** work is desirable, eg. how to create a new branch and subsequently merge it with the main trunk of development. In practice, it is expected that analysts will need to reach out to other members of the **Data Platform team** for code review and assistance in deploying the changes and rolling back faults in production, since they will not have all the system permissions needed to do those things.

### The grand scenario

A data user has identified ***Tascomi API resources*** needed by **Planning**, which are not currently unavailable as tables in the `dataplatform-prod-Tascomi-refined-zone` of the ***Production Data Platform***, and therefore those resources must be added to the ***Tascomi data pipeline***.

This service request may be factored into the following ticket template. Each of the following sections may be transcribed to a new [***numbered Jira ticket***](#the-grand-scenario)...

#### User story

> **As a** [Data Analyst]  
> **I want** tables from [Tascomi] added to the Data Platform for exploration and analysis  
> **So that** I can better understand and continue to find answers to my questions about [Tascomi] data and further develop the data and insights that [Planning] needs.

#### Agency

> **[the data analyst or engineer] will** seek to understand [the data analyst]'s need for new tables and implement the required changes to [Tascomi] data ingestion.

#### User acceptance behaviors

> **Given** I can log into my Hackney Council Google account  
> **~and** I can access to the Data Platform via the AWS `Management console` link via [DataPlatformPlanningProd]
 and I am currently using `Amazon Athena`  
> **When** I select [dataplatform-stg-Tascomi-refined-zone] listed below `Database`  
> **~and** I explore the list of tables below that  
> **~and** expand the table names to see their columns listed  
> **Then** I should find [Tascomi] tables and column names with their respective equivalent data types from [[Tascomi API resources](https://hackney-planning.tascomi.com/rest/v1/documentation.html?public_key=dd95bcd473f46a4325a4021d54500c7d#available-resources)].

#### Delivery

> **[the data analyst or engineer] will** test the required changes first in Pre-Production to foresee and fix faults before going to in Production.  
> **[the data analyst or engineer] will** communicate with the Data Platform Team to ensure the required changes are deployed correctly into Production and ensure unforeseen faults can be rolled back swiftly to minimize the impact on the exiting pipelines and minimize potential disruption for [the data users].  
> **[the data analyst or engineer] will** communicate with [the data analyst] to ensure these acceptance behaviors are met.

### Alternative scenarios considered

This guide contains a detailed procedure for adding new table resources. However, other superficially similar but different scenarios may arise, requiring alternative remedies, as follows:

#### a) Discovering new data attributes were added by the vendor, added to the static tables

 It is generally rare for vendors to frequently change REST API schemas that their customers rely upon. Far more likely with Tascomi though, are additions to attributes or coded-lookups, possibly required by changes to Planning procedures or legislation and implemented in the Tascomi software by the vendor.

 In such cases, involving static tables, the existing ingestion pipeline should automatically absorb those changes and it will be the job of data analysts to expose data linked to new attributes or lookups, in their own applications or pipelines. Indeed, they should be mindful of how any such additions in future might have side effects, eg. consider how aggregates are performed by their applications.

 Because changes to static tables occur infrequently, any attributes added to static tables will be ingested on a weekly basis. But on discovery if this is needed sooner, ingestion could be manually triggered any time.

#### b) Discovering changes made to Tascomi API by the vendor

Although it ought to be rare for the Tascomi vendor to change it's REST API schema, there remain however, weaknesses in the Tascomi data model that could force such changes in future.

Indeed, it is conceivable that the main Tascomi `Application` table might be extended further with new columns. This is a high risk future requirement due to this table's insufficient normalization by the vendor, such that the `Application` table has grown to a colossal 752 columns. Alternatively, columns might have been logically grouped and migrated to separate tables, instead of being left in this unwieldy current form.

But if the main `Application` table were to change then the following procedural steps will be of little practical use since the existing Tascomi data pipeline would need to be re-engineered and tested first. In such an event you would need to seek advise from the Data Platform team.

<!---:::info--->  
>**`ⓘ` INFO**  
>A toolkit currently in development, comprising AWS Glue & Athena SQL scripts will be linked here later to make it easy to discover API changes.
>
>It works by scraping the [Tascomi API documentation](https://hackney-planning.tascomi.com/rest/v1/documentation.html?public_key=dd95bcd473f46a4325a4021d54500c7d#available-resources) from the website and collecting the results in a CSV file where a Glue job can process it and compares it to the [JSON column-type dictionary](https://github.com/LBHackney-IT/Data-Platform/blob/main/scripts/jobs/planning/tascomi-column-type-dictionary.json) currently in production.
<!---:::--->  

---

## How to proceed with your code changes

### Creating and checking out a new Git branch for your code changes

>**Given** you have a ***Github*** account  
**~and** have been added to the [LBHackney-IT/Data-Platform](https://github.com/LBHackney-IT/Data-Platform) repository  
**~and** have set yourself up to use ***Git*** on your computer, preferably using a code editor eg. [Visual Code Studio](https://code.visualstudio.com/download),  
**~and** have cloned the [LBHackney-IT/Data-Platform](https://github.com/LBHackney-IT/Data-Platform) repository on your computer  
**When** you *create* and *check out* a new ***Git*** *branch*  
**~and** the name of *your new branch* refers to the [***Jira ticket number***](#the-grand-scenario) generated above. For example "DPP-426" substituting the [***ticket number***](#the-grand-scenario),  
**Then** your *branch name* will assist the ***Data Platform team*** in tracking your changes  
**~and** you may proceed to commit all your changes, as outlined below, via *your own branch*.

### Checking the tables to be added against entries in the column-type dictionary

The [JSON column-type dictionary](https://github.com/LBHackney-IT/Data-Platform/blob/main/scripts/jobs/planning/tascomi-column-type-dictionary.json) supports the **recast increment** job based on the[`tascomi_recast_tables_increments.py`](https://github.com/LBHackney-IT/Data-Platform/blob/main/scripts/jobs/planning/tascomi_recast_tables_increments.py) python code script that converts column strings not defined as ***text*** in the [Tascomi API](https://hackney-planning.tascomi.com/rest/v1/documentation.html?public_key=dd95bcd473f46a4325a4021d54500c7d#available-resources), to their correct data types, as required by their respective *refined tables* in the ***Data Platform Planning refined zone***.  

New resource tables must have all their columns checked against this dictionary however there will be an opportunity to [test this later](#testing-your-code-changes-in-pre-production) in **Pre-Production**.

But whenever API anomalies are discovered it is wise to stop and [consider alternative scenarios](#alternative-scenarios-considered) that might have arisen.

<!---:::warning--->  
>**`⚠` WARNING**  
> **(*Or did someone just forget to do it?*)**  
>
>Please be aware, at the time of writing, of two existing tables `asset_constraints` and `pre_applications` that were ***deliberately*** left out of the column-type conversion dictionary due to other pipelines depending upon them in their unconverted state. The plan is to remove this warning from the documentation only when the issue is finally resolved.
<!---:::--->  

### Adding the new tables to the [Terraform script](https://github.com/LBHackney-IT/Data-Platform/blob/main/terraform/etl/24-aws-glue-tascomi-data.tf)

You will need to decide whether new tables should be ingested *daily* by appending them to the `tascomi_table_names` list, or ingested *weekly* by appending them to the `tascomi_static_tables` list.  

>**When** you have your code editor open on your computer  
**~and** have your cloned `Data-Platform` ***Git*** repository open on your computer  
**~and** have checked out your ***Git*** development branch, eg. "DPP-426" substituting the [***ticket number***](#the-grand-scenario) generated above  
**~and** have the [`24-aws-glue-tascomi-data.tf`](https://github.com/LBHackney-IT/Data-Platform/blob/main/terraform/etl/24-aws-glue-tascomi-data.tf) ***terraform script*** open on your computer screen,  
>**When** you make the following [required changes to your terraform script](#required-terraform-script-changes)  
**~and** *save, commit and synch* your code with the remote `Data-Platform` ***GitHub*** repository
>**Then** you may proceed.

### Required Terraform script changes

Studying what each Tascomi API resource or table does and by examining the relationships between tables, via embedded `_id` columns, you may be able to decide which list, `tascomi_table_names` or `tascomi_static_tables`, each new table belongs to. You can also refer to the [Tascomi API schema diagram](../docs/images/tascomi-API-schema.png) for help.

However, you will be able to test your assumptions later in **Pre-Production** when you will have the opportunity to query and analyze how the data changes over time, so it is not necessary to decide from the outset. But if you are really not sure about where some tables belong, then simply add them to the `tascomi_table_names` list for now and you can move them to `tascomi_static_tables` later on if required.

<!---:::note--->  
>**`ⓘ` SIDE NOTE**  
>**Does this really need to be any more complicated than doing the simple Terraform?**
>  
>Our goal should always be to cut waste and remove unnecessary complexity from our data pipelines. Doing that not only helps us reduce our platform running costs, it reduces the total cost of ownership (TCO) as provisioning procedures are also simplified.
>
>With that in mind, although notwithstanding radical upgrades the vendor might release to it's ***Tascomi API*** in future, an objective set for the next iteration of this playbook guide ought to be, make it so the ***only*** code changes required would be to the [Terraform script](https://github.com/LBHackney-IT/Data-Platform/blob/main/terraform/etl/24-aws-glue-tascomi-data.tf). Because doing so focuses attention on the deployment and away from unnecessary Python development. Not only does that permit a lower entry point for analysts undertaking the task, it helps set expectations for managers who would prefer that adding tables to the Data Platform should be a simple request that is easy to deliver.
>
>But we should at least make sure the lessons learned and suggested improvements are made actionable for all future such API-integrated data ingestion pipelines. Indeed anything we can take away from this development, done early on in the history of the Data Platform, indeed done while we were still learning, is of great value to future development of the Data Platform.
>
>Case in view, the following section concerning the implementation of the [PyDeequ](https://playbook.hackney.gov.uk/Data-Platform-Playbook/playbook/transforming-data/guides-to-testing-in-the-platform/data-quality-testing-guide) quality tests should greatly be simplified, or consigned to an appendix because code changes are deemed unnecessary other than in exceptional situations, given that every API resource quality test was determinable and could have been applied from the outset.
<!---:::--->  

### Add the basic data quality tests in the relevant scripts

[Quality testing with PyDeequ](https://playbook.hackney.gov.uk/Data-Platform-Playbook/playbook/transforming-data/guides-to-testing-in-the-platform/data-quality-testing-guide) is defined within each relevant `<tascomi-code>.py` python script below:

>**When** you have your code editor open on your computer  
**~and** have your cloned `Data-Platform` ***Git*** repository open on your computer  
**~and** have checked out your ***Git*** development branch, eg. "DPP-426" substituting the [***ticket number***](#the-grand-scenario)  
**~and** have the `Data-Platform/scripts/jobs/planning/<tascomi-code>.py` ***python code*** open on your computer screen,  
>**When** you make the following [required changes to your code](#required-code-changes-to-the-relevant-scripts)  
**~and** *save, commit and synch* your code with the remote `Data-Platform` ***GitHub*** repository
>**Then** you may proceed.

### Required code changes to the relevant scripts

The parsing script [`tascomi_parse_tables_increments.py`](https://github.com/LBHackney-IT/Data-Platform/blob/main/scripts/jobs/planning/tascomi_parse_tables_increments.py) has tests implemented and is relevant to this task. For your new tables to be quality-checked each day, you will need to open this script and add lines in th `dq_params =` section of code for each new API resource, represented by `<table-name>`, that you want added as follows:

```python
dq_params = {'<table-name>': {'unique': ['id', 'import_date'], 'complete': 'id'}
             }
```

In this example, for the job to complete successfully, the table called `api_response_<table-name>`, with `table-name` representing the API resource added to the script, the combination of `'id'` and `'import_date'` must be unique, and the `'id'` field must contain data, ie., `'complete'`.

In a very few exceptional cases, because only a single instance of a `'complete'` test is permitted per `<table-name>`, you may decide to change the `'id'` on the right for another column from the table instead.

Similar such tests are relevant to the daily snapshots script [`tascomi_create_daily_snapshot.py`](https://github.com/LBHackney-IT/Data-Platform/blob/main/scripts/jobs/planning/tascomi_create_daily_snapshot.py) as follows:

```python
dq_params = {'<table-name>': {'unique': ['id']}
             }
```

In this example, for the job to complete successfully, the table called `increment_<table-name>` just needs the `'id'` column to be unique.

---

## Testing your code changes in Pre-Production

This section will guide you through running `AWS Glue` scripts manually in Pre-production for the new tables you want to add to ensure each stage ETL process actually works and we can check the results later using `Amazon Athena`.

<!---:::info--->  
>**`ⓘ` SIDE NOTE**  
>**Why are we testing our code changes directly in the AWS console?**
>
>Currently the Data-Platform Github repository is configured to deploy just one version of the AWS Glue or Spark/python scripts. While deploying scripts separately into both the **Production** and **Pre-Production** environments it actually deploys identical scripts, just differently parameterized in Terraform, so for example, the jobs and database products are generated with different names, beginning with `prod` for Production and `stg` for Pre-Production.
>
>So for the time being, if we want to run a different version of a script in Pre-Production we must create it directly in the AWS console.  
>
>That might change in future given alternative branching strategies available eg. [`GitLab Flow`](https://www.youtube.com/watch?v=ZJuUz5jWb44) (a simple variation of the original Git Flow) that in principle allow code to be pushed first from the main code branch to a separate `Pre-Production` environment branch then deployed there for testing, then later when proven, it will be pushed to a separate `Production` environment branch and deployed there also. Among other things that would allow us to deploy SQL without the separate `prod` and `stg` labels, allowing those scripts being used unchanged in both **Pre-Production** and **Production** at different stages in their development.
<!---:::--->  

**`🖱`** ***When you are ready we can begin...***  
>**Given** you logged into the AWS `Management console` via the `AWSPowerUserAccess` link  under `DataPlatform-Pre-Production`  
**~and** navigated to `AWS Glue` via the **☷ Services** menu  
**~and** from the left menu selected [`ETL jobs`](https://eu-west-2.console.aws.amazon.com/gluestudio/home?region=eu-west-2#/jobs),  
**When** in the search field below `Your Jobs` (where it says *Filter jobs*) you type: ***stg tascomi***,  
**Then** you should see listed below `Job name`, all the Glue ETL jobs belonging to the Tascomi data ingestion pipeline, as also shown down in [**step 1.1.1**](#11-clone-the-api-ingestion-job)  

**`🖱`** ***Did that work for you?***  
>**But** if in your own console, you do not see the following listed ingestion jobs, which should have been generated in **Pre-Production** by ***Terraform Continuous Integration***, then please immediately consult the Data Platform team:

1. `stg tascomi_api_ingestion`
2. `stg tascomi_parse_tables_increments`
3. `stg tascomi_recast_tables_increments`
4. `stg tascomi_create_daily_snapshot`

<!---:::note--->  
>**`ⓘ` NOTE**  
> The prefix `stg` is used everywhere in **Pre-Production** as opposed to `prod` used everywhere in **Production**.
<!---:::--->

All being well, use the following sections to test your code changes, step by step.

---

### 1. Testing the Tascomi API Ingestion

<!---:::note--->  
>**`ⓘ` SIDE NOTE**  
>**How might this be made into a simpler task in future?**
>
>These sections would be simplified if it became unnecessary to run **crawlers** whereby the Data Catalog would be updated directly within the ingestion jobs. Other such simplifications might include combining **the parse-job** with **the recast-job**.  
>
>Thus envisioned, running such combined jobs while data-frames are still held in memory; held in situ instead of re-scanning the same S3 data over-and-over and writing to S3 more times than actually needed, would reduce platform running costs, speed up the process and reduce the maintenance overheads.
<!---:::--->

You must test your new table resources, one at a time, to ensure the Tascomi API does what we expect. In the sections further, on involving the subsequent jobs, you will be able to test all your tables at once, so the testing process will speed up as you go along.

#### 1.1 Clone the API ingestion job

This section covers cloning a job in detailed steps. Sections beyond this that also involve cloning other jobs will not repeat this level of detail since the process is practically the same and you probably will remember how you did it the first time around. You can always refer back here if you need to.

**`🖱` Step 1.1.1** find the script to clone
>**Given** you navigated to `AWS Glue`'s [`ETL jobs`](https://eu-west-2.console.aws.amazon.com/gluestudio/home?region=eu-west-2#/jobs)  
**~and** below `Your Jobs` you typed: ***stg tascomi*** to find the Tascomi data ingestion pipeline jobs, as shown below...
![screenshot-1-1-1](../docs/images/tascomi-adding-tables-screenshot-1-1-1.png)  
**When** you check `☑` against `stg tascomi_api_ingestion`  
**~and** select `Clone Job` from the `Actions` menu  
**Then** you should immediately be taken to `Glue Studio`.

**`🖱` Step 1.1.2** in Glue Studio
>**Given** your cloned API ingestion job is now shown in `Glue Studio` as below...  
![screenshot-1-1-2](../docs/images/tascomi-adding-tables-screenshot-1-1-2.png)  
**When** you change `🖊` the job name from `stg tascomi_api_ingestion-copy` to  
`stg tascomi_api_ingestion-TEST-DPP-426` with `DPP-426` substituted by the [***ticket number***](#the-grand-scenario)  
**~and** click `Save` over on the right  
**Then** you may proceed to test your API resource tables.

<!---:::note--->  
>**`ⓘ` NOTE**  
> The python script attached to this job does not need to change and will remain in its original form as `tascomi_api_ingestion.py`.
<!---:::--->  

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
**~and** you may proceed to crawl your new data for the target database `dataplatform-stg-tascomi-raw-zone` for the `AwsDataCatalogue`.

**`🖱` Step 1.2.2** crawl the new API data for the Data Catalog
>**Given** you navigated to `AWS Glue` via the ☷ Services menu  
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
>**~and** over on the top right, **Workgroup** has `planning` selected  
>**~and** on left under **Data**, **Data source** has `AwsDataCatalogue` selected  
>**~and** below that, **Database** has `dataplatform-stg-tascomi-raw-zone` selected, as shown below...  
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
**Then** the **Query result** should show `last_import_date` = ***today's date***  or the `import_datetime`when you recently did **step 2.1.1**  
**~and** you should see a column, headed by the **resource name**, containing ***a JSON data string*** which holds ***the API response***  
**~and** you may proceed to [test your next new API resource table](#12-test-each-new-api-resource-using-the-cloned-job-until-done)  
**~and** when all the new tables are done you may proceed to [test the increment jobs](#2-testing-the-tascomi-parse-table-increment-job).

<!---:::note--->  
>**`ⓘ` NOTE**  
> The requirement for `-stg-` in database naming is implemented everywhere in **Pre-Production** as opposed to `-prod-` used everywhere in **Production**. That means later on, when you want to check the same data using SQL over in **Production**, you will need to update your scripts first.
<!---:::--->
  
**`🖱`** ***Did that work for you?***  
>**But** when these steps do not *behave* as described, if you suspect the fault with the Tascomi API, or you encounter some other problem preventing you from proceeding, and you are unable to resolve these issues by yourself, please then seek help from the Data Platform team.

All being well, you may proceed to the next section.

<!---:::note--->  
>**`ⓘ` SIDE NOTE**  
>**The benefit of hindsight!**  
>  
>Envisioned, is a simpler, less complex approach for ingesting the API responses whereby the data is not required to land in separate tables, such that a single uniform `api_responses` table structure would suffice, with data captured into a single JSON column of the same name `api_response`, instead of changing the name each time. The resource name on the other hand, would be captured in a separate S3-partition column called `resource` for optimizing data-scanning performance by subsequent jobs. The parquet files themselves already hold the resource name in the `import_api_url_requested` column, however, it will help to capture that in a separate `api_resource` column.
>
>As envisioned, the testing of the output would be simplified by this approach since it would run the same Athena test query every time, so no further test queries would need to be written.
<!---:::--->

---

### 2. Testing the Tascomi Parse table increment job

Unlike the previous section, in this section and sections involving the subsequent jobs, you will be able to test your tables all at once, so the testing process will speed from this point onward.

Also, going forward, there will be less screenshot images because you as you increasingly become familiar with the AWS console interface. The step-by-step ***Given-When-Then*** behaviors will hopefully be sufficient to guide you through to the very end even without images.

#### 2.1 Clone the Tascomi Parse table increment job

**`🖱` Step 2.1.1** find the script to clone
>**Given** you navigated to `AWS Glue`'s [`ETL jobs`](https://eu-west-2.console.aws.amazon.com/gluestudio/home?region=eu-west-2#/jobs)  
**~and** below `Your Jobs` you typed: ***stg tascomi*** to find the Tascomi data ingestion pipeline jobs (like you saw previously in [**step 1.1.1**](#11-clone-the-api-ingestion-job)),  
**When** you check `☑` against `stg tascomi_parse_tables_increments`  
**~and** select `Clone Job` from the `Actions` menu  
**Then** you should immediately be taken to `Glue Studio`.

**`🖱` Step 2.1.2** in Glue Studio
>**Given** your cloned job `stg tascomi_parse_tables_increments-copy` is shown in `Glue Studio` (like you saw previously in [**step 1.1.2**](#11-clone-the-api-ingestion-job)),  
**When** you change `🖊` the job name from `stg tascomi_parse_tables_increments-copy` to  
`stg tascomi_parse_tables_increments-TEST-DPP-426` with `DPP-426` substituted by the [***ticket number***](#the-grand-scenario)  
**~and** click `Save` over on the right  
**Then** you may proceed to edit your cloned job.

#### 2.2 Edit the cloned Tascomi Parse table increment job to introduce your code changes

To test our code changes we must add them to the current `tascomi_parse_tables_increments.py` but first we must clone and rename it, separating it from the original script deployed in both **Production** and **Pre-production** environments.

<!---:::note--->  
>**`ⓘ` SIDE NOTE**  
>**The agile manifesto states ["Working software over comprehensive documentation"](https://www.sourceallies.com/2013/05/agile-manifesto-working-software-over-comprehensive-documentation/)**
>
>Envisioned for the next development iteration, we want the code fixed forever, to have every potential API resource featured in it, so that **Section 2.2** can be removed to an appendix where it should only be needed for introducing and testing ***very exceptional*** code changes.  
>
>But for the time being it is essential you continue to do this always. Sorry!
<!---:::--->

**`🖱` Step 2.2.1**  make a test script
>**Given** the `Job details` of the cloned job is shown in `Glue Studio` as below...  
![screenshot-2-2-1](../docs/images/tascomi-adding-tables-screenshot-2-2-1.png)  
**When** you expand `Advanced Properties` below `Job details`  
**~and** change the script name from `tascomi_parse_tables_increments.py` to  
`tascomi_parse_tables_increments-DPP-426.py` with `DPP-426` substituted by the [***ticket number***](#the-grand-scenario)  
**~and** click `Save` over on the right  
**Then** the test script will automatically be created in the path `s3://..../tascomi_parse_tables_increments-DPP-426.py`with `DPP-426` substituted by the [***ticket number***](#the-grand-scenario)  
**~and** you may now proceed to edit that test script.

**`🖱` Step 2.2.2** edit the test script
>**Given** previously in `Glue Studio` you changed the script name to `tascomi_parse_tables_increments-DPP-426.py` with `DPP-426` substituted by the [***ticket number***](#the-grand-scenario) before clicking `Save`, and still have that open on your screen as shown in the previous **step 2.2.1**  
**~and** meanwhile on another screen, you have your code editor open  
**~and** have the `Data-Platform` Git repository open on your development branch eg. "DPP-426" substituting the [***ticket number***](#the-grand-scenario)  
**~and** [your updated Python code](#required-code-changes-to-the-relevant-scripts) `Data-Platform/scripts/jobs/planning/tascomi_parse_tables_increments.py` is open as shown below...  
![screenshot-2-2-2-given](../docs/images/tascomi-adding-tables-screenshot-2-2-2-given.png)  
**When** you select your entire Python code and copy it into your computer's clipboard  
**~and** you return to the screen where you have `Glue Studio` open  
**~and** you click on the `Script` tab at the top to reveal the original code  
**~and** you select the original code, delete it, then paste in your new code from your computer's clipboard, as shown below...  
![screenshot-2-2-2-when](../docs/images/tascomi-adding-tables-screenshot-2-2-2-when.png)  
**~and** click `Save` over on the right  
**Then** the test script will be be updated in the path `s3://..../tascomi_parse_tables_increments-DPP-426.py`with `DPP-426` substituted by the [***ticket number***](#the-grand-scenario)  
**~and** you may proceed to test your new tables with the cloned Tascomi Parse table increment test job.

#### 2.3 Test your new tables with the cloned Tascomi Parse table increment job

**`🖱` Step 2.3.1** produce all the new parsed data tables all at once
>**Given** the `Advanced Properties` is expanded below the `Job details` of the cloned job in `Glue Studio` as shown below  
**~and** the script name was changed to `tascomi_parse_tables_increments-DPP-426.py` with `DPP-426` substituted by the [***ticket number***](#the-grand-scenario)...  
![screenshot-2-3-1](../docs/images/tascomi-adding-tables-screenshot-2-3-1.png)  
**When** you add or update the `--resource` ***Key*** with the corresponding ***Value*** set to names of your API resources, each  separated by a comma  
**~and** click `Save` then `Run` over on the right  
**Then** you should immediately see a message banner telling you your job has started  
**~and** clicking on ***Run details***  on the message banner should take you to the `Runs` tab  
**~and** you should see the ***Run status*** of your job which after a few minutes should say ***✓ Succeeded***  
**~and** your new parsed data should be added in the S3 bucket `dataplatform-stg-raw-zone` in the path `planning/tascomi/parse_increments????????/` (as also shown above)  
**~and** you may proceed to crawl your new data for the target database `dataplatform-stg-tascomi-raw-zone` for the `AwsDataCatalogue`.

**`🖱` Step 2.3.2** crawl the newly parsed data for the Data Catalog
>**Given** you navigated to `AWS Glue` via the ☷ Services menu  
**~and** from the left menu expanded the `Data Catalog` sub-menu  
**~and** have selected [`Crawlers`](https://eu-west-2.console.aws.amazon.com/glue/home?region=eu-west-2#/v2/data-catalog/crawlers),  
**When** in the search field under `View and manage all available crawlers.` where it says *Filter crawlers*, you type: ***tascomi-parse?????*** and hit enter  
**~and** you check `☑` against `tascomi_parse?????-crawler`  
**~and** click `Run` over on the right,  
**Then** you should immediately see the ***✓ Crawler successfully starting*** message  
**~and** after a few minutes, you should observe the ***State*** of the crawler `tascomi_parse?????-crawler` change from **⟳Running** to **✓Succeeded**  
**~and** the `AwsDataCatalogue` should be updated with the new `increments?????_<table-name>` table and data in the `dataplatform-stg-tascomi-raw-zone` database  
**~and** you may proceed to query the data using `Amazon Athena`.

**`🖱` Step 2.3.3** find the new tables using Amazon Athena
>**Given** you navigated to `Amazon Athena` via the ☷ Services menu  
>**~and** over on the top right, **Workgroup** has `planning` selected  
>**~and** on left under **Data**, **Data source** has `AwsDataCatalogue` selected  
>**~and** below that, **Database** has `dataplatform-stg-tascomi-raw-zone` selected  
**When** you expand **Tables** and scroll down the list below,  
**Then** you should find various tables `increments?????_<table-name>` with `<table-name>` showing ***all*** the new resources you are hoping to see  
**~and** expanding each of those tables you should see, for each and every one, their column names and types  
**~and** and you may proceed to test the data in those tables by running queries.

**`🖱` Step 2.3.4** query the new data using Amazon Athena
>**Given** with `Amazon Athena` you found the particular `increments_<table-name>` you were looking for, with `<table-name>` being names of the next parsed increment tables you want to query,  
**When** you ***copy-and-paste*** the following **SQL code** into the query editor  
**~and** replace `<table-name>` accordingly...

```sql
WITH
generation AS (
    SELECT MAX(import_date) AS last_import_date
        FROM "dataplatform-stg-tascomi-raw-zone"."increment??????_<table-name>"
)
SELECT g.*, a.* 
    FROM "dataplatform-stg-tascomi-raw-zone"."increment??????_<table-name>" a
INNER JOIN generation g
ON a.import_date = g.last_import_date
ORDER BY a.import_datetime DESC 
limit 10;
```

>**~and** click `Run` underneath on the left,  
**Then** the **Query result** should show `last_import_date` = ***today's date***  or the `import_datetime`when you recently did **step 2.1.1**  
**~and** you should see the expanded columns of your new table  
**~and** you may proceed to test next table  
**~and** when all the new tables are done you may proceed to [test the recast jobs](#3-testing-the-tascomi-recast-table-increment-job).

<!---:::note--->  
>**`ⓘ` NOTE**  
>You may quickly skip past **Step 2.3.4**, waiting until **Step 4.3.4** on the presumption that if the data shows up right at at the end then logically everything should have worked in between without needing to test all of it.
>
>In practice it's only worth checking a single example in **Step 2.3.4**. Then, so long as all the new tables and columns appeared at ***Step 2.3.3*** then you really have nothing to worry about.
<!---:::--->

---

### 3. Testing the Tascomi Recast table increment job
<!---TO DO--->  
>[**Insert abridged sections and steps without too much need for screen shots**]
<!---TO DO--->  

---

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
