"use strict";(self.webpackChunkdata_platform_playbook=self.webpackChunkdata_platform_playbook||[]).push([[252],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),l=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(r),f=n,m=p["".concat(c,".").concat(f)]||p[f]||u[f]||a;return r?o.createElement(m,i(i({ref:t},d),{},{components:r})):o.createElement(m,i({ref:t},d))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:n,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}f.displayName="MDXCreateElement"},1633:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var o=r(7462),n=(r(7294),r(3905));const a={id:"sftp-to-s3-lambda",title:"Copy Liberator data from sftp to s3 - ADR 007",description:"Retrieve daily zip file from SFTP server and upload to S3 (landing zone bucket)",tags:["adr"],number:"007","date-issued":"2021-05-28",status:"Accepted"},i=void 0,s={unversionedId:"architecture-decisions/records/sftp-to-s3-lambda",id:"architecture-decisions/records/sftp-to-s3-lambda",title:"Copy Liberator data from sftp to s3 - ADR 007",description:"Retrieve daily zip file from SFTP server and upload to S3 (landing zone bucket)",source:"@site/docs/architecture-decisions/records/007-sftp-to-s3-lambda.md",sourceDirName:"architecture-decisions/records",slug:"/architecture-decisions/records/sftp-to-s3-lambda",permalink:"/Data-Platform-Playbook/architecture-decisions/records/sftp-to-s3-lambda",draft:!1,editUrl:"https://github.com/LBHackney-IT/data-platform-playbook/edit/master/docs/architecture-decisions/records/007-sftp-to-s3-lambda.md",tags:[{label:"adr",permalink:"/Data-Platform-Playbook/tags/adr"}],version:"current",sidebarPosition:7,frontMatter:{id:"sftp-to-s3-lambda",title:"Copy Liberator data from sftp to s3 - ADR 007",description:"Retrieve daily zip file from SFTP server and upload to S3 (landing zone bucket)",tags:["adr"],number:"007","date-issued":"2021-05-28",status:"Accepted"},sidebar:"docs",previous:{title:"Ingest SQL flat files - ADR 006",permalink:"/Data-Platform-Playbook/architecture-decisions/records/ingest-sql-flat-files"},next:{title:"Production Data in Staging - ADR 008",permalink:"/Data-Platform-Playbook/architecture-decisions/records/production-data-in-staging"}},c={},l=[{value:"Context",id:"context",level:2},{value:"Decision",id:"decision",level:2},{value:"Consequences",id:"consequences",level:2}],d={toc:l},p="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,o.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"context"},"Context"),(0,n.kt)("p",null,"An SQL dump of the liberator database is put in a SFTP server as a zip file by a supplier. This data is important to the parking team so we need to ingest it into the platform. In order to do this we first need to move the data from the SFTP server into the landing zone S3 bucket."),(0,n.kt)("p",null,"There was also the option to pay for the supplier to directly drop the file into S3."),(0,n.kt)("h2",{id:"decision"},"Decision"),(0,n.kt)("p",null,"We will use a lambda function to achieve this. The function will run at 06:00 UTC, triggered by a cloudwatch event, finding the file date stamped for that day then streaming it into the given S3 bucket."),(0,n.kt)("p",null,"It finds the file by searching for a filename pattern, if there is more than one file that matches then it will get all of them."),(0,n.kt)("p",null,"The connection details for the SFTP server are stored in ssm parameter store."),(0,n.kt)("h2",{id:"consequences"},"Consequences"),(0,n.kt)("p",null,"This lambda function is not currenlty reusable as we need to search for the correct file in the server before retrieving it, which is not generic. Further work could be done to seperate this out, if required."))}u.isMDXComponent=!0}}]);