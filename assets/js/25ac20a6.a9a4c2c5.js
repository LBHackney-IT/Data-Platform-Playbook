"use strict";(self.webpackChunkdata_platform_playbook=self.webpackChunkdata_platform_playbook||[]).push([[3806],{3905:(e,a,t)=>{t.d(a,{Zo:()=>d,kt:()=>_});var n=t(7294);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,o=function(e,a){if(null==e)return{};var t,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),c=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},d=function(e){var a=c(e.components);return n.createElement(l.Provider,{value:a},e.children)},h="mdxType",p={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=c(t),m=o,_=h["".concat(l,".").concat(m)]||h[m]||p[m]||r;return t?n.createElement(_,i(i({ref:a},d),{},{components:t})):n.createElement(_,i({ref:a},d))}));function _(e,a){var t=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=m;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s[h]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1591:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var n=t(7462),o=(t(7294),t(3905));const r={title:"Geospatial enrichment",description:"How to perform geospatial enrichment on data held in the data platform",layout:"playbook_js",tags:["playbook"]},i=void 0,s={unversionedId:"playbook/querying-and-analysing-data/geospatial-enrichments",id:"playbook/querying-and-analysing-data/geospatial-enrichments",title:"Geospatial enrichment",description:"How to perform geospatial enrichment on data held in the data platform",source:"@site/docs/playbook/querying-and-analysing-data/geospatial-enrichments.md",sourceDirName:"playbook/querying-and-analysing-data",slug:"/playbook/querying-and-analysing-data/geospatial-enrichments",permalink:"/Data-Platform-Playbook/playbook/querying-and-analysing-data/geospatial-enrichments",draft:!1,editUrl:"https://github.com/LBHackney-IT/data-platform-playbook/edit/master/docs/playbook/querying-and-analysing-data/geospatial-enrichments.md",tags:[{label:"playbook",permalink:"/Data-Platform-Playbook/tags/playbook"}],version:"current",frontMatter:{title:"Geospatial enrichment",description:"How to perform geospatial enrichment on data held in the data platform",layout:"playbook_js",tags:["playbook"]},sidebar:"docs",previous:{title:"Create a data extract in Google Data Studio",permalink:"/Data-Platform-Playbook/playbook/querying-and-analysing-data/create_a_data_extract_in_GDS"},next:{title:"Querying the Data Platform using SQL within AWS Athena",permalink:"/Data-Platform-Playbook/playbook/querying-and-analysing-data/querying-data-using-sql"}},l={},c=[{value:"Dictionary of geography tables (doesn&#39;t need to change)",id:"dictionary-of-geography-tables-doesnt-need-to-change",level:2},{value:"Dictionary of tables to enrich (create a new one for each enrichment job)",id:"dictionary-of-tables-to-enrich-create-a-new-one-for-each-enrichment-job",level:2}],d={toc:c},h="wrapper";function p(e){let{components:a,...r}=e;return(0,o.kt)(h,(0,n.Z)({},d,r,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This section describes how to enrich data with geographies such as wards and LSOAs.\nUse this as a pre-processing step that will enable analysts to aggregate or make choropleth maps from data held in the DP. In the example below (Qlik), the 2 maps on the left were created with enriched data whereas the map on the right was created with the non enriched version."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Street cleaning jobs mapped with or without spatial enrichment",src:t(2884).Z,width:"1909",height:"804"})),(0,o.kt)("p",null,"The spatial enrichment process relies on a PySpark script that performs spatial joins between: "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"input tables having some geometry information, "),(0,o.kt)("li",{parentName:"ul"},"and geography tables such as wards, LSOAs or estates. These are spatial layers coming from Geolive, the corporate spatial database. ")),(0,o.kt)("p",null,"The script outputs tables that have extra columns stating in which ward/LSOA/estate the record is located.\nThis script uses Geopandas as explained in the ",(0,o.kt)("a",{parentName:"p",href:"https://playbook.hackney.gov.uk/Data-Platform-Playbook/architecture-decisions/records/spatial-data-processing"},"ADR about spatial data processing in the Data Platform"),"."),(0,o.kt)("h1",{id:"requirements-for-input-tables"},"Requirements for input tables"),(0,o.kt)("p",null,"The tables to enrich must contain geometry information that enables to geocode each record as a point ",(0,o.kt)("em",{parentName:"p"},"(to do: support input tables with line or polygon geometries)"),". This geometry can be represented in several ways:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Two coords columns, either lat lon or easting/northings. The column names are not important"),(0,o.kt)("li",{parentName:"ol"},"One geometry column in one of these 2 formats. The name of the column is not important")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"WKT (Well known text), e.g POINT (-0.020821653 51.55184938) "),(0,o.kt)("li",{parentName:"ul"},"WKB (Well known binary) (0106000020346C000001000000010300000001000000760000003D0AD7A36453204148E17A14387D064114AE476113532041F6285C8F167A06419A9999997D5220410AD7A37009740641C3F528DC8552204148E17A141A7306417B14AE478F522041B81E85EBE77006413D0AD7238352204148E17A14186E0641B81E8)")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("em",{parentName:"li"},"(to do) a UPRN column"))),(0,o.kt)("p",null,"In cases 1 and 2, you need to know the coordinate reference system of the geometry information. Typically, it will be \u2018EPSG:4326\u2019 for lat/lon and \u2018EPSG:27700\u2019 (the code for British national grid) for easting and northing."),(0,o.kt)("h1",{id:"where-to-set-up-an-enrichment-job"},"Where to set up an enrichment job"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/LBHackney-IT/Data-Platform/blob/main/scripts/jobs/unrestricted/spatial_enrichment.py"},"The spatial enrichment PySpark script")," is ready to use, without mofifications, in any new Terraform job module. All the geospatial enrichment job modules should be placed in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/LBHackney-IT/Data-Platform/blob/main/terraform/etl/24-aws-glue-spatial.tf"},"aws_glue_spatial Terraform script"),". Each job is specific to a department (for data access reasons) and can enrich one or more tables in one go. It will typically write into a subfolder of this department's refined zone, called 'spatially_enriched'. This location is set in the ",(0,o.kt)("inlineCode",{parentName:"p"},"--target_location")," parameter, and can then get crawled if you set the ",(0,o.kt)("inlineCode",{parentName:"p"},"crawler_details")," section. How you schedule the job is your choice. Note that the additional python modules (rtree, geopandas) needed for the spatial joins MUST be set as a job parameter called ",(0,o.kt)("inlineCode",{parentName:"p"},"additional-python-modules"),"."),(0,o.kt)("p",null,"This is an example of an enrichment job for Environmental Services."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'module "env_services_geospatial_enrichment" {\n  source                    = "../modules/aws-glue-job"\n  is_live_environment       = local.is_live_environment\n  is_production_environment = local.is_production_environment\n\n  department                 = module.department_environmental_services_data_source\n  job_name                   = "${local.short_identifier_prefix}env_services_geospatial_enrichment"\n  script_s3_object_key       = aws_s3_bucket_object.spatial_enrichment.key\n  glue_job_worker_type       = "G.1X"\n  helper_module_key          = data.aws_s3_bucket_object.helpers.key\n  pydeequ_zip_key            = data.aws_s3_bucket_object.pydeequ.key\n  spark_ui_output_storage_id = module.spark_ui_output_storage_data_source.bucket_id\n  schedule                   = "cron(30 4 ? * MON-FRI *)"\n  job_parameters = {\n    "--job-bookmark-option"        = "job-bookmark-enable"\n    "--enable-glue-datacatalog"    = "true"\n    "--additional-python-modules"  = "rtree,geopandas"\n    "--geography_tables_dict_path" = "s3://${module.glue_scripts_data_source.bucket_id}/${aws_s3_bucket_object.geography_tables_dictionary.key}"\n    "--tables_to_enrich_dict_path" = "s3://${module.glue_scripts_data_source.bucket_id}/${aws_s3_bucket_object.env_services_spatial_enrichment_dictionary.key}"\n    "--target_location"            = "s3://${module.refined_zone_data_source.bucket_id}/env-services/spatially-enriched/"\n  }\n  crawler_details = {\n    database_name      = module.department_environmental_services_data_source.refined_zone_catalog_database_name\n    s3_target_location = "s3://${module.refined_zone_data_source.bucket_id}/env-services/spatially-enriched"\n    table_prefix       = "spatially_enriched_"\n  }\n}\n')),(0,o.kt)("h1",{id:"two-dictionaries-used-to-parameterise-the-job"},"Two dictionaries used to parameterise the job"),(0,o.kt)("p",null,"The most important job parameters are paths to 2 dictionaries that should be committed in the repository. "),(0,o.kt)("h2",{id:"dictionary-of-geography-tables-doesnt-need-to-change"},"Dictionary of geography tables (doesn't need to change)"),(0,o.kt)("p",null,"The geography tables dictionary (",(0,o.kt)("inlineCode",{parentName:"p"},"geography_tables_dict_path")," parameter) tells Glue where to fetch the geography tables, what their relevant columns are, and how they should be labelled in enriched tables. These are quite standard settings and, unless you have very specific requirements for the output table, the same dictionary could be used for all enrichment jobs. The dictionary doesn't force you to use all these geographies, but it makes them available for Glue. In the other dictionary (next subsection), you'll be able to set which geographies to use for each input table to enrich. Speak to the GIS team if you need a new geography that hasn't been used before, they will amend this dictionary. Here is the dictionnary as it was when the first enrichment job was created:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'[{\n    "ward":{"geography_title":"ward", "database_name":"unrestricted-raw-zone", "table_name":"geolive_boundaries_hackney_ward", "columns_to_append":[{"column_name":"name", "column_alias":"ward_name"},{"column_name":"census_code", "column_alias":"ward_ons_code"}]},\n    "lsoa":{"geography_title":"lsoa", "database_name":"unrestricted-raw-zone", "table_name":"geolive_boundaries_hackney_lsoa_2011", "columns_to_append":[{"column_name":"lsoa_name", "column_alias":"lsoa_name"},{"column_name":"code", "column_alias":"lsoa_ons_code"}]},\n    "msoa":{"geography_title":"msoa", "database_name":"unrestricted-raw-zone", "table_name":"geolive_boundaries_hackney_msoa_2011", "columns_to_append":[{"column_name":"msoa11nm", "column_alias":"msoa_name"},{"column_name":"msoa11cd", "column_alias":"msoa_ons_code"}]},\n    "recycling_estate":{"geography_title":"recycling_estate", "database_name":"unrestricted-raw-zone", "table_name":"geolive_recycling_recycling_estate_boundary", "columns_to_append":[{"column_name":"estate_name", "column_alias":"recycling_estate"}]},\n    "street_cleaning_area":{"geography_title":"street_cleaning_area", "database_name":"unrestricted-raw-zone", "table_name":"geolive_recycling_street_cleaning_manager_area", "columns_to_append":[{"column_name":"areaname", "column_alias":"street_cleaning_manager_area"}]},\n    "housing_estate":{"geography_title":"housing_estate", "database_name":"unrestricted-raw-zone", "table_name":"geolive_housing_lbh_estate", "columns_to_append":[{"column_name":"estate_name", "column_alias":"housing_estate"}]},\n    "housing_neighbourhood":{"geography_title":"housing_neighbourhood", "database_name":"unrestricted-raw-zone", "table_name":"geolive_housing_housing_neighbourhood", "columns_to_append":[{"column_name":"housing_neighbourhoods", "column_alias":"housing_neighbourhood"}]},\n    "housing_management_area":{"geography_title":"housing_management_area", "database_name":"unrestricted-raw-zone", "table_name":"geolive_housing_housing_management_area", "columns_to_append":[{"column_name":"name", "column_alias":"housing_management_area"}]},\n    "children_centre_area":{"geography_title":"children_centre_area", "database_name":"unrestricted-raw-zone", "table_name":"geolive_education_children_centre_area", "columns_to_append":[{"column_name":"zone_id", "column_alias":"children_centre_area"}]},\n    "health_care_neighbourhood":{"geography_title":"health_care_neighbourhood", "database_name":"unrestricted-raw-zone", "table_name":"geolive_health_health_care_neighbourhood", "columns_to_append":[{"column_name":"neighbourhood_area", "column_alias":"health_care_neighbourhood_code"},{"column_name":"neighbourhood_name", "column_alias":"health_care_neighbourhood_name"}]}\n}]\n')),(0,o.kt)("h2",{id:"dictionary-of-tables-to-enrich-create-a-new-one-for-each-enrichment-job"},"Dictionary of tables to enrich (create a new one for each enrichment job)"),(0,o.kt)("p",null,"The tables to enrich dictionary (",(0,o.kt)("inlineCode",{parentName:"p"},"tables_to_enrich_dict_path")," parameter) tells Glue where to fetch the input tables in the department bucket, how to manage their geometries (format, CRS, column names), and with which geographies to enrich them. Here is the beginning of the dictionnary used to enrich environmental services data.\n",(0,o.kt)("img",{alt:"Dictionary of tables to enrich for environment services",src:t(6195).Z,width:"1504",height:"836"})),(0,o.kt)("p",null,"Declare your dictionary in the tf script like below so it gets copied from the repository into S3 at deployment stage."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'resource "aws_s3_bucket_object" "env_services_spatial_enrichment_dictionary" {\n  bucket      = module.glue_scripts_data_source.bucket_id\n  key         = "scripts/env-services/spatial-enrichment-dictionary.json"\n  acl         = "private"\n  source      = "../../scripts/jobs/env_services/spatial-enrichment-dictionary.json"\n  source_hash = filemd5("../../scripts/jobs/env_services/spatial-enrichment-dictionary.json")\n}\n')))}p.isMDXComponent=!0},2884:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/alloy-jobs-with-and-without-spatial-enrichment-784127034f6be1327faae3a04591dd6b.png"},6195:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/env-services-spatial-enrichment-dictionary-8e7ce4d119cf612ac7a3b1d5b6bd3302.png"}}]);