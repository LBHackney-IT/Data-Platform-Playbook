"use strict";(self.webpackChunkdata_platform_playbook=self.webpackChunkdata_platform_playbook||[]).push([[103],{664:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>r});var n=a(4848),s=a(8453);const i={title:"Using the data catalogue",layout:"playbook_js",tags:["playbook"]},o=void 0,d={id:"playbook/finding-data/data-catalogue",title:"Using the data catalogue",description:"How to use the data catalogue",source:"@site/docs/playbook/finding-data/data-catalogue.md",sourceDirName:"playbook/finding-data",slug:"/playbook/finding-data/data-catalogue",permalink:"/Data-Platform-Playbook/playbook/finding-data/data-catalogue",draft:!1,unlisted:!1,editUrl:"https://github.com/LBHackney-IT/data-platform-playbook/edit/master/docs/playbook/finding-data/data-catalogue.md",tags:[{inline:!0,label:"playbook",permalink:"/Data-Platform-Playbook/tags/playbook"}],version:"current",frontMatter:{title:"Using the data catalogue",layout:"playbook_js",tags:["playbook"]},sidebar:"docs",previous:{title:"Data Warehouse",permalink:"/Data-Platform-Playbook/playbook/elements-of-the-platform/data-warehouse"},next:{title:"Connecting to the Data Platform from Tableau",permalink:"/Data-Platform-Playbook/playbook/getting-access-to-data/Tableau-to-redshift"}},c={},r=[{value:"How to use the data catalogue",id:"how-to-use-the-data-catalogue",level:2},{value:"Ingesting datasets",id:"ingesting-datasets",level:3},{value:"Access to datasets",id:"access-to-datasets",level:3},{value:"Browsing datasets",id:"browsing-datasets",level:3},{value:"Searching datasets",id:"searching-datasets",level:3},{value:"Viewing/editing metadata for a dataset",id:"viewingediting-metadata-for-a-dataset",level:3},{value:"Tagging",id:"tagging",level:3},{value:"Domains",id:"domains",level:3},{value:"Adding/amending owners",id:"addingamending-owners",level:3}];function l(e){const t={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"how-to-use-the-data-catalogue",children:"How to use the data catalogue"}),"\n",(0,n.jsx)(t.h3,{id:"ingesting-datasets",children:"Ingesting datasets"}),"\n",(0,n.jsx)(t.p,{children:'Datahub ingests datasets from Glue, the Glue connection is set up via a Datahub "recipe".\nA Datahub recipe is a yaml configuration file that instructs Datahub on where to pull data from.\nPlease see below for a guide on how to configure the Glue recipe, this will only need to be done once when Datahub is setup'}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["Navigate to the ",(0,n.jsx)(t.code,{children:"ingestion"})," tab:",(0,n.jsx)(t.img,{alt:"img.png",src:a(1357).A+"",width:"1508",height:"128"})]}),"\n",(0,n.jsxs)(t.li,{children:["Click ",(0,n.jsx)(t.code,{children:"Create new source"}),": ",(0,n.jsx)(t.img,{alt:"img_3.png",src:a(6102).A+"",width:"2166",height:"546"})]}),"\n",(0,n.jsx)(t.li,{children:"Choose Glue"}),"\n",(0,n.jsx)(t.li,{children:"Configure the recipe as follows (no need to change anything):"}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"source:\n  type: glue\n  config:\n    aws_region: '${AWS_DEFAULT_REGION}'\n    aws_role: '${AWS_ROLE}'\n    extract_transforms: '${GLUE_EXTRACT_TRANSFORMS}'\nsink:\n  type: datahub-rest\n  config:\n    server: '${GMS_URL}'\n"})}),"\n",(0,n.jsxs)(t.ol,{start:"5",children:["\n",(0,n.jsxs)(t.li,{children:["Configure an execution schedule. We recommend once a day for Glue:",(0,n.jsx)(t.img,{alt:"img_2.png",src:a(4399).A+"",width:"1758",height:"1194"})," To learn more about the CRON scheduling format, check out the ",(0,n.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Cron",children:"Wikipedia"})," overview."]}),"\n",(0,n.jsxs)(t.li,{children:["Click next and give the Ingestion Source a name of ",(0,n.jsx)(t.code,{children:"Glue"})]}),"\n",(0,n.jsxs)(t.li,{children:["Once you're happy with your changes, simply click ",(0,n.jsx)(t.code,{children:"Done"})," to save."]}),"\n",(0,n.jsxs)(t.li,{children:["Once you've created your Ingestion Source, you can run it by clicking ",(0,n.jsx)(t.code,{children:"Execute"}),". Shortly after, you should see the ",(0,n.jsx)(t.code,{children:"Last Status"})," column of the ingestion source change from N/A to Running. This means that the request to execute ingestion has been successfully picked up by the DataHub ingestion executor."]}),"\n",(0,n.jsx)(t.li,{children:"If ingestion has executed successfully, you should see it's state shown in green as Succeeded."}),"\n",(0,n.jsxs)(t.li,{children:["A variety of things can cause an ingestion run to fail, if this happens please check ",(0,n.jsx)(t.a,{href:"https://datahubproject.io/docs/ui-ingestion/#debugging-a-failed-ingestion-run",children:"this guide"})," or contact the Data Platform team"]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"access-to-datasets",children:"Access to datasets"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Anyone that is authenticated via Google Auth can view datasets\u2019 metadata in Datahub"}),"\n",(0,n.jsx)(t.li,{children:"Only people that need to edit (owners) - are created as users within Datahub"}),"\n",(0,n.jsxs)(t.li,{children:["These users will be assigned to department groups via a ",(0,n.jsx)(t.a,{href:"https://datahubproject.io/docs/policies",children:"Datahub metadata policy"})," that will allow edit permissions only on the datasets in their domain"]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"browsing-datasets",children:"Browsing datasets"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Datasets can be found either by using the search or via the home screen"}),"\n",(0,n.jsxs)(t.li,{children:["Once a metadata ingestion recipe has been configured and executed, datasets should appear on the home screen:",(0,n.jsx)(t.img,{alt:"datasets.png",src:a(4228).A+"",width:"2539",height:"797"})]}),"\n",(0,n.jsxs)(t.li,{children:["Each dataset can then be navigated through: ",(0,n.jsx)(t.img,{alt:"datasets_inner.png",src:a(2601).A+"",width:"2394",height:"1068"})]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"searching-datasets",children:"Searching datasets"}),"\n",(0,n.jsxs)(t.p,{children:["Please see the official ",(0,n.jsx)(t.a,{href:"https://datahubproject.io/docs/how/search",children:"Datahub Search Guide"})]}),"\n",(0,n.jsx)(t.h3,{id:"viewingediting-metadata-for-a-dataset",children:"Viewing/editing metadata for a dataset"}),"\n",(0,n.jsxs)(t.p,{children:["On each dataset, there are three main tabs: ",(0,n.jsx)(t.strong,{children:"Schema"}),", ",(0,n.jsx)(t.strong,{children:"Documentation"}),", ",(0,n.jsx)(t.strong,{children:"Properties"})]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Schema"}),": This shows the schema of the table including the data types of each column.\nMore details for each Field can be found in the ",(0,n.jsx)(t.code,{children:"Description"}),", ",(0,n.jsx)(t.code,{children:"Tags"})," and ",(0,n.jsx)(t.code,{children:"Terms"})," columns."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.em,{children:"If you are the owner of the dataset, you can edit these fields."})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["To add a description to a field click on the ",(0,n.jsx)(t.code,{children:"+ Add Description"})," button in the ",(0,n.jsx)(t.code,{children:"Description"})," column: ",(0,n.jsx)(t.img,{alt:"descriptions.png",src:a(8518).A+"",width:"2119",height:"453"})]}),"\n",(0,n.jsxs)(t.li,{children:["A popup will then appear and the description can be added along with an additional text formatting: ",(0,n.jsx)(t.img,{alt:"img.png",src:a(1324).A+"",width:"979",height:"631"})]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Documentation"}),": This is a free text field where you can find general details of the dataset with supporting links.\n",(0,n.jsx)(t.em,{children:"If you are the owner of the dataset, you can add documentation or edit the existing documentation."}),"\n",(0,n.jsx)(t.img,{alt:"documentation",src:a(3380).A+"",width:"1205",height:"391"})]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Properties"}),": This provides metadata on the dataset such as the number of records, where the data is stored, the Glue job that created it and more\n",(0,n.jsx)(t.img,{alt:"properties",src:a(1059).A+"",width:"1047",height:"648"})]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"tagging",children:"Tagging"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.img,{alt:"tagging.gif",src:a(5221).A+"",width:"1278",height:"718"}),"\nPlease see the official ",(0,n.jsx)(t.a,{href:"https://datahubproject.io/docs/tags",children:"Datahub Tags Guide"})," for more detail"]}),"\n",(0,n.jsx)(t.h3,{id:"domains",children:"Domains"}),"\n",(0,n.jsxs)(t.p,{children:["Domains can be used to organise datasets into departments, access can then be provided to users for specific domains they are interested in.\nOnce you've created a Domain, you can use the search bar to find it.\nPlease see the official ",(0,n.jsx)(t.a,{href:"https://datahubproject.io/docs/domains",children:"Datahub Domains Guide"})," which explains how to configure domains"]}),"\n",(0,n.jsx)(t.h3,{id:"addingamending-owners",children:"Adding/amending owners"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"owners.gif",src:a(6962).A+"",width:"1278",height:"746"})})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},1324:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/adding_descriptions-8cf23eb49708df557eeac24703bf7eaf.png"},6962:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/adding_owners-0273a25a80c1879a6af65ad5800fb673.gif"},6102:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/create_new_source-c5717682a25edee3617bdeb39eb55c66.png"},4399:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/cron_schedule-b2bc71ee2f2ee53ba9a03ec1222c3cab.png"},3380:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/dataset_documentation-447f5ec722047e0bc156a54ec6d95063.png"},1059:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/dataset_properties-74883dd0846a6c48bec85008577df675.png"},4228:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/datasets-e4085bdfb164e6942a6f07505cb5afe6.png"},2601:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/datasets_inner-372f698b5f4ace1fa6b65ff022f69024.png"},8518:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/descriptions-dcbef40e14ed8030686cd66074b6c293.png"},1357:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/ingestion-4e01d67d9531b6b3d7ac5bd114b274c5.png"},5221:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/tagging-7101a567ef83087e961d9d07277cdaa8.gif"},8453:(e,t,a)=>{a.d(t,{R:()=>o,x:()=>d});var n=a(6540);const s={},i=n.createContext(s);function o(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);