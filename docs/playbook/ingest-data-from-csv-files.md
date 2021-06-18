---
title: Ingest manually uploaded csv files
description: "Ingest data from csv files"
layout: playbook_js
tags: playbook
---

## Prerequisites

* You have some structured data files you wish to have available from the Data Platform
* You have access to the Hackney Data Platform
* The department you are placing this data into the data platform has the manual CSV upload
  functionality enabled.

## Steps

- Ensure your data meets the following requirments before proceeding.
    - You have saved the data as a "CSV" file format, using a comma to separate fields.
      When [exporting from Excel][excel_csv], select the "CSV UTF-8" option.
    - The first line of the CSV contains the names of the columns as you wish them
      to appear within the Data Platform.
      If there are any empty rows before the column names delete them before exporting
      the file.

- Sign in to the AWS Management Console and open the [Amazon S3 console][aws_s3_console].

- In the Buckets list, choose a landing zone bucket, either the `dataplatform-stg-landing-zone`
  or `dataplatform-prod-landing-zone` bucket.
  Navigate to your departments manual upload folder, see below for structure.

  ```
  <department>/
  └── manual/
  ```

- Inside of the manual folder, create a new folder for the dataset you wish to create inside the data platform.
  The name of the folder you create here will be used as the table name for the datasource throughout the platform.
  If you are appending data to an already existing dataset, you can skip this step.

- Inside of your dataset folder, upload a CSV containing your dataset by clicking the "Add files" button
  and selecting the local files you want to upload then afterwards click the "Upload" button.
  Alternatively, you can use "Add folder" taking care not to have any files in your local folder that you do not want to upload.
  Any CSVs uploaded within this folder will be combined into one dataset, and should have a matching set of columns.
  The status of each file should say "Upload succeeded", then click on the "Close" button.

- Now go to [AWS Glue Jobs][aws_glue_jobs_console], where you will run the job called
  `<department> copy manually uploaded CSVs to raw`.
  Select this job and click the "Run job" option in the Action pull-down menu.
  If a "Parameters" dialogue box appears then click "Run job".

- Reselect the Job, observe the progress of its run within the "History" tab, and wait
  for the "Run status" to reach "Succeeded".
  This job will have created a S3 folder structure as shown below inside the [Raw zone][raw_zone]
  and an Apache Parquet file containing your CSV data inside of there.
  You can check the output by navigating to S3 Bucket `dataplatform-stg-raw-zone`, confirming
  the folder structure, and observing that Apache Parquet file(s) have been created.

  ```
  <department>/
  └── manual/
      └── <dataset-name>/
          └── import_year=<year>/
              └── import_month=<month>/
                  └── import_day=<day>/
                      └── part-xxxxx-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx.xxxx.snappy.parquet
  ```

## Confirm the import worked

Next we'll confirm the data has been imported correctly by inspecting it within
[AWS Athena](querying-data-using-sql.md).

- Before accessing the data within Athena, you will need to run the crawler for this data.
  Navigate to the [AWS Glue Crawler][aws_glue_crawler_console] interface, find the job named
  `data-platform-stg-raw-zone-<department>-manual-uploads-crawler`, then click on "Run crawler".
  Observe the job within the console until it's status returns to "Ready".
  Check the "Last runtime" of previous jobs to get an idea of how long you might have to wait.

- Once crawled, there will be a newly created table within the database which you can access in Athena as
  `dataplatform-stg-raw-zone-<department>-manual-uploads-database`.
  You should see a table eg. "cake\_designs" with the column names as per the CSV header.
  You should also see various "import\_..." columns at the end some of which are marked (Partitioned).
  You can then view the newly imported tables under the tables tab.
  Note: The original names of the files, when they were uploaded, is not captured here at the moment.

[excel_csv]: https://docs.workstars.com/en/latest/howto/save-csv-utf8.html
[raw_zone]: ../zones.md#raw-zone
[aws_s3_console]: https://console.aws.amazon.com/s3/
[aws_glue_jobs_console]: https://eu-west-2.console.aws.amazon.com/glue/home?region=eu-west-2#etl:tab=jobs
[aws_glue_crawler_console]: https://eu-west-2.console.aws.amazon.com/glue/home?region=eu-west-2#catalog:tab=crawlers
