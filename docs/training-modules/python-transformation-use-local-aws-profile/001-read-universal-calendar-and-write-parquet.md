---
title: Read universal_calendar and write a demo parquet table
description: "Simple Windows example for reading universal_calendar, aggregating it, writing Parquet to S3, and registering a Glue table."
layout: playbook_js
tags: [training]
---

## Goal

Read from:

```sql
"unrestricted-raw-zone"."universal_calendar"
```

Write parquet to:

```text
s3://dataplatform-stg-refined-zone/data-and-insight/testing/demo/test_tian_demo_calendar/
```

The generated parquet file name will start with `test_tian_demo_calendar_`.

Register this Glue catalog table:

```text
"data-and-insight-refined-zone"."test_tian_demo_calendar"
```

The table name is fixed in the script as `test_tian_demo_calendar`.

## 1. Configure the AWS profile on Windows

Open this file:

```powershell
notepad C:\Users\<your_windows_username>\.aws\config
```

If the `.aws` folder or `config` file does not exist, create it.

Add this profile:

```ini
[profile DataPlatformDataAndInsightStg]
sso_start_url = https://hackney.awsapps.com/start
sso_region = eu-west-1
sso_account_id = 120038763019
sso_role_name = DataPlatformDataAndInsightStg
region = eu-west-2
output = json
```

Then log in:

```powershell
aws sso login --profile DataPlatformDataAndInsightStg
```

Check the login works:

```powershell
aws sts get-caller-identity --profile DataPlatformDataAndInsightStg
```

## 2. Install the Python packages

```powershell
pip install awswrangler boto3
```

## 3. Check the Python script

The runnable script is stored next to this page:

```text
docs/training-modules/python-transformation-use-local-aws-profile/universal_calendar_demo.py
```

It is safe to run more than once:

- It writes only to the S3 folder for its own `TABLE_NAME`.
- It stores temporary Athena query output under `s3://dataplatform-stg-athena-storage/data-and-insight/`.
- It clears that folder before writing.
- It uses `mode="overwrite"` so the Glue catalog table is replaced each run.

## 4. Run it


## 5. Check the result in Athena

Use the same table name that you put in the script:

```sql
SELECT *
FROM "data-and-insight-refined-zone"."test_tian_demo_calendar"
ORDER BY calendar_year
LIMIT 10;
```
