"use strict";(self.webpackChunkdata_platform_playbook=self.webpackChunkdata_platform_playbook||[]).push([[4249],{6244:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>r,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var n=a(4848),o=a(8453);const s={title:"Ingesting Academy data onto the Data Platform",description:"Overview of how Academy data is ingested onto the Data Platform from MS SQL databases and distributed to Housing Benefits & Needs and Revenues Departments",tags:["playbook"],layout:"layout"},i=void 0,d={id:"docs/academy-ingestion",title:"Ingesting Academy data onto the Data Platform",description:"Overview of how Academy data is ingested onto the Data Platform from MS SQL databases and distributed to Housing Benefits & Needs and Revenues Departments",source:"@site/docs/docs/academy-ingestion.md",sourceDirName:"docs",slug:"/docs/academy-ingestion",permalink:"/Data-Platform-Playbook/docs/academy-ingestion",draft:!1,unlisted:!1,editUrl:"https://github.com/LBHackney-IT/data-platform-playbook/edit/master/docs/docs/academy-ingestion.md",tags:[{inline:!0,label:"playbook",permalink:"/Data-Platform-Playbook/tags/playbook"}],version:"current",frontMatter:{title:"Ingesting Academy data onto the Data Platform",description:"Overview of how Academy data is ingested onto the Data Platform from MS SQL databases and distributed to Housing Benefits & Needs and Revenues Departments",tags:["playbook"],layout:"layout"},sidebar:"docs",previous:{title:"CI Process",permalink:"/Data-Platform-Playbook/docs/CI-process"},next:{title:"Alloy data ingestion",permalink:"/Data-Platform-Playbook/docs/alloy-ingestion"}},r={},c=[{value:"Architecture",id:"architecture",level:2}];function l(e){const t={a:"a",h2:"h2",img:"img",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"This section covers the overview of how Academy data is ingested onto the Data Platform from an MS SQL database and distributed to Housing Benefits & Needs and Revenues Departments"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Ingesting Academy Data",src:a(8685).A+"",width:"1131",height:"454"})}),"\n",(0,n.jsx)(t.h2,{id:"architecture",children:"Architecture"}),"\n",(0,n.jsxs)(t.p,{children:["A ",(0,n.jsx)(t.a,{href:"https://docs.aws.amazon.com/glue/latest/dg/connection-defining.html",children:"JDBC connection"})," (Glue Connection) is used to get access and connect to the Academy's MS SQL server database which contains Benefits & Housing Needs and Revenues data."]}),"\n",(0,n.jsx)(t.p,{children:"The JDBC connection is used in both the AWS Glue crawler and AWS Glue job (seen in the diagram) to extract data from the SQL views and tables."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"JDBC is a low-level API for making database connections and handling SQL queries and responses."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"With the established connection, the Glue Crawler crawls the source database and populates a Glue Catalog database\nwith the tables' structures; such as table schemas and other metadata of the specified tables from the MS SQL database."}),"\n",(0,n.jsx)(t.p,{children:"The tables' schema and metadata are then read from the Glue Catalog Database, and multiple concurrent Glue jobs pull the data from the MS SQL Server source database via the JDBC Connection (ingestion of tables are divided up to improve efficiency), and then the data is written to a landing zone S3 bucket."}),"\n",(0,n.jsx)(t.p,{children:"Once the data has been ingested into the landing zone S3 bucket, it is then crawled and uploaded to a landing zone Glue Catalog database where another Glue job then copies it over to the respective Benefits & Housing Needs and Revenues raw zone department areas in S3 and Glue Catalog databases."}),"\n",(0,n.jsx)(t.p,{children:"The departments' data then becomes available for querying in Athena and/or for further processing and transforming in Glue jobs to move the data to refined and trusted zones and ultimately pulled into BI tools such as Qlik and Google Data Studio."})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},8685:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/academy-data-ingestion-process-0bf06ff51b78f5709ca23fe811c00868.png"},8453:(e,t,a)=>{a.d(t,{R:()=>i,x:()=>d});var n=a(6540);const o={},s=n.createContext(o);function i(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);