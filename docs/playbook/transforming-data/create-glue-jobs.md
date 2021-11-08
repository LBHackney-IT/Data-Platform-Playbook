---
title: Creating Glue jobs
description: "Creating Glue jobs in terraform"
layout: playbook_js
tags: playbook
---

## Creating Glue jobs using the Glue jobs Terraform template

#### 1. Copy an existing Glue job module block or use the example below and populate the variables
- Open the [Data Platform Project](https://github.com/LBHackney-IT/data-platform). 
  If you don't have the correct permissions, you'll get a '404' error (see [prerequisites][prerequisites]).
- Navigate to the main `terraform` directory. Open `23-aws-glue-jobs-<YOUR-DEPARTMENT-NAME>.tf` and copy an existing module block. 
_Create a new tf file for your department, named `23-aws-glue-jobs-<YOUR-DEPARTMENT-NAME>.tf` if it does not exist and refer to the [example](#example-module-block) below_
- When updating the module
  - Do not change any spacing before the `=`
  - Do not remove the `"quotation marks"` around any values which use them

Update the `module` name using the name convention `<job_name>_<department_name>`, for example "liberator_pcn_denormalisation_housing_repairs", 
it must be all lowercase with words separated by underscores. Ensure it's unique to all other module names in this file.

#### The following input variables are required:
- __department__: This will be `module.department_<YOUR_DEPARTMENT_NAME>`
- __job_name__: The name of your glue job prefixed with `${local.short_identifier_prefix}` and your department name e.g. 
  ```
  "${local.short_identifier_prefix}housing repairs address cleaning"
  ```

#### The following variables are optional:
- __job_description__: A description of the AWS glue job e.g. "Exports Google Sheets import datasets to the landing zone"
- __job_parameters__: Parameters used in your Glue job. Example job parameters:
    - __"--s3_bucket_target"__: the output S3 location for your Glue job
      e.g. 
      ```
      "s3://${module.<S3_BUCKET_ZONE>_zone.bucket_id}/<YOUR_DEPARTMENT_NAME>/<FOLDER_NAME>"
      ```
    - __"--s3_prefix"__: a prefix directory to __"--s3_bucket_target"__ to write the output data to within the target location
  e.g. `"<YOUR_DEPARTMENT_NAME>/<FOLDER_NAME>/"`
    - __"--s3_bucket_source"__: the S3 source of the data used in the glue job
      e.g.
      ```
      "s3://${module.<S3_BUCKET_ZONE>_zone.bucket_id}/<YOUR_DEPARTMENT_NAME>/<FOLDER_NAME>"
      ```
    - __"--source_catalog_table"__: the Glue catalog source table of the data used in the Glue job
      e.g. `"housing_repairs_repairs_purdy"`
      
      -  _NOTE: if sourcing data from a catalog table, the `--source_catalog_database` job parameter must be set as well_ 
    - __"--source_catalog_database"__: the Glue database which contains the glue catalog table needed for the Glue job
      e.g. 
      ```
      module.department_<YOUR_DEPARTMENT_NAME>.<ZONE>_catalog_database_name
      ```
      
  See the [example module](#example-module-block) below for a complete example.
  
- __script_name__: Name of the Glue job script. If no value is provided, then this will default to the same name as the job name.
- __workflow_name__: An existing workflow to add the triggers to
  - _NOTE: this module does not create Glue workflows_
- __triggered_by_crawler__: The Glue job that will trigger this job e.g. 
  ```
  module.<job_name>_<department_name>.crawler_name
  ```
  Can populate either this variable, the __triggered_by_job__ variable, or the __schedule__ variable.
  The job created in this module will be triggered on completion of either
  the crawler given here or the job given in __triggered_by_job__, or the __schedule__.
- __triggered_by_job__: The Glue job that will trigger this job e.g. 
  ```
  module.<job_name>_<department_name>.job_name
  ```
  Can populate either this variable, the __triggered_by_crawler__ variable, or the __schedule__ variable.
  The job created in this module will be triggered on completion of either
  the job given here or the crawler given in __triggered_by_crawler__, or the __schedule__.
- __schedule__: Schedule to run the Glue job, eg `"cron(0 23 ? * 1-5 *)"`. Can populate either this variable, __triggered_by_job__ or the __triggered_by_crawler__. 
    - To create a new Cron expression follow the guidance provided by the [AWS Cron Expression documentation][aws_cron_expressions].
- __crawler_details__: Inputs required to create a crawler. If this is not provided then no crawler will be created. These are:
    - __database_name__: Glue database where results are written
      ```
      module.department_<YOUR_DEPARTMENT_NAME>.<S3_BUCKET_ZONE>_catalog_database_name
      ```
    - __s3_target_location__: The S3 location to be crawled. 
      This will likely be the same as the value of `--s3_bucket_target` set in the Glue job's job parameters
      ```
      s3://${module.refined_zone_bucket_id}/${<YOUR_DEPARTMENT_NAME>}/${var.dataset_name}/cleaned/
      ```
    - __table_prefix__ (Optional): The table prefix used for catalog tables that are created in the specified Glue database (__database_name__ variable set above)
      e.g. `"housing_repairs_"`
        
    - __configuration__ (Optional): By default, the `TableGroupingPolicy` will be set to `CombineCompatibleSchemas`  

- __number_of_workers_for_glue_job__: Specify the number of workers to use for the glue job. The is set to 2 by default.
- __glue_job_worker_type__: Worker type for Glue job. The default is Standard. This can either be set as "Standard", "G.1X" or "G.2X". 
- __max_concurrent_runs_of_glue_job__: Max number of concurrent runs for the glue job. The is set to 1 by default.
- __trigger_enabled__: Set to `false` to disable scheduled or conditional triggers for the glue job. This is set to `true` by default.

#### 3. Committing your changes using the GitHub UI: The Data Platform team needs to approve any changes to the code, so your change won't happen automatically. To submit your change:
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
  "--s3_prefix"           = "housing_repairs/repairs_axis/"
}
crawler_details = {
  database_name      = module.department_housing_repairs.raw_zone_catalog_database_name
  s3_target_location = "s3://${module.raw_zone.bucket_id}/housing-repairs/repairs-axis/"
  table_prefix       = "housing_repairs_"
}
```

[aws_cron_expressions]: https://docs.aws.amazon.com/AmazonCloudWatch/latest/events/ScheduledEvents.html#CronExpressions
[prerequisites]: ../ingesting-data/google-sheets-import.md#prerequisites
