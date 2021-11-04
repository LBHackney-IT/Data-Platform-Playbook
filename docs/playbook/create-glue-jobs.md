---
title: Creating Glue jobs
description: "Creating Glue jobs in terraform"
layout: playbook_js
tags: playbook
---

## Creating Glue jobs using the Glue jobs Terraform template

#### 1. Copy an existing Glue job or use the example below and populate the variables
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
#### 2. The following input variables are required:
- __department__: This will be `module.department_<YOUR_DEPARTMENT_NAME>`
- __job_name__: The name of your glue job prefixed with your department name e.g. "housing repairs address cleaning"
- __glue_scripts_bucket_id__: `module.glue_scripts.bucket_id`

#### 3. The following variables are optional:
- __job_description__: A description of the AWS glue job
- __job_parameters__: Parameters used in your Glue job. For example the source database and table
    - If you are setting __job_parameters__, you should include the below parameter:
      - ```
        "--TempDir" = "${module.glue_temp_storage.bucket_url}/${module.department_housing_repairs.identifier}/"
        ```
- __script_name__: Name of the Glue job script. If no value is provided, then this will default to the same name as the job name
- __workflow_name__: Workflow to add the triggers to.
- __triggered_by_crawler__: Can populate either this variable, the job_to_trigger variable or the schedule.
  The job created in this module will be triggered on completion of either
  the crawler given here or the job given in job_to_trigger or the schedule.
- __triggered_by_job__: Can populate either this variable, the crawler_to_trigger variable or the schedule.
  The job created in this module will be triggered on completion of either
  the job given here or the crawler given in crawler_to_trigger.
- __crawler_details__: Inputs required to create a crawler. These are:
    - __database_name__: Glue database where results are written. 
    - __s3_target_location__: The S3 location to be crawled.
    - __table_prefix__ (Optional): The table prefix used for catalog tables that are created.
    - __configuration__ (Optional): By default, the `TableGroupingPolicy` will be set to `CombineCompatibleSchemas`  
- __schedule__: Schedule to run the Glue job. Can populate either this variable, __job_to_trigger__ or the __crawler_to_trigger__. 
- __number_of_workers_for_glue_job__: Specify the number of workers to use for the glue job. The is set to 2 by default.
- __glue_job_worker_type__: Worker type for Glue job. The default is Standard. This can either be set as "Standard", "G.1X" or "G.2X". 
- __max_concurrent_runs_of_glue_job__: Max number of concurrent runs for the glue job. The is set to 1 by default.
- __trigger_enabled__: Set to "false" to disable scheduled or conditional triggers for the glue job. This is set to `true` by default.
