---
title: Homework - write a partitioned calendar aggregate
description: "Homework for writing a different universal_calendar aggregate to a partitioned refined-zone Glue table."
layout: playbook_js
tags: [playbook]
---

## Goal

Create a second script that:

- reads `"unrestricted-raw-zone"."universal_calendar"`
- creates a monthly aggregate
- writes to `s3://dataplatform-stg-refined-zone/data-and-insight/testing/demo/`
- registers a new table in `"data-and-insight-refined-zone"`
- partitions the output by `["import_year", "import_month", "import_day", "import_date"]`

Use your own name in the table name. For example, Jane Smith should use:

```python
TABLE_NAME = "test_jane_smith_demo_calendar_monthly_partitioned"
```

Do not use `tian` unless your name is Tian.

## Task

Copy `universal_calendar_demo.py` into a new file:

```text
universal_calendar_homework.py
```

Change these values:

```python
TABLE_NAME = "test_your_name_demo_calendar_monthly_partitioned"
PARTITION_COLUMNS = ["import_year", "import_month", "import_day", "import_date"]
```

Change the SQL so it aggregates by year and month:

```sql
SELECT
  year(CAST(date_iso AS timestamp)) AS calendar_year,
  month(CAST(date_iso AS timestamp)) AS calendar_month,
  count(*) AS day_count,
  sum(CASE WHEN bank_holiday_flag THEN 1 ELSE 0 END) AS bank_holiday_count
FROM "unrestricted-raw-zone"."universal_calendar"
WHERE date_iso IS NOT NULL
GROUP BY 1, 2
ORDER BY 1, 2
```

Before writing the parquet, add the partition columns:

```python
from datetime import date

today = date.today()
df["import_year"] = today.year
df["import_month"] = today.month
df["import_day"] = today.day
df["import_date"] = today.isoformat()
```

Add this line to `wr.s3.to_parquet`:

```python
partition_cols=PARTITION_COLUMNS,
```

## Check

Run:

```powershell
py .\universal_calendar_homework.py
```

Then check the table in Athena:

```sql
SELECT *
FROM "data-and-insight-refined-zone"."test_your_name_demo_calendar_monthly_partitioned"
LIMIT 10;
```

You should also see partition folders in S3, for example:

```text
import_year=2026/import_month=5/import_day=19/import_date=2026-05-19/
```
