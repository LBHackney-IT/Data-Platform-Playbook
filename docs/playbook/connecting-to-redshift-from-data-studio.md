---
title: Connecting to the redshift cluster from Google Data Studio
description: "Connect to the redshift cluster from Google Data Studio"
layout: playbook_js
tags: playbook
---

## Intro

This guide will step you through how to connect to redshift, in the data platform, from Google Data Studio. You will then have access to the data stored in the platform from Data Studio.

## Prerequisites

* You have had credentials shared with you by the platform team.

## Steps

1. Download the following resources
    - [Client Certificate][client_certificate]. This will expire a year after you download it, after which you will have to download a new certificate.
    - [Client Private Key][client_private_key].
    - [Server Certificate][server_certificate].
1. In Google Data Studio
    - When adding a data source, select "PostgreSQL".
    - In "Database Authentication", enter the credentials shared with you by the data platform team. See below for links to [department specific credentials](#department-specific-credentials).
    - Tick the "Enable SSL" box
    - Upload the three files downloaded in the first step.

### Department specific credentials
- [Parking Credentials][parking_user_secret_staging]

 Scroll down to the "Secret value" section and select "Retrieve secret value".

[client_certificate]: https://dataplatform-stg-ssl-connection-resources.s3.eu-west-2.amazonaws.com/client_certificate.crt
[client_private_key]: https://dataplatform-stg-ssl-connection-resources.s3.eu-west-2.amazonaws.com/client_private_key.key
[server_certificate]: https://s3.amazonaws.com/redshift-downloads/redshift-ca-bundle.crt
[parking_user_secret_staging]: https://eu-west-2.console.aws.amazon.com/secretsmanager/home?region=eu-west-2#!/secret?name=dataplatform-stg-parking%2Fredshift-cluster-parking-user
