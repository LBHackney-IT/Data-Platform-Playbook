"use strict";(self.webpackChunkdata_platform_playbook=self.webpackChunkdata_platform_playbook||[]).push([[5752],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=u(n),h=r,m=p["".concat(s,".").concat(h)]||p[h]||l[h]||i;return n?o.createElement(m,a(a({ref:t},d),{},{components:n})):o.createElement(m,a({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2059:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return l}});var o=n(3117),r=n(102),i=(n(7294),n(3905)),a=["components"],c={id:"move-staging-to-pre-production",title:"Move Staging to Pre-Production - ADR 012",description:"",tags:["adr"],number:"12","date-issued":"2021-12-16",status:"Accepted"},s=void 0,u={unversionedId:"architecture-decisions/records/move-staging-to-pre-production",id:"architecture-decisions/records/move-staging-to-pre-production",title:"Move Staging to Pre-Production - ADR 012",description:"",source:"@site/docs/architecture-decisions/records/012-move-staging-to-pre-production.md",sourceDirName:"architecture-decisions/records",slug:"/architecture-decisions/records/move-staging-to-pre-production",permalink:"/Data-Platform-Playbook/architecture-decisions/records/move-staging-to-pre-production",draft:!1,editUrl:"https://github.com/LBHackney-IT/data-platform-playbook/edit/master/docs/architecture-decisions/records/012-move-staging-to-pre-production.md",tags:[{label:"adr",permalink:"/Data-Platform-Playbook/tags/adr"}],version:"current",sidebarPosition:12,frontMatter:{id:"move-staging-to-pre-production",title:"Move Staging to Pre-Production - ADR 012",description:"",tags:["adr"],number:"12","date-issued":"2021-12-16",status:"Accepted"},sidebar:"docs",previous:{title:"Using Event Streaming to Ingest Data - ADR 012",permalink:"/Data-Platform-Playbook/architecture-decisions/records/do-not-connect-to-production-databases"},next:{title:"Using Event Streaming to Ingest Data - ADR 013",permalink:"/Data-Platform-Playbook/architecture-decisions/records/using-event-streaming-to-ingest-data"}},d={},l=[{value:"Context",id:"context",level:2},{value:"Decision Drivers",id:"decision-drivers",level:2},{value:"Considered Options",id:"considered-options",level:2},{value:"Decision",id:"decision",level:2},{value:"Consequences",id:"consequences",level:2}],p={toc:l};function h(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"context"},"Context"),(0,i.kt)("p",null,"Towards the end of December 2021 a component of our infrastructure that provided connectivity between a production and\nstaging account was flagged as a potential security breach and raised as an incident."),(0,i.kt)("p",null,"As part of the process of reviewing the incident we discussed the topic of production data being held in a staging\naccount which we have previously decided was a requirement of the successful operation of the Data Platform see\n",(0,i.kt)("a",{parentName:"p",href:"/architecture-decisions/records/production-data-in-staging"},"ADR 008")),(0,i.kt)("p",null,"It was confirmed that wider Hackney policy was to not have Production data held within Staging. This is due to the fact\nthat all staging accounts are interconnected and therefore even though the Data Platform Staging account might be\ntreated with the same level of security as production, a breach might occur in another account resulting in the\nData Platform account loosing data."),(0,i.kt)("p",null,"The issue was therefore that we still required Production data to effectively develop ETL processes, but we were\nrequired not to hold production data in Staging where we normally develop ETL processes."),(0,i.kt)("h2",{id:"decision-drivers"},"Decision Drivers"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Data Security"),(0,i.kt)("li",{parentName:"ul"},"Consistent Environment Setup"),(0,i.kt)("li",{parentName:"ul"},"ETL development requiring Production Data")),(0,i.kt)("h2",{id:"considered-options"},"Considered Options"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Remove the Production data from the Staging account",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"This would prevent analysis from being able to efficiently develop ETL processes as most are based around data transformation based on the data held within the dataset. By removing or mocking the data the ETL jobs wouldn't have the data variations that they would need to be tested against.")))),(0,i.kt)("h2",{id:"decision"},"Decision"),(0,i.kt)("p",null,"We reached the conclusion in conjunction with the Security team and the Cloud Engineering team that the best approach\nwould be to move the entire Staging account into the Production environment connecting it to the Production Hub account\nand continuing to treat the account as a Production account in terms of security. In addition to moving the account we\nalso renamed the account to Pre-Production in order to reduce confusion with the other Staging accounts."),(0,i.kt)("h2",{id:"consequences"},"Consequences"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Pre-Production will not be able to connect to any of the staging accounts which will potentially make infrastructure testing difficult."),(0,i.kt)("li",{parentName:"ul"},"Pre-Production will need to continue to be treated as a production in terms of security to prevent a loss of data")))}h.isMDXComponent=!0}}]);