---
title: Ingesting Dynamo DB tables into the Landing Zone
description: "Ingesting tables from a Dynamo DB instance into the Data Platform landing zone"
layout: playbook_js
tags: [playbook]
---

## Objective

To setup a job that will ingest specified tables from a Dynamo DB instance.

## Intended audience

- Data Engineers
- Data Analysts

## Prerequisites

- Ensure you have completed the pre-requisites in our [getting set up guide][getting_set_up].
- You have an engineer in the account where the Dynamo DB instance is who can create an IAM role for you in that account.

## Creating a role in the account where the Dynamo DB instance is located

You will need someone who has access to the account where the Dynamo DB tables live to help with this.
They will need to create two roles, for both our pre-production and production AWS accounts.
The roles will both need to have a trust policy that looks like this. One will hold the pre-production account number and the other one, the production account number.
```
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": "sts:AssumeRole",
            "Principal": {
                "AWS": "<account number of data platform account>"
            }
        }
    ]
}
```
Both roles should have the following policy attached to the role.
Where ` -- TABLE ARNs HERE -- ` can be replaced by a list of ARNs for the tables that you want to ingest. 
```
{
  "Version": "2012-10-17"
  "Statement" [
    {
      "Effect" = "Allow"
      "Action" = [
        "dynamodb:List*",
        "dynamodb:Get*",
        "dynamodb:Query",
        "dynamodb:Scan",
        "dynamodb:BatchGet*",
        "dynamodb:DescribeTable*",
        "dynamodb:DescribeStream*",
      ]
      "Resource" = [
        -- TABLE ARNs HERE --
      ]
    }
  ]
}
```

You will need the role ARN's of both roles, once they have been created, for the next step.

## Saving the role ARN in the data platform accounts

Complete this step in both pre-production & production AWS accounts.

1. Login to AWS via [Hackney's SSO][hackney_sso].
1. Navigate to [SSM parameter store][aws_console_ssm] in the AWS console.
1. Click "Create parameter".
1. Set the name of the parameter to be something like `/where-the-data-is-coming-from/prod/role-arn-to-access-dynamodb-tables`. 
Changing the first section to be the name of the data source, the second section to be the environment the Dynamo DB instance is in, then leaving the third section as is.
1. Keep note of the parameter name, as you will need it in the next section, and click "Create parameter".

## Setting up the AWS Glue job

1. Open the [Data Platform Project][data_platform_github]. If you don't have the correct permissions, you'll get a '404' error (see [getting set up][getting_set_up]).
2. Navigate to the main `terraform` directory and add a new file named after the dataset you are ingesting, for example `30-mtfh-tables-ingestion.tf`. Click on "Add file" then "Create new file" to do this.
3. Load the role ARN saved in the [previous section](#saving-the-role-arn-in-the-data-platform-accounts) in to terraform.
  - Copy this example code block into the file.
    ```tf
    data "aws_ssm_parameter" "role_arn_to_access_housing_tables" {
      name = "/where-the-data-is-coming-from/prod/role-arn-to-access-dynamodb-table"
    }
    ```
  - Rename `role_arn_to_access_housing_tables` to be relevent to the kind of tables you are ingesting.
  - Change the name `/where-the-data-is-coming-from/prod/role-arn-to-access-dynamodb-table` to be the name of the parameter you created in the previous section.



4. Create the glue job & crawler.
Copy the example terraform module below into the file.
  ```tf
  module "ingest_dataset_tables" {
    source        = "../modules/aws-glue-job"
    environment   = var.environment
    tags          = module.tags.values
    glue_role_arn = aws_iam_role.glue_role.arn

    job_name                       = "${local.short_identifier_prefix}Ingest MTFH tables"
    job_description                = "Ingest a snapshot of the tenures table from the Housing Dynamo DB instance"
    script_s3_object_key           = aws_s3_bucket_object.dynamodb_tables_ingest.key
    helper_module_key              = aws_s3_bucket_object.helpers.key
    pydeequ_zip_key                = aws_s3_bucket_object.pydeequ.key
    number_of_workers_for_glue_job = local.number_of_workers_for_mtfh_ingestion
    glue_scripts_bucket_id         = module.glue_scripts.bucket_id
    glue_temp_bucket_id            = module.glue_temp_storage.bucket_id
    job_parameters = {
      "--table_names"       = "TenureInformation,PeopleInformation",
      "--role_arn"          = data.aws_ssm_parameter.role_arn_to_access_housing_tables.value
      "--s3_target"         = "s3://${module.landing_zone.bucket_id}/mtfh/"
      "--number_of_workers" = local.number_of_workers_for_mtfh_ingestion
    }

    crawler_details = {
      database_name      = aws_glue_catalog_database.mtfh_landing_zone.name
      s3_target_location = "s3://${module.landing_zone.bucket_id}/mtfh/"
      table_prefix       = "mtfh_"
      configuration = jsonencode({
        Version = 1.0
        Grouping = {
          TableLevelConfiguration = 3
        }
      })
    }
  }
  ```
This is example terraform to create a glue job in the Data Platform account.
You will need to changes the following values
   - The module name - Declared at the top, in the example it is set to "ingest_dataset_tables". You should rename this to reflect the entire collection of data that is being ingested by this job.
   - `job_name` - Name of your job with `${local.short_identifier_prefix}` prefixed in front of it like the example.
   - `job_description` (Optional) - An optional description for what this job is doing.
   - `database_name` - The name of the glue catalogue database where the tables will be written to in the data platform.
   If you want to create the tables in the landing zone database, this will be `aws_glue_catalog_database.landing_zone_catalog_database.name`.
   If you want to create the tables in a departments raw zone database, this will be `module.department_DEPARTMENT_NAME.raw_zone_catalog_database_name`.
   - `--table_names` - A comma delimited list of table names to ingest from Dynamo DB.
   - `--role_arn` - This should be the value of the data object created in the step above, for the example given it would be `data.aws_ssm_parameter.role_arn_access_housing_tables.value`.
   This signifies to terraform to go and get the value of this parameter, in which you have saved the ARN of the role created in the initial step.
   Using the data object instead to writing the actual role ARN here allows you to configure a different role ARN for each environment.
   - `--number_of_workers` and `number_of_workers_for_glue_job` - Both of these values should be set to the same value. More workers will mean more paralellisation and so if there is a large amount of data you might want to increase this, but if there is a small amount of data it will be expensive to have this too high as it won't utilise all of the workers.
   As a guide, we have a table that has around 90000 rows in it and we're using 12 workers, please speak to an engineer if you are unsure.

   The following parameters are inside the `crawler_details`.
   - `s3_target_location` and `--s3_target` - This will specify the location in S3 bucket that the data is written to.
   The glue job will create a folder for each table that it is ingesting so you just need to give the prefixes for these tables to live in.
   For example if you are writing to the landing zone this could be, `s3://${module.landing_zone.bucket_id}/mtfh/`, if the tables were coming from modern tools for housing.
   Or if you are writing to a departmental folder in the raw zone this could be, `s3://${module.raw_zone.bucket_id}/department_name/mtfh/`
   - `table_prefix` (Optional) - This is an optional variable that allows you to add a prefix to the table names that are created in the Glue catalog.
  For example, if you are ingesting a table with name "houses" and you set a prefix of "hackney\_borough\_" then the resulting table name in the Glue catalog will be "hackney\_borough\_houses".
   - `TableLevelConfiguration` - This will be dependent on your `s3_target_location`. It is the level at which tables are created in glue, from the S3 path.
  Counting from the bucket name to the table name, so for the S3 paths `s3://${module.landing_zone.bucket_id}/mtfh/` and `s3://${module.raw_zone.bucket_id}/department_name/mtfh/` the table levels would be 3 and 4 respectively.

5. Schedule the job (Optional).
If you don't complete this step then the job and crawler will run once on creation and after that you will be able to run the job manually in the AWS console but it won't run on a schedule.
If you want it to run on a schedule then please refer to the "Variables used for scheduling a Glue job" section of [this article][scheduling_glue_jobs] for an explanation on how to set the variables to do so.

6. Submit your changes, by referring to the [Committing changes][committing-changes] section of the **Using Github** guide.
   - The Data Platform team needs to approve any changes to the code that you make, so your change won't happen automatically.
     Once your changes have been approved, the job will run at the next scheduled time.

### Running the ingestion manually

Once you have been notified that your pull request has been merged, you can run the ingestion manually from the AWS console or wait until the scheduled time (if you set one).

You can do this by navigating to [AWS glue workflows][aws_glue_workflow], selecting the workflow named `<department_name>-<dataset_name>`, clicking the "Actions" dropdown and then "Run".

### Monitoring the ingestion

Spark Web UI is used to monitior and debug the glue jobs. Every 30 seconds, AWS Glue flushes the Spark event logs to an S3 bucket titled Spark UI Bucket.

[aws_glue_workflow]: https://eu-west-2.console.aws.amazon.com/glue/home?region=eu-west-2#etl:tab=workflows
[committing-changes]: ../getting-set-up/using-github#committing-your-changes-to-the-data-platform-project
[aws_console_ssm]: https://eu-west-2.console.aws.amazon.com/systems-manager/parameters/?region=eu-west-2&tab=Table
[scheduling_glue_jobs]: ../transforming-data/using-aws-glue/002-deploy-glue-jobs.md#variables-used-for-scheduling-a-glue-job
[hackney_sso]: https://hackney.awsapps.com/start#/
[data_platform_github]: https://github.com/LBHackney-IT/data-platform
[getting_set_up]: ../getting-set-up/index.md