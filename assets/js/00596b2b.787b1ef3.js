"use strict";(self.webpackChunkdata_platform_playbook=self.webpackChunkdata_platform_playbook||[]).push([[954],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>c});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(a),h=r,c=d["".concat(s,".").concat(h)]||d[h]||m[h]||o;return a?n.createElement(c,i(i({ref:t},u),{},{components:a})):n.createElement(c,i({ref:t},u))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},4815:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const o={title:"Glue Studio workshop with Parking Analysts",description:"",tags:["workshops"],layout:"layout"},i=void 0,l={unversionedId:"workshop/aws_glue_studio_parking",id:"workshop/aws_glue_studio_parking",title:"Glue Studio workshop with Parking Analysts",description:"",source:"@site/docs/workshop/aws_glue_studio_parking.md",sourceDirName:"workshop",slug:"/workshop/aws_glue_studio_parking",permalink:"/Data-Platform-Playbook/workshop/aws_glue_studio_parking",draft:!1,editUrl:"https://github.com/LBHackney-IT/data-platform-playbook/edit/master/docs/workshop/aws_glue_studio_parking.md",tags:[{label:"workshops",permalink:"/Data-Platform-Playbook/tags/workshops"}],version:"current",frontMatter:{title:"Glue Studio workshop with Parking Analysts",description:"",tags:["workshops"],layout:"layout"},sidebar:"docs",previous:{title:"Scheduling Liberator Glue Jobs",permalink:"/Data-Platform-Playbook/playbook/transforming-data/using-aws-glue/practical-examples/scheduling-liberator-glue-jobs"},next:{title:"1. Introduction to Time Series Helpers",permalink:"/Data-Platform-Playbook/playbook/querying-and-analysing-data/time-series-analysis/introduction"}},s={},p=[{value:"Prerequisities",id:"prerequisities",level:2},{value:"Learning objectives",id:"learning-objectives",level:2},{value:"Introduction",id:"introduction",level:2},{value:"Prototyping your transformation using Presto SQL",id:"prototyping-your-transformation-using-presto-sql",level:2},{value:"Moving your query to AWS Glue Studio",id:"moving-your-query-to-aws-glue-studio",level:2},{value:"Cleaning up",id:"cleaning-up",level:2}],u={toc:p},d="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"prerequisities"},"Prerequisities"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Have access to the Parking Liberator Raw zone."),(0,r.kt)("li",{parentName:"ul"},"Have experience with writing SQL queries in ",(0,r.kt)("a",{parentName:"li",href:"/Data-Platform-Playbook/playbook/querying-and-analysing-data/querying-data-using-sql"},"AWS Athena")," already."),(0,r.kt)("li",{parentName:"ul"},"Have experience running AWS Glue Crawlers.")),(0,r.kt)("h2",{id:"learning-objectives"},"Learning objectives"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Know how to create a batch transformation job written in SparkSQL, hosted inside of AWS Glue Studio."),(0,r.kt)("li",{parentName:"ul"},"Aware there are differences between the Presto SQL language, and SparkSQL lanugage.")),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"As part of this workshop, we will be using ",(0,r.kt)("a",{parentName:"p",href:"https://spark.apache.org/"},"Apache Spark")," to perform batch\ntransformation on the Hackney parking Liberator dataset."),(0,r.kt)("p",null,"The Data Platform provides a managed installation of Apache Spark called AWS Glue Studio.\nWe'll be using this tool to create an AWS Glue job which will aggregate permit renewal\ninformation."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://spark.apache.org/docs/latest/api/sql/index.html"},"SparkSQL")," is a SQL API on top of the Spark batch processing engine.\nAWS Glue Studio also provide support for writing jobs in the ",(0,r.kt)("a",{parentName:"p",href:"https://www.python.org/"},"Python"),"\nand ",(0,r.kt)("a",{parentName:"p",href:"https://www.scala-lang.org/"},"Scala")," programming languages, if you prefer those."),(0,r.kt)("p",null,"This guide takes the reader through using SparkSQL, and assumes experience of writing\nand debugging SQL queries."),(0,r.kt)("p",null,"Once written, AWS Glue batch jobs can be scheduled to run unattended over very large\ndatasets."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Throughout this documentation, whereever you see ",(0,r.kt)("strong",{parentName:"p"},"NAME"),', replace this with your name\ne.g. "adrian".'),(0,r.kt)("p",{parentName:"admonition"},"This is so that this guide can be performed independently by multiple people at the same time.\nWhen writing jobs outside of this guide, you don't need to follow this convention.")),(0,r.kt)("h2",{id:"prototyping-your-transformation-using-presto-sql"},"Prototyping your transformation using Presto SQL"),(0,r.kt)("p",null,"Imagine we want to perform analysis on the number and duration of parking permit renewals."),(0,r.kt)("p",null,"We first prototype our query inside of AWS Athena using its Presto SQL language."),(0,r.kt)("admonition",{title:"Exercise",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Create an SQL query for ",(0,r.kt)("a",{parentName:"p",href:"https://eu-west-2.console.aws.amazon.com/athena/home?region=eu-west-2#query"},"AWS Athena")," which extracts, and aggregates permit renewals and produces\na resultset with the below format."),(0,r.kt)("p",{parentName:"admonition"},"The data platform provides source data within the table\n",(0,r.kt)("inlineCode",{parentName:"p"},'"dataplatform-stg-liberator-raw-zone"."liberator_permit_renewals"'),"."),(0,r.kt)("p",{parentName:"admonition"},"You will want to convert VARCHAR columns to ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/athena/latest/ug/data-types.html"},"appropriate AWS Athena data types"),".\nSpecifically, the time columns should have a TIMESTAMP type.\nPresto SQL provide a variety of ",(0,r.kt)("a",{parentName:"p",href:"https://prestodb.io/docs/0.217/functions/datetime.html"},"date/time functions"),".\nNote that some of the renewal records have empty string values which may cause a cryptic error\nmessage to appear when passing an empty string into a time function."),(0,r.kt)("p",{parentName:"admonition"},"Keep a copy of the query you create somewhere safe, for the next part of this guide.")),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"permit_reference"),(0,r.kt)("th",null,"earliest_start_date"),(0,r.kt)("th",null,"latest_end_date"),(0,r.kt)("th",null,"number_of_renewals"),(0,r.kt)("th",null,"import_year"),(0,r.kt)("th",null,"import_month"),(0,r.kt)("th",null,"import_day"),(0,r.kt)("th",null,"import_date"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"XXXYYYYYYY"),(0,r.kt)("td",null,"2017-01-02 00:00:00"),(0,r.kt)("td",null,"2018-01-02 00:00:00"),(0,r.kt)("td",null,"2"),(0,r.kt)("td",null,"2021"),(0,r.kt)("td",null,"04"),(0,r.kt)("td",null,"15")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("b",null,"Answer"),", reveal once you've attempted the above."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n      permit_reference,\n      MAX(DATE_PARSE(NULLIF(renewal_end_date, ''), '%Y-%m-%d %H:%i:%S')) AS last_end_date,\n      MIN(DATE_PARSE(NULLIF(renewal_start_date, ''), '%Y-%m-%d %H:%i:%S')) AS earliest_start_date,\n      COUNT(*) AS number_of_renewals,\n      import_year, import_month, import_day, import_date\nFROM \"dataplatform-stg-liberator-raw-zone\".\"liberator_permit_renewals\"\nGROUP BY permit_reference, import_year, import_month, import_day, import_date\n"))),(0,r.kt)("h2",{id:"moving-your-query-to-aws-glue-studio"},"Moving your query to AWS Glue Studio"),(0,r.kt)("p",null,"Once you have written, and seen a successful execution of your query in AWS Athena, we can move onto\ncreating an AWS Glue Job which will transform and copy the ",(0,r.kt)("inlineCode",{parentName:"p"},"dataplatform-stg-raw-zone")," data\ninto the ",(0,r.kt)("inlineCode",{parentName:"p"},"dataplatform-stg-refined-zone"),"."),(0,r.kt)("p",null,"Turning our first query into a Glue Job which transforms the data into a new dataset, will allow us\nto share this into a permit renewals dashboard on Google Data Studio."),(0,r.kt)("p",null,"We will first create a new AWS Glue Studio job by following a modified version of the guide\n",(0,r.kt)("a",{parentName:"p",href:"/Data-Platform-Playbook/playbook/transforming-data/using-aws-glue/using-glue-studio#creating-a-new-glue-job"},"creating a new Glue Job"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"For the environment, we'll be using ",(0,r.kt)("inlineCode",{parentName:"p"},"stg"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"For the ",(0,r.kt)("strong",{parentName:"p"},"Data source")," node, we'll select ",(0,r.kt)("strong",{parentName:"p"},"Data catalogue table"),' for "S3 source type"\nunder the "Data source properties" tab.\nThen choosing ',(0,r.kt)("inlineCode",{parentName:"p"},"dataplatform-stg-liberator-raw-zone")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"liberator_permit_renewals"),"\nfor Database and Table respectively.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"For the ",(0,r.kt)("strong",{parentName:"p"},"Data target")," node:"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},'Set the Format to "Glue Parquet"'),(0,r.kt)("li",{parentName:"ol"},"Specify the destination as ",(0,r.kt)("inlineCode",{parentName:"li"},"s3://dataplatform-stg-refined-zone/parking/liberator/NAME_parking_permit_renewals/"),"."),(0,r.kt)("li",{parentName:"ol"},'For "Data Catalog update options" select "Create a table in the Data Catalog and on subsequent runs, update the schema and add new partitions".'),(0,r.kt)("li",{parentName:"ol"},'For "Database" select "dataplatform-stg-liberator-refined-zone" from the dropdown.'),(0,r.kt)("li",{parentName:"ol"},'In "Table name" write ',(0,r.kt)("inlineCode",{parentName:"li"},"NAME_parking_permit_renewals"),"."),(0,r.kt)("li",{parentName:"ol"},"Under the parition keys, add in the following order: ",(0,r.kt)("inlineCode",{parentName:"li"},"import_year"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"import_month"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"import_day"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"import_date"),"."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"For the ",(0,r.kt)("strong",{parentName:"p"},"Name")," of the job, specify ",(0,r.kt)("inlineCode",{parentName:"p"},"NAME_GlueStudioWorkshop"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"For the ",(0,r.kt)("strong",{parentName:"p"},"IAM Role")," of the job, specify ",(0,r.kt)("inlineCode",{parentName:"p"},"dataplatform-stg-parking-glue"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'For the "Number of retries" under "Job details" specify 0.')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'For the "Security configuration" select "dataplatform-stg-config-to-refined".'))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"AWS Glue enables a feature called ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/glue/latest/dg/monitor-continuations.html"},"Job Bookmarks")," by default."),(0,r.kt)("p",{parentName:"admonition"},"Job bookmarks cause a glue job to perform its batch processing on data which has not\nalready been processed previously by the same job."),(0,r.kt)("p",{parentName:"admonition"},'This is useful to reduce the cost of processing, but when developing jobs you will\nwant to temporarily disable this feature from the "Job Details" tab.')),(0,r.kt)("p",null,"Once you have created and saved this job, we will replace the default transformation with\nour SQL created above."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},'Switch to the "Visual" tab, and click on the "Transform - ApplyMapping" node.\nIn the properties bar on the right, switch to the "Node Properties" tab and change the "Node Type"\nto "Spark SQL".'),(0,r.kt)("li",{parentName:"ol"},'Switch to the "Transform" tab paste in your SQL query from above into the "Code Block" box.\nThe Spark SQL executor will only accept a single SQL query, and that query mustn\'t have\na trailing semicolon.'),(0,r.kt)("li",{parentName:"ol"},'Change the value of "Spark SQL aliases" to ',(0,r.kt)("inlineCode",{parentName:"li"},"liberator_permit_renewals"),", and remove any usage of a\ndatabase prefix ",(0,r.kt)("inlineCode",{parentName:"li"},"dataplatform-stg-liberator-raw-zone"),' from the SQL query inside of the "Code Block".\nIf your query joined multiple tables, each table would need a distinct "Data Source" linked\nto the "Spark SQL" node.'),(0,r.kt)("li",{parentName:"ol"},"Click the ",(0,r.kt)("strong",{parentName:"li"},"Save")," button, followed by the ",(0,r.kt)("strong",{parentName:"li"},"Run")," button."),(0,r.kt)("li",{parentName:"ol"},'Click on the "Runs" tab, and follow the progress of your job.'),(0,r.kt)("li",{parentName:"ol"},"Once finished, the job might fail with an error message similar to this")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"AnalysisException: \"\n  Undefined function: 'date_parse'.\n  This function is neither a registered temporary function nor a permanent function registered in the database 'default'.\n\"\n")),(0,r.kt)("admonition",{title:"Exercise",type:"note"},(0,r.kt)("p",{parentName:"admonition"},'Switching back to the "Visual" tab, continue modifying, saving and running the SQL query\nof your AWS Glue job until the "Run status" becomes "Succeeded".\nThe Spark SQL ',(0,r.kt)("inlineCode",{parentName:"p"},"to_timestamp")," ",(0,r.kt)("a",{parentName:"p",href:"https://spark.apache.org/docs/latest/api/sql/index.html#to_timestamp"},"function documentation")," might be useful."),(0,r.kt)("p",{parentName:"admonition"},"Confirm your AWS Glue Job has worked as you expected by querying the newly created table\nin ",(0,r.kt)("a",{parentName:"p",href:"https://eu-west-2.console.aws.amazon.com/athena/home?region=eu-west-2#query"},"AWS Athena")," under the database ",(0,r.kt)("inlineCode",{parentName:"p"},"dataplatform-stg-liberator-refined-zone"),", with the\nname ",(0,r.kt)("inlineCode",{parentName:"p"},"NAME_parking_permit_renewals"),".")),(0,r.kt)("h2",{id:"cleaning-up"},"Cleaning up"),(0,r.kt)("p",null,"Once you have finished the exercise"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Find and delete your job within ",(0,r.kt)("a",{parentName:"li",href:"https://eu-west-2.console.aws.amazon.com/glue/home?region=eu-west-2#etl:tab=jobs"},"AWS Glue Jobs list"),"."),(0,r.kt)("li",{parentName:"ol"},"From the ",(0,r.kt)("a",{parentName:"li",href:"https://s3.console.aws.amazon.com/s3/buckets/dataplatform-stg-refined-zone?region=eu-west-2&prefix=parking/liberator/&showversions=false"},"S3 console"),", delete the folders your job created.\nThere will be a folder called ",(0,r.kt)("inlineCode",{parentName:"li"},"NAME_parking_permit_renewals")," and a file called ",(0,r.kt)("inlineCode",{parentName:"li"},"NAME_parking_permit_renewals_$folder$"),"\nto delete."),(0,r.kt)("li",{parentName:"ol"},"Delete the table created within the ",(0,r.kt)("a",{parentName:"li",href:"https://eu-west-2.console.aws.amazon.com/glue/home?region=eu-west-2#catalog:tab=tables"},"AWS Glue table")," interface.\nYou can find the table by searching for ",(0,r.kt)("inlineCode",{parentName:"li"},"NAME_parking_permit_renewals")," within the search box.")))}m.isMDXComponent=!0}}]);