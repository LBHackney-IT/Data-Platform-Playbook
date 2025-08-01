---
id: migrating-transforms
title: Migrating transforms
description: "Onboarding data analysts and engineers to DAP⇨flow, the Data Analytics Platform Airflow integration."
layout: playbook_js
tags: [onboarding]
---
# How were Glue/Spark SQL queries migrated to **DAP⇨flow**?
![DAP⇨flow](../images/DAPairflowFLOWmigration.png)  


<br> 
</br>  

---
## ***"We* ♡ *your feedback!"***
![DAP⇨flow](../images/DAPairflowFLOWmigration.png)  
:::tip UX  
### 👉 Please use **this link ►** [**DAP⇨flow** `UX` **Feedback / migrating-transforms**](https://docs.google.com/forms/d/e/1FAIpQLSdqeNyWIPMNBHEr-YSyxnXQ4ggTwJPkffMYgFaJ4hGEhIL6LA/viewform?usp=pp_url&entry.339550210=prototype-legacy-transforms)  

- Your feedback enables us to improve **DAP⇨flow** and our Data Analytics Platform service.  
- We encourage all our users to be generous with their time, in giving us their recollections and honest opinions about our service.  
- We especially encourage our new users to give feedback at the end of every **📚Onboarding** task because the quality of the onboarding experience really matters.  

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
### How were Glue/Spark SQL queries migrated to **DAP⇨flow**?
**Measures** the **DAP Platform Team** migration of Glue/Spark SQL queries to **DAP⇨flow**:  

**Given** in my web browser, I have accessed ***Amazon Athena***  
**~and** I have selected my `[service workgroup]`  
**~and** ***Amazon Athena*** shows my `[service raw zone[ #]]` with my `[service database]` equivalent tables and columns  
**~and** data was previously ingested from my `[service database]` into my `[service raw zone[ #]]`  
**~and** I have my `[legacy SQL query]` used by my `[service database]` that I now want to migrate to **DAP⇨flow**  

**When** I copy-and-paste my `[legacy SQL query]` into the query editor  
**~and** I ensure the table names are prefixed with my `[service raw zone[ #]]` instead of my `[service database]`  
**~and** I ensure the table names are suffixed with `..._latest`  
**~and** I ensure all the column functions and expressions are made input-and-output-compatible with ***Amazon Athena***  
**~and** I click “**Run**” underneath the code window on the left-hand side

**Then** ***Amazon Athena*** should fetch results as would my `[legacy SQL query]` have done when run by my `[service database]`    
**~and** I can save my new `[transform SQL]` with a name `[transform].sql` and a description in my `[service workgroup]`.  

**Scale** of 5 to 9 **~and** flow features.  
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

### B. Balancing "Data pull" *versus* "Data push"

**Data pull:** Presentation layer BI tools are very efficient at pivoting between dimensions and aggregating data along each dimension. Because they serve up reports and visualizations only when they are needed, they have the potential of saving cost when conceived properly.

**Data push:** The optimum intermediate *Data Platform* products are *data cube*s because they generate the most value from the presentation layer's potential use cases. Their development, continued deployment, computational and product materialization costs can be offset in many ways, but ultimately their value is dependant on the numbers of users and the use-cases in the presentation layer.

**Pull overreach:** Is where the demands of the presentation layer is allowed to propagate too many very similar, yet independent data "push" pipelines. "Push", because it is where the cost of the problem is observed (multiplied by cloud running costs), will often get unfairly blamed for a problem propagated by the demands of poorly conceived "pull" requirements from the presentation layer.

**Push overreach:** Is where over-engineering of "push" pipelines actually reduces the potential portfolio of presentation layer product realizations. In the worst case scenario, a data pipeline will converge on just a single data product with no options for further data wrangling in the presentation layer because the data product does not resemble a data cube. Over use of "push" is rightly blamed for this effect when it is caused by not understanding the real needs of presentation layer users.

</details>
