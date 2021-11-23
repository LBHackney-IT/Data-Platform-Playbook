---
title: Using GitHub
description: "A guide on how to carry out common tasks in GitHub"
layout: playbook_js
tags: [playbook]
---

## Objective of this article

To provide general guidance and assist you in performing common tasks in GitHub.

## What is GitHub used for?

GitHub is a repository which stores the code for the data platform's infrastructure and processes (including the code for this playbook). It enables us to track and test any changes in the code before they reach the platform. Many of the processes within this playbook require you to make changes to code in GitHub in order to see them in the data platform, for example [ingesting data from Google Sheets](https://playbook.hackney.gov.uk/Data-Platform-Playbook/playbook/ingesting-data/google-sheets-import) or [creating Glue jobs to transform your data](https://playbook.hackney.gov.uk/Data-Platform-Playbook/playbook/transforming-data/using-aws-glue/deploy-glue-jobs).

## Getting access to GitHub

You'll need to [create a GitHub account](https://github.com/signup) if you don't already have one, using your Hackney email. You'll also need to [set up 2 factor authentication](https://docs.github.com/en/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication) in your GitHub account.

Once you've done this, you'll need to ask Rashmi Shetty (Development Manager) to add you to the 'LBHackney-IT' team. This will enable you to contribute to the Data Platform projects in the team account.

There are two ways to use GitHub:

1. Using the GitHub web browser interface (simply at [github.com](https://github.com/)). This is the easiest to use and enables you to make simple changes through a user interface.
2. Using the [GitHub app](https://desktop.github.com/). This is a more advanced tool which requires more configuration and coding.

## Making changes in GitHub

The process for making changes in GitHub will depend on what you're trying to do. Please refer to other sections of the playbook.

### Committing your changes to the Data Platform Project

- Navigate to the `Commit new file` or `Commit changes` section at the bottom of the page.
- Provide a short sentence in the first field and then an optional description in the field below to explain what you've changed.
- Select the option to create a `new branch` for this commit (i.e. the code you've changed).
  You can just use the suggested name for your branch.
- Once you click `Commit new file` or `Commit changes` you'll have the opportunity to add even more detail if needed before submitting it for review.
  - Click `Create Pull Request` when finished.
- The Data Platform team will then review your Pull Request, and you'll receive an email to confirm when your changes have been approved or if any comments have been added to your Pull Request by the team.
- After your pull request has been approved and merged, you will be able to view the progress of the staging deployment.
  Once completed, the Data Platform team will then create a production release which will deploy your changes to production.
  You can view the progress of these steps by navigating to the `Data-Platform (Staging)` and `Data-Platform (Production)` workflows in the [actions tab][actions-tab] of the repository.

  - The workflow for the staging deployment will contain the following text under the workflow title:

  ```
  Data-Platform (Staging) #xxx: Commit xxxx pushed by xxxxx
  ```

  - The production release workflow will contain the following text under the workflow title:

  ```
  Data-Platform (Production) #x: Release x.x.x published by xxxxx
  ```

[prerequisites]: ./index.md
[github_signup]: https://github.com/signup
[actions-tab]: https://github.com/LBHackney-IT/Data-Platform/actions
