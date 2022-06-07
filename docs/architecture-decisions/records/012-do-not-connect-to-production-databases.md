---
id: do-not-connect-to-production-databases
title: "Using Event Streaming to Ingest Data - ADR 012"
description: ""
tags: [adr]
number: "12"
date-issued: "2022-??-??"
status: "Proposed"
---

## Context

The Data Platform will be responsible for ingesting data from a variety of systems and data sources. In many situations
these data sources maybe indirectly or directly linked to production systems. This means any disruption to these systems
could affect Hackney residents using those services.

## Decision Drivers

- Protection of Publicly accessible services

## Considered Options

- In some contexts we already have direct connections to production systems via Qlik our BI Tool
- How will we access the data if we are unable to connect directly to the services database
- What the impact of directly connecting to production database might be
- How would be responsible for the access to these databases.

## Decision

We have reached the conclusion that we should not be connecting to production databases to extract data. The major
reason for this is that connecting to a production database will increase the overall load that the database is under
which could cause the related service to fail which would affect residents of Hackney negatively.

## Consequences

- Getting access to data is considerably harder unless the service implements event streaming as we have a limited set of options for ingesting data without a connection to the production system.