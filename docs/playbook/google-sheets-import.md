---
title: Google Sheets import
description: "Google Sheets import description"
layout: playbook_js
tags: playbook
---

## Prerequisites
- You have a Github account, you can [create one][github_signup] yourself using your Hackney email.
- You have been added to the 'LBHackney-IT' team, you can request this from Rashmi Shetty.
- You have a service account email address listed below.

### Department Specific Information
<table>
  <thead>
    <tr>
      <th>Department</th>
      <th>Service account email</th>
      <th>Sheets credentials name</th>
      <th>Glue role arn</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Parking</td>
      <td>parking@dataplatform-stg.iam.gserviceaccount.com</td>
      <td>module.department_parking.google_service_account.credentials_secret.name</td>
      <td>aws_iam_role.parking_glue.arn</td>
    </tr>
    <tr>
      <td>Housing repairs</td>
      <td>housing-repairs@dataplatform-stg.iam.gserviceaccount.com</td>
      <td>aws_secretsmanager_secret.sheets_credentials_housing.name</td>
      <td>aws_iam_role.glue_role.arn</td>
    </tr>
  </tbody>
</table>

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

- You will need to obtain the document key from the url. The document id is the portion of the url between ``https://docs.google.com/spreadsheets/d/`` and ``/edit#gid=0``. See example below

  ![Google sheet id](./images/google_spreadsheet_id_example.png)

- You will also need to obtain the worksheet name that you wish to have imported. The worksheet name is located at the bottom left of the screen and unless it has been changed or other worksheets added, it will be called `Sheet1`
- To import multiple worksheets from the same Google sheet, repeat the instructions in the below section for each worksheet

## Setting up AWS Glue job
- Open the [Data Platform Project](https://github.com/LBHackney-IT/data-platform). If you don't have the correct permissions, you'll get a '404' error (see [prerequisites](#prerequisites)).
- Navigate to the main `terraform` directory, and open `26-google-sheets-imports.tf`
- Switch to 'edit mode' (using edit button on top right)
- Copy one of the modules above, paste at the bottom of the file and update the following fields:
  - `module` = "your-unique-module-name" (it is helpful to keep the same naming convention as your dataset/folder)
  - `glue_role_arn` = Find the value for your department in [the table above](#department-specific-information)
  - `glue_catalog_database_name` = module.department_\<department-name\>.raw_zone_catalog_database_name (e.g. module.department_parking.raw_zone_catalog_database_name)
  - `sheets_credentials_name` = Find the value for your department in [the table above](#department-specific-information)
  - `google_sheets_document_id` = "Your document id - see the `Getting Google sheet detail` section above"
  - `google_sheets_worksheet_name` = "The name of your worksheet - see the `Getting Google sheet detail` section above"
  - `department_name` = "The name of the department folder you would like to store in e.g. `housing`, `social-care`"
  - `dataset_name` = "The name of the dataset as you'd like it to appear within the data platform e.g. `housing-repair`"


- _Optional: stop your google sheet from importing automatically_
  - The import job will run every weekday at 11pm if 'enable_glue_trigger' is not specified (i.e. there's no line for this in your module) or it's set to 'true'. If this is set to 'false' then your job will not run automatically on a schedule, and will have to be run manually within AWS.
  See the section [Running the import manually](#running-the-import-manually) for instructions on how to do this.

- _Optional: update the time schedule for the google sheets import_
  - If a value for `google_sheet_import_schedule` is not provided, the import will run at 11pm on weekdays.
  - To override and set a new time schedule, add a new row to the respective module with the new Cron time: e.g. `google_sheet_import_schedule = "cron(0 23 ? * 1-5 *)"`
  - To create a new Cron expression follow the guidance provided by the [AWS Cron Expression documentation][aws_cron_expressions].

- Committing your changes: The Data Platform team needs to approve any changes to the code, so your change won't happen automatically. To submit your change:
  - Provide a description to explain what you've changed
  - Select the option to create a `new branch` for this commit (i.e. the code you've changed). You can just use the suggested name for your branch.
  - Once you click 'Propose changes' you'll have the opportunity to add even more detail if needed before submitted for review. Once finished adding details, click "Create pull request".
  - You'll receive an email to confirm that your changes have been approved & then merged. After it has been merged into the main code base the job will run at the next scheduled time.

### Running the import manually

Once you have been notified that your pull request has been merged, you can run the import manually from the AWS console or wait until the scheduled time (if you set one).

You can do this by navigating to [AWS glue workflows][aws_glue_workflow], selecting the workflow named `<department_name>-<dataset_name>`, clicking the "Actions" dropdown and then "Run".

[aws_cron_expressions]: https://docs.aws.amazon.com/AmazonCloudWatch/latest/events/ScheduledEvents.html#CronExpressions
[github_signup]: https://github.com/signup
[aws_glue_workflow]: https://eu-west-2.console.aws.amazon.com/glue/home?region=eu-west-2#etl:tab=workflows