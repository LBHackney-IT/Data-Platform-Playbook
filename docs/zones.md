---
id: zones
title: Zones
slug: /zones
---

The Platform has 4 data zones, as data is moved from the landing or raw zones to the trusted zone it will become:

- more valuable to the council
- smaller in volume

## Landing Zone

### Purpose

The _Landing Zone_ is used when we need to provide bucket level access to third parties to facilitate:
- data being pushed to Data Platform, for example where a third party provides extracted data from a system.
- when we want to provide data for collection by an external party.   

Data is not queryable directly from this zone and it is controlled by the Data Platform team.

### Storage Formats
Data in this zone should be stored in the *format it arrived*, be that csv, json, parquet, etc.

### Transformations

No transformations should be applied to the data in this zone.

## Raw Zone         

### Purpose
The _Raw Zone_ is for data that we have _pulled_ on to the Data Platform from a source, for example a database or API. It also contains data that has been pulled from the _Landing Zone_, and if necessary segregated into different service area buckets (e.g. Academy data being split between Revenues and Benefits).

It contains data as it was extracted from the source without any transformation applied so that a user can always refer back to the initial state of a dataset when it was brought onto Data Platform.

In this zone the Data Platform team and analysts or engineers from a department can store data that they want to work with on Data Platform.

### Storage Formats

Data should be stored in its *original format* as extracted from the source. Tabular data may additionally be converted to *parquet* format to leverage storage and retrieval efficiencies.

### Transformations

Tabular data may be converted to *parquet* as long as a copy of the original data as extracted is also retained, but the structure and values should remain as extracted from the source.

## Refined Zone

### Purpose

The _Refined Zone_ holds data that has been transformed from its original state in the _Landing_ or _Raw Zones_. Data in this zone may be cleaned, standardised or otherwise augmented to make it more useful for analysts.

In this zone analysts and engineers explore, experiment and test the data.

### Storage Formats

Tabular data in this zone should only be in *parquet* format. 

### Transformations

Data should, as a minimum, be partitioned following the four level date scheme: `'import_year', 'import_month', 'import_day', 'import_date'`
Columns should have meaningful headers. Many other transformations may be applied. 

## Trusted Zone

### Purpose

The _Trusted Zone_ holds our 'gold standard' datasets that have been transformed with appropriate business logic and aggregation. These datasets meet common standards and should be described in a way that non-subject matter experts can understand.

The data in this zone may be provided with read access to data analysts, business analysts and the wider council community for creating data products and informing decision making. 

### Storage Formats

Tabular data in this zone should only be in parquet format.
