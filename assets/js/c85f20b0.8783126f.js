"use strict";(self.webpackChunkdata_platform_playbook=self.webpackChunkdata_platform_playbook||[]).push([[9654],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(n),f=a,m=p["".concat(c,".").concat(f)]||p[f]||u[f]||i;return n?r.createElement(m,o(o({ref:t},d),{},{components:n})):r.createElement(m,o({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7718:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var r=n(3117),a=n(102),i=(n(7294),n(3905)),o=["components"],s={id:"using-event-streaming-to-ingest-data",title:"Using Event Streaming to Ingest Data - ADR 013",description:"",tags:["adr"],number:"13","date-issued":"2022-01-01",status:"Accepted"},c=void 0,l={unversionedId:"architecture-decisions/records/using-event-streaming-to-ingest-data",id:"architecture-decisions/records/using-event-streaming-to-ingest-data",title:"Using Event Streaming to Ingest Data - ADR 013",description:"",source:"@site/docs/architecture-decisions/records/013-using-event-streaming-to-ingest-data.md",sourceDirName:"architecture-decisions/records",slug:"/architecture-decisions/records/using-event-streaming-to-ingest-data",permalink:"/Data-Platform-Playbook/architecture-decisions/records/using-event-streaming-to-ingest-data",draft:!1,editUrl:"https://github.com/LBHackney-IT/data-platform-playbook/edit/master/docs/architecture-decisions/records/013-using-event-streaming-to-ingest-data.md",tags:[{label:"adr",permalink:"/Data-Platform-Playbook/tags/adr"}],version:"current",sidebarPosition:13,frontMatter:{id:"using-event-streaming-to-ingest-data",title:"Using Event Streaming to Ingest Data - ADR 013",description:"",tags:["adr"],number:"13","date-issued":"2022-01-01",status:"Accepted"},sidebar:"docs",previous:{title:"Move Staging to Pre-Production - ADR 012",permalink:"/Data-Platform-Playbook/architecture-decisions/records/move-staging-to-pre-production"},next:{title:"Initial Extract of Tenure Data  - ADR 014",permalink:"/Data-Platform-Playbook/architecture-decisions/records/initial-extract-of-tenure-data"}},d={},u=[{value:"Context",id:"context",level:2},{value:"Decision Drivers",id:"decision-drivers",level:2},{value:"Considered Options",id:"considered-options",level:2},{value:"Decision",id:"decision",level:2},{value:"Consequences",id:"consequences",level:2}],p={toc:u};function f(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"context"},"Context"),(0,i.kt)("p",null,"The Data Platform team are interested in ingesting data from a variate of Hackney APIs. We will need to access this data\nwithout connecting directly to the production databases see ",(0,i.kt)("a",{parentName:"p",href:"/architecture-decisions/records/do-not-connect-to-production-data"},"ADR 012")),(0,i.kt)("p",null,"We have therefore explored different options for transferring the data into the Data Platform."),(0,i.kt)("h2",{id:"decision-drivers"},"Decision Drivers"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Security"),(0,i.kt)("li",{parentName:"ul"},"Service Data Store Ownership"),(0,i.kt)("li",{parentName:"ul"},"Time to Insight"),(0,i.kt)("li",{parentName:"ul"},"Data Consistency")),(0,i.kt)("h2",{id:"considered-options"},"Considered Options"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Access data via read-only replicas"),(0,i.kt)("li",{parentName:"ul"},"Scrape the APIs to get the state of each object"),(0,i.kt)("li",{parentName:"ul"},"Stream data change events from the system")),(0,i.kt)("h2",{id:"decision"},"Decision"),(0,i.kt)("p",null,"Most of the Hackney APIs are capable of event streaming. This is one of the best ways for us to bring data into the\nData Platform as it places control over the data into the hands of the service team and the process is entirely push\nbased. Rather than an extraction process where the data platform is required to pull the data from the service leaving\nthe process under the control of the Data Platform team and forming a dependency between both systems."),(0,i.kt)("h2",{id:"consequences"},"Consequences"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"We will need to decide on the best method of providing initial state to the Data Platform as Event Streaming only covers new changes"),(0,i.kt)("li",{parentName:"ul"},'The process is classified as "Eventually Consistent" as it doesn\'t garentee the state at a specific point, only that the data will eventually become consistent at the point that all events have been received and processed.')))}f.isMDXComponent=!0}}]);