---
id: roles
title: Roles
slug: /roles
layout: playbook_js
tags: [playbook]
---
There are currently four tiers of role within the data platform project, and they are as follows:

## Super Administrators
_Relates to: saml-aws-data-platform-super-admins_

Super administrators have full permissions to all accounts and are normally project heads and key people.

| Account        | Has Access | Role                   |
|----------------|------------|------------------------|
| Development    | Yes        | AWSAdministratorAccess |
| Pre-Production | Yes        | AWSAdministratorAccess |
| Production     | Yes        | AWSAdministratorAccess |

## Administrator
_Relates to: saml-aws-data-platform-admins_

Administrators are granted broad permissions across all the Data Platform accounts including access to the Development account where infrastructure changes are tested by the development team. Admins are normally the heads of the Data Platform project and the engineering team responsible for its maintenance.

| Account        | Has Access | Role                   |
|----------------|------------|------------------------|
| Development    | Yes        | AWSAdministratorAccess |
| Pre-Production | Yes        | AWSPowerUserAccess     |
| Production     | Yes        | AWSPowerUserAccess     |

## Power User
_Relates to: saml-aws-data-platform-power-user_

Power Users have a greater control over the Pre-Production account but are still restricted from Development and Production

| Account        | Has Access | Role               |
|----------------|------------|--------------------|
| Development    | No         | N/A                |
| Pre-Production | Yes        | AWSPowerUserAccess |
| Production     | No         | N/A                |

## Collaborator
_Relates to: saml-aws-data-platform-collaborator-*_

Collaborators have limited access to both Pre-Production and Production allowing them to develop there ETL process and view the working jobs in Production.

| Account        | Has Access | Role   |
|----------------|------------|--------|
| Development    | No         | N/A    |
| Pre-Production | Yes        | Custom |
| Production     | Yes        | Custom |