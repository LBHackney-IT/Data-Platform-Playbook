(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{125:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return d}));var n=a(0),o=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=o.a.createContext({}),p=function(e){var t=o.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(a),b=n,d=u["".concat(i,".").concat(b)]||u[b]||m[b]||r;return a?o.a.createElement(d,l(l({ref:t},c),{},{components:a})):o.a.createElement(d,l({ref:t},c))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<r;c++)i[c]=a[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"},84:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return p}));var n=a(3),o=a(7),r=(a(0),a(125)),i={title:"Ingest manually uploaded csv files",description:"Ingest data from csv files",layout:"playbook_js",tags:"playbook"},l={unversionedId:"playbook/ingest-data-from-csv-files",id:"playbook/ingest-data-from-csv-files",isDocsHomePage:!1,title:"Ingest manually uploaded csv files",description:"Ingest data from csv files",source:"@site/docs/playbook/ingest-data-from-csv-files.md",slug:"/playbook/ingest-data-from-csv-files",permalink:"/Data-Platform-Playbook/playbook/ingest-data-from-csv-files",editUrl:"https://github.com/LBHackney-IT/data-platform-playbook/edit/master/docs/playbook/ingest-data-from-csv-files.md",version:"current",sidebar:"docs",previous:{title:"Import XLXS from G Drive",permalink:"/Data-Platform-Playbook/playbook/import-xlsx-from-g-drive"},next:{title:"Onboarding new users to the platform",permalink:"/Data-Platform-Playbook/playbook/onboarding-new-users-to-the-platform"}},s=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Steps",id:"steps",children:[]},{value:"Confirm the import worked",id:"confirm-the-import-worked",children:[]}],c={toc:s};function p(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"You have some structured data files you wish to have available from the Data Platform"),Object(r.b)("li",{parentName:"ul"},"You have access to the Hackney Data Platform"),Object(r.b)("li",{parentName:"ul"},"The department you are placing this data into the data platform has the manual CSV upload\nfunctionality enabled.")),Object(r.b)("h2",{id:"steps"},"Steps"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Ensure your data meets the following requirments before proceeding."),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},'You have saved the data as a "CSV" file format, using a comma to separate fields.\nWhen ',Object(r.b)("a",{parentName:"li",href:"https://docs.workstars.com/en/latest/howto/save-csv-utf8.html"},"exporting from Excel"),', select the "CSV UTF-8" option.'),Object(r.b)("li",{parentName:"ul"},"The first row of the CSV contains the names of the columns as you wish them\nto appear within the Data Platform.\nIf there are any empty rows before the column names delete them before exporting\nthe file."))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Sign in to the AWS Management Console and open the ",Object(r.b)("a",{parentName:"p",href:"https://console.aws.amazon.com/s3/"},"Amazon S3 console"),".")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"In the Buckets list, select the landing zone bucket, at\n",Object(r.b)("a",{parentName:"p",href:"https://s3.console.aws.amazon.com/s3/buckets/dataplatform-stg-landing-zone?region=eu-west-2&tab=objects"},"dataplatform-stg-landing-zone"),".\nNavigate to your departments manual upload folder, see below for structure."),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre"},"<department>/\n\u2514\u2500\u2500 manual/\n"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Inside of the manual folder, create a new folder for the dataset you wish to create inside the data platform.\nThe name of the folder you create here will be used as the table name for the datasource throughout the platform.\nIf you are appending data to an already existing dataset, you can skip this step.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},'Inside of your dataset folder, upload a CSV containing your dataset by clicking the "Add files" button\nand selecting the local files you want to upload then afterwards click the "Upload" button.\nAlternatively, you can use "Add folder" taking care not to have any files in your local folder that you do not want to upload.\nAny CSVs uploaded within this folder will be combined into one dataset, and should have a matching set of columns.\nThe status of each file should say "Upload succeeded", then click on the "Close" button.')),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Now go to ",Object(r.b)("a",{parentName:"p",href:"https://eu-west-2.console.aws.amazon.com/glue/home?region=eu-west-2#etl:tab=jobs"},"AWS Glue Jobs"),", where you will run the job called\n",Object(r.b)("inlineCode",{parentName:"p"},"<department> copy manually uploaded CSVs to raw"),'.\nSelect this job and click the "Run job" option in the Action pull-down menu.\nIf a "Parameters" dialogue box appears then click "Run job".')),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},'Reselect the Job, observe the progress of its run within the "History" tab, and wait\nfor the "Run status" to reach "Succeeded".\nThis job will have created a S3 folder structure as shown below inside the ',Object(r.b)("a",{parentName:"p",href:"/Data-Platform-Playbook/zones#raw-zone"},"Raw zone"),"\nand an Apache Parquet file containing your CSV data inside of there.\nYou can check the output by navigating to S3 Bucket ",Object(r.b)("a",{parentName:"p",href:"https://s3.console.aws.amazon.com/s3/buckets/dataplatform-stg-raw-zone?region=eu-west-2&tab=objects"},"dataplatform-stg-raw-zone"),",\nconfirming the folder structure, and observing that Apache Parquet file(s) have been created."),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre"},"<department>/\n\u2514\u2500\u2500 manual/\n    \u2514\u2500\u2500 <dataset-name>/\n        \u2514\u2500\u2500 import_year=<year>/\n            \u2514\u2500\u2500 import_month=<month>/\n                \u2514\u2500\u2500 import_day=<day>/\n                    \u2514\u2500\u2500 import_date=<YYYYMMDD>\n                        \u2514\u2500\u2500 part-xxxxx-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx.xxxx.snappy.parquet\n")))),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"Files uploaded to the CSV folder will only be copied over to the raw zone once."),Object(r.b)("p",{parentName:"div"},'The job uses the CSVs "created at" timestamp to process only the CSVs which have been uploaded since the last time the job successfully ran.'))),Object(r.b)("h2",{id:"confirm-the-import-worked"},"Confirm the import worked"),Object(r.b)("p",null,"Next we'll confirm the data has been imported correctly by crawling the data with\n",Object(r.b)("a",{parentName:"p",href:"https://eu-west-2.console.aws.amazon.com/glue/home?region=eu-west-2#catalog:tab=crawlers"},"AWS Glue Crawler")," and then inspecting it within\n",Object(r.b)("a",{parentName:"p",href:"/Data-Platform-Playbook/playbook/querying-data-using-sql"},"AWS Athena"),"."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Before accessing the data within Athena, you will need to run the crawler for this data.\nNavigate to the ",Object(r.b)("a",{parentName:"p",href:"https://eu-west-2.console.aws.amazon.com/glue/home?region=eu-west-2#catalog:tab=crawlers"},"AWS Glue Crawler")," interface, select the crawler named\n",Object(r.b)("inlineCode",{parentName:"p"},"data-platform-stg-raw-zone-<department>-manual-uploads-crawler"),', then click on "Run crawler".\nWait until its status returns to "Ready".\nCheck the "Last runtime" of previous jobs to get an idea of how long you might have to wait.')),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Once crawled, there will be a newly created table within the database which you can access in ",Object(r.b)("a",{parentName:"p",href:"https://eu-west-2.console.aws.amazon.com/athena/home?region=eu-west-2#query"},"Athena")," as\n",Object(r.b)("inlineCode",{parentName:"p"},"<department>-raw-zone"),'.\nYou should see a table eg. "cake',"_",'designs" with the column names as per the CSV header.\nYou should also see various "import',"_",'..." columns at the end some of which are marked (Partitioned).\nYou can then view the newly imported tables under the tables tab.\nNote: The original names of the files, when they were uploaded, is not captured here at the moment.'))))}p.isMDXComponent=!0}}]);