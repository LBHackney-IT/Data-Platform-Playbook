---
title: Geospatial enrichment
description: "How to perform spatial enrichment in the data platform"
layout: playbook_js
tags: [playbook]
---

This section describes how to enrich data with geographies from the GIS database such as wards and LSOA. 
Use this as a pre-processing step that will enable analysts to carry out spatial analysis or make choropleth maps from data held in the DP.

This process relies on pyspark script that performs spatial joins between: 
- input tables having some geometry information, 
- and geography tables such as wards, LSOAs or estates. These are spatial layers coming from Geolive, the corporate spatial database. 

The script outputs tables that have extra columns stating in which ward/LSOA/estate the record is located.
This script uses Geopandas as explained in the [ADR about spatial data processing in the Data Platform] (https://playbook.hackney.gov.uk/Data-Platform-Playbook/architecture-decisions/records/spatial-data-processing).

##Requirements for input tables

The tables to enrich must have some geometry information that enables to geocode each record as a point *(todo: support input tables with line or polygon geometries)*. This geometry can be represented in several ways:
1. Two coords columns, either lat lon or easting/northings. The column names are not important
2. One geometry column in one of these 2 formats. The name of the column is not important
- WKT (Well known text), e.g POINT (-0.020821653 51.55184938) 
- WKB (Well known binary) (0106000020346C000001000000010300000001000000760000003D0AD7A36453204148E17A14387D064114AE476113532041F6285C8F167A06419A9999997D5220410AD7A37009740641C3F528DC8552204148E17A141A7306417B14AE478F522041B81E85EBE77006413D0AD7238352204148E17A14186E0641B81E8)
3. *(to do) a UPRN column*

In cases 1 and 2, you need to know the coordinate reference system of the geometry information. Typically, it will be ‘EPSG:4326’ for lat/lon and ‘EPSG:27700’ (the code for British national grid) for easting and northing.


 
