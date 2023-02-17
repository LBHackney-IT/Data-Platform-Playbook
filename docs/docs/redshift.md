---
title: Redshift - Creating users, databases and exposing data from Glue
description: ""
layout: playbook_js
tags: [playbook]
---

## Objective / Who is this for?

After this article, you should be able to

- Create a user in redshift
- Create a schema for your tables
- Grant permissions to a user to view the tables
- Make the connection with an AWS Glue database to see the data in the tables

## Prerequisites

In order to complete this article, you will need

- Permissions to configure Redshift
- Access to Amazon Redshift
- Access to Amazon Glue Databases

## Collection Structure

Unlike most Database services. Redshift has a three tier collection setup:

1. The top most tier is called a Database, a Database contains multiple Schemas
2. The second tier is called a Schema, a Schema contains multiple Tables
3. The final tier is called a Table, a Table contains multiple rows of data or references a location in S3

`Database -> Schema -> Table`

## Open Redshift Query Editor

Use the search bar at the top of AWS to search for Redshift. Then on the left, go to "Editor" then "Query Editor". You will enter the code here.

## Connect to the Database

You must have an open connection to see the tables.

## Create a User

To create a new user in Redshift, run the following command as a query:

```sql
CREATE USER {username} WITH PASSWORD '{password}';
```

Example:

```sql
CREATE USER housing_repairs WITH PASSWORD 'th1s1sANEx&mpl3';
```

If you are creating new users to be used with roled based access control please use user's Hackney email address as their username. When creating email based usernames the username in the SQL command must be wrapped in double quotes. 

### Generating strong password
New password can be generated using the [1Password online password generator](https://1password.com/password-generator). These are the recommended settings:
1. Password type: Random Password
2. Length: 30
3. Tick both 'Numbers' and 'Symbols' checkboxes

### Sharing the password with the user

Once the user has been created the initial password needs to be shared with them securely and they must also be asked to change it.

To share the created password with the user please follow these steps:
1. Add the password to your private vault in 1Password
2. Click on the share icon on the toolbar
3. Set the 'Link expires after' value to '7 days'
4. Set the 'Available to' value to 'Only some people'
5. Tick the 'Can be viewed only 1 time per person' box
6. Type user's Hackney email address to the 'Email addresses for the people to share this with:' field
7. Click on 'Get link to share'
8. Use the 'Copy' option in the popup to get the shareable link and email it to the user's Hackney email address

Once the link has been shared user can follow these steps to receive the password:
1. Open the link in the email from 1Password
2. Verify your email address by filling in the details on the page and click 'Send code'
3. Wait for the code to arrive and paste it to the 'Verification code' field
4. Copy the provided password from the page. Please note the password can be retrieved only once
5. Use the provided password to connect to Redshift from your BI tool and use the SQL command below to change it. Please see the ["Generating strong password"](#Generating-strong-password) section for advice on how to generate strong password

```sql
ALTER USER {username} password '{new-password}'; 
```

## External Schema

Redshift Spectrum is able to access data in S3 that has been cataloged via AWS Glue by creating an external
schema. An external schema acts like a database but instead of holding the data within the redshift cluster it uses an
attached IAM role to read the data from S3.

### Adding an External Schema requirements

To create an External Schema you will need the name of the AWS Glue Database to be added. An IAM role that can be used
to read the data from S3 (A role has been included in the Data Platform) and a schema name that the database will be
displayed as.

## Finding the name of the AWS Glue Database to be added

Navigate to AWS Glue and retrieve the name of the database you want to expose in Redshift. The example below uses 'housing-repairs-raw-zone'.

## Finding the IAM Role details

Use the appropriate IAM role that you will find in the IAM console in AWS.

### Adding an External Schema

Execute the following SQL against the Redshift Cluster:

```
CREATE EXTERNAL SCHEMA {schema-name}
    FROM DATA CATALOG
    DATABASE '{aws-glue-database}'
    IAM_ROLE 'arn:aws:iam::{aws-account-id}:role/dataplatform-{environment}-redshift-role'
    CREATE EXTERNAL DATABASE IF NOT EXISTS;
```

Example:

```sql
CREATE EXTERNAL SCHEMA housing_repairs_raw_zone
    FROM DATA CATALOG
    DATABASE 'housing-repairs-raw-zone'
    IAM_ROLE 'arn:aws:iam::000000000000:role/dataplatform-prod-redshift-role'
    CREATE EXTERNAL DATABASE IF NOT EXISTS;
```

### Granting a User Access

For a user to be able to access an external schema, they must first be granted the temp permission on the containing
database. Execute the following SQL against the Redshift Cluster:

```sql
GRANT temp
	ON DATABASE {database-name}
    TO {username};
```

Example:

```sql
GRANT temp
	ON DATABASE data_platform
    TO housing_repairs;
```

Once a user has the temp permission of a specific database, they then need to be granted permissions on each External
Schema that they need access to. Run the following commands for each Schema:

```sql
GRANT USAGE
	ON SCHEMA {schema-name}
    TO {username};

GRANT SELECT
	ON ALL TABLES IN SCHEMA {schema-name}
    TO {username};
```

Example:

```sql
GRANT USAGE
	ON SCHEMA housing_repairs_raw_zone
    TO housing_repairs;

GRANT SELECT
	ON ALL TABLES IN SCHEMA housing_repairs_raw_zone
    TO housing_repairs;
```

## Role based access control (RBAC)

### Roles management

Redshift roles are managed using Terraform configuration. Configuration can be used to create new roles, give roles access to external schemas and also to setup role grants to allow roles to inherit permissions from other roles.

Please see the [Terraform configuration](https://github.com/LBHackney-IT/Data-Platform/blob/main/terraform/etl/42-redshift.tf) for details.

### Users permission to roles

Redshift users can be granted access to roles by running the following command:

```sql
GRANT ROLE {role-name} To {user-name};
```

Example:
```sql
GRANT ROLE housing_ro to username;
```
Please note if username is an email address the username must be wrapped in double quotes.

### Storing the credentials of the created user in a parameters store

The password created for the user needs to be added to the record created by Terraform in the AWS Secret Manager.

### How do we know if it worked?

You will know if it has worked because the data will be visible in the redshift and via the redshift connectors in tools such as Qlik or Google Data Studio using the credentials in AWS Secret Manager.

### Related documents

- [Connecting to the Redshift cluster from Google Data Studio][connecting-to-redshift-from-data-studio]

[connecting-to-redshift-from-data-studio]: ../playbook/querying-and-analysing-data/connecting-to-redshift-from-data-studio
