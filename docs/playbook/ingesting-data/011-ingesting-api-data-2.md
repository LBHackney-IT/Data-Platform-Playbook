---
title: Ingesting data from an API to the Data Platform 2
description: "Ingesting API data into the Data Platform using an AWS Lambda function 2"
layout: playbook_js
tags: [playbook]
---
# Ingesting Data from an API into the Data Platform - 2
## Introduction
This is a guide for ingesting data from an API using [AWS Lambda](https://aws.amazon.com/lambda/), into the Data Platform

This guide does not cover how to write a Python script to call data from an API. Example script used for Vonage [here](https://github.com/LBHackney-IT/Data-Platform/blob/main/lambdas/vonage_api_ingestion/main.py )

Here are the major sections to this guide
* Writing the code for the Data Platform
  * Desired Output
  * Basic Rules
  * Some Tips
* Integrating S3
* Generating a Piplock and Requirements.txt File
* Update the Data Platform with our Script
* Setting up Terraform to automate it
* Moving it all into Prod

## Pre-requisites

* You need to have a department ready for the Data, by the time you reach the First Time Ingestion. You can find out how to onboard a department [Here](https://playbook.hackney.gov.uk/Data-Platform-Playbook/playbook/getting-set-up/onboarding-new-departments-to-the-platform)
* Have the secrets/api_key stored in both Production and Pre-Production environments, with the naming convention of "/[Department Name]/[secret name]". So for example, /customer-services/vonage

## Setting up Terraform to automate it

Now that we have a script which will interact with S3 and will put data in, we need to automate this process and "productionise" it. While Lambda is normally what automates short duration Python Scripts, in the Data Platform, we build Lambdas using Terraform.

This next method can be done in your IDE if you want to push the branch and then merge into main

1. Navigate, in the Data Platform to `Terraform > Core > 38.api-ingestion.tf`
2. Copy the Template API Ingestion Terraform module and paste it at the bottom of the 
` 38.api-ingestion.tf ` File. 

<details><summary>Template API Ingestion Terraform module</summary>
<p>


```
module "something_api_ingestion" {
  count                     = local.is_live_environment && !local.is_production_environment ? 1 : 0
  source                    = "../modules/api-ingestion-lambda"
  tags                      = module.tags.values
  is_production_environment = local.is_production_environment
  is_live_environment       = local.is_live_environment

  identifier_prefix              = local.short_identifier_prefix
  lambda_artefact_storage_bucket = module.lambda_artefact_storage.bucket_id
  lambda_name                    = "something_api_ingestion"
  lambda_handler                 = "main.lambda_handler"
  runtime_language               = "python3.8"
  secrets_manager_kms_key        = aws_kms_key.secrets_manager_key
  s3_target_bucket_arn           = module.landing_zone.bucket_arn
  s3_target_bucket_name          = local.s3_target_bucket_name
  api_credentials_secret_name    = "something-secret-key"
  s3_target_bucket_kms_key_arn   = module.landing_zone.kms_key_arn
  lambda_memory_size 			 = 1024 # You probably want this to be fairly large
  lambda_environment_variables = {
    "SECRET_NAME"           = "secret-name"
    "TARGET_S3_BUCKET_NAME" = local.s3_target_bucket_name
    "other environment variables, make a new line each" = "Value of these variables"
  }
}
```

</p>
</details>

3. Edit the values in the Terraform Module we just pasted to match your script.

`count = local.is_live_environment && !local.is_production_environment ? 1 : 0` determines where the Terraform will deploy the Lambda using Logic.
  * `local.is_live_environment` includes Production and Pre-Production
  * `local.is_production_environment` includes Production
  * `1:0` means for environments that satisfy the previous conditions, make ONE lambda, otherwise for other environments, make 0.
  * `count = local.is_live_environment && !local.is_production_environment ? 1 : 0` then means `if (Prod & Pre-prod) && (Not Prod), deploy 1, otherwise deploy 0` Meaning it will only deploy 1 into pre-prod

4. Check that it works in Pre-Production

Once you have made changes to the Terraform and pushed the changes to Github, if there are no problems with your branch, the Lambda function will appear in Pre-Prod.

You can manually trigger the Lambda in the [AWS Console](https://eu-west-2.console.aws.amazon.com/lambda/home?region=eu-west-2#/functions). If it runs with no issues, then it is ready to move into Prod. That is unlikely however, so here are some common issues

* If the Lambda reaches its max amount of memory, it will just break. You can increase the amount of memory by going to Configuration > General Configuration > Edit > Memory. And in Terraform the "lambda_memory_size" value will change the memory
* If the Lambda reaches 15 minutes it will timeout. If possible, change the Python script to just get less days of data. 
* If it cannot find a package you are using in the Python Script, check your requirements.txt or Piplock files

Once it is in Production, it will automatically run every day. You now have data in the Landing Zone!
