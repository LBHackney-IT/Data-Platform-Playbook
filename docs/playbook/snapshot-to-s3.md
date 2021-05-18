---
title: Exporting snapshot to s3
description: "Exporting a snpashot of an rds instance to the DataPlatform landing zone"
layout: playbook_js
tags: playbook
---

## Add rds instance id to the environmnet variables

- Ensure you have access to the [Data Platform repository](https://github.com/LBHackney-IT/data-platform/)
- Login to the AWS management console for the account where the rds instance is located (for UPRN this will be `ProductionAPIs`)
  - Currently, the deployment is set up to only deploy to the Staging and Production API accounts. This will be refactored to allow us to release into multiple accounts
- Search for `RDS` and select
- Select `DB Instances` in the Resources section
- Copy the `DB identifier` of the database you want to export
- You will now need to add this as an RDS instance id environment variable in the Data Platform repository. 
  - To do this, Navigate to [`prod.tfvars`](https://github.com/LBHackney-IT/Data-Platform/blob/main/config/terraform/prod.tfvars#L12) in the `config/terraform` directory and click the pencil icon to edit the file. 
  - Add the name of the rds instance id to the `rds_instance_ids`. Ensure each instance id is comma separated as shown below:
```
rds_instance_ids = ["rds-instance-1", "rds-instance-2"]
```
  - Once the rds instance id has been added, navigate to the bottom of the page and add a commit message and an optional description
  - Select the radio button labelled `Create a new branch for this commit and start a pull request.` and then give the new branch a name
  - Select `Propose changes`

## Release a new version of the data platform

- After completing the last step in the section above, a new page `Open a pull request` will be displayed
- Populate the pull request template and select `Create pull request`
- Your pull request is now ready for review by the Data platform team, and your changes will be applied once they have approved and merged your pull request

## Create a snapshot of the relevant rds instance

Once your pull request has been approved and released to production, you will need to log in to the relevant AWS account to create a snapshot

- Search for `RDS` and select
- On the sidebar, click on `Snapshots`
- Select `Take snapshot` on the Manual tab
- On `Take a Snapshot` page, select the rds instance id as your DB instance, pick an appropriate name for your snapshot and click `Take snapshot`
- The creation of the snapshot will automatically trigger the export to the Data Platform landing zone bucket. 
  - You can view all the exports to S3 in the `Exports in Amazon S3` tab. Initially, this will be exported to an RDS export storage S3 bucket in the same account and then a subsequent Lambda will copy it over to the Data Platform landing zone S3 bucket
- This process will take about half an hour to complete
