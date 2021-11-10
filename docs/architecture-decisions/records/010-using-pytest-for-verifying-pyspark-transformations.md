---
id: using-pytest-for-verifying-pyspark-transformations
title: "Using pytest for verifying PySpark transformations"
description: ""
tags: [adr]
number: "10"
date-issued: "2021-08-25"
status: "Accepted"
---

## Context

The Data Platform team has been writing Apache Spark jobs using PySpark to transform data within the platform.

Examples include:
* Address matching
* Address cleaning
* Repairs sheets data cleaning

These jobs lack automated tests, which has meant that debugging these scripts has involved slow feedback loops, running against actual data within the platform.

By introducing testing practices, frameworks and tools we hope to:
* Improve the speed at which PySpark scripts can be developed
* Provide documentation for each script with example data they expect, and what results they output
* Increase the proportion of defects found before they reach staging environment

## Decision

We will:
* Use a Python testing framework, [pytest][pytest]
* Use the same [Docker container][awsglue-dockerhub] we use for the Jypiter Notebook for running the tests, as it replicates the AWS Glue Spark environment locally.
* Integrate that framework into Apache Spark, and provide example test code
* Create documentation and guidance around how to productively test PySpark scripts
* Run the suite of Python tests as part of the deployment pipeline, and prevent failing tests from being deployed to staging

[pytest]: https://docs.pytest.org
[awsglue-dockerhub]: https://hub.docker.com/r/amazon/aws-glue-libs

## Consequences

Building and maintaining PySpark scripts should become easier and faster as a result.

Writing PySpark scripts will require some additional learning, if you haven't used unit testing practices before.
