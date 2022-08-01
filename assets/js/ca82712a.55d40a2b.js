"use strict";(self.webpackChunkdata_platform_playbook=self.webpackChunkdata_platform_playbook||[]).push([[1331],{3905:function(t,e,a){a.d(e,{Zo:function(){return c},kt:function(){return f}});var o=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function n(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,o)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?n(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,o,r=function(t,e){if(null==t)return{};var a,o,r={},n=Object.keys(t);for(o=0;o<n.length;o++)a=n[o],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(o=0;o<n.length;o++)a=n[o],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var u=o.createContext({}),s=function(t){var e=o.useContext(u),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},c=function(t){var e=s(t.components);return o.createElement(u.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},p=o.forwardRef((function(t,e){var a=t.components,r=t.mdxType,n=t.originalType,u=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),p=s(a),f=r,m=p["".concat(u,".").concat(f)]||p[f]||d[f]||n;return a?o.createElement(m,l(l({ref:e},c),{},{components:a})):o.createElement(m,l({ref:e},c))}));function f(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var n=a.length,l=new Array(n);l[0]=p;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i.mdxType="string"==typeof t?t:r,l[1]=i;for(var s=2;s<n;s++)l[s]=a[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,a)}p.displayName="MDXCreateElement"},2249:function(t,e,a){a.r(e),a.d(e,{assets:function(){return c},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return d}});var o=a(3117),r=a(102),n=(a(7294),a(3905)),l=["components"],i={title:"Data Catalogue",layout:"playbook_js",tags:["playbook"]},u=void 0,s={unversionedId:"playbook/elements-of-the-platform/data-catalogue",id:"playbook/elements-of-the-platform/data-catalogue",title:"Data Catalogue",description:"What is a data catalogue?",source:"@site/docs/playbook/elements-of-the-platform/data-catalogue.md",sourceDirName:"playbook/elements-of-the-platform",slug:"/playbook/elements-of-the-platform/data-catalogue",permalink:"/Data-Platform-Playbook/playbook/elements-of-the-platform/data-catalogue",draft:!1,editUrl:"https://github.com/LBHackney-IT/data-platform-playbook/edit/master/docs/playbook/elements-of-the-platform/data-catalogue.md",tags:[{label:"playbook",permalink:"/Data-Platform-Playbook/tags/playbook"}],version:"current",frontMatter:{title:"Data Catalogue",layout:"playbook_js",tags:["playbook"]},sidebar:"docs",previous:{title:"Using GitHub",permalink:"/Data-Platform-Playbook/playbook/getting-set-up/using-github"},next:{title:"Data Lake",permalink:"/Data-Platform-Playbook/playbook/elements-of-the-platform/data-lake"}},c={},d=[{value:"What is a data catalogue?",id:"what-is-a-data-catalogue",level:2},{value:"How is our data catalogue built",id:"how-is-our-data-catalogue-built",level:2}],p={toc:d};function f(t){var e=t.components,a=(0,r.Z)(t,l);return(0,n.kt)("wrapper",(0,o.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"what-is-a-data-catalogue"},"What is a data catalogue?"),(0,n.kt)("p",null,"A ",(0,n.kt)("em",{parentName:"p"},"data catalogue")," is a tool which provides an inventory of all data assets held within the data lake. It enables users to discover:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"what datasets are already in the data lake"),(0,n.kt)("li",{parentName:"ul"},"what fields and data types a dataset contains"),(0,n.kt)("li",{parentName:"ul"},"where to find the data within the lake"),(0,n.kt)("li",{parentName:"ul"},"who owns the data"),(0,n.kt)("li",{parentName:"ul"},"who uses the data")),(0,n.kt)("p",null,"However, a data catalogue ",(0,n.kt)("em",{parentName:"p"},"isn't"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A data store or a data warehouse (e.g. London DataStore). The data is still stored within the lake, not the catalogue, so you won't be able to access or download the data directly from the catalogue."),(0,n.kt)("li",{parentName:"ul"},"A way to search for specific data points. For example, you can search for datasets that contain a 'date of birth' field, but you cannot search a dataset for a specific date of birth. You'll need to get access to the data and query it from the lake or a BI tool for this."),(0,n.kt)("li",{parentName:"ul"},"A way to access data without going through appropriate approval processes under GDPR. The catalogue will enable you to see datasets held by other services and who to request this from, but you will still need to complete a Privacy Impact Assessment and provide a legal basis for accessing and processing this data.")),(0,n.kt)("h2",{id:"how-is-our-data-catalogue-built"},"How is our data catalogue built"),(0,n.kt)("p",null,"The data catalogue is built using a tool called ",(0,n.kt)("a",{parentName:"p",href:"https://datahubproject.io/docs/features"},"DataHub"),". "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"DataHub catalogues our data based on event-sourced metadata. When new data is added, or existing data updated, an event will be registered by the DataHub API and the change being made to the data will be added to the catalogue "),(0,n.kt)("li",{parentName:"ul"},"DataHub also catalogues our data based on relational models. These models use similar types of data (eg. names, dates of birth), as defined by Hackney, to identify where there is a relationship between different pieces of data")),(0,n.kt)("p",null,"More detailed information on how to use the Data Catalogue can be found here: ",(0,n.kt)("a",{parentName:"p",href:"/Data-Platform-Playbook/playbook/finding-data/data-catalogue"},"Using the Data Catalogue")))}f.isMDXComponent=!0}}]);