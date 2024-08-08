---
id: query-my-service-data
title: Query my service data
description: "Onboarding data analysts and engineers to DAP⇨flow, the Data Analytics Platform Airflow integration."
layout: playbook_js
tags: [onboarding]
---

# Query and analyze my service data with Amazon Athena

1. **Access Amazon Athena:**   
   In your web browser, log in to your AWS account, navigate to the AWS Management Console, and open Amazon Athena.

2. **Select your workgroup:**  
   Ensure you have selected `[my service]` from the list box next to “Workgroup”.  
     
3. **Explore your database:**   
   Ensure you have selected `[my service raw zone]` from the list box under the "**Database**" section on the left side of the Athena interface, can expand the list tables and view the columns within each table.

4. **Familiarize yourself with SQL queries:**   
   You will need to understand the concepts and basic requirements of writing SQL queries. This includes knowing how to select columns, filter data, join tables, etc.  
   * You can learn more about using Amazon Athena **►** [**here**](https://docs.aws.amazon.com/athena/latest/ug/using-athena-sql.html)

5. **Run SQL queries:**   
   Use the SQL query editor in Amazon Athena to write and run queries involving tables and columns equivalent to the original `[my service database]`.

   ![Fig 5](../images/query-my-service-data-five.png)

6. **Analyze your data:**   
   Review the results of your queries to find answers to your questions about `[my service]` data.

   ![Fig 6](../images/query-my-service-data-six.png)

   * You can copy results to the clipboard.

   * You can download the results into a CSV file.
