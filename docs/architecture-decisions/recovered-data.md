---
title: "Recovered Data"
description: ""
tags: [adr]
number: "5"
date-issued: "2021-05-20"
status: "Accepted"
---

## Context

Hackney have recovered a number of datasets from prior to the Cybersecurity incident, these datasets will need to be
merged with datasets created after the incident.

## Decision

Recovered datasets that are in a consumable format (json, csv, .sql) will be deposited into the landing zone directly,
using the same partition storage strategy as other data sets [see ADR 0004](partition-strategy.md)

## Consequences

Anyone needing to deposit recovered data onto the Data Platform would need access to the Data Platform.
