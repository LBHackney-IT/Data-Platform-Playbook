---
title: Importing external CSV files to the Data Platform Landing Zone
description: "Overview of how CSV files from external suppliers are imported to the Data Platform Landing Zone"
layout: playbook_js
tags: [playbook]
---

This section covers the technical overview of how external suppliers can import data into the data platform via .csv files.

The terraform script [33-liberator-iam.tf](https://github.com/LBHackney-IT/Data-Platform/tree/main/terraform/33-liberator-iam.tf) provisions an AWS IAM User and associated policies. The policies will allow the external supplier to see an S3 specified by the policy and to upload a file into that bucket and see the file. In the example script, this bucket is `s3://dataplatform-stg-landing-zone/parking/`  

The login details for the user can be used by the external provider by executing the following steps:

1. The external supplier logs into AWS using the [AWS Command Line Interface](https://aws.amazon.com/cli/)
2. The external supplier uses the `aws s3 cp` command with the source location and the destination as arguments, e.g. `aws s3 cp c:\<SUPPLIER_COMPUTER\<SOURCE_FILE_NAME>.csv s3://dataplatform-stg-landing-zone/parking/`
3. When the document has been uploaded to the Landing Zone the external supplier can disconnect.
4. In the case of the Liberator data, the upload will automatically trigger the process of moving the file from the Landing Zone to the appropriate Raw Zone via Lambda. 