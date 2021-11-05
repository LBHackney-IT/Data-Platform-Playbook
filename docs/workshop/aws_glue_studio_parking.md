---
title: "Glue Studio workshop with Parking Analysts"
description: ""
tags:
layout: layout
---

## Prerequisities

* Have access to the Parking Liberator Raw zone.
* Have experience with writing SQL queries in [AWS Athena][aws_athena] already.
* Have experience running AWS Glue Crawlers.

## Learning objectives

* Know how to create a batch transformation job written in SparkSQL, hosted inside of AWS Glue Studio.
* Aware there are differences between the Presto SQL language, and SparkSQL lanugage.

## Introduction

As part of this workshop, we will be using [Apache Spark][apache_spark] to perform batch
transformation on the Hackney parking Liberator dataset.

The Data Platform provides a managed installation of Apache Spark called AWS Glue Studio.
We'll be using this tool to create an AWS Glue job which will aggregate permit renewal
information.

[SparkSQL][spark_sql] is a SQL API on top of the Spark batch processing engine.
AWS Glue Studio also provide support for writing jobs in the [Python][python]
and [Scala][scala] programming languages, if you prefer those.

This guide takes the reader through using SparkSQL, and assumes experience of writing
and debugging SQL queries.

Once written, AWS Glue batch jobs can be scheduled to run unattended over very large
datasets.

:::info
Throughout this documentation, whereever you see __NAME__, replace this with your name
e.g. "adrian".

This is so that this guide can be performed independently by multiple people at the same time.
When writing jobs outside of this guide, you don't need to follow this convention.
:::

## Prototyping your transformation using Presto SQL

Imagine we want to perform analysis on the number and duration of parking permit renewals.

We first prototype our query inside of AWS Athena using its Presto SQL language.

:::note Exercise

Create an SQL query for [AWS Athena][aws_athena_console] which extracts, and aggregates permit renewals and produces
a resultset with the below format.

The data platform provides source data within the table
  `"dataplatform-stg-liberator-raw-zone"."liberator_permit_renewals"`.

You will want to convert VARCHAR columns to [appropriate AWS Athena data types][athena_data_types].
Specifically, the time columns should have a TIMESTAMP type.
Presto SQL provide a variety of [date/time functions][presto_sql_datetime_functions].
Note that some of the renewal records have empty string values which may cause a cryptic error
message to appear when passing an empty string into a time function.

Keep a copy of the query you create somewhere safe, for the next part of this guide.
:::

<table>
  <thead>
    <tr>
      <th>permit_reference</th>
      <th>earliest_start_date</th>
      <th>latest_end_date</th>
      <th>number_of_renewals</th>
      <th>import_year</th>
      <th>import_month</th>
      <th>import_day</th>
      <th>import_date</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>XXXYYYYYYY</td>
      <td>2017-01-02 00:00:00</td>
      <td>2018-01-02 00:00:00</td>
      <td>2</td>
      <td>2021</td>
      <td>04</td>
      <td>15</td>
    </tr>
  </tbody>
</table>

<details>
  <summary><b>Answer</b>, reveal once you've attempted the above.</summary>

```sql
SELECT
      permit_reference,
      MAX(DATE_PARSE(NULLIF(renewal_end_date, ''), '%Y-%m-%d %H:%i:%S')) AS last_end_date,
      MIN(DATE_PARSE(NULLIF(renewal_start_date, ''), '%Y-%m-%d %H:%i:%S')) AS earliest_start_date,
      COUNT(*) AS number_of_renewals,
      import_year, import_month, import_day, import_date
FROM "dataplatform-stg-liberator-raw-zone"."liberator_permit_renewals"
GROUP BY permit_reference, import_year, import_month, import_day, import_date
```
</details>


## Moving your query to AWS Glue Studio

Once you have written, and seen a successful execution of your query in AWS Athena, we can move onto
creating an AWS Glue Job which will transform and copy the `dataplatform-stg-raw-zone` data
into the `dataplatform-stg-refined-zone`.

Turning our first query into a Glue Job which transforms the data into a new dataset, will allow us
to share this into a permit renewals dashboard on Google Data Studio.

We will first create a new AWS Glue Studio job by following a modified version of the guide
[creating a new Glue Job][creating_a_new_glue_job].
* For the environment, we'll be using `stg`.
* For the __Data source__ node, we'll select __Data catalogue table__ for "S3 source type"
  under the "Data source properties" tab.
  Then choosing `dataplatform-stg-liberator-raw-zone` and `liberator_permit_renewals`
  for Database and Table respectively.
* For the __Data target__ node:
  1. Set the Format to "Glue Parquet"
  1. Specify the destination as `s3://dataplatform-stg-refined-zone/parking/liberator/NAME_parking_permit_renewals/`.
  1. For "Data Catalog update options" select "Create a table in the Data Catalog and on subsequent runs, update the schema and add new partitions".
  1. For "Database" select "dataplatform-stg-liberator-refined-zone" from the dropdown.
  1. In "Table name" write `NAME_parking_permit_renewals`.
  1. Under the parition keys, add in the following order: `import_year`, `import_month`, `import_day`, `import_date`.

* For the __Name__ of the job, specify `NAME_GlueStudioWorkshop`
* For the __IAM Role__ of the job, specify `dataplatform-stg-parking-glue`
* For the "Number of retries" under "Job details" specify 0.
* For the "Security configuration" select "dataplatform-stg-config-to-refined".

:::info
AWS Glue enables a feature called [Job Bookmarks][aws_glue_job_bookmarks] by default.

Job bookmarks cause a glue job to perform its batch processing on data which has not
already been processed previously by the same job.

This is useful to reduce the cost of processing, but when developing jobs you will
want to temporarily disable this feature from the "Job Details" tab.
:::

Once you have created and saved this job, we will replace the default transformation with
our SQL created above.

1. Switch to the "Visual" tab, and click on the "Transform - ApplyMapping" node.
   In the properties bar on the right, switch to the "Node Properties" tab and change the "Node Type"
   to "Spark SQL".
1. Switch to the "Transform" tab paste in your SQL query from above into the "Code Block" box.
   The Spark SQL executor will only accept a single SQL query, and that query mustn't have
   a trailing semicolon.
1. Change the value of "Spark SQL aliases" to `liberator_permit_renewals`, and remove any usage of a
   database prefix `dataplatform-stg-liberator-raw-zone` from the SQL query inside of the "Code Block".
   If your query joined multiple tables, each table would need a distinct "Data Source" linked
   to the "Spark SQL" node.
1. Click the __Save__ button, followed by the __Run__ button.
1. Click on the "Runs" tab, and follow the progress of your job.
1. Once finished, the job might fail with an error message similar to this
```shell
AnalysisException: "
  Undefined function: 'date_parse'.
  This function is neither a registered temporary function nor a permanent function registered in the database 'default'.
"
```

:::note Exercise

Switching back to the "Visual" tab, continue modifying, saving and running the SQL query
of your AWS Glue job until the "Run status" becomes "Succeeded".
The Spark SQL `to_timestamp` [function documentation][spark_sql_to_timestamp] might be useful.

Confirm your AWS Glue Job has worked as you expected by querying the newly created table
in [AWS Athena][aws_athena_console] under the database `dataplatform-stg-liberator-refined-zone`, with the
name `NAME_parking_permit_renewals`.
:::

## Cleaning up

Once you have finished the exercise
1. Find and delete your job within [AWS Glue Jobs list][aws_glue_jobs_console].
1. From the [S3 console][aws_s3_conosole_refined_zone], delete the folders your job created.
   There will be a folder called `NAME_parking_permit_renewals` and a file called `NAME_parking_permit_renewals_$folder$`
   to delete.
1. Delete the table created within the [AWS Glue table][aws_glue_table] interface.
   You can find the table by searching for `NAME_parking_permit_renewals` within the search box.

[apache_spark]: https://spark.apache.org/
[spark_sql]: https://spark.apache.org/docs/latest/api/sql/index.html
[spark_sql_to_timestamp]: https://spark.apache.org/docs/latest/api/sql/index.html#to_timestamp
[python]: https://www.python.org/
[scala]: https://www.scala-lang.org/
[aws_athena]: ../playbook/querying-data/querying-data-using-sql.md
[athena_data_types]: https://docs.aws.amazon.com/athena/latest/ug/data-types.html
[presto_sql_datetime_functions]: https://prestodb.io/docs/0.217/functions/datetime.html
[creating_a_new_glue_job]: ../playbook/transforming-data/using-glue-studio.md#creating-a-new-glue-job
[aws_athena_console]: https://eu-west-2.console.aws.amazon.com/athena/home?region=eu-west-2#query
[aws_glue_job_bookmarks]: https://docs.aws.amazon.com/glue/latest/dg/monitor-continuations.html
[aws_glue_jobs_console]: https://eu-west-2.console.aws.amazon.com/glue/home?region=eu-west-2#etl:tab=jobs
[aws_s3_conosole_refined_zone]:https://s3.console.aws.amazon.com/s3/buckets/dataplatform-stg-refined-zone?region=eu-west-2&prefix=parking/liberator/&showversions=false
[aws_glue_table]: https://eu-west-2.console.aws.amazon.com/glue/home?region=eu-west-2#catalog:tab=tables
