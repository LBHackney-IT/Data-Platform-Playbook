"use strict";(self.webpackChunkdata_platform_playbook=self.webpackChunkdata_platform_playbook||[]).push([[2026],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return h}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=p(a),h=r,c=u["".concat(s,".").concat(h)]||u[h]||d[h]||o;return a?n.createElement(c,i(i({ref:t},m),{},{components:a})):n.createElement(c,i({ref:t},m))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},5442:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return d}});var n=a(3117),r=a(102),o=(a(7294),a(3905)),i=["components"],l={title:"Ingest spreadsheet files from G Drive",description:"Ingest spreadsheet files from G Drive description",layout:"playbook_js",tags:["playbook"]},s=void 0,p={unversionedId:"playbook/ingesting-data/ingest-spreadsheet-files-from-g-drive",id:"playbook/ingesting-data/ingest-spreadsheet-files-from-g-drive",title:"Ingest spreadsheet files from G Drive",description:"Ingest spreadsheet files from G Drive description",source:"@site/docs/playbook/ingesting-data/004-ingest-spreadsheet-files-from-g-drive.md",sourceDirName:"playbook/ingesting-data",slug:"/playbook/ingesting-data/ingest-spreadsheet-files-from-g-drive",permalink:"/Data-Platform-Playbook/playbook/ingesting-data/ingest-spreadsheet-files-from-g-drive",draft:!1,editUrl:"https://github.com/LBHackney-IT/data-platform-playbook/edit/master/docs/playbook/ingesting-data/004-ingest-spreadsheet-files-from-g-drive.md",tags:[{label:"playbook",permalink:"/Data-Platform-Playbook/tags/playbook"}],version:"current",sidebarPosition:4,frontMatter:{title:"Ingest spreadsheet files from G Drive",description:"Ingest spreadsheet files from G Drive description",layout:"playbook_js",tags:["playbook"]},sidebar:"docs",previous:{title:"Ingest manually uploaded csv files",permalink:"/Data-Platform-Playbook/playbook/ingesting-data/manual-ingest-of-csv-files"},next:{title:"Ingesting RDS snapshot into the Data Platform Landing Zone",permalink:"/Data-Platform-Playbook/playbook/ingesting-data/ingesting-rds-snapshot-in-landing-zone"}},m={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Permitted spreadsheet file types",id:"permitted-spreadsheet-file-types",level:2},{value:"Preparing the spreadsheet for ingestion",id:"preparing-the-spreadsheet-for-ingestion",level:2},{value:"Getting spreadsheet detail",id:"getting-spreadsheet-detail",level:2},{value:"Setting up AWS Glue job",id:"setting-up-aws-glue-job",level:2}],u={toc:d};function h(e){var t=e.components,l=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You have a Github account, you can ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/signup"},"create one")," yourself using your Hackney email."),(0,o.kt)("li",{parentName:"ul"},"You have been added to the 'LBHackney-IT' team, you can request this from Rashmi Shetty."),(0,o.kt)("li",{parentName:"ul"},"You have a Data Platform service account email address for your relevant domain or service area. A service account would look something like this: ",(0,o.kt)("a",{parentName:"li",href:"mailto:dataplatform-prod-service_area@dataplatform-prod.iam.gserviceaccount.com."},"dataplatform-prod-service_area@dataplatform-prod.iam.gserviceaccount.com.")," If you don't know which service account you should use, you can request this from the Data Platform team.")),(0,o.kt)("h2",{id:"permitted-spreadsheet-file-types"},"Permitted spreadsheet file types"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},".xlsx"),(0,o.kt)("li",{parentName:"ul"},".csv")),(0,o.kt)("h2",{id:"preparing-the-spreadsheet-for-ingestion"},"Preparing the spreadsheet for ingestion"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Please follow this guide for each spreadsheet file you wish to ingest onto the platform"),(0,o.kt)("li",{parentName:"ul"},"Check that your file is in the list of allowed file types for this process"),(0,o.kt)("li",{parentName:"ul"},"Ensure that all columns in your file have headers. Columns without headers will be lost."),(0,o.kt)("li",{parentName:"ul"},"If your spreadsheet file is stored on your local device, ",(0,o.kt)("a",{parentName:"li",href:"https://www.howtogeek.com/398570/how-to-import-an-excel-document-into-google-sheets/"},"upload it to google drive"),"."),(0,o.kt)("li",{parentName:"ul"},"If the document is unnamed, name it"),(0,o.kt)("li",{parentName:"ul"},"You now need to share this file with the service account you've been provided. One way to do this is to open the spreadsheet you would like to ingest from Google drive and view it as if it were a Google Sheet. Once you've opened the document, click ",(0,o.kt)("inlineCode",{parentName:"li"},"Share")," in the top right corner of the sheet. If your spreadsheet file is very large and you're having trouble opening the file in Sheets, you can right-click the file listed in Drive and click ",(0,o.kt)("inlineCode",{parentName:"li"},"Share"),"."),(0,o.kt)("li",{parentName:"ul"},"Paste in the service account email address you have been provided into the email box"),(0,o.kt)("li",{parentName:"ul"},"Ensure the suggested email matches the service account email and select it"),(0,o.kt)("li",{parentName:"ul"},"On the new window, choose from the dropdown on the right hand side and select ",(0,o.kt)("inlineCode",{parentName:"li"},"Viewer")),(0,o.kt)("li",{parentName:"ul"},"Uncheck the ",(0,o.kt)("inlineCode",{parentName:"li"},"Notify people")," checkbox"),(0,o.kt)("li",{parentName:"ul"},"Click ",(0,o.kt)("inlineCode",{parentName:"li"},"Share")),(0,o.kt)("li",{parentName:"ul"},"You will be asked to confirm sharing outside the organisation, click ",(0,o.kt)("inlineCode",{parentName:"li"},"share anyway")," (Note that these service accounts are Hackney accounts, but aren't recognised by Google the same way that individual user accounts are recognised as being within Hackney.)"),(0,o.kt)("li",{parentName:"ul"},"Your spreadsheet is now ready to ingest")),(0,o.kt)("h2",{id:"getting-spreadsheet-detail"},"Getting spreadsheet detail"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"You will need to obtain the document ID from the URL.\nYou can view the document URL by right-clicking the file and selecting ",(0,o.kt)("inlineCode",{parentName:"p"},"Get link"),".\nThe document ID is the portion of the URL between ",(0,o.kt)("inlineCode",{parentName:"p"},"https://docs.google.com/file/d/")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"/edit#gid=0"),". See example below"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"spreadsheet id",src:a(1146).Z,width:"1336",height:"60"}))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"For ",(0,o.kt)("inlineCode",{parentName:"strong"},".xlsx")," files only")," - You will also need to obtain the worksheet name(s) that you wish to ingest.\nThe worksheet name is located at the bottom left of the screen and unless it has been changed or other worksheets added, it will be called ",(0,o.kt)("inlineCode",{parentName:"p"},"Sheet1")))),(0,o.kt)("h2",{id:"setting-up-aws-glue-job"},"Setting up AWS Glue job"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Open the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/LBHackney-IT/data-platform"},"Data Platform Project")," repository in Github. If you don't have the correct permissions, you'll get a '404' error (see ",(0,o.kt)("a",{parentName:"p",href:"#prerequisites"},"prerequisites"),").")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Navigate to the ",(0,o.kt)("inlineCode",{parentName:"p"},"terraform/etl")," directory, and open ",(0,o.kt)("inlineCode",{parentName:"p"},"09-spreadsheet-imports-from-g-drive.tf"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Switch to 'edit mode' (using edit button on top right)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Copy one of the modules above, paste at the bottom of the file and update the following fields:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Update the ",(0,o.kt)("strong",{parentName:"p"},"module")," name to something unique using the name convention: ",(0,o.kt)("inlineCode",{parentName:"p"},'"<department_name>_<dataset_name>"')),(0,o.kt)("p",{parentName:"li"},"For example: "),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},'"parking_pcn_permit_nlpg_llpg_matching_via_athena_20220516"\n')),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("em",{parentName:"p"},"Note: Only use underscores (",(0,o.kt)("inlineCode",{parentName:"em"},"_"),") to separate words, do not use hyphens (",(0,o.kt)("inlineCode",{parentName:"em"},"-"),") or spaces")," ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"department")," (required): This will be ",(0,o.kt)("inlineCode",{parentName:"p"},"module.department_<YOUR_DEPARTMENT_NAME>"),"\nFor example:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"department = module.department_parking\n")),(0,o.kt)("p",{parentName:"li"}," ",(0,o.kt)("em",{parentName:"p"},"Note: the department name must be all lowercase and separated by underscores\ne.g. ",(0,o.kt)("inlineCode",{parentName:"em"},"module.department_housing_repairs")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"google_sheets_document_id")," (required): Your document id - see the ",(0,o.kt)("strong",{parentName:"p"},"Getting spreadsheet detail")," section above")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"glue_job_name")," (required): Name that will be displayed in the Data Platform Glue Studio Console prefixed by ",(0,o.kt)("inlineCode",{parentName:"p"},'"Spreadsheet Import Job"')," followed by your department name.\n",(0,o.kt)("em",{parentName:"p"},"Note: Ensure this name is unique to other Glue job names by appending the date to the name.")),(0,o.kt)("p",{parentName:"li"},"For example:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},'glue_job_name = "PCN Permits VRM NLPG LLPG - 20220516" \n'))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"output_folder_name")," (required): Name of the folder where this data will be exported to.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"input_file_name")," (required): The name of the file you are ingesting from.\nThis should be the same as the file name in Google Drive.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"worksheets")," (required):\nThe name of the worksheet(s) to import. It will also be the name(s) of the resulting table(s) in the Glue catalogue."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("em",{parentName:"p"},"If the sheet you are ingesting is an ",(0,o.kt)("strong",{parentName:"em"},(0,o.kt)("inlineCode",{parentName:"strong"},".xlsx"))," file type:")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"List out each worksheet that needs to be ingested in a map containing the ",(0,o.kt)("inlineCode",{parentName:"p"},"header_row_number"),", and the ",(0,o.kt)("inlineCode",{parentName:"p"},"worksheet_name")," - see the ",(0,o.kt)("strong",{parentName:"p"},"Getting spreadsheet detail")," section above (if unsure on how to set this, refer to a previous module block and use as an example). ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The worksheet name needs to match exactly (including any spaces or punctuation, but excluding any slashes ",(0,o.kt)("inlineCode",{parentName:"p"},"/"),"), so you may want to copy and paste the name directly from your worksheet.\nIf you need to add more sheets, you can copy and paste this section and continue numbering (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"sheet1"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"sheet2")," etc).\nRemove any worksheet sections you don't need."),(0,o.kt)("p",{parentName:"li"},"  For example:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},'worksheets = {\n  sheet1 : {\n    header_row_number = 1\n    worksheet_name    = "Sheet 1"\n  }\n  sheet2 : {\n    header_row_number = 1\n    worksheet_name    = "Sheet 2"\n  }\n}\n'))))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("em",{parentName:"p"},"If the sheet you are ingesting is a ",(0,o.kt)("strong",{parentName:"em"},(0,o.kt)("inlineCode",{parentName:"strong"},".csv"))," file type:")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Set the ",(0,o.kt)("inlineCode",{parentName:"p"},"header_row_number")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"0")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"worksheet_name")," to the name of dataset that the data relates to. Remember this will also be the name of the table in the Glue catalogue."),(0,o.kt)("p",{parentName:"li"},"For example, if the file name is:\n",(0,o.kt)("inlineCode",{parentName:"p"},"Voucher Import.csv"),"\nthen it would look something like:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},'worksheets = {\n  sheet1 : {\n    header_row_number = 0\n    worksheet_name    = "Visitor_Voucher_Forecast"\n  }\n}\n'))))))))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Submit your changes by referring to the ",(0,o.kt)("a",{parentName:"p",href:"../getting-set-up/using-github#committing-your-changes-to-the-data-platform-project"},"Committing changes")," section of the ",(0,o.kt)("strong",{parentName:"p"},"Using Github")," guide."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"The Data Platform team needs to approve any changes to the code, so your change won't happen automatically."),(0,o.kt)("li",{parentName:"ul"},"Once your code has been approved and deployed, your sheet will be available in your respective department's raw zone area (S3 and Athena - Glue Catalog Database) by 8am the following morning. ")))))}h.isMDXComponent=!0},1146:function(e,t,a){t.Z=a.p+"assets/images/google_spreadsheet_id_example-b0d0193617957f913c71663d81819975.png"}}]);