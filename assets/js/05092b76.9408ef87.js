"use strict";(self.webpackChunkdata_platform_playbook=self.webpackChunkdata_platform_playbook||[]).push([[8517],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return g}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=d(n),g=o,m=p["".concat(c,".").concat(g)]||p[g]||l[g]||a;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var d=2;d<a;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4401:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return u},default:function(){return p}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],s={id:"production-data-in-staging",title:"production-data-in-staging",description:"",tags:["adr"],number:"8","date-issued":"2021-06-25",status:"Accepted"},c=void 0,d={unversionedId:"architecture-decisions/records/production-data-in-staging",id:"architecture-decisions/records/production-data-in-staging",isDocsHomePage:!1,title:"production-data-in-staging",description:"",source:"@site/docs/architecture-decisions/records/008-production-data-in-staging.md",sourceDirName:"architecture-decisions/records",slug:"/architecture-decisions/records/production-data-in-staging",permalink:"/Data-Platform-Playbook/architecture-decisions/records/production-data-in-staging",editUrl:"https://github.com/LBHackney-IT/data-platform-playbook/edit/master/docs/architecture-decisions/records/008-production-data-in-staging.md",tags:[{label:"adr",permalink:"/Data-Platform-Playbook/tags/adr"}],version:"current",sidebarPosition:8,frontMatter:{id:"production-data-in-staging",title:"production-data-in-staging",description:"",tags:["adr"],number:"8","date-issued":"2021-06-25",status:"Accepted"},sidebar:"docs",previous:{title:"Copy Liberator data from sftp to s3",permalink:"/Data-Platform-Playbook/architecture-decisions/records/sftp-to-s3-lambda"},next:{title:"Ingesting data from APIs",permalink:"/Data-Platform-Playbook/architecture-decisions/records/ingesting-data-from-apis"}},u=[{value:"Context",id:"context",children:[]},{value:"Decision",id:"decision",children:[]},{value:"Consequences",id:"consequences",children:[]}],l={toc:u};function p(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"context"},"Context"),(0,a.kt)("p",null,"The Data Platform is currently broken up into three separate accounts, Development, Staging, and Production."),(0,a.kt)("p",null,"Production has been designed to run reporting, repeating ETL process and provide a stable environment for staff to run Qlik\nor other BI tools against."),(0,a.kt)("p",null,"Development has been designed for engineers to independently test out new features, functionality or\ninfrastructure relating to the platform."),(0,a.kt)("p",null,"Staging, a term normally used to refer to a mirror, clone or close approximation of the Production environment which is\nnormally used to test out changes intended on being placed in Production."),(0,a.kt)("p",null,"Analysts/Engineers require a place to build, modify and test new or existing ETL process in an environment that will not\nhave an impact on the Production environment."),(0,a.kt)("p",null,'The data that the Analysts/Engineers will need to use in order to develop these process will need to have the same\nschema structure and underlying data structure as the production data. Generating such data as "dummy data" would be\ncomplex and time-consuming based on the quantity and quality of the data being consumed by Hackney.'),(0,a.kt)("h2",{id:"decision"},"Decision"),(0,a.kt)("p",null,"Analysts/Engineers will use the Staging environment to build, modify and test new or existing ETL process."),(0,a.kt)("p",null,"The Staging environment will contain copies of Production data."),(0,a.kt)("h2",{id:"consequences"},"Consequences"),(0,a.kt)("p",null,"The Staging environment will need to be secure as if it were a production system, restricting the data that\nAnalysts/Engineers have access to."),(0,a.kt)("p",null,"Analysts/Engineers may find the Staging environment restrictive when developing new processes as they may not have\naccess to data they would like to have access to but do not have permission to access."),(0,a.kt)("p",null,"The process of placing production data into a Staging environment is not common and may confuse new engineers brought\nonto project."))}p.isMDXComponent=!0}}]);