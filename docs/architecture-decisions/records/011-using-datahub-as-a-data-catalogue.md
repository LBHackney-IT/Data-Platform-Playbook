---
id: using-datahub-as-a-data-catalogue
title: "Using DataHub as a Data Catalogue"
description: ""
tags: [adr]
number: "11"
date-issued: "2021-10-07"
status: "Accepted"
---

## Context

We need users to be able to browse and search the datasets within the platform so that they can find what they need, and we can break down data siloes. There are various different ways to implement this.

## Decision Drivers

* Ease of set up and maintenance
* Features and user experience
* Ability to ingest metadata from the data lake
* Cost

## Considered Options

* Bespoke, in-house solution
* Open source solutions (DataHub, Amundsen, Metacat, Marquez)
* Paid-for solutions (Atlan, Qlik, Google Cloud Catalog)

## Decision

We have decided to use an DataHub, an open source tool, as our data catalogue tool because:

* We have been able to successfully set it up in our AWS environment without much difficulty [please add here]
* It has the basic features we require to catalogue datasets (e.g. a range of metadata available which users can add to, search and browse functionality) as well as additional functionality that may enable us to catalogue data pipelines, dashboards, models etc in future.
* Users responded positively to it in user research.
* It is capable of ingesting metadata from Hive/AWS Glue and thus our data lake.
* It is open-source and therefore cost is limited.
* It has an active community where we have an opportunity to influence its future development. 

## Consequences

The team will need to dedicate resource to its maintenance and any further development we wish to influence.







