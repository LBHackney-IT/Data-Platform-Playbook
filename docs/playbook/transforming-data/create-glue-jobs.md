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
- Navigate to the main `terraform` directory. Open `23-aws-glue-jobs-<YOUR_DEPARTMENT_NAME>.tf` and copy an existing module block. 
_Create a new tf file for your department, named `23-aws-glue-jobs-<YOUR_DEPARTMENT_NAME>.tf` if it does not exist and refer to the [example](#example-module-block) below_
- When updating the module
  - Do not change any spacing before the `=`
  - Do not remove the `"quotation marks"` around any values which use them

Update the `module` name using the name convention `<job_name>_<department_name>`, for example "liberator_pcn_denormalisation_parking", it must be all lowercase with words separated by underscores. Ensure it's unique to all other module names in this file.

#### The following input variables are required:
- __department__: This will be `module.department_<YOUR_DEPARTMENT_NAME>`
- __job_name__: The name of your glue job prefixed with your department name e.g. "housing repairs address cleaning"
- __glue_scripts_bucket_id__: `module.glue_scripts.bucket_id`

#### The following variables are optional:
- __job_description__: A description of the AWS glue job e.g. "Glue job description"
- __job_parameters__: Parameters used in your Glue job. For example the source database and table
    - If you are setting __job_parameters__, you should also set the __glue_job_temp_storage_bucket_url__ variable below
- __glue_temp_storage_bucket_url__: This should be 
```
  "${module.glue_temp_storage.bucket_url}/${module.department_<YOUR_DEPARTMENT_NAME>.identifier}/"
```
- __script_name__: Name of the Glue job script. If no value is provided, then this will default to the same name as the job name
- __workflow_name__: Workflow to add the triggers to.
- __triggered_by_crawler__: Can populate either this variable, the __triggered_by_job__ variable or the schedule.
  The job created in this module will be triggered on completion of either
  the crawler given here or the job given in __triggered_by_job__ or the schedule.
- __triggered_by_job__: Can populate either this variable, the __triggered_by_crawler__ variable or the schedule.
  The job created in this module will be triggered on completion of either
  the job given here or the crawler given in __triggered_by_crawler__.
- __crawler_details__: Inputs required to create a crawler. If this is not provided then no crawler will be created. These are:
    - __database_name__: Glue database where results are written. 
    - __s3_target_location__: The S3 location to be crawled.
    - __table_prefix__ (Optional): The table prefix used for catalog tables that are created.
    - __configuration__ (Optional): By default, the `TableGroupingPolicy` will be set to `CombineCompatibleSchemas`  
- __schedule__: Schedule to run the Glue job, eg `"cron(0 23 ? * 1-5 *)"`. Can populate either this variable, __triggered_by_job__ or the __triggered_by_crawler__. 
    - To create a new Cron expression follow the guidance provided by the [AWS Cron Expression documentation][aws_cron_expressions].

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

count = local.is_live_environment ? 1 : 0

department             = module.department_<YOUR_DEPARTMENT_NAME>
job_name               = "${local.short_identifier_prefix}<YOUR_DEPARTMENT_NAME> <GLUE_JOB_NAME>"
glue_scripts_bucket_id = module.glue_scripts.bucket_id
job_parameters = {
"--TempDir"             = "${module.glue_temp_storage.bucket_url}/${module.department_housing_repairs.identifier}/"
"--job-bookmark-option" = "job-bookmark-enable"
"--s3_bucket_target"    = module.raw_zone.bucket_id
"--s3_bucket_source"    = module.landing_zone.bucket_id
"--s3_prefix"           = "parking/manual/"
"--extra-py-files"      = "s3://${module.glue_scripts.bucket_id}/${aws_s3_bucket_object.helpers.key}"
}
trigger_enabled = false
crawler_details = {
database_name      = module.department_parking.raw_zone_catalog_database_name
s3_target_location = "s3://${module.raw_zone.bucket_id}/<YOUR_DEPARTMENT_NAME>/"
}
```

[aws_cron_expressions]: https://docs.aws.amazon.com/AmazonCloudWatch/latest/events/ScheduledEvents.html#CronExpressions
[prerequisites]: ../ingesting-data/google-sheets-import.md#prerequisites
