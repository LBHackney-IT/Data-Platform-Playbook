"use strict";(self.webpackChunkdata_platform_playbook=self.webpackChunkdata_platform_playbook||[]).push([[9469],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var r=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(a),f=o,u=d["".concat(s,".").concat(f)]||d[f]||m[f]||n;return a?r.createElement(u,i(i({ref:t},c),{},{components:a})):r.createElement(u,i({ref:t},c))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,i=new Array(n);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<n;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}f.displayName="MDXCreateElement"},8986:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>n,metadata:()=>l,toc:()=>p});var r=a(7462),o=(a(7294),a(3905));const n={title:"Importing external files to the Data Platform Landing Zone",description:"Overview of how files from external suppliers are imported to the Data Platform Landing Zone",layout:"playbook_js",tags:["playbook"]},i=void 0,l={unversionedId:"docs/import-external-files-to-landing-zone",id:"docs/import-external-files-to-landing-zone",title:"Importing external files to the Data Platform Landing Zone",description:"Overview of how files from external suppliers are imported to the Data Platform Landing Zone",source:"@site/docs/docs/import-external-files-to-landing-zone.md",sourceDirName:"docs",slug:"/docs/import-external-files-to-landing-zone",permalink:"/Data-Platform-Playbook/docs/import-external-files-to-landing-zone",draft:!1,editUrl:"https://github.com/LBHackney-IT/data-platform-playbook/edit/master/docs/docs/import-external-files-to-landing-zone.md",tags:[{label:"playbook",permalink:"/Data-Platform-Playbook/tags/playbook"}],version:"current",frontMatter:{title:"Importing external files to the Data Platform Landing Zone",description:"Overview of how files from external suppliers are imported to the Data Platform Landing Zone",layout:"playbook_js",tags:["playbook"]},sidebar:"docs",previous:{title:"Exporting database snapshots to the Data Platform Landing Zone",permalink:"/Data-Platform-Playbook/docs/exporting-snapshot-to-landing-zone"},next:{title:"Import spreadsheets from G Drive",permalink:"/Data-Platform-Playbook/docs/import-spreadsheet-from-g-drive"}},s={},p=[],c={toc:p},d="wrapper";function m(e){let{components:t,...a}=e;return(0,o.kt)(d,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This section covers the technical overview of how external suppliers can import data into the data platform. This can be done using various file formats, e.g. .csv and SQL data dumps"),(0,o.kt)("p",null,"The terraform script ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/LBHackney-IT/Data-Platform/blob/main/terraform/core/19-liberator-iam.tf"},"33-liberator-iam.tf")," provisions an AWS IAM User and associated policies. The policies will allow the external supplier to see an S3 specified by the policy and to upload a file into that bucket and see the file. In the example script, this bucket is ",(0,o.kt)("inlineCode",{parentName:"p"},"s3://dataplatform-prod-liberator-data-storage/parking/")),(0,o.kt)("p",null,"The login details for the user can be used by the external provider by executing the following steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The external supplier logs into AWS using the ",(0,o.kt)("a",{parentName:"li",href:"https://aws.amazon.com/cli/"},"AWS Command Line Interface")),(0,o.kt)("li",{parentName:"ol"},"The external supplier uses the ",(0,o.kt)("inlineCode",{parentName:"li"},"aws s3 cp")," command with the source location and the destination as arguments, e.g.",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"aws s3 cp c:\\<SUPPLIER_COMPUTER>\\<SOURCE_FILE_NAME>.csv s3://dataplatform-prod-liberator-data-storage/parking/\n"))),(0,o.kt)("li",{parentName:"ol"},"When the document has been uploaded to the Data Storage Zone the external supplier can disconnect."),(0,o.kt)("li",{parentName:"ol"},"In the case of the Liberator data, the upload will automatically trigger a process which converts the data dump in the data storage zone into parquet format. Following this, there is a Lambda which moves the parquet data into the Landing Zone for further processing.")))}m.isMDXComponent=!0}}]);