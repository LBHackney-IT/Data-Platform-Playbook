"use strict";(self.webpackChunkdata_platform_playbook=self.webpackChunkdata_platform_playbook||[]).push([[915],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>c});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),d=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=d(e.components);return r.createElement(i.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=d(a),f=n,c=m["".concat(i,".").concat(f)]||m[f]||u[f]||o;return a?r.createElement(c,s(s({ref:t},p),{},{components:a})):r.createElement(c,s({ref:t},p))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=f;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[m]="string"==typeof e?e:n,s[1]=l;for(var d=2;d<o;d++)s[d]=a[d];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}f.displayName="MDXCreateElement"},6247:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var r=a(7462),n=(a(7294),a(3905));const o={id:"zones",title:"Zones",slug:"/zones"},s=void 0,l={unversionedId:"zones",id:"zones",title:"Zones",description:"The Platform has 4 data zones, as data is moved from the landing or raw zones to the trusted zone it will become:",source:"@site/docs/zones.md",sourceDirName:".",slug:"/zones",permalink:"/Data-Platform-Playbook/zones",draft:!1,editUrl:"https://github.com/LBHackney-IT/data-platform-playbook/edit/master/docs/zones.md",tags:[],version:"current",frontMatter:{id:"zones",title:"Zones",slug:"/zones"},sidebar:"docs",previous:{title:"About this Playbook",permalink:"/Data-Platform-Playbook/about-playbook"},next:{title:"Environments",permalink:"/Data-Platform-Playbook/environments"}},i={},d=[{value:"Landing Zone",id:"landing-zone",level:2},{value:"Purpose",id:"purpose",level:3},{value:"Storage Formats",id:"storage-formats",level:3},{value:"Transformations",id:"transformations",level:3},{value:"Raw Zone",id:"raw-zone",level:2},{value:"Purpose",id:"purpose-1",level:3},{value:"Storage Formats",id:"storage-formats-1",level:3},{value:"Transformations",id:"transformations-1",level:3},{value:"Refined Zone",id:"refined-zone",level:2},{value:"Purpose",id:"purpose-2",level:3},{value:"Storage Formats",id:"storage-formats-2",level:3},{value:"Transformations",id:"transformations-2",level:3},{value:"Trusted Zone",id:"trusted-zone",level:2},{value:"Purpose",id:"purpose-3",level:3},{value:"Storage Formats",id:"storage-formats-3",level:3}],p={toc:d},m="wrapper";function u(e){let{components:t,...a}=e;return(0,n.kt)(m,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The Platform has 4 data zones, as data is moved from the landing or raw zones to the trusted zone it will become:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"more valuable to the council"),(0,n.kt)("li",{parentName:"ul"},"smaller in volume")),(0,n.kt)("h2",{id:"landing-zone"},"Landing Zone"),(0,n.kt)("h3",{id:"purpose"},"Purpose"),(0,n.kt)("p",null,"The ",(0,n.kt)("em",{parentName:"p"},"Landing Zone")," is used when we need to provide folder level access to third parties to facilitate:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"data being pushed to Data Platform, for example where a third party provides extracted data from a system."),(0,n.kt)("li",{parentName:"ul"},"when we want to provide data for collection by an external party.   ")),(0,n.kt)("p",null,"Data is not queryable directly from this zone and it is controlled by the Data Platform team."),(0,n.kt)("h3",{id:"storage-formats"},"Storage Formats"),(0,n.kt)("p",null,"Data in this zone should be stored in the ",(0,n.kt)("em",{parentName:"p"},"format it arrived"),", be that csv, json, parquet, etc."),(0,n.kt)("h3",{id:"transformations"},"Transformations"),(0,n.kt)("p",null,"No transformations should be applied to the data in this zone."),(0,n.kt)("h2",{id:"raw-zone"},"Raw Zone"),(0,n.kt)("h3",{id:"purpose-1"},"Purpose"),(0,n.kt)("p",null,"The ",(0,n.kt)("em",{parentName:"p"},"Raw Zone")," is for data that we have ",(0,n.kt)("em",{parentName:"p"},"pulled")," on to the Data Platform from a source, for example a database or API. It also contains data that has been pulled from the ",(0,n.kt)("em",{parentName:"p"},"Landing Zone"),", and if necessary segregated into different service area buckets (e.g. Academy data being split between Revenues and Benefits)."),(0,n.kt)("p",null,"It contains data as it was extracted from the source without any transformation applied so that a user can always refer back to the initial state of a dataset when it was brought onto Data Platform."),(0,n.kt)("p",null,"In this zone the Data Platform team and analysts or engineers from a department can store data that they want to work with on Data Platform."),(0,n.kt)("h3",{id:"storage-formats-1"},"Storage Formats"),(0,n.kt)("p",null,"Data should be stored in its ",(0,n.kt)("em",{parentName:"p"},"original format")," as extracted from the source. Tabular data may additionally be converted to ",(0,n.kt)("em",{parentName:"p"},"parquet")," format to leverage storage and retrieval efficiencies."),(0,n.kt)("h3",{id:"transformations-1"},"Transformations"),(0,n.kt)("p",null,"Tabular data may be converted to ",(0,n.kt)("em",{parentName:"p"},"parquet")," as long as a copy of the original data as extracted is also retained, but the structure and values should remain as extracted from the source."),(0,n.kt)("h2",{id:"refined-zone"},"Refined Zone"),(0,n.kt)("h3",{id:"purpose-2"},"Purpose"),(0,n.kt)("p",null,"The ",(0,n.kt)("em",{parentName:"p"},"Refined Zone")," holds data that has been transformed from its original state in the ",(0,n.kt)("em",{parentName:"p"},"Landing")," or ",(0,n.kt)("em",{parentName:"p"},"Raw Zones"),". Data in this zone may be cleaned, standardised or otherwise augmented to make it more useful for analysts."),(0,n.kt)("p",null,"In this zone analysts and engineers explore, experiment and test the data."),(0,n.kt)("h3",{id:"storage-formats-2"},"Storage Formats"),(0,n.kt)("p",null,"Tabular data in this zone should only be in ",(0,n.kt)("em",{parentName:"p"},"parquet")," format. "),(0,n.kt)("h3",{id:"transformations-2"},"Transformations"),(0,n.kt)("p",null,"Data should, as a minimum, be partitioned following the four level date scheme: ",(0,n.kt)("inlineCode",{parentName:"p"},"'import_year', 'import_month', 'import_day', 'import_date'"),"\nColumns should have meaningful headers. Many other transformations may be applied. "),(0,n.kt)("h2",{id:"trusted-zone"},"Trusted Zone"),(0,n.kt)("h3",{id:"purpose-3"},"Purpose"),(0,n.kt)("p",null,"The ",(0,n.kt)("em",{parentName:"p"},"Trusted Zone")," holds our 'gold standard' datasets that have been transformed with appropriate business logic and aggregation. These datasets meet common standards and should be described in a way that non-subject matter experts can understand."),(0,n.kt)("p",null,"The data in this zone may be provided with read access to data analysts, business analysts and the wider council community for creating data products and informing decision making. "),(0,n.kt)("h3",{id:"storage-formats-3"},"Storage Formats"),(0,n.kt)("p",null,"Tabular data in this zone should only be in parquet format."))}u.isMDXComponent=!0}}]);