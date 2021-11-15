"use strict";(self.webpackChunkdata_platform_playbook=self.webpackChunkdata_platform_playbook||[]).push([[5074],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return m}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(a),m=o,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||r;return a?n.createElement(h,i(i({ref:t},u),{},{components:a})):n.createElement(h,i({ref:t},u))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},4792:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var n=a(7462),o=a(3366),r=(a(7294),a(3905)),i=["components"],l={title:"Ingest manually uploaded csv files",description:"Ingest data from csv files",layout:"playbook_js",tags:["playbook"]},s=void 0,p={unversionedId:"playbook/ingesting-data/ingest-data-from-csv-files",id:"playbook/ingesting-data/ingest-data-from-csv-files",isDocsHomePage:!1,title:"Ingest manually uploaded csv files",description:"Ingest data from csv files",source:"@site/docs/playbook/ingesting-data/ingest-data-from-csv-files.md",sourceDirName:"playbook/ingesting-data",slug:"/playbook/ingesting-data/ingest-data-from-csv-files",permalink:"/Data-Platform-Playbook/playbook/ingesting-data/ingest-data-from-csv-files",editUrl:"https://github.com/LBHackney-IT/data-platform-playbook/edit/master/docs/playbook/ingesting-data/ingest-data-from-csv-files.md",tags:[{label:"playbook",permalink:"/Data-Platform-Playbook/tags/playbook"}],version:"current",frontMatter:{title:"Ingest manually uploaded csv files",description:"Ingest data from csv files",layout:"playbook_js",tags:["playbook"]},sidebar:"docs",previous:{title:"Import XLXS from G Drive",permalink:"/Data-Platform-Playbook/playbook/ingesting-data/import-xlsx-from-g-drive"},next:{title:"Guide to testing data quality in Glue Jobs",permalink:"/Data-Platform-Playbook/playbook/transforming-data/guides-to-testing-in-the-platform/data-quality-testing-guide"}},u=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Steps",id:"steps",children:[]},{value:"Confirm the import worked",id:"confirm-the-import-worked",children:[]}],c={toc:u};function d(e){var t=e.components,a=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You have some structured data files you wish to have available from the Data Platform"),(0,r.kt)("li",{parentName:"ul"},"You have access to the Hackney Data Platform"),(0,r.kt)("li",{parentName:"ul"},"The department you are placing this data into the data platform has the manual CSV upload\nfunctionality enabled.")),(0,r.kt)("h2",{id:"steps"},"Steps"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Ensure your data meets the following requirments before proceeding."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},'You have saved the data as a "CSV" file format, using a comma to separate fields.\nWhen ',(0,r.kt)("a",{parentName:"li",href:"https://docs.workstars.com/en/latest/howto/save-csv-utf8.html"},"exporting from Excel"),', select the "CSV UTF-8" option.'),(0,r.kt)("li",{parentName:"ul"},"The first row of the CSV contains the names of the columns as you wish them\nto appear within the Data Platform.\nIf there are any empty rows before the column names delete them before exporting\nthe file."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Sign in to the AWS Management Console and open the ",(0,r.kt)("a",{parentName:"p",href:"https://console.aws.amazon.com/s3/"},"Amazon S3 console"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"In the Buckets list, select the landing zone bucket, at\n",(0,r.kt)("a",{parentName:"p",href:"https://s3.console.aws.amazon.com/s3/buckets/dataplatform-stg-landing-zone?region=eu-west-2&tab=objects"},"dataplatform-stg-landing-zone"),".\nNavigate to your departments manual upload folder, see below for structure."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"<department>/\n\u2514\u2500\u2500 manual/\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Inside of the manual folder, create a new folder for the dataset you wish to create inside the data platform.\nThe name of the folder you create here will be used as the table name for the datasource throughout the platform.\nIf you are appending data to an already existing dataset, you can skip this step.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'Inside of your dataset folder, upload a CSV containing your dataset by clicking the "Add files" button\nand selecting the local files you want to upload then afterwards click the "Upload" button.\nAlternatively, you can use "Add folder" taking care not to have any files in your local folder that you do not want to upload.\nAny CSVs uploaded within this folder will be combined into one dataset, and should have a matching set of columns.\nThe status of each file should say "Upload succeeded", then click on the "Close" button.')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Now go to ",(0,r.kt)("a",{parentName:"p",href:"https://eu-west-2.console.aws.amazon.com/glue/home?region=eu-west-2#etl:tab=jobs"},"AWS Glue Jobs"),", where you will run the job called\n",(0,r.kt)("inlineCode",{parentName:"p"},"<department> copy manually uploaded CSVs to raw"),'.\nSelect this job and click the "Run job" option in the Action pull-down menu.\nIf a "Parameters" dialogue box appears then click "Run job".')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'Reselect the Job, observe the progress of its run within the "History" tab, and wait\nfor the "Run status" to reach "Succeeded".\nThis job will have created a S3 folder structure as shown below inside the ',(0,r.kt)("a",{parentName:"p",href:"/Data-Platform-Playbook/zones#raw-zone"},"Raw zone"),"\nand an Apache Parquet file containing your CSV data inside of there.\nYou can check the output by navigating to S3 Bucket ",(0,r.kt)("a",{parentName:"p",href:"https://s3.console.aws.amazon.com/s3/buckets/dataplatform-stg-raw-zone?region=eu-west-2&tab=objects"},"dataplatform-stg-raw-zone"),",\nconfirming the folder structure, and observing that Apache Parquet file(s) have been created."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"<department>/\n\u2514\u2500\u2500 manual/\n    \u2514\u2500\u2500 <dataset-name>/\n        \u2514\u2500\u2500 import_year=<year>/\n            \u2514\u2500\u2500 import_month=<month>/\n                \u2514\u2500\u2500 import_day=<day>/\n                    \u2514\u2500\u2500 import_date=<YYYYMMDD>\n                        \u2514\u2500\u2500 part-xxxxx-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx.xxxx.snappy.parquet\n")))),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Files uploaded to the CSV folder will only be copied over to the raw zone once."),(0,r.kt)("p",{parentName:"div"},'The job uses the CSVs "created at" timestamp to process only the CSVs which have been uploaded since the last time the job successfully ran.'))),(0,r.kt)("h2",{id:"confirm-the-import-worked"},"Confirm the import worked"),(0,r.kt)("p",null,"Next we'll confirm the data has been imported correctly by crawling the data with\n",(0,r.kt)("a",{parentName:"p",href:"https://eu-west-2.console.aws.amazon.com/glue/home?region=eu-west-2#catalog:tab=crawlers"},"AWS Glue Crawler")," and then inspecting it within\n",(0,r.kt)("a",{parentName:"p",href:"../querying-data/querying-data-using-sql.md"},"AWS Athena"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Before accessing the data within Athena, you will need to run the crawler for this data.\nNavigate to the ",(0,r.kt)("a",{parentName:"p",href:"https://eu-west-2.console.aws.amazon.com/glue/home?region=eu-west-2#catalog:tab=crawlers"},"AWS Glue Crawler")," interface, select the crawler named ",(0,r.kt)("inlineCode",{parentName:"p"},"<department>-copy-manually-uploaded-csvs-to-raw"),', then click on "Run crawler".\nWait until its status returns to "Ready".\nCheck the "Last runtime" of previous jobs to get an idea of how long you might have to wait.')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Once crawled, there will be a newly created table within the database which you can access in ",(0,r.kt)("a",{parentName:"p",href:"https://eu-west-2.console.aws.amazon.com/athena/home?region=eu-west-2#query"},"Athena")," as\n",(0,r.kt)("inlineCode",{parentName:"p"},"<department>-raw-zone"),'.\nYou should see a table eg. "cake_designs" with the column names as per the CSV header.\nYou should also see various "import',"_",'..." columns at the end some of which are marked (Partitioned).\nYou can then view the newly imported tables under the tables tab.\nNote: The original names of the files, when they were uploaded, is not captured here at the moment.'))))}d.isMDXComponent=!0}}]);