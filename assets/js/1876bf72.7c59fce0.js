"use strict";(self.webpackChunkdata_platform_playbook=self.webpackChunkdata_platform_playbook||[]).push([[4872],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return h}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(a),h=o,c=d["".concat(p,".").concat(h)]||d[h]||m[h]||i;return a?n.createElement(c,r(r({ref:t},u),{},{components:a})):n.createElement(c,r({ref:t},u))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var s=2;s<i;s++)r[s]=a[s];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},4724:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var n=a(7462),o=a(3366),i=(a(7294),a(3905)),r=["components"],l={title:"Google Sheets import",description:"Google Sheets import description",layout:"playbook_js",tags:["playbook"]},p=void 0,s={unversionedId:"playbook/google-sheets-import",id:"playbook/google-sheets-import",isDocsHomePage:!1,title:"Google Sheets import",description:"Google Sheets import description",source:"@site/docs/playbook/google-sheets-import.md",sourceDirName:"playbook",slug:"/playbook/google-sheets-import",permalink:"/Data-Platform-Playbook/playbook/google-sheets-import",editUrl:"https://github.com/LBHackney-IT/data-platform-playbook/edit/master/docs/playbook/google-sheets-import.md",tags:[{label:"playbook",permalink:"/Data-Platform-Playbook/tags/playbook"}],version:"current",frontMatter:{title:"Google Sheets import",description:"Google Sheets import description",layout:"playbook_js",tags:["playbook"]},sidebar:"docs",previous:{title:"Exporting database snapshot to the Data Platform Landing Zone",permalink:"/Data-Platform-Playbook/playbook/exporting-snapshot-to-landing-zone"},next:{title:"Import files from google to s3",permalink:"/Data-Platform-Playbook/playbook/import-files-from-google-to-S3"}},u=[{value:"Prerequisites",id:"prerequisites",children:[{value:"Department Specific Information",id:"department-specific-information",children:[]}]},{value:"Preparing Google sheet for import",id:"preparing-google-sheet-for-import",children:[]},{value:"Getting Google sheet detail",id:"getting-google-sheet-detail",children:[]},{value:"Setting up AWS Glue job",id:"setting-up-aws-glue-job",children:[{value:"Running the import manually",id:"running-the-import-manually",children:[]}]}],m={toc:u};function d(e){var t=e.components,l=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,n.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"You have a Github account, you can ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/signup"},"create one")," yourself using your Hackney email."),(0,i.kt)("li",{parentName:"ul"},"You have been added to the 'LBHackney-IT' team, you can request this from Rashmi Shetty."),(0,i.kt)("li",{parentName:"ul"},"You have a service account email address listed below.")),(0,i.kt)("h3",{id:"department-specific-information"},"Department Specific Information"),(0,i.kt)("table",null,(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",null,"Department"),(0,i.kt)("th",null,"Service account email"),(0,i.kt)("th",null,"Sheets credentials name"),(0,i.kt)("th",null,"Glue role arn"))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,"Parking"),(0,i.kt)("td",null,"parking@dataplatform-stg.iam.gserviceaccount.com"),(0,i.kt)("td",null,"module.department_parking.google_service_account.credentials_secret.name"),(0,i.kt)("td",null,"aws_iam_role.parking_glue.arn")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"Housing repairs"),(0,i.kt)("td",null,"housing-repairs@dataplatform-stg.iam.gserviceaccount.com"),(0,i.kt)("td",null,"aws_secretsmanager_secret.sheets_credentials_housing.name"),(0,i.kt)("td",null,"aws_iam_role.glue_role.arn")))),(0,i.kt)("h2",{id:"preparing-google-sheet-for-import"},"Preparing Google sheet for import"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Open the Google sheet you would like to import"),(0,i.kt)("li",{parentName:"ul"},"Ensure that all columns have headers. Columns without headers will be lost"),(0,i.kt)("li",{parentName:"ul"},"Click ",(0,i.kt)("inlineCode",{parentName:"li"},"Share")," in the top right corner of the sheet"),(0,i.kt)("li",{parentName:"ul"},"If the document is unnamed, name it"),(0,i.kt)("li",{parentName:"ul"},"Paste in the service account email address you have been provided into the email box"),(0,i.kt)("li",{parentName:"ul"},"Ensure the suggested email matches the service account email and select it"),(0,i.kt)("li",{parentName:"ul"},"On the new window, choose from the dropdown on the right hand side and select ",(0,i.kt)("inlineCode",{parentName:"li"},"Viewer")),(0,i.kt)("li",{parentName:"ul"},"Uncheck the ",(0,i.kt)("inlineCode",{parentName:"li"},"Notify people")," checkbox"),(0,i.kt)("li",{parentName:"ul"},"Click ",(0,i.kt)("inlineCode",{parentName:"li"},"Share")),(0,i.kt)("li",{parentName:"ul"},"You will be asked to confirm sharing outside the organisation, click ",(0,i.kt)("inlineCode",{parentName:"li"},"share anyway")),(0,i.kt)("li",{parentName:"ul"},"Your Google sheet is now available for import")),(0,i.kt)("h2",{id:"getting-google-sheet-detail"},"Getting Google sheet detail"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"You will need to obtain the document key from the url. The document id is the portion of the url between ",(0,i.kt)("inlineCode",{parentName:"p"},"https://docs.google.com/spreadsheets/d/")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"/edit#gid=0"),". See example below"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"Google sheet id",src:a(360).Z}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"You will also need to obtain the worksheet name that you wish to have imported. The worksheet name is located at the bottom left of the screen and unless it has been changed or other worksheets added, it will be called ",(0,i.kt)("inlineCode",{parentName:"p"},"Sheet1"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"To import multiple worksheets from the same Google sheet, repeat the instructions in the below section for each worksheet"))),(0,i.kt)("h2",{id:"setting-up-aws-glue-job"},"Setting up AWS Glue job"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Open the ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/LBHackney-IT/data-platform"},"Data Platform Project"),". If you don't have the correct permissions, you'll get a '404' error (see ",(0,i.kt)("a",{parentName:"li",href:"#prerequisites"},"prerequisites"),")."),(0,i.kt)("li",{parentName:"ul"},"Navigate to the main ",(0,i.kt)("inlineCode",{parentName:"li"},"terraform")," directory, and open ",(0,i.kt)("inlineCode",{parentName:"li"},"26-google-sheets-imports.tf")),(0,i.kt)("li",{parentName:"ul"},"Switch to 'edit mode' (using edit button on top right)"),(0,i.kt)("li",{parentName:"ul"},"Copy one of the modules above, paste at the bottom of the file and update the following fields:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"module"),' = "your-unique-module-name" (it is helpful to keep the same naming convention as your dataset/folder)'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"glue_role_arn")," = Find the value for your department in ",(0,i.kt)("a",{parentName:"li",href:"#department-specific-information"},"the table above")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"glue_catalog_database_name")," = module.department_\\<department-name",">",".raw_zone_catalog_database_name (e.g. module.department_parking.raw_zone_catalog_database_name)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"sheets_credentials_name")," = Find the value for your department in ",(0,i.kt)("a",{parentName:"li",href:"#department-specific-information"},"the table above")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"google_sheets_document_id"),' = "Your document id - see the ',(0,i.kt)("inlineCode",{parentName:"li"},"Getting Google sheet detail"),' section above"'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"google_sheets_worksheet_name"),' = "The name of your worksheet - see the ',(0,i.kt)("inlineCode",{parentName:"li"},"Getting Google sheet detail"),' section above"'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"department_name"),' = "The name of the department folder you would like to store in e.g. ',(0,i.kt)("inlineCode",{parentName:"li"},"housing"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"social-care"),'"'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"dataset_name")," = \"The name of the dataset as you'd like it to appear within the data platform e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"housing-repair"),'"')))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("em",{parentName:"p"},"Optional: stop your google sheet from importing automatically")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The import job will run every weekday at 11pm if 'enable_glue_trigger' is not specified (i.e. there's no line for this in your module) or it's set to 'true'. If this is set to 'false' then your job will not run automatically on a schedule, and will have to be run manually within AWS.\nSee the section ",(0,i.kt)("a",{parentName:"li",href:"#running-the-import-manually"},"Running the import manually")," for instructions on how to do this."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("em",{parentName:"p"},"Optional: update the time schedule for the google sheets import")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"If a value for ",(0,i.kt)("inlineCode",{parentName:"li"},"google_sheet_import_schedule")," is not provided, the import will run at 11pm on weekdays."),(0,i.kt)("li",{parentName:"ul"},"To override and set a new time schedule, add a new row to the respective module with the new Cron time: e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},'google_sheet_import_schedule = "cron(0 23 ? * 1-5 *)"')),(0,i.kt)("li",{parentName:"ul"},"To create a new Cron expression follow the guidance provided by the ",(0,i.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/AmazonCloudWatch/latest/events/ScheduledEvents.html#CronExpressions"},"AWS Cron Expression documentation"),"."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Committing your changes: The Data Platform team needs to approve any changes to the code, so your change won't happen automatically. To submit your change:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Provide a description to explain what you've changed"),(0,i.kt)("li",{parentName:"ul"},"Select the option to create a ",(0,i.kt)("inlineCode",{parentName:"li"},"new branch")," for this commit (i.e. the code you've changed). You can just use the suggested name for your branch."),(0,i.kt)("li",{parentName:"ul"},"Once you click 'Propose changes' you'll have the opportunity to add even more detail if needed before submitted for review. Once finished adding details, click \"Create pull request\"."),(0,i.kt)("li",{parentName:"ul"},"You'll receive an email to confirm that your changes have been approved & then merged. After it has been merged into the main code base the job will run at the next scheduled time.")))),(0,i.kt)("h3",{id:"running-the-import-manually"},"Running the import manually"),(0,i.kt)("p",null,"Once you have been notified that your pull request has been merged, you can run the import manually from the AWS console or wait until the scheduled time (if you set one)."),(0,i.kt)("p",null,"You can do this by navigating to ",(0,i.kt)("a",{parentName:"p",href:"https://eu-west-2.console.aws.amazon.com/glue/home?region=eu-west-2#etl:tab=workflows"},"AWS glue workflows"),", selecting the workflow named ",(0,i.kt)("inlineCode",{parentName:"p"},"<department_name>-<dataset_name>"),', clicking the "Actions" dropdown and then "Run".'))}d.isMDXComponent=!0},360:function(e,t,a){t.Z=a.p+"assets/images/google_spreadsheet_id_example-b0d0193617957f913c71663d81819975.png"}}]);