---
title: Import XLXS from G Drive
description: "Import XLXS from G Drive description"
layout: playbook_js
tags: playbook
---

## Prerequisites
- You have a Github account, you can [create one][github_signup] yourself using your Hackney email.
- You have been added to the 'LBHackney-IT' team, you can request this from Rashmi Shetty.
- You have a service account email address listed below.

## Preparing the spreadsheet for import

- Open the XLSX spreadsheet you would like to import from Google drive
- Ensure that all columns have headers. Columns without headers will be lost
- Click `Share` in the top right corner of the sheet
- If the document is unnamed, name it
- Paste in the service account email address you have been provided into the email box
- Ensure the suggested email matches the service account email and select it
- On the new window, choose from the dropdown on the right hand side and select `Viewer`
- Uncheck the `Notify people` checkbox
- Click `Share`
- You will be asked to confirm sharing outside the organisation, click `share anyway`
- Your spreadsheet is now available for import

## Getting spreadsheet detail

- You will need to obtain the document key from the url. The document id is the portion of the url between ``https://docs.google.com/file/d/`` and ``/edit#gid=0``. See example below

  ![spreadsheet id](./images/google_spreadsheet_id_example.png)

- You will also need to obtain the worksheet name that you wish to have imported. The worksheet name is located at the bottom left of the screen and unless it has been changed or other worksheets added, it will be called `Sheet1`
- To import multiple worksheets from the same spreadsheet, repeat the instructions in the below section for each worksheet

## Setting up AWS Glue job
- Open the [Data Platform Project](https://github.com/LBHackney-IT/data-platform). If you don't have the correct permissions, you'll get a '404' error (see [prerequisites](#prerequisites)).
- Navigate to the main `terraform` directory, and open `27-xlsx-imports-from-g-drive.tf`
- Switch to 'edit mode' (using edit button on top right)
- Copy one of the modules above, paste at the bottom of the file and update the following fields:
  - `module` = "your-unique-module-name" (it is helpful to keep the same naming convention as your dataset/folder)
  - `google_sheets_document_id` = "Your document id - see the `Getting spreadsheet detail` section above"
  - `glue_job_name` = "Name that will be displayed in the data platform"
  - `department_folder_name` = "Name of the department this data belongs to"
  - `output_folder_name` = "Name of the folder where this data will be exported to"
  - `input_file_name` = "The name of the file you are importing from"
  - `worksheets` = "Each worksheet that needs to be imported should be listed out in a map containing the header row number and the name of your worksheet - see the `Getting spreadsheet detail` section above"

- Committing your changes: The Data Platform team needs to approve any changes to the code, so your change won't happen automatically. To submit your change:
  - Provide a description to explain what you've changed
  - Select the option to create a `new branch` for this commit (i.e. the code you've changed). You can just use the suggested name for your branch.
  - Once you click 'Propose changes' you'll have the opportunity to add even more detail if needed before submitted for review. Once finished adding details, click "Create pull request".
  - You'll receive an email to confirm that your changes have been approved & then merged. After it has been merged into the main code base the job will run at the next scheduled time.

[aws_cron_expressions]: https://docs.aws.amazon.com/AmazonCloudWatch/latest/events/ScheduledEvents.html#CronExpressions
[github_signup]: https://github.com/signup
