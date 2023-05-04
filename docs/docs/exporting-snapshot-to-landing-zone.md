---
title: Exporting database snapshots to the Data Platform Landing Zone
description: "Overview of how db snapshots are exported to the Data Platform Landing Zone"
layout: playbook_js
tags: [playbook]
---

This section covers the technical overview of uploading data into the Data Platform from a db instance in AWS. For step by step instructions on how to do this, refer to [Ingesting RDS snapshot into the Data Platform Landing Zone](../playbook/ingesting-data/005-ingesting-rds-snapshot-in-landing-zone.md) guide.

The terraform module [`db_snapshot_to_s3`](https://github.com/LBHackney-IT/Data-Platform/tree/main/modules/db-snapshot-to-s3) will provision the following resources:
![exporting-snapshot-to-landing-zone](https://user-images.githubusercontent.com/8051117/118656536-83ffbf80-b7e2-11eb-8adf-7075e72c2d42.png)

After the deployment these resources will export the data from any instance listed in this [environment variable](https://github.com/LBHackney-IT/Data-Platform/blob/main/terraform/config/prod.tfvars#L13) by executing the following steps:

1. [An RDS event subscription](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Events.html) is provisioned, which attaches to the defined instance and pushes events to an [SNS topic](https://docs.aws.amazon.com/sns/latest/dg/sns-create-topic.html)
2. When a snapshot of the defined instance is created a message is sent to an SQS queue
3. The sent SQS message invokes the export lambda by passing it the RDS instance id
4. The export lambda retrieves the last snapshot created for the received instance id and starts an [RDS snapshot export task](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ExportSnapshot.html)
5. Once the export task is started the lambda queues an SQS message with the export task identifier and the RDS export storage bucket name
6. The queued message invoked the copier lambda
7. The copier lambda checks the state of the export task and once the export is completed, it transfers the exported data into an S3 bucket in the data platform account

### Developer notes

There are development modules for testing this setup between sandbox and Data Platform development account. They'll deploy all necessary resources for complete test setup.

The modules can be found in `core/29-db-snapshot-to-s3-sandbox.tf` file.

To deploy the resources please follow these steps (instructions also in the terraform file itself):

1. Deploy the `db_snapshot_to_s3_sandbox_resources` module. This will deploy the database and bastion bost resources to sandbox account
2. Copy the deployed sandbox database's name to `rds_instance_ids` array variable in the `env.tfvars` file
3. Deploy the `lambda_artefact_storage_for_sandbox_account` module. This will deploy the bucket for Lambda resources
4. Deploy the `db_snapshot_to_s3_sandbox` module. This is the current module for the RDS snapshot to cross account S3 feature used in production and will deploy all resources required for end to end setup
5. Update the raw zone bucket on Data Platform devevelopment account in your workspace with the following bucket and bucket key policy statements. Use these as inputs for `bucket_policy_statements` and `bucket_key_policy_statements` in the raw zone bucket module

Bucket policy statement:

```
sandbox_s3_to_s3_copier_write_access_to_raw_zone_statement = {
    sid = "AllowSandboxS3toS3CopierWriteAccessToRawZoneUnrestrictedLocation"
    effect = "Allow"
    
    actions = [
    "s3:ListBucket",
    "s3:PutObject",
    "s3:PutObjectAcl"
    ]
    principals = {
    type = "AWS"
    identifiers = [
        "arn:aws:iam::${var.aws_sandbox_account_id}:root",
        "arn:aws:iam::${var.aws_sandbox_account_id}:role/${local.identifier_prefix}-s3-to-s3-copier-lambda"
    ]
    }

    resources = [
    "${module.raw_zone.bucket_arn}",
    "${module.raw_zone.bucket_arn}/unrestricted/${replace(lower(local.identifier_prefix), "/[^a-zA-Z0-9]+/", "_")}sandbox/*" 
    ]
}

```

Bucket key policy statement:

```
sandbox_s3_to_s3_copier_raw_zone_key_statement = {
    sid = "SandboxS3ToS3CopierAccessToRawZoneKey"
    effect = "Allow"
    actions = [
    "kms:Encrypt",
    "kms:GenerateDataKey*"
    ]

    principals = {
    type = "AWS"
    identifiers = [
        "arn:aws:iam::${var.aws_sandbox_account_id}:root"
        "arn:aws:iam::${var.aws_sandbox_account_id}:role/${local.identifier_prefix}-s3-to-s3-copier-lambda"
    ]
}
```

6. Uncomment the statement in the sandbox database key policy to allow the RDS snapshot to S3 lambda role access to the key. This must be done after all other resources have been deployed.

7. Connect to the database from the sandbox bastion host using AWS Session Manager and import some dummy data for testing 

You can import some test data by following these steps:
```
  sudo yum update -y
  sudo amazon-linux-extras enable postgresql14
  sudo yum install postgresql-server -y
  psql --host=<YOUR_DATABASE_HOST> --port=5432 --username=sandbox_db_admin --password --dbname=<YOUR_DATABASE_NAME>
 
 Enter the generated database password from the Secrets Manager 
 
 You can use the following resources for quick test data setup
 
 schema: https://github.com/LBHackney-IT/social-care-case-viewer-api/blob/master/database/schema.sql
 seeds: https://github.com/LBHackney-IT/social-care-case-viewer-api/blob/master/database/seeds.sql

 Simply copy and paste the files' content to the PSQL CLI terminal
 ```

8. Test the setup by taking a manual snapshot of the sandbox database. Once the process is complete you should have data in your Data Platform devevelopment raw zone in the unrestricted area. The data will be in a folder matching the sandbox database name

Once you have completed testing you can destroy the resources by completing the steps in reverse order from step 6.
