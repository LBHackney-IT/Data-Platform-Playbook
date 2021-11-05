"use strict";(self.webpackChunkdata_platform_playbook=self.webpackChunkdata_platform_playbook||[]).push([[5067],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(r),f=o,m=p["".concat(s,".").concat(f)]||p[f]||d[f]||a;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},4489:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return p}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],c={title:"Copy Liberator data from sftp to s3",description:"Retrieve daily zip file from SFTP server and upload to S3 (landing zone bucket)",tags:["adr"],number:"007","date-issued":"2021-05-28",status:"Accepted"},s=void 0,l={unversionedId:"architecture-decisions/sftp-to-s3-lambda",id:"architecture-decisions/sftp-to-s3-lambda",isDocsHomePage:!1,title:"Copy Liberator data from sftp to s3",description:"Retrieve daily zip file from SFTP server and upload to S3 (landing zone bucket)",source:"@site/docs/architecture-decisions/sftp-to-s3-lambda.md",sourceDirName:"architecture-decisions",slug:"/architecture-decisions/sftp-to-s3-lambda",permalink:"/Data-Platform-Playbook/architecture-decisions/sftp-to-s3-lambda",editUrl:"https://github.com/LBHackney-IT/data-platform-playbook/edit/master/docs/architecture-decisions/sftp-to-s3-lambda.md",tags:[{label:"adr",permalink:"/Data-Platform-Playbook/tags/adr"}],version:"current",frontMatter:{title:"Copy Liberator data from sftp to s3",description:"Retrieve daily zip file from SFTP server and upload to S3 (landing zone bucket)",tags:["adr"],number:"007","date-issued":"2021-05-28",status:"Accepted"},sidebar:"docs",previous:{title:"Role-Based Access Control",permalink:"/Data-Platform-Playbook/architecture-decisions/role-based-access-control"},next:{title:"Using DataHub as a Data Catalogue",permalink:"/Data-Platform-Playbook/architecture-decisions/using-datahub-as-a-data-catalogue"}},u=[{value:"Context",id:"context",children:[]},{value:"Decision",id:"decision",children:[]},{value:"Consequences",id:"consequences",children:[]}],d={toc:u};function p(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"context"},"Context"),(0,a.kt)("p",null,"An SQL dump of the liberator database is put in a SFTP server as a zip file by a supplier. This data is important to the parking team so we need to ingest it into the platform. In order to do this we first need to move the data from the SFTP server into the landing zone S3 bucket."),(0,a.kt)("p",null,"There was also the option to pay for the supplier to directly drop the file into S3."),(0,a.kt)("h2",{id:"decision"},"Decision"),(0,a.kt)("p",null,"We will use a lambda function to achieve this. The function will run at 06:00 UTC, triggered by a cloudwatch event, finding the file date stamped for that day then streaming it into the given S3 bucket."),(0,a.kt)("p",null,"It finds the file by searching for a filename pattern, if there is more than one file that matches then it will get all of them."),(0,a.kt)("p",null,"The connection details for the SFTP server are stored in ssm parameter store."),(0,a.kt)("h2",{id:"consequences"},"Consequences"),(0,a.kt)("p",null,"This lambda function is not currenlty reusable as we need to search for the correct file in the server before retrieving it, which is not generic. Further work could be done to seperate this out, if required."))}p.isMDXComponent=!0}}]);