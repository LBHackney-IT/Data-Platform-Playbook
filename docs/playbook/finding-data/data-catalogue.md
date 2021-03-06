---
title: Using the data catalogue
layout: playbook_js
tags: [playbook]
---

## How to use the data catalogue

### Ingesting datasets

Datahub ingests datasets from Glue, the Glue connection is set up via a Datahub "recipe".
A Datahub recipe is a yaml configuration file that instructs Datahub on where to pull data from. 
Please see below for a guide on how to configure the Glue recipe, this will only need to be done once when Datahub is setup

1. Navigate to the ```ingestion``` tab:![img.png](../images/ingestion.png)
2. Click ```Create new source```: ![img_3.png](../images/create_new_source.png)
3. Choose Glue
4. Configure the recipe as follows (no need to change anything):
```
source:
  type: glue
  config:
    aws_region: '${AWS_DEFAULT_REGION}'
    aws_role: '${AWS_ROLE}'
    extract_transforms: '${GLUE_EXTRACT_TRANSFORMS}'
sink:
  type: datahub-rest
  config:
    server: '${GMS_URL}'
```
5. Configure an execution schedule. We recommend once a day for Glue:![img_2.png](../images/cron_schedule.png) To learn more about the CRON scheduling format, check out the [Wikipedia](https://en.wikipedia.org/wiki/Cron) overview.
6. Click next and give the Ingestion Source a name of ```Glue```
7. Once you're happy with your changes, simply click ```Done``` to save.
8. Once you've created your Ingestion Source, you can run it by clicking ```Execute```. Shortly after, you should see the ```Last Status``` column of the ingestion source change from N/A to Running. This means that the request to execute ingestion has been successfully picked up by the DataHub ingestion executor.
9. If ingestion has executed successfully, you should see it's state shown in green as Succeeded.
10. A variety of things can cause an ingestion run to fail, if this happens please check [this guide](https://datahubproject.io/docs/ui-ingestion/#debugging-a-failed-ingestion-run) or contact the Data Platform team

### Access to datasets

1. Anyone that is authenticated via Google Auth can view datasets’ metadata in Datahub
2. Only people that need to edit (owners) - are created as users within Datahub
3. These users will be assigned to department groups via a [Datahub metadata policy](https://datahubproject.io/docs/policies) that will allow edit permissions only on the datasets in their domain

### Browsing datasets

* Datasets can be found either by using the search or via the home screen
* Once a metadata ingestion recipe has been configured and executed, datasets should appear on the home screen:![datasets.png](../images/datasets.png)
* Each dataset can then be navigated through: ![datasets_inner.png](../images/datasets_inner.png)

### Searching datasets

Please see the official [Datahub Search Guide](https://datahubproject.io/docs/how/search)

### Viewing/editing metadata for a dataset

On each dataset, there are three main tabs: **Schema**, **Documentation**, **Properties** 

* **Schema**: This shows the schema of the table including the data types of each column. 
  More details for each Field can be found in the `Description`, `Tags` and `Terms` columns.
  
  *If you are the owner of the dataset, you can edit these fields.* 
  * To add a description to a field click on the ```+ Add Description``` button in the ```Description``` column: ![descriptions.png](../images/descriptions.png)
  * A popup will then appear and the description can be added along with an additional text formatting: ![img.png](../images/adding_descriptions.png)

* **Documentation**: This is a free text field where you can find general details of the dataset with supporting links.
  *If you are the owner of the dataset, you can add documentation or edit the existing documentation.*
  ![documentation](../images/dataset_documentation.png)
  

* **Properties**: This provides metadata on the dataset such as the number of records, where the data is stored, the Glue job that created it and more
![properties](../images/dataset_properties.png)
  
### Tagging

![tagging.gif](../images/tagging.gif)
Please see the official [Datahub Tags Guide](https://datahubproject.io/docs/tags) for more detail

### Domains
Domains can be used to organise datasets into departments, access can then be provided to users for specific domains they are interested in. 
Once you've created a Domain, you can use the search bar to find it. 
Please see the official [Datahub Domains Guide](https://datahubproject.io/docs/domains) which explains how to configure domains


### Adding/amending owners

![owners.gif](../images/adding_owners.gif)
