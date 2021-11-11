---
id: scheduling-liberator-glue-jobs
title: Scheduling Liberator Glue Jobs
description: "Schedule a glue job to run when new liberator data is added into the platform"
layout: playbook_js
tags: [playbook]
---

## Intro

This guide will step you through how to schedule a glue job, from the AWS console, that runs on the liberator data in the [raw zone][raw_zone].

Scheduling your glue job will mean that it will run whenever new liberator data is added in the data platform so that your
transformed data in, say, the [refined zone][refined_zone] is based on the most up to date data, with no manual intervention.

## Prerequisites

* You have created a glue job that transforms the liberator data in the [raw zone][raw_zone]. There is guidance on [creating a glue job][creating_a_glue_job] and a [workshop][workshop] if you need help with this.
* You have access to the Hackney Data Platform

## Steps

- Sign in to the [AWS Management Console][hackney_aws_sso]

- In [AWS Glue Studio][aws_glue_studio], Check the properties for all of the __Data targets__ in your glue job. Ensure you have the following properties set in the "Data target properties" tab.
  1. The Format is set to "Glue Parquet"
  1. Under "Data Catalog update options", the option "Create a table in the Data Catalog and on subsequent runs, update the schema and add new partitions" is selected.
  1. A "Database" and "Table name" should also be filled in.

This is so that the job will update the tables in [AWS Athena][aws_athena] after it runs, without having to run a crawler.


- Naviagte to [AWS Glue Workflows][aws_glue_workflows].

- Select the workflow called `parking-liberator-data-workflow`, a diagram should appear at the bottom.

- There should be a trigger (diamond shaped) labeled `trigger-liberator-jobs`.
  If this trigger doesn't exist follow [these steps](#creating-a-trigger-to-start-liberator-glue-jobs) to create it.

- Click on the trigger shape, then on the "Action" dropdown and select "Add jobs/crawlers to trigger".

- Click on the "Jobs" tab. Find and select the job you just created.

- Click "Add". Your job should appear in the diagram, connected to the trigger.

Your job is now scheduled to run when new liberator data is added to the platform.


## Creating a trigger to start liberator glue jobs

- Click on "Action" to display the dropdown and select "Add trigger".
- Click on the "Add new" tab, put `trigger-liberator-jobs` in the Name field then click "Add'.
A new diamond shape will appear in the diagram with a broken link symbol, this is the trigger you have just added and it now needs to be linked to the rest of the workflow.
- Click on the shape, then on the "Action" dropdown and select "Add jobs/crawlers to watch".
Ensure the "Jobs" tab is selected. Select the job `Copy parking Liberator landing zone to raw` from, then list then click "Add".
- Continue following the instructions above.

[aws_glue_workflows]: https://eu-west-2.console.aws.amazon.com/glue/home?region=eu-west-2#etl:tab=workflows;workflowView=workflow-list
[raw_zone]: ../../../zones.md#raw-zone
[refined_zone]: ../../../zones.md#refined-zone
[aws_glue_triggers]: https://eu-west-2.console.aws.amazon.com/glue/home?region=eu-west-2#etl:tab=triggers
[aws_glue_studio]: https://eu-west-2.console.aws.amazon.com/gluestudio/home?region=eu-west-2#/jobs
[aws_athena]: https://eu-west-2.console.aws.amazon.com/athena/home?region=eu-west-2#query
[hackney_aws_sso]: https://hackney.awsapps.com/start#/
[creating_a_glue_job]: ./using-glue-studio
[workshop]: ../../../workshop/aws_glue_studio_parking.md
