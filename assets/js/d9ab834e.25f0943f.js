"use strict";(self.webpackChunkdata_platform_playbook=self.webpackChunkdata_platform_playbook||[]).push([[9085],{1095:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var n=t(4848),s=t(8453);const i={id:"using-datahub-as-a-data-catalogue",title:"Using DataHub as a Data Catalogue - ADR 011",description:"",tags:["adr"],number:"11","date-issued":"2021-10-07",status:"Accepted"},o=void 0,r={id:"architecture-decisions/records/using-datahub-as-a-data-catalogue",title:"Using DataHub as a Data Catalogue - ADR 011",description:"",source:"@site/docs/architecture-decisions/records/011-using-datahub-as-a-data-catalogue.md",sourceDirName:"architecture-decisions/records",slug:"/architecture-decisions/records/using-datahub-as-a-data-catalogue",permalink:"/Data-Platform-Playbook/architecture-decisions/records/using-datahub-as-a-data-catalogue",draft:!1,unlisted:!1,editUrl:"https://github.com/LBHackney-IT/data-platform-playbook/edit/master/docs/architecture-decisions/records/011-using-datahub-as-a-data-catalogue.md",tags:[{inline:!0,label:"adr",permalink:"/Data-Platform-Playbook/tags/adr"}],version:"current",sidebarPosition:11,frontMatter:{id:"using-datahub-as-a-data-catalogue",title:"Using DataHub as a Data Catalogue - ADR 011",description:"",tags:["adr"],number:"11","date-issued":"2021-10-07",status:"Accepted"},sidebar:"docs",previous:{title:"Using pytest for verifying PySpark transformations - ADR 010",permalink:"/Data-Platform-Playbook/architecture-decisions/records/using-pytest-for-verifying-pyspark-transformations"},next:{title:"Using Event Streaming to Ingest Data - ADR 012",permalink:"/Data-Platform-Playbook/architecture-decisions/records/do-not-connect-to-production-databases"}},d={},c=[{value:"Context",id:"context",level:2},{value:"Decision Drivers",id:"decision-drivers",level:2},{value:"Considered Options",id:"considered-options",level:2},{value:"Decision",id:"decision",level:2},{value:"Consequences",id:"consequences",level:2}];function l(e){const a={h2:"h2",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.h2,{id:"context",children:"Context"}),"\n",(0,n.jsx)(a.p,{children:"We need users to be able to browse and search the datasets within the platform so that they can find what they need, and we can break down data siloes. There are various different ways to implement this."}),"\n",(0,n.jsx)(a.h2,{id:"decision-drivers",children:"Decision Drivers"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:"Ease of set up and maintenance"}),"\n",(0,n.jsx)(a.li,{children:"Features and user experience"}),"\n",(0,n.jsx)(a.li,{children:"Ability to ingest metadata from the data lake"}),"\n",(0,n.jsx)(a.li,{children:"Cost"}),"\n"]}),"\n",(0,n.jsx)(a.h2,{id:"considered-options",children:"Considered Options"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:"Bespoke, in-house solution"}),"\n",(0,n.jsx)(a.li,{children:"Open source solutions (DataHub, Amundsen, Metacat, Marquez)"}),"\n",(0,n.jsx)(a.li,{children:"Paid-for solutions (Atlan, Qlik, Google Cloud Catalog)"}),"\n"]}),"\n",(0,n.jsx)(a.h2,{id:"decision",children:"Decision"}),"\n",(0,n.jsx)(a.p,{children:"We have decided to use an DataHub, an open source tool, as our data catalogue tool because:"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:"We have been able to successfully set it up in our AWS environment without much difficulty [please add here]"}),"\n",(0,n.jsx)(a.li,{children:"It has the basic features we require to catalogue datasets (e.g. a range of metadata available which users can add to, search and browse functionality) as well as additional functionality that may enable us to catalogue data pipelines, dashboards, models etc in future."}),"\n",(0,n.jsx)(a.li,{children:"Users responded positively to it in user research."}),"\n",(0,n.jsx)(a.li,{children:"It is capable of ingesting metadata from Hive/AWS Glue and thus our data lake."}),"\n",(0,n.jsx)(a.li,{children:"It is open-source and therefore cost is limited."}),"\n",(0,n.jsx)(a.li,{children:"It has an active community where we have an opportunity to influence its future development."}),"\n"]}),"\n",(0,n.jsx)(a.h2,{id:"consequences",children:"Consequences"}),"\n",(0,n.jsx)(a.p,{children:"The team will need to dedicate resource to its maintenance and any further development we wish to influence."})]})}function u(e={}){const{wrapper:a}={...(0,s.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},8453:(e,a,t)=>{t.d(a,{R:()=>o,x:()=>r});var n=t(6540);const s={},i=n.createContext(s);function o(e){const a=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function r(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(i.Provider,{value:a},e.children)}}}]);