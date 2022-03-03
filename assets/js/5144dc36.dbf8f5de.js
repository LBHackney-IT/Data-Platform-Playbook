"use strict";(self.webpackChunkdata_platform_playbook=self.webpackChunkdata_platform_playbook||[]).push([[8467],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=o.createContext({}),s=function(e){var t=o.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(r),m=n,u=d["".concat(p,".").concat(m)]||d[m]||f[m]||a;return r?o.createElement(u,i(i({ref:t},c),{},{components:r})):o.createElement(u,i({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5863:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var o=r(7462),n=r(3366),a=(r(7294),r(3905)),i=["components"],l={title:"Import XLXS from G Drive",description:"Overview of how data is imported from XLXS files that are stored in G drive",layout:"playbook_js",tags:["playbook"]},p=void 0,s={unversionedId:"docs/import-xlsx-from-g-drive",id:"docs/import-xlsx-from-g-drive",isDocsHomePage:!1,title:"Import XLXS from G Drive",description:"Overview of how data is imported from XLXS files that are stored in G drive",source:"@site/docs/docs/import-xlsx-from-g-drive.md",sourceDirName:"docs",slug:"/docs/import-xlsx-from-g-drive",permalink:"/Data-Platform-Playbook/docs/import-xlsx-from-g-drive",editUrl:"https://github.com/LBHackney-IT/data-platform-playbook/edit/master/docs/docs/import-xlsx-from-g-drive.md",tags:[{label:"playbook",permalink:"/Data-Platform-Playbook/tags/playbook"}],version:"current",frontMatter:{title:"Import XLXS from G Drive",description:"Overview of how data is imported from XLXS files that are stored in G drive",layout:"playbook_js",tags:["playbook"]},sidebar:"docs",previous:{title:"Importing external files to the Data Platform Landing Zone",permalink:"/Data-Platform-Playbook/docs/import-external-files-to-landing-zone"},next:{title:"Redshift - Creating users, databases and exposing data from Glue",permalink:"/Data-Platform-Playbook/docs/redshift"}},c=[],f={toc:c};function d(e){var t=e.components,l=(0,n.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},f,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This section covers the technical overview of uploading data into the data\nplatform from an xlsx spreadsheet stored in Google drive. For step by step instructions on how to do\nthis, refer to ",(0,a.kt)("a",{parentName:"p",href:"../playbook/import-xlsx-from-g-drive"},"Import XLXS from G Drive"),"\nguide."),(0,a.kt)("p",null,"The terraform module ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/LBHackney-IT/Data-Platform/tree/main/modules/import-xlsx-file-from-g-drive"},(0,a.kt)("inlineCode",{parentName:"a"},"import_xlsx_file_from_g_drive"))," will provision the following resources:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"import xlsx from g-drive",src:r(5654).Z})),(0,a.kt)("p",null,"At deployment a single lambda will be deployed per file along side a glue job\nand crawler provisioned for each worksheet that will be imported."),(0,a.kt)("p",null,"After deployed a CloudWatch trigger will invoke the copier lambda at 10 am daily."),(0,a.kt)("p",null,"The lambda will copy the specified file into the S3 landing zone bucket and\nstart all the glue jobs that will import data from the defined workbooks."),(0,a.kt)("p",null,"Upon a successful glue job run a crawler will be run and produce a data catalog\nfor the dataset."))}d.isMDXComponent=!0},5654:function(e,t,r){t.Z=r.p+"assets/images/import-xlsx-from-g-drive-a913109d3c0091fb089ae1948cfa0626.png"}}]);