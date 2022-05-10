"use strict";(self.webpackChunkdata_platform_playbook=self.webpackChunkdata_platform_playbook||[]).push([[570],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return m}});var o=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=o.createContext({}),p=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),f=p(r),m=a,u=f["".concat(l,".").concat(m)]||f[m]||c[m]||n;return r?o.createElement(u,i(i({ref:t},d),{},{components:r})):o.createElement(u,i({ref:t},d))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,i=new Array(n);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<n;p++)i[p]=r[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}f.displayName="MDXCreateElement"},6914:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return d},default:function(){return f}});var o=r(7462),a=r(3366),n=(r(7294),r(3905)),i=["components"],s={title:"Import spreadsheets from G Drive",description:"Overview of how data is imported from spreadsheets that are stored in G drive",layout:"playbook_js",tags:["playbook"]},l=void 0,p={unversionedId:"docs/import-spreadsheet-from-g-drive",id:"docs/import-spreadsheet-from-g-drive",isDocsHomePage:!1,title:"Import spreadsheets from G Drive",description:"Overview of how data is imported from spreadsheets that are stored in G drive",source:"@site/docs/docs/import-spreadsheet-from-g-drive.md",sourceDirName:"docs",slug:"/docs/import-spreadsheet-from-g-drive",permalink:"/Data-Platform-Playbook/docs/import-spreadsheet-from-g-drive",editUrl:"https://github.com/LBHackney-IT/data-platform-playbook/edit/master/docs/docs/import-spreadsheet-from-g-drive.md",tags:[{label:"playbook",permalink:"/Data-Platform-Playbook/tags/playbook"}],version:"current",frontMatter:{title:"Import spreadsheets from G Drive",description:"Overview of how data is imported from spreadsheets that are stored in G drive",layout:"playbook_js",tags:["playbook"]},sidebar:"docs",previous:{title:"Importing external files to the Data Platform Landing Zone",permalink:"/Data-Platform-Playbook/docs/import-external-files-to-landing-zone"},next:{title:"Redshift - Creating users, databases and exposing data from Glue",permalink:"/Data-Platform-Playbook/docs/redshift"}},d=[],c={toc:d};function f(e){var t=e.components,s=(0,a.Z)(e,i);return(0,n.kt)("wrapper",(0,o.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This section covers the technical overview of uploading data into the data\nplatform from a spreadsheet stored in Google drive. For step by step instructions on how to do\nthis and the file types that are supported please refer to the ",(0,n.kt)("a",{parentName:"p",href:"../playbook/import-spreadsheet-from-g-drive"},"Import spreadsheet from G Drive"),"\nguide."),(0,n.kt)("p",null,"The terraform module ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/LBHackney-IT/Data-Platform/tree/main/modules/import-spreadsheet-file-from-g-drive"},(0,n.kt)("inlineCode",{parentName:"a"},"import_spreadsheet_file_from_g_drive"))," will provision the following resources:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"import spreadsheet from g-drive",src:r(9958).Z})),(0,n.kt)("p",null,"At deployment a single lambda will be deployed per file along side a glue job\nand crawler provisioned for each worksheet that will be imported."),(0,n.kt)("p",null,"After deployed a CloudWatch trigger will invoke the copier lambda at 10 am daily."),(0,n.kt)("p",null,"The lambda will copy the specified file into the S3 landing zone bucket and\nstart all the glue jobs that will import data from the defined workbooks.\nSpark Web UI is used to monitior and debug the glue jobs. Every 30 seconds,\nAWS Glue flushes the Spark event logs to an S3 bucket titled Spark UI Bucket."),(0,n.kt)("p",null,"Upon a successful glue job run a crawler will be run and produce a data catalog\nfor the dataset."))}f.isMDXComponent=!0},9958:function(e,t,r){t.Z=r.p+"assets/images/import-spreadsheet-from-g-drive-ad5217b27f5c0a28e5fe177a213c6882.png"}}]);