---
title: Exporting snapshot to s3
description: "Exporting a snapshot of an rds instance to the DataPlatform landing zone"
layout: playbook_js
tags: playbook
---

This guide explains the process of ingesting data from a RDS instance in the AWS API accounts to the DataPlatform landing zone.

## Add rds instance id to the environment variables

- Ensure you have access to the [Data Platform repository](https://github.com/LBHackney-IT/data-platform/)
- Login to the AWS management console for the account where the rds instance is located (for UPRN this will be `ProductionAPIs`)
  - Currently, the deployment is set up to only deploy to the Staging and Production API accounts. This will be refactored to allow us to release into multiple accounts
- Search for `RDS` and select
- Select `DB Instances` in the `Resources` section
- Copy the `DB identifier` of the database you want to export
- Navigate to [prod.tfvars](https://github.com/LBHackney-IT/Data-Platform/blob/main/config/terraform/prod.tfvars#L12) in the `config/terraform` directory and click the pencil icon to edit the file.
- Paste the `Db Identifier` to the `rds_instance_ids` environment variable. Ensure each instance id is double quoted and comma separated as shown below:

```
rds_instance_ids = ["rds-instance-1", "rds-instance-2"]
```

- Once the rds instance id has been added, navigate to the bottom of the page and add a short descriptive commit message (80 characters max) and an optional description
- Select the radio button labelled `Create a new branch for this commit and start a pull request` and give the new branch an appropriate name (separate words by dashes)
- Select `Commit changes`
- Populate the pull request template and select `Create pull request`
- Your pull request is now ready for review by the Data platform team, and your changes will be applied once they have approved and merged your pull request and a new production release has been made
- You can view the progress of the staging and production release by navigating to the [actions tab](https://github.com/LBHackney-IT/Data-Platform/actions) of the repository

  - To verify that your changes have been released to the production environment, check that there is a workflow with your release.
  - Once the workflow has successfully completed, your changes will have been deployed to production

    - The workflow for the staging deployment will contain the following text under the workflow title:

    ```
    Data-Platform (Staging) #XXX: Commit XXXX pushed by xxxxx
    ```

    - The production release workflow will contain the following text under the workflow title:

    ```
    Data-Platform (Production) #X: Release X.X.X published by xxxxx

    ```

## Create a snapshot of the relevant rds instance

Once your pull request has been approved and released to production, you will need to log in to the relevant AWS account to create a snapshot

- Search for `RDS` and select
- On the sidebar, click on `Snapshots`
- Select `Take snapshot` on the Manual tab
- On `Take a Snapshot` page, use the `DB Instance` drop down and select the rds instance id as your DB instance

  - In the `Snapshot Name` input field, add a name for your snapshot according to the following convention, (rds_instance_id)-dataplatform-YYYY-MM-DD-(optional_descriptor) e.g.:

  ```
  golive-db-dataplatform-15-05-2021
  ```

- click `Take snapshot`
- The snapshot should immediately appear in the `Manual` tab in the `Manual snapshots` list
- The snapshot is complete when it has a `Snapshot creation time`
- Once the snapshot has been created, it will automatically trigger the export process to the Data Platform landing zone bucket
- First it will export a copy of the db instance in parquet format to an S3 bucket in the same service account. Once this is complete, it will be exported from the service account bucket to the landing zone S3 bucket in the Data Platform account (see [snapshot to S3 page](http://playbook.hackney.gov.uk/Data-Platform-Playbook/docs/snapshot-to-s3/) for more detail on the ingestion process)
- You can view the progress of the first export by navigating to `Exports in Amazon S3` tab. This will take about an hour to complete
- Once the export has completed, you can view it by clicking on the link in the `S3 bucket` column which will take you to the relevant directory in `dataplatform-prod-rds-export-storage` bucket where all the initial exports are stored
- Shortly after this, the data will become available in the Data Platform account
- To view this, switch to the `DataPlatform-Production` account
- Search for `S3` and select
- Select `dataplatform-prod-landing-zone` and navigate to the relevant department folder
