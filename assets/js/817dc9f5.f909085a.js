"use strict";(self.webpackChunkdata_platform_playbook=self.webpackChunkdata_platform_playbook||[]).push([[6383],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return c}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(a),c=i,h=m["".concat(s,".").concat(c)]||m[c]||u[c]||o;return a?n.createElement(h,r(r({ref:t},d),{},{components:a})):n.createElement(h,r({ref:t},d))}));function c(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var p=2;p<o;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},365:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var n=a(3117),i=a(102),o=(a(7294),a(3905)),r=["components"],l={title:"Ingest spreadsheet files from G Drive",description:"Ingest spreadsheet files from G Drive description",layout:"playbook_js",tags:["playbook"]},s=void 0,p={unversionedId:"playbook/ingesting-data/ingest-spreadsheet-files-from-g-drive",id:"playbook/ingesting-data/ingest-spreadsheet-files-from-g-drive",title:"Ingest spreadsheet files from G Drive",description:"Ingest spreadsheet files from G Drive description",source:"@site/docs/playbook/ingesting-data/003-ingest-spreadsheet-files-from-g-drive.md",sourceDirName:"playbook/ingesting-data",slug:"/playbook/ingesting-data/ingest-spreadsheet-files-from-g-drive",permalink:"/Data-Platform-Playbook/playbook/ingesting-data/ingest-spreadsheet-files-from-g-drive",draft:!1,editUrl:"https://github.com/LBHackney-IT/data-platform-playbook/edit/master/docs/playbook/ingesting-data/003-ingest-spreadsheet-files-from-g-drive.md",tags:[{label:"playbook",permalink:"/Data-Platform-Playbook/tags/playbook"}],version:"current",sidebarPosition:3,frontMatter:{title:"Ingest spreadsheet files from G Drive",description:"Ingest spreadsheet files from G Drive description",layout:"playbook_js",tags:["playbook"]},sidebar:"docs",previous:{title:"Ingest manually uploaded csv files",permalink:"/Data-Platform-Playbook/playbook/ingesting-data/manual-ingest-of-csv-files"},next:{title:"Ingesting RDS snapshot into the Data Platform Landing Zone",permalink:"/Data-Platform-Playbook/playbook/ingesting-data/ingesting-rds-snapshot-in-landing-zone"}},d={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Permitted spreadsheet file types",id:"permitted-spreadsheet-file-types",level:2},{value:"Preparing the spreadsheet for ingestion",id:"preparing-the-spreadsheet-for-ingestion",level:2},{value:"Getting spreadsheet detail",id:"getting-spreadsheet-detail",level:2},{value:"Setting up AWS Glue job",id:"setting-up-aws-glue-job",level:2}],m={toc:u};function c(e){var t=e.components,l=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,n.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You have a Github account, you can ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/signup"},"create one")," yourself using your Hackney email."),(0,o.kt)("li",{parentName:"ul"},"You have been added to the 'LBHackney-IT' team, you can request this from Rashmi Shetty."),(0,o.kt)("li",{parentName:"ul"},"You have a Data Platform service account email address for your relevant domain or service area. A service account would look something like this: ",(0,o.kt)("a",{parentName:"li",href:"mailto:dataplatform-stg-service_area@dataplatform-stg.iam.gserviceaccount.com."},"dataplatform-stg-service_area@dataplatform-stg.iam.gserviceaccount.com.")," If you don't know which service account you should use, you can request this from the Data Platform team.")),(0,o.kt)("h2",{id:"permitted-spreadsheet-file-types"},"Permitted spreadsheet file types"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},".xlsx"),(0,o.kt)("li",{parentName:"ul"},".csv")),(0,o.kt)("h2",{id:"preparing-the-spreadsheet-for-ingestion"},"Preparing the spreadsheet for ingestion"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Check that your file is in the list of allowed file types for this process"),(0,o.kt)("li",{parentName:"ul"},"Ensure that all columns in your file have headers. Columns without headers will be lost."),(0,o.kt)("li",{parentName:"ul"},"If your spreadsheet file is stored on your local device, ",(0,o.kt)("a",{parentName:"li",href:"https://www.howtogeek.com/398570/how-to-import-an-excel-document-into-google-sheets/"},"upload it to google drive"),"."),(0,o.kt)("li",{parentName:"ul"},"If the document is unnamed, name it"),(0,o.kt)("li",{parentName:"ul"},"You now need to share this file with the service account you've been provided. One way to do this is to open the spreadsheet you would like to ingest from Google drive and view it as if it were a Google Sheet. Once you've opened the document, click ",(0,o.kt)("inlineCode",{parentName:"li"},"Share")," in the top right corner of the sheet. If your spreadsheet file is very large and you're having trouble opening the file in Sheets, you can right-click the file listed in Drive and click ",(0,o.kt)("inlineCode",{parentName:"li"},"Share"),"."),(0,o.kt)("li",{parentName:"ul"},"Paste in the service account email address you have been provided into the email box"),(0,o.kt)("li",{parentName:"ul"},"Ensure the suggested email matches the service account email and select it"),(0,o.kt)("li",{parentName:"ul"},"On the new window, choose from the dropdown on the right hand side and select ",(0,o.kt)("inlineCode",{parentName:"li"},"Viewer")),(0,o.kt)("li",{parentName:"ul"},"Uncheck the ",(0,o.kt)("inlineCode",{parentName:"li"},"Notify people")," checkbox"),(0,o.kt)("li",{parentName:"ul"},"Click ",(0,o.kt)("inlineCode",{parentName:"li"},"Share")),(0,o.kt)("li",{parentName:"ul"},"You will be asked to confirm sharing outside the organisation, click ",(0,o.kt)("inlineCode",{parentName:"li"},"share anyway")," (Note that these service accounts are Hackney accounts, but aren't recognised by Google the same way that individual user accounts are recognised as being within Hackney.)"),(0,o.kt)("li",{parentName:"ul"},"Your spreadsheet is now ready to ingest")),(0,o.kt)("h2",{id:"getting-spreadsheet-detail"},"Getting spreadsheet detail"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"You will need to obtain the document key from the url. The document id is the portion of the url between ",(0,o.kt)("inlineCode",{parentName:"p"},"https://docs.google.com/file/d/")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"/edit#gid=0"),". See example below"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"spreadsheet id",src:a(1146).Z,width:"1336",height:"60"}))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"You will also need to obtain the worksheet name(s) that you wish to ingest. The worksheet name is located at the bottom left of the screen and unless it has been changed or other worksheets added, it will be called ",(0,o.kt)("inlineCode",{parentName:"p"},"Sheet1")))),(0,o.kt)("h2",{id:"setting-up-aws-glue-job"},"Setting up AWS Glue job"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Open the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/LBHackney-IT/data-platform"},"Data Platform Project")," repository in Github. If you don't have the correct permissions, you'll get a '404' error (see ",(0,o.kt)("a",{parentName:"p",href:"#prerequisites"},"prerequisites"),").")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Navigate to the main ",(0,o.kt)("inlineCode",{parentName:"p"},"terraform")," directory, and open ",(0,o.kt)("inlineCode",{parentName:"p"},"27-spreadsheet-imports-from-g-drive.tf"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Switch to 'edit mode' (using edit button on top right)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Copy one of the modules above, paste at the bottom of the file and update the following fields:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"module"),' = "your-unique-module-name" (it is helpful to keep the same naming convention as your dataset/folder)'),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"google_sheets_document_id"),' = "Your document id - see the ',(0,o.kt)("inlineCode",{parentName:"li"},"Getting spreadsheet detail"),' section above"'),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"glue_job_name"),' = "Name that will be displayed in the data platform"'),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"department_folder_name"),' = "Name of the department this data belongs to"'),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"output_folder_name"),' = "Name of the folder where this data will be exported to"'),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"input_file_name"),' = "The name of the file you are ingesting from"'),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"worksheets")," = Each worksheet that needs to be ingested should be listed out in a map containing the header row number and the name of your worksheet - see the ",(0,o.kt)("inlineCode",{parentName:"li"},"Getting spreadsheet detail")," section above. The worksheet name needs to match exactly (including any spaces or punctuation, but excluding any slashes ",(0,o.kt)("inlineCode",{parentName:"li"},"/"),"), so you may want to copy and paste the name directly from your worksheet. If you need to add more sheets, you can copy and paste this section and continue numbering (e.g. sheet3, sheet4 etc). Remove any worksheet sections you don't need."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Submit your changes by referring to the ",(0,o.kt)("a",{parentName:"p",href:"../getting-set-up/using-github#committing-your-changes-to-the-data-platform-project"},"Committing changes")," section of the ",(0,o.kt)("strong",{parentName:"p"},"Using Github")," guide."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"The Data Platform team needs to approve any changes to the code, so your change won't happen automatically.")))))}c.isMDXComponent=!0},1146:function(e,t,a){t.Z=a.p+"assets/images/google_spreadsheet_id_example-b0d0193617957f913c71663d81819975.png"}}]);