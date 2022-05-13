---
title: Ingesting data from databases into the Data Platform
description: "Ingesting database tables into the Data Platform using a JDBC Connection"
layout: playbook_js
tags: [playbook]
---

This guide explains the process of ingesting data/tables from databases into the Data Platform using AWS Glue JDBC Connection.

## Prerequisites 

- Check that your database type is supported by AWS Glue JDBC Connection (see [AWS Glue JDBC Connection Properties][jdbc-connection-properties] section) 
- Ensure that your database allows user login/authentication, and you have a database user with login credentials
  - If you would like to restrict access to only a selection of tables in your database, then ensure the database's user permissions are updated to reflect this
  - In addition to the database name and user login credentials, you will also need:
    - the type of database you want to connect to e.g. `mssql`
    - the database host name/ endpoint
    - the database port number
  - These will be used to construct the [JDBC URL](#construct-the-jdbc-url) in a later section

## Overview
In the following sections you will set up a connection from the Data Platform to your source database to ingest its data, which will involve:

- Authenticating access to the source database from the Data Platform by adding the database credentials to AWS Secrets Manager
- Establishing a connection to the respective database by creating a Glue connection using a JDBC URL which uses the source database's credentials stored in Secrets Manager
- Populating a Glue Catalog database with the source database's table schemas and metadata by creating a Crawler and crawling the source database
- Pulling in the data from the source database and writing to the Data Platform S3 storage by creating a Glue job which uses the Glue connection as well as the table schemas and metadata from the Glue Catalog database   
- Making the data available for querying in Athena and other Glue jobs by creating a Crawler to crawl the tables in S3 which will then populate a predetermined Glue Catalog database

### Add the database credentials to the Data Platform project
The database credentials are retrieved from AWS Secrets Manager.
The credentials are used to allow the Data Platform to authenticate against the source database.

- Contact an engineer from the Data Platform team to add the database credentials to AWS Secrets Manager.
    - You will need to request that a **secret** (with an appropriate description) is created following the naming convention below: 
      ```
      database-credentials/DATABASE_NAME-DATASET_NAME
      ``` 
      e.g. `database-credentials/geolive-permits` (**Remember this name as you will need it later**).

    - Request that the following key-value pairs be added to this secret:
        - `database_name` = `Name of your database`
        - `username` = `Your database user username`
        - `password` = `Your database user password`
    

- You will be notified once the secret has been stored with the credentials. 
Make a note of the **secret** name as it will be needed in the [Set up the Glue JDBC Connection section](#set-up-the-glue-jdbc-connection) below to reference your stored credentials in the JDBC Connection.
    
### Construct the JDBC URL

In this section, you will create the JDBC URL which will be used in the section below.

Generally JDBC URLs for different types of databases are quite similar.
However, some differ slightly. You will be using the following to construct the JDBC URL:
- Database type
- Database name
- Database host/ endpoint e.g. `127.0.0.1`
- Database port number e.g. `1433`

Refer to [AWS Glue JDBC Connection Properties][jdbc-connection-properties] for examples and guidance on how to construct your JDBC URL.

### Set up the Glue JDBC Connection 

Here you will configure a module which will set up the connection to the source database, as well as a Crawler to crawl the source database which will retrieve the 
metadata and schemas of the database tables to populate in a Glue Catalog database. 
The module will also create a Glue Workflow which the Crawler will be added to.
You can then use this workflow to link your ingestion Glue job (and Crawler) which you will be creating in the following section.
This will help facilitate the automation of the entire database ingestion process.

:::important
The Crawler will run automatically every weekday at 6am, however, in order to ingest your data on the same day of deployment, you will need to run it manually in the AWS Console. 
It will have the same name as the value you set for the **name** input variable in this section. 
:::

_For more technical details on the overall process, see: [Database Ingestion documentation][database-ingestion]_


1. Open the [terraform directory][terraform-directory] in the Data Platform Project in GitHub.
    - If you don't have the correct permissions, you'll get a '404' error (see [Getting Set Up on the Platform][getting-set-up]).

**Note: If the data you're ingesting is for a specific department then it should be ingested into that department's `raw zone` S3 bucket, otherwise it should go into the `landing zone`** S3 bucket.
1. Create a new file `29-<YOUR-DEPARTMENT-NAME>-<DATABASE-NAME>-database-ingestion.tf` if department specific, otherwise `29-<DATABASE-NAME>-database-ingestion.tf` 
   
    For example, for Academy (database), which is not department specific, the file name will be:
   
    ```
    29-academy-database-ingestion.tf
    ```

    - _Refer to this [example](#example-module-block) to get started._

1. Copy the [example module block](#example-module-block) paste it in your file.
   
1. Update the `module` name using the following name convention: 
   ```
   <department_name>_<database_name>_database_ingestion
   ```
   
  _Note: the department name must be all lowercase and separated by underscores_
   
   For example: 
   ```
   "academy_lbhatestrbviews_database_ingestion"
   ```

1. Update or add your input variables.

- #### The following input variables are required:

    - **source** (required): This will be `"../modules/database-ingestion-via-jdbc-connection"`. It is the path to where the database ingestion module is saved within the repository
        - _**Note**: If you've copied the example module block then you won’t need to change the **source** variable_
    
    - **name** (required): Name of the dataset that will be ingested in all **lowercase letters** with **words separated by hyphens**. e.g. `"revenue-benefits-and-council-tax"`
        - This will be the name of all your resources created as part of this step and will be needed to identify your resources in the AWS Console when populating the Glue job parameters to prototype your Glue job.

    - **jdbc_connection_url** (required): This will be in the format: `jdbc:protocol://host:port/db_name`
        - Set this to the JDBC URL you constructed in the previous section.
        You can refer to [AWS Glue JDBC Connection Properties][jdbc-connection-properties] for more guidance on how to construct your JDBC URL. 

        For example, a SQL Server database's JDBC URL will look like this: 
        ```
        jdbc_connection_url = "jdbc:sqlserver://10.120.23.22:1433;databaseName=LBHATestRBViews"
        ```

    - **jdbc_connection_description** (required): A description of the connection i.e. The type of connection, database and dataset that will be ingested
    For example:
      ```
      "JDBC connection to Academy Production Insights LBHATestRBViews database to ingest Council Tax data"
      ```

    - **jdbc_connection_subnet** (required): The subnet to deploy the connection to.
    Set this to `data.aws_subnet.network[local.instance_subnet_id]`

    - **identifier_prefix** (required): Set this to `local.short_identifier_prefix`
  
    - **database_secret_name** (required): Name of the secret in AWS Secrets Manager where your database credentials are being stored. 
      This would have been shared with you by a member of the Data Platform team. 
        For example:
        ```
        database_secret_name = "database-credentials/lbhatestrbviews-council-tax"
        ```

    - **schema_name** (optional): Name of schema in the database containing tables to be ingested. e.g. `"parking"`.
      
      For databases that support schemas, you can provide a schema name here to ingest all tables in the schema within the specified database.
      Oracle Database and MySQL don’t support this; therefore **DO NOT** enter a value here.

6. Commit your changes and create a Pull Request for review by the Data Platform team. 
   You should wait for it to be approved and deployed before moving onto the next step.
    - See [Committing changes][committing-changes] section of the **Using Github** guide.
    The Data Platform team needs to approve any changes to the code that you make, so your change won't happen automatically.

7. Once you get confirmation that the code has been successfully deployed,
you will need to do the following before moving on to the next section:
   - Request that the ID of the security group of the Glue JDBC Connection (created in this module) is added to the source database's inbound security group rules by an appropriate engineer of the respective AWS account.
     
     - You can find the security group ID of your connection by navigating to `AWS Glue` in the AWS Console, 
       then clicking `Connections` in the left-hand navigation bar and then searching for your connection.
        It will have the same name that you set in the **name** input variable above.
       
     - Click on your connection and copy the ID next to `Security groups` e.g. `sg-05a4fc711d3e12345`.
    This is the security group ID you need to provide to the engineer.
      
    - Test your connection and ensure it works:
        - Select your connection and click `Test Connection`.
        - Assign the relevant department IAM role.
          - **Note: If the data you are ingesting is not department specific, you should use the IAM role: `dataplatform-stg-glue-role`.**
        - Lastly, click `Test Connection` (this can take up to a minute to complete).
 
### Create a Glue job and Crawler to ingest all database tables 
Once your Pull Request for setting up the JDBC Connection has been approved and deployed, you can continue with this section.

Here you will create a Glue job which will use the JDBC connection you've just created to pull the database tables into S3. 
You will also create a Crawler to read all the ingested tables from S3 and populate a Glue Catalog Database so that the
data can be queried in Athena or consumed by other Glue jobs for further processing.

:::important
If your data is **NOT** department specific, you will not be able to crawl the S3 output location to populate a Glue Catalog database and therefore you should **NOT** set any configurations in the `crawler_details` input variable (delete this input variable if necessary).  
:::

#### Prototyping your Glue job

You can prototype your Glue job and test ingesting a few tables by referring to and cloning an existing Glue job.
You can search for the `"stg Revenue & Benefits and Council Tax Database Ingestion"` Glue job in the list of jobs in the [AWS Console][glue-jobs]
to use as an example. You can also refer to the [Using Glue Studio][using-glue-studio] guide for guidance on prototyping your Glue job.

To prototype your script you will need to manually set/ update all the Glue Job parameters and Connections in the `Job Details` tab:
- The `source_catalog_database` Glue Job parameter and the `Connections` input variable should be the same as what you set for the **name** input variable in the previous section.

The example Glue job linked above will read all the tables and output them to a specified S3 location.
- It uses two helper functions which are imported from `helpers.py`, these are: 
    - `get_all_database_tables`: used to retrieve all the table names from the specified Glue Catalog Database
    - `update_table_ingestion_details`: used to create a dataframe containing stats, including errors, on the ingestion process for each table

#### Deploying your Glue job
:::important
Before continuing with this section, ensure that you have deleted any data that was copied to S3 whilst prototyping your Glue job.
:::

When you are ready to deploy your Glue job (and Crawler) to the Data Platform project, you can continue with the below steps. 
Your Glue job will copy all the tables from your source database to S3 which will then be crawled and populated in a Glue Catalog Database where the tables can be queried.
Spark Web UI is used to monitior and debug the glue jobs. Every 30 seconds, AWS Glue flushes the Spark event logs to an S3 bucket titled Spark UI Bucket.

You will be using the existing [Glue job module][deploy-glue-job-and-crawler] to deploy your ingestion Glue job and Crawler.
- **The steps below only serve as complementary guidance and should be followed along with the official documentation for the Glue job module linked above.**

You can add the Glue job module Terraform code to the same file you created/ updated in the previous section when setting up the Glue JDBC Connection.

**Set the input variables for the Glue job and Crawler** 

The following **input variables** and **job parameters** need to be set:

- **Input variables** (required):
    - **script_s3_object_key** (required): S3 object key of the script which will be used to ingest the database tables.
    Set this to: `aws_s3_bucket_object.ingest_database_tables_via_jdbc_connection.key`
    
    - **jdbc_connections** (required): The list of connections used for this job, i.e. JDBC connection.
    This will be `[module.<NAME_OF_CONNECTION_MODULE>[0].jdbc_connection_name]`.
    See step 4 in the section: [set up the glue JDBC connection](#set-up-the-glue-jdbc-connection) above for a reminder of the module name.
    
    For example: 
      
    ```
    [module.academy_lbhatestrbviews_database_ingestion[0].jdbc_connection_name]
    ```
  
    _Note: ensure there are surrounding square brackets (`[]`) around the value provided here_

    - **triggered_by_crawler** (optional): You can configure your job to run automatically once the Crawler created in the previous section has run successfully.
      - To add this trigger, set this input variable to: 
        ```
        module.<NAME_OF_CONNECTION_MODULE>[0].crawler_name
        ```
      
    If you don't populate this variable then the Glue job and Crawler will need to be run manually in the AWS Console.
      
    If you want it to run on a schedule then please refer to the **"Variables used for scheduling a Glue job"** section of [this article][scheduling-glue-jobs] for an explanation on how to set the variables to do so.
      
    - **workflow_name** (optional): Workflow to add your Glue job (and Crawler to).
      This is required if you set a **schedule** or set the input variable **triggered_by_crawler** above.
      
        - To add your Glue job (and Crawler) to a workflow, set this input variable to:
        ```
        module.<NAME_OF_CONNECTION_MODULE>[0].workflow_name
        ``` 

      
- **Job parameters**:
  
    - Note: For the following optional **job parameters**; *"--s3_ingestion_bucket_target"* and *"--s3_ingestion_details_target"*:
        - `<ZONE>` refers to either: `raw` or `landing` S3 zones
        - **If the data you're ingesting is for a specific department then it should be ingested into that department's `raw` zone, otherwise it should go into the `landing` zone**
      
    - _"--source_catalog_database"_ (required): The Glue Catalog Database where your databases' table schemas are stored
        - This will be `module.<NAME_OF_CONNECTION_MODULE>[0].ingestion_database_name`.
    
        For example:
        ```
        module.academy_lbhatestrbviews_database_ingestion[0].ingestion_database_name
        ``` 
      
    - _"--s3_ingestion_bucket_target"_ (required): The S3 location where the ingested tables should be stored
      
      For example:
      ```
      "--s3_ingestion_bucket_target" = "s3://${module.<ZONE>_zone.bucket_id}/<YOUR-DEPARTMENT-NAME>/"
      ```
        - _Note: ensure that your department name and folder name is all **lowercase** with **words separated by hyphens**
          e.g. `housing-repairs`._

    - _"--s3_ingestion_details_target"_ (required): The S3 location where the ingestion details should be stored 
    
        _Note: in order for the Crawler to add your ingestion details to the Glue Catalog Database so that they can be analysed in Athena later,
        you should set this parameter to have one additional folder level (e.g.`ingestion-details`) to what was set in **`s3_ingestion_bucket_target`**_.
        
        For example:
        ```
        "--s3_ingestion_details_target" = "s3://${module.<ZONE>_zone.bucket_id}/<YOUR-DEPARTMENT-NAME>/ingestion-details/"
        ``` 
      - _Note: ensure that your department name is all **lowercase** with **words separated by underscores**
          e.g. `housing_repairs`._
        
    - **crawler_details**:
      :::caution
      **If your data is department specific, you should set the following parameters.** 
      Otherwise, if your data is **NOT** department specific, or **NOT** "unrestricted" data, and is being written to the **landing** zone, you should **NOT** set any of the below parameters (deleting the entire `crawler_details` configuration if present or working with a duplicated module block).
      In that case, the data will need to be moved to **raw** zone, and a specific **department** before it can be crawled and queried in Athena.
      :::
      
        - _database_name_ (required): Glue database where results are written after being crawled

            ```
            module.department_<YOUR_DEPARTMENT_NAME>.<S3_BUCKET_ZONE>_zone_catalog_database_name
            ```
            
            - Where `<S3_BUCKET_ZONE>` will be: `raw`. The same zone you wrote the data to in S3.
  
        - _s3_target_location_ (required): This should be the same as **`"--s3_ingestion_bucket_target"`** set above
        - _configuration_ (required): Set the `TableLevelConfiguration` to 1 plus the number of directory levels in **`"--s3_ingestion_bucket_target"`**
        
        For example: The value for `TableLevelConfiguration` with an **s3_ingestion_bucket_target** of `"s3://${module.raw_zone.bucket_id}/academy/"` will be `3` 

        A complete example of **crawler_details** can be seen below:

        ```
        crawler_details = {
            database_name      = module.department_academy.raw_zone_catalog_database_name 
            s3_target_location = "s3://${module.raw_zone.bucket_id}/academy/"
            configuration = jsonencode({
                Version = 1.0
                Grouping = {
                    TableLevelConfiguration = 3
                }
            })
        }
        ```

### Commit your changes and create a Pull Request for review by the Data Platform team
You can now submit your changes for review by the Data Platform team.
- See [Committing changes][committing-changes] section of the **Using Github** guide.
  The Data Platform team needs to approve any changes to the code that you make, so your change won't happen automatically.
  Once your changes have been approved and deployed, the job will run at the next scheduled time (if scheduled).

### Running the ingestion manually

Once you have been notified that your Pull Request has been merged, you can run the ingestion manually from the AWS Console or wait until the scheduled time (if you've set one).

### Complete example with both Glue JDBC Connection and Glue job modules
```
module "academy_mssql_database_ingestion" {
    count = local.is_live_environment ? 1 : 0
    tags  = module.tags.values

    source = "../modules/database-ingestion-via-jdbc-connection"

    name                        = "revenue-benefits-and-council-tax"
    jdbc_connection_url         = "jdbc:sqlserver://10.120.23.22:1433;databaseName=LBHATestRBViews"
    jdbc_connection_description = "JDBC connection to Academy Production Insights LBHATestRBViews database"
    jdbc_connection_subnet_id   = local.subnet_ids_list[local.subnet_ids_random_index]
    database_availability_zone  = "eu-west-2a"
    database_secret_name        = "database-credentials/lbhatestrbviews-council-tax"
    identifier_prefix           = local.short_identifier_prefix
    vpc_id                      = data.aws_vpc.network.id
}

module "ingest_rev_bev_council_tax" {
  count = local.is_live_environment ? 1 : 0
  tags  = module.tags.values

  source = "../modules/aws-glue-job"

  job_name               = "${local.short_identifier_prefix}Revenue & Benefits and Council Tax Database Ingestion"
  script_s3_object_key   = aws_s3_bucket_object.ingest_database_tables_via_jdbc_connection.key
  environment            = var.environment
  pydeequ_zip_key        = aws_s3_bucket_object.pydeequ.key
  helper_module_key      = aws_s3_bucket_object.helpers.key
  jdbc_connections       = [module.academy_mssql_database_ingestion[0].jdbc_connection_name]
  glue_role_arn          = aws_iam_role.glue_role.arn
  glue_temp_bucket_id    = module.glue_temp_storage.bucket_id
  glue_scripts_bucket_id = module.glue_scripts.bucket_id
  workflow_name          = module.academy_mssql_database_ingestion[0].workflow_name
  triggered_by_crawler   = module.academy_mssql_database_ingestion[0].crawler_name
  job_parameters = {
    "--source_data_database"             = module.academy_mssql_database_ingestion[0].ingestion_database_name
    "--s3_ingestion_bucket_target"       = "s3://${module.raw_zone.bucket_id}/academy/"
    "--s3_ingestion_details_target"      = "s3://${module.raw_zone.bucket_id}/academy/ingestion-details/"
    "--TempDir"                          = "s3://${module.glue_temp_storage.bucket_id}/"
    "--extra-py-files"                   = "s3://${module.glue_scripts.bucket_id}/${aws_s3_bucket_object.helpers.key}"
    "--extra-jars"                       = "s3://${module.glue_scripts.bucket_id}/jars/deequ-1.0.3.jar"
    "--enable-continuous-cloudwatch-log" = "true"
  }
  crawler_details = {
    database_name      = module.department_academy.raw_zone_catalog_database_name 
    s3_target_location = "s3://${module.raw_zone.bucket_id}/academy/"
    configuration = jsonencode({
      Version = 1.0
      Grouping = {
        TableLevelConfiguration = 3
      }
    })
  }
}
```

[jdbc-connection-properties]: https://docs.aws.amazon.com/glue/latest/dg/connection-defining.html
[database-ingestion]: ../../spikes/mssql-ingestion.md
[committing-changes]: ../getting-set-up/using-github#committing-your-changes-to-the-data-platform-project
[terraform-directory]: https://github.com/LBHackney-IT/Data-Platform/tree/main/terraform
[getting-set-up]: ../getting-set-up/index.md
[project-module-example]: https://github.com/LBHackney-IT/Data-Platform/blob/main/terraform/29-mssql-ingestion.tf
[using-glue-studio]: ../transforming-data/using-aws-glue/001-using-glue-studio.md
[deploy-glue-job-and-crawler]: ../transforming-data/using-aws-glue/002-deploy-glue-jobs.md
[glue-jobs]: https://eu-west-2.console.aws.amazon.com/gluestudio/home?region=eu-west-2#/jobs 
[scheduling-glue-jobs]: ../transforming-data/using-aws-glue/002-deploy-glue-jobs.md#variables-used-for-scheduling-a-glue-job