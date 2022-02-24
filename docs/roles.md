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

Super administrators 

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

| Account        | Has Access | Role               |
|----------------|------------|--------------------|
| Development    | No         | N/A                |
| Pre-Production | Yes        | AWSPowerUserAccess |
| Production     | No         | N/A                |

## Collaborator

| Account        | Has Access | Role   |
|----------------|------------|--------|
| Development    | No         | N/A    |
| Pre-Production | Yes        | Custom |
| Production     | Yes        | Custom |