---
title: Data Catalogue
layout: playbook_js
tags: [playbook]
---

## What is a data catalogue?

A _data catalogue_ is a tool which provides an inventory of all data assets held within the data lake. It enables users to discover:

- what datasets are already in the data lake
- what fields and data types a dataset contains
- where to find the data within the lake
- who owns the data
- who uses the data

However, a data catalogue _isn't_:

- A data store or a data warehouse (e.g. London DataStore). The data is still stored within the lake, not the catalogue, so you won't be able to access or download the data directly from the catalogue.
- A way to search for specific data points. For example, you can search for datasets that contain a 'date of birth' field, but you cannot search a dataset for a specific date of birth. You'll need to get access to the data and query it from the lake or a BI tool for this.
- A way to access data without going through appropriate approval processes under GDPR. The catalogue will enable you to see datasets held by other services and who to request this from, but you will still need to complete a Privacy Impact Assessment and provide a legal basis for accessing and processing this data.

## How is our data catelogue built

The data catelogue is built using a tool called [DataHub](https://datahubproject.io/docs/features). 

- DataHub catelogues our data based on event-sourced metadata. When new data is added, or existing data updated, an event will be registered by the DataHub API and the change being made to the data will be added to the catelogue 
- DataHub also catelogues our data based on strongly-typed metadata models and relationships defined by Hackney, to allow for searches across multiple data sets

More detailed information on how to use the Data Catalogue can be found here: [Using the Data Catalogue](../finding-data/data-catalogue.md)