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

The tables to enrich must contain geometry information that enables to geocode each record as a point *(todo: support input tables with line or polygon geometries)*. This geometry can be represented in several ways:
1. Two coords columns, either lat lon or easting/northings. The column names are not important
2. One geometry column in one of these 2 formats. The name of the column is not important
- WKT (Well known text), e.g POINT (-0.020821653 51.55184938) 
- WKB (Well known binary) (0106000020346C000001000000010300000001000000760000003D0AD7A36453204148E17A14387D064114AE476113532041F6285C8F167A06419A9999997D5220410AD7A37009740641C3F528DC8552204148E17A141A7306417B14AE478F522041B81E85EBE77006413D0AD7238352204148E17A14186E0641B81E8)
3. *(to do) a UPRN column*

In cases 1 and 2, you need to know the coordinate reference system of the geometry information. Typically, it will be ‘EPSG:4326’ for lat/lon and ‘EPSG:27700’ (the code for British national grid) for easting and northing.

##How to set up an enrichment job

[The spatial enrichment PySpark script] (https://github.com/LBHackney-IT/Data-Platform/blob/main/scripts/jobs/unrestricted/spatial_enrichment.py) is ready to use, without mofifications, in any new Terraform job module. All the geospatial enrichment job modules should be placed in the [aws_glue_spatial Terraform script] (https://github.com/LBHackney-IT/Data-Platform/blob/main/terraform/etl/24-aws-glue-spatial.tf). Each job is specific to a department (for data access reasons) and can enrich one or more tables in one go. It will typically write into a subfolder of this department's refined zone, called 'spatially_enriched'. This location is set in the `--target_location` parameter, and can then get crawled if you set the `crawler_details` section. How you schedule the job is your choice. Note that the additional python modules (rtree, geopandas) needed for the spatial joins MUST be set as a job parameter called `additional-python-modules`.

This is an example of an enrichment job for Environmental Services.

```
module "env_services_geospatial_enrichment" {
  source                    = "../modules/aws-glue-job"
  is_live_environment       = local.is_live_environment
  is_production_environment = local.is_production_environment

  department                 = module.department_environmental_services_data_source
  job_name                   = "${local.short_identifier_prefix}env_services_geospatial_enrichment"
  script_s3_object_key       = aws_s3_bucket_object.spatial_enrichment.key
  glue_job_worker_type       = "G.1X"
  helper_module_key          = data.aws_s3_bucket_object.helpers.key
  pydeequ_zip_key            = data.aws_s3_bucket_object.pydeequ.key
  spark_ui_output_storage_id = module.spark_ui_output_storage_data_source.bucket_id
  schedule                   = "cron(30 4 ? * MON-FRI *)"
  job_parameters = {
    "--job-bookmark-option"        = "job-bookmark-enable"
    "--enable-glue-datacatalog"    = "true"
    "--additional-python-modules"  = "rtree,geopandas"
    "--geography_tables_dict_path" = "s3://${module.glue_scripts_data_source.bucket_id}/${aws_s3_bucket_object.geography_tables_dictionary.key}"
    "--tables_to_enrich_dict_path" = "s3://${module.glue_scripts_data_source.bucket_id}/${aws_s3_bucket_object.env_services_spatial_enrichment_dictionary.key}"
    "--target_location"            = "s3://${module.refined_zone_data_source.bucket_id}/env-services/spatially-enriched/"
  }
  crawler_details = {
    database_name      = module.department_environmental_services_data_source.refined_zone_catalog_database_name
    s3_target_location = "s3://${module.refined_zone_data_source.bucket_id}/env-services/spatially-enriched"
    table_prefix       = "spatially_enriched_"
  }
}
```

In the job inputs you'll also find 2 dictionaries that should be committed in the repository. 
The geography dictionary (`geography_tables_dict_path` parameter) tells Glue where to fetch the geography tables and what their relevant columns are (the same dictionary could be used for all enrichment jobs - speak to the GIS team if you need a new geography that hasn't been used before, they will amend this dictionary).
The tables to enrich dictionary (`tables_to_enrich_dict_path` parameter) tells Glue where to fetch the input tables in the department bucket, how to manage their geometries (format, CRS, column names), and with which geographies to enrich them.

Declare your dictionary in the tf script like below so it get copied from the repository into S3 at deployment stage.

```
resource "aws_s3_bucket_object" "env_services_spatial_enrichment_dictionary" {
  bucket      = module.glue_scripts_data_source.bucket_id
  key         = "scripts/env-services/spatial-enrichment-dictionary.json"
  acl         = "private"
  source      = "../../scripts/jobs/env_services/spatial-enrichment-dictionary.json"
  source_hash = filemd5("../../scripts/jobs/env_services/spatial-enrichment-dictionary.json")
}
```



