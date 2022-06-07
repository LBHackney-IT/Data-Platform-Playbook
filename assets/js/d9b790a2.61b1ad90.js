"use strict";(self.webpackChunkdata_platform_playbook=self.webpackChunkdata_platform_playbook||[]).push([[8872],{3905:function(e,t,a){a.d(t,{Zo:function(){return l},kt:function(){return f}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=n.createContext({}),d=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},l=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=d(a),f=o,m=p["".concat(c,".").concat(f)]||p[f]||u[f]||r;return a?n.createElement(m,i(i({ref:t},l),{},{components:a})):n.createElement(m,i({ref:t},l))}));function f(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var d=2;d<r;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},1452:function(e,t,a){a.r(t),a.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return u}});var n=a(3117),o=a(102),r=(a(7294),a(3905)),i=["components"],s={title:"Ingesting Academy data onto the Data Platform",description:"Overview of how Academy data is ingested onto the Data Platform from MS SQL databases and distributed to Housing Benefits & Needs and Revenues Departments",tags:["playbook"],layout:"layout"},c=void 0,d={unversionedId:"docs/academy-ingestion",id:"docs/academy-ingestion",title:"Ingesting Academy data onto the Data Platform",description:"Overview of how Academy data is ingested onto the Data Platform from MS SQL databases and distributed to Housing Benefits & Needs and Revenues Departments",source:"@site/docs/docs/academy-ingestion.md",sourceDirName:"docs",slug:"/docs/academy-ingestion",permalink:"/Data-Platform-Playbook/docs/academy-ingestion",draft:!1,editUrl:"https://github.com/LBHackney-IT/data-platform-playbook/edit/master/docs/docs/academy-ingestion.md",tags:[{label:"playbook",permalink:"/Data-Platform-Playbook/tags/playbook"}],version:"current",frontMatter:{title:"Ingesting Academy data onto the Data Platform",description:"Overview of how Academy data is ingested onto the Data Platform from MS SQL databases and distributed to Housing Benefits & Needs and Revenues Departments",tags:["playbook"],layout:"layout"},sidebar:"docs",previous:{title:"CI/CD Process",permalink:"/Data-Platform-Playbook/docs/CI-CD-process"},next:{title:"Auto-adjusting AWS Budget Alerts",permalink:"/Data-Platform-Playbook/docs/auto-adjusting-aws-budget"}},l={},u=[{value:"Architecture",id:"architecture",level:2}],p={toc:u};function f(e){var t=e.components,s=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This section covers the overview of how Academy data is ingested onto the Data Platform from an MS SQL database and distributed to Housing Benefits & Needs and Revenues Departments"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Ingesting Academy Data",src:a(1826).Z,width:"1131",height:"454"})),(0,r.kt)("h2",{id:"architecture"},"Architecture"),(0,r.kt)("p",null,"A ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/glue/latest/dg/connection-defining.html"},"JDBC connection")," (Glue Connection) is used to get access and connect to the Academy's MS SQL server database which contains Benefits & Housing Needs and Revenues data. "),(0,r.kt)("p",null,"The JDBC connection is used in both the AWS Glue crawler and AWS Glue job (seen in the diagram) to extract data from the SQL views and tables."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"JDBC is a low-level API for making database connections and handling SQL queries and responses. ")),(0,r.kt)("p",null,"With the established connection, the Glue Crawler crawls the source database and populates a Glue Catalog database\nwith the tables' structures; such as table schemas and other metadata of the specified tables from the MS SQL database."),(0,r.kt)("p",null,"The tables' schema and metadata are then read from the Glue Catalog Database, and multiple concurrent Glue jobs pull the data from the MS SQL Server source database via the JDBC Connection (ingestion of tables are divided up to improve efficiency), and then the data is written to a landing zone S3 bucket. "),(0,r.kt)("p",null,"Once the data has been ingested into the landing zone S3 bucket, it is then crawled and uploaded to a landing zone Glue Catalog database where another Glue job then copies it over to the respective Benefits & Housing Needs and Revenues raw zone department areas in S3 and Glue Catalog databases."),(0,r.kt)("p",null,"The departments' data then becomes available for querying in Athena and/or for further processing and transforming in Glue jobs to move the data to refined and trusted zones and ultimately pulled into BI tools such as Qlik and Google Data Studio."))}f.isMDXComponent=!0},1826:function(e,t,a){t.Z=a.p+"assets/images/academy-data-ingestion-process-0bf06ff51b78f5709ca23fe811c00868.png"}}]);