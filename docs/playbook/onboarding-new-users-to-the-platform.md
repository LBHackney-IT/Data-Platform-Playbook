---
title: Onboarding new users to the platform
description: "How to add users to a Google group or add a new group for a department."
layout: playbook_js
tags: playbook
---


## Prerequisites

- You need to be a manager of the relevant Google group
- The user you would like to add to the Google group has a Hackney GSuite account

### Adding a user to a department

- To add a user to a Google group, follow the instructions [here][add_user_google_group]
- This can take up to two hours to sync with AWS

[add_user_google_group]: https://support.google.com/groups/answer/2465464?hl=en

### Creating a department on the Data Platform

- Create a Google Group, with the name `saml-aws-data-platform-collaborator-${department_name}` as a template
  - You can do this by contacting the Hackney Service team via the [`ask-devops` Slack channel][ask_devops_slack]
  - Ensure you specify at least one manager for the group you are creating. This person is responsible for adding/removing
    users to your department
- Wait for 2 hours for the next AWS sync before moving onto the next step
- Create a new department using the [existing resources][department.tf] as a template
  - Specify `google_group_display_name` with the email address of the Google Group you created earlier
  - Specify a unique name for the department, with a maximum of 16 characters

[department.tf]: https://github.com/LBHackney-IT/Data-Platform/blob/main/terraform/05-departments.tf
[ask_devops_slack]: https://hackit-lbh.slack.com/archives/C01FX9ERRSL
