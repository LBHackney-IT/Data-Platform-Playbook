---
id: prototype-simple-transforms
title: Prototype simple transforms
description: "Onboarding data analysts and engineers to DAP⇨flow, the Data Analytics Platform Airflow integration."
layout: playbook_js
tags: [onboarding]
---
# How can I use Amazon Athena to prototype a simple two-table data transformation?
![DAP⇨flow](../images/DAPairflowFLOWleft.png)  

### 1. Access Amazon Athena
**`🖱`** In your web browser, log in to your AWS account, navigate to the AWS Management Console, and open Amazon Athena. 
   
👉 First time Amazon Athena users should **start here ►** **[DAP⇨flow📚Amazon Athena](../onboarding/access-my-Amazon-Athena-database)** 

### 2. Select your workgroup
**`🖱`** Ensure you have selected `[my service]` from the list box next to “Workgroup”.  
     
### 3. Explore your database
**`🖱`** Ensure you have selected `[my service raw zone]` from the list box under "**Database**" on the left side of the Athena interface, before expanding the lists under "**► Tables**" and/or "**► Views**. Expandanding further should reveal column names and data types, as follows:

* "**▼ Tables**"  
👉 Documented here ► **[📚My service data history](../onboarding/access-my-service-data-history)** 

* "**▼ Views**"  
👉 Documented here ► **[📚My current service data](../onboarding/access-my-current-service-data)** 

### 4. Understand the data model
Make sure you know which tables and columns you need to use for your data transformation:

* You should identify a \<parent table\> with a unique \<parent key\>.

* You should have a \<child table\> with a unique \<child key\> and a foreign key pointing to the \<parent key\> of the \<parent table\>.

### 5. Prepare your SQL query
You can either:

* Start completely from scratch by building up your query as you go along;  

* Or,  use a query template such as the example ***Fig. 5,*** ***a simple two-table transform,*** copying and pasting it into the query editor at the star.  
      
### 6. Customize your query:  
If using the ***Fig. 5*** template:  

* You will need to replace  `<parent table>` and  `<child table>` placeholders with actual names listed under “Views” on the left-hand side of the interface. The Athena editor allows you to insert names directly into the text by simply clicking on the three dots **⋮**  to the right of the name, over on the left-hand side, then selecting “insert into editor”.

* You will need to replace the  `<parent key>` and  `<child key>` placeholders with corresponding key column names from `[my example]`

* Similarly include all the columns you need. So in the example, replace `<col1>`, `<col2>`, etc., with actual column names. Expanding the view name, over on the left side, will show the full list of columns you can use.

#### General considerations

* If your column outputs involve expressions or functions you can consult the Athena function reference ►[**here**](https://docs.aws.amazon.com/athena/latest/ug/functions.html).

* Check that you have fully-qualified table names with table names prefixed by the correct database names, eg. “`[my service raw zone]`”.“\[table name\]”.  The original database name, where used, will be different from the database name used by the Data Platform, so you will need to swap them to be compatible. You can find the Database name you should use instead, on the left of the Athena interface. 

   Later on when you want to put your transform into production it will be essential to prefix every table with the database name. So it is better to add these to every table now, then run it test it, so that you will not be forced to resolve this later on.  
   
   The use of fully-qualified table names means you can use tables from other databases in the Data Platform. For example, you might want to join a table from a refined-zone database with a table (or actually view) from the raw-zone.   

* You must avoid using the following column names in your transform query output because they are reserved by the DAP Airflow implementation when writing your query results back to the S3 data lake partition folders:   
   * import\_date  
   * import\_year  
   * import\_month  
   * import\_day  
   
   The example ***Fig. 5*** template showed the column import\_date renamed as original\_import\_date to avoid that problem.  

   It isn't necessary to output this column in your query but it is good practice to add original\_import\_date to inform the users of your transform products about which generation the data came from.  

   However, because the DAP Airflow deployment adds its own transform generation date to the output when Airflow ingestions trigger transforms immediately afterward, it follows that the ingestion and transform dates will be the same date. For that reason alone, you might not want to use original\_import\_date in your transform in production. But if the pipeline trigger logic might cause these dates to diverge, then you should consider leaving it in.

* It is recommended to order the output by `<parent key>` then `<child key>`.

* Adding a `limit` clause at the end of your query when testing SQL queries in the Athena console normally prevents long-running queries when testing. You will routinely remove the `limit` clause later when your transform goes into production.

### 7. Run your query  
After customizing the SQL code, click “Run” located underneath the code window on the left side in the Athena interface.

### 8. Review the results:  
Athena will fetch the first 100 rows of data, or however many rows your SQL limit clause says:  

* If you included it, the first column original\_import\_data will inform us when the underlying data was ingested from `[my service database]`. If you do not see today’s date then you’ll immediately know that the data ingestion had failed sometime after the date shown, and you should contact the DAP Team to find out what the problem is. But so long as you have data of any given generation you can still test your transform query.  

* The data will be sorted, eg.,  in the  `<parent key>` \+ `<child key>` order if that is what your `order by` clause says.  

* If your query is based on a \<parent table\> left-joined to the `<child table>` it is possible for the `<child key>` and its associated child columns to output NULLs in the place of values, alongside the `<parent key>` and parent column values. It is worth paying attention to ensure such behavior is the same way as when querying \[my service database\] previously.  

### 9. Save your query: 
Check you are in the correct `[my service]` workgroup before clicking on the three dots **⋮** to the right of your Query tab, then select “Save as”. When the dialogue pops up, enter the name of your transform query eg. `[my transform].sql` and write a description before clicking the “Save query” button.

<br> 
</br>  

---
## ***"We* ♡ *your feedback!"***
![DAP⇨flow](../images/DAPairflowFLOWleft.png)  
:::tip UX  
👉 Please use **this link ►** [**DAP⇨flow** `UX` **Feedback / query-my-service-data**](https://docs.google.com/forms/d/e/1FAIpQLSdqeNyWIPMNBHEr-YSyxnXQ4ggTwJPkffMYgFaJ4hGEhIL6LA/viewform?usp=pp_url&entry.339550210=prototype-simple-transforms)  
- Your feedback enables us to improve **DAP⇨flow** and our Data Analytics Platform service.  
- We encourage all our users to be generous with their time, in giving us their recollections and honest opinions about our service.  
- We especially encourage our new users to give feedback at the end of every **📚Onboarding** task because the quality of the onboarding experience really matters.  
☝ **Please use this link to help us understand your user experience!**
:::


#### UX Criteria
:::info ABILITY  
* Hackney **AWS Management Console** user  
* **Amazon Athena** beginner  
* `[my service]` Data Analyst
:::

:::note BEHAVIOR  
**Measures** the behavior of **Amazon Athena** showing `[my service raw zone]` when the user prototypes a simple transform.

**Given** in my web browser, I have accessed **Amazon Athena**  
**~and** I have selected `[my service]` workgroup  
**~and** Amazon Athena shows `[my service raw zone]` with `[my service database]` equivalent tables and columns  
**~and** I am familiar with the concepts and basic requirements of writing an Amazon Athena SQL query  
**~and** I have `[my example]` data transformation I want to create using two related tables from `[my service database]` that I want to join together to produce a combined output  
**~and** `[my example]` shows  a `<parent table>` containing a unique `<parent key>` which is a foreign key in a `<child table>` which also with its own unique `<child key>`  
**~and** Amazon Athena shows `[my service raw zone]` with `[my service database]` equivalent tables and columns when i expand the list under “View” which  includes the `<parent table>` and `<child table>`

**When** I copy-and-paste the SQL code from ***Fig. 5*** into the query editor  
**~and** replace the  `<parent table>` and  `<child table>` placeholders with corresponding table names from `[my example]`  
**~and** replace the  `<parent key>` and  `<child key>` placeholders with corresponding key column names from `[my example]`  
**~and** include `<col1>, <col2>,..<etc.>` for each table and column I want to fetch   
**~and** click “Run” underneath the code window on the left-hand side

**Then** Athena should fetch the first 100 rows of data   
**~and** the first column named original\_import\_date will show when the data was ingested from `[my service database]`  
**~and** the output data should be sorted in `<parent key>+<child key>` order  
**~and** I can save my SQL as a working and fully functional transform query with the name `[my transform].sql` and description in `[my service]` workgroup.

**Scale** of 7 to 13 **~and** flow features.  
:::
