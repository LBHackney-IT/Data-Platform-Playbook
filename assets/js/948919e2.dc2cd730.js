"use strict";(self.webpackChunkdata_platform_playbook=self.webpackChunkdata_platform_playbook||[]).push([[5593],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return c}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(a),c=o,h=d["".concat(s,".").concat(c)]||d[c]||m[c]||i;return a?n.createElement(h,r(r({ref:t},p),{},{components:a})):n.createElement(h,r({ref:t},p))}));function c(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var u=2;u<i;u++)r[u]=a[u];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},3607:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return m}});var n=a(3117),o=a(102),i=(a(7294),a(3905)),r=["components"],l={title:"Ingesting Dynamo DB tables into the Landing Zone",description:"Ingesting tables from a Dynamo DB instance into the Data Platform landing zone",layout:"playbook_js",tags:["playbook"]},s=void 0,u={unversionedId:"playbook/ingesting-data/ingesting-dynamo-db-tables",id:"playbook/ingesting-data/ingesting-dynamo-db-tables",title:"Ingesting Dynamo DB tables into the Landing Zone",description:"Ingesting tables from a Dynamo DB instance into the Data Platform landing zone",source:"@site/docs/playbook/ingesting-data/007-ingesting-dynamo-db-tables.md",sourceDirName:"playbook/ingesting-data",slug:"/playbook/ingesting-data/ingesting-dynamo-db-tables",permalink:"/Data-Platform-Playbook/playbook/ingesting-data/ingesting-dynamo-db-tables",draft:!1,editUrl:"https://github.com/LBHackney-IT/data-platform-playbook/edit/master/docs/playbook/ingesting-data/007-ingesting-dynamo-db-tables.md",tags:[{label:"playbook",permalink:"/Data-Platform-Playbook/tags/playbook"}],version:"current",sidebarPosition:7,frontMatter:{title:"Ingesting Dynamo DB tables into the Landing Zone",description:"Ingesting tables from a Dynamo DB instance into the Data Platform landing zone",layout:"playbook_js",tags:["playbook"]},sidebar:"docs",previous:{title:"Ingesting data from databases into the Data Platform",permalink:"/Data-Platform-Playbook/playbook/ingesting-data/database-ingestion"},next:{title:"Ingesting new data entities via event streaming",permalink:"/Data-Platform-Playbook/playbook/ingesting-data/event-streaming"}},p={},m=[{value:"Objective",id:"objective",level:2},{value:"Intended audience",id:"intended-audience",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Creating a role in the account where the Dynamo DB instance is located",id:"creating-a-role-in-the-account-where-the-dynamo-db-instance-is-located",level:2},{value:"Saving the role ARN in the data platform accounts",id:"saving-the-role-arn-in-the-data-platform-accounts",level:2},{value:"Setting up the AWS Glue job",id:"setting-up-the-aws-glue-job",level:2},{value:"Running the ingestion manually",id:"running-the-ingestion-manually",level:3},{value:"Monitoring the ingestion",id:"monitoring-the-ingestion",level:3}],d={toc:m};function c(e){var t=e.components,a=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"objective"},"Objective"),(0,i.kt)("p",null,"To setup a job that will ingest specified tables from a Dynamo DB instance."),(0,i.kt)("h2",{id:"intended-audience"},"Intended audience"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Data Engineers"),(0,i.kt)("li",{parentName:"ul"},"Data Analysts")),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Ensure you have completed the pre-requisites in our ",(0,i.kt)("a",{parentName:"li",href:"/Data-Platform-Playbook/playbook/getting-set-up/"},"getting set up guide"),"."),(0,i.kt)("li",{parentName:"ul"},"You have an engineer in the account where the Dynamo DB instance is who can create an IAM role for you in that account.")),(0,i.kt)("h2",{id:"creating-a-role-in-the-account-where-the-dynamo-db-instance-is-located"},"Creating a role in the account where the Dynamo DB instance is located"),(0,i.kt)("p",null,"You will need someone who has access to the account where the Dynamo DB tables live to help with this.\nThey will need to create two roles, for both our pre-production and production AWS accounts.\nThe roles will both need to have a trust policy that looks like this. One will hold the pre-production account number and the other one, the production account number."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n    "Version": "2012-10-17",\n    "Statement": [\n        {\n            "Effect": "Allow",\n            "Action": "sts:AssumeRole",\n            "Principal": {\n                "AWS": "<account number of data platform account>"\n            }\n        }\n    ]\n}\n')),(0,i.kt)("p",null,"Both roles should have the following policy attached to the role.\nWhere ",(0,i.kt)("inlineCode",{parentName:"p"},"-- TABLE ARNs HERE --")," can be replaced by a list of ARNs for the tables that you want to ingest. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n  "Version": "2012-10-17"\n  "Statement" [\n    {\n      "Effect" = "Allow"\n      "Action" = [\n        "dynamodb:List*",\n        "dynamodb:Get*",\n        "dynamodb:Query",\n        "dynamodb:Scan",\n        "dynamodb:BatchGet*",\n        "dynamodb:DescribeTable*",\n        "dynamodb:DescribeStream*",\n      ]\n      "Resource" = [\n        -- TABLE ARNs HERE --\n      ]\n    }\n  ]\n}\n')),(0,i.kt)("p",null,"You will need the role ARN's of both roles, once they have been created, for the next step."),(0,i.kt)("h2",{id:"saving-the-role-arn-in-the-data-platform-accounts"},"Saving the role ARN in the data platform accounts"),(0,i.kt)("p",null,"Complete this step in both pre-production & production AWS accounts."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Login to AWS via ",(0,i.kt)("a",{parentName:"li",href:"https://hackney.awsapps.com/start#/"},"Hackney's SSO"),"."),(0,i.kt)("li",{parentName:"ol"},"Navigate to ",(0,i.kt)("a",{parentName:"li",href:"https://eu-west-2.console.aws.amazon.com/systems-manager/parameters/?region=eu-west-2&tab=Table"},"SSM parameter store")," in the AWS console."),(0,i.kt)("li",{parentName:"ol"},'Click "Create parameter".'),(0,i.kt)("li",{parentName:"ol"},"Set the name of the parameter to be something like ",(0,i.kt)("inlineCode",{parentName:"li"},"/where-the-data-is-coming-from/prod/role-arn-to-access-dynamodb-tables"),".\nChanging the first section to be the name of the data source, the second section to be the environment the Dynamo DB instance is in, then leaving the third section as is."),(0,i.kt)("li",{parentName:"ol"},'Keep note of the parameter name, as you will need it in the next section, and click "Create parameter".')),(0,i.kt)("h2",{id:"setting-up-the-aws-glue-job"},"Setting up the AWS Glue job"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Open the ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/LBHackney-IT/data-platform"},"Data Platform Project"),". If you don't have the correct permissions, you'll get a '404' error (see ",(0,i.kt)("a",{parentName:"li",href:"/Data-Platform-Playbook/playbook/getting-set-up/"},"getting set up"),")."),(0,i.kt)("li",{parentName:"ol"},"Navigate to the main ",(0,i.kt)("inlineCode",{parentName:"li"},"terraform/core")," directory and add a new file named after the dataset you are ingesting, for example ",(0,i.kt)("inlineCode",{parentName:"li"},"17-mtfh-tables-ingestion.tf"),'. Click on "Add file" then "Create new file" to do this.'),(0,i.kt)("li",{parentName:"ol"},"Load the role ARN saved in the ",(0,i.kt)("a",{parentName:"li",href:"#saving-the-role-arn-in-the-data-platform-accounts"},"previous section")," in to terraform.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Copy this example code block into the file.",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-tf"},'data "aws_ssm_parameter" "role_arn_to_access_housing_tables" {\n  name = "/where-the-data-is-coming-from/prod/role-arn-to-access-dynamodb-table"\n}\n'))),(0,i.kt)("li",{parentName:"ul"},"Rename ",(0,i.kt)("inlineCode",{parentName:"li"},"role_arn_to_access_housing_tables")," to be relevent to the kind of tables you are ingesting."),(0,i.kt)("li",{parentName:"ul"},"Change the name ",(0,i.kt)("inlineCode",{parentName:"li"},"/where-the-data-is-coming-from/prod/role-arn-to-access-dynamodb-table")," to be the name of the parameter you created in the previous section.")),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create the glue job & crawler.\nCopy the example terraform module below into the file."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-tf"},'module "ingest_dataset_tables" {\n  source        = "../modules/aws-glue-job"\n  environment   = var.environment\n  tags          = module.tags.values\n  glue_role_arn = aws_iam_role.glue_role.arn\n\n  job_name                       = "${local.short_identifier_prefix}Ingest MTFH tables"\n  job_description                = "Ingest a snapshot of the tenures table from the Housing Dynamo DB instance"\n  script_s3_object_key           = aws_s3_bucket_object.dynamodb_tables_ingest.key\n  helper_module_key              = aws_s3_bucket_object.helpers.key\n  pydeequ_zip_key                = aws_s3_bucket_object.pydeequ.key\n  spark_ui_output_storage_id     = module.spark_ui_output_storage.bucket_id\n  number_of_workers_for_glue_job = local.number_of_workers_for_mtfh_ingestion\n  glue_scripts_bucket_id         = module.glue_scripts.bucket_id\n  glue_temp_bucket_id            = module.glue_temp_storage.bucket_id\n  job_parameters = {\n    "--table_names"       = "TenureInformation,PeopleInformation",\n    "--role_arn"          = data.aws_ssm_parameter.role_arn_to_access_housing_tables.value\n    "--s3_target"         = "s3://${module.landing_zone.bucket_id}/mtfh/"\n    "--number_of_workers" = local.number_of_workers_for_mtfh_ingestion\n  }\n\n  crawler_details = {\n    database_name      = aws_glue_catalog_database.mtfh_landing_zone.name\n    s3_target_location = "s3://${module.landing_zone.bucket_id}/mtfh/"\n    table_prefix       = "mtfh_"\n    configuration = jsonencode({\n      Version = 1.0\n      Grouping = {\n        TableLevelConfiguration = 3\n      }\n    })\n  }\n}\n')),(0,i.kt)("p",{parentName:"li"},"This is example terraform to create a glue job in the Data Platform account.\nYou will need to changes the following values"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},'The module name - Declared at the top, in the example it is set to "ingest_dataset_tables". You should rename this to reflect the entire collection of data that is being ingested by this job.')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"job_name")," - Name of your job with ",(0,i.kt)("inlineCode",{parentName:"p"},"${local.short_identifier_prefix}")," prefixed in front of it like the example.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"job_description")," (Optional) - An optional description for what this job is doing.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"database_name")," - The name of the glue catalogue database where the tables will be written to in the data platform.\nIf you want to create the tables in the landing zone database, this will be ",(0,i.kt)("inlineCode",{parentName:"p"},"aws_glue_catalog_database.landing_zone_catalog_database.name"),".\nIf you want to create the tables in a departments raw zone database, this will be ",(0,i.kt)("inlineCode",{parentName:"p"},"module.department_DEPARTMENT_NAME.raw_zone_catalog_database_name"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"--table_names")," - A comma delimited list of table names to ingest from Dynamo DB.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"--role_arn")," - This should be the value of the data object created in the step above, for the example given it would be ",(0,i.kt)("inlineCode",{parentName:"p"},"data.aws_ssm_parameter.role_arn_access_housing_tables.value"),".\nThis signifies to terraform to go and get the value of this parameter, in which you have saved the ARN of the role created in the initial step.\nUsing the data object instead to writing the actual role ARN here allows you to configure a different role ARN for each environment.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"--number_of_workers")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"number_of_workers_for_glue_job")," - Both of these values should be set to the same value. More workers will mean more paralellisation and so if there is a large amount of data you might want to increase this, but if there is a small amount of data it will be expensive to have this too high as it won't utilise all of the workers.\nAs a guide, we have a table that has around 90000 rows in it and we're using 12 workers, please speak to an engineer if you are unsure."),(0,i.kt)("p",{parentName:"li"},"The following parameters are inside the ",(0,i.kt)("inlineCode",{parentName:"p"},"crawler_details"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"s3_target_location")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"--s3_target")," - This will specify the location in S3 bucket that the data is written to.\nThe glue job will create a folder for each table that it is ingesting so you just need to give the prefixes for these tables to live in.\nFor example if you are writing to the landing zone this could be, ",(0,i.kt)("inlineCode",{parentName:"p"},"s3://${module.landing_zone.bucket_id}/mtfh/"),", if the tables were coming from modern tools for housing.\nOr if you are writing to a departmental folder in the raw zone this could be, ",(0,i.kt)("inlineCode",{parentName:"p"},"s3://${module.raw_zone.bucket_id}/department_name/mtfh/"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"table_prefix"),' (Optional) - This is an optional variable that allows you to add a prefix to the table names that are created in the Glue catalog.\nFor example, if you are ingesting a table with name "houses" and you set a prefix of "hackney',"_","borough","_",'" then the resulting table name in the Glue catalog will be "hackney',"_","borough","_",'houses".')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"TableLevelConfiguration")," - This will be dependent on your ",(0,i.kt)("inlineCode",{parentName:"p"},"s3_target_location"),". It is the level at which tables are created in glue, from the S3 path.\nCounting from the bucket name to the table name, so for the S3 paths ",(0,i.kt)("inlineCode",{parentName:"p"},"s3://${module.landing_zone.bucket_id}/mtfh/")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"s3://${module.raw_zone.bucket_id}/department_name/mtfh/")," the table levels would be 3 and 4 respectively.")))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Schedule the job (Optional).\nIf you don't complete this step then the job and crawler will run once on creation and after that you will be able to run the job manually in the AWS console but it won't run on a schedule.\nIf you want it to run on a schedule then please refer to the \"Variables used for scheduling a Glue job\" section of ",(0,i.kt)("a",{parentName:"p",href:"/Data-Platform-Playbook/playbook/transforming-data/using-aws-glue/deploy-glue-jobs#variables-used-for-scheduling-a-glue-job"},"this article")," for an explanation on how to set the variables to do so.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Submit your changes, by referring to the ",(0,i.kt)("a",{parentName:"p",href:"../getting-set-up/using-github#committing-your-changes-to-the-data-platform-project"},"Committing changes")," section of the ",(0,i.kt)("strong",{parentName:"p"},"Using Github")," guide."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The Data Platform team needs to approve any changes to the code that you make, so your change won't happen automatically.\nOnce your changes have been approved, the job will run at the next scheduled time.")))),(0,i.kt)("h3",{id:"running-the-ingestion-manually"},"Running the ingestion manually"),(0,i.kt)("p",null,"Once you have been notified that your pull request has been merged, you can run the ingestion manually from the AWS console or wait until the scheduled time (if you set one)."),(0,i.kt)("p",null,"To do this first navigate to ",(0,i.kt)("a",{parentName:"p",href:"https://eu-west-2.console.aws.amazon.com/gluestudio/home?region=eu-west-2#/jobs"},"AWS glue jobs"),'. Then search for your job name, it will be prefixed by the environment (stg or prod) for example, if the job in this document was deployed to pre production it would be called "stg Ingest MTFH tables". Finally you can select the glue job and click "Run job".'),(0,i.kt)("h3",{id:"monitoring-the-ingestion"},"Monitoring the ingestion"),(0,i.kt)("p",null,"Spark Web UI is used to monitior and debug the glue jobs. Every 30 seconds, AWS Glue flushes the Spark event logs to an S3 bucket titled Spark UI Bucket."))}c.isMDXComponent=!0}}]);