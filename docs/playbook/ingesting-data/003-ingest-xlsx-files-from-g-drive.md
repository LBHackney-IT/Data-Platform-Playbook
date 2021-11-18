---
title: Ingest XLXS files from G Drive
description: "Ingest XLXS files from G Drive description"
layout: playbook_js
tags: [playbook]
---

## Prerequisites

- You have a Github account, you can [create one][github_signup] yourself using your Hackney email.
- You have been added to the 'LBHackney-IT' team, you can request this from Rashmi Shetty.
- You have a Data Platform service account email address for your relevant domain or service area. A service account would look something like this: dataplatform-stg-service_area@dataplatform-stg.iam.gserviceaccount.com. If you don't know which service account you should use, you can request this from the Data Platform team.

## Preparing the spreadsheet for ingestion

- Ensure that all columns in your file have headers. Columns without headers will be lost.
- If your XLSX file is stored on your local device, [upload it to google drive](https://www.howtogeek.com/398570/how-to-import-an-excel-document-into-google-sheets/).
- If the document is unnamed, name it
- You now need to share this file with the service account you've been provided. One way to do this is to open the XLSX spreadsheet you would like to ingest from Google drive and view it as if it were a Google Sheet. Once you've opened the document, click `Share` in the top right corner of the sheet. If your XLSX file is very large and you're having trouble opening the file in Sheets, you can right-click the file listed in Drive and click `Share`.
- Paste in the service account email address you have been provided into the email box
- Ensure the suggested email matches the service account email and select it
- On the new window, choose from the dropdown on the right hand side and select `Viewer`
- Uncheck the `Notify people` checkbox
- Click `Share`
- You will be asked to confirm sharing outside the organisation, click `share anyway` (Note that these service accounts are Hackney accounts, but aren't recognised by Google the same way that individual user accounts are recognised as being within Hackney.)
- Your spreadsheet is now ready to ingest

## Getting spreadsheet detail

- You will need to obtain the document key from the url. The document id is the portion of the url between `https://docs.google.com/file/d/` and `/edit#gid=0`. See example below

  ![spreadsheet id](../images/google_spreadsheet_id_example.png)

- You will also need to obtain the worksheet name(s) that you wish to ingest. The worksheet name is located at the bottom left of the screen and unless it has been changed or other worksheets added, it will be called `Sheet1`

## Setting up AWS Glue job

- Open the [Data Platform Project](https://github.com/LBHackney-IT/data-platform) repository in Github. If you don't have the correct permissions, you'll get a '404' error (see [prerequisites](#prerequisites)).
- Navigate to the main `terraform` directory, and open `27-xlsx-imports-from-g-drive.tf`
- Switch to 'edit mode' (using edit button on top right)
- Copy one of the modules above, paste at the bottom of the file and update the following fields:

  - `module` = "your-unique-module-name" (it is helpful to keep the same naming convention as your dataset/folder)
  - `google_sheets_document_id` = "Your document id - see the `Getting spreadsheet detail` section above"
  - `glue_job_name` = "Name that will be displayed in the data platform"
  - `department_folder_name` = "Name of the department this data belongs to"
  - `output_folder_name` = "Name of the folder where this data will be exported to"
  - `input_file_name` = "The name of the file you are ingesting from"
  - `worksheets` = Each worksheet that needs to be ingested should be listed out in a map containing the header row number and the name of your worksheet - see the `Getting spreadsheet detail` section above. The worksheet name needs to match exactly (including any spaces or punctuation, but excluding any slashes `/`), so you may want to copy and paste the name directly from your worksheet. If you need to add more sheets, you can copy and paste this section and continue numbering (e.g. sheet3, sheet4 etc). Remove any worksheet sections you don't need.

- Submit your changes by referring to the [Committing changes][committing-changes] section of the **Using Github** guide.
  - The Data Platform team needs to approve any changes to the code, so your change won't happen automatically.

[aws_cron_expressions]: https://docs.aws.amazon.com/AmazonCloudWatch/latest/events/ScheduledEvents.html#CronExpressions
[github_signup]: https://github.com/signup
[committing-changes]: ../getting-set-up/using-github#committing-your-changes-to-the-data-platform-project
