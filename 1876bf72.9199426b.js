(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{117:function(e,t,o){"use strict";o.d(t,"a",(function(){return s})),o.d(t,"b",(function(){return d}));var a=o(0),n=o.n(a);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var p=n.a.createContext({}),b=function(e){var t=n.a.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},s=function(e){var t=b(e.components);return n.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=b(o),m=a,d=s["".concat(i,".").concat(m)]||s[m]||u[m]||r;return o?n.a.createElement(d,l(l({ref:t},p),{},{components:o})):n.a.createElement(d,l({ref:t},p))}));function d(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,i=new Array(r);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<r;p++)i[p]=o[p];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,o)}m.displayName="MDXCreateElement"},133:function(e,t,o){"use strict";o.r(t),t.default=o.p+"assets/images/google_spreadsheet_id_example-b0d0193617957f913c71663d81819975.png"},69:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return i})),o.d(t,"metadata",(function(){return l})),o.d(t,"toc",(function(){return c})),o.d(t,"default",(function(){return b}));var a=o(3),n=o(7),r=(o(0),o(117)),i={title:"Google Sheets import",description:"Google Sheets import description",layout:"playbook_js",tags:"playbook"},l={unversionedId:"playbook/google-sheets-import",id:"playbook/google-sheets-import",isDocsHomePage:!1,title:"Google Sheets import",description:"Google Sheets import description",source:"@site/docs/playbook/google-sheets-import.md",slug:"/playbook/google-sheets-import",permalink:"/Data-Platform-Playbook/playbook/google-sheets-import",editUrl:"https://github.com/LBHackney-IT/data-platform-playbook/edit/master/docs/playbook/google-sheets-import.md",version:"current",sidebar:"docs",previous:{title:"Exporting database snapshot to the Data Platform Landing Zone",permalink:"/Data-Platform-Playbook/playbook/exporting-snapshot-to-landing-zone"},next:{title:"Import files from google to s3",permalink:"/Data-Platform-Playbook/playbook/import-files-from-google-to-S3"}},c=[{value:"Preparing Google sheet for import",id:"preparing-google-sheet-for-import",children:[]},{value:"Getting Google sheet detail",id:"getting-google-sheet-detail",children:[]},{value:"Setting up AWS Glue job",id:"setting-up-aws-glue-job",children:[]}],p={toc:c};function b(e){var t=e.components,i=Object(n.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},p,i,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"preparing-google-sheet-for-import"},"Preparing Google sheet for import"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Open the Google sheet you would like to import"),Object(r.b)("li",{parentName:"ul"},"Ensure that all columns have headers. Columns without headers will be lost"),Object(r.b)("li",{parentName:"ul"},"Click ",Object(r.b)("inlineCode",{parentName:"li"},"Share")," in the top right corner of the sheet"),Object(r.b)("li",{parentName:"ul"},"If the document is unnamed, name it"),Object(r.b)("li",{parentName:"ul"},"Paste in the service account email address you have been provided into the email box"),Object(r.b)("li",{parentName:"ul"},"Ensure the suggested email matches the service account email and select it"),Object(r.b)("li",{parentName:"ul"},"On the new window, choose from the dropdown on the right hand side and select ",Object(r.b)("inlineCode",{parentName:"li"},"Viewer")),Object(r.b)("li",{parentName:"ul"},"Uncheck the ",Object(r.b)("inlineCode",{parentName:"li"},"Notify people")," checkbox"),Object(r.b)("li",{parentName:"ul"},"Click ",Object(r.b)("inlineCode",{parentName:"li"},"Share")),Object(r.b)("li",{parentName:"ul"},"You will be asked to confirm sharing outside the organisation, click ",Object(r.b)("inlineCode",{parentName:"li"},"share anyway")),Object(r.b)("li",{parentName:"ul"},"Your Google sheet is now available for import")),Object(r.b)("h2",{id:"getting-google-sheet-detail"},"Getting Google sheet detail"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"You will need to obtain the document key from the url")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"The document id is the portion of the url between ",Object(r.b)("inlineCode",{parentName:"p"},"https://docs.google.com/spreadsheets/d/")," and ",Object(r.b)("inlineCode",{parentName:"p"},"/edit#gid=0"),". See example below"),Object(r.b)("p",{parentName:"li"},Object(r.b)("img",{alt:"Google sheet id",src:o(133).default}))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"You will also need to obtain the worksheet name that you wish to have imported")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"The worksheet name is located at the bottom left of the screen and unless it has been changed or other worksheets added, it will be called ",Object(r.b)("inlineCode",{parentName:"p"},"Sheet1"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"To import multiple worksheets from the same Google sheet, repeat the instructions in the below section for each worksheet"))),Object(r.b)("h2",{id:"setting-up-aws-glue-job"},"Setting up AWS Glue job"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Before setting up an AWS Glue job, ensure that the relevant department configuration for that account is set up in AWS",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"see ",Object(r.b)("inlineCode",{parentName:"li"},"Adding a department")," section in ",Object(r.b)("inlineCode",{parentName:"li"},"managing-departments.md")))),Object(r.b)("li",{parentName:"ul"},"Open the ",Object(r.b)("a",{parentName:"li",href:"https://github.com/LBHackney-IT/data-platform"},"Data Platform Project"),". You'll need to have a Github account (which you can create yourself using your Hackney email) and have been added to the 'LBHackney-IT' team to view this project (you'll need to request this from Rashmi Shetty). If you don't have the correct permissions, you'll get a '404' error."),Object(r.b)("li",{parentName:"ul"},"Navigate to the main ",Object(r.b)("inlineCode",{parentName:"li"},"terraform")," directory (data-platform/terraform)"),Object(r.b)("li",{parentName:"ul"},"Open the ",Object(r.b)("inlineCode",{parentName:"li"},"22-aws-glue-jobs")," terraform file"),Object(r.b)("li",{parentName:"ul"},"Switch to 'edit mode' (using edit button on top right) "),Object(r.b)("li",{parentName:"ul"},"Copy one of the modules above, paste at the bottom of the file and update the following fields:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"module"),' = "your-unique-module-name" (it is helpful to keep the same naming convention as your dataset/folder)'),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"glue_job_name"),' = "Your AWS Glue job name" (this is what you\'ll see in the Glue console, please avoid using slashes ',Object(r.b)("inlineCode",{parentName:"li"},"/"),")"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"google_sheets_document_id"),' = "Your document id - see the ',Object(r.b)("inlineCode",{parentName:"li"},"Getting Google sheet detail"),' section above"'),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"google_sheets_worksheet_name"),' = "The name of your worksheet - see the ',Object(r.b)("inlineCode",{parentName:"li"},"Getting Google sheet detail"),' section above" '),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"department_folder_name"),' = "The name of the department folder you would like to store in e.g. ',Object(r.b)("inlineCode",{parentName:"li"},"housing"),", ",Object(r.b)("inlineCode",{parentName:"li"},"social-care"),"\" (if this folder doesn't already exist in S3 you can name it here and this script will create it)"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"output_folder_name"),' = "The name of the folder you would like to store in under the department e.g. ',Object(r.b)("inlineCode",{parentName:"li"},"housing-repair"),"\" (if this folder doesn't already exist in S3 you can name it here and this script will create it)")))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("em",{parentName:"p"},"Optional: update the time schedule for the import job to run")),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"By default, the import job will run every weekday at 11pm which is set using Cron time format if 'enable_glue_trigger' is not specified (i.e. there's no line for this in your module) or it's set to 'true'. If this is set to 'false' then your job will not run automatically on a schedule, and will have to be run manually within AWS."),Object(r.b)("li",{parentName:"ul"},"To create a new Cron time use a ",Object(r.b)("a",{parentName:"li",href:"https://www.freeformatter.com/cron-expression-generator-quartz.html"},"Cron Expression Generator")),Object(r.b)("li",{parentName:"ul"},"To override and set a new time schedule, add a new row to the respective module with the new Cron time: e.g. ",Object(r.b)("inlineCode",{parentName:"li"},'google_sheet_import_schedule = "cron(0 23 ? * 1-5 *)"')),Object(r.b)("li",{parentName:"ul"},"Note you cannot make a change to the cron schedule at the same time as setting ",Object(r.b)("inlineCode",{parentName:"li"},"enable_glue_trigger")," to false"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Committing your changes: The Data Platform team needs to approve any changes to the code, so your change won't happen automatically. To submit your change:"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Provide a description to explain what you've changed"),Object(r.b)("li",{parentName:"ul"},"Select the option to create a ",Object(r.b)("inlineCode",{parentName:"li"},"new branch")," for this commit (i.e. the code you've changed). You can just use the suggested name for your branch."),Object(r.b)("li",{parentName:"ul"},"Once you click 'Propose changes' you'll have the opportunity to add even more detail if needed before submitted for review."),Object(r.b)("li",{parentName:"ul"},"You'll receive an email to confirm that your changes have been approved.")))))}b.isMDXComponent=!0}}]);