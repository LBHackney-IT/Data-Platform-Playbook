---
title: RingGo data ingestion
description: "Description of the ingestion process for RingGo data"
layout: playbook_js
tags: [playbook]
---

This section describes how the RingGo dataset gets ingested into the data platform

### 1. CSV file is downloaded from the RingGo SFTP server

The company who owns the dataset (RingGo) uploads a csv file containing previous day's data into their SFTP server. The file drop happens every afternoon.

Lambda function called `sftp-to-s3` runs on a schedule in the evening and copies the csv file to `dataplatform-prod-landing-zone/ringgo/sftp/input/` folder in the landing zone.  

On successful download the lambda function starts the `parking-copy-ringgo-sftp-data-to-raw-job-trigger` trigger which kicks off the ETL workflow.

### Running the Lambda manually

In case of a failure in the ingestion process the Lambda can be run manually from the console. 

To run the Lambda manually the following test body can be used in the Lambda console:

```
{
  "DateToImport": "YYYY-MM-DD"
}
```

`DateToImport` value determines which file is fetched from the SFTP server. The files are named in `data_warehouse_-YYYY-MM-DD.csv` format, so that can be used to identify the correct files.

Please note that files are uploaded to the server each afternoon and they contain data for previous day, so the files are lacking behind by a day.

### Failure alerts

The Lambda function is configured to send failure alerts to central `data-platform-lambda-alerts` Google space.
