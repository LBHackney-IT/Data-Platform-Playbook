---
title: Ingesting data from databases into the Landing Zone
description: "Ingesting database tables into the Data Platform landing zone using a JDBC Connection"
layout: playbook_js
tags: [playbook]
---

This guide explains the process of ingesting data/tables from databases into the Data Platform landing zone using a AWS Glue JDBC Connection.

## Prerequisites 

- Check that your database is supported by AWS Glue JDBC Connection (see [AWS Glue JDBC Connection Properties][jdbc-connection-properties] section) 
- Ensure that your database allows user login/authentication, and you have the login credentials
  - In addition to the database name and login credentials, you will also need:
    - the database host name/ endpoint
    - the database port number and
    - list of tables to ingest if only selecting specific tables from the target database
  - These will be used to construct the [JDBC URL](#construct-the-jdbc-url) in a later section

## Overview
In the following sections you will set up a connection to ingest data from your target database from the Data Platform by:
- Adding the database credentials to Github Secrets and retrieving them in the Data Platform project
- Constructing the JDBC URL for the respective database to create the Glue connection
- Creating a Glue job to use this connection and read the data into the Data Platform Landing Zone S3 bucket 
- Creating a crawler to crawl the tables in S3 and populate a predetermined Glue Catalog database to make the data available for querying in Athena and other Glue jobs

### Add the database credentials to the Data Platform project
The database credentials are retrieved from Github Secrets via the project build pipeline.
These are used to allow the Data Platform to authenticate against the target database. 

- Contact a member of the Data Platform team to add the database credentials to Github Secrets and update the build pipeline to retrieve these secrets in the project
    - You will be advised of the variables names for the database username and password which you will need to complete 
      the section below to [set up the glue JDBC connection](#set-up-the-glue-jdbc-connection)

### Construct the JDBC URL

Generally JDBC URLs for different types of databases are quite similar.
However, some differ slightly. 
Refer to [AWS Glue JDBC Connection Properties][jdbc-connection-properties] for examples on how to construct your JDBC URL.

### Set up the Glue JDBC Connection 

Here you will configure a module which will set up the connection to the database, as well as a crawler to crawl the target database which will retrieve the 
metadata and schemas of the database tables to populate in a Glue Catalog database.

_For more technical details on the overall process, see: [Database Ingestion documentation][database-ingestion]_


1. Open the [terraform directory][terraform-directory] in the Data Platform Project in GitHub.
    - If you don't have the correct permissions, you'll get a '404' error (see [Getting Set Up on the Platform][getting-set-up]).

1. Open `29-<YOUR-DEPARTMENT-NAME>-database-ingestion.tf` e.g. `29-academy-database-ingestion.tf`
    - _If this file does not exist, create a new terraform file for your department by clicking `Add file` then `Create new file`.
    The name of the new file should be:_
    ```
    29-<YOUR-DEPARTMENT-NAME>-database-ingestion.tf
    ```

    - _Refer to the [example](#example-module-block) below to get started._

1. Click `edit` or the **pencil icon** (:pencil2:) then copy the last two module blocks and paste it at the bottom of the file.
   The module blocks will have `source = "../modules/database-ingestion"` and `source = "../aws-glue-job"` respectively.
   An example of what a module block looks like can be seen [here][project-module-example].

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

    - **source** (required): This will be `"../modules/database-ingestion"`. It is the path to where the Glue job module is saved within the repository.
        - _**Note**: If you've copied an existing module block from your department folder then you won’t need to change the **source** variable_.

    - **jdbc_connection_url** (required): This will be `jdbc:protocol://host:port/db_name`.
        - The format differs slightly depending on the database, 
        refer to [AWS Glue JDBC Connection Properties][jdbc-connection-properties] for guidance on how to construct your JDBC URL. 

        For example: 
        ```
        "jdbc:sqlserver://10.120.23.22:1433;databaseName=LBHATestRBViews"
        ```

    - **jdbc_connection_description** (required): A description of the connection i.e. The type of connection and database that is used for data ingestion.

    - **jdbc_connection_subnet_id** (required): The subnet to deploy the connection to.
    Set this to `local.subnet_ids_list[local.subnet_ids_random_index]`.

    - **database_availability_zone** (required): The availability zone to deploy the connection to.
    Set this to `"eu-west-2a"`.
    
    - **database_name** (required): The name of the database you would like to connect to e.g. `"LBHATestRBViews"`. 

    - **vpc_id** (required): Set this to `data.aws_vpc.network.id`.

    - **identifier_prefix** (required): Set this to `local.short_identifier_prefix`.
  
     **The following variables for the database credentials will be shared with you:**
        - **database_username** (required): Database username 
            e.g. `var.academy_production_database_username`
        - **database_password** (required): Database user password 
            e.g. `var.academy_production_database_password`

### Create a Glue job and Crawler 
Here you will create a Glue job which will be used to pull the database tables into Landing Zone S3 bucket using the JDBC connection. 
You will also create a Crawler to read all the ingested tables from S3 and populate a Glue Catalog Database so that the
data can be queried in Athena or consumed by other Glue jobs for further processing.

#### Create a Glue job to ingest all database tables to Landing Zone S3 bucket

You can prototype your script and test ingesting a few tables by referring to an [example script][TODO: Link to Github repo Glue script]
and following [this guide][using-glue-studio].
Refer to [this guide][deploy-glue-job-and-crawler] when you are ready to deploy your Glue job along with a Crawler
which will read all the tables from S3 into a Glue Catalog Database where the tables can be queried.

The example script linked above will read all the tables and output them to a specified S3 location.
- It uses two helper functions which are imported from `helpers.py`, these are: 
    - `get_all_database_tables`: used to retrieve all the table names from the Glue Catalog Database
    - `update_table_ingestion_details`: used to create a dataframe containing stats, including errors, on the ingestion of each table

**In addition to the variables and job parameters described [here][deploy-glue-job-and-crawler],the following need to be set:**

- **Input variables**:
    - **connections** (required): The list of connections used for this job, i.e. JDBC connection.
    This will be `[module.<NAME_OF_CONNECTION_MODULE>[0].jdbc_connection_name]`
    
    For example: 
      
    ```
    [module.academy_lbhatestrbviews_database_ingestion[0].jdbc_connection_name]
    ```
  
    _Note: ensure there are surrounding square brackets (`[]`) around the value provided here_

- **Job parameters**:
    - **source_catalog_database** (required): The Glue Catalog Database where your databases' table schemas are stored
        - This will be `module.<NAME_OF_CONNECTION_MODULE>[0].ingestion_database_name`.
        See step 4 in the section: [set up the glue JDBC connection](#set-up-the-glue-jdbc-connection) above for a reminder of the module name.
    
        For example:
        ```
        [module.academy_lbhatestrbviews_database_ingestion[0].ingestion_database_name]
        ``` 
      
    - **s3_ingestion_bucket_target** (required): The S3 location where the ingested tables should be stored 
    e.g. `"s3://${module.landing_zone.bucket_id}/academy/tables/"`
    - **s3_ingestion_details_target** (required): The S3 location where the ingestion details should be stored. 
    
        _Note: in order for the Crawler to add your ingestion details to the Glue Catalog Database so that they can be analysed in Athena later,
        you should set this parameter to have one additional folder level (e.g.`ingestion-details`) to what was set in **`s3_ingestion_bucket_target`**_
        
        For example:
        ```
        "s3://${module.landing_zone.bucket_id}/academy/tables/ingestion-details/"
        ``` 

    - **crawler_details**:
        - **database_name** (required): Glue database where results are written.
        
        // TODO: new non-department specific glue job module will create a non-department catalog database
        or create the catalog databases outside of the glue module to control the catalog db zones used?
        e.g. `"academy_ingestion_landing_zone"`.
    
        The Glue job module will create a Glue Catalog Database with this name.
  
        - **s3_target_location** (required): This should be the same as **`s3_ingestion_bucket_target`** set above
        - **configuration** (required): Set the `TableLevelConfiguration` to the number of directory levels in **`s3_ingestion_bucket_target`** plus 1.
        
        For example: The value for `TableLevelConfiguration` with an **s3_ingestion_bucket_target** of `"s3://${module.landing_zone.bucket_id}/academy/tables/"` will be `4` 

        A complete example of **crawler_details** can be seen below:

        ```
        crawler_details = {
            database_name      = "academy_ingestion_landing_zone"
            s3_target_location = "s3://${module.landing_zone.bucket_id}/academy/tables/"
            configuration = jsonencode({
                Version = 1.0
                Grouping = {
                    TableLevelConfiguration = 4
                }
            })
        }
        ```

### Commit your changes and create a Pull Request for review by the Data Platform team
You can now submit your changes for review by the Data Platform team.
 - See [Committing changes][committing-changes] section of the **Using Github** guide.
  The Data Platform team needs to approve any changes to the code that you make, so your change won't happen automatically.

### Example module block
```
module "academy_lbhatestrbviews_database_ingestion" {
    count = local.is_live_environment ? 1 : 0
    tags  = module.tags.values

    source = "../modules/database-ingestion"

    jdbc_connection_url         = "jdbc:sqlserver://10.120.23.22:1433;databaseName=LBHATestRBViews"
    jdbc_connection_description = "JDBC connection to Academy Production Insights LBHATestRBViews database"
    jdbc_connection_subnet_id   = local.subnet_ids_list[local.subnet_ids_random_index]
    database_availability_zone  = "eu-west-2a"
    database_name               = "LBHATestRBViews"
    database_password           = var.academy_production_database_password
    database_username           = var.academy_production_database_username
    identifier_prefix           = local.short_identifier_prefix
    vpc_id                      = data.aws_vpc.network.id
}
```

TODO: Add example Glue job module to example module block above

[jdbc-connection-properties]: https://docs.aws.amazon.com/glue/latest/dg/connection-defining.html
[database-ingestion]: ../../spikes/mssql-ingestion.md
[committing-changes]: ../getting-set-up/using-github#committing-your-changes-to-the-data-platform-project
[terraform-directory]: https://github.com/LBHackney-IT/Data-Platform/tree/main/terraform
[getting-set-up]: ../getting-set-up/index.md
[project-module-example]: https://github.com/LBHackney-IT/Data-Platform/blob/main/terraform/29-mssql-ingestion.tf
[using-glue-studio]: ../transforming-data/using-aws-glue/001-using-glue-studio.md
[deploy-glue-job-and-crawler]: ../transforming-data/using-aws-glue/002-deploy-glue-jobs.md