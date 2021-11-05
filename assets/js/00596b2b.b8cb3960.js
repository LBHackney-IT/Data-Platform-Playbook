"use strict";(self.webpackChunkdata_platform_playbook=self.webpackChunkdata_platform_playbook||[]).push([[954],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return c}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(a),c=r,h=m["".concat(s,".").concat(c)]||m[c]||d[c]||o;return a?n.createElement(h,i(i({ref:t},u),{},{components:a})):n.createElement(h,i({ref:t},u))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},4815:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),i=["components"],l={title:"Glue Studio workshop with Parking Analysts",description:"",tags:null,layout:"layout"},s=void 0,p={unversionedId:"workshop/aws_glue_studio_parking",id:"workshop/aws_glue_studio_parking",isDocsHomePage:!1,title:"Glue Studio workshop with Parking Analysts",description:"",source:"@site/docs/workshop/aws_glue_studio_parking.md",sourceDirName:"workshop",slug:"/workshop/aws_glue_studio_parking",permalink:"/Data-Platform-Playbook/workshop/aws_glue_studio_parking",editUrl:"https://github.com/LBHackney-IT/data-platform-playbook/edit/master/docs/workshop/aws_glue_studio_parking.md",tags:[],version:"current",frontMatter:{title:"Glue Studio workshop with Parking Analysts",description:"",tags:null,layout:"layout"}},u=[{value:"Prerequisities",id:"prerequisities",children:[]},{value:"Learning objectives",id:"learning-objectives",children:[]},{value:"Introduction",id:"introduction",children:[]},{value:"Prototyping your transformation using Presto SQL",id:"prototyping-your-transformation-using-presto-sql",children:[]},{value:"Moving your query to AWS Glue Studio",id:"moving-your-query-to-aws-glue-studio",children:[]},{value:"Cleaning up",id:"cleaning-up",children:[]}],d={toc:u};function m(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"prerequisities"},"Prerequisities"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Have access to the Parking Liberator Raw zone."),(0,o.kt)("li",{parentName:"ul"},"Have experience with writing SQL queries in ",(0,o.kt)("a",{parentName:"li",href:"/Data-Platform-Playbook/playbook/querying-data/querying-data-using-sql"},"AWS Athena")," already."),(0,o.kt)("li",{parentName:"ul"},"Have experience running AWS Glue Crawlers.")),(0,o.kt)("h2",{id:"learning-objectives"},"Learning objectives"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Know how to create a batch transformation job written in SparkSQL, hosted inside of AWS Glue Studio."),(0,o.kt)("li",{parentName:"ul"},"Aware there are differences between the Presto SQL language, and SparkSQL lanugage.")),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"As part of this workshop, we will be using ",(0,o.kt)("a",{parentName:"p",href:"https://spark.apache.org/"},"Apache Spark")," to perform batch\ntransformation on the Hackney parking Liberator dataset."),(0,o.kt)("p",null,"The Data Platform provides a managed installation of Apache Spark called AWS Glue Studio.\nWe'll be using this tool to create an AWS Glue job which will aggregate permit renewal\ninformation."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://spark.apache.org/docs/latest/api/sql/index.html"},"SparkSQL")," is a SQL API on top of the Spark batch processing engine.\nAWS Glue Studio also provide support for writing jobs in the ",(0,o.kt)("a",{parentName:"p",href:"https://www.python.org/"},"Python"),"\nand ",(0,o.kt)("a",{parentName:"p",href:"https://www.scala-lang.org/"},"Scala")," programming languages, if you prefer those."),(0,o.kt)("p",null,"This guide takes the reader through using SparkSQL, and assumes experience of writing\nand debugging SQL queries."),(0,o.kt)("p",null,"Once written, AWS Glue batch jobs can be scheduled to run unattended over very large\ndatasets."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Throughout this documentation, whereever you see ",(0,o.kt)("strong",{parentName:"p"},"NAME"),', replace this with your name\ne.g. "adrian".'),(0,o.kt)("p",{parentName:"div"},"This is so that this guide can be performed independently by multiple people at the same time.\nWhen writing jobs outside of this guide, you don't need to follow this convention."))),(0,o.kt)("h2",{id:"prototyping-your-transformation-using-presto-sql"},"Prototyping your transformation using Presto SQL"),(0,o.kt)("p",null,"Imagine we want to perform analysis on the number and duration of parking permit renewals."),(0,o.kt)("p",null,"We first prototype our query inside of AWS Athena using its Presto SQL language."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Exercise")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Create an SQL query for ",(0,o.kt)("a",{parentName:"p",href:"https://eu-west-2.console.aws.amazon.com/athena/home?region=eu-west-2#query"},"AWS Athena")," which extracts, and aggregates permit renewals and produces\na resultset with the below format."),(0,o.kt)("p",{parentName:"div"},"The data platform provides source data within the table\n",(0,o.kt)("inlineCode",{parentName:"p"},'"dataplatform-stg-liberator-raw-zone"."liberator_permit_renewals"'),"."),(0,o.kt)("p",{parentName:"div"},"You will want to convert VARCHAR columns to ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/athena/latest/ug/data-types.html"},"appropriate AWS Athena data types"),".\nSpecifically, the time columns should have a TIMESTAMP type.\nPresto SQL provide a variety of ",(0,o.kt)("a",{parentName:"p",href:"https://prestodb.io/docs/0.217/functions/datetime.html"},"date/time functions"),".\nNote that some of the renewal records have empty string values which may cause a cryptic error\nmessage to appear when passing an empty string into a time function."),(0,o.kt)("p",{parentName:"div"},"Keep a copy of the query you create somewhere safe, for the next part of this guide."))),(0,o.kt)("table",null,(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"permit_reference"),(0,o.kt)("th",null,"earliest_start_date"),(0,o.kt)("th",null,"latest_end_date"),(0,o.kt)("th",null,"number_of_renewals"),(0,o.kt)("th",null,"import_year"),(0,o.kt)("th",null,"import_month"),(0,o.kt)("th",null,"import_day"),(0,o.kt)("th",null,"import_date"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"XXXYYYYYYY"),(0,o.kt)("td",null,"2017-01-02 00:00:00"),(0,o.kt)("td",null,"2018-01-02 00:00:00"),(0,o.kt)("td",null,"2"),(0,o.kt)("td",null,"2021"),(0,o.kt)("td",null,"04"),(0,o.kt)("td",null,"15")))),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("b",null,"Answer"),", reveal once you've attempted the above."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n      permit_reference,\n      MAX(DATE_PARSE(NULLIF(renewal_end_date, ''), '%Y-%m-%d %H:%i:%S')) AS last_end_date,\n      MIN(DATE_PARSE(NULLIF(renewal_start_date, ''), '%Y-%m-%d %H:%i:%S')) AS earliest_start_date,\n      COUNT(*) AS number_of_renewals,\n      import_year, import_month, import_day, import_date\nFROM \"dataplatform-stg-liberator-raw-zone\".\"liberator_permit_renewals\"\nGROUP BY permit_reference, import_year, import_month, import_day, import_date\n"))),(0,o.kt)("h2",{id:"moving-your-query-to-aws-glue-studio"},"Moving your query to AWS Glue Studio"),(0,o.kt)("p",null,"Once you have written, and seen a successful execution of your query in AWS Athena, we can move onto\ncreating an AWS Glue Job which will transform and copy the ",(0,o.kt)("inlineCode",{parentName:"p"},"dataplatform-stg-raw-zone")," data\ninto the ",(0,o.kt)("inlineCode",{parentName:"p"},"dataplatform-stg-refined-zone"),"."),(0,o.kt)("p",null,"Turning our first query into a Glue Job which transforms the data into a new dataset, will allow us\nto share this into a permit renewals dashboard on Google Data Studio."),(0,o.kt)("p",null,"We will first create a new AWS Glue Studio job by following a modified version of the guide\n",(0,o.kt)("a",{parentName:"p",href:"/Data-Platform-Playbook/playbook/transforming-data/using-glue-studio#creating-a-new-glue-job"},"creating a new Glue Job"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"For the environment, we'll be using ",(0,o.kt)("inlineCode",{parentName:"p"},"stg"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"For the ",(0,o.kt)("strong",{parentName:"p"},"Data source")," node, we'll select ",(0,o.kt)("strong",{parentName:"p"},"Data catalogue table"),' for "S3 source type"\nunder the "Data source properties" tab.\nThen choosing ',(0,o.kt)("inlineCode",{parentName:"p"},"dataplatform-stg-liberator-raw-zone")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"liberator_permit_renewals"),"\nfor Database and Table respectively.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"For the ",(0,o.kt)("strong",{parentName:"p"},"Data target")," node:"),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},'Set the Format to "Glue Parquet"'),(0,o.kt)("li",{parentName:"ol"},"Specify the destination as ",(0,o.kt)("inlineCode",{parentName:"li"},"s3://dataplatform-stg-refined-zone/parking/liberator/NAME_parking_permit_renewals/"),"."),(0,o.kt)("li",{parentName:"ol"},'For "Data Catalog update options" select "Create a table in the Data Catalog and on subsequent runs, update the schema and add new partitions".'),(0,o.kt)("li",{parentName:"ol"},'For "Database" select "dataplatform-stg-liberator-refined-zone" from the dropdown.'),(0,o.kt)("li",{parentName:"ol"},'In "Table name" write ',(0,o.kt)("inlineCode",{parentName:"li"},"NAME_parking_permit_renewals"),"."),(0,o.kt)("li",{parentName:"ol"},"Under the parition keys, add in the following order: ",(0,o.kt)("inlineCode",{parentName:"li"},"import_year"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"import_month"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"import_day"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"import_date"),"."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"For the ",(0,o.kt)("strong",{parentName:"p"},"Name")," of the job, specify ",(0,o.kt)("inlineCode",{parentName:"p"},"NAME_GlueStudioWorkshop"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"For the ",(0,o.kt)("strong",{parentName:"p"},"IAM Role")," of the job, specify ",(0,o.kt)("inlineCode",{parentName:"p"},"dataplatform-stg-parking-glue"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},'For the "Number of retries" under "Job details" specify 0.')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},'For the "Security configuration" select "dataplatform-stg-config-to-refined".'))),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"AWS Glue enables a feature called ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/glue/latest/dg/monitor-continuations.html"},"Job Bookmarks")," by default."),(0,o.kt)("p",{parentName:"div"},"Job bookmarks cause a glue job to perform its batch processing on data which has not\nalready been processed previously by the same job."),(0,o.kt)("p",{parentName:"div"},'This is useful to reduce the cost of processing, but when developing jobs you will\nwant to temporarily disable this feature from the "Job Details" tab.'))),(0,o.kt)("p",null,"Once you have created and saved this job, we will replace the default transformation with\nour SQL created above."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},'Switch to the "Visual" tab, and click on the "Transform - ApplyMapping" node.\nIn the properties bar on the right, switch to the "Node Properties" tab and change the "Node Type"\nto "Spark SQL".'),(0,o.kt)("li",{parentName:"ol"},'Switch to the "Transform" tab paste in your SQL query from above into the "Code Block" box.\nThe Spark SQL executor will only accept a single SQL query, and that query mustn\'t have\na trailing semicolon.'),(0,o.kt)("li",{parentName:"ol"},'Change the value of "Spark SQL aliases" to ',(0,o.kt)("inlineCode",{parentName:"li"},"liberator_permit_renewals"),", and remove any usage of a\ndatabase prefix ",(0,o.kt)("inlineCode",{parentName:"li"},"dataplatform-stg-liberator-raw-zone"),' from the SQL query inside of the "Code Block".\nIf your query joined multiple tables, each table would need a distinct "Data Source" linked\nto the "Spark SQL" node.'),(0,o.kt)("li",{parentName:"ol"},"Click the ",(0,o.kt)("strong",{parentName:"li"},"Save")," button, followed by the ",(0,o.kt)("strong",{parentName:"li"},"Run")," button."),(0,o.kt)("li",{parentName:"ol"},'Click on the "Runs" tab, and follow the progress of your job.'),(0,o.kt)("li",{parentName:"ol"},"Once finished, the job might fail with an error message similar to this")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"AnalysisException: \"\n  Undefined function: 'date_parse'.\n  This function is neither a registered temporary function nor a permanent function registered in the database 'default'.\n\"\n")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Exercise")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},'Switching back to the "Visual" tab, continue modifying, saving and running the SQL query\nof your AWS Glue job until the "Run status" becomes "Succeeded".\nThe Spark SQL ',(0,o.kt)("inlineCode",{parentName:"p"},"to_timestamp")," ",(0,o.kt)("a",{parentName:"p",href:"https://spark.apache.org/docs/latest/api/sql/index.html#to_timestamp"},"function documentation")," might be useful."),(0,o.kt)("p",{parentName:"div"},"Confirm your AWS Glue Job has worked as you expected by querying the newly created table\nin ",(0,o.kt)("a",{parentName:"p",href:"https://eu-west-2.console.aws.amazon.com/athena/home?region=eu-west-2#query"},"AWS Athena")," under the database ",(0,o.kt)("inlineCode",{parentName:"p"},"dataplatform-stg-liberator-refined-zone"),", with the\nname ",(0,o.kt)("inlineCode",{parentName:"p"},"NAME_parking_permit_renewals"),"."))),(0,o.kt)("h2",{id:"cleaning-up"},"Cleaning up"),(0,o.kt)("p",null,"Once you have finished the exercise"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Find and delete your job within ",(0,o.kt)("a",{parentName:"li",href:"https://eu-west-2.console.aws.amazon.com/glue/home?region=eu-west-2#etl:tab=jobs"},"AWS Glue Jobs list"),"."),(0,o.kt)("li",{parentName:"ol"},"From the ",(0,o.kt)("a",{parentName:"li",href:"https://s3.console.aws.amazon.com/s3/buckets/dataplatform-stg-refined-zone?region=eu-west-2&prefix=parking/liberator/&showversions=false"},"S3 console"),", delete the folders your job created.\nThere will be a folder called ",(0,o.kt)("inlineCode",{parentName:"li"},"NAME_parking_permit_renewals")," and a file called ",(0,o.kt)("inlineCode",{parentName:"li"},"NAME_parking_permit_renewals_$folder$"),"\nto delete."),(0,o.kt)("li",{parentName:"ol"},"Delete the table created within the ",(0,o.kt)("a",{parentName:"li",href:"https://eu-west-2.console.aws.amazon.com/glue/home?region=eu-west-2#catalog:tab=tables"},"AWS Glue table")," interface.\nYou can find the table by searching for ",(0,o.kt)("inlineCode",{parentName:"li"},"NAME_parking_permit_renewals")," within the search box.")))}m.isMDXComponent=!0}}]);