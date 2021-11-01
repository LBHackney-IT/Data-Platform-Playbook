"use strict";(self.webpackChunkdata_platform_playbook=self.webpackChunkdata_platform_playbook||[]).push([[7294],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return h}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=s(a),h=o,u=m["".concat(p,".").concat(h)]||m[h]||c[h]||r;return a?n.createElement(u,i(i({ref:t},d),{},{components:a})):n.createElement(u,i({ref:t},d))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},864:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return d},default:function(){return m}});var n=a(7462),o=a(3366),r=(a(7294),a(3905)),i=["components"],l={title:"Exporting database snapshot to the Data Platform Landing Zone",description:"Exporting a snapshot of an rds instance in AWS to the DataPlatform landing zone",layout:"playbook_js",tags:["playbook"]},p=void 0,s={unversionedId:"playbook/exporting-snapshot-to-landing-zone",id:"playbook/exporting-snapshot-to-landing-zone",isDocsHomePage:!1,title:"Exporting database snapshot to the Data Platform Landing Zone",description:"Exporting a snapshot of an rds instance in AWS to the DataPlatform landing zone",source:"@site/docs/playbook/exporting-snapshot-to-landing-zone.md",sourceDirName:"playbook",slug:"/playbook/exporting-snapshot-to-landing-zone",permalink:"/Data-Platform-Playbook/playbook/exporting-snapshot-to-landing-zone",editUrl:"https://github.com/LBHackney-IT/data-platform-playbook/edit/master/docs/playbook/exporting-snapshot-to-landing-zone.md",tags:[{label:"playbook",permalink:"/Data-Platform-Playbook/tags/playbook"}],version:"current",frontMatter:{title:"Exporting database snapshot to the Data Platform Landing Zone",description:"Exporting a snapshot of an rds instance in AWS to the DataPlatform landing zone",layout:"playbook_js",tags:["playbook"]},sidebar:"docs",previous:{title:"Guide to testing data quality in Glue Jobs",permalink:"/Data-Platform-Playbook/playbook/data-quality-testing-guide"},next:{title:"Importing data from Google Sheets",permalink:"/Data-Platform-Playbook/playbook/google-sheets-import"}},d=[{value:"Add rds instance id to the environment variables",id:"add-rds-instance-id-to-the-environment-variables",children:[]},{value:"Create a snapshot of the rds instance",id:"create-a-snapshot-of-the-rds-instance",children:[]}],c={toc:d};function m(e){var t=e.components,a=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This guide explains the process of ingesting data from a RDS instance in the AWS API accounts to the Data Platform landing zone by creating db snapshots."),(0,r.kt)("h2",{id:"add-rds-instance-id-to-the-environment-variables"},"Add rds instance id to the environment variables"),(0,r.kt)("p",null,"In this section, you will be adding the rds instance id to the environment variables in Terraform, which will provision the necessary resources in AWS to create an event subscription on that database instance. Therefore, each time a database snapshot is created, it will begin the process of exporting that data to the Data Platform landing zone."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Ensure you have access to the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/LBHackney-IT/data-platform/"},"Data Platform repository")),(0,r.kt)("li",{parentName:"ul"},"Login to the AWS management console for the account where the rds instance is located (for UPRN this will be ",(0,r.kt)("inlineCode",{parentName:"li"},"ProductionAPIs"),")",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Currently, the deployment is set up to only deploy to the Staging and Production API accounts. This will be refactored to allow us to release into multiple accounts"))),(0,r.kt)("li",{parentName:"ul"},"Search for ",(0,r.kt)("inlineCode",{parentName:"li"},"RDS")," and select"),(0,r.kt)("li",{parentName:"ul"},"Select ",(0,r.kt)("inlineCode",{parentName:"li"},"DB Instances")," in the ",(0,r.kt)("inlineCode",{parentName:"li"},"Resources")," section"),(0,r.kt)("li",{parentName:"ul"},"Copy the ",(0,r.kt)("inlineCode",{parentName:"li"},"DB identifier")," of the database you want to export"),(0,r.kt)("li",{parentName:"ul"},"Navigate to ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/LBHackney-IT/Data-Platform/blob/main/config/terraform/prod.tfvars#L12"},"prod.tfvars")," in the ",(0,r.kt)("inlineCode",{parentName:"li"},"config/terraform")," directory and click the pencil icon to edit the file"),(0,r.kt)("li",{parentName:"ul"},"Add the ",(0,r.kt)("inlineCode",{parentName:"li"},"Db Identifier")," to the ",(0,r.kt)("inlineCode",{parentName:"li"},"rds_instance_ids")," environment variable by pasting it to the end of the list as shown below. Ensure you do not remove existing instance ids and that each instance id is double-quoted and comma separated.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'rds_instance_ids = ["rds-instance-1", "rds-instance-2", "YOUR_DB_INSTANCE_ID"]\n')),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"The ",(0,r.kt)("inlineCode",{parentName:"em"},"rds_instance_ids")," environment variable lists all the RDS instances that are configured to export to the Data Platform landing zone")," "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Once the rds instance id has been added, navigate to the bottom of the page to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Commit changes")," section and add a short descriptive commit message in the first input field (80 characters max) and an optional description in the second input field")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Select the radio button labelled ",(0,r.kt)("inlineCode",{parentName:"p"},"Create a new branch for this commit and start a pull request")," and give the new branch an appropriate name (separate words by dashes)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Select ",(0,r.kt)("inlineCode",{parentName:"p"},"Commit changes"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Populate the pull request template and select ",(0,r.kt)("inlineCode",{parentName:"p"},"Create pull request"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Your pull request is now ready for review by the Data Platform team, and your changes will be applied once they have approved and merged your pull request, and a new production release has been made")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"After your pull request has been approved and merged, you will be able to view the progress of the staging deployment. Once completed, the Data Platform team will then create a production release which will deploy your changes to production. You can view the progress of these steps by navigating to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Data-Platform (Staging)")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Data-Platform (Production)")," workflows in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/LBHackney-IT/Data-Platform/actions"},"actions tab")," of the repository."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The workflow for the staging deployment will contain the following text under the workflow title:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"Data-Platform (Staging) #xxx: Commit xxxx pushed by xxxxx\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The production release workflow will contain the following text under the workflow title:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"Data-Platform (Production) #x: Release x.x.x published by xxxxx\n")))))),(0,r.kt)("h2",{id:"create-a-snapshot-of-the-rds-instance"},"Create a snapshot of the rds instance"),(0,r.kt)("p",null,"Once your pull request has been approved and released to production, you will need to log in to the AWS account where your RDS instance exists, to create a snapshot of it. The creation of this snapshot will trigger the export process of the data to the Data Platform landing zone."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Search for ",(0,r.kt)("inlineCode",{parentName:"p"},"RDS")," and select")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"On the sidebar, select ",(0,r.kt)("inlineCode",{parentName:"p"},"Snapshots"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Select ",(0,r.kt)("inlineCode",{parentName:"p"},"Take snapshot")," on the Manual tab")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"On ",(0,r.kt)("inlineCode",{parentName:"p"},"Take a Snapshot")," page, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"DB Instance")," drop down and select the rds instance id as your DB instance"),(0,r.kt)("p",{parentName:"li"},"  In the ",(0,r.kt)("inlineCode",{parentName:"p"},"Snapshot Name")," input field, enter a unique name for your snapshot according to the following convention: ",(0,r.kt)("inlineCode",{parentName:"p"},"dataplatform-YYYY-MM-DD-rds_instance_id"),". See example below:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"dataplatform-2021-05-15-golive-db\n")),(0,r.kt)("p",{parentName:"li"},"  If you're creating more than one snapshot to be exported on the same day, you would need to make the snapshot name unique by adding a ",(0,r.kt)("inlineCode",{parentName:"p"},"snapshot_version")," after the date according to the following convention: ",(0,r.kt)("inlineCode",{parentName:"p"},"dataplatform-YYYY-MM-DD-snapshot_version-rds_instance_id"),". For example if this is your second snapshot in the same day, you can name as follows:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"dataplatform-2021-05-15-v2-golive-db\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Select ",(0,r.kt)("inlineCode",{parentName:"p"},"Take snapshot"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The snapshot should immediately appear in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Manual snapshots")," list under the ",(0,r.kt)("inlineCode",{parentName:"p"},"Manual")," tab")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The snapshot is complete when it has a ",(0,r.kt)("inlineCode",{parentName:"p"},"Snapshot creation time")," (this will take a few minutes to complete)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Once the snapshot has been created, it will automatically trigger the export process to the Data Platform landing zone bucket. The export process is made up of two steps which in total will take about an hour to complete: "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"First it will export a copy of the database instance in parquet format to an S3 bucket (Amazon Simple Storage Service) in the same service account. You can view the progress of this first export by navigating to the ",(0,r.kt)("inlineCode",{parentName:"li"},"Exports in Amazon S3")," tab (this takes just under an hour to complete). Once complete, you can view the initial snapshot export by clicking on the link in the ",(0,r.kt)("inlineCode",{parentName:"li"},"S3 bucket")," column which will take you to the relevant directory in the ",(0,r.kt)("inlineCode",{parentName:"li"},"dataplatform-prod-rds-export-storage")," S3 bucket where all the initial exports are stored. "),(0,r.kt)("li",{parentName:"ul"},"The second step will copy the data from the ",(0,r.kt)("inlineCode",{parentName:"li"},"dataplatform-prod-rds-export-storage")," S3 bucket to the landing zone S3 bucket in the Data Platform account (see ",(0,r.kt)("a",{parentName:"li",href:"http://playbook.hackney.gov.uk/Data-Platform-Playbook/docs/exporting-snapshot-to-landing-zone/"},"exporting db snapshots to the landing zone")," for more detail on the ingestion process). Shortly after this, the data will become available in the Data Platform account."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Verify that your exported data is in the Data Platform landing zone:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Switch to the ",(0,r.kt)("inlineCode",{parentName:"li"},"DataPlatform-Production")," account"),(0,r.kt)("li",{parentName:"ul"},"Search for ",(0,r.kt)("inlineCode",{parentName:"li"},"S3")," and select"),(0,r.kt)("li",{parentName:"ul"},"Select ",(0,r.kt)("inlineCode",{parentName:"li"},"dataplatform-prod-landing-zone")," and navigate to the relevant department folder")))))}m.isMDXComponent=!0}}]);