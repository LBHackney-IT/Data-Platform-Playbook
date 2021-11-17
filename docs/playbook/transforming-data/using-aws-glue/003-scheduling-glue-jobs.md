---
id: scheduling-glue-jobs
title: Scheduling Glue Jobs
description: "Schedule a glue job to run on a schedule or by a trigger"
layout: playbook_js
tags: [playbook]
---

## Intro

This guide will step you through how to schedule a glue job, from the AWS console.

Scheduling your glue job will mean that it will run when specific conditions are met, with no manual intervention.

## Prerequisites

- You have created an existing Glue job.
  There is guidance on [creating a glue job][creating_a_glue_job] and a [workshop][workshop] if you need help with this.
- You have access to the Hackney Data Platform

## Steps

- Sign in to the [AWS Management Console][hackney_aws_sso]

- In [AWS Glue Studio][aws_glue_studio], select your Glue job and check the properties for all of the **Data targets** in your glue job.
  Select the `Data target` node and ensure you have the following properties set in the `Data target properties` tab.

  1. The Format is set to `Glue Parquet`
  1. Under `Data Catalog update options`, ensure the option: "Create a table in the Data Catalog and on subsequent runs, update the schema and add new partitions" is selected.
  1. Select a `Database` from the drop-down field and enter a `Table name`

  This is so that the job will update the tables in [AWS Athena][aws_athena] after it runs, without having to run a crawler.

- Naviagte to [AWS Glue Workflows][aws_glue_workflows] and select a workflow.
  A diagram should appear at the bottom.

- Select an existing trigger or create a new one by following [these steps](#creating-a-trigger-to-start-your-glue-jobs).

- Click on the trigger shape, then on the `Action` dropdown and select `Add jobs/crawlers to watch`.
  - Click on the `Jobs` tab. Find and select the job or crawler that you want to trigger your Glue job.
  - Click `Add`.
- Click on the trigger shape again, then the `Action` dropdown and select `Add jobs/crawlers to trigger`.

  - Click on the `Jobs` tab. Find and select the job you just created.
  - Click `Add`.
    Your job should appear in the diagram, connected to the trigger.

Your job is now scheduled to run when "watched" crawler or job has successfully run.

## Creating a trigger to start your Glue jobs

- Select the job or crawler you want to trigger your Glue job.
- Select the new `Add trigger` diamond shape that appears next to the job.
- Click on the `Add new` tab and enter a name for your trigger then select `Add`.
  The diamond shape will now appear filled in in the diagram with a broken link symbol,
  this is the trigger you have just added, and it now needs to be linked to the rest of the workflow.
- Click on the shape, then on the `Action` dropdown and select `Add jobs/crawlers to watch`.
  - Select the `Jobs` or `Crawlers` tab, select the job or crawler to "watch", then click `Add`.
- Continue following the instructions above.

[aws_glue_workflows]: https://eu-west-2.console.aws.amazon.com/glue/home?region=eu-west-2#etl:tab=workflows;workflowView=workflow-list
[aws_glue_triggers]: https://eu-west-2.console.aws.amazon.com/glue/home?region=eu-west-2#etl:tab=triggers
[aws_glue_studio]: https://eu-west-2.console.aws.amazon.com/gluestudio/home?region=eu-west-2#/jobs
[aws_athena]: https://eu-west-2.console.aws.amazon.com/athena/home?region=eu-west-2#query
[hackney_aws_sso]: https://hackney.awsapps.com/start#/
[creating_a_glue_job]: ./using-glue-studio
[workshop]: ../../../workshop/aws_glue_studio_parking.md
