---
title: Exporting database snapshot to the Data Platform Landing Zone
description: "Exporting a snapshot of an rds instance in AWS to the DataPlatform landing zone"
layout: playbook_js
tags: [playbook]
---

This guide explains the process of ingesting data from a RDS instance in the AWS API accounts to the Data Platform landing zone by creating db snapshots.

## Add rds instance id to the environment variables

In this section, you will be adding the rds instance id to the environment variables in Terraform, which will provision the necessary resources in AWS to create an event subscription on that database instance. Therefore, each time a database snapshot is created, it will begin the process of exporting that data to the Data Platform landing zone.

- Ensure you have access to the [Data Platform repository](https://github.com/LBHackney-IT/data-platform/)
- Login to the AWS management console for the account where the rds instance is located (for UPRN this will be `ProductionAPIs`)
  - Currently, the deployment is set up to only deploy to the Staging and Production API accounts. This will be refactored to allow us to release into multiple accounts
- Search for `RDS` and select
- Select `DB Instances` in the `Resources` section
- Copy the `DB identifier` of the database you want to export
- Navigate to [prod.tfvars](https://github.com/LBHackney-IT/Data-Platform/blob/main/config/terraform/prod.tfvars#L12) in the `config/terraform` directory and click the pencil icon to edit the file
- Add the `Db Identifier` to the `rds_instance_ids` environment variable by pasting it to the end of the list as shown below. Ensure you do not remove existing instance ids and that each instance id is double-quoted and comma separated.

```
rds_instance_ids = ["rds-instance-1", "rds-instance-2", "YOUR_DB_INSTANCE_ID"]
```

_The `rds_instance_ids` environment variable lists all the RDS instances that are configured to export to the Data Platform landing zone_

- Once the rds instance id has been added, navigate to the bottom of the page to the `Commit changes` section and add a short descriptive commit message in the first input field (80 characters max) and an optional description in the second input field
- Select the radio button labelled `Create a new branch for this commit and start a pull request` and give the new branch an appropriate name (separate words by dashes)
- Select `Commit changes`
- Populate the pull request template and select `Create pull request`
- Your pull request is now ready for review by the Data Platform team, and your changes will be applied once they have approved and merged your pull request, and a new production release has been made
- After your pull request has been approved and merged, you will be able to view the progress of the staging deployment. Once completed, the Data Platform team will then create a production release which will deploy your changes to production. You can view the progress of these steps by navigating to the `Data-Platform (Staging)` and `Data-Platform (Production)` workflows in the [actions tab](https://github.com/LBHackney-IT/Data-Platform/actions) of the repository.

  - The workflow for the staging deployment will contain the following text under the workflow title:

  ```
  Data-Platform (Staging) #xxx: Commit xxxx pushed by xxxxx
  ```

  - The production release workflow will contain the following text under the workflow title:

  ```
  Data-Platform (Production) #x: Release x.x.x published by xxxxx
  ```

## Create a snapshot of the rds instance

Once your pull request has been approved and released to production, you will need to log in to the AWS account where your RDS instance exists, to create a snapshot of it. The creation of this snapshot will trigger the export process of the data to the Data Platform landing zone.

- Search for `RDS` and select
- On the sidebar, select `Snapshots`
- Select `Take snapshot` on the Manual tab
- On `Take a Snapshot` page, use the `DB Instance` drop down and select the rds instance id as your DB instance

  In the `Snapshot Name` input field, enter a unique name for your snapshot according to the following convention: `dataplatform-YYYY-MM-DD-rds_instance_id`. See example below:

  ```
  dataplatform-2021-05-15-golive-db
  ```

  If you're creating more than one snapshot to be exported on the same day, you would need to make the snapshot name unique by adding a `snapshot_version` after the date according to the following convention: `dataplatform-YYYY-MM-DD-snapshot_version-rds_instance_id`. For example if this is your second snapshot in the same day, you can name as follows:

  ```
  dataplatform-2021-05-15-v2-golive-db
  ```

- Select `Take snapshot`
- The snapshot should immediately appear in the `Manual snapshots` list under the `Manual` tab
- The snapshot is complete when it has a `Snapshot creation time` (this will take a few minutes to complete)
- Once the snapshot has been created, it will automatically trigger the export process to the Data Platform landing zone bucket. The export process is made up of two steps which in total will take about an hour to complete:
  - First it will export a copy of the database instance in parquet format to an S3 bucket (Amazon Simple Storage Service) in the same service account. You can view the progress of this first export by navigating to the `Exports in Amazon S3` tab (this takes just under an hour to complete). Once complete, you can view the initial snapshot export by clicking on the link in the `S3 bucket` column which will take you to the relevant directory in the `dataplatform-prod-rds-export-storage` S3 bucket where all the initial exports are stored.
  - The second step will copy the data from the `dataplatform-prod-rds-export-storage` S3 bucket to the landing zone S3 bucket in the Data Platform account (see [exporting db snapshots to the landing zone](http://playbook.hackney.gov.uk/Data-Platform-Playbook/docs/exporting-snapshot-to-landing-zone/) for more detail on the ingestion process). Shortly after this, the data will become available in the Data Platform account.
- Verify that your exported data is in the Data Platform landing zone:
  - Switch to the `DataPlatform-Production` account
  - Search for `S3` and select
  - Select `dataplatform-prod-landing-zone` and navigate to the relevant department folder
