---
id: query-my-service-data
title: Query my service data
description: "Onboarding data analysts and engineers to DAP⇨flow, the Data Analytics Platform Airflow integration."
layout: playbook_js
tags: [onboarding]
---
# How will I query and analyze my `[service]`'s data with ***Amazon Athena***?
![DAP⇨flow](../images/DAPairflowFLOWmigration.png)  

## 1. Access ***Amazon Athena***
**`🖱`** In your web browser, log in to your AWS account, navigate to the AWS Management Console, and open Amazon Athena. 
   
👉 First time Amazon Athena users should **start here ►** **[📚Amazon Athena](../parking/access-my-Amazon-Athena-database)** 

## 2. Select your `[service workgroup]`
**`🖱`** Ensure you have selected your `[service workgroup]` from the list-box next to “**Workgroup**”.  

:::info REMINDER
👉  Your **Service Terms`[]`** are defined in your **`welcome`** document stored in your `[service access group]`'s **►** [***Google Drive subfolder***](https://drive.google.com/drive/folders/1soY6hORmPVlRvlW_t1V1hTFXfZbLt6NS?usp=drive_link). 
:::

## 3. Explore your database
**`🖱`** Find and select the `[service zones]` database which is equivalent to your `[service database]`, from the list-box under "**Database**" on the left side of the Athena interface.  

**`🖱`** Expand the list under "**`►` Tables**" to reveal the database objects there.  

**`👁`** You should observe your `[service database]` equivalent tables, suffixed with `_latest`.

**`🖱`** Click "`🞧`" adjacent a table name with the suffix `_latest`.  

 **`👁`** You should observe column names and data types, equivalent to the same table in your `[service database]`.  

## 4. Familiarize yourself with SQL queries
**`🕮`** You will need to understand the basic concepts and requirements of writing SQL queries. This includes knowing how to select columns, filter data, join tables, etc.  

👉 There is a comprehensive guide to help you write Athena SQL queries **provided here ►** **[📚Prototype simple transforms](../parking/prototype-simple-transforms)**  

👉 You can also learn more about using Amazon Athena **►** [**here**](https://docs.aws.amazon.com/athena/latest/ug/using-athena-sql.html)

## 5. Run SQL queries
**`🖱`** Use the SQL query editor in ***Amazon Athena*** to write and run queries involving tables and columns equivalent to those in your original `[service database]`.

**`Fig. 5`** ![Fig. 5](../images/parking-query-my-service-data-five.png)

## 6. Analyze your data   
**`👁`** Review the results of your SQL queries to find answers to your questions about your `[service database]`.

**`Fig. 6`** ![Fig. 6](../images/parking-query-my-service-data-six.png)

**`🖱`** You can copy results to the clipboard.  

**`🖱`** You can download the results into a CSV file.  
<br> 
</br>  

---
## ***"We* ♡ *your feedback!"***
![DAP⇨flow](../images/DAPairflowFLOWmigration.png)  
:::tip UX  
### 👉 Please use **this link ►** [**DAP⇨flow** `UX` **Feedback / query-my-service-data**](https://docs.google.com/forms/d/e/1FAIpQLSc7nv1XmfRJKZlZTYIJQxAwbimUfsZLXQOVt3TJO-zUOjcRGQ/viewform?usp=pp_url&entry.339550210=query-my-service-data)  

- Your feedback enables us to improve **DAP⇨flow** and our Data Analytics Platform service.  
- We encourage all our users to be generous with their time, in giving us their recollections and honest opinions about our service.  
- We especially encourage our new users to give feedback at the end of every **DAP⇨flow📚Migration onboarding** task because the quality of the onboarding experience really matters.  

   ☝ **Please use this link to help us understand your user experience!**
:::


## 📚`UX` Criteria
:::info ABILITY  
* **AWS Management Console** user  
* **Amazon Athena** user  
* Hackney `[service]` Data Analyst
* Hackney `[service database]` user
:::

:::note BEHAVIOR  
### How will I query and analyze my `[service]`'s data with ***Amazon Athena***?
**Measures** the behavior of **Amazon Athena** when users' run working SQL queries:

**Given** in my web browser, I have accessed ***Amazon Athena***  
**~and** I have selected my `[service workgroup]`  
**~and** Amazon Athena shows a `[service zones]` database equivalent to my `[service database]`, having equivalent tables suffixed with `_latest`, with the same columns and associated data types  
**~and** I am familiar with the concepts and basic requirements of writing an ***Amazon Athena*** SQL query  

**When** I run my SQL query containing given those tables and columns  

**Then** I should be able to find answers to my questions about my `[service database]`    
**~and** I can copy results to the clipboard  
**~and** I can download the results into a CSV file  

**Scale** of 2 to 5 **~and** flow features.  
:::
