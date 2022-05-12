"use strict";(self.webpackChunkdata_platform_playbook=self.webpackChunkdata_platform_playbook||[]).push([[4446],{3905:function(e,t,a){a.d(t,{Zo:function(){return l},kt:function(){return f}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),c=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},l=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=c(a),f=r,m=p["".concat(u,".").concat(f)]||p[f]||d[f]||o;return a?n.createElement(m,i(i({ref:t},l),{},{components:a})):n.createElement(m,i({ref:t},l))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=p;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},8197:function(e,t,a){a.r(t),a.d(t,{assets:function(){return l},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var n=a(3117),r=a(102),o=(a(7294),a(3905)),i=["components"],s={id:"using-datahub-as-a-data-catalogue",title:"Using DataHub as a Data Catalogue",description:"",tags:["adr"],number:"11","date-issued":"2021-10-07",status:"Accepted"},u=void 0,c={unversionedId:"architecture-decisions/records/using-datahub-as-a-data-catalogue",id:"architecture-decisions/records/using-datahub-as-a-data-catalogue",title:"Using DataHub as a Data Catalogue",description:"",source:"@site/docs/architecture-decisions/records/011-using-datahub-as-a-data-catalogue.md",sourceDirName:"architecture-decisions/records",slug:"/architecture-decisions/records/using-datahub-as-a-data-catalogue",permalink:"/Data-Platform-Playbook/architecture-decisions/records/using-datahub-as-a-data-catalogue",draft:!1,editUrl:"https://github.com/LBHackney-IT/data-platform-playbook/edit/master/docs/architecture-decisions/records/011-using-datahub-as-a-data-catalogue.md",tags:[{label:"adr",permalink:"/Data-Platform-Playbook/tags/adr"}],version:"current",sidebarPosition:11,frontMatter:{id:"using-datahub-as-a-data-catalogue",title:"Using DataHub as a Data Catalogue",description:"",tags:["adr"],number:"11","date-issued":"2021-10-07",status:"Accepted"},sidebar:"docs",previous:{title:"Using pytest for verifying PySpark transformations",permalink:"/Data-Platform-Playbook/architecture-decisions/records/using-pytest-for-verifying-pyspark-transformations"},next:{title:"Using Event Streaming to Ingest Data",permalink:"/Data-Platform-Playbook/architecture-decisions/records/do-not-connect-to-production-databases"}},l={},d=[{value:"Context",id:"context",level:2},{value:"Decision Drivers",id:"decision-drivers",level:2},{value:"Considered Options",id:"considered-options",level:2},{value:"Decision",id:"decision",level:2},{value:"Consequences",id:"consequences",level:2}],p={toc:d};function f(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"context"},"Context"),(0,o.kt)("p",null,"We need users to be able to browse and search the datasets within the platform so that they can find what they need, and we can break down data siloes. There are various different ways to implement this."),(0,o.kt)("h2",{id:"decision-drivers"},"Decision Drivers"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Ease of set up and maintenance"),(0,o.kt)("li",{parentName:"ul"},"Features and user experience"),(0,o.kt)("li",{parentName:"ul"},"Ability to ingest metadata from the data lake"),(0,o.kt)("li",{parentName:"ul"},"Cost")),(0,o.kt)("h2",{id:"considered-options"},"Considered Options"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Bespoke, in-house solution"),(0,o.kt)("li",{parentName:"ul"},"Open source solutions (DataHub, Amundsen, Metacat, Marquez)"),(0,o.kt)("li",{parentName:"ul"},"Paid-for solutions (Atlan, Qlik, Google Cloud Catalog)")),(0,o.kt)("h2",{id:"decision"},"Decision"),(0,o.kt)("p",null,"We have decided to use an DataHub, an open source tool, as our data catalogue tool because:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"We have been able to successfully set it up in our AWS environment without much difficulty ","[please add here]"),(0,o.kt)("li",{parentName:"ul"},"It has the basic features we require to catalogue datasets (e.g. a range of metadata available which users can add to, search and browse functionality) as well as additional functionality that may enable us to catalogue data pipelines, dashboards, models etc in future."),(0,o.kt)("li",{parentName:"ul"},"Users responded positively to it in user research."),(0,o.kt)("li",{parentName:"ul"},"It is capable of ingesting metadata from Hive/AWS Glue and thus our data lake."),(0,o.kt)("li",{parentName:"ul"},"It is open-source and therefore cost is limited."),(0,o.kt)("li",{parentName:"ul"},"It has an active community where we have an opportunity to influence its future development.")),(0,o.kt)("h2",{id:"consequences"},"Consequences"),(0,o.kt)("p",null,"The team will need to dedicate resource to its maintenance and any further development we wish to influence."))}f.isMDXComponent=!0}}]);