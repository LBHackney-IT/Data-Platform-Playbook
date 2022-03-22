---
title: Connecting to the Data Platform from Tableau
description: "How to connect to the Data Platform from Tableau Online using Redshift or Athena"
layout: playbook_js
tags: [playbook]
---

## Introduction

Hackney has a limited subscription to Tableau Desktop and Tableau Online. This is another BI tool that analysts in the council can use to analyse and present data.

## Limitations

- IAM Credentials for the Athena Connection will expire every 90 days.
- Athena Connector in Tableau Online is not currently set up.
- - Tableau Desktop does not connect directly with the Data Platform as it is downloaded to an individual device. The workaround for this is to create a data extract in Tableau Online as a Tableau Data Source (Hyper) and connect to that.

## Prerequisites

- The required data is available in Redshift.
- A Tableau Online account with a creator licence.
- You have access to your departments credentials listed [here](#department-specific-credentials) or you have had credentials shared with you by the platform team.


## Connect to your data in Redshift using Tableau Online


- Navigate to the Data Tab of your Tableau Workbook or Flow, and select ‘Connect to Data’. (If you are creating a new Workbook or Flow from scratch, you will be taken there first)
- Select ‘Connectors’ and then ‘Amazon Redshift’
- You will be given the option of filling in the connection fields using values retrieved from Secrets Manager:
  - Server: use the Host Name or IP Value (e.g. 18.168.126.173)
  - Port: 5440 (5439 for Staging)
  - Database: data_platform
  - Username: Use the username field (e.g. planning)
  - Password: Copy from the password field (this will be a random alphanumeric string)
  - Require SSL - Keep this box ticked
- Once these fields are filled in, click the sign-in box to make the connection

## Connecting to Data with Tableau Desktop

Current security configurations do not allow live connections to the platform from individual devices. 

If you prefer to develop dashboards locally using Tableau Desktop and require data from the platform, we recommend making the connection using Tableau Online and storing this as a Hyper Extract.

- Create the connection to Redshift as above
- On the Data Source page, change the Connection from ‘Live’ to ‘Extract’ and then select ‘Create Extract’. 
- From the Data Menu, select the Data Source you’ve just created and ‘Save As Published Data Source’. Check the ‘Embed Credentials’ box and save to a relevant folder within Tableau Online.
- (Optional) navigate to the location of your newly published data source and create a refresh schedule task.


Open Tableau Desktop on your local Machine

- Use the Tableau Server option in the ‘Connect to Data’ Screen
- Login and Authenticate with your Tableau Online credentials
- Browse for your published Data Source and Connect.


## TODO Athena Connector in Tableau Online

- Navigate to the Data Tab of your Tableau Workbook or Flow, and select ‘Connect to Data’. (If you are creating a new Workbook or Flow from scratch, you will be taken there first)
- Select ‘Connectors’ and then ‘Amazon Athena’
- You will then be asked to provide connection details:
  - Server: athena.eu-west-2.amazonaws.com
  - Port: 443
  - S3 Staging Directory: 
  - Access Key ID:
  - Secret Access Key ID:




[redshift]: https://lbhackney-it.github.io/Data-Platform-Playbook/playbook/connecting-to-redshift-from-data-studio/
