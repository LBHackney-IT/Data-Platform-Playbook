---
title: Scheduling Liberator Glue Jobs
description: "Schedule a glue job to run when new liberator data is added into the platform"
layout: playbook_js
tags: playbook
---

## Intro

This guide will step you through how to schedule a glue job, from the AWS console, that runs on the liberator data in the [landing zone][landing_zone].

Scheduling your glue job will mean that it will run whenever new liberator data is added in the data platform so that your
transformed data in, say, the [refined zone][refined_zone] is based on the most up to date data, with no manual intervention. 

## Prerequisites

* You have created a glue job that transforms the liberator data in the [landing zone][landing_zone]. There is guidance on [creating a glue job][creating_a_glue_job] and a [workshop][workshop] if you need help with this.
* You have access to the Hackney Data Platform

## Steps

- Sign in to the [AWS Management Console][hackney_aws_sso]

- In [AWS Glue Studio][aws_glue_studio], Check the properties for all of the __Data targets__ in your glue job. Ensure you have the following properties set in the "Data target properties" tab.
  1. The Format is set to "Glue Parquet"
  1. Under "Data Catalog update options", the option "Create a table in the Data Catalog and on subsequent runs, update the schema and add new partitions" is selected.
  1. A "Database" and "Table name" should also be filled in.

This is so that the job will update the tables in [AWS Athena][aws_athena] after it runs, without having to run a crawler.

- Navigate to [Amazon Glue Triggers][aws_glue_triggers].

- Select the trigger named `trigger-liberator-jobs` by checking the box.

- Click on "Action" to open the dropdown. Click on "Choose jobs to trigger".

- Look for the job you just created in the "All Jobs" list on the left. Click "Add" next to your job, so that it moves to the "Jobs to start" list on the right.

- Click "Choose jobs" at the bottom.

Your job is now scheduled to run when new liberator data is added to the landing zone.

[landing_zone]: ../zones.md#landing-zone
[refined_zone]: ../zones.md#refined-zone
[aws_glue_triggers]: https://eu-west-2.console.aws.amazon.com/glue/home?region=eu-west-2#etl:tab=triggers
[aws_glue_studio]: https://eu-west-2.console.aws.amazon.com/gluestudio/home?region=eu-west-2#/jobs
[aws_athena]: https://eu-west-2.console.aws.amazon.com/athena/home?region=eu-west-2#query
[hackney_aws_sso]: https://hackney.awsapps.com/start#/
[creating_a_glue_job]: ./using-glue-studio.md
[workshop]: ../workshop/aws_glue_studio_parking.md