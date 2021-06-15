---
title: Ingest manually uploaded csv files
description: "Ingest data from csv files"
layout: playbook_js
tags: playbook
---

## Prerequisites

* You have some structured data files in CSV format you wish to have available from the Data Platform
* You have access to the Hackney Data Platform
* The department you are placing this data into the data platform has the manual CSV upload
  functionality enabled.

## Steps

- Sign in to the AWS Management Console and open the [Amazon S3 console][aws_s3_console].

- In the Buckets list, choose a landing zone bucket, either the `dataplatform-stg-landing-zone`
  or `dataplatform-prod-landing-zone` bucket.
  Navigate to your departments manual upload folder, see below for structure.

  ```
  <department>/
  └── manual/
  ```

- Inside of the manual folder, create a new folder for the dataset you wish to create inside the data platform.
  The name of the folder you create here will be used throughout the platform, e.g. if you create a folder
  called "cake-designs" you will see a table called "cake_designs" within [AWS Athena](querying-data-using-sql.md).
  If you are appending data to an already existing dataset, you can skip this step.

- Inside of your dataset folder, upload a CSV containing your dataset.  Any CSVs uploaded within this folder
  will be combined into one dataset, and should have a matching set of columns.

- Now switch to [AWS Glue Jobs][aws_glue_jobs_console], where you will run the job called
  `<department> copy manually uploaded CSVs to raw`.
  Select this job and click the "Run job" option underneath the Action menu.

- Observe the progress of this job using the "History" tab, and wait for the "Run status" to reach "Succeeded".
  This job will have created a S3 folder structure as shown below inside the Raw zone, and an Apache Parquet file
  containing your CSV data inside of there.

  ```
  <department>/
  └── manual/
      └── <dataset-name>/
          └── import_year=<year>/
              └── import_month=<month>/
                  └── import_day=<day>/
  ```

- To access this data within [AWS Athena](querying-data-using-sql.md), you will need to crawl this data, using
  the matching crawler.  Navigate to the [AWS Glue Crawler][aws_glue_crawler_console] interface, find the job
  named `raw-zone-<department>-manual-uploads-crawler`, and select "Run crawler".  Observe the job within the
  console until it's status returns to "Ready".

- Once crawled, there will be a newly created table within the database `raw-zone-<department>-manual-uploads-database`.
  You can then view the newly imported tables under the tables tab.

[aws_s3_console]: https://console.aws.amazon.com/s3/
[aws_glue_jobs_console]: https://eu-west-2.console.aws.amazon.com/glue/home?region=eu-west-2#etl:tab=jobs
[aws_glue_crawler_console]: https://eu-west-2.console.aws.amazon.com/glue/home?region=eu-west-2#catalog:tab=crawlerss
