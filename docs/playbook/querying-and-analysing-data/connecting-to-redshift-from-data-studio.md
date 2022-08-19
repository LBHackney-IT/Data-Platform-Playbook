---
title: Connecting to the Redshift cluster from Google Data Studio
description: "Connect to the Redshift cluster from Google Data Studio"
layout: playbook_js
tags: [playbook]
---

## Intro

This guide will step you through how to connect to Redshift, on the Data Platform, from Google Data Studio. You will then be able to access the data stored on the platform from Data Studio.

## Prerequisites

- You have access to your department's credentials listed [here](#department-specific-credentials) or you have had credentials shared with you by the platform team.

## Steps

First, download the resources you will need to authenticate for the zone which the data you want to access is stored:

| Production                                     | Pre-production                                |
| ---------------------------------------------- | --------------------------------------------- |
| [Client Certificate][client_certificate_prod]* | [Client Certificate][client_certificate_stg]* |
| [Client Private Key][client_private_key_prod]  | [Client Private Key][client_private_key_stg]  |
| [Server Certificate][server_certificate]       | [Server Certificate][server_certificate]      |

*This will expire a year after you download it, after which you will have to download a new certificate.

Then, when adding a data source in [Google Data Studio][google_data_studio]

1.  Select "PostgreSQL".
1.  Under "Database Authentication", ensure "BASIC" is selected then enter the credentials shared with you by the data platform team. See below for links to [department specific credentials](#department-specific-credentials).
1.  Tick the "Enable SSL" box
1.  Upload the three files downloaded in the first step.
1.  Click "Authenticate", then select "CUSTOM QUERY"
1.  To the right of the 'Database authentication' panel, you should see options for TABLES or CUSTOM QUERY; select CUSTOM QUERY and provide a PostgreSQL query for the data you want. An example could be
    ```sql
    SELECT * FROM liberator_refined_zone.denormalised_pcns where import_date = (
        SELECT max(import_date) from liberator_refined_zone.denormalised_pcns
    ) limit 100000;
    ```
    This query can only return a maximum of 100,000 rows as specified in [Googles Documentation](https://support.google.com/datastudio/answer/7288010?hl=en#zippy=%2Cin-this-article). It might be helpful to test your query in [AWS Athena][aws_athena] first to check there aren't too many rows.
1.  Click "Add", this bit might take a little while. To improve the query performance you may also want to [create a data extract][data extract].

### Department specific credentials

1. Log into the [AWS Console][aws_sso_link] for the DataPlatform-Production or DataPlatform-Pre-Production account depending on which you wish to connect to.

1. Go to the AWS Secrets Manager secret for your department
   
| Production                                                            | Pre-production                                                            |
| --------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| [Parking Credentials][parking_user_secret_production]                 | [Parking Credentials][parking_user_secret_pre_production]                 |
| [Planning Credentials][planning_user_secret_production]               | [Planning Credentials][planning_user_secret_pre_production]               |
| [Housing Repairs Credentials][housing_repairs_user_secret_production] | [Housing Repairs Credentials][housing_repairs_user_secret_pre_production] |

   If you click the link above before logging into the relevant Data Platform account you will be presented with an
   AWS login screen.

   If your department is not listed above but exists with the platform, you should be able to find the credentials by searching for 'YOUR DEPARTMENT/redshift' in Secrets Manager. 

3. Scroll down to the "Secret value" section and select "Retrieve secret value".

[client_certificate_stg]: https://dataplatform-stg-ssl-connection-resources.s3.eu-west-2.amazonaws.com/client_certificate.crt

[client_private_key_stg]: https://dataplatform-stg-ssl-connection-resources.s3.eu-west-2.amazonaws.com/client_private_key.key

[client_certificate_prod]: https://dataplatform-prod-ssl-connection-resources.s3.eu-west-2.amazonaws.com/client_certificate.crt

[client_private_key_prod]: https://dataplatform-prod-ssl-connection-resources.s3.eu-west-2.amazonaws.com/client_private_key.key

[server_certificate]: https://s3.amazonaws.com/redshift-downloads/redshift-ca-bundle.crt

[aws_sso_link]: https://hackney.awsapps.com/start/#/

[parking_user_secret_production]: https://eu-west-2.console.aws.amazon.com/secretsmanager/home?region=eu-west-2#!/secret?name=dataplatform-prod%2Fparking%2Fredshift-cluster-user2021112314531694280000002d

[planning_user_secret_production]: https://eu-west-2.console.aws.amazon.com/secretsmanager/home?region=eu-west-2#!/secret?name=dataplatform-prod%2Fplanning%2Fredshift-cluster-user2021112314531441430000002b

[housing_repairs_user_secret_production]: https://eu-west-2.console.aws.amazon.com/secretsmanager/home?region=eu-west-2#!/secret?name=dataplatform-prod%2Fhousing-repairs%2Fredshift-cluster-user20211123145318429300000031

[parking_user_secret_pre_production]: https://eu-west-2.console.aws.amazon.com/secretsmanager/home?region=eu-west-2#!/secret?name=dataplatform-prod%2Fparking%2Fredshift-cluster-user2021112314531694280000002d

[planning_user_secret_pre_production]: https://eu-west-2.console.aws.amazon.com/secretsmanager/secret?name=dataplatform-stg%2Fplanning%2Fredshift-cluster-user20211116150112018900000006

[housing_repairs_user_secret_pre_production]: https://eu-west-2.console.aws.amazon.com/secretsmanager/home?region=eu-west-2#!/secret?name=dataplatform-prod%2Fhousing-repairs%2Fredshift-cluster-user20211123145318429300000031

[google_data_studio]: https://datastudio.google.com/u/0/datasources/create/

[aws_athena]: https://eu-west-2.console.aws.amazon.com/athena/home?region=eu-west-2#query

[data extract]: https://lbhackney-it.github.io/Data-Platform-Playbook/playbook/querying-and-analysing-data/create_a_data_extract_in_GDS/
