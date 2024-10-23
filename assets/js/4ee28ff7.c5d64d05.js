"use strict";(self.webpackChunkdata_platform_playbook=self.webpackChunkdata_platform_playbook||[]).push([[6312],{4812:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>n,metadata:()=>i,toc:()=>d});var r=a(4848),s=a(8453);const n={title:"Using Watermarks to Record AWS GLue Job States Between Runs",description:"Use of the watermarks class for recording Glue job states between runs",layout:"playbook_js",tags:["playbook"]},o="Using Watermarks to Record AWS Glue Job States Between Runs",i={id:"playbook/ingesting-data/using-watermarks-to-record-job-states",title:"Using Watermarks to Record AWS GLue Job States Between Runs",description:"Use of the watermarks class for recording Glue job states between runs",source:"@site/docs/playbook/ingesting-data/012-using-watermarks-to-record-job-states.md",sourceDirName:"playbook/ingesting-data",slug:"/playbook/ingesting-data/using-watermarks-to-record-job-states",permalink:"/Data-Platform-Playbook/playbook/ingesting-data/using-watermarks-to-record-job-states",draft:!1,unlisted:!1,editUrl:"https://github.com/LBHackney-IT/data-platform-playbook/edit/master/docs/playbook/ingesting-data/012-using-watermarks-to-record-job-states.md",tags:[{inline:!0,label:"playbook",permalink:"/Data-Platform-Playbook/tags/playbook"}],version:"current",sidebarPosition:12,frontMatter:{title:"Using Watermarks to Record AWS GLue Job States Between Runs",description:"Use of the watermarks class for recording Glue job states between runs",layout:"playbook_js",tags:["playbook"]},sidebar:"docs",previous:{title:"Tips on writing an API Ingestion script for AWS Lambda",permalink:"/Data-Platform-Playbook/playbook/ingesting-data/tips-on-how-to-write-an-API-Lambda-script"},next:{title:"How to create a Lambda function for data ingestion on the Data Analytics Platform",permalink:"/Data-Platform-Playbook/playbook/ingesting-data/creating-a-lambda-function-step-by-step"}},l={},d=[{value:"Example usage",id:"example-usage",level:2}];function c(e){const t={code:"code",em:"em",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"using-watermarks-to-record-aws-glue-job-states-between-runs",children:"Using Watermarks to Record AWS Glue Job States Between Runs"})}),"\n",(0,r.jsx)(t.p,{children:"A common pattern for ingesting data to the data analytics platform is to do an initial full load of any existing data, then incrementally load any change (delta)."}),"\n",(0,r.jsxs)(t.p,{children:["Watermarks allow us to capture a check point or state from any previous execution, extract the incremental data since that check point and update this check point ready for the next run. Common attributes for these check points may be a ",(0,r.jsx)(t.em,{children:"last_modified"})," field or an ",(0,r.jsx)(t.em,{children:"id"})," you know to be sequential in nature."]}),"\n",(0,r.jsxs)(t.p,{children:["The data platform provides a DynamoDB table (",(0,r.jsx)(t.em,{children:"glue-watermarks"}),") to record these state logs and a python Watermarks class with methods to help interact with it."]}),"\n",(0,r.jsx)(t.h2,{id:"example-usage",children:"Example usage"}),"\n",(0,r.jsx)(t.p,{children:"First you need to import the Watermarks class. You can do this using the following statement along with other imports you may be including in your script."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"from scripts.helpers.watermarks import Watermarks\n"})}),"\n",(0,r.jsxs)(t.p,{children:["You then need to create a watermarks object to interact with underlying DynamoDB table. We do this by passing the table name argument, usually ",(0,r.jsx)(t.em,{children:"glue-watermarks"}),"."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:'watermarks = Watermarks(table_name="glue-watermarks") \n'})}),"\n",(0,r.jsxs)(t.p,{children:["Now create a watermark item using the ",(0,r.jsx)(t.em,{children:"create_watermark_item"})," method with the job name and id derived from the job and some arbitrary watermark data."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:'###The getResolvedOptions method allows us to access the job name and run id from within the Glue job\nfrom awsglue.utils import getResolvedOptions\nargs = getResolvedOptions(sys.argv)\njob_run_id = args["JOB_RUN_ID"]\njob_name = args["JOB_NAME"]\n\nlast_processed_data = "2023-03-16 15:45:00"\nwatermark_item = watermarks.create_watermark_item(job_id=job_name, run_id=job_run_id, latest_data=last_processed_data)\n'})}),"\n",(0,r.jsx)(t.p,{children:"This method supports multiple keyword arguments so as well as the latest_data, we might also want to record the number of rows that were processed"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"rows_count = 808\nwatermark_item = watermarks.create_watermark_item(job_id=job_name, run_id=job_run_id, latest_data=last_processed_data, rows_collected=rows_count)\n"})}),"\n",(0,r.jsxs)(t.p,{children:["We can now add this watermark to the ",(0,r.jsx)(t.em,{children:"glue-watermarks"})," table"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"watermarks.add_watermark(watermark_item)\n"})}),"\n",(0,r.jsx)(t.p,{children:"The last_processed_data value can now be retrieved for use in a subsequent execution of the Glue job like so"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:'most_recent_run_id = watermarks.get_most_recent_run_id(job_id=job_name)\nwatermark = watermarks.get_watermark(job_id=job_name, run_id=most_recent_run_id)\nlast_processed_date = watermark["watermarks"]["last_processed_date"]\n'})})]})}function m(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},8453:(e,t,a)=>{a.d(t,{R:()=>o,x:()=>i});var r=a(6540);const s={},n=r.createContext(s);function o(e){const t=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(n.Provider,{value:t},e.children)}}}]);