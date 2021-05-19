---
title: Ingest data from csv files
description: "Ingest data from csv files"
layout: playbook_js
tags: playbook
---

- Sign in to the AWS Management Console and open the Amazon S3 console at https://console.aws.amazon.com/s3/
- In the Buckets list, choose the `dataplatform-prod-landing-zone` bucket
- Create the following folder structure within the bucket
```
department/
└── dataset/
    └── import_year=2021/
        └── import_month=05/
            └── import_day=11/
                └── file.csv
```
- Upload the CSV file.

- Create an [ETL job](./using-glue-studio#creating-a-new-glue-job) to export the file to the raw zone as parquet
