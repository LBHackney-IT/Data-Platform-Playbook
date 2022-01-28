---
title: Exporting database snapshots to the Data Platform Landing Zone
description: "Overview of how db snapshots are exported to the Data Platform Landing Zone"
layout: playbook_js
tags: [playbook]
---

This section covers the technical overview of uploading data into the Data Platform from a db instance in AWS. For step by step instructions on how to do this, refer to [Ingesting RDS snapshot into the Data Platform Landing Zone](../playbook/ingesting-data/004-ingesting-rds-snapshot-in-landing-zone.md) guide.

The terraform module [`db_snapshot_to_s3`](https://github.com/LBHackney-IT/Data-Platform/tree/main/modules/db-snapshot-to-s3) will provision the following resources:
![exporting-snapshot-to-landing-zone](https://user-images.githubusercontent.com/8051117/118656536-83ffbf80-b7e2-11eb-8adf-7075e72c2d42.png)

After the deployment these resources will export the data from any instance listed in this [environment variable](https://github.com/LBHackney-IT/Data-Platform/blob/main/config/terraform/prod.tfvars#L13) by executing the following steps:

1. [An RDS event subscription](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Events.html) is provisioned, which attaches to the defined instance and pushes events to an [SNS topic](https://docs.aws.amazon.com/sns/latest/dg/sns-create-topic.html)
2. When a snapshot of the defined instance is created a message is sent to an SQS queue
3. The sent SQS message invokes the export lambda by passing it the RDS instance id
4. The export lambda retrieves the last snapshot created for the received instance id and starts an [RDS snapshot export task](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ExportSnapshot.html)
5. Once the export task is started the lambda queues an SQS message with the export task identifier and the RDS export storage bucket name
6. The queued message invoked the copier lambda
7. The copier lambda checks the state of the export task and once the export is completed, it transfers the exported data into an S3 bucket in the data platform account
