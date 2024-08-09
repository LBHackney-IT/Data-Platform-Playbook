---
id: access-my-current-service-data
title: My current service data
description: "Onboarding data analysts and engineers to DAP⇨flow, the Data Analytics Platform Airflow integration."
layout: playbook_js
tags: [onboarding]
---

# How will I access my current service data from Amazon Athena?

### 1. Access Amazon Athena
**`🖱`** In your web browser, log in to your AWS account, navigate to the AWS Management Console, and open Amazon Athena. 
   
👉 First time Amazon Athena users should **start here ►** **[DAP⇨flow📚Amazon Athena](../onboarding/access-my-Amazon-Athena-database)** 

### 2. Select your database
**`🖱`** Ensure that you have selected `[my service raw zone]` from the list box under the "**Database**" section on the left side of the Athena interface.

### 3. Explore the views in your database
**`🖱`** Beneath the "**Database**" section on the left of the Athena interface and below the “**▼ Tables**” section (collapsed when clicking **▼**→“**► Tables**”), expand  the “**► Views**" section (clicking **►**→“**▼ Views**”) to find a list of views based on tables available from `[my service raw zone]` database.

* **DAP⇨flow** implements Athena databases that present users with views that show only current-generation data, based upon their underlying history-table counterparts. So Data Analysts can ignore the history in the S3 data lake and instead write much simpler transformations resembling the queries of the original `[my service database]`.  

   👉 The explanation of that underlying history is **documented here ►** **[DAP⇨flow📚My service data history](../onboarding/access-my-service-data-history)** 

* In the implementation of **DAP⇨flow**, the names of the views should exactly represent the original table names of `[my service database]`.

**`Fig. 2, 3, 4 & 5`** ![Fig. 2, 3, 4 & 5](../images/access-my-current-service-data-two-five.png)

### 4. Expand each view
**`🖱`** Navigating beneath “**▼ Views**”, click on each view name to expand it and observe the complete list of columns in that view.

### 5. Verify the views and columns
**`👁`** Compare each view and its columns with the equivalent table and columns from `[my service database]` to observe how their names and data types match up with their counterparts.

* Occasionally the automatic data type translation will yield unexpected results. Always check columns to ensure there will never be any data lost. For example, if integer precision is lost.

* Be specially aware of **date** translations. Dates are sometimes transmitted in specialized formats, possibly numerical or possibly textual. If we’re unlucky these might need some coded reconciliation afterwards to make them both readable and useful in computations, especially used in comparison, or when joined to date columns from tables elsewhere.

### 6. Observe the partition columns
**`🖱`** Scroll to the bottom of the column list to find the partition scheme derived from the underlying history table. This will comprise four or more columns shown with the partition data type alongside eg. ***string.*** But unlike its table counterpart in the section above, the view will actually not show “***(Partitioned)***”.

**`Fig. 6`** ![Fig. 6](../images/access-my-current-service-data-six.png)  

* Later on when we come to query these views we will observe data fetched from the single most current **generation** of data, as we study the output from those partition columns, in particular, “**import\_date**”.  