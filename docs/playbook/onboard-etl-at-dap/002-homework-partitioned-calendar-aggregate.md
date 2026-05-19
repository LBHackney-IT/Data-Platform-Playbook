---
title: Homework - write a partitioned calendar aggregate
description: "Homework for writing a different universal_calendar aggregate to a partitioned refined-zone Glue table."
layout: playbook_js
tags: [playbook]
---

## Goal

Create a new Python script that reads:

```sql
"unrestricted-raw-zone"."universal_calendar"
```

Write a different aggregate to:

```text
s3://dataplatform-stg-refined-zone/data-and-insight/testing/demo/test_<your_name>_demo_calendar_monthly_partitioned/
```

Register this new Glue catalog table in the same database:

```text
"data-and-insight-refined-zone"."test_<your_name>_demo_calendar_monthly_partitioned"
```

Use your own name in the table name. For example, if your name is Jane Smith, use `test_jane_smith_demo_calendar_monthly_partitioned`. Do not use `tian` unless your name is Tian.

The output must be partitioned by:

```python
["import_year", "import_month", "import_day", "import_date"]
```

## Task

Copy `universal_calendar_demo.py` into a new file:

```text
universal_calendar_homework.py
```

Change the table constants:

```python
TABLE_NAME = "test_your_name_demo_calendar_monthly_partitioned"
PARTITION_COLUMNS = ["import_year", "import_month", "import_day", "import_date"]
```

Use this different aggregate query:

```sql
SELECT
  year(CAST(date_iso AS timestamp)) AS calendar_year,
  month(CAST(date_iso AS timestamp)) AS calendar_month,
  count(*) AS day_count,
  sum(CASE WHEN bank_holiday_flag THEN 1 ELSE 0 END) AS bank_holiday_count,
  sum(CASE WHEN holiday_flag THEN 1 ELSE 0 END) AS holiday_count
FROM "unrestricted-raw-zone"."universal_calendar"
WHERE date_iso IS NOT NULL
GROUP BY 1, 2
ORDER BY 1, 2
```

After reading the data into `df`, add these import partition columns:

```python
from datetime import date

today = date.today()
df["import_year"] = today.year
df["import_month"] = today.month
df["import_day"] = today.day
df["import_date"] = today.isoformat()
```

Update the `wr.s3.to_parquet` call so it writes partitions:

```python
result = wr.s3.to_parquet(
    df=df,
    path=target_prefix,
    index=False,
    dataset=True,
    mode="overwrite",
    database=TARGET_DATABASE,
    table=TABLE_NAME,
    partition_cols=PARTITION_COLUMNS,
    filename_prefix=f"{TABLE_NAME}_",
    boto3_session=session,
)
```

## Check Your Work

Run the script:

```powershell
py .\universal_calendar_homework.py
```

Check the S3 path has partition folders like this:

```text
import_year=2026/import_month=5/import_day=19/import_date=2026-05-19/
```

Check the table in Athena:

```sql
SELECT
  import_year,
  import_month,
  import_day,
  import_date,
  count(*) AS row_count
FROM "data-and-insight-refined-zone"."test_your_name_demo_calendar_monthly_partitioned"
GROUP BY 1, 2, 3, 4
ORDER BY 1, 2, 3, 4;
```

Expected result: one import partition for the day you ran the script.
