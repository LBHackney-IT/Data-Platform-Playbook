---
title: Google Sheets import
description: "Google Sheets import description"
layout: playbook_js
---

# Preparing Google sheet for import

- Open the Google sheet you would like to import
- Click `Share` in the top right corner of the sheet
- If the document is unnamed, name it
- Paste in the service account email address you have been provided into the email box
- Ensure the suggested email matches the service account email and select it
- On the new window, choose from the dropdown on the right hand side and select `Viewer`
- Uncheck the `Notify people` checkbox
- Click `Share`
- You will be asked to confirm sharing outside the organisation, click `share anyway`
- Your Google sheet is now available for import

# Getting Google sheet detail

- You will need to obtain the document key from the url
- The document key is the portion of the url between `https://docs.google.com/spreadsheets/d/` and `/edit#gid=0`. See example below
  (screenshot) https://docs.google.com/spreadsheets/d/`1VPmt9njf0Xk1sHf8nZxw2_Ti2IspAD_SJPnkuzm0oeo`/edit#gid=0

- You will also need to obtain the worksheet name that you wish to have imported
- The worksheet name is located at the bottom left of the screen and unless it has been changed or other worksheets added, it will be called `Sheet1`. See example below
  (screenshot)
- If you would like multiple sheets imported, provide each worksheet name

# Setting up AWS Glue job

-
