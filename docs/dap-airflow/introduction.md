---
id: introduction
title: 📚Introduction
description: "The DAP⇨flow guide for data analysts and engineers, for developing and deploying Airflow DAGs, running data pipelines in the Data Analytics Platform (DAP)."
layout: playbook_js
tags: [dap-airflow]
---

# 📚Introduction
![DAP⇨flow](../dap-airflow/images/DAPairflowFLOWwide.png)  
## What is **DAP⇨flow**? 
**DAP⇨flow** is an integation of ***Apache Airflow*** with ***Amazon Athena*** built upon Hackney's ***Data Analytics Platform***. 
#### It allows Data Analysts, in the simplest way possible, to develop and run data pipelines using their own service's data and create data products for their service and service users.

Building data pipelines used to be harder and more complex and time consuming. 

Data Analysts, after prototyping their SQL queries using ***Amazon Athena*** were required to convert *Athena SQL* code to *Spark SQL*, a different SQL dialect, then embed their code within an ***Amazon Glue*** job which they had to deploy using ***Terraform***.  

Data Analysts were forced to query across multiple generations of the same data stored in the ***Amazon S3*** Data lake when all they actually wanted was just their current data. That meant they could not simply take legacy SQL queries and run them directly in ***Amazon Athena***.

#### How **DAP⇨flow** solves these problems
* Firstly, Data Analysts no longer need to convert and re-test their prototype SQL transforms to run in the separate and more complex ***Amazon Glue*** run-time environment. 

    Instead, ***Apache Airflow*** can use exactly the same ***Amazon Athena*** to transform data in production with the outputs going directly into data products. So that Data Analysts' prototype SQL transform queries, that they spent time on testing until they were working, can simply be reused instead of being discarded.  

    **That cuts development time by more than half while Data Analysts no longer need to context-switch between the two SQL dialects.**

* Secondly, Data Analysts no longer must adapt their legacy SQL queries to ***Amazon S3***'s Data Lake partitioning architecture. 

    Instead, ***Apache Airflow*** is configured to generate views of the underlying table data to present Data Analysts with current-only ingested service data, both in readiness for prototyping and testing, and for when the working transforms are subsequently deployed, being automated and run by Airflow.

    **That further cuts development time while Data Analysts can very easily take the legacy SQL code from their service database system and run it directly on *Amazon Athena* with few changes.**

    Data Analysts can also migrate their existing Athena SQL prototypes, previously adapted for the ***Amazon S3***'s Data Lake partitioning architecture, because the same table history is available to them, although the table names will now be suffixed "**_history**", which is more intuitive for new users.

* Lastly, Data Analysts no longer need to use ***Terraform*** for deploying their data pipeline jobs because ***Apache Airflow*** simply takes care of that as soon as they commit their transform queries to **DAP⇨flow**'s ***GitHub*** repository.

## 📚Onboarding

#### A series onboarding documents is available here, to help Data Analysts get started with **DAP⇨flow**

Anyone new to **DAP⇨flow** will need read [**📚Before you begin**](../dap-airflow/onboarding/begin).

Thereafter, Data Analysts do not need to read every document in the order they are listed below, especially if they are already familiar with the ***AWS Management Console*** and have used ***Amazon Athena*** before.

Data Analysts are encouraged to think about what they need to do before deciding which document to read next. For example, if they have a ***legacy SQL query*** that they want to migrate to **DAP⇨flow**, they could jump straight to [**📚Prototype legacy transforms**](../dap-airflow/onboarding/prototype-legacy-transforms).

#### ***"We* ♡ *your feedback!"***
Your continuous feedback enables us to improve **DAP⇨flow** and our ***Data Analytics Platform*** service. Survey links are provided at the end of each onboarding document.

#### **Below here, is the full list of topics currently on offer...**
And more topics will be added as they are ready. [**Skip to the end**](#coming-soon) to discover what's coming next!

### [Before you begin](../dap-airflow/onboarding/begin)
#### How do I get onboard **DAP⇨flow**?

### [Welcome!](../dap-airflow/onboarding/welcome)
#### Hello **DAP⇨flow**! What do I need to know?

### [AWS Console access](../dap-airflow/onboarding/access-the-AWS-Management-Console)
#### How will I access the ***AWS Management Console***?

### [AWS region](../dap-airflow/onboarding/access-the-AWS-region)
#### How will I ensure I am in the correct **AWS region**?

### [Amazon Athena](../dap-airflow/onboarding/access-my-Amazon-Athena-database)
#### How will I use ***Amazon Athena*** to access my database?

### [My current service data](../dap-airflow/onboarding/access-my-current-service-data)
#### How will I access my `[service]`'s current data from ***Amazon Athena***?

### [My service data history](../dap-airflow/onboarding/access-my-service-data-history)
#### How will I access my `[service]`'s data history from ***Amazon Athena***?

### [Query my service data](../dap-airflow/onboarding/query-my-service-data)
#### How will I query and analyze my `[service]`'s data with ***Amazon Athena***?

### [Prototype simple transforms](../dap-airflow/onboarding/prototype-simple-transforms)
#### How can I use ***Amazon Athena*** to prototype a simple table-join data transformation?

### [Prototype legacy transforms](../dap-airflow/onboarding/prototype-legacy-transforms)
#### How do I use ***Amazon Athena*** to prototype a data transformation from my `[legacy SQL query]`?

### [GitHub access](../dap-airflow/onboarding/github-access)
#### How do I set up my ***GitHub*** access for **DAP⇨flow**?

### [GitHub branching](../dap-airflow/onboarding/github-branch)
#### How do I create `[transform branch]` as my new working branch of **DAP⇨flow**'s repository?

### [Committing transforms](../dap-airflow/onboarding/github-commit-transform)
#### How do I commit my working `[transform SQL]` to **DAP⇨flow**'s repository?

### [GitHub pull requests](../dap-airflow/onboarding/github-pull-request)
#### How do I raise a *"pull request"* to merge my `[transform branch]` into the `main` trunk of the **DAP⇨flow** repository?

## 📚Coming soon...
The following guides are due for completion.

### Merging branches 
#### How do i complete the merge of `[transform branch]` into the main trunk of **DAP⇨flow**'s repository?

### Airflow
#### How will I access my data transforms using ***Airflow*** on the web?

### Adding tables to the raw-zone
#### How do i add a new table ingestion to my `[service raw-zone]` database?

## 📚Suggested for later...
The following guides are on our backlog.

#### Migrating old Athena prototype SQL to the new **DAP⇨flow**

#### Refined-zone views

#### External access to **DAP⇨flow** products

#### Removing tables from my `[service raw-zone]` database

#### Removing products from the `[service refined-zone]` database

<br/>

![Apache Airflow](../dap-airflow/images/worker_tap_valve_800_wht.jpg)  

<br/>

![Apache Airflow](../dap-airflow/images/AirflowLogo.png)  

<br/>

![Apache Airflow](../dap-airflow/images/AmazonAthenaLogo.png)  



