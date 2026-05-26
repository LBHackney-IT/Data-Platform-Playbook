---
title: Homework - write a partitioned calendar aggregate
description: "Homework for writing a different universal_calendar aggregate to a partitioned refined-zone Glue table."
layout: playbook_js
tags: [training]
---

## Goal

Create a second script that:

- reads `"unrestricted-raw-zone"."universal_calendar"`
- creates a monthly aggregate (you can choose the aggregation logic, for example count of days in each month)
- writes to `s3://dataplatform-stg-refined-zone/data-and-insight/testing/demo/`
- registers a new table in `"data-and-insight-refined-zone"`
- partitions the output by `["import_year", "import_month", "import_day", "import_date"]`

Use your own name in the table name. For example, Jane Smith should use:

```python
TABLE_NAME = "test_jane_smith_demo_calendar_monthly_partitioned"
```
