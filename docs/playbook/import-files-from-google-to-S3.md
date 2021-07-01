---
title: Import files from google to s3
description: "Import files from google to s3 description"
layout: playbook_js
tags: playbook
---

## Preparing to import the file from Google drive

- Open the file you would like to import
- Ensure that all columns have headers. Columns without headers will be lost
- Click `Share` in the top right corner of the sheet
- If the document is unnamed, name it
- Paste in the service account email address you have been provided into the email box
- Ensure the suggested email matches the service account email and select it
- On the new window, choose from the dropdown on the right hand side and select `Viewer`
- Uncheck the `Notify people` checkbox
- Click `Share`
- You will be asked to confirm sharing outside the organisation, click `share anyway`
- Your file is now available for import

## Getting file detail

- You will need to obtain the document key from the url
- The document id is the portion of the url between ``https://docs.google.com/file/d/`` and ``/edit#gid=0``. See example below

  ![file id](./images/google_spreadsheet_id_example.png)

## Setting up the copier lambda
- Before setting up an AWS Glue job, ensure that the relevant department configuration for that account is set up in AWS
  - see `Adding a department` section in `managing-departments.md`
- Open the [Data Platform Project](https://github.com/LBHackney-IT/data-platform). You'll need to have a Github account (which you can create yourself using your Hackney email) and have been added to the 'LBHackney-IT' team to view this project (you'll need to request this from Rashmi Shetty). If you don't have the correct permissions, you'll get a '404' error.
- Navigate to the main `terraform` directory (data-platform/terraform)
- Open the `65-g-drive-to-s3` terraform file
- Copy one of the modules above and paste at the bottom of the file
- Switch to 'edit mode' (using edit button on top right) and update the following fields:

  - `module` = "your-unique-module-name" (it is helpful to keep the same naming convention as your dataset/folder)
  - `lambda_name` = "Your lambda name" (this is what you'll see in the Glue console, can be the same as your module name)
  - `file_id` = "Your document id - see the `Getting file detail` section above"
  - `file_name` = "The name of the file you are importing including the file extension and using underscores instead of spaces"
  - `service_area` = "The name of the service area folder you would like to store in e.g. `housing`, `social-care`" (if this folder doesn't already exist in S3 you can name it here and this script will create it)


- Committing your changes: The Data Platform team needs to approve any changes to the code, so your change won't happen automatically. To submit your change:
  - Provide a description to explain what you've changed
  - Select the option to create a `new branch` for this commit (i.e. the code you've changed). You can just use the suggested name for your branch.
  - Once you click 'Propose changes' you'll have the opportunity to add even more detail if needed before submitted for review.
  - You'll receive an email to confirm that your changes have been approved.
