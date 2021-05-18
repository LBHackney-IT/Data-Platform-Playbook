---
title: Exporting snapshot to s3
description: "Exporting a snpashot of an rds instance to the DataPlatform landing zone"
layout: playbook_js
tags: playbook
---

# Add rds instance id to the environamnet variables

- Ensure you have access to the [Data Platform repository](https://github.com/LBHackney-IT/data-platform/)
- [Clone the the repository](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository)
- Login to the AWS management console for the account where the rds instance is (for UPRN this will be `ProductionAPIs`)
- Search for `RDS` and select
- Select `DB Instances` in the Resources section
- Copy the DB identifier of the database you want to export
- You will now need to add this rds instance id environment variable to the as an environment variable in the Data PLatform repositry. To do this, Naviagte to `prod.tfvars` in the `config/terraform` directory. Add the name of the rds instance id to the `rds_instance_ids`. Ensure each instance id is comma seperated as shown below:

```
rds_instance_ids = ["rds-instance-1", "rds-instance-2"]
```

# Release a new version of the data platform

- Once you have added the rds instance id as an enviroenment variable, you are ready to release a new version of the data platform. To do this [Create a pull request](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request)
- Ask the Data platform team to review the pull request

# Create a snapshot of the relevant rds instance

Once your pull request has been approved and released to production, you want to log in to the relevant AWS account to create a snapshot

- Search for `RDS` and select
- On the sidebar, click on `Snapshots`
- Select `Take snapshot` on the Manual tab
- On `Take a Snapshot` page, select the rds instance id as your DB instance, pick an appropriate name for your snapshot and click `Take snapshot`
- The creation of the snapshot will automatically trigger the export to the Data Platform landing zone bucket
  - You can view all the exports to S3 in the `Exports in Amazon S3` tab
- This process will take about half an hour to complete
