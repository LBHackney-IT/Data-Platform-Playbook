---
title: "Production to pre-production data sync"
description: "Overview of how data is copied from production to pre-production"
tags: [playbook]
layout: layout
---

This section explains the process used to copy data from the data platform production environment into pre-production

## Architecture

![Production to pre production sync architecture](./images/prod-to-pre-prod-sync-architecture.png)

## Process

1. When the CI/CD pipeline runs in Github a custom Docker image is built and pushed to the Elastic Container Registry in the Data Platform Production environment.
2. One Elastic Container Service for each zone is then created by Terraform in the form of Fargate tasks. These three tasks are configured by Terraform to run on a schedule. At the time of writing this schedule is once a day at 11pm.
3. When a task is triggered by the schedule the custom scripts inside the docker container execute S3 sync commands which move a configurable period of data from the production S3 bucket to the equivalent pre-production S3 bucket
4. The script then deletes any data in the pre-production bucket that is older than the configured period
5. At the time of writing this configurable period is 90 days
