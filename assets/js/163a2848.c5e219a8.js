"use strict";(self.webpackChunkdata_platform_playbook=self.webpackChunkdata_platform_playbook||[]).push([[3516],{2882:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var o=a(4848),n=a(8453);const r={id:"scheduling-liberator-glue-jobs",title:"Scheduling Liberator Glue Jobs",description:"Schedule a glue job to run when new liberator data is added into the platform",layout:"playbook_js",tags:["playbook"]},i=void 0,l={id:"playbook/transforming-data/using-aws-glue/practical-examples/scheduling-liberator-glue-jobs",title:"Scheduling Liberator Glue Jobs",description:"Schedule a glue job to run when new liberator data is added into the platform",source:"@site/docs/playbook/transforming-data/using-aws-glue/practical-examples/005-scheduling-liberator-glue-jobs.md",sourceDirName:"playbook/transforming-data/using-aws-glue/practical-examples",slug:"/playbook/transforming-data/using-aws-glue/practical-examples/scheduling-liberator-glue-jobs",permalink:"/Data-Platform-Playbook/playbook/transforming-data/using-aws-glue/practical-examples/scheduling-liberator-glue-jobs",draft:!1,unlisted:!1,editUrl:"https://github.com/LBHackney-IT/data-platform-playbook/edit/master/docs/playbook/transforming-data/using-aws-glue/practical-examples/005-scheduling-liberator-glue-jobs.md",tags:[{inline:!0,label:"playbook",permalink:"/Data-Platform-Playbook/tags/playbook"}],version:"current",sidebarPosition:5,frontMatter:{id:"scheduling-liberator-glue-jobs",title:"Scheduling Liberator Glue Jobs",description:"Schedule a glue job to run when new liberator data is added into the platform",layout:"playbook_js",tags:["playbook"]},sidebar:"docs",previous:{title:"Optimizing Glue jobs",permalink:"/Data-Platform-Playbook/playbook/transforming-data/using-aws-glue/optimizing-glue-jobs"},next:{title:"Glue Studio workshop with Parking Analysts",permalink:"/Data-Platform-Playbook/workshop/aws_glue_studio_parking"}},s={},d=[{value:"Intro",id:"intro",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Steps",id:"steps",level:2},{value:"Creating a trigger to start liberator glue jobs",id:"creating-a-trigger-to-start-liberator-glue-jobs",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"intro",children:"Intro"}),"\n",(0,o.jsxs)(t.p,{children:["This guide will step you through how to schedule a glue job, from the AWS console, that runs on the liberator data in the ",(0,o.jsx)(t.a,{href:"/Data-Platform-Playbook/zones#raw-zone",children:"raw zone"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["Scheduling your glue job will mean that it will run whenever new liberator data is added in the data platform so that your\ntransformed data in, say, the ",(0,o.jsx)(t.a,{href:"/Data-Platform-Playbook/zones#refined-zone",children:"refined zone"})," is based on the most up to date data, with no manual intervention."]}),"\n",(0,o.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["You have created a glue job that transforms the liberator data in the ",(0,o.jsx)(t.a,{href:"/Data-Platform-Playbook/zones#raw-zone",children:"raw zone"}),". There is guidance on ",(0,o.jsx)(t.a,{href:"./using-glue-studio",children:"creating a glue job"})," and a ",(0,o.jsx)(t.a,{href:"/Data-Platform-Playbook/workshop/aws_glue_studio_parking",children:"workshop"})," if you need help with this."]}),"\n",(0,o.jsx)(t.li,{children:"You have access to the Hackney Data Platform"}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"steps",children:"Steps"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["Sign in to the ",(0,o.jsx)(t.a,{href:"https://hackney.awsapps.com/start#/",children:"AWS Management Console"})]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["In ",(0,o.jsx)(t.a,{href:"https://eu-west-2.console.aws.amazon.com/gluestudio/home?region=eu-west-2#/jobs",children:"AWS Glue Studio"}),", Check the properties for all of the ",(0,o.jsx)(t.strong,{children:"Data targets"}),' in your glue job. Ensure you have the following properties set in the "Data target properties" tab.']}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsx)(t.li,{children:'The Format is set to "Glue Parquet"'}),"\n",(0,o.jsx)(t.li,{children:'Under "Data Catalog update options", the option "Create a table in the Data Catalog and on subsequent runs, update the schema and add new partitions" is selected.'}),"\n",(0,o.jsx)(t.li,{children:'A "Database" and "Table name" should also be filled in.'}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["This is so that the job will update the tables in ",(0,o.jsx)(t.a,{href:"https://eu-west-2.console.aws.amazon.com/athena/home?region=eu-west-2#query",children:"AWS Athena"})," after it runs, without having to run a crawler."]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["Naviagte to ",(0,o.jsx)(t.a,{href:"https://eu-west-2.console.aws.amazon.com/glue/home?region=eu-west-2#etl:tab=workflows;workflowView=workflow-list",children:"AWS Glue Workflows"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["Select the workflow called ",(0,o.jsx)(t.code,{children:"parking-liberator-data-workflow"}),", a diagram should appear at the bottom."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["There should be a trigger (diamond shaped) labeled ",(0,o.jsx)(t.code,{children:"trigger-liberator-jobs"}),".\nIf this trigger doesn't exist follow ",(0,o.jsx)(t.a,{href:"#creating-a-trigger-to-start-liberator-glue-jobs",children:"these steps"})," to create it."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:'Click on the trigger shape, then on the "Action" dropdown and select "Add jobs/crawlers to trigger".'}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:'Click on the "Jobs" tab. Find and select the job you just created.'}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:'Click "Add". Your job should appear in the diagram, connected to the trigger.'}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"Your job is now scheduled to run when new liberator data is added to the platform."}),"\n",(0,o.jsx)(t.h2,{id:"creating-a-trigger-to-start-liberator-glue-jobs",children:"Creating a trigger to start liberator glue jobs"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:'Click on "Action" to display the dropdown and select "Add trigger".'}),"\n",(0,o.jsxs)(t.li,{children:['Click on the "Add new" tab, put ',(0,o.jsx)(t.code,{children:"trigger-liberator-jobs"})," in the Name field then click \"Add'.\nA new diamond shape will appear in the diagram with a broken link symbol, this is the trigger you have just added and it now needs to be linked to the rest of the workflow."]}),"\n",(0,o.jsxs)(t.li,{children:['Click on the shape, then on the "Action" dropdown and select "Add jobs/crawlers to watch".\nEnsure the "Jobs" tab is selected. Select the job ',(0,o.jsx)(t.code,{children:"Copy parking Liberator landing zone to raw"}),' from, then list then click "Add".']}),"\n",(0,o.jsx)(t.li,{children:"Continue following the instructions above."}),"\n"]})]})}function c(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},8453:(e,t,a)=>{a.d(t,{R:()=>i,x:()=>l});var o=a(6540);const n={},r=o.createContext(n);function i(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);