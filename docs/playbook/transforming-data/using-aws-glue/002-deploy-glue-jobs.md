---
id: deploy-glue-jobs
title: Deploying Glue jobs to the Data Platform
description: "Creating Glue jobs in terraform"
layout: playbook_js
tags: [playbook]
---

## Deploying Glue jobs to the Data Platform using the Glue jobs Terraform template

:::important
This guide contains instructions on how to deploy your Glue job to the Data Platform using the GitHub UI.
It assumes you have finished developing your script, and it is ready to be deployed to the Data Platform.
If you are still testing or prototyping your script, it is recommended that you refer to [this guide][using-glue-studio] first.
:::

### 1. Add your script to the Data Platform Project using the GitHub UI

1. Navigate to the [jobs directory][jobs-directory] in the Data Platform Project and open your department folder.
1. Click `Add file` and then `Create new file`.
1. Name your file.
   This should be the same name you gave your job in Glue Studio.
   Ensure the file name only contains **lowercase letters**, **words are separated by underscores**, and has the extension **`.py`** at the end.
   For example: `address_cleaning_housing_repairs.py`.
   - _Remember this name as you will need it for the following section._
1. If your Glue job was created using Glue Studio, open your Glue job and copy the auto generated **Python** script by navigating to the `Script` tab.
1. Navigate back to the new script file you created in the GitHub UI (or existing script file, if you are updating your script), and paste your script.
1. Submit your changes by referring to the [Committing changes][committing-changes] section of the **Using Github** guide
   The Data Platform team needs to approve any changes to the code, so your change won't happen automatically.

:::important Updating your Glue job script
If you need to update your Glue job script in the future, you must follow steps 4-6 to have those changes deployed to the Data Platform Project.
:::

### 2. Copy an existing Glue job module block or use the example below and populate the necessary variables

In this section, you will be writing the code, using a template format, that will deploy your Glue job (and crawler) to the Data Platform Project (or update an existing one if you need to make changes to an existing Glue job).
You can view a complete example [here](#example-module-block). 

1. Open the [terraform directory][terraform-directory] in the Data Platform Project in GitHub.

   - If you don't have the correct permissions, you'll get a '404' error (see [prerequisites][prerequisites]).

1. Open `25-aws-glue-jobs-<YOUR-DEPARTMENT-NAME>.tf`. e.g. `25-aws-glue-job-parking.tf`

   - _If this file does not exist, create a new terraform file for your department by clicking `Add file` then `Create new file`.
     The name of the new file should be:_

   ```
   25-aws-glue-jobs-<YOUR-DEPARTMENT-NAME>.tf
   ```

   - _Refer to the [example](#example-module-block) below to get started._

1. Click `edit` or the **pencil icon** (:pencil2:) and copy and paste an existing module block.
   An example of what a module block looks like can be seen [here][project-module-example].

1. Update the `module` name using the name convention `<job_name>_<department_name>`, for example: `"liberator_pcn_denormalisation_housing_repairs"`.

   - The `<job_name>` here must be the same as the script name you specified in the previous section (without the `.py` extension).
   - The final module name (`<job_name>_<department_name>`) must be all **lowercase** with **words separated by underscores**.
     Ensure the name is unique to all other module names in this file.

1. #### Update or add your input variables.
   For this section, you will need the following values from your Glue job.
   You can find them by navigating to the `Job Details` tab of your job in Glue Studio.
   - **Name**
   - **Description**
   - **Job parameters**. Expand the `Advanced properties` section and scroll down to `Job parameters`.

#### The following input variables are required:

_Note: If you've copied an existing module block from your department folder then you won’t need to change the **source**, **department**, **helper_module_key** and, **pydeequ_zip_key** variables and will only need to update the **job_name** variable._

- **source** (required): This will be `"../modules/aws_glue_job"`. It is the path to where the glue job module is saved within the repository.

- **department** (required): This will be `module.department_<YOUR_DEPARTMENT_NAME>`

  _Note: the department name should be all lowercase and separated by underscores
  e.g. `module.department_housing_repairs`_

- **job_name** (required): Name of the Glue job. Set this to the name of the script file you created in the previous section (without the `.py` extension)
  and prefix it with `${local.short_identifier_prefix}`. 
  
  If the name of your Glue job doesn't already have your department name, you should add it as a suffix here.
  For example:
  ```
  job_name = "${local.short_identifier_prefix}address_cleaning_housing_repairs"
  ```
- **helper_module_key** (required): This will be `aws_s3_bucket_object.helpers.key`. It is the S3 object key for the helpers python module.
  This gives you access to all of the functions defined in the [helpers folder][helpers-folder-github]. You can add new files or functions to the folder and they will be available in your glue jobs.
- **pydeequ_zip_key** (required): This will be `aws_s3_bucket_object.pydeequ.key`. It is the S3 object key for the PyDeequ python library, which is used for data quality testing in the Data Platform.
- #### Script Name/ Location (required)

  One of the following variables must be populated: **script_name** OR **script_s3_object_key**.

  If you are adding a new script to only be used for one glue job you should provide a value for **script_name** and leave the second blank.
  If your script file is already saved in S3 you should provide **script_s3_object_key**.

  - **script_name** : Name of the Glue job script. Set this to the name of the script file you created in [step 1][adding-script] without the `.py` extension.
    This file must be saved within your departmental folder.
    For example:

    ```
    script_name = "address_cleaning_housing_repairs"
    ```

    _Note: you must add quotes around the script name as shown in the example._

  - **script_s3_object_key** : S3 object key of the script file.
    If your script is used across multiple jobs it may already be saved in S3, in this case you can provide the key for that object within the scripts S3 bucket e.g. `aws_s3_bucket_object.address_matching.key`.

#### The following variables are optional:

- #### Variables used for scheduling a Glue job

  To schedule your Glue job, you will need to set one of the following optional variables:
  **triggered_by_crawler**, **triggered_by_job** or **schedule**.

  The job created in this module will be triggered on completion of either
  the crawler specified in **triggered_by_crawler**, the job specified in **triggered_by_job**, or the **schedule**.

  _Note: the placeholder variable `<NAME_OF_GLUE_JOB_MODULE>` used in **trigger_by_job** and **triggered_by_crawler**
  refers to the existing Glue job module from which the job or crawler is being referenced._

  - **triggered_by_crawler** (optional): The Glue crawler that will trigger this job e.g.

  ```
  triggered_by_crawler = module.<NAME_OF_GLUE_JOB_MODULE>.crawler_name
  ```

  From the [example template below](#example-module-block), the name of the Glue job module would be `manually_uploaded_parking_data_to_raw`, and therefore you would write:

  ```
  triggered_by_crawler = module.manually_uploaded_parking_data_to_raw.crawler_name
  ```

  - **triggered_by_job** (optional): The Glue job that will trigger this job e.g.

  ```
  triggered_by_job = module.<NAME_OF_GLUE_JOB_MODULE>.job_name
  ```

  - **schedule** (optional): Schedule to run the Glue job specified using Cron expressions (see [AWS Cron Expression documentation][aws_cron_expressions]).

    - For example, if you wanted your Glue job to run at 23:00:00pm, on every Monday, Tuesday, Wednesday, Thursday and Friday, every month,
      your Cron expression would look like:

      ```
      schedule = "cron(0 0 23 ? * MON,TUE,WED,THU,FRI *)"
      ```

    - You can use [this tool][cron-expression-generator] to generate your Cron expressions.

- **job_description** (optional): A description of the AWS Glue job e.g. "Exports Google Sheets imported datasets to the landing zone"
- **extra_jars** (optional): If your Glue job requires extra packages that are zipped in a JAR file, you can provide the list of the S3 path(s) to the JAR file(s) here.
  For example:

  ```
  extra_jars = ["s3://${module.department_<DEPARTMENT_NAME>.glue_scripts_bucket.bucket_id}/<JARS_FILE_NAME>.jar", "s3://${module.department_<DEPARTMENT_NAME>.glue_scripts_bucket.bucket_id}/<JARS_FILE_NAME>.jar"]
  ```

  _Note: ensure that your department name is all lowercase with words separated by underscores
  e.g. replace `<DEPARTMENT_NAME>` with `housing_repairs`._

- **job_parameters** (optional): Here you can set some configuration for your Glue job or if your Glue job uses environment variables/ job parameters, you can set them here as well.

  - You can find a list of optional glue job configuration in [AWS's documentation][list-of-glue-job-arguments]. A common one used in the Data Platform is job bookmarking. Which can be enabled like this:
    ```
    {
      "--job-bookmark-option" = "job-bookmark-enable"
    }
    ```
  - To retrieve the job parameters you set here, add this import statement to your script: `from helpers.helpers import get_glue_env_var`

  You can then get the value of your job parameters to use in your script like this:

  ```
  s3_target_location = get_glue_env_var('s3_bucket_target', '')
  ```

  - In the following optional job parameters; _"--s3_bucket_target"_, _"--s3_bucket_source"_ and _"--source_catalog_database"_:

    - `<ZONE>` refers to either: `raw`, `landing`, `refined`, or `trusted` S3 or Glue database zones.
    - Specifically for _"--s3_bucket_source"_ and _"--s3_bucket_target"_, and any other S3 location path,
      ensure that your department name and folder name is all **lowercase** and **hyphen separated** if necessary
      and that there is a **`"/"`** after the folder name. For example, if your department is "Housing Repairs", it
      should be written as `housing-repairs`.

      - _"--s3_bucket_source"_ (optional): the S3 source of the data used in the glue job
        e.g.

        ```
        "--s3_bucket_source" = "s3://${module.<ZONE>_zone.bucket_id}/<YOUR_DEPARTMENT_NAME>/<FOLDER_NAME>/"
        ```

      - _"--s3_bucket_target"_ (optional): the output S3 location for your Glue job
        e.g.

        ```
        "--s3_bucket_target" = "s3://${module.<ZONE>_zone.bucket_id}/<YOUR_DEPARTMENT_NAME>/<FOLDER_NAME>/"
        ```

      - _"--source_catalog_database"_ (optional): the Glue database which contains the Glue _source_catalog table_ needed for the Glue job
        e.g.

        ```
        "--source_catalog_database" = module.department_<YOUR_DEPARTMENT_NAME>.<ZONE>_catalog_database_name
        ```

        - _Note: ensure that your department name is all **lowercase** with **words separated by underscores**
          e.g. `housing_repairs`._

      - _"--source_catalog_table"_ (optional): the Glue catalog source table of the data used in the Glue job
        e.g.

        ```
        "--source_catalog_table" = "housing_repairs_repairs_purdy"
        ```

        - _Note: if sourcing data from a catalog table, the _`--source_catalog_database`_ job parameter must be set as well._

  See the [example module](#example-module-block) below for guidance on how to set your own job parameters.

- **workflow_name** (optional): An existing workflow to add the triggers to
  - _Note: this module **does not** create Glue workflows_
- **crawler_details** (optional): Inputs required to create a crawler. If this variable is not provided then no crawler will be created. These are:

  - _database_name_: Glue database where results are written

    ```
    module.department_<YOUR_DEPARTMENT_NAME>.<S3_BUCKET_ZONE>_catalog_database_name
    ```

    - Where `<S3_BUCKET_ZONE>` can be either: `raw`, `landing`, `refined`, or `trusted`

  - _s3_target_location_: The S3 location to be crawled.
    This will likely be the same as the value of Glue job job parameter: **`--s3_bucket_target`**
    ```
    "s3://${module.<S3_BUCKET_ZONE>_zone_bucket_id}/<YOUR_DEPARTMENT_NAME>/<FOLDER_NAME>/"
    ```
  - _table_prefix_ (Optional): The table prefix used for catalog tables that are created in the specified Glue database (**database_name** variable set above) in **Athena**,
    after crawling the **s3_target_location** e.g. `"housing_repairs_"`
  - _configuration_ (Optional): By default, the `TableGroupingPolicy` will be set to `CombineCompatibleSchemas`

- **max_concurrent_runs_of_glue_job** (optional): Max number of concurrent runs for the Glue job. The is set to **1** by default.
- **trigger_enabled** (optional): Set to **`false`** to disable scheduled or conditional triggers for the Glue job.
  This is set to **`true`** by default. _Note: the value of this variable does not need to be surrounded by quotes._
- #### Optional variables used for configuring the capacity a Glue job

  To change the capacity of your Glue job, you will need to set the following **glue_job_worker_type** and **number_of_workers_for_glue_job** variables.
  In most instances, the default settings are fine, and you would only need to set or change these variables if your Glue job is processing very large datasets
  or performing complex transformations.

  - **number_of_workers_for_glue_job** (optional): The number of workers to use for the glue job. The is set to **2** by default.
  - **glue_job_worker_type** (optional): Worker type for Glue job (see [AWS documentation on 'Worker types][glue-worker-types]'). The default is **Standard**. This can either be set as "Standard", "G.1X" or "G.2X".

:::warning Before committing your changes, please check that:

- You have not changed any spacing before the `=` of input variables' values
- You have not removed the `"quotation marks"` around any values which use them
- All equal signs (`=`) line up as shown in the example below
- Any unneeded variables are removed by deleting the entire line
:::

6. Once you have finished creating your Glue job using the template and have populated all relevant variables,
   submit your job for review by the Data Platform team by following [this guide][committing-changes].

## Example module block

```markdown
module "manually_uploaded_housing_data_to_raw" {
  source = "../modules/aws-glue-job"

  department = module.department*housing_repairs
  job_name = "${local.short_identifier_prefix}housing repairs address cleaning"
  script_name = "address_cleaning_housing_repairs"
  schedule = "cron(0 0 23 ? * MON,TUE,WED,THU,FRI _)"
  job_parameters = {
    "--s3_bucket_source" = "${module.landing_zone.bucket_id}/manual/housing-repairs/repairs-axis/"
    "--s3_bucket_target" = "${module.raw_zone.bucket_id}/housing-repairs/repairs-axis/"
  }
  crawler_details = {
    database_name = module.department_housing_repairs.raw_zone_catalog_database_name
    s3_target_location = "s3://${module.raw_zone.bucket_id}/housing-repairs/repairs-axis/"
    table_prefix = "housing_repairs_"
  }
}
```

[aws_cron_expressions]: https://docs.aws.amazon.com/AmazonCloudWatch/latest/events/ScheduledEvents.html#CronExpressions
[prerequisites]: ../../ingesting-data/google-sheets-import#prerequisites
[terraform-directory]: https://github.com/LBHackney-IT/Data-Platform/tree/ac2a8d56e77ba94f1123fcdb983387081887a72f/terraform
[jobs-directory]: https://github.com/LBHackney-IT/Data-Platform/tree/main/scripts/jobs
[adding-script]: #1-add-your-script-to-the-data-platform-project
[using-glue-studio]: ./using-glue-studio
[cron-expression-generator]: https://www.freeformatter.com/cron-expression-generator-quartz.html
[glue-worker-types]: https://docs.aws.amazon.com/glue/latest/dg/add-job.html#:~:text=Own%20Custom%20Scripts.-,Worker%20type,-The%20following%20worker
[helpers-folder-github]: https://github.com/LBHackney-IT/Data-Platform/tree/main/scripts/helpers
[committing-changes]: ../../getting-set-up/using-github#committing-your-changes-to-the-data-platform-project
[list-of-glue-job-arguments]: https://docs.aws.amazon.com/glue/latest/dg/aws-glue-programming-etl-glue-arguments.html
[project-module-example]: https://github.com/LBHackney-IT/Data-Platform/blob/ac2a8d56e77ba94f1123fcdb983387081887a72f/terraform/25-aws-glue-job-parking.tf#L31-L44
