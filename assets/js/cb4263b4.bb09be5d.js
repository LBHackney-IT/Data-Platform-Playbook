"use strict";(self.webpackChunkdata_platform_playbook=self.webpackChunkdata_platform_playbook||[]).push([[1548],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return c}});var o=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=o.createContext({}),u=function(e){var t=o.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=u(a),c=n,m=h["".concat(s,".").concat(c)]||h[c]||d[c]||r;return a?o.createElement(m,i(i({ref:t},p),{},{components:a})):o.createElement(m,i({ref:t},p))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var u=2;u<r;u++)i[u]=a[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}h.displayName="MDXCreateElement"},834:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return d}});var o=a(3117),n=a(102),r=(a(7294),a(3905)),i=["components"],l={title:"Module 1 - Ingesting data from Google Sheets",description:"Training Module 1",layout:"playbook_js",tags:["training"]},s="Module 1 - Ingesting data from Google Sheets",u={unversionedId:"training-modules/module-1",id:"training-modules/module-1",title:"Module 1 - Ingesting data from Google Sheets",description:"Training Module 1",source:"@site/docs/training-modules/module-1.md",sourceDirName:"training-modules",slug:"/training-modules/module-1",permalink:"/Data-Platform-Playbook/training-modules/module-1",draft:!1,editUrl:"https://github.com/LBHackney-IT/data-platform-playbook/edit/master/docs/training-modules/module-1.md",tags:[{label:"training",permalink:"/Data-Platform-Playbook/tags/training"}],version:"current",frontMatter:{title:"Module 1 - Ingesting data from Google Sheets",description:"Training Module 1",layout:"playbook_js",tags:["training"]},sidebar:"docs",previous:{title:"Module 0 - Getting started with Training",permalink:"/Data-Platform-Playbook/training-modules/module-0"},next:{title:"Module 2 - Transforming data to refined zone",permalink:"/Data-Platform-Playbook/training-modules/module-2"}},p={},d=[{value:"Step-by-step instructions",id:"step-by-step-instructions",level:2},{value:"1. Preparing the Google Sheet for this exercise",id:"1-preparing-the-google-sheet-for-this-exercise",level:3},{value:"2. Granting the Data Platform access to your new Google sheet",id:"2-granting-the-data-platform-access-to-your-new-google-sheet",level:3},{value:"3. Creating two ingestion jobs in Terraform",id:"3-creating-two-ingestion-jobs-in-terraform",level:3},{value:"4. Getting your jobs deployed to the Data Platform",id:"4-getting-your-jobs-deployed-to-the-data-platform",level:3},{value:"5. Finding and running your jobs in the AWS console",id:"5-finding-and-running-your-jobs-in-the-aws-console",level:3},{value:"6. Crawling the ingested data to make it available in the Glue catalogue.",id:"6-crawling-the-ingested-data-to-make-it-available-in-the-glue-catalogue",level:3}],h={toc:d};function c(e){var t=e.components,l=(0,n.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},h,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"module-1---ingesting-data-from-google-sheets"},"Module 1 - Ingesting data from Google Sheets"),(0,r.kt)("p",null,"In this module you will ingest two datasets into the Data Platform from Google Sheets. This will involve creating an AWS ",(0,r.kt)("a",{parentName:"p",href:"https://lbhackney-it.github.io/Data-Platform-Playbook/glossary/#glue"},"Glue")," job using ",(0,r.kt)("a",{parentName:"p",href:"https://lbhackney-it.github.io/Data-Platform-Playbook/glossary/#terraform"},"Terraform")," as well as ",(0,r.kt)("a",{parentName:"p",href:"https://lbhackney-it.github.io/Data-Platform-Playbook/glossary/#github"},"GitHub")," for making changes to the Data Platform code repository. Once your changes have been approved by the Data Platform team, you will then crawl the loaded data, to then be able to view and query it in ",(0,r.kt)("a",{parentName:"p",href:"https://lbhackney-it.github.io/Data-Platform-Playbook/glossary#athena"},"AWS Athena"),", a database-like web client."),(0,r.kt)("h2",{id:"step-by-step-instructions"},"Step-by-step instructions"),(0,r.kt)("p",null,"Please ensure that ",(0,r.kt)("a",{parentName:"p",href:"https://playbook.hackney.gov.uk/Data-Platform-Playbook/playbook/training-modules/Module-0"},"Module 0")," is completed before starting this module."),(0,r.kt)("h3",{id:"1-preparing-the-google-sheet-for-this-exercise"},"1. Preparing the Google Sheet for this exercise"),(0,r.kt)("p",null,"Make a copy of this Covid vaccination ",(0,r.kt)("a",{parentName:"p",href:"https://docs.google.com/spreadsheets/d/1-ZNoQGu0LGlaKYDBWD8MUo8hqfcnE5YbgCXVz2MUxSw/edit#gid=2146898708"},"data")," and name the Google Sheet as ",(0,r.kt)("inlineCode",{parentName:"p"},"covid_vaccination_data")," in your own Google Drive. We are going to use the tabs ",(0,r.kt)("em",{parentName:"p"},"locations")," and ",(0,r.kt)("em",{parentName:"p"},"vaccinations"),"."),(0,r.kt)("h3",{id:"2-granting-the-data-platform-access-to-your-new-google-sheet"},"2. Granting the Data Platform access to your new Google sheet"),(0,r.kt)("p",null,"We have created a ",(0,r.kt)("inlineCode",{parentName:"p"},"sandbox")," department in the Data Platform, and an associated Google service account: ",(0,r.kt)("inlineCode",{parentName:"p"},"sandbox@dataplatform-stg.iam.gserviceaccount.com")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The Data Platform will use this account to connect to your Google sheet. "),(0,r.kt)("li",{parentName:"ul"},"Use the sharing settings of your sheet and grant \u201cViewer\u201d permissions to this user."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://playbook.hackney.gov.uk/Data-Platform-Playbook/playbook/ingesting-data/google-sheets-import#preparing-a-google-sheet-for-ingestion"},"Detailed steps")," are in the Playbook.")),(0,r.kt)("h3",{id:"3-creating-two-ingestion-jobs-in-terraform"},"3. Creating two ingestion jobs in Terraform"),(0,r.kt)("p",null,"Your Google sheet is going to be ingested by a job running in AWS ",(0,r.kt)("a",{parentName:"p",href:"https://lbhackney-it.github.io/Data-Platform-Playbook/glossary#glue"},"Glue"),". You will write a bit of ",(0,r.kt)("a",{parentName:"p",href:"https://lbhackney-it.github.io/Data-Platform-Playbook/glossary/#terraform"},"Terraform")," that will deploy this job automatically in the AWS environment. You are going to write this code directly in your web browser in GitHub ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/LBHackney-IT/Data-Platform/blob/main/terraform/26-google-sheets-imports.tf"},"here"),", adding to the existing terraform script ",(0,r.kt)("inlineCode",{parentName:"p"},"26-google-sheets-imports.tf"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Terraform script",src:a(9045).Z,width:"2960",height:"1580"})),(0,r.kt)("p",null,"You could also write the job locally within your interactive development environment, but editing via the GitHub web interface will be easier in this case as you won't need to clone the repository."),(0,r.kt)("p",null,"You will need to create two modules within the terraform script as we are ingesting two datasets from the Google spreadsheet:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"locations"),(0,r.kt)("li",{parentName:"ul"},"vaccinations")),(0,r.kt)("p",null,"i. Go to the Playbook to view ",(0,r.kt)("a",{parentName:"p",href:"https://playbook.hackney.gov.uk/Data-Platform-Playbook/playbook/ingesting-data/google-sheets-import#setting-up-the-aws-glue-job"},"detailed steps")," on how to create a terraform module."),(0,r.kt)("p",null,"Additionally, please complete the following steps:"),(0,r.kt)("p",null,"ii. Your department name will be ",(0,r.kt)("inlineCode",{parentName:"p"},"sandbox")," for the purpose of the training e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"module.department_sandbox"),"."),(0,r.kt)("p",null,"iii. Suffix your new Terraform module name with the department ",(0,r.kt)("inlineCode",{parentName:"p"},"sandbox")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"your_name")," so that each participant\u2019s job will be easily identifiable. The module name will need to also reflect the individual dataset so make sure that the dataset name is also included within the module name e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"sandbox_joe_bloggs_covid_vaccinations"),"."),(0,r.kt)("p",null,"iv. Prefix the dataset_name with your name e.g ",(0,r.kt)("inlineCode",{parentName:"p"},"joe_bloggs_covid_vaccinations"),"."),(0,r.kt)("p",null,"v. No schedule is required as this is a one-off import, so this line does not need to be included within the module."),(0,r.kt)("h3",{id:"4-getting-your-jobs-deployed-to-the-data-platform"},"4. Getting your jobs deployed to the Data Platform"),(0,r.kt)("p",null,"The next step is to commit your changes to the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/LBHackney-IT/Data-Platform"},"Data Platform GitHub repository"),". Follow the instructions ",(0,r.kt)("a",{parentName:"p",href:"https://playbook.hackney.gov.uk/Data-Platform-Playbook/playbook/getting-set-up/using-github#committing-your-changes-to-the-data-platform-project"},"here")," on how to do this."),(0,r.kt)("p",null,"Create a ",(0,r.kt)("a",{parentName:"p",href:"https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests"},"Pull Request")," (PR) for the changes to the Terraform script that you have just made. ",(0,r.kt)("strong",{parentName:"p"},"Two approvals")," are required before your code can get merged into the ",(0,r.kt)("em",{parentName:"p"},"main")," branch of the Data Platform repository. If you know the names of your reviewers, you can send them the URL of your PR to speed up the process. "),(0,r.kt)("p",null,"Once you have received confirmation that two reviewers have approved your PR, go back to GitHub and merge your code. This will deploy your job out to Data Platform Pre-Production environment. This only happens once. From that point onwards, you will be able to see it in the AWS console, and it will run on schedule or manually, depending on how it was configured in Terraform. "),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f There will be a 10-15 minute delay whilst the code deployment takes place. You can take a break or look at a ready-made job in the interim. To check the status of your deployment, navigate to the Actions tab in the Github web interface.")),(0,r.kt)("p",null,"In everyday use you may not need the data to be immediately available, in which case steps 5-7 would be picked up by the scheduled daily jobs, provided a schedule is specified in the Terraform module. "),(0,r.kt)("p",null,"Log in to ",(0,r.kt)("a",{parentName:"p",href:"https://hackney.awsapps.com/start#/"},"AWS")," as the ",(0,r.kt)("inlineCode",{parentName:"p"},"DataPlatformSandboxStg")," role via the ",(0,r.kt)("inlineCode",{parentName:"p"},"Management Console")," for that role."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"AWS console",src:a(1291).Z,width:"1768",height:"118"}),"\n","\xa0"),(0,r.kt)("h3",{id:"5-finding-and-running-your-jobs-in-the-aws-console"},"5. Finding and running your jobs in the AWS console"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\ud83d\udca1 You can search for AWS tools like AWS Glue, Crawlers etc. using the toolbar. If you cannot find a job or crawler check the region is London in the top right of the screen.")),(0,r.kt)("p",null,"Your jobs should now be available within ",(0,r.kt)("a",{parentName:"p",href:"https://eu-west-2.console.aws.amazon.com/gluestudio/home?region=eu-west-2#/jobs"},"Glue Studio"),". They will be named like ",(0,r.kt)("inlineCode",{parentName:"p"},"stg Google Sheets Import Job - department-dataset-yourname"),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f If you are waiting for code deployment to complete, then look for ",(0,r.kt)("inlineCode",{parentName:"p"},"stg Google Sheets Import Job - sandbox-daro-covid-locations")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"stg Google Sheets Import Job - sandbox-daro-covid-vaccinations")," jobs instead.")),(0,r.kt)("p",null,"Once you have selected a Glue job, you can run it by clicking ",(0,r.kt)("inlineCode",{parentName:"p"},"Run job"),"\nTo monitor the progress of your Glue job run, click through to the Glue job and navigate to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Runs")," tab."),(0,r.kt)("p",null,"It is sometimes helpful to check the specific output ",(0,r.kt)("a",{parentName:"p",href:"https://s3.console.aws.amazon.com/s3/home?region=eu-west-2"},"S3")," bucket for a job to see if it has run; the parquet files will be partitioned by date.\nYou can find the data by navigating to the location highlighted in the screenshot below but using your job name instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"daro-covid-vaccinations"),".\nYou should see data for todays date under the job you have run."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"s3 bucket",src:a(4885).Z,width:"3000",height:"1552"})),(0,r.kt)("h3",{id:"6-crawling-the-ingested-data-to-make-it-available-in-the-glue-catalogue"},"6. Crawling the ingested data to make it available in the Glue catalogue."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Crawling")," is the mechanism used to populate the AWS Glue Data Catalog so that data is made visible in Athena by picking up the column names and data types. "),(0,r.kt)("p",null,"i. Once the Glue jobs have successfully run, go ahead and run the crawlers that were created as part of the import job. You can use the AWS search bar to locate the ",(0,r.kt)("a",{parentName:"p",href:"https://eu-west-2.console.aws.amazon.com/glue/home?region=eu-west-2#catalog:tab=crawlers"},"Crawlers")," page. To search for your Crawler, click on the search box and then select the ",(0,r.kt)("inlineCode",{parentName:"p"},"Name")," filter and enter the name of your crawler, and click run."),(0,r.kt)("p",null,"ii. Check the data in ",(0,r.kt)("a",{parentName:"p",href:"https://eu-west-2.console.aws.amazon.com/athena/home?region=eu-west-2#/query-editor/"},"AWS Athena"),", the interface to view and query data from the Glue Catalogue."),(0,r.kt)("p",null,"iii. Open the ",(0,r.kt)("inlineCode",{parentName:"p"},"Query editor"),"."),(0,r.kt)("p",null,"iv. Make sure workgroup is ",(0,r.kt)("inlineCode",{parentName:"p"},"sandbox")," and you are using the ",(0,r.kt)("inlineCode",{parentName:"p"},"sandbox-raw-zone")," database. Run a simple query in Athena against your tables created or updated by the crawlers. You can generate a SQL preview query by selecting the three vertical dots by the table name and select ",(0,r.kt)("inlineCode",{parentName:"p"},"Preview Table")," to see the top 10 lines. The dialect of SQL used in Athena is ",(0,r.kt)("a",{parentName:"p",href:"https://prestodb.io/docs/current/sql.html"},"Presto SQL"),"."),(0,r.kt)("p",null,"v. You should now be able to repeat steps 6-9 for the job that ",(0,r.kt)("em",{parentName:"p"},"you")," created as the code should now have been deployed into to main Data Platform repository."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\ud83d\ude4c Congratulations! You have completed Module 1!")))}c.isMDXComponent=!0},9045:function(e,t,a){t.Z=a.p+"assets/images/edit_terraform_google_sheets-b8906227cd666f42dac5d3cd8113a832.png"},4885:function(e,t,a){t.Z=a.p+"assets/images/s3_check_partitions-68fcb3ad9823c5ccf650b5a64be9d18f.png"},1291:function(e,t,a){t.Z=a.p+"assets/images/sandox-console-1cc99cfdeda975efa4dbfc83c336b726.png"}}]);