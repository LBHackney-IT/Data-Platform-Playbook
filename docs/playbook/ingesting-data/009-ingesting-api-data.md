---
title: Ingesting data from an API to the Data Platform
description: "Ingesting API data into the Data Platform using an AWS Lambda function"
layout: playbook_js
tags: [playbook]
---

## Prerequisites 
- You have a Python script to be used in the Lambda
- You have a Github account, you can [create one][github_signup] yourself using your Hackney email.
- You have been added to the 'LBHackney-IT' team, you can request this from Rashmi Shetty.

## Overview
This guide walks you through the process of setting up the infrastructure to deploy an AWS Lambda function to be used to ingest data from an API.
It assumes you already have a script that will make the API calls to retrieve the required data.


### Add the API credentials to the Data Platform project
The API credentials can be stored and retrieved from AWS Secrets Manager.
You will then be able to retrieve and use credentials in your Lambda function script.

- Contact an engineer from the Data Platform team to add the API credentials to AWS Secrets Manager.
    - You will need to request that a **secret** (with an appropriate description) is created following the naming convention below:
      ```
      api-credentials/DATASET_NAME
      ```
      **Remember this name as you will need it later**. For example: `api-credentials/casenotes-data-key` 

    - Request that the necessary API credentials be added to this secret in key-value pairs. For example:
        - `api_key` = `RandomKey`
        - `secret` = `RandomSecret`

- You will be notified once the secret has been stored with the credentials.
  Make a note of the **secret** name, and the **keys** set above as they will be needed in the [Set up API Ingestion Lambda](#set-up-api-ingestion-lambda) below.

### Add your script to the Data Platform repository
In this section, you'll be adding your script to the Data Platform repository so that it can be used in the Lambda function to ingest the API data.

**Note: You will need to complete this step from your IDE (Integrated Development Environment) or ask an engineer for assistance as it involves creating a directory which currently can't be done in the Github website user interface.**

1. Open the [lambdas directory][lambdas-directory] in the Data Platform Project in GitHub.
1. Create a new directory suffixed with `_api_ingestion`.
   - Set this to the name of the data/API you are ingesting.
     Ensure the name is **lowercase** with **words separated by underscores**.
     For example: `casenotes_data_api_ingestion`.
   - Make a note of the name of the directory as it will be needed for the [Set up API Ingestion Lambda Module](#set-up-api-ingestion-lambda-module) section below. 
1. Create a new file in this directory called `main.py`, you can also add your tests to its own file: `test.py`
1. Paste your code in the respective files. **Ensure the main execution function in your `main.py` file is called `lambda_handler`.**
1. Seek assistance from an engineer to get the required packages for your Lambda installed.
1. Submit your changes by referring to the [Committing changes][committing-changes] section of the **Using Github** guide.
   The Data Platform team needs to approve any changes to the code, so your change won't happen automatically.

:::important Updating your Lambda script
If you need to update your Lambda script in the future, you must follow steps 4-6 to have those changes deployed to the Data Platform Project.
:::

### Set up API Ingestion Lambda Module
In this section, you will be writing the code, using a template format, that will deploy your Lambda function to the Data Platform Project (or update an existing one if you need to make changes to an existing Lambda function).

**Note: The steps in this section refer specifically to Github user interface**. However, if you are familiar working with the Data Platform project from your IDE, then you can also make the changes in your IDE and commit them to the Data Platform repository.

1. Open the [terraform directory][terraform-directory] in the Data Platform Project in GitHub.

    - If you don't have the correct permissions, you'll get a '404' error (see the [Getting Set Up documentation][getting-set-up]).

1. Open `66-api-ingestion.tf`. 


1. Click `edit` or the **pencil icon** (:pencil2:) then copy the last module block and paste it at the bottom of the file.
   An example of what a module block looks like can be seen in the [Example Module Block](#example-module-block) section below.

1. Update the `module` name using the name convention `<api_data_name>_api_ingestion`, for example: `"casenotes_data_api_ingestion"`.
    - The module name must be all **lowercase** with **words separated by underscores**.
      Ensure the name is unique to all other module names in this file.

#### The following input variables are required:

_**Note**: If you have copied an existing module block then you won’t need to change the **source**, **tags**, **identifier_prefix**, **lambda_artefact_storage_bucket** and, **secrets_manager_kms_key** input variables._
`<ZONE>` refers to either: `raw`, or `landing` S3 zones.

- **source** (required): This will be `"../modules/api-ingestion-lambda"`. (This is the path to where the api ingestion Lambda module is saved within the repository).

- **tags** (required): This will be `module.tags.values`

- **identifier_prefix** (required): This will be `local.short_identifier_prefix`

- **lambda_artefact_storage_bucket** (required): This will be `module.lambda_artefact_storage.bucket_id`

- **lambda_name** (required): Name of the Lambda function. This should be the same as the name set in step 2 of the [Add your script to the Data Platform repository](##add-you-script-to-the-data-platform-repository) section above, **however with words separated by hyphens (`-`) instead, and all lowercase.** 
  (This will be used to find your Lambda script).
  
  For example:
  ```
  lambda_name = "casenotes-data-api-ingestion"
  ```
- **secrets_manager_kms_key** (required): This will be `aws_kms_key.secrets_manager_key`
  
- **s3_target_bucket_arn** (required): This will be `module.<ZONE>_zone.bucket_arn`.
  `<ZONE>` should be either `raw`, or `landing` depending on the S3 zone you are ingesting your data to.
  
- **s3_target_bucket_name** (required): The target S3 bucket to ingest the data to. 
  This will be `module.<ZONE>_zone.bucket_id`.
  `<ZONE>` should be either `raw`, or `landing` depending on the S3 zone you are ingesting your data to.
  
- **api_credentials_secret_name** (required): This will be the same name you set in the previous section. For example:
  ```
  api_credentials_secret_name = "api-credentials/case-notes"
  ```
  
- **s3_target_bucket_kms_key_arn** (required): This will be `module.<ZONE>_zone.kms_key_arn`.
  `<ZONE>` should be either `raw`, or `landing` depending on the S3 zone you are ingesting your data to.

- **lambda_environment_variables** (required): An object containing key-value pairs of environment variables to be used in your Lambda code.
  
  For example: An API ingestion Lambda which has its API credentials stored as a secret called: `"api-credentials/case-notes"` in AWS Secrets Manager, and writes to a directory called: `casenotes-data` in the landing zone, will have the following set as environment variables:
  ```
  lambda_environment_variables = {
    "SECRET_NAME" = "api-credentials/casenotes-data-key"
    "TARGET_S3_BUCKET_NAME" = module.landing_zone.bucket_id
    "OUTPUT_FOLDER" = "casenotes-data"
  }
  ```
  _The `OUTPUT_FOLDER` above can be your department name followed by dataset name if ingesting to your department's raw zone area. For example: `"housing/casenotes-data"`._
  
  **Environment variables set here can be retrieved in your Lambda code.**
  For example, to retrieve the above environment variables you would add the following to your Lambda code:
  ```
  from os import getenv
  
  #main_lambda_function():
    load_dotenv()
    secret_name = getenv("SECRET_NAME")
    s3_bucket = getenv("TARGET_S3_BUCKET_NAME")
    output_folder_name = getenv("OUTPUT_FOLDER")
  ```

#### The following input variables are optional:
_If an optional variable is not needed you should delete the entire line in the module block._

- **ephemeral_storage** (optional): The amount of Ephemeral storage (`/tmp`) to allocate for the Lambda Function in MBs. 
  This input variable can be used to expand the total amount of Ephemeral storage available beyond the **default which is `512` (MBs).** 
  
  In most cases the default value is sufficient, however, if your api ingestion Lambda runs an intensive/ heavy process, you may want to override this. For example:
  ```
  ephemeral_storage = 6144
  ```
- **lambda_timeout** (optional): The amount of time in seconds before the Lambda will timeout/ stop running.
  **The default value is set to `900` (seconds) which is 15 mins**. This is the **maximum** execution time for an AWS Lambda function.
  
- **lambda_memory_size** (optional): The amount of memory in MBs your Lambda Function can use at runtime.
  **The default value is `256`.**
  In most cases the default value is sufficient, however, if your api ingestion Lambda runs an intensive/ heavy process, you may want to override this. For example:
  ```
  lambda_memory_size = 512 
  ```
  
- **lambda_execution_cron_schedule** (optional): Schedule to run the Lambda function specified using Cron expressions (see [AWS Cron Expression documentation][aws_cron_expressions]).
    **The default schedule is 6am everyday**.
    - For example, if you wanted your API ingestion Lambda run at 08:30am every day, your Cron expression would look like:

      ```
      lambda_execution_cron_schedule = "cron(30 8 * * ? *)"
      ```

    - You can also use [this tool][cron-expression-generator] to generate your Cron expressions.

When you are done setting the input variables for this module, you can move onto the next section.

### Commit your changes and create a Pull Request for review by the Data Platform team
You can now submit your changes for review by the Data Platform team.
- See [Committing changes][committing-changes] section of the **Using Github** guide.
  The Data Platform team needs to approve any changes to the code that you make, so your change won't happen automatically.
  Once your changes have been approved and deployed, the job will run at the next scheduled time (if scheduled).

### Example Module Block

```
module "casenotes_data_api_ingestion" {
  source = "../modules/api-ingestion-lambda"
  tags   = module.tags.values

  identifier_prefix              = local.short_identifier_prefix
  lambda_artefact_storage_bucket = module.lambda_artefact_storage.bucket_id
  lambda_name                    = "casenotes-data-api-ingestion"
  secrets_manager_kms_key        = aws_kms_key.secrets_manager_key
  s3_target_bucket_arn           = module.landing_zone.bucket_arn
  s3_target_bucket_name          = module.landing_zone.bucket_id
  api_credentials_secret_name    = "api-credentials/casenotes-data-key"
  s3_target_bucket_kms_key_arn   = module.landing_zone.kms_key_arn
  lambda_environment_variables   = {
    "SECRET_NAME" = "api-credentials/casenotes-data-key"
    "TARGET_S3_BUCKET_NAME" = module.landing_zone.bucket_arn
    "OUTPUT_FOLDER" = "casenotes-data"
  }
}
```

[github_signup]: https://github.com/signup
[getting-set-up]: ../getting-set-up/index.md
[committing-changes]: ../getting-set-up/using-github#committing-your-changes-to-the-data-platform-project
[lambdas-directory]: https://github.com/LBHackney-IT/Data-Platform/tree/main/lambdas
[terraform-directory]: https://github.com/LBHackney-IT/Data-Platform/tree/main/terraform
[aws_cron_expressions]: https://docs.aws.amazon.com/AmazonCloudWatch/latest/events/ScheduledEvents.html#CronExpressions
[cron-expression-generator]: https://www.freeformatter.com/cron-expression-generator-quartz.html
