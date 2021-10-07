---
title: Onboarding new users to the platform
description: "How to add users to a Google group or add a new group for a department."
layout: playbook_js
tags: [playbook]
---


## Prerequisites

- You need to be a manager of the relevant Google group
- The user you would like to add to the Google group has a Hackney GSuite account

### Adding a user to a department

- To add a user to a Google group, follow the instructions [here][add_user_google_group]
- If you would like the user to receive AWS email notifications, then ensure you set their subscription preference to "Each email" (see [section 5.2][membership_settings] of this guide)
- This can take up to two hours to sync with AWS

[add_user_google_group]: https://support.google.com/groups/answer/2465464?hl=en

### Creating a department on the Data Platform

- Create a Google group, with the name `saml-aws-data-platform-collaborator-${department_name}` as a template
  - You can do this by contacting the Hackney Service team via the [`ask-devops` Slack channel][ask_devops_slack]
  - Ensure you specify at least one manager for the group you are creating. This person is responsible for adding/removing
    users to your department
  - Enable the collaborative inbox feature on your Google group by following step 2 in this [guide][collaborative_inbox].
  This will allow your group and its members to receive emails from outside the Hackney organisation as you will need to be able to receive AWS email notifications
- Wait for 2 hours for the next AWS sync before moving onto the next step
- Create a new department using the [existing resources][department.tf] as a template
  - Specify `google_group_display_name` with the email address of the Google group you created earlier
  - Specify a unique name for the department, with a maximum of 16 characters

[department.tf]: https://github.com/LBHackney-IT/Data-Platform/blob/main/terraform/05-departments.tf
[ask_devops_slack]: https://hackit-lbh.slack.com/archives/C01FX9ERRSL
[collaborative_inbox]: https://support.google.com/a/users/answer/10375787?hl=en#:~:text=Step%202%3A%20Turn%20on%20Collaborative%20Inbox%20features
[membership_settings]: https://support.google.com/a/users/answer/9303224?hl=en#:~:text=marked%20as%20favorites.-,5.2%20View%20and%20edit%20membership%20settings,-Your%C2%A0subscription%20settings
