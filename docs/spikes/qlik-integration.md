---
title: "Qlik Integration"
description: ""
tags:
layout: layout
---

# Spike: Qlik Integration

### SUB-TITLE

## Objective

Ensure a performant connection between the data platform and Hackney Business Insights tools. This spike will consider the
following:

- Apache Drill
- Amazon Redshift Spectrum
- Amazon Athena
- Qlik Custom Connectors

## Considerations

While investigating these options the following factors should be taken into account:

- Time to implement the solution
- Cost of the solution
- Performance of reading large quantities of data

## Findings

### Apache Drill:

Apache Drill is a Schema-free SQL Query Engine for Hadoop, NoSQL and Cloud Storage providers such as Amazon S3. The
software is provided for free, however there would be associated costs with deploying the product with the Data Platform.

#### Limitation

Apache Drill is not currently provided as a managed service by AWS, which means the product would need to be installed
and maintained by Hackney. We are unaware of anyone within Hackney with knowledge of Apache Drill knowledge and this
could prove to be an issue in the longer term.

#### Suggestion

We could install and configure the service in conjunction with Hackney staff to ensure knowledge share through this
would not resolve longer term support issues.

### Amazon Redshift Spectrum:

Amazon Redshift is a Data Warehousing that provides an SQL style interface for querying data.
In addition to being able to warehouse data Amazon Redshift Spectrum is able to query data directly from external
storage such as Amazon S3 without the additional cost of storing the data within the warehouse itself. Essentially
separating the compute-layer from the storage-layer.
Amazon Redshift is provided as an AWS managed and supported service, with the ability to upscale and downscale as
Hackney requirements change in addition to being paused and unpaused on a scheduled basis.

#### Limitation

The biggest limitation with Amazon Redshift is that it can get expensive to run large clusters. Running a single node
continuously is $120 per month and with our lack of visibility of the quantities of data that is being queried.

#### Suggestion

We can reduce the overall cost of running the infrastructure by scheduling period where the nodes are paused such as
evening and weekend.

### Qlik Custom Connectors:

Qlik provides the option of building a custom connector which can allow the system to interact with a dataset. This in
theory could be used to allow Qlik to interact with AWS S3 directly.

#### Limitation

Building a Qlik Custom Connector would require unspecified amount of development time and would likely require further investigation
into the specifics of how this would be implemented.

#### Suggestion

## Helpful Resources/Documentation

- [Apache Drill - Website](https://drill.apache.org/)
- [Redshift - Overview](https://aws.amazon.com/redshift/)

- [Qlik Custom Connectors - Documentation](https://help.qlik.com/en-US/sense-developer/February2021/Subsystems/QVXSDKAPI/Content/Sense_QVXSDKAPI/Introducing-QVX.htm)
