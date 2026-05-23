---
title: Homework - ingest Police API crime categories
description: "Homework for reading a different Police API endpoint and writing the result to the raw zone."
layout: playbook_js
tags: [training]
---

## Goal

Create your own scripts to read crime categories from the Police API and write the result to the raw zone.

Use this API endpoint:

```text
https://data.police.uk/api/crime-categories?date=2024-01
```

Write the raw JSON response to:

```text
s3://dataplatform-stg-raw-zone/data-and-insight/testing/demo/police_api_crime_categories/crime-categories-2024-01.json
```

Then create a partitioned parquet Glue table in:

```text
"data-and-insight-raw-zone"."test_your_name_demo_police_crime_categories"
```

Partition the table by:

```python
["import_year", "import_month", "import_day", "import_date"]
```

Use your own name in the table name. Do not use `tian` unless your name is Tian.

API documentation:

- [Police API documentation](https://data.police.uk/docs/)
- [Crime categories method](https://data.police.uk/docs/method/crime-categories/)
