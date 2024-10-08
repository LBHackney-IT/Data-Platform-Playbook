---
id: access-my-current-service-data
title: My current service data
description: "Onboarding data analysts and engineers to DAP⇨flow, the Data Analytics Platform Airflow integration."
layout: playbook_js
tags: [onboarding]
---

# How will I access my `[service]`'s current data from ***Amazon Athena***?
![DAP⇨flow](../images/DAPairflowFLOWleft.png)  

## 1. Access ***Amazon Athena***
**`🖱`** In your web browser, log in to your AWS account, navigate to the ***AWS Management Console***, and open ***Amazon Athena***. 
   
👉 First time ***Amazon Athena*** users should **start here ►** **[DAP⇨flow📚Amazon Athena](../onboarding/access-my-Amazon-Athena-database)** 

## 2. Select your `[service raw zone]` database
**`🖱`** Ensure that you have selected your `[service raw zone]` from the list box under the "**Database**" section on the left side of the Athena interface.

:::info REMINDER
👉  Your **Service Terms`[]`** are defined in the ***welcome*** document stored in your [**`[service access group]`** ***Google Drive subfolder***](https://drive.google.com/drive/folders/1k30M7Hh8WLttL5T5JVGbnKvSLNX7lVSg?usp=drive_link).
:::

## 3. Explore the views in your database
**`🖱`** Beneath the "**Database**" section on the left of the Athena interface and below the "**`▼` Tables**” section (collapsed when clicking **`▼`**→“**`►` Tables**”), expand the “**`►` Views**" section (clicking **`►`**→“**`▼` Views**”) to find a list of views based on tables available from your `[service raw zone]` database.

* **DAP⇨flow** implements Athena databases that present users with views that show only current-generation data, based upon their underlying history-table counterparts. So Data Analysts can ignore the history in the S3 data lake and instead write much simpler transformations resembling the queries of your original `[service database]`.  

   👉 The explanation of the underlying history is **documented here ►** **[DAP⇨flow📚My service data history](../onboarding/access-my-service-data-history)** 

* In the implementation of **DAP⇨flow**, the names of the views should exactly represent the original table names of your `[service database]`.

**`Fig. 2, 3, 4 & 5`** ![Fig. 2, 3, 4 & 5](../images/access-my-current-service-data-two-five.png)

## 4. Expand each view
**`🖱`** Navigating beneath “**`▼` Views**”, click on each view name to expand it and observe the complete list of columns in that view.

## 5. Verify the views and columns
**`👁`** Compare each view and its columns with the equivalent table and columns from your `[service database]` to observe how their names and data types match up with their counterparts.

* Occasionally the automatic data type translation will yield unexpected results. Always check columns to ensure there will never be any data lost. For example, if integer precision is lost.

* Be specially aware of *date* translations. Dates are sometimes transmitted in specialized formats, possibly numerical or possibly textual. If we’re unlucky these might need some coded reconciliation afterwards to make them both readable and useful in computations, especially when used in comparison, or used to join *date* columns from tables elsewhere.

## 6. Observe the partition columns
**`🖱`** Scroll to the bottom of the column list to find the partition scheme derived from the underlying history table. This will comprise four or more columns shown with the partition data type alongside eg. **`string`** But unlike its table counterpart in the section above, the view will actually not show **`(Partitioned)`**.

**`Fig. 6`** ![Fig. 6](../images/access-my-current-service-data-six.png)  

* Later on when we come to query these views we will observe data fetched from the single most current **generation** of data, as we study the output from those partition columns, in particular, `import_date`.


---
## ***"We* ♡ *your feedback!"***
![DAP⇨flow](../images/DAPairflowFLOWleft.png)  
:::tip UX  
### 👉 Please use **this link ►** [**DAP⇨flow** `UX` **Feedback / access-my-current-service-data**](https://docs.google.com/forms/d/e/1FAIpQLSdqeNyWIPMNBHEr-YSyxnXQ4ggTwJPkffMYgFaJ4hGEhIL6LA/viewform?usp=pp_url&entry.339550210=access-my-current-service-data)  

- Your feedback enables us to improve **DAP⇨flow** and our Data Analytics Platform service.  
- We encourage all our users to be generous with their time, in giving us their recollections and honest opinions about our service.  
- We especially encourage our new users to give feedback at the end of every **📚Onboarding** task because the quality of the onboarding experience really matters.  

   ☝ **Please use this link to help us understand your user experience!**  

:::

## 📚`UX` Criteria
:::info ABILITY  
* ***AWS Management Console*** user  
* Hackney `[service]` Data Analyst
* Hackney `[service database]` user

:::

:::note BEHAVIOR  
### How will I access my `[service]`'s current data from ***Amazon Athena***?
**Measures** the behavior of **Amazon Athena** as users explore their `[service raw zone]` database views and columns:  

**Given** I have selected my `[service raw zone]` database in the ***Amazon Athena*** interface  

**When** I explore the list below “**Views**”  
**~and** expand each view name to list its columns  

**Then** I should find view names exactly equivalent to tables from my `[service database]`  
**~and** find equivalent column names with their respective equivalent data types  
**~and** I should observe every view has columns added, eg. “import_date”, based on the partition schema of each underlying table.  

**Scale** of 3 **~and** flow features.  
:::
