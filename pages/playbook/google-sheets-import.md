---
title: Google Sheets import
description: "Google Sheets import description"
layout: playbook_js
---

## Preparing Google sheet for import

- Open the Google sheet you would like to import
- Ensure that all columns have headers. Columns without headers will be lost
- Click `Share` in the top right corner of the sheet
- If the document is unnamed, name it
- Paste in the service account email address you have been provided into the email box
- Ensure the suggested email matches the service account email and select it
- On the new window, choose from the dropdown on the right hand side and select `Viewer`
- Uncheck the `Notify people` checkbox
- Click `Share`
- You will be asked to confirm sharing outside the organisation, click `share anyway`
- Your Google sheet is now available for import

## Getting Google sheet detail

- You will need to obtain the document key from the url
- The document id is the portion of the url between ``https://docs.google.com/spreadsheets/d/`` and ``/edit#gid=0``. See example below<br />
  ![image](../../assets/images/google-sheet-and-tab-id-1.png)

- You will also need to obtain the worksheet name that you wish to have imported
- The worksheet name is located at the bottom left of the screen and unless it has been changed or other worksheets added, it will be called `Sheet1`. See example below
  (screenshot)
- If you would like multiple sheets imported, provide each worksheet name

## Setting up AWS Glue job
- Before setting up an AWS Glue job, ensure that the relevant department configuration for that account is set up in AWS
  - see `Adding a department` section in `managing-departments.md`
- Open the [Data Platform Project](https://github.com/LBHackney-IT/data-platform)
- Navigate to the main `terraform` directory (data-platform/terraform)
- Open the `22-aws-glue-jobs` terraform file
- Copy one of the modules above and paste at the bottom of the file
- Update the following fields:
  - glue_job_name = "Your AWS Glue job name"
  - google_sheets_document_id = "Your document id - see the `Getting Google sheet detail` section above"
  - google_sheets_worksheet_name = "The name of your worksheet - see the `Getting Google sheet detail` section above"
  - department_folder_name = "The name of the department folder you would like to store in e.g. `housing`, `social-care`"
  - output_folder_name = "The name of the folder you would like to store in under the department e.g. `housing-repair`"
- Optional: update the time schedule for the import job to run
  - By default, the import job will run every weekday at 11pm which is set using Cron time format
  - To create a new Cron time use a [Cron Expression Generator](https://www.freeformatter.com/cron-expression-generator-quartz.html)
  - To override and set a new time schedule, add a new row to the respective module with the new Cron time: e.g. `google_sheet_import_schedule = "cron(0 23 ? * 1-5 *)"`
  - You can set up a glue job without a schedule by setting `enable_glue_trigger` to be false in the respective module, otherwise this defaults to true. E.g. `enable_glue_trigger = false`. Note you cannot make a change to the cron schedule at the same time as setting `enable_glue_trigger` to false
