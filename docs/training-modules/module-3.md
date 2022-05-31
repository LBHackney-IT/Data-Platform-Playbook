
---
title: Module 3 - Deploying a job in Glue
description: "Training Module 3"
layout: playbook_js
tags: [training]
---

# Module 3 - Deploying a job in Glue


In this module, you will turn the transformation script you cretaed in [module 2][module_2] into a Glue job and ‘productionize’ it. At the end of the module, you will have a Glue job (and Crawler) that is managed by the Data Platform infrastructure and code repository which you can use to carry out your tasks.


## Overview

First, you will be carrying over your transformation script from Sagemaker into the Glue console, where it will become a Glue job. You'll test this job and check your data like in Module 1. 

Then, you will deploy the same job following the Data Platform standard process. This involves two main changes:
  * Your Glue job will be coded in Terraform. When deployed, Terraform will generate all the necessary infrastructure in the AWS environment (job, crawler, scheduler). This will replace the elements you’ve created manually in the AWS console in the second part of Module 2. This is ‘Infrastructure as Code’ (IaC) and brings a lot of advantages to the Data Platform:
    * Quality assurance: we use Terraform templates so all elements of infrastructure follow the same standards
    * Repeatability: your job can be recreated by a simple redeployment if anything goes wrong. It can also be replicated to another environment, for instance from Staging to Production
  *Both the PySpark script and the job details in Terraform will become part of the Data Platform code base and saved in Github. This also brings advantages:
    * Safety: Your code cannot be accidentally lost and is version-controlled
    * Quality assurance: Your code will be reviewed by at least 2 engineers. Github will also perform automated checks which must pass before merging it into the repository



## Prerequisites

Please ensure that both [Module 0][module_0], [Module 1][module_1] and [Module 2][module_2] are completed before proceeding.


## Step-by-step instructions

### 1. Testing the transformation script in a AWS glue job

You’ll take the following steps before productionising your job, to check it runs smoothly in the AWS glue environment (it should, because the notebook you've used in [Module 2][module_2] runs against glue).
It will be an opportunity for you to try logging.
As we’re just testing, we won’t write any Terraform and we won’t schedule the job. 
We’ll also delete our job at the end.
If you need more detailed instructions at any point checkout [the guide to set up an ETL job][setting_up_etl_job].

1. Login to AWS pre-production acccount via the [Hackney SSO][hackney_sso].
2. Set up your new job in Glue Studio.
    * Go to [AWS Glue Studio][aws_glue_studio] and open the Template job, called "stg job_template".
    * Clone the job (from Actions) and rename it with your name and remove "stg" from the prefix, for example "jane doe template".
    * Open the job and familiarise yourself with the steps (reading, transforming and writing data) and note the differences compared to the Notebook template.

    ![Cloning a glue job](./images/cloning_jobs.png)
3. Write your job.

    * Paste your code from the notebook into the template, ignoring the first cell (Cells can be merged in Jupyter by holding `Shift` and selecting the cells, then pressing `Shift+M` on your keyboard).

    * For the variables defined in the first cell of your notebook, you will use the `Job details` tab instead of writing them in the script.
    You should define them in the **Job parameters** panel which can be found under `Advanced properties`. 
      You should also update the S3 path in the **Script path** field to `s3://dataplatform-stg-glue-scripts/custom/`. 

    ![job parameters](./images/job_parameters.png)
4. Run your job.
5. Review the run result logs.
See the [monitoring section][monitoring_jobs] of the using Glue Studio guide for an explanation on how to do this.
6. Once your job status has changed from `Running` to `Succeeded` you should check the data wrote correctly into [S3][s3].
To do this, follow the same steps in the [last section of Module 1][module_1_step_6].
7. [Crawl][glue_crawlers] the results. (Using the crawler named “sandbox-refined-zone”).
8. Check the data in [Athena][athena_query_editor] - ([playbook][querying_with_athena]).
9. Remove the temporary resources that you created in the AWS Console:
   - Glue job
   - S3 files: check the S3 target location of your job for a reminder of where the data was written.





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
