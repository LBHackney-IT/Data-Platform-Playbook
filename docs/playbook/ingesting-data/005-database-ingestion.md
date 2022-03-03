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

- Contact a member of the Data Platform team to add the database credentials to Secrets Manager.
    - You will need to request that a **secret** (with an appropriate description) is created following the naming convention below: 
      ```
      database-credentials/DATABASE_NAME-DATASET_NAME
      ``` 
      e.g. `database-credentials/geolive-permits`

    - Request that the following key-value pairs be added to this secret:
        - `database_name` = `"Name of your database"`
        - `username` = `"Your database user username"`
        - `password` = `"Your database user password"`
    

- Once the credentials have been added, you will be given a secret name which will be used to reference your stored credentials.
Make a note of this as it will be needed in the [Set up the Glue JDBC Connection section](#set-up-the-glue-jdbc-connection) below.
    
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

Here you will configure a module which will set up the connection to the database, as well as a crawler to crawl the source database which will retrieve the 
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

    - _Refer to this [example](#example-module-block) to get started._

1. Click `edit` or the **pencil icon** (:pencil2:) then copy the module block with the line: `source = "../modules/database-ingestion-via-jdbc-connection"` inside it and paste it at the bottom of the file.
   
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

    - **source** (required): This will be `"../modules/database-ingestion-via-jdbc-connection"`. It is the path to where the database ingestion module is saved within the repository
        - _**Note**: If you've copied an existing module block from your department folder then you won’t need to change the **source** variable_
    
    - **jdbc_connection_name** (required): Name of the dataset that will be ingested. e.g. `Council Tax`

    - **jdbc_connection_url** (required): This will be `jdbc:protocol://host:port/db_name`
        - The format differs slightly depending on the database, 
        refer to [AWS Glue JDBC Connection Properties][jdbc-connection-properties] for guidance on how to construct your JDBC URL 

        For example, a SQL Server database's JDBC Url will look like this: 
        ```
        jdbc_connection_url = "jdbc:sqlserver://10.120.23.22:1433;databaseName=LBHATestRBViews"
        ```

    - **jdbc_connection_description** (required): A description of the connection i.e. The type of connection, database and dataset that will be ingested
    For example:
      ```
      "JDBC connection to Academy Production Insights LBHATestRBViews database to ingest Council Tax data"
      ```

    - **jdbc_connection_subnet_id** (required): The subnet to deploy the connection to.
    Set this to `local.subnet_ids_list[local.subnet_ids_random_index]`

    - **database_availability_zone** (required): The availability zone to deploy the connection to.
    Set this to `"eu-west-2a"`
    
    - **vpc_id** (required): Set this to `data.aws_vpc.network.id`

    - **identifier_prefix** (required): Set this to `local.short_identifier_prefix`
  
    - **database_secret_name** (required): Name of the secret in AWS Secrets Manager where your database credentials are being stored. 
      This would have been shared with you by a member of the Data Platform team. 
        For example:
        ```
        database_secret_name = "academy-database-credentials"
        ```
  

6. Commit your changes and create a Pull Request for review by the Data Platform team. 
   You should wait for it to be aprroved and deployed before moving onto the next step.
    - See [Committing changes][committing-changes] section of the **Using Github** guide.
    The Data Platform team needs to approve any changes to the code that you make, so your change won't happen automatically.

### Create a Glue job and Crawler 
Once your Pull Request for setting up the JDBC Connection has been approved and deployed, you can continue with this section.

Here you will create a Glue job which will use the JDBC connection you've just created to pull the database tables into S3. 
You will also create a Crawler to read all the ingested tables from S3 and populate a Glue Catalog Database so that the
data can be queried in Athena or consumed by other Glue jobs for further processing.

#### Create a Glue job to ingest all database tables to S3

You can prototype your script and test ingesting a few tables by referring to an [example script][example-script]
and following the [Using Glue Studio][using-glue-studio] guide.
Refer to the [Deploying Glue jobs to the Data Platform][deploy-glue-job-and-crawler] guide when you are ready to deploy your Glue job along with a Crawler
which will read all the tables from S3 into a Glue Catalog Database where the tables can be queried.

The example script linked above will read all the tables and output them to a specified S3 location.
- It uses two helper functions which are imported from `helpers.py`, these are: 
    - `get_all_database_tables`: used to retrieve all the table names from the specified Glue Catalog Database
    - `update_table_ingestion_details`: used to create a dataframe containing stats, including errors, on the ingestion process for each table

**Set the input variables for the Glue job and Crawler using the [Glue job module][deploy-glue-job-and-crawler]**

In addition to the variables and job parameters you'd normally set when [deploying a Glue job][deploy-glue-job-and-crawler], you need to set the following:

- **Input variables**:
    - **connections** (required): The list of connections used for this job, i.e. JDBC connection.
    This will be `[module.<NAME_OF_CONNECTION_MODULE>[0].jdbc_connection_name]`.
    See step 4 in the section: [set up the glue JDBC connection](#set-up-the-glue-jdbc-connection) above for a reminder of the module name.
    
    For example: 
      
    ```
    [module.academy_lbhatestrbviews_database_ingestion[0].jdbc_connection_name]
    ```
  
    _Note: ensure there are surrounding square brackets (`[]`) around the value provided here_

- **Job parameters**:
    - Note: In the following optional **job parameters**; *"--s3_ingestion_bucket_target"* and *"--s3_ingestion_details_target"*:
        - `<ZONE>` refers to either: `raw` or `landing` S3 zones
      
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
      
        - _database_name_ (required): Glue database where results are written after being crawled

            ```
            module.department_<YOUR_DEPARTMENT_NAME>.<S3_BUCKET_ZONE>_catalog_database_name
            ```
            - Where `<S3_BUCKET_ZONE>` can be either: `raw` or `landing`
  
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
- Once your Pull Request has been approved, and you receive confirmation that it has been deployed, your data will be ready to be ingested onto the Data Platform
according to a schedule you may have configured when creating your Glue job.

### Example module block
```
module "academy_lbhatestrbviews_database_ingestion" {
    count = local.is_live_environment ? 1 : 0
    tags  = module.tags.values

    source = "../modules/database-ingestion-via-jdbc-connection"

    jdbc_connection_name        = "Council Tax"
    jdbc_connection_url         = "jdbc:sqlserver://10.120.23.22:1433;databaseName=LBHATestRBViews"
    jdbc_connection_description = "JDBC connection to Academy Production Insights LBHATestRBViews database"
    jdbc_connection_subnet_id   = local.subnet_ids_list[local.subnet_ids_random_index]
    database_availability_zone  = "eu-west-2a"
    database_secret_name        = "database-credentials/lbhatestrbviews-council-tax"
    identifier_prefix           = local.short_identifier_prefix
    vpc_id                      = data.aws_vpc.network.id
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
[example-script]: https://github.com/LBHackney-IT/Data-Platform/blob/main/scripts/jobs/ingest_database_tables_via_jdbc_connection.py
