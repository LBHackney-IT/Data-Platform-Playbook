"use strict";(self.webpackChunkdata_platform_playbook=self.webpackChunkdata_platform_playbook||[]).push([[9371],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return h}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(a),h=o,f=c["".concat(l,".").concat(h)]||c[h]||u[h]||r;return a?n.createElement(f,i(i({ref:t},d),{},{components:a})):n.createElement(f,i({ref:t},d))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},5297:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var n=a(3117),o=a(102),r=(a(7294),a(3905)),i=["components"],s={title:"Liberator data ingestion",description:"Description of the ingestion process for Liberator data",layout:"playbook_js",tags:["playbook"]},l=void 0,p={unversionedId:"docs/liberator-ingestion",id:"docs/liberator-ingestion",title:"Liberator data ingestion",description:"Description of the ingestion process for Liberator data",source:"@site/docs/docs/liberator-ingestion.md",sourceDirName:"docs",slug:"/docs/liberator-ingestion",permalink:"/Data-Platform-Playbook/docs/liberator-ingestion",draft:!1,editUrl:"https://github.com/LBHackney-IT/data-platform-playbook/edit/master/docs/docs/liberator-ingestion.md",tags:[{label:"playbook",permalink:"/Data-Platform-Playbook/tags/playbook"}],version:"current",frontMatter:{title:"Liberator data ingestion",description:"Description of the ingestion process for Liberator data",layout:"playbook_js",tags:["playbook"]},sidebar:"docs",previous:{title:"Import spreadsheets from G Drive",permalink:"/Data-Platform-Playbook/docs/import-spreadsheet-from-g-drive"},next:{title:"Redshift - Creating users, databases and exposing data from Glue",permalink:"/Data-Platform-Playbook/docs/redshift"}},d={},u=[{value:"1. SQL dump is uploaded into the platform",id:"1-sql-dump-is-uploaded-into-the-platform",level:4},{value:"2. RDS snapshot is created from the SQL dump",id:"2-rds-snapshot-is-created-from-the-sql-dump",level:4},{value:"3. Getting the data from the RDS snapshot into the landing zone as parquet files",id:"3-getting-the-data-from-the-rds-snapshot-into-the-landing-zone-as-parquet-files",level:4},{value:"Developer notes",id:"developer-notes",level:2}],c={toc:u};function h(e){var t=e.components,a=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This section describes how the Liberator dataset gets ingested into the data platform. "),(0,r.kt)("h4",{id:"1-sql-dump-is-uploaded-into-the-platform"},"1. SQL dump is uploaded into the platform"),(0,r.kt)("p",null,"The company who owns the dataset (Farthest Gate) uploads a zipped SQL dump of the whole database to S3 bucket in the data platform production AWS account at the path ",(0,r.kt)("inlineCode",{parentName:"p"},"s3://dataplatform-stg-liberator-data-storage/parking/"),".\nThe file needs to be named ",(0,r.kt)("inlineCode",{parentName:"p"},"liberator_dump_210604.zip")," where the date stamp at the end is the current date (format: YYMMDD)."),(0,r.kt)("h4",{id:"2-rds-snapshot-is-created-from-the-sql-dump"},"2. RDS snapshot is created from the SQL dump"),(0,r.kt)("p",null,"The upload of the S3 file triggers a cloudwatch event that in turn triggers the start of an ECS task (",(0,r.kt)("inlineCode",{parentName:"p"},"*liberator-to-rds-snapshot"),")."),(0,r.kt)("p",null,"The task does the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Deletes any RDS snapshots that already exist for ",(0,r.kt)("inlineCode",{parentName:"li"},"*liberator-to-rds-snapshot")," RDS instance"),(0,r.kt)("li",{parentName:"ul"},"Unzips the file"),(0,r.kt)("li",{parentName:"ul"},"Drops existing database"),(0,r.kt)("li",{parentName:"ul"},"Creates a new database from the SQL dump"),(0,r.kt)("li",{parentName:"ul"},"Starts off the process to create a database snapshot from this database")),(0,r.kt)("h4",{id:"3-getting-the-data-from-the-rds-snapshot-into-the-landing-zone-as-parquet-files"},"3. Getting the data from the RDS snapshot into the landing zone as parquet files"),(0,r.kt)("p",null,"An event is published to an SNS topic (",(0,r.kt)("inlineCode",{parentName:"p"},"*-rds-snapshot-to-s3"),") on the creation of the snapshot.\nAn SQS queue (",(0,r.kt)("inlineCode",{parentName:"p"},"*-rds-snapshot-to-s3"),") subscribes to this topic and a lambda function (",(0,r.kt)("inlineCode",{parentName:"p"},"-*rds-snapshot-to-s3"),") reads from that SQS queue."),(0,r.kt)("p",null,"The lambda function first finds the latest snapshot.\nIf it is still creating then it puts a message back into the queue with a 15 minute delay.\nIf it has finished creating, it starts an RDS export task that writes the snapshot to S3 (",(0,r.kt)("inlineCode",{parentName:"p"},"s3://*-dp-rds-export-storage"),") in parquet format."),(0,r.kt)("p",null,"It then puts a message into another queue (",(0,r.kt)("inlineCode",{parentName:"p"},"*-s3-to-s3-copier"),") with a 15 minute delay."),(0,r.kt)("p",null,"Another lambda function (",(0,r.kt)("inlineCode",{parentName:"p"},"*-s3-to-s3-copier"),") reads from the copier queue.\nThis lambda first checks if the export task has finished.\nIf not it puts another message back into the queue with a 15 minute delay.\nIf it has finished, it will copy all the files into the landing zone, with the standard date partitions added to the objects keys and any extra partitions added by the RDS export task are removed."),(0,r.kt)("p",null,"The lambda function will then start the glue parking liberator workflow (",(0,r.kt)("inlineCode",{parentName:"p"},"*parking-liberator-data-workflow"),"), which copies the data into the raw zone and runs a number of transformation jobs scheduled into the workflow."),(0,r.kt)("h2",{id:"developer-notes"},"Developer notes"),(0,r.kt)("p",null,"When deploying to development environment the Docker image for the ECS task is not deployed automatically. You can deploy it manually by running ",(0,r.kt)("inlineCode",{parentName:"p"},"make push-ecr")," from the project root."),(0,r.kt)("p",null,"To test the S3 file drop trigger and the entire process any zipped MySQL dump file can be used. These are readily available from various MySQL tutorials."))}h.isMDXComponent=!0}}]);