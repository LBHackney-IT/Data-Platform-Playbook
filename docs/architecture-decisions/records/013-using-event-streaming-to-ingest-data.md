---
id: using-event-streaming-to-ingest-data
title: "Using Event Streaming to Ingest Data - ADR 013"
description: ""
tags: [adr]
number: "13"
date-issued: "2022-01-01"
status: "Accepted"
---

## Context

The Data Platform team are interested in ingesting data from a variate of Hackney APIs. We will need to access this data
without connecting directly to the production databases see [ADR 012](/architecture-decisions/records/012-do-not-connect-to-production-databases)

We have therefore explored different options for transferring the data into the Data Platform.

## Decision Drivers

- Security
- Service Data Store Ownership
- Time to Insight
- Data Consistency

## Considered Options

- Access data via read-only replicas
- Scrape the APIs to get the state of each object
- Stream data change events from the system

## Decision

Most of the Hackney APIs are capable of event streaming. This is one of the best ways for us to bring data into the
Data Platform as it places control over the data into the hands of the service team and the process is entirely push
based. Rather than an extraction process where the data platform is required to pull the data from the service leaving
the process under the control of the Data Platform team and forming a dependency between both systems.

## Consequences

- We will need to decide on the best method of providing initial state to the Data Platform as Event Streaming only covers new changes
- The process is classified as "Eventually Consistent" as it doesn't garentee the state at a specific point, only that the data will eventually become consistent at the point that all events have been received and processed.