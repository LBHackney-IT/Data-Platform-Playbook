---
id: initial-extract-of-tenure-data
title: "Initial Extract of Tenure Data"
description: ""
tags: [adr]
number: "14"
date-issued: "2022-02-??"
status: "Accepted"
---

## Context

The Data Platform team are interested in ingesting data from the Tenure API and a variety of other Hackney APIs. To this
end we have decided to use event streaming to access the data.

With event streaming, new entities, changes and deletions emit events that can be consumed by the Data Platform to track
the state of that system. However, this only works if we have an initial state to apply those changes to. We therefore
need a method of ingesting the current state of the system.

## Decision Drivers

- Providing consistent data to analysts
- Not impacting production services
- Volume of work that the engineering team currently has

## Considered Options

- Enhance the current event streaming process to emit a series of current state events which can then be consumed by the Data Platform to build the state
- Provide a one off export of the state from the service and then consume this into the Data Platform
- Extract the data directly from the services' data storage.

## Decision

The best long term solution is to enhance the event streaming process to emit a series of current state events for the
Data Platform to consume. This will allow the service to re-sync it's overall state at any time, without the intervention
of the Data Platform team, in the event that there is an inconsistency.

However, due to the development time required to implement this system we have opted to do a one time DynamoDb ingestion
to bring in the initial state of the services until the development is complete.

Our initial test candidate will be the Tenure API and therefore we will be performing in the ingestion twice. Once to test
the ingestion process works as expected and a subsequent ingestion to set the state of the service.

## Consequences

### Short Term
- The Data Platform will need direct access to the APIs data storage in order to perform the ingestion
- The process is not designed to be maintainable and should not be repeated multiple times
- Any data inconsistencies will be difficult to resolve.

### Long Term
- All APIs will need to be designed to emit current state events when required.
- Large amounts of data will be pushed through the event streaming infrastructure