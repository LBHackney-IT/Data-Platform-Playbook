---
id: zones
title: Zones
slug: /zones
---

The Platform has 4 data zones, as data moves from the landing to the trusted zone it will become:

- more valuable to the council
- smaller in volume

## Landing Zone

The _Landing Zone_ is used when we need to provide bucket level access to third parties to facilitate:
- data being pushed to Data Platform, for example where a third party provides extracted data from a system.
- when we want to provide data for collection by an external party.     

:::info
Data is not queryable directly from this zone.
:::

## Raw Zone                                                                                                                                                                                    
The _Raw Zone_ is for data that we have _pulled_ on to the Data Platform from a source, for example a database or API. 

It contains data as it was extracted from the source without any transformation applied so that a user can always refer back to the initial state of a dataset when it was brought onto Data Platform. 

## Refined Zone                                                                                                       

The _Refined Zone_ holds data that has been transformed from its original state in the _Landing_ or _Raw Zones_. Data in this zone may be cleaned, standardised or otherwise augmented to make it more useful for analysts.

## Trusted Zone

The _Trusted Zone_ holds our prepared datasets that have been transformed with appropraite business logic and aggregation for use by data analysts, business analysts and the wider council community.



