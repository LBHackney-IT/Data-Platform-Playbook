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

`DateToImport` value determines which file is fetched from the SFTP server. The files are named in `data_warehouse_-YYYY-MM-DD.csv` format, so that can be used to identify the correct file.

Please note that files are uploaded to the server each afternoon and they contain data for previous day, so the files are lacking behind by a day.

### Copying missing data from landing to raw zone in case of a failure

If for any reason there's a gap in dates in the raw zone data due to ingestion failure the raw to landing copy job has to be run manually.

Once the missing data has been ingested to the landing zone please follow these steps:

1. Clear the `dataplatform-{ENVIRONMENT}-raw-zone/parking/ringgo/sftp/` folder by deleting all folders and files in there
2. Open the `Parking copy RingGo SFTP data to raw` job in the Glue console
3. Reset the bookmark for the job
4. Comment out the `latest_data = get_latest_partitions(data_source)` line in the script. Currently on line 27.
5. Uncomment the `# latest_data = data_source` line below (28)
6. Save the job
7. Run the job
8. Revert the changes in steps 4. and 5. and save the job again

Raw zone should now have the data matching the landing zone 

### Failure alerts

The Lambda function is configured to send failure alerts to central `data-platform-lambda-alerts` Google space.
