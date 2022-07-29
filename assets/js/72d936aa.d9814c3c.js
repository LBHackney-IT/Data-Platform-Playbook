"use strict";(self.webpackChunkdata_platform_playbook=self.webpackChunkdata_platform_playbook||[]).push([[1693],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return c}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=p(a),c=o,h=u["".concat(s,".").concat(c)]||u[c]||d[c]||r;return a?n.createElement(h,i(i({ref:t},m),{},{components:a})):n.createElement(h,i({ref:t},m))}));function c(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},5884:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return d}});var n=a(3117),o=a(102),r=(a(7294),a(3905)),i=["components"],l={title:"Ingesting data from an API to the Data Platform",description:"Ingesting API data into the Data Platform using an AWS Lambda function",layout:"playbook_js",tags:["playbook"]},s=void 0,p={unversionedId:"playbook/ingesting-data/ingesting-api-data",id:"playbook/ingesting-data/ingesting-api-data",title:"Ingesting data from an API to the Data Platform",description:"Ingesting API data into the Data Platform using an AWS Lambda function",source:"@site/docs/playbook/ingesting-data/009-ingesting-api-data.md",sourceDirName:"playbook/ingesting-data",slug:"/playbook/ingesting-data/ingesting-api-data",permalink:"/Data-Platform-Playbook/playbook/ingesting-data/ingesting-api-data",draft:!1,editUrl:"https://github.com/LBHackney-IT/data-platform-playbook/edit/master/docs/playbook/ingesting-data/009-ingesting-api-data.md",tags:[{label:"playbook",permalink:"/Data-Platform-Playbook/tags/playbook"}],version:"current",sidebarPosition:9,frontMatter:{title:"Ingesting data from an API to the Data Platform",description:"Ingesting API data into the Data Platform using an AWS Lambda function",layout:"playbook_js",tags:["playbook"]},sidebar:"docs",previous:{title:"Ingesting new data entities via event streaming",permalink:"/Data-Platform-Playbook/playbook/ingesting-data/event-streaming"},next:{title:"Production to pre-production data sync",permalink:"/Data-Platform-Playbook/playbook/ingesting-data/production-to-pre-production-sync"}},m={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Overview",id:"overview",level:2},{value:"Add the API credentials to the Data Platform project",id:"add-the-api-credentials-to-the-data-platform-project",level:3},{value:"Add your script to the Data Platform repository",id:"add-your-script-to-the-data-platform-repository",level:3},{value:"Set up API Ingestion Lambda Module",id:"set-up-api-ingestion-lambda-module",level:3},{value:"The following input variables are required:",id:"the-following-input-variables-are-required",level:4},{value:"The following input variables are optional:",id:"the-following-input-variables-are-optional",level:4},{value:"Commit your changes and create a Pull Request for review by the Data Platform team",id:"commit-your-changes-and-create-a-pull-request-for-review-by-the-data-platform-team",level:3},{value:"Example Module Block",id:"example-module-block",level:3}],u={toc:d};function c(e){var t=e.components,a=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You have a Python script to be used in the Lambda"),(0,r.kt)("li",{parentName:"ul"},"You have a Github account, you can ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/signup"},"create one")," yourself using your Hackney email."),(0,r.kt)("li",{parentName:"ul"},"You have been added to the 'LBHackney-IT' team, you can request this from Rashmi Shetty.")),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"This guide walks you through the process of setting up the infrastructure to deploy an AWS Lambda function to be used to ingest data from an API.\nIt assumes you already have a script that will make the API calls to retrieve the required data."),(0,r.kt)("h3",{id:"add-the-api-credentials-to-the-data-platform-project"},"Add the API credentials to the Data Platform project"),(0,r.kt)("p",null,"The API credentials can be stored and retrieved from AWS Secrets Manager.\nYou will then be able to retrieve and use credentials in your Lambda function script."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Contact an engineer from the Data Platform team to add the API credentials to AWS Secrets Manager."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"You will need to request that a ",(0,r.kt)("strong",{parentName:"p"},"secret")," (with an appropriate description) is created following the naming convention below:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"api-credentials/DATASET_NAME\n")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Remember this name as you will need it later"),". For example: ",(0,r.kt)("inlineCode",{parentName:"p"},"api-credentials/casenotes-data-key")," ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Request that the necessary API credentials be added to this secret in key-value pairs. For example:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"api_key")," = ",(0,r.kt)("inlineCode",{parentName:"li"},"RandomKey")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"secret")," = ",(0,r.kt)("inlineCode",{parentName:"li"},"RandomSecret")))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"You will be notified once the secret has been stored with the credentials.\nMake a note of the ",(0,r.kt)("strong",{parentName:"p"},"secret")," name, and the ",(0,r.kt)("strong",{parentName:"p"},"keys")," set above as they will be needed in the ",(0,r.kt)("a",{parentName:"p",href:"#set-up-api-ingestion-lambda"},"Set up API Ingestion Lambda")," below."))),(0,r.kt)("h3",{id:"add-your-script-to-the-data-platform-repository"},"Add your script to the Data Platform repository"),(0,r.kt)("p",null,"In this section, you'll be adding your script to the Data Platform repository so that it can be used in the Lambda function to ingest the API data."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note: You will need to complete this step from your IDE (Integrated Development Environment) or ask an engineer for assistance as it involves creating a directory which currently can't be done in the Github website user interface.")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Open the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/LBHackney-IT/Data-Platform/tree/main/lambdas"},"lambdas directory")," in the Data Platform Project in GitHub."),(0,r.kt)("li",{parentName:"ol"},"Create a new directory suffixed with ",(0,r.kt)("inlineCode",{parentName:"li"},"_api_ingestion"),".",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Set this to the name of the data/API you are ingesting.\nEnsure the name is ",(0,r.kt)("strong",{parentName:"li"},"lowercase")," with ",(0,r.kt)("strong",{parentName:"li"},"words separated by underscores"),".\nFor example: ",(0,r.kt)("inlineCode",{parentName:"li"},"casenotes_data_api_ingestion"),"."),(0,r.kt)("li",{parentName:"ul"},"Make a note of the name of the directory as it will be needed for the ",(0,r.kt)("a",{parentName:"li",href:"#set-up-api-ingestion-lambda-module"},"Set up API Ingestion Lambda Module")," section below. "))),(0,r.kt)("li",{parentName:"ol"},"Create a new file in this directory called ",(0,r.kt)("inlineCode",{parentName:"li"},"main.py"),", you can also add your tests to its own file: ",(0,r.kt)("inlineCode",{parentName:"li"},"test.py")),(0,r.kt)("li",{parentName:"ol"},"Paste your code in the respective files. ",(0,r.kt)("strong",{parentName:"li"},"Ensure the main execution function in your ",(0,r.kt)("inlineCode",{parentName:"strong"},"main.py")," file is called ",(0,r.kt)("inlineCode",{parentName:"strong"},"lambda_handler"),".")),(0,r.kt)("li",{parentName:"ol"},"Seek assistance from an engineer to get the required packages for your Lambda installed."),(0,r.kt)("li",{parentName:"ol"},"Submit your changes by referring to the ",(0,r.kt)("a",{parentName:"li",href:"../getting-set-up/using-github#committing-your-changes-to-the-data-platform-project"},"Committing changes")," section of the ",(0,r.kt)("strong",{parentName:"li"},"Using Github")," guide.\nThe Data Platform team needs to approve any changes to the code, so your change won't happen automatically.")),(0,r.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Updating your Lambda script")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If you need to update your Lambda script in the future, you must follow steps 4-6 to have those changes deployed to the Data Platform Project."))),(0,r.kt)("h3",{id:"set-up-api-ingestion-lambda-module"},"Set up API Ingestion Lambda Module"),(0,r.kt)("p",null,"In this section, you will be writing the code, using a template format, that will deploy your Lambda function to the Data Platform Project (or update an existing one if you need to make changes to an existing Lambda function)."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note: The steps in this section refer specifically to Github user interface"),". However, if you are familiar working with the Data Platform project from your IDE, then you can also make the changes in your IDE and commit them to the Data Platform repository."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/LBHackney-IT/Data-Platform/tree/main/terraform/core"},"terraform/core directory")," in the Data Platform Project in GitHub."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"If you don't have the correct permissions, you'll get a '404' error (see the ",(0,r.kt)("a",{parentName:"li",href:"/Data-Platform-Playbook/playbook/getting-set-up/"},"Getting Set Up documentation"),")."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open ",(0,r.kt)("inlineCode",{parentName:"p"},"38-api-ingestion.tf"),". "))),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("inlineCode",{parentName:"p"},"edit")," or the ",(0,r.kt)("strong",{parentName:"p"},"pencil icon")," (\u270f\ufe0f) then copy the last module block and paste it at the bottom of the file.\nAn example of what a module block looks like can be seen in the ",(0,r.kt)("a",{parentName:"p",href:"#example-module-block"},"Example Module Block")," section below.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Update the ",(0,r.kt)("inlineCode",{parentName:"p"},"module")," name using the name convention ",(0,r.kt)("inlineCode",{parentName:"p"},"<api_data_name>_api_ingestion"),", for example: ",(0,r.kt)("inlineCode",{parentName:"p"},'"casenotes_data_api_ingestion"'),"."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The module name must be all ",(0,r.kt)("strong",{parentName:"li"},"lowercase")," with ",(0,r.kt)("strong",{parentName:"li"},"words separated by underscores"),".\nEnsure the name is unique to all other module names in this file.")))),(0,r.kt)("h4",{id:"the-following-input-variables-are-required"},"The following input variables are required:"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},(0,r.kt)("strong",{parentName:"em"},"Note"),": If you have copied an existing module block then you won\u2019t need to change the ",(0,r.kt)("strong",{parentName:"em"},"source"),", ",(0,r.kt)("strong",{parentName:"em"},"tags"),", ",(0,r.kt)("strong",{parentName:"em"},"identifier_prefix"),", ",(0,r.kt)("strong",{parentName:"em"},"lambda_artefact_storage_bucket")," and, ",(0,r.kt)("strong",{parentName:"em"},"secrets_manager_kms_key")," input variables."),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"<ZONE>")," refers to either: ",(0,r.kt)("inlineCode",{parentName:"p"},"raw"),", or ",(0,r.kt)("inlineCode",{parentName:"p"},"landing")," S3 zones."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"source")," (required): This will be ",(0,r.kt)("inlineCode",{parentName:"p"},'"../modules/api-ingestion-lambda"'),". (This is the path to where the api ingestion Lambda module is saved within the repository).")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"tags")," (required): This will be ",(0,r.kt)("inlineCode",{parentName:"p"},"module.tags.values"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"identifier_prefix")," (required): This will be ",(0,r.kt)("inlineCode",{parentName:"p"},"local.short_identifier_prefix"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"lambda_artefact_storage_bucket")," (required): This will be ",(0,r.kt)("inlineCode",{parentName:"p"},"module.lambda_artefact_storage.bucket_id"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"lambda_name")," (required): Name of the Lambda function. This should be the same as the name set in step 2 of the ",(0,r.kt)("a",{parentName:"p",href:"##add-you-script-to-the-data-platform-repository"},"Add your script to the Data Platform repository")," section above, ",(0,r.kt)("strong",{parentName:"p"},"however with words separated by hyphens (",(0,r.kt)("inlineCode",{parentName:"strong"},"-"),") instead, and all lowercase."),"\n(This will be used to find your Lambda script)."),(0,r.kt)("p",{parentName:"li"},"For example:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'lambda_name = "casenotes-data-api-ingestion"\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"secrets_manager_kms_key")," (required): This will be ",(0,r.kt)("inlineCode",{parentName:"p"},"aws_kms_key.secrets_manager_key"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"s3_target_bucket_arn")," (required): This will be ",(0,r.kt)("inlineCode",{parentName:"p"},"module.<ZONE>_zone.bucket_arn"),".\n",(0,r.kt)("inlineCode",{parentName:"p"},"<ZONE>")," should be either ",(0,r.kt)("inlineCode",{parentName:"p"},"raw"),", or ",(0,r.kt)("inlineCode",{parentName:"p"},"landing")," depending on the S3 zone you are ingesting your data to.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"s3_target_bucket_name")," (required): The target S3 bucket to ingest the data to (this is used to set the Lambda permissions, you will also need to set this as an environment variable in the ",(0,r.kt)("strong",{parentName:"p"},"lambda_environment_variables")," input variable below)."),(0,r.kt)("p",{parentName:"li"},"This will be ",(0,r.kt)("inlineCode",{parentName:"p"},"module.<ZONE>_zone.bucket_id"),".\n",(0,r.kt)("inlineCode",{parentName:"p"},"<ZONE>")," should be either ",(0,r.kt)("inlineCode",{parentName:"p"},"raw"),", or ",(0,r.kt)("inlineCode",{parentName:"p"},"landing")," depending on the S3 zone you are ingesting your data to.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"api_credentials_secret_name")," (required): This will be the same name you set in the previous section (this is used to set the Lambda permissions, you will also need to set this as an environment variable in the ",(0,r.kt)("strong",{parentName:"p"},"lambda_environment_variables")," input variable below). "),(0,r.kt)("p",{parentName:"li"},"For example:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'api_credentials_secret_name = "api-credentials/case-notes"\n')),(0,r.kt)("p",{parentName:"li"},"You will be able to retrieve these credentials in your code from the Environment Variables you will set below using the ",(0,r.kt)("a",{parentName:"p",href:"https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/secretsmanager.html"},"AWS SDK")," for Secrets Manager.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"s3_target_bucket_kms_key_arn")," (required): This will be ",(0,r.kt)("inlineCode",{parentName:"p"},"module.<ZONE>_zone.kms_key_arn"),".\n",(0,r.kt)("inlineCode",{parentName:"p"},"<ZONE>")," should be either ",(0,r.kt)("inlineCode",{parentName:"p"},"raw"),", or ",(0,r.kt)("inlineCode",{parentName:"p"},"landing")," depending on the S3 zone you are ingesting your data to.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"lambda_environment_variables")," (required): An object containing key-value pairs of environment variables to be used in your Lambda code."),(0,r.kt)("p",{parentName:"li"},"For example: An API ingestion Lambda which has its API credentials stored as a secret called: ",(0,r.kt)("inlineCode",{parentName:"p"},'"api-credentials/case-notes"')," in AWS Secrets Manager, writes to a directory called: ",(0,r.kt)("inlineCode",{parentName:"p"},"casenotes-data")," in the Landing zone, and then triggers a Glue job to move it from the Landing zone to the Raw zone, will have the following set as environment variables:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'lambda_environment_variables = {\n  "SECRET_NAME" = "api-credentials/casenotes-data-key"\n  "TARGET_S3_BUCKET_NAME" = module.landing_zone.bucket_id\n  "OUTPUT_FOLDER" = "casenotes-data"\n  "GLUE_JOB_NAME" = module.copy_casenotes_data_landing_to_raw[0].job_name #Note: You would have to create this job\n}\n')),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"The ",(0,r.kt)("inlineCode",{parentName:"em"},"OUTPUT_FOLDER")," above can be your department name followed by dataset name if ingesting to your ",(0,r.kt)("strong",{parentName:"em"},"department's raw zone")," area. For example: ",(0,r.kt)("inlineCode",{parentName:"em"},'"housing/casenotes-data"'),".")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Environment variables set here can be retrieved in your Lambda code."),"\nFor example, to retrieve the above environment variables, you would add the following to your Lambda code:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'from os import getenv\n\ndef lambda_handler(event, lambda_context):\n  load_dotenv()\n  secret_name = getenv("SECRET_NAME")\n  s3_bucket = getenv("TARGET_S3_BUCKET_NAME")\n  output_folder_name = getenv("OUTPUT_FOLDER")\n  glue_job_name = getenv("GLUE_JOB_NAME")\n')))),(0,r.kt)("h4",{id:"the-following-input-variables-are-optional"},"The following input variables are optional:"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"If an optional variable is not needed you should delete the entire line in the module block.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"glue_job_to_trigger")," (optional): The Glue job to trigger once the ingestion has completed (this is used to set the Lambda permissions, you will also need to set this as an environment variable in the ",(0,r.kt)("strong",{parentName:"p"},"lambda_environment_variables")," input variable above)."),(0,r.kt)("p",{parentName:"li"},"  For instance, you may want to perform some transformations on the data or move it to another area once it has been ingested into the specified S3 location.\n",(0,r.kt)("strong",{parentName:"p"},"You will have to write some code in your Lambda to trigger this Glue job using the name.\nSee the ",(0,r.kt)("a",{parentName:"strong",href:"https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/glue.html#Glue.Client.start_job_run"},"AWS Docs")," for guidance on how to do this."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"ephemeral_storage")," (optional): The amount of Ephemeral storage (",(0,r.kt)("inlineCode",{parentName:"p"},"/tmp"),") to allocate for the Lambda Function in MBs.\nThis input variable can be used to expand the total amount of Ephemeral storage available beyond the ",(0,r.kt)("strong",{parentName:"p"},"default which is ",(0,r.kt)("inlineCode",{parentName:"strong"},"512")," (MBs).")," "),(0,r.kt)("p",{parentName:"li"},"In most cases the default value is sufficient, however, if your api ingestion Lambda runs an intensive/ heavy process, you may want to override this. For example:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"ephemeral_storage = 6144\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"lambda_timeout")," (optional): The amount of time in seconds before the Lambda will timeout/ stop running.\n",(0,r.kt)("strong",{parentName:"p"},"The default value is set to ",(0,r.kt)("inlineCode",{parentName:"strong"},"900")," (seconds) which is 15 mins"),". This is the ",(0,r.kt)("strong",{parentName:"p"},"maximum")," execution time for an AWS Lambda function.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"lambda_memory_size")," (optional): The amount of memory in MBs your Lambda Function can use at runtime.\n",(0,r.kt)("strong",{parentName:"p"},"The default value is ",(0,r.kt)("inlineCode",{parentName:"strong"},"256"),"."),"\nIn most cases the default value is sufficient, however, if your api ingestion Lambda runs an intensive/ heavy process, you may want to override this. For example:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"lambda_memory_size = 512 \n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"lambda_execution_cron_schedule")," (optional): Schedule to run the Lambda function specified using Cron expressions (see ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AmazonCloudWatch/latest/events/ScheduledEvents.html#CronExpressions"},"AWS Cron Expression documentation"),").\n",(0,r.kt)("strong",{parentName:"p"},"The default schedule is 6am everyday"),"."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"For example, if you wanted your API ingestion Lambda run at 08:30am every day, your Cron expression would look like:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'lambda_execution_cron_schedule = "cron(30 8 * * ? *)"\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"You can also use ",(0,r.kt)("a",{parentName:"p",href:"https://www.freeformatter.com/cron-expression-generator-quartz.html"},"this tool")," to generate your Cron expressions."))))),(0,r.kt)("p",null,"When you are done setting the input variables for this module, you can move onto the next section."),(0,r.kt)("h3",{id:"commit-your-changes-and-create-a-pull-request-for-review-by-the-data-platform-team"},"Commit your changes and create a Pull Request for review by the Data Platform team"),(0,r.kt)("p",null,"You can now submit your changes for review by the Data Platform team."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"See ",(0,r.kt)("a",{parentName:"li",href:"../getting-set-up/using-github#committing-your-changes-to-the-data-platform-project"},"Committing changes")," section of the ",(0,r.kt)("strong",{parentName:"li"},"Using Github")," guide.\nThe Data Platform team needs to approve any changes to the code that you make, so your change won't happen automatically.\nOnce your changes have been approved and deployed, the job will run at the next scheduled time (if scheduled).")),(0,r.kt)("h3",{id:"example-module-block"},"Example Module Block"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'module "casenotes_data_api_ingestion" {\n  source = "../modules/api-ingestion-lambda"\n  tags   = module.tags.values\n\n  identifier_prefix              = local.short_identifier_prefix\n  lambda_artefact_storage_bucket = module.lambda_artefact_storage.bucket_id\n  lambda_name                    = "casenotes-data-api-ingestion"\n  secrets_manager_kms_key        = aws_kms_key.secrets_manager_key\n  s3_target_bucket_arn           = module.landing_zone.bucket_arn\n  s3_target_bucket_name          = module.landing_zone.bucket_id\n  api_credentials_secret_name    = "api-credentials/casenotes-data-key"\n  glue_job_to_trigger            = module.copy_casenotes_data_landing_to_raw[0].job_name\n  s3_target_bucket_kms_key_arn   = module.landing_zone.kms_key_arn\n  lambda_environment_variables   = {\n    "SECRET_NAME" = "api-credentials/casenotes-data-key"\n    "TARGET_S3_BUCKET_NAME" = module.landing_zone.bucket_arn\n    "OUTPUT_FOLDER" = "casenotes-data"\n    "GLUE_JOB_NAME" = module.copy_casenotes_data_landing_to_raw[0].job_name #Note: You would have to create this job\n  }\n}\n')))}c.isMDXComponent=!0}}]);