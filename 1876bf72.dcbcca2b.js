(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{118:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return d}));var n=a(0),o=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var b=o.a.createContext({}),p=function(e){var t=o.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=p(e.components);return o.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,r=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),s=p(a),m=n,d=s["".concat(r,".").concat(m)]||s[m]||u[m]||i;return a?o.a.createElement(d,l(l({ref:t},b),{},{components:a})):o.a.createElement(d,l({ref:t},b))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,r=new Array(i);r[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,r[1]=l;for(var b=2;b<i;b++)r[b]=a[b];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},127:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/google_spreadsheet_id_example-b0d0193617957f913c71663d81819975.png"},70:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return p}));var n=a(3),o=a(7),i=(a(0),a(118)),r={title:"Google Sheets import",description:"Google Sheets import description",layout:"playbook_js",tags:"playbook"},l={unversionedId:"playbook/google-sheets-import",id:"playbook/google-sheets-import",isDocsHomePage:!1,title:"Google Sheets import",description:"Google Sheets import description",source:"@site/docs/playbook/google-sheets-import.md",slug:"/playbook/google-sheets-import",permalink:"/Data-Platform-Playbook/playbook/google-sheets-import",editUrl:"https://github.com/LBHackney-IT/data-platform-playbook/edit/master/docs/playbook/google-sheets-import.md",version:"current",sidebar:"docs",previous:{title:"Exporting database snapshot to the Data Platform Landing Zone",permalink:"/Data-Platform-Playbook/playbook/exporting-snapshot-to-landing-zone"},next:{title:"Import files from google to s3",permalink:"/Data-Platform-Playbook/playbook/import-files-from-google-to-S3"}},c=[{value:"Prerequisites",id:"prerequisites",children:[{value:"Department Specific Information",id:"department-specific-information",children:[]}]},{value:"Preparing Google sheet for import",id:"preparing-google-sheet-for-import",children:[]},{value:"Getting Google sheet detail",id:"getting-google-sheet-detail",children:[]},{value:"Setting up AWS Glue job",id:"setting-up-aws-glue-job",children:[{value:"Running the import manually",id:"running-the-import-manually",children:[]}]}],b={toc:c};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"You have a Github account, you can ",Object(i.b)("a",{parentName:"li",href:"https://github.com/signup"},"create one")," yourself using your Hackney email."),Object(i.b)("li",{parentName:"ul"},"You have been added to the 'LBHackney-IT' team, you can request this from Rashmi Shetty."),Object(i.b)("li",{parentName:"ul"},"You have a service account email address listed below.")),Object(i.b)("h3",{id:"department-specific-information"},"Department Specific Information"),Object(i.b)("table",null,Object(i.b)("thead",null,Object(i.b)("tr",null,Object(i.b)("th",null,"Department"),Object(i.b)("th",null,"Service account email"),Object(i.b)("th",null,"Sheets credentials name"),Object(i.b)("th",null,"Glue role arn"))),Object(i.b)("tbody",null,Object(i.b)("tr",null,Object(i.b)("td",null,"Parking"),Object(i.b)("td",null,"parking@dataplatform-stg.iam.gserviceaccount.com"),Object(i.b)("td",null,"module.department_parking.google_service_account.credentials_secret.name"),Object(i.b)("td",null,"aws_iam_role.parking_glue.arn")),Object(i.b)("tr",null,Object(i.b)("td",null,"Housing repairs"),Object(i.b)("td",null,"housing-repairs@dataplatform-stg.iam.gserviceaccount.com"),Object(i.b)("td",null,"aws_secretsmanager_secret.sheets_credentials_housing.name"),Object(i.b)("td",null,"aws_iam_role.glue_role.arn")))),Object(i.b)("h2",{id:"preparing-google-sheet-for-import"},"Preparing Google sheet for import"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Open the Google sheet you would like to import"),Object(i.b)("li",{parentName:"ul"},"Ensure that all columns have headers. Columns without headers will be lost"),Object(i.b)("li",{parentName:"ul"},"Click ",Object(i.b)("inlineCode",{parentName:"li"},"Share")," in the top right corner of the sheet"),Object(i.b)("li",{parentName:"ul"},"If the document is unnamed, name it"),Object(i.b)("li",{parentName:"ul"},"Paste in the service account email address you have been provided into the email box"),Object(i.b)("li",{parentName:"ul"},"Ensure the suggested email matches the service account email and select it"),Object(i.b)("li",{parentName:"ul"},"On the new window, choose from the dropdown on the right hand side and select ",Object(i.b)("inlineCode",{parentName:"li"},"Viewer")),Object(i.b)("li",{parentName:"ul"},"Uncheck the ",Object(i.b)("inlineCode",{parentName:"li"},"Notify people")," checkbox"),Object(i.b)("li",{parentName:"ul"},"Click ",Object(i.b)("inlineCode",{parentName:"li"},"Share")),Object(i.b)("li",{parentName:"ul"},"You will be asked to confirm sharing outside the organisation, click ",Object(i.b)("inlineCode",{parentName:"li"},"share anyway")),Object(i.b)("li",{parentName:"ul"},"Your Google sheet is now available for import")),Object(i.b)("h2",{id:"getting-google-sheet-detail"},"Getting Google sheet detail"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"You will need to obtain the document key from the url. The document id is the portion of the url between ",Object(i.b)("inlineCode",{parentName:"p"},"https://docs.google.com/spreadsheets/d/")," and ",Object(i.b)("inlineCode",{parentName:"p"},"/edit#gid=0"),". See example below"),Object(i.b)("p",{parentName:"li"},Object(i.b)("img",{alt:"Google sheet id",src:a(127).default}))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"You will also need to obtain the worksheet name that you wish to have imported. The worksheet name is located at the bottom left of the screen and unless it has been changed or other worksheets added, it will be called ",Object(i.b)("inlineCode",{parentName:"p"},"Sheet1"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"To import multiple worksheets from the same Google sheet, repeat the instructions in the below section for each worksheet"))),Object(i.b)("h2",{id:"setting-up-aws-glue-job"},"Setting up AWS Glue job"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Open the ",Object(i.b)("a",{parentName:"li",href:"https://github.com/LBHackney-IT/data-platform"},"Data Platform Project"),". If you don't have the correct permissions, you'll get a '404' error (see ",Object(i.b)("a",{parentName:"li",href:"#prerequisites"},"prerequisites"),")."),Object(i.b)("li",{parentName:"ul"},"Navigate to the main ",Object(i.b)("inlineCode",{parentName:"li"},"terraform")," directory, and open ",Object(i.b)("inlineCode",{parentName:"li"},"26-google-sheets-imports.tf")),Object(i.b)("li",{parentName:"ul"},"Switch to 'edit mode' (using edit button on top right)"),Object(i.b)("li",{parentName:"ul"},"Copy one of the modules above, paste at the bottom of the file and update the following fields:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"module"),' = "your-unique-module-name" (it is helpful to keep the same naming convention as your dataset/folder)'),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"glue_role_arn")," = Find the value for your department in ",Object(i.b)("a",{parentName:"li",href:"#department-specific-information"},"the table above")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"glue_catalog_database_name")," = module.department_\\<department-name",">",".raw_zone_catalog_database_name (e.g. module.department_parking.raw_zone_catalog_database_name)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"sheets_credentials_name")," = Find the value for your department in ",Object(i.b)("a",{parentName:"li",href:"#department-specific-information"},"the table above")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"google_sheets_document_id"),' = "Your document id - see the ',Object(i.b)("inlineCode",{parentName:"li"},"Getting Google sheet detail"),' section above"'),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"google_sheets_worksheet_name"),' = "The name of your worksheet - see the ',Object(i.b)("inlineCode",{parentName:"li"},"Getting Google sheet detail"),' section above"'),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"department_name"),' = "The name of the department folder you would like to store in e.g. ',Object(i.b)("inlineCode",{parentName:"li"},"housing"),", ",Object(i.b)("inlineCode",{parentName:"li"},"social-care"),'"'),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"dataset_name")," = \"The name of the dataset as you'd like it to appear within the data platform e.g. ",Object(i.b)("inlineCode",{parentName:"li"},"housing-repair"),'"')))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("em",{parentName:"p"},"Optional: stop your google sheet from importing automatically")),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"The import job will run every weekday at 11pm if 'enable_glue_trigger' is not specified (i.e. there's no line for this in your module) or it's set to 'true'. If this is set to 'false' then your job will not run automatically on a schedule, and will have to be run manually within AWS.\nSee the section ",Object(i.b)("a",{parentName:"li",href:"#running-the-import-manually"},"Running the import manually")," for instructions on how to do this."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("em",{parentName:"p"},"Optional: update the time schedule for the google sheets import")),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"If a value for ",Object(i.b)("inlineCode",{parentName:"li"},"google_sheet_import_schedule")," is not provided, the import will run at 11pm on weekdays."),Object(i.b)("li",{parentName:"ul"},"To override and set a new time schedule, add a new row to the respective module with the new Cron time: e.g. ",Object(i.b)("inlineCode",{parentName:"li"},'google_sheet_import_schedule = "cron(0 23 ? * 1-5 *)"')),Object(i.b)("li",{parentName:"ul"},"To create a new Cron expression follow the guidance provided by the ",Object(i.b)("a",{parentName:"li",href:"https://docs.aws.amazon.com/AmazonCloudWatch/latest/events/ScheduledEvents.html#CronExpressions"},"AWS Cron Expression documentation"),"."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Committing your changes: The Data Platform team needs to approve any changes to the code, so your change won't happen automatically. To submit your change:"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Provide a description to explain what you've changed"),Object(i.b)("li",{parentName:"ul"},"Select the option to create a ",Object(i.b)("inlineCode",{parentName:"li"},"new branch")," for this commit (i.e. the code you've changed). You can just use the suggested name for your branch."),Object(i.b)("li",{parentName:"ul"},"Once you click 'Propose changes' you'll have the opportunity to add even more detail if needed before submitted for review. Once finished adding details, click \"Create pull request\"."),Object(i.b)("li",{parentName:"ul"},"You'll receive an email to confirm that your changes have been approved & then merged. After it has been merged into the main code base the job will run at the next scheduled time.")))),Object(i.b)("h3",{id:"running-the-import-manually"},"Running the import manually"),Object(i.b)("p",null,"Once you have been notified that your pull request has been merged, you can run the import manually from the AWS console or wait until the scheduled time (if you set one)."),Object(i.b)("p",null,"You can do this by navigating to ",Object(i.b)("a",{parentName:"p",href:"https://eu-west-2.console.aws.amazon.com/glue/home?region=eu-west-2#etl:tab=workflows"},"AWS glue workflows"),", selecting the workflow named ",Object(i.b)("inlineCode",{parentName:"p"},"<department_name>-<dataset_name>"),', clicking the "Actions" dropdown and then "Run".'))}p.isMDXComponent=!0}}]);