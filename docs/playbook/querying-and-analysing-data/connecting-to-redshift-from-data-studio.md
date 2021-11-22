---
title: Connecting to the redshift cluster from Google Data Studio
description: "Connect to the redshift cluster from Google Data Studio"
layout: playbook_js
tags: [playbook]
---

## Intro

This guide will step you through how to connect to redshift, in the data platform, from Google Data Studio. You will then have access to the data stored in the platform from Data Studio.

## Prerequisites

- You have access to your departments credentials listed [here](#department-specific-credentials) or you have had credentials shared with you by the platform team.

## Steps

First, download the following resources

1. [Client Certificate][client_certificate]. This will expire a year after you download it, after which you will have to download a new certificate.
1. [Client Private Key][client_private_key].
1. [Server Certificate][server_certificate].

Then, when adding a data source in [Google Data Studio][google_data_studio]

1.  Select "PostgreSQL".
1.  Under "Database Authentication", ensure "BASIC" is selected then enter the credentials shared with you by the data platform team. See below for links to [department specific credentials](#department-specific-credentials).
1.  Tick the "Enable SSL" box
1.  Upload the three files downloaded in the first step.
1.  Click "Authenticate", then select "CUSTOM QUERY"
1.  In the free text box you need to enter a PostgreSQL query that defines the data that's in this data source. An example could be
    ```sql
    SELECT * FROM liberator_refined_zone.denormalised_pcns where import_date = (
        SELECT max(import_date) from liberator_refined_zone.denormalised_pcns
    ) limit 100000;
    ```
    This query can only return a maximum of 100,000 rows as specified in [Googles Documentation](https://support.google.com/datastudio/answer/7288010?hl=en#zippy=%2Cin-this-article). It might be helpful to test your query in [AWS Athena][aws_athena] first to check there aren't too many rows.
1.  Click "Add", this bit might take a little while. To improve the query performance you may also want to [create a data extract][data extract].

### Department specific credentials

1. Log into the [AWS Console][aws_sso_link] for the DataPlatform-Staging account.

1. Go to the AWS Secrets Manager secret for your department

   - [Parking Credentials][parking_user_secret_staging]
   - [Planning Credentials][planning_user_secret_staging]
   - [Housing Repairs Credentials][housing_repairs_user_secret_staging]

   If you clicking the link above before logging into the DataPlatform-staging account you will be presented with an
   AWS login screen.

1. Scroll down to the "Secret value" section and select "Retrieve secret value".

[client_certificate]: https://dataplatform-stg-ssl-connection-resources.s3.eu-west-2.amazonaws.com/client_certificate.crt
[client_private_key]: https://dataplatform-stg-ssl-connection-resources.s3.eu-west-2.amazonaws.com/client_private_key.key
[server_certificate]: https://s3.amazonaws.com/redshift-downloads/redshift-ca-bundle.crt
[aws_sso_link]: https://hackney.awsapps.com/start/#/
[parking_user_secret_staging]: https://eu-west-2.console.aws.amazon.com/secretsmanager/home?region=eu-west-2#!/secret?name=dataplatform-stg%2Fparking%2Fredshift-cluster-user20211116150110800200000001
[planning_user_secret_staging]: https://eu-west-2.console.aws.amazon.com/secretsmanager/home?region=eu-west-2#!/secret?name=dataplatform-stg%2Fplanning%2Fredshift-cluster-user20211116150112018900000006
[housing_repairs_user_secret_staging]: https://eu-west-2.console.aws.amazon.com/secretsmanager/home?region=eu-west-2#!/secret?name=dataplatform-stg%2Fhousing-repairs%2Fredshift-cluster-user20211116150111083800000002
[google_data_studio]: https://datastudio.google.com/u/0/datasources/create/
[aws_athena]: https://eu-west-2.console.aws.amazon.com/athena/home?region=eu-west-2#query
[data extract]: https://lbhackney-it.github.io/Data-Platform-Playbook/playbook/querying-and-analysing-data/create_a_data_extract_in_GDS/
