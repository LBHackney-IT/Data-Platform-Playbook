---
title: Onboarding new departments to the platform
description: "How to add a new Google group for a department."
layout: playbook_js
tags: [playbook]
---

## Objective

Before a department is able to use the data platform, its details must be configured and setup beforehand by a Data Platform Engineer.

## Intended audience

- Data Platform Engineer

## Adding a department onto the platform

1. Create a Google group, with the name:

   ```
   saml-aws-data-platform-collaborator-<department-name>
   ```

   _Note: ensure that your `department-name` is all lowercase with words separated by hyphens._

   For example, the Housing Repairs Google group name would be:

   ```
   saml-aws-data-platform-collaborator-housing-repairs
   ```

   - You can do this by submitting a request to [ICT support](https://support.hackney.gov.uk) requesting a Google group.
   - Ensure you specify at least one manager for the group you are creating. This person is responsible for adding/removing
     users to your department
   - Enable the collaborative inbox feature on your Google group by following step 2 in this [guide][collaborative_inbox].
     This will allow your group and its members to receive emails from outside the Hackney organisation as you will need to be able to receive AWS email notifications
2. Add the service account email, one can find this [here][google-groups-service-accounts] with the department name in [the table in the Google sheets ingestion guide][google-sheets-ingestion].
3. Raise a ticket with dev ops by emailing cloudsupport@hackney.gov.uk asking them to add the group to the SSO import lambda’s google groups. This will allow members of the google group so sign into AWS via [Hackney's SSO](https://hackney.awsapps.com/start/#/).
4. Wait for 2 hours for the next AWS sync before moving onto the next step
5. Create a new department using the [existing resources][department.tf] as a template
   - Specify `google_group_display_name` with the email address of the Google group you created earlier
   - Specify a unique name for the department, with a maximum of 16 characters
6. Submit a pull request on GitHub, and await approval from two other Data Platform Engineer's.
7. Before merging, which will automatically apply the Terraform changes, it is intended that a Data Platform Engineer would first check that the pipeline and all required actions are clear.
8. Once Terraform has applied, an email address will be output, which can be retrieved from either the GitHub Actions output, or from within the GSuite admin portal. This email address can be shared with the department that you are onboarding, which they can then use to ingest data into the platform.

[department.tf]: https://github.com/LBHackney-IT/Data-Platform/blob/main/terraform/05-departments.tf
[ask_devops_slack]: https://hackit-lbh.slack.com/archives/C01FX9ERRSL
[collaborative_inbox]: https://support.google.com/a/users/answer/10375787?hl=en#:~:text=Step%202%3A%20Turn%20on%20Collaborative%20Inbox%20features
[google-groups-service-accounts]: https://console.cloud.google.com/projectselector2/iam-admin/serviceaccounts?supportedpurview=project
[google-sheets-ingestion]: ../ingesting-data/001-google-sheets-import.md#department-specific-information
