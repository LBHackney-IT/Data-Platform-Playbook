"use strict";(self.webpackChunkdata_platform_playbook=self.webpackChunkdata_platform_playbook||[]).push([[3937],{1796:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var i=n(4848),s=n(8453);const o={id:"ingest-sql-flat-files",title:"Ingest SQL flat files - ADR 006",description:"",tags:["adr"],number:"6","date-issued":"2021-05-26",status:"Accepted"},a=void 0,r={id:"architecture-decisions/records/ingest-sql-flat-files",title:"Ingest SQL flat files - ADR 006",description:"",source:"@site/docs/architecture-decisions/records/006-ingest-sql-flat-files.md",sourceDirName:"architecture-decisions/records",slug:"/architecture-decisions/records/ingest-sql-flat-files",permalink:"/Data-Platform-Playbook/architecture-decisions/records/ingest-sql-flat-files",draft:!1,unlisted:!1,editUrl:"https://github.com/LBHackney-IT/data-platform-playbook/edit/master/docs/architecture-decisions/records/006-ingest-sql-flat-files.md",tags:[{inline:!0,label:"adr",permalink:"/Data-Platform-Playbook/tags/adr"}],version:"current",sidebarPosition:6,frontMatter:{id:"ingest-sql-flat-files",title:"Ingest SQL flat files - ADR 006",description:"",tags:["adr"],number:"6","date-issued":"2021-05-26",status:"Accepted"},sidebar:"docs",previous:{title:"Recovered Data - ADR 005",permalink:"/Data-Platform-Playbook/architecture-decisions/records/recovered-data"},next:{title:"Copy Liberator data from sftp to s3 - ADR 007",permalink:"/Data-Platform-Playbook/architecture-decisions/records/sftp-to-s3-lambda"}},l={},d=[{value:"Context",id:"context",level:2},{value:"Decision",id:"decision",level:2},{value:"Process",id:"process",level:3},{value:"Discounted options during a spike",id:"discounted-options-during-a-spike",level:3},{value:"Consequences",id:"consequences",level:2}];function c(e){const t={code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"context",children:"Context"}),"\n",(0,i.jsxs)(t.p,{children:["Hackney has at least one data source which is provided to it in ",(0,i.jsx)(t.code,{children:"mysqldump"}),"\nformat. This flat file is generated on a daily basis, and we've identified\na need for this data to also be imported into the platform on a daily basis."]}),"\n",(0,i.jsx)(t.p,{children:"We hope this the design proposed will be extendable for further SQL flat files\nthat the platform may need to support."}),"\n",(0,i.jsx)(t.h2,{id:"decision",children:"Decision"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Leverage the existing platforms ability to ingesting RDS snapshots"}),"\n",(0,i.jsx)(t.li,{children:"Use ECS as the execution environment."}),"\n",(0,i.jsx)(t.li,{children:"Have a reusable RDS instance running which will be the target for importing\nand exporting."}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"process",children:"Process"}),"\n",(0,i.jsx)(t.p,{children:"A CloudWatch event will be configured to run an ECS Task when a flat file is\nuploaded to an S3 Bucket, this ECS task will responsible for downloading the\nSQL file from S3, creating a temporary database on the reusable RDS instance and\nrunning an import to that the temp database based on the SQL file name."}),"\n",(0,i.jsx)(t.p,{children:"Once the import has completed the ECS task will trigger an RDS snapshot. Once\nthe snapshot creation has completed the ECS task will drop the temp database\nthat is created, while the snapshot ingestion process starts processing the\nnew snapshot."}),"\n",(0,i.jsx)(t.h3,{id:"discounted-options-during-a-spike",children:"Discounted options during a spike"}),"\n",(0,i.jsx)(t.p,{children:"During testing we found that the file provided as a test took longer than\nthe 15 minute AWS Lambda execution limit, so decided we needed to use ECS\ninstead."}),"\n",(0,i.jsx)(t.p,{children:"We explored having a MySQL instance inside of a container in ECS. This would\nhave given us more flexibility to a wider range of databases, but we found\ndifficulty in exporting the data out of the MySQL into parquet file format."}),"\n",(0,i.jsx)(t.h2,{id:"consequences",children:"Consequences"}),"\n",(0,i.jsx)(t.p,{children:"With this design, it would not be possible to easily import historic exports as\nthe snapshot ingestion process automatically partitions the database on year / month / day\nof snapshot creation."})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>r});var i=n(6540);const s={},o=i.createContext(s);function a(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);