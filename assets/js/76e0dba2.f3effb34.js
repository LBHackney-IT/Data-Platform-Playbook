"use strict";(self.webpackChunkdata_platform_playbook=self.webpackChunkdata_platform_playbook||[]).push([[9847],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return f}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),f=r,h=p["".concat(l,".").concat(f)]||p[f]||u[f]||a;return n?i.createElement(h,o(o({ref:t},d),{},{components:n})):i.createElement(h,o({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8108:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return d},default:function(){return p}});var i=n(7462),r=n(3366),a=(n(7294),n(3905)),o=["components"],s={title:"Ingest SQL flat files",description:"",tags:["adr"],number:"6","date-issued":"2021-05-26",status:"Accepted"},l=void 0,c={unversionedId:"architecture-decisions/ingest-sql-flat-files",id:"architecture-decisions/ingest-sql-flat-files",isDocsHomePage:!1,title:"Ingest SQL flat files",description:"",source:"@site/docs/architecture-decisions/0006-ingest-sql-flat-files.md",sourceDirName:"architecture-decisions",slug:"/architecture-decisions/ingest-sql-flat-files",permalink:"/Data-Platform-Playbook/architecture-decisions/ingest-sql-flat-files",editUrl:"https://github.com/LBHackney-IT/data-platform-playbook/edit/master/docs/architecture-decisions/0006-ingest-sql-flat-files.md",tags:[{label:"adr",permalink:"/Data-Platform-Playbook/tags/adr"}],version:"current",sidebarPosition:6,frontMatter:{title:"Ingest SQL flat files",description:"",tags:["adr"],number:"6","date-issued":"2021-05-26",status:"Accepted"},sidebar:"docs",previous:{title:"Recovered Data",permalink:"/Data-Platform-Playbook/architecture-decisions/recovered-data"},next:{title:"Copy Liberator data from sftp to s3",permalink:"/Data-Platform-Playbook/architecture-decisions/sftp-to-s3-lambda"}},d=[{value:"Context",id:"context",children:[]},{value:"Decision",id:"decision",children:[{value:"Process",id:"process",children:[]},{value:"Discounted options during a spike",id:"discounted-options-during-a-spike",children:[]}]},{value:"Consequences",id:"consequences",children:[]}],u={toc:d};function p(e){var t=e.components,n=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"context"},"Context"),(0,a.kt)("p",null,"Hackney has at least one data source which is provided to it in ",(0,a.kt)("inlineCode",{parentName:"p"},"mysqldump"),"\nformat.  This flat file is generated on a daily basis, and we've identified\na need for this data to also be imported into the platform on a daily basis."),(0,a.kt)("p",null,"We hope this the design proposed will be extendable for further SQL flat files\nthat the platform may need to support."),(0,a.kt)("h2",{id:"decision"},"Decision"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Leverage the existing platforms ability to ingesting RDS snapshots"),(0,a.kt)("li",{parentName:"ol"},"Use ECS as the execution environment."),(0,a.kt)("li",{parentName:"ol"},"Have a reusable RDS instance running which will be the target for importing\nand exporting.")),(0,a.kt)("h3",{id:"process"},"Process"),(0,a.kt)("p",null,"A CloudWatch event will be configured to run an ECS Task when a flat file is\nuploaded to an S3 Bucket, this ECS task will responsible for downloading the\nSQL file from S3, creating a temporary database on the reusable RDS instance and\nrunning an import to that the temp database based on the SQL file name."),(0,a.kt)("p",null,"Once the import has completed the ECS task will trigger an RDS snapshot. Once\nthe snapshot creation has completed the ECS task will drop the temp database\nthat is created, while the snapshot ingestion process starts processing the\nnew snapshot."),(0,a.kt)("h3",{id:"discounted-options-during-a-spike"},"Discounted options during a spike"),(0,a.kt)("p",null,"During testing we found that the file provided as a test took longer than\nthe 15 minute AWS Lambda execution limit, so decided we needed to use ECS\ninstead."),(0,a.kt)("p",null,"We explored having a MySQL instance inside of a container in ECS.  This would\nhave given us more flexibility to a wider range of databases, but we found\ndifficulty in exporting the data out of the MySQL into parquet file format."),(0,a.kt)("h2",{id:"consequences"},"Consequences"),(0,a.kt)("p",null,"With this design, it would not be possible to easily import historic exports as\nthe snapshot ingestion process automatically partitions the database on year / month / day\nof snapshot creation."))}p.isMDXComponent=!0}}]);