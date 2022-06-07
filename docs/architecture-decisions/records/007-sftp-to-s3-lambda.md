---
id: sftp-to-s3-lambda
title: "Copy Liberator data from sftp to s3 - ADR 007"
description: "Retrieve daily zip file from SFTP server and upload to S3 (landing zone bucket)"
tags: [adr]
number: "007"
date-issued: "2021-05-28"
status: "Accepted"
---

## Context

An SQL dump of the liberator database is put in a SFTP server as a zip file by a supplier. This data is important to the parking team so we need to ingest it into the platform. In order to do this we first need to move the data from the SFTP server into the landing zone S3 bucket.

There was also the option to pay for the supplier to directly drop the file into S3.

## Decision

We will use a lambda function to achieve this. The function will run at 06:00 UTC, triggered by a cloudwatch event, finding the file date stamped for that day then streaming it into the given S3 bucket.

It finds the file by searching for a filename pattern, if there is more than one file that matches then it will get all of them.

The connection details for the SFTP server are stored in ssm parameter store.

## Consequences

This lambda function is not currenlty reusable as we need to search for the correct file in the server before retrieving it, which is not generic. Further work could be done to seperate this out, if required.
