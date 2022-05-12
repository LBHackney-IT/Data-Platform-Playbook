"use strict";(self.webpackChunkdata_platform_playbook=self.webpackChunkdata_platform_playbook||[]).push([[5656],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),f=o,g=p["".concat(c,".").concat(f)]||p[f]||d[f]||a;return r?n.createElement(g,i(i({ref:t},u),{},{components:r})):n.createElement(g,i({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},926:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return d}});var n=r(3117),o=r(102),a=(r(7294),r(3905)),i=["components"],s={id:"ingest-google-sheets-data",title:"Ingest Google Sheets Data",description:"",tags:["adr"],number:"2","date-issued":"2021-03-23",status:"Accepted"},c=void 0,l={unversionedId:"architecture-decisions/records/ingest-google-sheets-data",id:"architecture-decisions/records/ingest-google-sheets-data",title:"Ingest Google Sheets Data",description:"",source:"@site/docs/architecture-decisions/records/002-ingest-google-sheets-data.md",sourceDirName:"architecture-decisions/records",slug:"/architecture-decisions/records/ingest-google-sheets-data",permalink:"/Data-Platform-Playbook/architecture-decisions/records/ingest-google-sheets-data",draft:!1,editUrl:"https://github.com/LBHackney-IT/data-platform-playbook/edit/master/docs/architecture-decisions/records/002-ingest-google-sheets-data.md",tags:[{label:"adr",permalink:"/Data-Platform-Playbook/tags/adr"}],version:"current",sidebarPosition:2,frontMatter:{id:"ingest-google-sheets-data",title:"Ingest Google Sheets Data",description:"",tags:["adr"],number:"2","date-issued":"2021-03-23",status:"Accepted"},sidebar:"docs",previous:{title:"Record architecture decisions",permalink:"/Data-Platform-Playbook/architecture-decisions/records/record-architecture-decisions"},next:{title:"Role-Based Access Control",permalink:"/Data-Platform-Playbook/architecture-decisions/records/role-based-access-control"}},u={},d=[{value:"Context",id:"context",level:2},{value:"Decision",id:"decision",level:2},{value:"Consequences",id:"consequences",level:2}],p={toc:d};function f(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"context"},"Context"),(0,a.kt)("p",null,"Hackney currently have datasets distributed over a number of different Google Sheets Documents due their data recovery\nefforts. We need to get this information pulled into the data platform for processing."),(0,a.kt)("h2",{id:"decision"},"Decision"),(0,a.kt)("p",null,"We will use a python based AWS Glue Job in conjunction with the gspread python library to pull the data onto platform"),(0,a.kt)("h2",{id:"consequences"},"Consequences"),(0,a.kt)("p",null,"Having the code sit with AWS Glue makes the data import easier to keep consistent with the rest of the platform but\nleaves us dependent on being able to import the gspread library into the AWS Glue job and requires that we access\ncredentials from Google Workspace"))}f.isMDXComponent=!0}}]);