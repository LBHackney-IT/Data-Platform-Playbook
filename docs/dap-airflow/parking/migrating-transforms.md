---
id: migrating-transforms
title: Migrating transforms
description: "Onboarding data analysts and engineers to DAP⇨flow, the Data Analytics Platform Airflow integration."
layout: playbook_js
tags: [onboarding]
---
# How was my ***Amazon Glue*** *ETL job's Spark SQL query* migrated to **DAP⇨flow**?
![DAP⇨flow](../images/DAPairflowFLOWmigration.png)  

## 🚧 🚧 🚧 🚧 🚧 🚧 🚧 🚧 🚧 

## **⚠️AWAITING COMPLETION⚠️** 

## 🚧 🚧 🚧 🚧 🚧 🚧 🚧 🚧 🚧 

<br> 
</br>  

---
## ***"We* ♡ *your feedback!"***
![DAP⇨flow](../images/DAPairflowFLOWmigration.png)  
:::tip UX  
### 👉 Please use **this link ►** [**DAP⇨flow** `UX` **Feedback / migrating-transforms**](https://docs.google.com/forms/d/e/1FAIpQLSc7nv1XmfRJKZlZTYIJQxAwbimUfsZLXQOVt3TJO-zUOjcRGQ/viewform?usp=pp_url&entry.339550210=migrating-transforms)  

- Your feedback enables us to improve **DAP⇨flow** and our Data Analytics Platform service.  
- We encourage all our users to be generous with their time, in giving us their recollections and honest opinions about our service.  
- We especially encourage our new users to give feedback at the end of every **DAP⇨flow📚Migration onboarding** task because the quality of the onboarding experience really matters.  

    ☝ **Please use this link to help us understand your user experience!**
:::


## 📚`UX` Criteria
:::info ABILITY  
* **AWS Management Console** user  
* **Amazon Athena** beginner  
* Hackney `[service]` Data Analyst
* Hackney `[service database]` user
:::

:::note BEHAVIOR  
### How was my ***Amazon Glue*** *ETL job's Spark SQL query* migrated to **DAP⇨flow**?
**Measures** the successful migration of an ***Amazon Glue*** *ETL job* to **DAP⇨flow**:  

#### 🚧 🚧 🚧 🚧 🚧 🚧 🚧 🚧 🚧 
#### ⚠️AWAITING COMPLETION⚠️
#### 🚧 🚧 🚧 🚧 🚧 🚧 🚧 🚧 🚧

**Given** ...
**When** ...
**Then** ...

**Scale** of ... to ... **~and** flow features.  
:::

## 📚Appendix

<details><summary>Refactoring legacy SQL</summary>

### A. Is denormalization a good or bad idea?

Legacy denormalized SQL Transforms and their data-products should be scrutinized to understand:
* Do multiple product iterations co-exist that are being repeatedly generated at the same time?
* Do multiple product iterations share significant elements of SQL code?
* Are they expensive to run and maintain?
* Can they be broken up and re-orchestrated in a more efficient manner?
* Can they be broken up and refactored to make them easier to maintain and iterate?

---

### B. Balancing "Data pull" and "Data push" pipelines

**Data pull:** Presentation layer BI tools are efficient at pivoting between dimensions and aggregating data along the dimensions of a *data cube*. Because they serve up reports and visualizations only when there is user demand, there are potential cost savings when such data products are properly conceived.

**Data push:** The optimum intermediate *Data Platform* products are *data cube*s because they generate the most value from the presentation layer's potential use cases. Their development, continued deployment, computational and product materialization costs can be offset in many ways, but ultimately their value is dependant on the numbers of users and the use-cases in the presentation layer.

**Pull overreach:** Where the demands of the presentation layer are allowed to propagate too many very similar, yet independent data "push" pipelines. Where excessive running costs are observed in the *Data Platform*, "push" pipelines may be unfairly blamed for problems propagated by the demands of poorly conceived "pull" requirements from the presentation layer.

**Push overreach:** Where over-engineered "push" data pipelines actually reduce the potential portfolio of presentation layer product opportunities. In the worst case scenario, a data pipeline may be observed to converge on just a one data product with no options for further data wrangling in the presentation layer, simply because the data product does not properly resemble a *data cube*. Over use of "push" pipelines is a symptom of not understanding the real needs of users accessing data through the presentation layer.

</details>
