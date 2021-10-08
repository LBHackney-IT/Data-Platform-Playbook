"use strict";(self.webpackChunkdata_platform_playbook=self.webpackChunkdata_platform_playbook||[]).push([[2898],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),d=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=d(r),f=a,m=p["".concat(s,".").concat(f)]||p[f]||u[f]||o;return r?n.createElement(m,i(i({ref:t},l),{},{components:r})):n.createElement(m,i({ref:t},l))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var d=2;d<o;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},6693:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return l},default:function(){return p}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],c={title:"Recovered Data",description:"",tags:["adr"],number:"5","date-issued":"2021-05-20",status:"Accepted"},s=void 0,d={unversionedId:"architecture-decisions/recovered-data",id:"architecture-decisions/recovered-data",isDocsHomePage:!1,title:"Recovered Data",description:"",source:"@site/docs/architecture-decisions/0005-recovered-data.md",sourceDirName:"architecture-decisions",slug:"/architecture-decisions/recovered-data",permalink:"/Data-Platform-Playbook/architecture-decisions/recovered-data",editUrl:"https://github.com/LBHackney-IT/data-platform-playbook/edit/master/docs/architecture-decisions/0005-recovered-data.md",tags:[{label:"adr",permalink:"/Data-Platform-Playbook/tags/adr"}],version:"current",sidebarPosition:5,frontMatter:{title:"Recovered Data",description:"",tags:["adr"],number:"5","date-issued":"2021-05-20",status:"Accepted"},sidebar:"docs",previous:{title:"Partition Strategy",permalink:"/Data-Platform-Playbook/architecture-decisions/partition-strategy"},next:{title:"Ingest SQL flat files",permalink:"/Data-Platform-Playbook/architecture-decisions/ingest-sql-flat-files"}},l=[{value:"Context",id:"context",children:[]},{value:"Decision",id:"decision",children:[]},{value:"Consequences",id:"consequences",children:[]}],u={toc:l};function p(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"context"},"Context"),(0,o.kt)("p",null,"Hackney have recovered a number of datasets from prior to the Cybersecurity incident, these datasets will need to be\nmerged with datasets created after the incident."),(0,o.kt)("h2",{id:"decision"},"Decision"),(0,o.kt)("p",null,"Recovered datasets that are in a consumable format (json, csv, .sql) will be deposited into the landing zone directly,\nusing the same partition storage strategy as other data sets ",(0,o.kt)("a",{parentName:"p",href:"/Data-Platform-Playbook/architecture-decisions/partition-strategy"},"see ADR 0004")),(0,o.kt)("h2",{id:"consequences"},"Consequences"),(0,o.kt)("p",null,"Anyone needing to deposit recovered data onto the Data Platform would need access to the Data Platform."))}p.isMDXComponent=!0}}]);