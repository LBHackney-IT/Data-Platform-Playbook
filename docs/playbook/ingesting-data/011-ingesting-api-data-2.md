---
title: Ingesting data from an API to the Data Platform 2
description: "Ingesting API data into the Data Platform using an AWS Lambda function 2"
layout: playbook_js
tags: [playbook]
---
# Ingesting Data from an API into the Data Platform - 2
## Introduction
This is a guide for ingesting data from an API using [AWS Lambda](https://aws.amazon.com/lambda/), into the Data Platform

This guide does not cover how to write a Python script to call data from an API. Example script used for Vonage here [link to your script]. 

Here are the major sections to this guide
* Writing the code for the Data Platform
  * Desired Output
  * Basic Rules
  * Some Tips
* Integrating S3
* Generating a Piplock and Requirements.txt File
* Update the Data Platform with our Script
* Setting up Terraform to automate it
* Doing the First Time ingestion
* Moving it all into Prod

## Pre-requisites

* You need to have a department ready for the Data, by the time you reach the First Time Ingestion. You can find out how to onboard a department [Here]
* Have the secrets/api_key stored in both Production and Pre-Production environments, with the naming convention of "/[Department Name]/[secret name]". So for example, /customer-services/vonage
* *

## Writing the Code for the Data Platform
You can use whatever you want to make the Python Script. However to have it run in the Data Platform, there are a few rules to keep in mind if you intend for this script to be used in AWS Lambda.
### Desired End Output
- .Py File
- Code which can be run frequently. Lambdas have a timeout limit of 15 minutes, so the code must complete within this time. It's therefore likely you'll want your code to run daily.
- Outputs the **RAW CONTENT** of the API call. No transformations
- Outputs the content in ` {folder}/import_year={year}/import_month={month}/import_day={day}/import_date={date}/`
- The dates refer to the date of import, not the date of the Data

### Basic Rules

1. The Python Script needs to be able to determine, on its own, which date range to pull data from
2. All of the functions need to be contained within the script itself
3. The Lambda will run the "Lambda_handler" function. This means in place of `__MAIN__()` you will have `def lambda_handler(event, lambda_context):`. Then to run this script, you just have a `lambda_handler("","")` line
4. If you have variables which you want the Terraform or Glue job to handle, you can pass them through as environment variables instead. `os.environ["TARGET_S3_BUCKET_NAME"] = "landing-zone"`  for example will set the environment variable `TARGET_S3_BUCKET_NAME` to `landing-zone`. `s3_bucket = getenv("TARGET_S3_BUCKET_NAME")` Will then be the code to get the environment variable as a variable in your script
5. Have no secrets (e.g. API keys) hard coded into the script
6. Try to use as little external packages as possible, Pandas is around 50mb after you install all of the dependancies. Very expensive

### Some tips

- If you are coding using .py files, the way I have found to code the script is to have 2 separate scripts. One main.py file which has the code to go into the Lambda. Another script which triggers that one and sets environment variables - In Jupyter (So Google Colab). Instead of making multiple scripts, use multiple cells. This is what I would suggest
	 - Import cell
	 - Functions cell
	 - `lambda_handler(event, lambda_context):` which acts as your main(), and interacts with the functions cell
	 - A cell with lambda_handler("","") and environment variable setters to trigger above. This will not be copied into your .py script when it comes down to making it in the Data Platform but it's what will help trigger your Lambda Handler event

<details><summary>Example Jupyter Script Format</summary>
<p>


```
import os
```
```
def print_text(text_string):
	print(text_string)
```
```
def lambda_handler(event, lambda_context):
	load_dotenv() # load environment variables
	string_to_print = getenv("STRING_TO_PRINT")
	print_text(string_to_print)

```
```
import os
os.environ["STRING_TO_PRINT"] = "Bacon" # Variable to be passed via Terraform
lambda_handler("","")
```

</p>
</details>

Once you have your script able to output data from the API locally, we need to modify the script to output to S3.

## Integrating S3

For our Python script to output data into the Data Platform, we will use a Python Module called [Boto3](https://boto3.amazonaws.com/v1/documentation/api/1.9.42/index.html#:~:text=Boto%203%20Documentation%C2%B6%20Boto%20is%20the%20Amazon%20Web,to%20use%2C%20object-oriented%20API%20as%20well%20as%20low-level)

While it has many features, we will focus on 3 of them
* Obtaining secrets from Secrets Manager
* Reading files in S3 Bucket
* Outputting to S3

However Boto3 does not work unless you authenticate Boto3. There are many ways to do so, follow one of these methods found [Here](https://boto3.amazonaws.com/v1/documentation/api/1.9.42/guide/configuration.html#guide-configuration)

Once you have authenticated Boto3. Lets use some AWS functionality

### Obtaining Secrets from the Secrets Manager

<details><summary>Code to get Secrets from S3</summary>
<p>


```
secrets_manager_client = boto3.client('secretsmanager')

secret_name = getenv("SECRET_NAME")

secret_manager_response = secrets_manager_client.get_secret_value(SecretId=secret_name)
api_credentials = json.loads(secret_manager_response['SecretString'])

api_key = api_credentials.get("api_key")
secret = api_credentials.get("secret")
```

</p>
</details>

1. Create a secrets manager client with boto3
2. Pull the secret_name from environment variables. 
 * In local environment we can give this to the script using ```os.environ["SECRET_NAME"] = "Some Value"```. 
 * In the Data Platform, we will give the secret name to the script via Terraform later
3. Make an API request to the Secrets Manager client, this will return a response
4. Load the Secret String portion of the response ['SecretString']
5. Get the API Key and Secret

### Reading files in S3 Bucket

You may want to read what files that you have in an S3 Bucket, maybe to determine what data you already have, or maybe to actually read one

<details><summary>Code to List folders</summary>
<p>

```
s3_client = boto3.client('s3')

def list_subfolders_in_directory(s3_client,bucket,directory):
		response = s3_client.list_objects_v2(
				Bucket=bucket,
				Prefix=directory,
				Delimiter="/")

		subfolders = response.get('CommonPrefixes')
		return subfolders
```


</p>
</details>

Returns a list of folders at a specific path.

<details><summary>Code to List Files</summary>
<p>

```
s3_client = boto3.client('s3')
bucket = "Bucket name"
directory = "Path to where you want to list the files, ending with /"

def list_s3_files_in_folder_using_client(s3_client,bucket,directory):

    response = s3_client.list_objects_v2(Bucket=bucket, Prefix=directory)
    files = response.get("Contents")

    for file in files:
        file['Key'] = re.sub(string=file['Key'],
                       pattern=f"{directory}/".format(),
                       repl="")
    # returns a list of dictionaries with file metadata
    return files
```

</p>
</details>

Returns a list of files at a specific path.

### Output to S3 Landing Zone

Here I will supply and explain two functions which will help you put files into S3

<details><summary>Output to Landing zone with Formatting</summary>
<p>

```
from datetime import date

def single_digit_to_zero_prefixed_string(value):
    return str(value) if value > 9 else '0' + str(value)

def output_to_landing_zone(s3_bucket, data, output_folder,filename):
		todays_date = date.today()

		day = single_digit_to_zero_prefixed_string(todays_date.day)
		month = single_digit_to_zero_prefixed_string(todays_date.month)
		year = str(todays_date.year)

		return s3_client.put_object(
				Bucket=s3_bucket,
				Body=str(data),
				Key=f"{output_folder}/import_year={year}/import_month={month}/import_day={day}/import_date={todays_date}/{filename}.json")
```

</p>
</details>

So if you wanted to put a json file into the "**Sandbox**" bucket, and within that bucket, you want the data to be within the "**CRM**" folder, you would call the function with

```output_to_landing_zone(s3_bucket, {the json data}, "**CRM**", "**Sandbox**"). ```

It will then proceed to put the Data into the Data Platform. It will use today as the import day and create the correct folder structure for it to work. Note that the import_date is in YYYYMMDD format not YYYY-MM-DD

Once you get the code, try running the code using Pre-Prod credentials to output to Pre-Prod

## Generating a Piplock and Requirements.txt File

For your Python script to work, you will most likely need to download extra packages to use, packages which are not native to Python

To do this, we will create a requirements.txt file, and from the requirements.txt file, we will generate a Piplock file. This Piplock file is what tells the Terraform (Which creates Lambdas) which external packages to give to the environment which will run your Python Script
1. Install Pipreqs

Generally something like `pip install pipreqs` would be fine

2. Open command prompt at the location of your Python Script
3. Use the command `pipreqs`

This creates a `requirements.txt` file. It contains all of the packages and dependancies you need for your script

4. Install Pipenv

`pip install pipenv` works

5. Use the command `pipenv lock`

This will now create a `pipfile` and `pipfile.lock`. These are what the Terraform needs to create your Lambda. 

6. Open your `pipfile`. 
7. Move boto3 and botocore rows to `[dev-packages]`
8. Replace the contents of all of the package versions with "*" instead

For example. `boto3 = "==1.24.89"` would become `boto3 = "*"` instead

9. Change the python version to "3"

So now we have a script which outputs files into AWS S3, we have the piplock file which lets the Terraform know what packages we need. We now need to push the script to the dataplatform so that we can begin to use it

## Update the Data Platform with our Script

The best practise way is to clone the project into your IDE, create the files in the right place, then push it back to the Data Platform to be merged into the main branch

1. If you do not have a copy of the Data Platform in your IDE environment already, clone the Data Platform
2. Navigate to `lambdas`
3. Create a folder for your script. Named something like `something_api_ingestion`. All lowercase and underscores replacing spaces
4. Either create or copy your `main.py` script in this folder. Do the same with the `pipfile` and `pipfile.lock`. 
5. Commit and Push into the Data Platform, then make a Pull Request. Your code will need to be reviewed by someone else before it can be put into Live.


## Setting up Terraform to automate it

Now that we have a script which will interact with S3 and will put data in, we need to automate this process and "productionise" it. While Lambda is normally what automates short duration Python Scripts, in the Data Platform, we build Lambdas using Terraform.

This next method can be done on the Github website OR in your IDE if you want to push the branch and then merge into main

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

* If the Lambda reaches its max amount of memory, it will just break. You can increase the amount of memory by going to Configuration > General Configuration > Edit > Memory. 
* If the Lambda reaches 15 minutes it will timeout. If possible, change the Python script to just get one days worth of Data.
* If it cannot find a package you are using in the Python Script, check your requirements.txt or Piplock files

Once it is in Production, it will automatically run every day. You now have data in the Landing Zone!