---
id: query-my-service-data
title: Query my service data
description: "Onboarding data analysts and engineers to DAP⇨flow, the Data Analytics Platform Airflow integration."
layout: playbook_js
tags: [onboarding]
---

# How will I query and analyze my service data with Amazon Athena?

### 1. Access Amazon Athena
**`🖱`** In your web browser, log in to your AWS account, navigate to the AWS Management Console, and open Amazon Athena. 
   
👉 First time Amazon Athena users should **start here ►** **[DAP⇨flow📚Amazon Athena](../onboarding/access-my-Amazon-Athena-database)** 

### 2. Select your workgroup
**`🖱`** Ensure you have selected `[my service]` from the list box next to “Workgroup”.  
     
### 3. Explore your database
**`🖱`** Ensure you have selected `[my service raw zone]` from the list box under "**Database**" on the left side of the Athena interface, before expanding the lists under "**► Tables**" and/or "**► Views**. Expandanding further should reveal column names and data types, as follows:

   - "**▼ Tables**"  
   👉 Documented here ► **[📚My service data history](../onboarding/access-my-service-data-history)** 

   - "**▼ Views**"  
   👉 Documented here ► **[📚My current service data](../onboarding/access-my-current-service-data)** 

### 4. Familiarize yourself with SQL queries
**`🕮`** You will need to understand the concepts and basic requirements of writing SQL queries. This includes knowing how to select columns, filter data, join tables, etc.  

   👉 You can learn more about using Amazon Athena **►** [**here**](https://docs.aws.amazon.com/athena/latest/ug/using-athena-sql.html)

### 5. Run SQL queries
**`🖱`** Use the SQL query editor in Amazon Athena to write and run queries involving tables and columns equivalent to the original `[my service database]`.

**`Fig. 5`** ![Fig. 5](../images/query-my-service-data-five.png)

### 6. Analyze your data   
**`👁`** Review the results of your queries to find answers to your questions about `[my service]` data.

**`Fig. 6`** ![Fig. 6](../images/query-my-service-data-six.png)

**`🖱`** You can copy results to the clipboard.  

**`🖱`**  You can download the results into a CSV file.  

## **We ♡ your feedback!**

:::tip UX ![DAP⇨flow](../images/DAPairflowFLOWbanner.png)  

   Link ► [**here**](#).

:::

#### UX Criteria
:::info ABILITY
* Hackney **AWS Management Console** user  
* **Amazon Athena** user  
* `[my service]` Data Analyst
* `[my service database]` user
:::

:::note BEHAVIOR
**Given** in my web browser, I have accessed Amazon Athena  
**~and** I have selected `[my service]` workgroup  
**~and** Amazon Athena shows `[my service raw zone]` with `[my service database]` equivalent tables and columns  
**~and** I am familiar with the concepts and basic requirements of writing an Amazon Athena SQL query  
**When** I run SQL queries containing those columns from those tables  
**Then** I should be able to find answers to my questions about `[my service]` data  
**~and** I can copy results to the clipboard  
**~and** I can download the results into a CSV file

(**~ 2 to 5**)
:::
