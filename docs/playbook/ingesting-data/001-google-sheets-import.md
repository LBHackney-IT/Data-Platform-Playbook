---
title: Ingesting data from Google Sheets
layout: playbook_js
tags: [playbook]
---

## Objective

Ingest data contained within a Google Sheet for use on the Data Platform, optionally setting a recurring schedule to ingest new data.

## Intended audience

- Data Analyst

## Prerequisites

- You have a Github account - you can [create one][github_signup] yourself using your Hackney email
- You have been added to the 'LBHackney-IT' team - you can request this from Rashmi Shetty
- You have a service account email address, such as one listed in the table below:

### Department specific information

<table>
  <thead>
    <tr>
      <th>Department</th>
      <th>Pre-Production Service account email</th>
      <th>Production Service account email</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>parking</td>
      <td>parking@dataplatform-stg.iam.gserviceaccount.com</td>
      <td>parking@dataplatform-prod0.iam.gserviceaccount.com</td>
    </tr>
    <tr>
      <td>housing_repairs</td>
      <td>housing-repairs@dataplatform-stg.iam.gserviceaccount.com</td>
      <td>housing-repairs@dataplatform-prod0.iam.gserviceaccount.com</td>
    </tr>
    <tr>
      <td>data_and_insight</td>
      <td>data-and-insight@dataplatform-stg.iam.gserviceaccount.com</td>
      <td>data-and-insight@dataplatform-prod0.iam.gserviceaccount.com</td>
    </tr>
    <tr>
      <td>finance</td>
      <td>finance@dataplatform-stg.iam.gserviceaccount.com</td>
      <td>finance@dataplatform-prod0.iam.gserviceaccount.com</td>
    </tr>
    <tr>
      <td>env_enforcement</td>
      <td>env-enforcement@dataplatform-stg.iam.gserviceaccount.com</td>
      <td>env-enforcement@dataplatform-prod0.iam.gserviceaccount.com</td>
    </tr>
    <tr>
      <td>planning</td>
      <td>planning@dataplatform-stg.iam.gserviceaccount.com</td>
      <td>planning@dataplatform-prod0.iam.gserviceaccount.com</td>
    </tr>
    <tr>
      <td>unrestricted</td>
      <td>unrestricted@dataplatform-stg.iam.gserviceaccount.com</td>
      <td>unrestricted@dataplatform-prod0.iam.gserviceaccount.com</td>
    </tr>
    <tr>
      <td>sandbox</td>
      <td>sandbox@dataplatform-stg.iam.gserviceaccount.com</td>
      <td>sandbox@dataplatform-prod0.iam.gserviceaccount.com</td>
    </tr>
    <tr>
      <td>benefits_and_housing_needs</td>
      <td>benefits-housing-needs@dataplatform-stg.iam.gserviceaccount.com</td>
      <td>benefits-housing-needs@dataplatform-prod0.iam.gserviceaccount.com</td>
    </tr>
    <tr>
      <td>revenues</td>
      <td>revenues@dataplatform-stg.iam.gserviceaccount.com</td>
      <td>revenues@dataplatform-prod0.iam.gserviceaccount.com</td>
    </tr>
    <tr>
      <td>environmental_services</td>
      <td>environmental-services@dataplatform-stg.iam.gserviceaccount.com</td>
      <td>environmental-services@dataplatform-prod0.iam.gserviceaccount.com</td>
    </tr>
  </tbody>
</table>

## Preparing a Google sheet for ingestion

1. Open the Google sheet you would like to ingest
2. Ensure that all columns have headers. Columns without headers will be lost
3. Click `Share` in the top right corner of the sheet
4. If the document is unnamed, name it
5. Paste in the service account email address you have been provided into the email box
6. Ensure the suggested email matches the service account email and select it
7. On the new window, choose from the dropdown on the right hand side and select `Viewer`
8. Uncheck the `Notify people` checkbox
9. Click `Share`
10. You will be asked to confirm sharing outside the organisation, click `share anyway`
11. Your Google sheet is now ready to ingest

## Getting Google sheet detail

- You will need to obtain the document key from the url. The document id is the portion of the url between `https://docs.google.com/spreadsheets/d/` and `/edit#gid=0`. See example below

  ![Google sheet id](../images/google_spreadsheet_id_example.png)

- You will also need to obtain the worksheet name that you wish to ingest. The worksheet name is located at the bottom left of the screen and unless it has been changed or other worksheets added, it will be called `Sheet1`
- To ingest multiple worksheets from the same Google sheet, repeat the instructions in the below section for each worksheet

## Setting up the AWS Glue job

This is what will handle the ingestion of the data from Google Sheets to the Data Platform.

1. Open the [Data Platform Project](https://github.com/LBHackney-IT/data-platform). If you don't have the correct permissions, you'll get a '404' error (see [prerequisites](#prerequisites)).
2. Navigate to the main `terraform` directory, and open `26-google-sheets-imports.tf`
3. Switch to 'edit mode' (using edit button on top right)
4. Copy one of the modules above, paste at the bottom of the file and update the following fields:

   - `module` - in the format `your_unique_module_name`, and unique to all other `module` names in this file (it is helpful to keep the same naming convention as your dataset/folder)
   - `glue_catalog_database_name` - Using `module.department_DEPARTMENT-NAME.raw_zone_catalog_database_name` (e.g. `module.department_parking.raw_zone_catalog_database_name`)
   - `sheets_credentials_name` - Find the value for your department in [the table above](#department-specific-information). If this is blank for your department then you don't need to include this at all.
   - `google_sheets_document_id` - Your Google Sheets document ID - see the `Getting Google sheet detail` section above
   - `google_sheets_worksheet_name` - The name of the worksheet within your Google Sheet document - see the `Getting Google sheet detail` section above
   - `department` - `module.department_DEPARTMENT-NAME` (department name should appear as in [the table above](#department-specific-information), e.g. `module.department_housing_repairs`)
   - `dataset_name` - The name of the dataset as you'd like it to appear within the data platform e.g. `housing-repair`

   - **Optional: stop your Google Sheet from ingesting automatically** - The ingest job will run every weekday at 11pm if `enable_glue_trigger` is not specified (i.e. there's no line for this in your module) or it's set to `true`. If this is set to `false` then your job will not run automatically on a schedule, and will have to be run manually within AWS. See the section [Running the ingestion manually](#running-the-ingestion-manually) for instructions on how to do this.

   - **Optional: update the time schedule for the Google Sheet ingestion** - If a value for `google_sheet_import_schedule` is not provided, the ingestion will run at 11pm on weekdays.
     - To override and set a new time schedule, add a new row to the respective module with the new cron time: e.g. `google_sheet_import_schedule = "cron(0 23 ? * 1-5 *)"`
     - To create a new Cron expression follow the guidance provided by the [AWS Cron Expression documentation][aws_cron_expressions].

5. Submit your changes, by referring to the [Committing changes][committing-changes] section of the **Using Github** guide.
   - The Data Platform team needs to approve any changes to the code that you make, so your change won't happen automatically.
     Once your changes have been approved, the job will run at the next scheduled time.

### Running the ingestion manually

Once you have been notified that your pull request has been merged, you can run the ingestion manually from the AWS console or wait until the scheduled time (if you set one).

You can do this by navigating to [AWS glue workflows][aws_glue_workflow], selecting the workflow named `<department_name>-<dataset_name>`, clicking the "Actions" dropdown and then "Run".

[aws_cron_expressions]: https://docs.aws.amazon.com/AmazonCloudWatch/latest/events/ScheduledEvents.html#CronExpressions
[github_signup]: https://github.com/signup
[aws_glue_workflow]: https://eu-west-2.console.aws.amazon.com/glue/home?region=eu-west-2#etl:tab=workflows
[committing-changes]: ../getting-set-up/using-github#committing-your-changes-to-the-data-platform-project
