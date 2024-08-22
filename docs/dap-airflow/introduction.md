---
id: introduction
title: Introduction
description: "The DAP⇨flow guide for data analysts and engineers, for developing and deploying Airflow DAGs, running data pipelines in the Data Analytics Platform (DAP)."
layout: playbook_js
tags: [dap-airflow]
---

# Introduction
![DAP⇨flow](../dap-airflow/images/DAPairflowFLOWwide.png)  
## What is **DAP⇨flow**? 
**DAP⇨flow** is an integation of ***Apache Airflow*** with ***Amazon Athena*** built upon Hackney's ***Data Analytics Platform***. 
#### It allows Data Analysts, in the simplest way possible, to develop and run data pipelines using their own service's data and create data products for their service and service users.

Building data pipelines used to be harder and more complex and time consuming. Data Analysts after prototyping their SQL queries using ***Amazon Athena*** were required to migrate Athena's SQL code to Spark SQL, a different SQL dialect, then embed their code within an ***Amazon Glue*** job. They also had to negotiate querying across multiple generations of the same data stored in the ***Amazon S3*** Data lake. That meant they could not simply take a legacy SQL query and run it in ***Amazon Athena*** or create an ***Amazon Glue*** product directly from it.

#### How **DAP⇨flow** solves these problems
* Firstly, Data Analysts no longer need to use the more complex ***Amazon Glue*** because data pipelines built using ***Apache Airflow*** can use ***Amazon Athena*** to generate the data transformation products using the same prototype SQL code.  

    **This cuts development time by more than half while Data Analysts no longer need to context-switch between the two SQL dialects.**

* Secondly, Data Analysts no longer need to adapt their SQL queries to ***Amazon S3***'s Data Lake partitioning architecture, because ***Apache Airflow*** is used to generate views of the underlying table data which presents Data Analysts with only current ingested service data, in readiness for prototyping and also later on when the automated transforms are run by Airflow.

    **This further cuts development time while Data Analysts can very easily take the legacy SQL code from their service database system and run it directly on *Amazon Athena* with few changes.**

    Data Analysts can also migrate their existing Athena SQL prototypes, previously adapted for the ***Amazon S3***'s Data Lake partitioning architecture, because the table history is still available to them, although the table names will now be suffixed "**_history**".


## 📚Onboarding

#### A series onboarding documents is available here, to help Data Analysts get started with **DAP⇨flow**

Anyone new to **DAP⇨flow** will need read [**📚Before you begin**](../dap-airflow/onboarding/begin).

Thereafter, Data Analysts do not need to read every documents in the order they are listed below, especially if they are already familiar with the ***AWS Management Console*** and have used ***Amazon Athena*** before.

Data Analysts are encouraged to think about what they need to do before deciding which document to read next. For example, if they have a ***legacy SQL query*** that they want to migrate to **DAP⇨flow**, they might jump straight to [**📚Prototype legacy transforms**](../dap-airflow/onboarding/prototype-legacy-transforms).

#### ***"We* ♡ *your feedback!"***
Your continuous feedback enables us to improve **DAP⇨flow** and our ***Data Analytics Platform*** service. Survey links are provided at the end of each onboarding document.

#### Here below, is the full list of topics currently on offer...

Further documents will be added as they are developed. [**Jump to the end**](#topics-arriving-here-soon) to discover what is coming next!

### [Before you begin](../dap-airflow/onboarding/begin)
#### What must happen before I can begin DAP⇨flow?

### [AWS Console access](../dap-airflow/onboarding/access-the-AWS-Management-Console)
#### How will I access the AWS Management Console?

### [AWS region](../dap-airflow/onboarding/access-the-AWS-region)
#### How will I ensure I am in the correct AWS region?

### [Amazon Athena](../dap-airflow/onboarding/access-my-Amazon-Athena-database)
#### How will I access my database from Amazon Athena?

### [My current service data](../dap-airflow/onboarding/access-my-current-service-data)
#### How will I access my current service data from Amazon Athena?

### [My service data history](../dap-airflow/onboarding/access-my-service-data-history)
#### How will I access my service data history from Amazon Athena?

### [Query my service data](../dap-airflow/onboarding/query-my-service-data)
#### How will I query and analyze my service data with Amazon Athena?

### [Prototype simple transforms](../dap-airflow/onboarding/prototype-simple-transforms)
#### How can I use Amazon Athena to prototype a simple table-join data transformation?

### [Prototype legacy transforms](../dap-airflow/onboarding/prototype-legacy-transforms)
#### How do I use Amazon Athena to prototype a data transformation from a `[legacy SQL query]`?

### [GitHub access](../dap-airflow/onboarding/github-access)
#### How do I set up my GitHub access to **DAP⇨flow**?

## Topics arriving here soon...

### Github branching
#### How do I add a new development branch to **DAP⇨flow**'s `[dap-airflow]` repository?
[DPF-185 DOCUMENTATION / 4.1 Add a new development branch to the DAP Airflow repository ](https://docs.google.com/document/d/1g6s14JK-9LBM8HT-F6-T-rGq7TxnWHD37FJi04Fh41Q/edit?usp=drive\_link)


### Committing transforms 
#### How do I commit my working transform query to **DAP⇨flow**'s `[dap-airflow]` repository?
[DPF-185 DOCUMENTATION / 4.2  Commit a working transform query to the DAP Airflow repository](https://docs.google.com/document/d/18TL2ep1laWzHU9MW-XvC\_N1S-gJx9SmPh9M2DC9XNQ4/edit?usp=drive\_link)

### Raising pull requests
#### How do I raise a Pull Request to merge my development branch into the main trunk of **DAP⇨flow**'s `[dap-airflow]` repository?
[DPF-146 DOCUMENTATION 4.3 Raise a Pull Request to merge the development branch into the main trunk of the DAP Airflow repository](https://docs.google.com/document/d/1LJjJobb2FVLoadUNCl3R7w9FedTFo8IJWHne-Zw9l-M/edit?usp=drive\_link)

### Merging branches
#### How do i complete the merge of my development branch into the main trunk of **DAP⇨flow**'s `[dap-airflow]` repository?

### Airflow
#### How will I access my data transformations using Airflow on the web?

### Adding tables to the raw-zone
#### How do i add a new table ingestion to my service's raw-zone database?

## Topics suggested for the later...

#### Migrating old Athena prototype SQL to the new **DAP⇨flow**

#### Refined-zone views

#### External access to **DAP⇨flow** products

#### Removing tables from the raw-zone

#### Removing products from the refined-zone

<br/>

![Apache Airflow](../dap-airflow/images/worker_tap_valve_800_wht.jpg)  

<br/>

![Apache Airflow](../dap-airflow/images/AirflowLogo.png)  

<br/>

![Apache Airflow](../dap-airflow/images/AmazonAthenaLogo.png)  



