---
title: "Partition Strategy"
description: ""
tags: adr
number: "4"
date-issued: "2021-05-19"
status: "Accepted"
---

## Context

When storing data into S3, access performance can be increased by partitioning datasets down into folder tree with the
leaf folders containing subsets of the overall dataset. When products like AWS Athena access the overall dataset, it can
limit it's read processes to a selection of these leaf directories based on the data that needs to be queried.

## Decision

Datasets on the platform will be stored in the following folder structure:

`{department/service}/{dataset-name}/import_year={import-year}/import_month={import-month}/import_day={import-day}/`

- department/service - The top level folder should always be the server/department that owns the data.
- dateset-name - The name of the dataset, this is chosen by the user importing the data but should descriptive.
- import-year/import-month/import-day - The year/month/day the dataset was written to the data platform, or in cases of ingesting
  third-party data, the year/month/day the data was originally generated.

Dataset that require additional partitioning for optimisation should be done so under this structure. E.g. A dataset that
stores PCNs may choose to break the data down further by issue date:

`{department/service}/{dataset-name}/import_year={import-year}/import_month={import-month}/import_day={import-day}/issue_date={pcn-issue-date}`

## Consequences

This structure will allow us to store historic states of data, allowing analysis to reference back to previous versions
of data to see how it was presented on that date.
Conversely, each ETL process will need to take into account that a dataset may have multiple days/months/years of data
with many duplicates is viewed collectively. Therefore, each query should filter down to the specifc day/month/year
required unless viewing data historically.
