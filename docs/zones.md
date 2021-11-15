---
id: zones
title: Zones
slug: /zones
---

The Platform has 4 data zones, as data moves from the landing to the trusted zone it will become:

- more valuable to the council
- smaller in volume

## Landing Zone

This is where data gets placed when it first arrives in the Data Platform.

Data placed in this zone could contain sensitive information unsuitable for the platform.

:::info
Data is not queryable directly from this zone.
:::

Only vetted AWS Glue jobs will be able to access this data, with their responsibility being to copy the non-sensitive data from the landing into the raw zone.

## Raw Zone

The data queryable within this zone is sanitised, and anonymised.

The data queryable within this zone may not be in state which is easy to analyse or gain insights from.

The structure of this data mirrors the original source system.

## Refined Zone

The data queryable within this zone is in a useful state for analysts to query, generate insights from and share with analysts in other areas of the council.

When copying data from the raw zone to the refined zone, data manipulation such as denormalisation, de-duplicating, cleaning and merging may be required.

## Trusted Zone

The data within this zone is insightful information consumable by wider Hackney Council employees.

When copying data to the trusted zone, refined data may need to be copied, combined and presented in several forms, tailored to varying business needs.
