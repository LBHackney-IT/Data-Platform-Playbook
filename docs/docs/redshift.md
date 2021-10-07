---
title: Redshift Configuration
description: ""
layout: playbook_js
tags: [playbook]
---

## Collection Structure
Unlike most Database services. Redshift has a three tier collection setup:
1. The top most tier is called a Database, a Database contains multiple Schemas
2. The second tier is called a Schema, a Schema contains multiple Tables
3. The final tier is called a Table, a Table contains multiple rows of data or references a location in S3

```Database -> Schema -> Table```

## Creat a User
To create a new user in Redshift, run the following command:
```sql
CREATE USER {username} WITH PASSWORD '{password}';
```

Example:
```sql
CREATE USER housing_repairs WITH PASSWORD 'th1s1sANEx&mpl3';
```

## External Schema

Redshift Spectrum is able to access data in S3 that has been cataloged via AWS Glue by creating an external
schema. An external schema acts like a database but instead of holding the data within the redshift cluster it uses an
attached IAM role to read the data from S3.

### Adding an External Schema

To create an External Schema you will need the name of the AWS Glue Database to be added. An IAM role that can be used
to read the data from S3 (A role has been included in the Data Platform) and a schema name that the database will be
displayed as.

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
    IAM_ROLE 'arn:aws:iam::000000000000:role/dataplatform-stg-redshift-role'
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