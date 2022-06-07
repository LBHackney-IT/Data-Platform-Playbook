---
id: ingest-sql-flat-files
title: "Ingest SQL flat files - ADR 006"
description: ""
tags: [adr]
number: "6"
date-issued: "2021-05-26"
status: "Accepted"
---

## Context

Hackney has at least one data source which is provided to it in `mysqldump`
format. This flat file is generated on a daily basis, and we've identified
a need for this data to also be imported into the platform on a daily basis.

We hope this the design proposed will be extendable for further SQL flat files
that the platform may need to support.

## Decision

1. Leverage the existing platforms ability to ingesting RDS snapshots
2. Use ECS as the execution environment.
3. Have a reusable RDS instance running which will be the target for importing
   and exporting.

### Process

A CloudWatch event will be configured to run an ECS Task when a flat file is
uploaded to an S3 Bucket, this ECS task will responsible for downloading the
SQL file from S3, creating a temporary database on the reusable RDS instance and
running an import to that the temp database based on the SQL file name.

Once the import has completed the ECS task will trigger an RDS snapshot. Once
the snapshot creation has completed the ECS task will drop the temp database
that is created, while the snapshot ingestion process starts processing the
new snapshot.

### Discounted options during a spike

During testing we found that the file provided as a test took longer than
the 15 minute AWS Lambda execution limit, so decided we needed to use ECS
instead.

We explored having a MySQL instance inside of a container in ECS. This would
have given us more flexibility to a wider range of databases, but we found
difficulty in exporting the data out of the MySQL into parquet file format.

## Consequences

With this design, it would not be possible to easily import historic exports as
the snapshot ingestion process automatically partitions the database on year / month / day
of snapshot creation.
