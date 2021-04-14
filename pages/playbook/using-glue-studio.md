---
title: Using Glue Studio
description: "Using AWS Glue Studio to create ETL processes."
layout: playbook_js
---

# Using AWS Glue Studio to create ETL processes

[AWS Glue Studio](https://docs.aws.amazon.com/glue/latest/ug/what-is-glue-studio.html) is a new graphical interface that makes it easy to create, run, and monitor extract, transform, and load (ETL) jobs in AWS Glue.

To use AWS Glue Studio the job needs to be created manually. This guide includes the steps needed to create an editable job in Glue Studio. Templates may have already been created and existing jobs can be duplicated to make it easier to get started with Glue Studio. Dynamically created scripts using [terraform](https://www.terraform.io/) (the infrastructure as code tool Hackney use) will not have the ability to use the visual editor.

NB. If a job has already been created manually you can select the job using the radio button and in the job _Actions_ mennu, select **Clone job**.

## Creating a new Glue job

1. Log in to AWS Management Console
2. Select the **AWS Glue** service from the services menu (or search field)
3. From the AWS Glue menu ETL section, select **AWS Glue Studio**
4. From the Glue Studio main page, choose the **Create and manage jobs** option
5. Within the _Create Job_ section, select **Source and target added to the graph** and select desired Source and Target values (usually S3 for both)
6. Click the **Create** button
7. In the Visual editor that is now displayed, update the the _Data source_ Node properties to set _S3 source type_ to **S3 location** and set the _S3 URL_ for the source data.
8. Also update the the _Data target_ Node properties to set the _S3 URL_ for the data target, usually your department folder in the Data Platform account (you can add additional folders at this point for your new data within your department folder). **Data source and data target (amongst other operations) must be set to be able to save the job, the final details in the Visual tab are going to be specific to your current task.**
9. To complete the set up you need to select **Job details** tab
10. Complete the _Name_ and optional _Description_ fields. You may use this job as a template for repeat use, so a generic name to use as a template might be useful to begin with.
11. Select **dataengineers-dataplatform-prod-glue-role** as the _IAM Role_ for the job
12. The remaining standard fields default values are usually fine to use. The programming language Glue Studio creates can be Scala or Python.
13. In _Advanced properties_ check the _Script filename_ refers to the task being carried out.
14. Set the _Script location_ to the central scripts S3 bucket: `s3://dataengineers-dataplatform-stg-glue-scripts/custom/` - if you want to create folders in the scripts S3 bucket, you can like this: `s3://dataengineers-dataplatform-stg-glue-scripts/custom/YOUR_FOLDER_NAME/`
15. In _Security configuration_ select the appropriate security configuration for your target bucket location (for example for the Raw Zone, use **glue-job-security-configuration-to-raw**)
16. Ensure the _Server-side encryption_ option is **checked**.
17. Add any further libraries or parameters you need in the _Advanced properties_ section.

## Clone and edit an existing Glue job

1. Select the radio button of the job you would like to clone
2. In the _Actions_ dropdown, select _Clone job_. If there is an information banner with a message _Your job was created outside of Glue Studio and has no DAG available_ (see screenshot below) there will not be a Visual tab and therefore you will not have an interface to edit your job. Instead you will need to edit your job in the python job script. To do this navigate to the _Script_ tab. If you prefer to use the interface, then select another job which has a Visual tab or create a new job as instructed in the _Creating a new Glue job_ section above.
3. In the Job Details tab, update the _Name_ for your new job and check the _Creating a new Glue job_ seciton above to ensure the configuration suits your needs
4. To save your job, select the **_Save_** button

![image](https://user-images.githubusercontent.com/46002877/114702251-bcac0500-9d1b-11eb-8475-814523fd58dc.png)
