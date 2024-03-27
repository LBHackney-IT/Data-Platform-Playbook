"use strict";(self.webpackChunkdata_platform_playbook=self.webpackChunkdata_platform_playbook||[]).push([[6910],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>g});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=p(a),u=i,g=d["".concat(l,".").concat(u)]||d[u]||c[u]||o;return a?n.createElement(g,r(r({ref:t},m),{},{components:a})):n.createElement(g,r({ref:t},m))}));function g(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:i,r[1]=s;for(var p=2;p<o;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},8310:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=a(7462),i=(a(7294),a(3905));const o={id:"creating-a-lambda-function-step-by-step",title:"How to create a Lambda function for data ingestion on the Data Analytics Platform",description:"Ingesting data using AWS Lambda [step-by-step]",layout:"playbook_js",tags:["playbook"]},r="How to create a Lambda function for data ingestion on the Data Analytics Platform",s={unversionedId:"playbook/ingesting-data/creating-a-lambda-function-step-by-step",id:"playbook/ingesting-data/creating-a-lambda-function-step-by-step",title:"How to create a Lambda function for data ingestion on the Data Analytics Platform",description:"Ingesting data using AWS Lambda [step-by-step]",source:"@site/docs/playbook/ingesting-data/013-creating-a-lambda-function-step-by-step.md",sourceDirName:"playbook/ingesting-data",slug:"/playbook/ingesting-data/creating-a-lambda-function-step-by-step",permalink:"/Data-Platform-Playbook/playbook/ingesting-data/creating-a-lambda-function-step-by-step",draft:!1,editUrl:"https://github.com/LBHackney-IT/data-platform-playbook/edit/master/docs/playbook/ingesting-data/013-creating-a-lambda-function-step-by-step.md",tags:[{label:"playbook",permalink:"/Data-Platform-Playbook/tags/playbook"}],version:"current",sidebarPosition:13,frontMatter:{id:"creating-a-lambda-function-step-by-step",title:"How to create a Lambda function for data ingestion on the Data Analytics Platform",description:"Ingesting data using AWS Lambda [step-by-step]",layout:"playbook_js",tags:["playbook"]},sidebar:"docs",previous:{title:"Using Watermarks to Record AWS GLue Job States Between Runs",permalink:"/Data-Platform-Playbook/playbook/ingesting-data/using-watermarks-to-record-job-states"},next:{title:"Guide to testing data quality in Glue Jobs",permalink:"/Data-Platform-Playbook/playbook/transforming-data/guides-to-testing-in-the-platform/data-quality-testing-guide"}},l={},p=[{value:"Check the feasibility of a Lambda function approach",id:"check-the-feasibility-of-a-lambda-function-approach",level:3},{value:"Outline what you need your Lambda function to do",id:"outline-what-you-need-your-lambda-function-to-do",level:3},{value:"Requesting the correct permissions set",id:"requesting-the-correct-permissions-set",level:3},{value:"Python packages and Lambda layers",id:"python-packages-and-lambda-layers",level:3},{value:"Creating a Lambda Function",id:"creating-a-lambda-function",level:3}],m={toc:p},d="wrapper";function c(e){let{components:t,...o}=e;return(0,i.kt)(d,(0,n.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"how-to-create-a-lambda-function-for-data-ingestion-on-the-data-analytics-platform"},"How to create a Lambda function for data ingestion on the Data Analytics Platform"),(0,i.kt)("h3",{id:"check-the-feasibility-of-a-lambda-function-approach"},"Check the feasibility of a Lambda function approach"),(0,i.kt)("p",null,"Before starting, it is advisable to discuss with the DAP team that a Lambda function is the most appropriate approach to take for your data ingestion task."),(0,i.kt)("p",null,"Here are some factors to consider before proceeding:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("em",{parentName:"p"},"Execution Time")),(0,i.kt)("p",{parentName:"li"},"  Lambda functions have execution time limits (currently 15 minutes per invocation). Ensure that your workload can execute within this time limit. If not, have a discussion with the DAP team to identify a more suitable approach."))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("em",{parentName:"p"},"Supported Runtimes and dependencies")),(0,i.kt)("p",{parentName:"li"},"  Lambda supports multiple programming languages including Python. Certain Python packages may need to be imported. This can be achieved through Lambda layers."))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Monitoring"),"  Lambda integrates with ",(0,i.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/lambda/latest/dg/monitoring-cloudwatchlogs.html"},"AWS CloudWatch")," for logging and monitoring; ensure that the permissions set includes the ability to write logs for debugging later on.")),(0,i.kt)("h3",{id:"outline-what-you-need-your-lambda-function-to-do"},"Outline what you need your Lambda function to do"),(0,i.kt)("p",null,"On the Data Analytics Platform, we typically use ",(0,i.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/lambda/latest/dg/welcome.html"},"AWS Lambda")," to perform simple ingestion and data processing tasks which do not require the resource-intensive infrastructure of an ",(0,i.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/glue/latest/dg/what-is-glue.html"},"AWS Glue job"),", for example:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Making an ",(0,i.kt)("em",{parentName:"li"},"API call")," and writing the response to the landing zone, including a crawler execution"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Reading")," in data from a ",(0,i.kt)("em",{parentName:"li"},"Google Sheet")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Moving data")," from one zone to another zone, with a simple refinement"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Event-driven")," processing, for example once new data arrives in S3, a Lambda is triggered to perform a task immediately"),(0,i.kt)("li",{parentName:"ul"},"Near ",(0,i.kt)("em",{parentName:"li"},"Real-time processing")," for example, when a new person is added to a permissions group, a Lambda is triggered to grant this permission")),(0,i.kt)("p",null,"If your process involves reading in very large datasets, applying complex algorithms using Spark or and undertaking data transformations with multiple datasets, then this might be better suited to a different approach such as AWS Glue. "),(0,i.kt)("h3",{id:"requesting-the-correct-permissions-set"},"Requesting the correct permissions set"),(0,i.kt)("p",null,"You will need to provide the DAP team with the following information so that the correct roles and policies can be set up for your Lambda. At the time of writing it is advisable to set up a short meeting with the DAP team to discuss your requirements : "),(0,i.kt)("ol",{className:"contains-task-list"},(0,i.kt)("li",{parentName:"ol",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","The department or service area that the process is for e.g. ",(0,i.kt)("em",{parentName:"li"},"Housing")),(0,i.kt)("li",{parentName:"ol",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Where data will be ingested / read from e.g. ",(0,i.kt)("em",{parentName:"li"},"an external API; housing-zone-raw database")),(0,i.kt)("li",{parentName:"ol",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Where data needs to be written to e.g. ",(0,i.kt)("em",{parentName:"li"},"landing zone, refined zone")),(0,i.kt)("li",{parentName:"ol",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","The kind of actions that needed e.g. writing data to _S3 _s3:PutObject__"),(0,i.kt)("li",{parentName:"ol",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Whether ",(0,i.kt)("em",{parentName:"li"},"logging")," is to be enabled"),(0,i.kt)("li",{parentName:"ol",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Whether secrets needs to be accessed from ",(0,i.kt)("em",{parentName:"li"},"AWS Secret Manager")," (and what the secrets are called)"),(0,i.kt)("li",{parentName:"ol",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Any other services needed for your Lambda task e.g. ",(0,i.kt)("em",{parentName:"li"},"AWS Glue Crawler")," ",(0,i.kt)("em",{parentName:"li"},"StartCrawler")," action")),(0,i.kt)("h3",{id:"python-packages-and-lambda-layers"},"Python packages and Lambda layers"),(0,i.kt)("p",null,"Python packages can be imported in the usual way within your script, but will need to be made available to the Lambda function, usually by including within a zip file."),(0,i.kt)("p",null,"An alternative method is to use ",(0,i.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/lambda/latest/dg/chapter-layers.html"},"Lambda layers")," which are where a package (or data) can be stored within a zip file and made available to all organisational users on the AWS environment (our Data Analytics Platform). Some common packages such as pandas are already ",(0,i.kt)("a",{parentName:"p",href:"https://aws-sdk-pandas.readthedocs.io/en/stable/layers.html"},"made available by AWS")," (for specific Python versions), but other packages can be added to the DAP using this ",(0,i.kt)("a",{parentName:"p",href:"https://docs.google.com/document/d/17d9YiCmZRYb2eH2ATkMcPBm97IajdkP9ieY8XtzSxyQ/edit#heading=h.zao8k5xrsbng"},"method"),"."),(0,i.kt)("p",null,"The advantages of using Lambda layers is that the overall deployment package will be smaller due to fewer dependencies as well as avoiding Lambdas importing the same packages in isolation. Having a smaller deployment package means that code can be tested and debugged more easily in the AWS Lambda console as it won\u2019t need to be zipped up."),(0,i.kt)("h3",{id:"creating-a-lambda-function"},"Creating a Lambda Function"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Introduction")),(0,i.kt)("p",null,"There is a good example of a simple Lambda function on the AWS website ",(0,i.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/lambda/latest/dg/getting-started.html"},"here"),". This guide demonstrates how to use the AWS Console to build, deploy and test a simple Lambda function. It is recommended to read this first before trying to build your own Lambda function."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Developing your own Lambda function")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Create and checkout a new git branch, giving it a name that is prefixed with the Jira card ID e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"di-001-my-amazing-api-ingestion-for-housing"),". This will ensure that any code commits and deployments are linked to the Jira agile workflow.")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Ensure that you have the required roles and policies ",(0,i.kt)("a",{parentName:"li",href:"#requesting-the-correct-permissions-set"},"set up"),". If these are new roles and / or policies then they will likely be set up on a Terraform script by the DAP team. If you are using an existing role then you can create an empty Terraform file in the ",(0,i.kt)("inlineCode",{parentName:"li"},"Terraform > ETL")," folder. Name the file in the same format as existing files by adding a prefix with the next numerical value e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"53-aws-lambda-my-amazing-ingestion.tf"))),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(8746).Z,width:"888",height:"1268"})),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Once you are ready to start developing your Lambda function you will need to navigate to the ",(0,i.kt)("inlineCode",{parentName:"li"},"lambdas folder")," in your ",(0,i.kt)("a",{parentName:"li",href:"https://playbook.hackney.gov.uk/Data-Platform-Playbook/playbook/getting-set-up/local-pyspark-environment"},"local environment"),". ")),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"Create a new folder and give it a name that describes what it is doing e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"my-amazing-api-ingestion-for-housing"))),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(3393).Z,width:"734",height:"1338"})),(0,i.kt)("ol",{start:5},(0,i.kt)("li",{parentName:"ol"},"Create a new empty Python file called ",(0,i.kt)("inlineCode",{parentName:"li"},"main.py"),".")),(0,i.kt)("p",null,"Below is an adapted ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/LBHackney-IT/Data-Platform/blob/main/lambdas/govnotify_api_ingestion_repairs/main.py"},"example")," from the Data Platform GitHub repository. The script includes some commonly used functions that perform certain actions such as getting a secret from ",(0,i.kt)("em",{parentName:"p"},"AWS Secrets Manager"),", ",(0,i.kt)("em",{parentName:"p"},"adding date partitions")," to a file path and ",(0,i.kt)("em",{parentName:"p"},"uploading a JSON string to an S3 bucket"),"."),(0,i.kt)("p",null,"Using this as a template, replace the script with your package imports, functions and code. Your main code needs to sit within the ",(0,i.kt)("inlineCode",{parentName:"p"},"lambda_handler(event, context)")," function which is what the Lambda job will look for when it is deployed."),(0,i.kt)("p",null,"The environment variables will be fully configured within the Terraform script that is created later on. For now, add the environment variables needed."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'from datetime import datetime\nimport json\nimport logging\nfrom os import getenv\n\nimport boto3\nfrom botocore.exceptions import ClientError\nfrom notifications_python_client.notifications import NotificationsAPIClient\n\n# Set up logging to track key stages of the Lambda job\nlogging.basicConfig(level=logging.INFO)\nlogger = logging.getLogger(__name__)\n\n# custom functions (add any custom functions here)\ndef get_api_secret(api_secret_name, region_name):\n    session = boto3.session.Session()\n    client = session.client(service_name="secretsmanager", region_name=region_name)\n    try:\n        get_secret_value_response = client.get_secret_value(SecretId=api_secret_name)\n    except ClientError as e:\n        raise e\n    return get_secret_value_response["SecretString"]\n\ndef upload_to_s3(s3_bucket_name, s3_client, file_content, file_name):\n    try:\n        s3_client.put_object(Bucket=s3_bucket_name, Key=file_name, Body=file_content)\n        logger.info(f"Uploaded {file_name} to S3")\n    except Exception as e:\n        logger.error(f"Error uploading {file_name} to S3: {str(e)}")\n\ndef prepare_json(response):\n    return json.dumps(response).encode(\'utf-8\')\n\ndef add_date_partition_key_to_s3_prefix(s3_prefix):\n    t = datetime.today()\n    partition_key = f"import_year={t.strftime(\'%Y\')}/import_month={t.strftime(\'%m\')}/import_day={t.strftime(\'%d\')}/import_date={t.strftime(\'%Y%m%d\')}/"\n    return f"{s3_prefix}{partition_key}"\n\n# main lambda_handler function (main script goes here)\ndef lambda_handler(event, context):\n    logger.info(f"Set up S3 client...")\n\n    # setting up clients needed for the task\n    s3_client = boto3.client(\'s3\')\n    glue_client = boto3.client(\'glue\')\n    \n    # environment variables\n    api_secret_name = getenv("API_SECRET_NAME")\n    region_name = getenv("AWS_REGION")\n    output_s3_bucket = getenv("TARGET_S3_BUCKET")\n    output_folder = getenv("TARGET_S3_FOLDER")\n    crawler = getenv("CRAWLER_NAME")\n    \n    # main script\n    api_secret_string = get_api_secret(api_secret_name, region_name)\n    api_secret_json = json.loads(api_secret_string)\n    api_key = api_secret_json.get("api_key_live")\n    client = NotificationsAPIClient(api_key)\n\n    response = client.get_all_notifications(include_jobs=True)\n    output_folder_json = add_date_partition_key_to_s3_prefix(f\'{output_folder}notifications/json/\')\n    json_str = prepare_json(response=response)\n    \n    # upload the json string to S3\n    upload_to_s3(output_s3_bucket, s3_client, json_str, f\'{output_folder_json}notifications.json\')\n    \n    # crawl all the parquet data in S3\n    glue_client.start_crawler(Name=f\'{crawler}\')\n\nif __name__ == "__main__":\n    lambda_handler("event", "lambda_context")\n    \n')),(0,i.kt)("ol",{start:6},(0,i.kt)("li",{parentName:"ol"},"Adding resources to the Terraform script")),(0,i.kt)("p",null,"At the very beginning of your Terraform script (this is the script we created in ",(0,i.kt)("em",{parentName:"p"},"step 2, 53-aws-lambda-my-amazing-ingestion.tf"),") ensure that the following block has been included. This will ensure that the Lambda is initially only deployed to pre-prod."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"locals {\n amazing_api_ingestion_resource_count = local.is_live_environment && !local.is_production_environment ? 1 : 0\n}\n")),(0,i.kt)("p",null,"After the policy blocks within the Terraform script, add a ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/LBHackney-IT/Data-Platform/tree/main/terraform/modules/aws-lambda"},"module block")," for the main Lambda resource (which has been custom developed on the DAP). as well other resource blocks such as for an ",(0,i.kt)("a",{parentName:"p",href:"https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/cloudwatch_event_target"},"EventBridge target")," or an ",(0,i.kt)("a",{parentName:"p",href:"https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/glue_crawler"},"AWS Glue Crawler"),"."),(0,i.kt)("p",null,"Within the layers list within the module block, any AWS supplied or custom Lambda layers can be added (see image below). A full example can be seen ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/LBHackney-IT/Data-Platform/blob/main/terraform/etl/48-lambda-gov-notify-ingestion.tf"},"here"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'module "gov-notify-ingestion-housing-repairs" {\n count                          = local.create_govnotify_resource_count\n source                         = "../modules/aws-lambda"\n tags                           = module.tags.values\n lambda_name                    = "govnotify_api_ingestion_repairs"\n lambda_role_arn                = aws_iam_role.housing_gov_notify_ingestion[0].arn\n identifier_prefix              = local.short_identifier_prefix\n handler                        = "main.lambda_handler"\n lambda_artefact_storage_bucket = module.lambda_artefact_storage_data_source.bucket_id\n s3_key                         = "govnotify_api_ingestion_repairs.zip"\n lambda_source_dir              = "../../lambdas/govnotify_api_ingestion_repairs"\n lambda_output_path             = "../../lambdas/govnotify_api_ingestion_repairs.zip"\n runtime                        = "python3.9"\n environment_variables          = {\n\n   API_SECRET_NAME  = "housing/gov-notify_live_api_key"\n   TARGET_S3_BUCKET = module.landing_zone_data_source.bucket_id\n   TARGET_S3_FOLDER = "housing/govnotify/damp_and_mould/"\n   CRAWLER_NAME     = "${local.short_identifier_prefix}GovNotify Housing Repairs Landing Zone"\n }\n layers = [\n   "arn:aws:lambda:eu-west-2:336392948345:layer:AWSSDKPandas-Python39:13",\n   "arn:aws:lambda:eu-west-2:${data.aws_caller_identity.data_platform.account_id}:layer:notifications-python-client-9-0-0-layer:1",\n   "arn:aws:lambda:eu-west-2:${data.aws_caller_identity.data_platform.account_id}:layer:urllib3-1-26-18-layer:1"\n ]\n}\n')),(0,i.kt)("ol",{start:7},(0,i.kt)("li",{parentName:"ol"},"Deploying and testing")),(0,i.kt)("p",null,"Stage, commit and push your new files to the repository. Check the results of the standard tests in the GitHub repository. "),(0,i.kt)("ol",{start:8},(0,i.kt)("li",{parentName:"ol"},"Final deployment ")),(0,i.kt)("p",null,"Once you are satisfied that your Lambda is working as intended, change the locals block in your existing Terraform script (53-aws-lambda-my-amazing-ingestion.tf) to the following, which will deploy to both pre-prod and production environments. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"locals {\n amazing_api_ingestion_resource_count = local.is_live_environment ? 1 : 0\n}\n")),(0,i.kt)("p",null,"Ensure that any secrets used are available in the production environment AWS Secrets Manager."),(0,i.kt)("p",null,"Well done, you have successfully created a Lambda job! \ud83c\udf89"))}c.isMDXComponent=!0},3393:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/new-lambda-folder-03c0687004a4abea66cf91c295e96594.png"},8746:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/new-terraform-file-507659f1f692e0ec9964c6dad1189087.png"}}]);