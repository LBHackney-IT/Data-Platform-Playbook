---
id: environments
title: Environments
slug: /environments
---

The platform has 3 environments.

## Production

This environment has the most trusted data representations.

This environment should be used by analysts for generating insights.

## Staging

This environment should contain the same data as production.

This environment is used by analysts to create and test AWS Glue jobs.
Once a job has been approved it will be copied over to the production environment.

## Development

This environment does not contain any "real" data.

This environment is used by platform engineers to test changes to the platform before deploying them to the above environments.
