---
id: spatial-data-processing
title: "Spatial Data Processing - ADR 015"
description: ""
tags: [adr]
number: "15"
date-issued: "2021-03-23"
status: "Proposed"
---

## Context

For many services it is important to know which ward, LSOA or NHS area a specific record relates to. To provide this information we need to perform spatial joins between
- the service area records, georeferenced by UPRNs or spatial coordinates 
- and areas from reference spatial datasets held in the GIS database (Geolive)

Geometric data types and spatial joins (aka point-on-area operations) are not supported by Pyspark so we have to use an additional library. 

The natural choice was Spatial Spark, now known as Apache Sedona, a geoprocessing library based on Spark. Unfortunately, we have not been able to install Apache Sedona in Glue, even with the help of AWS support. Other government bodies working with spatial data are recommending to use 'low-level' python libraries such as Shapely (on which Sedona is partly based) and then redevelop the needed functionalities, instead of installing large frameworks.

## Decision
We are using Shapely to decode geometries from our spatial database (encoded in WKB format) and Geopandas to perform spatial joins. An example can be found in the [Spatial enrichment job](https://github.com/LBHackney-IT/Data-Platform/blob/spatial-enrichment-script/scripts/jobs/geospatial/spatial_enrichment.py).


## Consequences

Using Geopandas in our jobs means we need to convert spark dataframes into pandas dataframes before processing them, and then back to Spark dataframes to write the data to S3. These conversions are probably less efficient than using Spark all the way. We can also suspect Sedona works faster with very big datasets. However, Geopandas has been satisfactory with our use cases so far.
