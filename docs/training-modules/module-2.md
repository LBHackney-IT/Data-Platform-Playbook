---
title: Transforming data to refined zone using Sagemaker
description: "Training module: Transforming data to the refined zone using Sagemaker"
layout: playbook_js
tags: [training]
---

# Data Platform Training Module - Transforming data using PySpark and writing to the refined zone

In this module you will manipulate the data that you loaded into the Data Platform raw zone in [module 1][module_1].
You will save the result of your work into the [refined zone][refined_zone] of the data platform.

The refined zone is for data that has been enhanced or enriched and is ‘ready’ for analysis. 

You will be using [PySpark][about_pyspark] to create and test your script. You will create your code in a Jupyter Notebook environment running in Amazon SageMaker.

Jupyter notebooks are a convenient way to test code locally as Glue Studio is not so straightforward for code development (despite what the name implies!). You can read more about Jupyter notebooks [here][about_jupyter].

This module is all about prototyping within a sandbox environment, and therefore we won’t be pushing any code to the Data Platform GitHub repository.

## Overview

You’ll write a few lines of code in PySpark which will include reading data from S3, joining the two Covid datasets together and then writing the newly created dataset back to S3 in the refined zone. 

PySpark is an interface that uses the Python programming language to access the Apache Spark cluster-computing framework; therefore the syntax will seem a bit different if you have used Python packages such as Pandas or NumPy before.

## Prerequisites

Please ensure that both the ['Getting set up' module][module_0] and the ['Ingesting data' module][module_1] are completed before proceeding.
You will need the names of the tables that were created from completing the 'Ingesting data' module.

## Step-by-step instructions

### 1. Developing the job script in a Jupyter notebook

1. Launch the sandbox notebook within Sagemaker by following [this guide][sagemaker_article].

2. Open the notebook template called `using-pyspark.ipynb`.
   * Familiarise yourself with the steps (variables, reading, transforming and writing data).
   * Duplicate the template, saving it in the sandbox folder, and rename it (you can append your name to the name of the file).

3. Prototype your own ETL (Extract Transform Load) job to transform the data in PySpark. 
   The [PySpark By Examples website][pyspark_by_example] is a handy resource to write your code. 
   
   **Please try the following things on your data:** 
    * Load the Covid Locations dataset into the notebook.
         * You will first need to set the variables in the first cell, see the "TODO" comments.
         The datasets will be the same as the last step in Module 1 training.
    * Print out the schema and the first few rows of data to check it has imported correctly.
    * Change a column name: rename `location` to `country`.
    * Load the Covid Vaccinations dataset into the notebook - Repeat the 2 steps above. 
    * Cast a column to a different type e.g. a string date to date type.
    * Join the two tables to a single output using the `country` column.
4. Write to the Refined zone
When you are confident that your transformation is working, you can use the last cell of the notebook to actually write the data into the Data Platform (please note that a notebook will only ever write to the pre-production environment, never to the production environment as it is meant for prototyping).
5. Find and view the data in the refined zone bucket within S3
If the previous step has worked correctly, then you should be able to see your newly created parquet files in the refined zone S3 bucket within the sandbox department folder. We won't try to visualise or query the data in this module.

>:tada: Congratulations! You have completed this module!

In the [next module][module_3], you will turn your script into a [Glue][about_glue] job and deploy it into the Data Platform.


[module_0]: ./module-0.md
[module_1]: ./module-1.md
[module_3]: ./module-3.md
[module_1_step_6]: ./module-1.md#6-crawling-the-ingested-data-to-make-it-available-in-the-glue-catalogue
[about_pyspark]: https://spark.apache.org/docs/latest/api/python/
[about_glue]: https://aws.amazon.com/glue/?whats-new-cards.sort-by=item.additionalFields.postDateTime&whats-new-cards.sort-order=desc
[about_jupyter]: https://jupyter.org/
[pyspark_by_example]: https://sparkbyexamples.com/pyspark-tutorial/
[aws_glue_studio]: https://eu-west-2.console.aws.amazon.com/gluestudio/home?region=eu-west-2#/jobs
[querying_with_athena]: ../playbook/querying-and-analysing-data/querying-data-using-sql.md
[sagemaker_article]: ../playbook/transforming-data/using-aws-glue/006-using-sagemaker.md 
[setting_up_etl_job]: ../playbook/transforming-data/using-aws-glue/001-using-glue-studio.md
[monitoring_jobs]: ../playbook/transforming-data/using-aws-glue/001-using-glue-studio.md#monitoring-a-glue-job-run
[hackney_sso]: https://hackney.awsapps.com/start#/
[s3]: https://s3.console.aws.amazon.com/s3/home?region=eu-west-2
[athena_query_editor]: https://eu-west-2.console.aws.amazon.com/athena/home?region=eu-west-2#/query-editor/
[glue_crawlers]: https://eu-west-2.console.aws.amazon.com/glue/home?region=eu-west-2#catalog:tab=crawlers
[refined_zone]: ../glossary.md#refined-zone
