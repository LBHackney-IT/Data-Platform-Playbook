"use strict";(self.webpackChunkdata_platform_playbook=self.webpackChunkdata_platform_playbook||[]).push([[2324],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>g});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,m=r(e,["components","mdxType","originalType","parentName"]),u=p(a),c=o,g=u["".concat(s,".").concat(c)]||u[c]||d[c]||i;return a?n.createElement(g,l(l({ref:t},m),{},{components:a})):n.createElement(g,l({ref:t},m))}));function g(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,l=new Array(i);l[0]=c;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[u]="string"==typeof e?e:o,l[1]=r;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},674:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>p});var n=a(7462),o=(a(7294),a(3905));const i={title:"Ingesting data from Google Sheets",layout:"playbook_js",tags:["playbook"]},l=void 0,r={unversionedId:"playbook/ingesting-data/google-sheets-import",id:"playbook/ingesting-data/google-sheets-import",title:"Ingesting data from Google Sheets",description:"Objective",source:"@site/docs/playbook/ingesting-data/002-google-sheets-import.md",sourceDirName:"playbook/ingesting-data",slug:"/playbook/ingesting-data/google-sheets-import",permalink:"/Data-Platform-Playbook/playbook/ingesting-data/google-sheets-import",draft:!1,editUrl:"https://github.com/LBHackney-IT/data-platform-playbook/edit/master/docs/playbook/ingesting-data/002-google-sheets-import.md",tags:[{label:"playbook",permalink:"/Data-Platform-Playbook/tags/playbook"}],version:"current",sidebarPosition:2,frontMatter:{title:"Ingesting data from Google Sheets",layout:"playbook_js",tags:["playbook"]},sidebar:"docs",previous:{title:"Types of data and ingestion process",permalink:"/Data-Platform-Playbook/playbook/ingesting-data/what-data-are-we-ingesting"},next:{title:"Ingest manually uploaded csv files",permalink:"/Data-Platform-Playbook/playbook/ingesting-data/manual-ingest-of-csv-files"}},s={},p=[{value:"Objective",id:"objective",level:2},{value:"Intended audience",id:"intended-audience",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Department specific information",id:"department-specific-information",level:3},{value:"Preparing a Google sheet for ingestion",id:"preparing-a-google-sheet-for-ingestion",level:2},{value:"Getting Google sheet detail",id:"getting-google-sheet-detail",level:2},{value:"Setting up the AWS Glue job",id:"setting-up-the-aws-glue-job",level:2},{value:"Running the ingestion manually",id:"running-the-ingestion-manually",level:3}],m={toc:p},u="wrapper";function d(e){let{components:t,...i}=e;return(0,o.kt)(u,(0,n.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"objective"},"Objective"),(0,o.kt)("p",null,"Ingest data contained within a Google Sheet for use on the Data Platform, optionally setting a recurring schedule to ingest new data."),(0,o.kt)("h2",{id:"intended-audience"},"Intended audience"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Data Analyst")),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You have a Github account - you can ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/signup"},"create one")," yourself using your Hackney email"),(0,o.kt)("li",{parentName:"ul"},"You have been added to the 'LBHackney-IT' team - you can request this from Rashmi Shetty"),(0,o.kt)("li",{parentName:"ul"},"You have a service account email address, such as one listed in the table below:")),(0,o.kt)("h3",{id:"department-specific-information"},"Department specific information"),(0,o.kt)("table",null,(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Department"),(0,o.kt)("th",null,"Pre-Production Service account email"),(0,o.kt)("th",null,"Production Service account email"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"parking"),(0,o.kt)("td",null,"parking@dataplatform-stg.iam.gserviceaccount.com"),(0,o.kt)("td",null,"parking@dataplatform-prod0.iam.gserviceaccount.com")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"housing_repairs"),(0,o.kt)("td",null,"housing-repairs@dataplatform-stg.iam.gserviceaccount.com"),(0,o.kt)("td",null,"housing-repairs@dataplatform-prod0.iam.gserviceaccount.com")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"data_and_insight"),(0,o.kt)("td",null,"data-and-insight@dataplatform-stg.iam.gserviceaccount.com"),(0,o.kt)("td",null,"data-and-insight@dataplatform-prod0.iam.gserviceaccount.com")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"finance"),(0,o.kt)("td",null,"finance@dataplatform-stg.iam.gserviceaccount.com"),(0,o.kt)("td",null,"finance@dataplatform-prod0.iam.gserviceaccount.com")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"env_enforcement"),(0,o.kt)("td",null,"env-enforcement@dataplatform-stg.iam.gserviceaccount.com"),(0,o.kt)("td",null,"env-enforcement@dataplatform-prod0.iam.gserviceaccount.com")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"planning"),(0,o.kt)("td",null,"planning@dataplatform-stg.iam.gserviceaccount.com"),(0,o.kt)("td",null,"planning@dataplatform-prod0.iam.gserviceaccount.com")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"unrestricted"),(0,o.kt)("td",null,"unrestricted@dataplatform-stg.iam.gserviceaccount.com"),(0,o.kt)("td",null,"unrestricted@dataplatform-prod0.iam.gserviceaccount.com")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"sandbox"),(0,o.kt)("td",null,"sandbox@dataplatform-stg.iam.gserviceaccount.com"),(0,o.kt)("td",null,"sandbox@dataplatform-prod0.iam.gserviceaccount.com")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"benefits_and_housing_needs"),(0,o.kt)("td",null,"benefits-housing-needs@dataplatform-stg.iam.gserviceaccount.com"),(0,o.kt)("td",null,"benefits-housing-needs@dataplatform-prod0.iam.gserviceaccount.com")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"revenues"),(0,o.kt)("td",null,"revenues@dataplatform-stg.iam.gserviceaccount.com"),(0,o.kt)("td",null,"revenues@dataplatform-prod0.iam.gserviceaccount.com")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"environmental_services"),(0,o.kt)("td",null,"environmental-services@dataplatform-stg.iam.gserviceaccount.com"),(0,o.kt)("td",null,"environmental-services@dataplatform-prod0.iam.gserviceaccount.com")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"housing"),(0,o.kt)("td",null,"housing@dataplatform-stg.iam.gserviceaccount.com"),(0,o.kt)("td",null,"housing@dataplatform-prod0.iam.gserviceaccount.com")))),(0,o.kt)("h2",{id:"preparing-a-google-sheet-for-ingestion"},"Preparing a Google sheet for ingestion"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Open the Google sheet you would like to ingest"),(0,o.kt)("li",{parentName:"ol"},"Ensure that all columns have headers. Columns without headers will be lost"),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("inlineCode",{parentName:"li"},"Share")," in the top right corner of the sheet"),(0,o.kt)("li",{parentName:"ol"},"If the document is unnamed, name it"),(0,o.kt)("li",{parentName:"ol"},"Paste in the service account email address you have been provided into the email box"),(0,o.kt)("li",{parentName:"ol"},"Ensure the suggested email matches the service account email and select it"),(0,o.kt)("li",{parentName:"ol"},"On the new window, choose from the dropdown on the right hand side and select ",(0,o.kt)("inlineCode",{parentName:"li"},"Viewer")),(0,o.kt)("li",{parentName:"ol"},"Uncheck the ",(0,o.kt)("inlineCode",{parentName:"li"},"Notify people")," checkbox"),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("inlineCode",{parentName:"li"},"Share")),(0,o.kt)("li",{parentName:"ol"},"You will be asked to confirm sharing outside the organisation, click ",(0,o.kt)("inlineCode",{parentName:"li"},"share anyway")),(0,o.kt)("li",{parentName:"ol"},"Your Google sheet is now ready to ingest")),(0,o.kt)("h2",{id:"getting-google-sheet-detail"},"Getting Google sheet detail"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"You will need to obtain the document key from the url. The document id is the portion of the url between ",(0,o.kt)("inlineCode",{parentName:"p"},"https://docs.google.com/spreadsheets/d/")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"/edit#gid=0"),". See example below"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"Google sheet id",src:a(1146).Z,width:"1336",height:"60"}))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"You will also need to obtain the worksheet name that you wish to ingest. The worksheet name is located at the bottom left of the screen and unless it has been changed or other worksheets added, it will be called ",(0,o.kt)("inlineCode",{parentName:"p"},"Sheet1"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"To ingest multiple worksheets from the same Google sheet, repeat the instructions in the below section for each worksheet"))),(0,o.kt)("h2",{id:"setting-up-the-aws-glue-job"},"Setting up the AWS Glue job"),(0,o.kt)("p",null,"This is what will handle the ingestion of the data from Google Sheets to the Data Platform."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/LBHackney-IT/data-platform"},"Data Platform Project"),". If you don't have the correct permissions, you'll get a '404' error (see ",(0,o.kt)("a",{parentName:"p",href:"#prerequisites"},"prerequisites"),").")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Navigate to the main ",(0,o.kt)("inlineCode",{parentName:"p"},"terraform/etl")," directory, and open ",(0,o.kt)("inlineCode",{parentName:"p"},"08-google-sheets-imports.tf"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Switch to 'edit mode' (using edit button on top right)")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Copy one of the modules above, paste at the bottom of the file and update the following fields:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"module")," - in the format ",(0,o.kt)("inlineCode",{parentName:"p"},"your_unique_module_name"),", and unique to all other ",(0,o.kt)("inlineCode",{parentName:"p"},"module")," names in this file (it is helpful to keep the same naming convention as your dataset/folder)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"glue_catalog_database_name")," - Using ",(0,o.kt)("inlineCode",{parentName:"p"},"module.department_DEPARTMENT-NAME.raw_zone_catalog_database_name")," (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"module.department_parking.raw_zone_catalog_database_name"),")")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"google_sheets_document_id")," - Your Google Sheets document ID - see the ",(0,o.kt)("inlineCode",{parentName:"p"},"Getting Google sheet detail")," section above")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"google_sheets_worksheet_name")," - The name of the worksheet within your Google Sheet document - see the ",(0,o.kt)("inlineCode",{parentName:"p"},"Getting Google sheet detail")," section above. Please note the worksheet name must be unique within the Terraform file.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"department")," - ",(0,o.kt)("inlineCode",{parentName:"p"},"module.department_DEPARTMENT-NAME")," (department name should appear as in ",(0,o.kt)("a",{parentName:"p",href:"#department-specific-information"},"the table above"),", e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"module.department_housing_repairs"),")")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"dataset_name")," - The name of the dataset as you'd like it to appear within the data platform e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"housing-repair"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Optional: stop your Google Sheet from ingesting automatically")," - The ingest job will run every weekday at 11pm if ",(0,o.kt)("inlineCode",{parentName:"p"},"enable_glue_trigger")," is not specified (i.e. there's no line for this in your module) or it's set to ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),". If this is set to ",(0,o.kt)("inlineCode",{parentName:"p"},"false")," then your job will not run automatically on a schedule, and will have to be run manually within AWS. See the section ",(0,o.kt)("a",{parentName:"p",href:"#running-the-ingestion-manually"},"Running the ingestion manually")," for instructions on how to do this.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Optional: update the time schedule for the Google Sheet ingestion")," - If a value for ",(0,o.kt)("inlineCode",{parentName:"p"},"google_sheet_import_schedule")," is not provided, the ingestion will run at 11pm on weekdays."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"To override and set a new time schedule, add a new row to the respective module with the new cron time: e.g. ",(0,o.kt)("inlineCode",{parentName:"li"},'google_sheet_import_schedule = "cron(0 23 ? * 1-5 *)"')),(0,o.kt)("li",{parentName:"ul"},"To create a new Cron expression follow the guidance provided by the ",(0,o.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/AmazonCloudWatch/latest/events/ScheduledEvents.html#CronExpressions"},"AWS Cron Expression documentation"),"."))))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Submit your changes, by referring to the ",(0,o.kt)("a",{parentName:"p",href:"../getting-set-up/using-github#committing-your-changes-to-the-data-platform-project"},"Committing changes")," section of the ",(0,o.kt)("strong",{parentName:"p"},"Using Github")," guide."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"The Data Platform team needs to approve any changes to the code that you make, so your change won't happen automatically.\nOnce your changes have been approved, the job will run at the next scheduled time.")))),(0,o.kt)("h3",{id:"running-the-ingestion-manually"},"Running the ingestion manually"),(0,o.kt)("p",null,"Once you have been notified that your pull request has been merged, you can run the ingestion manually from the AWS console or wait until the scheduled time (if you set one)."),(0,o.kt)("p",null,"You can do this by navigating to ",(0,o.kt)("a",{parentName:"p",href:"https://eu-west-2.console.aws.amazon.com/glue/home?region=eu-west-2#etl:tab=workflows"},"AWS glue workflows"),", selecting the workflow named ",(0,o.kt)("inlineCode",{parentName:"p"},"<department_name>-<dataset_name>"),', clicking the "Actions" dropdown and then "Run".'))}d.isMDXComponent=!0},1146:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/google_spreadsheet_id_example-b0d0193617957f913c71663d81819975.png"}}]);