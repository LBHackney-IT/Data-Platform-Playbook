---
title: Using the GitHub UI
description: "A guide on how to carry out common tasks in the GitHub UI"
layout: playbook_js
tags: [playbook]
---

## Objective

Assist you in performing common tasks in the GitHub UI.

:::important
This guide assumes you have the correct permissions to access the Data Platform project in GitHub.
If you are unsure, refer to the [prerequisites][prerequisites] section here.
:::

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
