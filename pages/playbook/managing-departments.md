---
title: Managing Departments
description: "Managing departments for the Data Platform"
layout: playbook_js
tags: playbook
---

# Adding a department
- Open `04-account-configuration.tf` and copy an existing department configuration and paste it below
- Update the department name to be the name of your department
- Update the following fields:
    - account_to_share_data_with = "Your department AWS account id"
    - iam_role_name = "region/admin access role" e.g "eu-west-1/AWSReservedSSO_AWSAdministratorAccess_1f8b3e702dfcf5a9"           
    - s3_read_write_directory = "The department name you specified above"
    - s3_read_directories = "A list of directories your department needs read access to. 
      By default, this will include your department directory" 
- This would need approval before being saved