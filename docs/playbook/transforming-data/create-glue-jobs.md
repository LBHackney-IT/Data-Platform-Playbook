---
title: Deploying Glue jobs
description: "Creating Glue jobs in terraform"
layout: playbook_js
tags: [playbook]
---

## Deploying Glue jobs to the Data Platform using the Glue jobs Terraform template

:::important
This guide contains instructions on how to deploy your Glue job to the Data Platform using the GitHub UI. 
It assumes you have finished developing your script, and it is ready to be deployed to the Data Platform.
If you are still testing or prototyping your script, it is recommended that you refer to [this guide](./using-glue-studio.md) first.
:::
  
### 1. Add your script to the Data Platform Project
- Open the [scripts directory][scripts-directory] in the Data Platform Project and navigate to your department folder
- Click `Add file` and then `Create new file`
- Name your file, using underscores as separators, and then paste your code in field below
  
    e.g. `address_cleaning_housing_repairs`
  
- Follow [the instructions here][committing-changes] to commit your new file to the project 

### 2. Copy an existing Glue job module block or use the example below and populate the variables
Once the Pull Request to add your script has been approved, and you have confirmed that your script is in the Data Platform Project,
you can proceed with this step.
  
- Open the [Data Platform Project][data-platform-project]  
  If you don't have the correct permissions, you'll get a '404' error (see [prerequisites][prerequisites]).
- Navigate to the main `terraform` directory. Open `23-aws-glue-jobs-<YOUR-DEPARTMENT-NAME>.tf`
- Click `edit` and copy an existing module block. 
    - _if this file does not exist, create a new terraform file for your department, named:_ 
      ```
      23-aws-glue-jobs-<YOUR-DEPARTMENT-NAME>.tf
      ```
      _and refer to another department file or the [example](#example-module-block) below_
- When updating the module
  - Do not change any spacing before the `=`
  - Do not remove the `"quotation marks"` around any values which use them
  - When adding a variable that does not already exist, paste the intended value after the `=` 
    and ensure that all equal signs (`=`) line up as shown in the example 

Update the `module` name using the name convention `<job_name>_<department_name>`, for example "liberator_pcn_denormalisation_housing_repairs", 
it must be all lowercase with words separated by underscores. Ensure it's unique to all other module names in this file.

#### The following input variables are required:
- __department__ (required): This will be `module.department_<YOUR_DEPARTMENT_NAME>`
- __job_name__ (required): The name of your glue job prefixed with `${local.short_identifier_prefix}` and your department name e.g. 
  ```
  "${local.short_identifier_prefix}housing repairs address cleaning"
  ```
- __script_name__ (required): Name of the Glue job script. This will be the same as the script file you named in [step 1 above][adding-script]  
e.g. `"address_cleaning_housing_repairs"`

#### The following variables are optional:
- #### Variables used for scheduling a Glue job
To schedule your Glue job, you will need to set one of the following optional variables: 
__triggered_by_crawler__, __triggered_by_job__ or __schedule__
-
    - __triggered_by_crawler__ (optional): The Glue crawler that will trigger this job e.g.
    ```
    module.<NAME_OF_GLUE_JOB_MODULE>.crawler_name
     ```
    Where `NAME_OF_GLUE_JOB_MODULE` is the existing Glue job module from which the crawler is being referenced.
    From the [example template below](#example-module-block) this would be `manually_uploaded_parking_data_to_raw`, and therefore you would write:
    ```
    module.manually_uploaded_parking_data_to_raw.crawler_name
    ```

    Can populate either this variable, the __triggered_by_job__ variable, or the __schedule__ variable.
    The job created in this module will be triggered on completion of either
    the crawler given here, or the job given in __triggered_by_job__, or the __schedule__.
  
    - __triggered_by_job__ (optional): The Glue job that will trigger this job e.g.
    ```
    module.<NAME_OF_GLUE_JOB_MODULE>.job_name
    ```
    Where `NAME_OF_GLUE_JOB_MODULE` is the existing Glue job module from which the job is being referenced 

    Can populate either this variable, the __triggered_by_crawler__ variable, or the __schedule__ variable.
    The job created in this module will be triggered on completion of either
    the job given here or the crawler given in __triggered_by_crawler__, or the __schedule__.
    - __schedule__ (optional): Schedule to run the Glue job, eg `"cron(0 23 ? * 1-5 *)"`. Can populate either this variable, __triggered_by_job__ or the __triggered_by_crawler__.
        - To create a new Cron expression follow the guidance provided by the [AWS Cron Expression documentation][aws_cron_expressions].


- __job_description__ (optional): A description of the AWS glue job e.g. "Exports Google Sheets imported datasets to the landing zone"
- __job_parameters__ (optional): If your Glue job uses environment variables/ job parameters, you can set them here. 
  _Note: the __"--extra-py-files"__ job parameter is required if you are setting your own job parameters_
  
    - __"--extra-py-files"__ (required): this should be set to: 
      ```
      "s3://${var.glue_scripts_bucket_id}/${var.helper_script_key}"
      ```
      Then add this import statement to your script: `from helpers import get_glue_env_var` 
      
      You can then get the value of your job parameters to use in your script like this:
      ```
      s3_target_location = get_glue_env_var('s3_bucket_target', '')
      ```
      
      Example job parameters:

      - __"--s3_bucket_target"__: the output S3 location for your Glue job
      e.g. 
      ```
      "s3://${module.<S3_BUCKET_ZONE>_zone.bucket_id}/<YOUR_DEPARTMENT_NAME>/<FOLDER_NAME>"
      ```
      - Where `<S3_BUCKET_ZONE>` can be either: "raw", "landing", "refined", or "trusted"
        
    - __"--s3_bucket_source"__: the S3 source of the data used in the glue job
      e.g.
      ```
      "s3://${module.<S3_BUCKET_ZONE>_zone.bucket_id}/<YOUR_DEPARTMENT_NAME>/<FOLDER_NAME>"
      ```
      - Where `<S3_BUCKET_ZONE>` can be either: "raw", "landing", "refined", or "trusted"
    
    - __"--s3_bucket_source"__: the S3 source of the data used in the glue job
    - __"--source_catalog_table"__: the Glue catalog source table of the data used in the Glue job
      e.g. `"housing_repairs_repairs_purdy"`
      
      -  _NOTE: if sourcing data from a catalog table, the __`--source_catalog_database`__ job parameter must be set as well_
    - __"--source_catalog_database"__: the Glue database which contains the glue catalog table needed for the Glue job
      e.g. 
      ```
      module.department_<YOUR_DEPARTMENT_NAME>.<ZONE>_catalog_database_name
      ```
      
  See the [example module](#example-module-block) below for guidance on how to set your own job parameters.
- __workflow_name__ (optional): An existing workflow to add the triggers to
  - _NOTE: this module does not create Glue workflows_
- __crawler_details__ (optional): Inputs required to create a crawler. If this is not provided then no crawler will be created. These are:
    - __database_name__: Glue database where results are written
      ```
      module.department_<YOUR_DEPARTMENT_NAME>.<S3_BUCKET_ZONE>_catalog_database_name
      ```
    - __s3_target_location__: The S3 location to be crawled. 
      This will likely be the same as the value of `--s3_bucket_target` set in the Glue job's job parameters
      ```
      s3://${module.refined_zone_bucket_id}/${<YOUR_DEPARTMENT_NAME>}/${var.dataset_name}/cleaned/
      ```
    - __table_prefix__ (Optional): The table prefix used for catalog tables that are created in the specified Glue database (__database_name__ variable set above) in __Athena__
      e.g. `"housing_repairs_"`
        
    - __configuration__ (Optional): By default, the `TableGroupingPolicy` will be set to `CombineCompatibleSchemas`  

- __number_of_workers_for_glue_job__ (optional): Specify the number of workers to use for the glue job. The is set to 2 by default.
- __glue_job_worker_type__ (optional): Worker type for Glue job. The default is Standard. This can either be set as "Standard", "G.1X" or "G.2X". 
- __max_concurrent_runs_of_glue_job__ (optional): Max number of concurrent runs for the glue job. The is set to 1 by default.
- __trigger_enabled__ (optional): Set to `false` to disable scheduled or conditional triggers for the glue job. This is set to `true` by default.

### 3. Committing your changes using the GitHub UI
The Data Platform team needs to approve any changes to the code, so your change won't happen automatically. To submit your change:
  - Provide a description to explain what you've changed.
  - Select the option to create a `new branch` for this commit (i.e. the code you've changed). You can just use the suggested name for your branch.
  - Once you click 'Propose changes' you'll have the opportunity to add even more detail if needed before submitting it for review.  Click 'Create Pull Request' when finished.
  - You'll receive an email to confirm when your changes have been approved.

## Example module block
```markdown
module "manually_uploaded_parking_data_to_raw" {
source = "../modules/aws-glue-job"

department                     = module.department_housing_repairs
job_name                       = "${local.short_identifier_prefix}housing repairs address cleaning"
number_of_workers_for_glue_job = 4
trigger_enabled                = false
glue_job_worker_type           = "Standard"
job_parameters = {
  "--s3_bucket_target"    = module.raw_zone.bucket_id
  "--s3_bucket_source"    = "${module.landing_zone.bucket_id}/housing-repairs/repairs-axis/"
}
crawler_details = {
  database_name      = module.department_housing_repairs.raw_zone_catalog_database_name
  s3_target_location = "s3://${module.raw_zone.bucket_id}/housing-repairs/repairs-axis/"
  table_prefix       = "housing_repairs_"
}
```

[aws_cron_expressions]: https://docs.aws.amazon.com/AmazonCloudWatch/latest/events/ScheduledEvents.html#CronExpressions
[prerequisites]: ../ingesting-data/google-sheets-import.md#prerequisites
[data-platform-project]: https://github.com/LBHackney-IT/data-platform
[scripts-directory]: https://github.com/LBHackney-IT/Data-Platform/tree/main/scripts
[committing-changes]: #3-committing-your-changes-using-the-github-ui 
[adding-script]: #1-add-your-script-to-the-data-platform-project
