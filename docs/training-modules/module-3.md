
---
title: Module 3 - Deploying a job in Glue
description: "Training Module 3"
layout: playbook_js
tags: [training]
---

# Module 3 - Deploying a job in Glue


In this module, you will turn the transformation script you created in [module 2][module_2] into a Glue job and ‘productionize’ it. At the end of the module, you will have a Glue job (and Crawler) that is managed by the Data Platform infrastructure and code repository which you can use to carry out your tasks.


## Overview

First, you will be carrying over your transformation script from Sagemaker into the Glue console, where it will become a Glue job. You'll test this job and check your data like you did in Module 1. 

Then, you will deploy the same job following the Data Platform standard process. This involves two main changes:
  * Your Glue job will be coded in Terraform. When deployed, Terraform will generate all the necessary infrastructure in the AWS environment (job, crawler, scheduler). This will replace the elements you’ve created manually in the AWS console in the second part of Module 2. This is ‘Infrastructure as Code’ (IaC) and brings a lot of advantages to the Data Platform:
    * Quality assurance: we use Terraform templates so all elements of infrastructure follow the same standards
    * Repeatability: your job can be recreated by a simple redeployment if anything goes wrong. It can also be replicated to another environment, for instance from Staging to Production
  * Both the PySpark script and the job details in Terraform will become part of the Data Platform code base and saved in Github. This also brings advantages:
    * Safety: Your code cannot be accidentally lost and is version-controlled
    * Quality assurance: Your code will be reviewed by at least 2 engineers. Github will also perform automated checks which must pass before merging it into the repository



## Prerequisites

Please ensure that both [Module 0][module_0], [Module 1][module_1] and [Module 2][module_2] are completed before proceeding.


## Part 1. Prototyping the job in the AWS glue console

You’ll take the following steps before productionising the script you wrote in Module 2, to check it runs smoothly as a job in the AWS glue environment (it should, because the notebook environment you used in Sagemaker runs against glue).
It will be an opportunity for you to try logging.
As we’re just testing, we won’t write any Terraform (we'll do this in the second half of this module) and we won’t schedule the job. 
We’ll also delete our job at the end.
If you need more detailed instructions at any point checkout [the guide to set up an ETL job][setting_up_etl_job].

### Detailed steps for part 1: 
1. Login to AWS pre-production acccount via the [Hackney SSO][hackney_sso].
2. Set up a new job in Glue Studio. You can start from a template.
    * Go to [AWS Glue Studio][aws_glue_studio] and open the Template job, called "stg job_template".
    * Clone the job (from Actions) and rename it with your name and remove "stg" from the prefix, for example "jane doe template".
    * Open the job and familiarise yourself with the steps (reading, transforming and writing data) and note the differences compared to the Notebook template.

    ![Cloning a glue job](./images/cloning_jobs.png)
3. Write your job.
    * In a different tab, open Sagemaker and navigate to the notebook you created in Module 2.
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

Congratulations, you've tested that your transformation is working in Glue. You can move to the next part of Module 3.

## 2. Part 2: Deploying your job via Terraform
In this second part of Module 3, you will ‘productionize’ the job you’ve tested in the previous part. To do this, you will write a Terraform module in the Data Platform GitHub repository and you'll deploy it. The entirety of this module will be carried out in the GitHub User Interface, but you could also work in your IDE if you prefer. 

### Overview of the steps for part 2: 

* First, you’ll delete the data you've created in part 1 as they will get created again in this part.
* Then, you will save your PySpark script at the relevant location of the DP repository. You already have the code ready.  
* Then, you will write a Module in Terraform that encapsulates all the resources your Glue job requires.
* You will then create a Pull Request and merge your code with the Pre-Production DP repository
* At this point, Github will attempt to deploy your code, and your job will get created in AWS. 
* You’ll be able to retrieve your Glue job in the AWS console, to run it, and check the results in Athena. 

### Detailed steps for part 2: 
9. Delete the data generated in Part 1 of this module
This is to avoid getting confused at the end of this Module, as you will be running the newly deployed job, generating the same data again. To delete your data, navigate to it in S3 (Refined zone bucket, Sandbox department) and permanently delete the 2 full folders with your name (there should be one folder for Locations and one for Vaccinations). *Do NOT* delete your data from the Raw zone, otherwise you would have to ingest it again by running the ingestion job created in Module 1!

10. Create your PySpark script in the repository
This step can be done in Github in the browser, or in your IDE (in this case make sure you have pulled the last version of the DP repository).
Follow the steps from the [Using GitHub Playbook article][using github], part 1.
Add your name at the end of the file name. An name example is *covid_vaccinations_arda.py*.
When you validate your new file in GitHub, do not create a Pull Request straight away but just a new branch. You'll use the same branch in the next step and raise one PR at the end.



[module_0]: ./module-0.md
[module_1]: ./module-1.md
[module_2]: ./module-2.md
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
[using github]: https://lbhackney-it.github.io/Data-Platform-Playbook/playbook/transforming-data/using-aws-glue/deploy-glue-jobs/#1-add-your-script-to-the-data-platform-project-using-the-github-ui
