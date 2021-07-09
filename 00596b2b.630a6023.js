(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{118:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),c=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=c(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,b=s(e,["components","mdxType","originalType","parentName"]),p=c(a),u=n,m=p["".concat(i,".").concat(u)]||p[u]||d[u]||o;return a?r.a.createElement(m,l(l({ref:t},b),{},{components:a})):r.a.createElement(m,l({ref:t},b))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var b=2;b<o;b++)i[b]=a[b];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},63:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return c}));var n=a(3),r=a(7),o=(a(0),a(118)),i={title:"Glue Studio workshop with Parking Analysts",description:"",tags:null,layout:"layout"},l={unversionedId:"workshop/aws_glue_studio_parking",id:"workshop/aws_glue_studio_parking",isDocsHomePage:!1,title:"Glue Studio workshop with Parking Analysts",description:"Prerequisities",source:"@site/docs/workshop/aws_glue_studio_parking.md",slug:"/workshop/aws_glue_studio_parking",permalink:"/Data-Platform-Playbook/workshop/aws_glue_studio_parking",editUrl:"https://github.com/LBHackney-IT/data-platform-playbook/edit/master/docs/workshop/aws_glue_studio_parking.md",version:"current",sidebar:"docs",previous:{title:"Using Glue Studio",permalink:"/Data-Platform-Playbook/playbook/using-glue-studio"},next:{title:"Docs",permalink:"/Data-Platform-Playbook/docs/docs"}},s=[{value:"Prerequisities",id:"prerequisities",children:[]},{value:"Learning objectives",id:"learning-objectives",children:[]},{value:"Introduction",id:"introduction",children:[]},{value:"Prototyping your transformation using Presto SQL",id:"prototyping-your-transformation-using-presto-sql",children:[]},{value:"Moving your query to AWS Glue Studio",id:"moving-your-query-to-aws-glue-studio",children:[]},{value:"Cleaning up",id:"cleaning-up",children:[]}],b={toc:s};function c(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"prerequisities"},"Prerequisities"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Have access to the Parking Liberator Raw zone."),Object(o.b)("li",{parentName:"ul"},"Have experience with writing SQL queries in ",Object(o.b)("a",{parentName:"li",href:"/Data-Platform-Playbook/playbook/querying-data-using-sql"},"AWS Athena")," already."),Object(o.b)("li",{parentName:"ul"},"Have experience running AWS Glue Crawlers.")),Object(o.b)("h2",{id:"learning-objectives"},"Learning objectives"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Know how to create a batch transformation job written in SparkSQL, hosted inside of AWS Glue Studio."),Object(o.b)("li",{parentName:"ul"},"Aware there are differences between the Presto SQL language, and SparkSQL lanugage.")),Object(o.b)("h2",{id:"introduction"},"Introduction"),Object(o.b)("p",null,"As part of this workshop, we will be using ",Object(o.b)("a",{parentName:"p",href:"https://spark.apache.org/"},"Apache Spark")," to perform batch\ntransformation on the Hackney parking Liberator dataset."),Object(o.b)("p",null,"The Data Platform provides a managed installation of Apache Spark called AWS Glue Studio.\nWe'll be using this tool to create an AWS Glue job which will aggregate permit renewal\ninformation."),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://spark.apache.org/docs/latest/api/sql/index.html"},"SparkSQL")," is a SQL API on top of the Spark batch processing engine.\nAWS Glue Studio also provide support for writing jobs in the ",Object(o.b)("a",{parentName:"p",href:"https://www.python.org/"},"Python"),"\nand ",Object(o.b)("a",{parentName:"p",href:"https://www.scala-lang.org/"},"Scala")," programming languages, if you prefer those."),Object(o.b)("p",null,"This guide takes the reader through using SparkSQL, and assumes experience of writing\nand debugging SQL queries."),Object(o.b)("p",null,"Once written, AWS Glue batch jobs can be scheduled to run unattended over very large\ndatasets."),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Throughout this documentation, whereever you see ",Object(o.b)("strong",{parentName:"p"},"NAME"),', replace this with your name\ne.g. "adrian".'),Object(o.b)("p",{parentName:"div"},"This is so that this guide can be performed independently by multiple people at the same time.\nWhen writing jobs outside of this guide, you don't need to follow this convention."))),Object(o.b)("h2",{id:"prototyping-your-transformation-using-presto-sql"},"Prototyping your transformation using Presto SQL"),Object(o.b)("p",null,"Imagine we want to perform analysis on the number and duration of parking permit renewals."),Object(o.b)("p",null,"We first prototype our query inside of AWS Athena using its Presto SQL language."),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Exercise")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Create an SQL query for ",Object(o.b)("a",{parentName:"p",href:"https://eu-west-2.console.aws.amazon.com/athena/home?region=eu-west-2#query"},"AWS Athena")," which extracts, and aggregates permit renewals and produces\na resultset with the below format."),Object(o.b)("p",{parentName:"div"},"The data platform provides source data within the table\n",Object(o.b)("inlineCode",{parentName:"p"},'"dataplatform-stg-liberator-raw-zone"."liberator_permit_renewals"'),"."),Object(o.b)("p",{parentName:"div"},"You will want to convert VARCHAR columns to ",Object(o.b)("a",{parentName:"p",href:"https://docs.aws.amazon.com/athena/latest/ug/data-types.html"},"appropriate AWS Athena data types"),".\nSpecifically, the time columns should have a TIMESTAMP type.\nPresto SQL provide a variety of ",Object(o.b)("a",{parentName:"p",href:"https://prestodb.io/docs/0.217/functions/datetime.html"},"date/time functions"),".\nNote that some of the renewal records have empty string values which may cause a cryptic error\nmessage to appear when passing an empty string into a time function."),Object(o.b)("p",{parentName:"div"},"Keep a copy of the query you create somewhere safe, for the next part of this guide."))),Object(o.b)("table",null,Object(o.b)("thead",null,Object(o.b)("tr",null,Object(o.b)("th",null,"permit_reference"),Object(o.b)("th",null,"earliest_start_date"),Object(o.b)("th",null,"latest_end_date"),Object(o.b)("th",null,"number_of_renewals"),Object(o.b)("th",null,"import_year"),Object(o.b)("th",null,"import_month"),Object(o.b)("th",null,"import_day"),Object(o.b)("th",null,"import_date"))),Object(o.b)("tbody",null,Object(o.b)("tr",null,Object(o.b)("td",null,"XXXYYYYYYY"),Object(o.b)("td",null,"2017-01-02 00:00:00"),Object(o.b)("td",null,"2018-01-02 00:00:00"),Object(o.b)("td",null,"2"),Object(o.b)("td",null,"2021"),Object(o.b)("td",null,"04"),Object(o.b)("td",null,"15")))),Object(o.b)("details",null,Object(o.b)("summary",null,Object(o.b)("b",null,"Answer"),", reveal once you've attempted the above."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sql"},"SELECT\n      permit_reference,\n      MAX(DATE_PARSE(NULLIF(renewal_end_date, ''), '%Y-%m-%d %H:%i:%S')) AS last_end_date,\n      MIN(DATE_PARSE(NULLIF(renewal_start_date, ''), '%Y-%m-%d %H:%i:%S')) AS earliest_start_date,\n      COUNT(*) AS number_of_renewals,\n      import_year, import_month, import_day, import_date\nFROM \"dataplatform-stg-liberator-raw-zone\".\"liberator_permit_renewals\"\nGROUP BY permit_reference, import_year, import_month, import_day, import_date\n"))),Object(o.b)("h2",{id:"moving-your-query-to-aws-glue-studio"},"Moving your query to AWS Glue Studio"),Object(o.b)("p",null,"Once you have written, and seen a successful execution of your query in AWS Athena, we can move onto\ncreating an AWS Glue Job which will transform and copy the ",Object(o.b)("inlineCode",{parentName:"p"},"dataplatform-stg-raw-zone")," data\ninto the ",Object(o.b)("inlineCode",{parentName:"p"},"dataplatform-stg-refined-zone"),"."),Object(o.b)("p",null,"Turning our first query into a Glue Job which transforms the data into a new dataset, will allow us\nto share this into a permit renewals dashboard on Google Data Studio."),Object(o.b)("p",null,"We will first create a new AWS Glue Studio job by following a modified version of the guide\n",Object(o.b)("a",{parentName:"p",href:"/Data-Platform-Playbook/playbook/using-glue-studio#creating-a-new-glue-job"},"creating a new Glue Job"),"."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"For the environment, we'll be using ",Object(o.b)("inlineCode",{parentName:"p"},"stg"),".")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"For the ",Object(o.b)("strong",{parentName:"p"},"Data source")," node, we'll select ",Object(o.b)("strong",{parentName:"p"},"Data catalogue table"),' for "S3 source type"\nunder the "Data source properties" tab.\nThen choosing ',Object(o.b)("inlineCode",{parentName:"p"},"dataplatform-stg-liberator-raw-zone")," and ",Object(o.b)("inlineCode",{parentName:"p"},"liberator_permit_renewals"),"\nfor Database and Table respectively.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"For the ",Object(o.b)("strong",{parentName:"p"},"Data target")," node:"),Object(o.b)("ol",{parentName:"li"},Object(o.b)("li",{parentName:"ol"},'Set the Format to "Glue Parquet"'),Object(o.b)("li",{parentName:"ol"},"Specify the destination as ",Object(o.b)("inlineCode",{parentName:"li"},"s3://dataplatform-stg-refined-zone/parking/liberator/NAME_parking_permit_renewals/"),"."),Object(o.b)("li",{parentName:"ol"},'For "Data Catalog update options" select "Create a table in the Data Catalog and on subsequent runs, update the schema and add new partitions".'),Object(o.b)("li",{parentName:"ol"},'For "Database" select "dataplatform-stg-liberator-refined-zone" from the dropdown.'),Object(o.b)("li",{parentName:"ol"},'In "Table name" write ',Object(o.b)("inlineCode",{parentName:"li"},"NAME_parking_permit_renewals"),"."),Object(o.b)("li",{parentName:"ol"},"Under the parition keys, add in the following order: ",Object(o.b)("inlineCode",{parentName:"li"},"import_year"),", ",Object(o.b)("inlineCode",{parentName:"li"},"import_month"),", ",Object(o.b)("inlineCode",{parentName:"li"},"import_day"),", ",Object(o.b)("inlineCode",{parentName:"li"},"import_date"),"."))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"For the ",Object(o.b)("strong",{parentName:"p"},"Name")," of the job, specify ",Object(o.b)("inlineCode",{parentName:"p"},"NAME_GlueStudioWorkshop"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"For the ",Object(o.b)("strong",{parentName:"p"},"IAM Role")," of the job, specify ",Object(o.b)("inlineCode",{parentName:"p"},"dataplatform-stg-parking-glue"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},'For the "Number of retries" under "Job details" specify 0.')),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},'For the "Security configuration" select "dataplatform-stg-config-to-refined".'))),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"AWS Glue enables a feature called ",Object(o.b)("a",{parentName:"p",href:"https://docs.aws.amazon.com/glue/latest/dg/monitor-continuations.html"},"Job Bookmarks")," by default."),Object(o.b)("p",{parentName:"div"},"Job bookmarks cause a glue job to perform its batch processing on data which has not\nalready been processed previously by the same job."),Object(o.b)("p",{parentName:"div"},'This is useful to reduce the cost of processing, but when developing jobs you will\nwant to temporarily disable this feature from the "Job Details" tab.'))),Object(o.b)("p",null,"Once you have created and saved this job, we will replace the default transformation with\nour SQL created above."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},'Switch to the "Visual" tab, and click on the "Transform - ApplyMapping" node.\nIn the properties bar on the right, switch to the "Node Properties" tab and change the "Node Type"\nto "Spark SQL".'),Object(o.b)("li",{parentName:"ol"},'Switch to the "Transform" tab paste in your SQL query from above into the "Code Block" box.\nThe Spark SQL executor will only accept a single SQL query, and that query mustn\'t have\na trailing semicolon.'),Object(o.b)("li",{parentName:"ol"},'Change the value of "Spark SQL aliases" to ',Object(o.b)("inlineCode",{parentName:"li"},"liberator_permit_renewals"),", and remove any usage of a\ndatabase prefix ",Object(o.b)("inlineCode",{parentName:"li"},"dataplatform-stg-liberator-raw-zone"),' from the SQL query inside of the "Code Block".\nIf your query joined multiple tables, each table would need a distinct "Data Source" linked\nto the "Spark SQL" node.'),Object(o.b)("li",{parentName:"ol"},"Click the ",Object(o.b)("strong",{parentName:"li"},"Save")," button, followed by the ",Object(o.b)("strong",{parentName:"li"},"Run")," button."),Object(o.b)("li",{parentName:"ol"},'Click on the "Runs" tab, and follow the progress of your job.'),Object(o.b)("li",{parentName:"ol"},"Once finished, the job might fail with an error message similar to this")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"AnalysisException: \"\n  Undefined function: 'date_parse'.\n  This function is neither a registered temporary function nor a permanent function registered in the database 'default'.\n\"\n")),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Exercise")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},'Switching back to the "Visual" tab, continue modifying, saving and running the SQL query\nof your AWS Glue job until the "Run status" becomes "Succeeded".\nThe Spark SQL ',Object(o.b)("inlineCode",{parentName:"p"},"to_timestamp")," ",Object(o.b)("a",{parentName:"p",href:"https://spark.apache.org/docs/latest/api/sql/index.html#to_timestamp"},"function documentation")," might be useful."),Object(o.b)("p",{parentName:"div"},"Confirm your AWS Glue Job has worked as you expected by querying the newly created table\nin ",Object(o.b)("a",{parentName:"p",href:"https://eu-west-2.console.aws.amazon.com/athena/home?region=eu-west-2#query"},"AWS Athena")," under the database ",Object(o.b)("inlineCode",{parentName:"p"},"dataplatform-stg-liberator-refined-zone"),", with the\nname ",Object(o.b)("inlineCode",{parentName:"p"},"NAME_parking_permit_renewals"),"."))),Object(o.b)("h2",{id:"cleaning-up"},"Cleaning up"),Object(o.b)("p",null,"Once you have finished the exercise"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Find and delete your job within ",Object(o.b)("a",{parentName:"li",href:"https://eu-west-2.console.aws.amazon.com/glue/home?region=eu-west-2#etl:tab=jobs"},"AWS Glue Jobs list"),"."),Object(o.b)("li",{parentName:"ol"},"From the ",Object(o.b)("a",{parentName:"li",href:"https://s3.console.aws.amazon.com/s3/buckets/dataplatform-stg-refined-zone?region=eu-west-2&prefix=parking/liberator/&showversions=false"},"S3 console"),", delete the folders your job created.\nThere will be a folder called ",Object(o.b)("inlineCode",{parentName:"li"},"NAME_parking_permit_renewals")," and a file called ",Object(o.b)("inlineCode",{parentName:"li"},"NAME_parking_permit_renewals_$folder$"),"\nto delete."),Object(o.b)("li",{parentName:"ol"},"Delete the table created within the ",Object(o.b)("a",{parentName:"li",href:"https://eu-west-2.console.aws.amazon.com/glue/home?region=eu-west-2#catalog:tab=tables"},"AWS Glue table")," interface.\nYou can find the table by searching for ",Object(o.b)("inlineCode",{parentName:"li"},"NAME_parking_permit_renewals")," within the search box.")))}c.isMDXComponent=!0}}]);