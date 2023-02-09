---
id: environments
title: Environments
slug: /environments
---

The platform has the following 3 environments:

## Production​
The production environment is where successfully tested features and data pipelines are made available to end users.
Changes to data pipelines and access to underlying infrastructure is more restricted here than in the other environments; there is a focus on providing stable, reliable data for analysts and other consumers.
This environment should be used by analysts for generating insights. Dashboards and other mature data products intended for live use in a service should connect to data in this environment. 
## Pre-production / Staging​
The pre-production environment is used by both analysts and engineers to develop and test new features and pipelines to ensure they behave as expected when deployed to the production environment. 
The same tools available in the production environment are available here but the focus is on integration and experimentation before a new pipeline or feature is deployed to the production environment. 
90 days of data is back copied from the production environment to facilitate realistic testing of new processes that will be built on the production data. However, because of the experimental and quick changing nature of the code base in this environment this should not be relied on for any use outside of the platform beyond exploratory and experimental phases of work. 
## Development​
The development environment is used primarily by engineers to build, test and iterate on features and changes to the underlying infrastructure before it is deployed to the other two environments for use by the wider data community. 
There is no ‘real’ data in this environment, with a focus on developing the tooling and new features that are not present in the other environments. 
This environment should be treated as volatile, prone to unexpected behaviour and not for use in producing data products.
