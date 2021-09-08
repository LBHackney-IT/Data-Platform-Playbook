(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{111:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(7),a=(n(0),n(122)),i={title:"Ingest Google Sheets Data",description:"",tags:"adr",number:"2","date-issued":"2021-03-23",status:"Accepted"},c={unversionedId:"architecture-decisions/0002-ingest-google-sheets-data",id:"architecture-decisions/0002-ingest-google-sheets-data",isDocsHomePage:!1,title:"Ingest Google Sheets Data",description:"Context",source:"@site/docs/architecture-decisions/0002-ingest-google-sheets-data.md",slug:"/architecture-decisions/0002-ingest-google-sheets-data",permalink:"/Data-Platform-Playbook/architecture-decisions/0002-ingest-google-sheets-data",editUrl:"https://github.com/LBHackney-IT/data-platform-playbook/edit/master/docs/architecture-decisions/0002-ingest-google-sheets-data.md",version:"current",sidebar:"docs",previous:{title:"Record architecture decisions",permalink:"/Data-Platform-Playbook/architecture-decisions/0001-record-architecture-decisions"},next:{title:"Role-Based Access Control",permalink:"/Data-Platform-Playbook/architecture-decisions/0003-role-based-access-control"}},s=[{value:"Context",id:"context",children:[]},{value:"Decision",id:"decision",children:[]},{value:"Consequences",id:"consequences",children:[]}],l={toc:s};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"context"},"Context"),Object(a.b)("p",null,"Hackney currently have datasets distributed over a number of different Google Sheets Documents due their data recovery\nefforts. We need to get this information pulled into the data platform for processing."),Object(a.b)("h2",{id:"decision"},"Decision"),Object(a.b)("p",null,"We will use a python based AWS Glue Job in conjunction with the gspread python library to pull the data onto platform"),Object(a.b)("h2",{id:"consequences"},"Consequences"),Object(a.b)("p",null,"Having the code sit with AWS Glue makes the data import easier to keep consistent with the rest of the platform but\nleaves us dependent on being able to import the gspread library into the AWS Glue job and requires that we access\ncredentials from Google Workspace"))}u.isMDXComponent=!0},122:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(n),f=r,b=d["".concat(i,".").concat(f)]||d[f]||p[f]||a;return n?o.a.createElement(b,c(c({ref:t},l),{},{components:n})):o.a.createElement(b,c({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);