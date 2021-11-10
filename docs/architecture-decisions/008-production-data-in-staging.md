---
title: "production-data-in-staging"
description: ""
tags: [adr]
number: "8"
date-issued: "2021-06-25"
status: "Accepted"
---

## Context

The Data Platform is currently broken up into three separate accounts, Development, Staging, and Production.

Production has been designed to run reporting, repeating ETL process and provide a stable environment for staff to run Qlik
or other BI tools against.

Development has been designed for engineers to independently test out new features, functionality or
infrastructure relating to the platform.

Staging, a term normally used to refer to a mirror, clone or close approximation of the Production environment which is
normally used to test out changes intended on being placed in Production.

Analysts/Engineers require a place to build, modify and test new or existing ETL process in an environment that will not
have an impact on the Production environment.

The data that the Analysts/Engineers will need to use in order to develop these process will need to have the same
schema structure and underlying data structure as the production data. Generating such data as "dummy data" would be
complex and time-consuming based on the quantity and quality of the data being consumed by Hackney.

## Decision

Analysts/Engineers will use the Staging environment to build, modify and test new or existing ETL process.

The Staging environment will contain copies of Production data.

## Consequences

The Staging environment will need to be secure as if it were a production system, restricting the data that
Analysts/Engineers have access to.

Analysts/Engineers may find the Staging environment restrictive when developing new processes as they may not have
access to data they would like to have access to but do not have permission to access.

The process of placing production data into a Staging environment is not common and may confuse new engineers brought
onto project.
