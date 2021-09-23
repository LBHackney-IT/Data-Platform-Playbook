---
title: Create a data extract in Google Data Studio
description: "Create an extract to optimise dashboard performance"
layout: playbook_js
tags: playbook
---

## Introduction
When using a redshift connection in Google Data Studio simple dashboard selections can take a long time to return records. This is because each element on the page is querying the redshift cluster separately, despite the “Data Freshness” being set to 12 hours. 

To overcome this you can create a “Data Extract” of an existing data connection which is then cached and returns results much quicker. The Data Extract can also be refreshed at set intervals and “shared” for use in other dashboards.

It is highly recommended that the data extract is created before the dashboard is developed as any calculated fields or dimensions may need to be rebuilt. 

## Limitations
Google Data Studio has row limits relating to different data sources and the limit for the PostGresSQL connection used for the Data Platform is 100K.

## Prerequisites

* An initial data connection to the Data Platform must be created before creating a data extract. If using a redshift connection the guidance on how to set up the initial connection is [here][redshift] 

## Create an extracted data source
* Sign in to [Data Studio][google data studio].
* In the top left, click the + button, then select Data Source
* In the connectors list, select Extract Data.
* Select an existing data source to extract from.
* Select the dimensions and metrics to extract by dragging them from the Available Fields list onto the targets, or by clicking Add. All the fields you add appear in the list on the far right.
* (Optional) If the data is unaggregated, consider applying an aggregation, such as Sum, or Average, to reduce the amount of data extracted.
* (Optional) Apply filters to the data in order to reduce the number of rows.
* Apply a date range. Date ranges are required by some connectors, such as Analytics, but are optional for other connector types.
* Give your data source a name by clicking Untitled Data Source in the upper left.
* (Optional) To automatically refresh your data, in the lower right, turn on Auto update and set an update schedule.
* In the lower right, click SAVE AND EXTRACT.

You can now add this data source to a report or explore further by clicking one of the buttons in the upper right.
This extract will now be visible in “Data Sources”.

## Adding an extract in the dashboard
Alternatively, you can create a report and configure the data extract using the ADD DATA button in a specific dashboard and follow the above steps.
For this data to be available for other dashboards it needs to be made reusable:

* Resource>Manage added data sources and select MAKE REUSABLE

## Update extracted data
To update the information contained in a data extract, turn on “Auto update” or edit the data source connection and extract the data again:
* Sign in to [Data Studio][google data studio]
* Navigate to the data sources [Home page][google data sources].
* Locate the extracted data source.
* Click the data source to edit it.
* In the upper left, click EDIT CONNECTION. You must be the data source owner to see this option.
* (Optional) To automatically refresh your data, in the lower right, turn on Auto update and set an update schedule.
* In the lower right, click SAVE AND EXTRACT.


For further details see the [Google documentation][google documentation]


[redshift]: https://lbhackney-it.github.io/Data-Platform-Playbook/playbook/connecting-to-redshift-from-data-studio/
[google data studio]: https://datastudio.google.com/
[google data sources]: https://datastudio.google.com/navigation/datasources
[google documentation]: https://support.google.com/datastudio/answer/9019969?hl=en

