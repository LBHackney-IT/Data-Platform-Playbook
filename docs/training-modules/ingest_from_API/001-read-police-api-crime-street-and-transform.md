---
title: Read Police API crime street data and transform it
description: "Simple Windows example for reading Police API JSON, saving it to raw S3, and creating a partitioned raw-zone Glue table."
layout: playbook_js
tags: [training]
---

## Goal

Read street-level crime data from the Police API:

```text
https://data.police.uk/api/crimes-street/all-crime?date=2024-01&lat=51.5450&lng=-0.0553
```

Write the raw JSON response to:

```text
s3://dataplatform-stg-raw-zone/data-and-insight/testing/demo/police_api_crime_street/crimes-street-all-crime-hackney.json
```

Then transform that raw JSON into a partitioned parquet Glue table in the raw zone:

```text
"data-and-insight-raw-zone"."test_tian_demo_police_crime_street"
```

Partition the transformed table by:

```python
["import_year", "import_month", "import_day", "import_date"]
```

The Police API street-level crimes method supports a point search using `lat`, `lng`, and an optional `date`. This example uses a fixed point in Hackney and `date=2024-01` so the result is small enough for a training run.

API documentation:

- [Police API documentation](https://data.police.uk/docs/)
- [Street-level crimes method](https://data.police.uk/docs/method/crime-street/)

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
pip install boto3 requests awswrangler pandas
```

## 3. Check the scripts

The runnable scripts are stored next to this page:

```text
docs/training-modules/ingest_from_API/police_api_crime_street_raw.py
docs/training-modules/ingest_from_API/police_api_crime_street_transform.py
```

The first script reads from the API and writes one JSON file to the raw zone.

The second script reads that raw JSON file, flattens the nested API fields, adds import partition columns, writes parquet to the raw zone, and registers a Glue table.

Both scripts use `logging`, not `print`, so the run output is clear.

## 4. Run the raw ingest

Check the raw JSON file to  s3://dataplatform-stg-raw-zone/data-and-insight/testing/demo/police_api_crime_street/


## 5. Run  the transform



Check the partitioned parquet files: s3://dataplatform-stg-raw-zone/data-and-insight/testing/demo/test_tian_demo_police_crime_street/



## 6. Check the result in Athena

check "data-and-insight-raw-zone"."test_tian_demo_police_crime_street"
