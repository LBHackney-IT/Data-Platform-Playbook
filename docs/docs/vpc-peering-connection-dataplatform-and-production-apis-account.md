---
title: VPC Peering Connection between Data Platform and Production APIs AWS accounts
description: "Overview of how the VPC Peering Connection and its purpose"
layout: playbook_js
tags: playbook
---
![VPC Peering Connection](./images/vpc-peering-connection.png)

The VPC Peering connection is set up between the Data Platform Staging account VPC and the Production APIs account VPC. This will allow traffic to flow to and from these AWS accounts.

This enables Data and Insights Analysts to fulfil their analysis and reporting duties on housing and parking data with the Qlik Sense Business Intelligence tool as this data lives in the Data Platform account and the Qlik Sense instance lives in the Production APIs account.