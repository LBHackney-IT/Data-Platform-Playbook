---
id: move-staging-to-pre-production
title: "Move Staging to Pre-Production"
description: ""
tags: [adr]
number: "12"
date-issued: "2021-12-16"
status: "Accepted"
---

## Context

Towards the end of December 2021 a component of our infrastructure the provided connectivity between a production and
staging account was flagged as a potential security breach and raised as an incident.

As part of the process of reviewing the incident we discussed the topic of production data being held in a staging
account which we have previously decided was a requirement of the successful operation of the Data Platform see
[ADR 008](/architecture-decisions/records/production-data-in-staging)

It was confirmed that wider Hackney policy was to not have Production data held within Staging. This is due to the fact
that all staging accounts are interconnected and therefore even though the Data Platform Staging account might be
treated with the same level of security as production, a breach might occur in another account resulting in the
Data Platform account loosing data.

The issue was therefore that we still required Production data to effectively develop ETL processes, but we were
required not to hold production data in Staging where we normally develop ETL processes.

## Decision Drivers

- Data Security
- Consistent Environment Setup
- ETL development requiring Production Data

## Considered Options

- Remove the Production data from the Staging account
  - This would prevent analysis from being able to efficiently develop ETL processes as most are based around data transformation based on the data held within the dataset. By removing or mocking the data the ETL jobs wouldn't have the data variations that they would need to be tested against.

## Decision

We reached the conclusion in conjunction with the Security team and the Cloud Engineering team that the best approach
would be to move the entire Staging account into the Production environment connecting it to the Production Hub account
and continuing to treat the account as a Production account in terms of security. In addition to moving the account we
also renamed the account to Pre-Production in order to reduce confusion with the other Staging accounts.

## Consequences

- Pre-Production will not be able to connect to any of the staging accounts which will potentially make infrastructure testing difficult.
- Pre-Production will need to continue to be treated as a production in terms of security to prevent a loss of data