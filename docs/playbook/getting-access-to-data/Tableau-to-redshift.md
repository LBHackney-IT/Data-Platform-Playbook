---
title: Connecting to the Data Platform from Tableau
description: "How to connect to the Data Platform from Tableau Online using Redshift or Athena"
layout: playbook_js
tags: [playbook]
---

## Introduction

Tableau is another BI Tool which is used in the Council. Mostly by Public Health.

**Who is this for?**

This is for users of Tableau who to connect to Datasets within the Data Platform for Analysis, specifically through Redshift.

**Limitations**

- Tableau Desktop does not connect directly with the Data Platform as it is downloaded to an individual device. 
  - The workaround for this is to create a data extract in Tableau Online as a Tableau Data Source (Hyper) and connect to that.
## Prerequisites

- The required data is available in Redshift.
- A Tableau Online account with a creator licence.
- You have access to your departments credentials consisting of
  - Server Address: which comes as a Host Name or IP Port
  - Port: A 4 digit number
  - Database Name
  - Username
  - Password

**Retrieving your Credentials**
1. Login to your AWS Account [here](https://hackney.awsapps.com/start#/) and make sure you are on the correct account
2. Click `Management Console`
3. Using the search bar, search for `Secrets Manager` and go to the `Secrets Manager`
4. In the Secrets Manager, you should be able to see a list of `secret name` and `description`. 
   In the search bar, search for `redshift` and select your department.
5. Scroll down and look for a section called `Secret Value`. On the right, click `[Retrieve Secret Value]`
   
**What should you do if you cannot see your relevant department**

Contact somebody from the Data Platform to set up credentials to be used in Redshift for your department.
You can contact the Data Platform at `data.platform@hackney.gov.uk`

These are the credentials you will need to connect to Redshift in Tableau or any other BI Tool.


## Connect to your data in Redshift using Tableau Online


1. Navigate to the Data Tab of your `Tableau Workbook` or `Flow`, and select `Connect to Data` or `New Data Source`. 
   - If you are creating a new Workbook or Flow from scratch, you will be taken there first
2. Select `Connectors` and then `Amazon Redshift`
3. You will be given the option of filling in the connection fields using values retrieved from the Secrets Manager:
   - Server: use the Host Name or IP Value (e.g. 18.168.126.173)
   - Port: 5440 (5439 for Staging)
   - Database: data_platform
   - Username: Use the username field (e.g. planning)
   - Password: Copy from the password field (this will be a random alphanumeric string)
   - Require SSL - Keep this box ticked
4. Once these fields are filled in, click the sign-in box to make the connection

## Connecting to Data with Tableau Desktop

Current security configurations do not allow live connections to the platform from individual devices. 

If you prefer to develop dashboards locally using Tableau Desktop and require data from the platform, we recommend making the connection using Tableau Online and storing this as a Hyper Extract.

1. Create the connection to Redshift as above
2. On the Data Source page, change the Connection from `Live` to `Extract` and then select `Create Extract`. 
3. From the `Data` menu (top left), select the Data Source you’ve just created and `Save As Published Data Source`. Check the `Embed Credentials` box and save to a relevant folder within Tableau Online.
4. (Optional) navigate to the location of your newly published data source and create a refresh schedule task.

Open Tableau Desktop on your local Machine.

1. Use the `Tableau Server` option in the `Connect to Data` Screen
2. Login and Authenticate with your Tableau Online credentials
3. Browse for your published Data Source and Connect.
