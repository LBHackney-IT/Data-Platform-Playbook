---
title: Module 2 - Transforming data to refined zone
description: "Training Module 2"
layout: playbook_js
tags: [training]
---

# Module 2 - Transforming data & writing to the refined zone


In this module you will manipulate the data that you loaded into the Data Platform raw zone in [module 1][module_1].
You will save the result of your work into the [refined zone][refined_zone] of the data platform.
The refined zone is for data that has been enhanced or enriched and is ‘ready’ for analysis. 
You will be using [PySpark][about_pyspark] to code your job, and [AWS Glue][about_glue] to run it. You will create your code in a Jupyter Notebook environment running in AWS Sagemaker before copying it to the AWS console.
Jupyter notebooks are a convenient way to test code locally as Glue Studio is not so straightforward for code development (despite what the name implies!). You can read more about Jupyter notebooks [here][about_jupyter].

This module is all about prototyping within a sandbox environment and therefore we won’t be pushing any code to the Data Platform GitHub repository.

## Overview

You’ll write a few lines of code in PySpark which will include reading data from S3, joining the two Covid datasets together and then writing the newly created dataset back to S3 in the refined zone. Then, you will be working in the console, running your job and checking your data like in Module 1. 

PySpark is an interface that uses the Python programming language to access the Apache Spark cluster-computing framework; therefore the syntax will seem a bit different if you have used Python packages such as Pandas or NumPy before.


## Prerequisites

Please ensure that both [Module 0][module_0] and [Module 1][module_1] is completed before proceeding.
You will need the names of the tables that were created from completing Module 1.

## Step-by-step instructions

### 1. Developing the job script in a Jupyter notebook

1. Launch the sandbox notebook following [this guide][sagemaker_article].
1. Open the notebook template called `using-pyspark.ipynb`.
    * Familiarise yourself with the steps (variables, reading, transforming and writing data).
    * Duplicate the template, saving it in the sandbox folder, and rename it (you can append your name to the name of the file).

NOT CLEAR WHERE TO FIND DATASET NAME AND DATABASE NAME
RUN ALL CELLS UP TO "TRANSFORM DATA", then print out the schema 

1. Prototype your own ETL (Extract Transform Load) job to transform the data in PySpark. 
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

### 2. Testing the finished job in AWS glue

You’ll take the following steps before productionising your job, to check it runs smoothly in the AWS glue environment (it should, because the notebook runs against glue).
It will be an opportunity for you to try logging.
As we’re just testing, we won’t write any Terraform and we won’t schedule the job. 
We’ll also delete our job at the end.
If you need more detailed instructions at any point checkout [the guide to set up an ETL job][setting_up_etl_job].

1. Login to AWS pre-production acccount via the [Hackney SSO][hackney_sso].
1. Set up your new job in Glue Studio.
    * Go to [AWS Glue Studio][aws_glue_studio] and open the Template job, called "stg job_template".
    * Clone the job (from Actions) and rename it with your name and remove "stg" from the prefix, for example "jane doe template".
    * Open the job and familiarise yourself with the steps (reading, transforming and writing data) and note the differences compared to the Notebook template.

    ![Cloning a glue job](./images/cloning_jobs.png)
1. Write your job.

    * Paste your code from the notebook into the template, ignoring the first cell (Cells can be merged in Jupyter by holding `Shift` and selecting the cells, then pressing `Shift+M` on your keyboard).

    * For the variables defined in the first cell of your notebook, you will use the `Job details` tab instead of writing them in the script.
    The Job parameters panel can be found under `Advanced properties`.

    ![job parameters](./images/job_parameters.png)
1. Run your job.
1. Review the run result logs.
See the [monitoring section][monitoring_jobs] of the using Glue Studio guide for an explanation on how to do this.
1. Once your job status has changed from `Running` to `Succeeded` you should check the data wrote correctly into [S3][s3].
To do this, follow the same steps in the [last section of Module 1][module_1_step_6].
1. [Crawl][glue_crawlers] the results. (Using the crawler named “sandbox-refined-zone”).
1. Check the data in [Athena][athena_query_editor] - ([playbook][querying_with_athena]).
1. Remove the temporary resources that you created in the AWS Console:
   - Glue job
   - S3 files: check the S3 target location of your job for a reminder of where the data was written.

>:tada: Congratulations! You have completed Module 2!



[module_0]: ./module-0.md
[module_1]: ./module-1.md
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