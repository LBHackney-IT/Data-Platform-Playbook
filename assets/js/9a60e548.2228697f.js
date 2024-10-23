"use strict";(self.webpackChunkdata_platform_playbook=self.webpackChunkdata_platform_playbook||[]).push([[6621],{4537:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var o=n(4848),a=n(8453);const i={title:"Transforming data to refined zone using Sagemaker",description:"Training module: Transforming data to the refined zone using Sagemaker",layout:"playbook_js",tags:["training"]},r="Data Platform Training Module - Transforming data using PySpark and writing to the refined zone",s={id:"training-modules/module-2",title:"Transforming data to refined zone using Sagemaker",description:"Training module: Transforming data to the refined zone using Sagemaker",source:"@site/docs/training-modules/module-2.md",sourceDirName:"training-modules",slug:"/training-modules/module-2",permalink:"/Data-Platform-Playbook/training-modules/module-2",draft:!1,unlisted:!1,editUrl:"https://github.com/LBHackney-IT/data-platform-playbook/edit/master/docs/training-modules/module-2.md",tags:[{inline:!0,label:"training",permalink:"/Data-Platform-Playbook/tags/training"}],version:"current",frontMatter:{title:"Transforming data to refined zone using Sagemaker",description:"Training module: Transforming data to the refined zone using Sagemaker",layout:"playbook_js",tags:["training"]},sidebar:"docs",previous:{title:"Ingesting data from Google Sheets",permalink:"/Data-Platform-Playbook/training-modules/module-1"},next:{title:"Deploying a job in AWS Glue",permalink:"/Data-Platform-Playbook/training-modules/module-3"}},l={},d=[{value:"Overview",id:"overview",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Step-by-step instructions",id:"step-by-step-instructions",level:2},{value:"1. Developing the job script in a Jupyter notebook",id:"1-developing-the-job-script-in-a-jupyter-notebook",level:3}];function h(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"data-platform-training-module---transforming-data-using-pyspark-and-writing-to-the-refined-zone",children:"Data Platform Training Module - Transforming data using PySpark and writing to the refined zone"})}),"\n",(0,o.jsxs)(t.p,{children:["In this module you will manipulate the data that you loaded into the Data Platform raw zone in ",(0,o.jsx)(t.a,{href:"/Data-Platform-Playbook/training-modules/module-1",children:"module 1"}),".\nYou will save the result of your work into the ",(0,o.jsx)(t.a,{href:"/Data-Platform-Playbook/glossary#refined-zone",children:"refined zone"})," of the data platform."]}),"\n",(0,o.jsx)(t.p,{children:"The refined zone is for data that has been enhanced or enriched and is \u2018ready\u2019 for analysis."}),"\n",(0,o.jsxs)(t.p,{children:["You will be using ",(0,o.jsx)(t.a,{href:"https://spark.apache.org/docs/latest/api/python/",children:"PySpark"})," to create and test your script. You will create your code in a Jupyter Notebook environment running in Amazon SageMaker."]}),"\n",(0,o.jsxs)(t.p,{children:["Jupyter notebooks are a convenient way to test code locally as Glue Studio is not so straightforward for code development (despite what the name implies!). You can read more about Jupyter notebooks ",(0,o.jsx)(t.a,{href:"https://jupyter.org/",children:"here"}),"."]}),"\n",(0,o.jsx)(t.p,{children:"This module is all about prototyping within a sandbox environment, and therefore we won\u2019t be pushing any code to the Data Platform GitHub repository."}),"\n",(0,o.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,o.jsx)(t.p,{children:"You\u2019ll write a few lines of code in PySpark which will include reading data from S3, joining the two Covid datasets together and then writing the newly created dataset back to S3 in the refined zone."}),"\n",(0,o.jsx)(t.p,{children:"PySpark is an interface that uses the Python programming language to access the Apache Spark cluster-computing framework; therefore the syntax will seem a bit different if you have used Python packages such as Pandas or NumPy before."}),"\n",(0,o.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,o.jsxs)(t.p,{children:["Please ensure that both the ",(0,o.jsx)(t.a,{href:"/Data-Platform-Playbook/training-modules/module-0",children:"'Getting set up' module"})," and the ",(0,o.jsx)(t.a,{href:"/Data-Platform-Playbook/training-modules/module-1",children:"'Ingesting data' module"})," are completed before proceeding.\nYou will need the names of the tables that were created from completing the 'Ingesting data' module."]}),"\n",(0,o.jsx)(t.h2,{id:"step-by-step-instructions",children:"Step-by-step instructions"}),"\n",(0,o.jsx)(t.h3,{id:"1-developing-the-job-script-in-a-jupyter-notebook",children:"1. Developing the job script in a Jupyter notebook"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["Launch the sandbox notebook within Sagemaker by following ",(0,o.jsx)(t.a,{href:"/Data-Platform-Playbook/playbook/transforming-data/using-aws-glue/using-sagemaker",children:"this guide"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["Open the notebook template called ",(0,o.jsx)(t.code,{children:"using-pyspark.ipynb"}),"."]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Familiarise yourself with the steps (variables, reading, transforming and writing data)."}),"\n",(0,o.jsx)(t.li,{children:"Duplicate the template, saving it in the sandbox folder, and rename it (you can append your name to the name of the file)."}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["Prototype your own ETL (Extract Transform Load) job to transform the data in PySpark.\nThe ",(0,o.jsx)(t.a,{href:"https://sparkbyexamples.com/pyspark-tutorial/",children:"PySpark By Examples website"})," is a handy resource to write your code."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"Please try the following things on your data:"})}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["Load the Covid Locations dataset into the notebook.","\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:'You will first need to set the variables in the first cell, see the "TODO" comments.\nThe datasets will be the same as the last step in Module 1 training.'}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(t.li,{children:"Print out the schema and the first few rows of data to check it has imported correctly."}),"\n",(0,o.jsxs)(t.li,{children:["Change a column name: rename ",(0,o.jsx)(t.code,{children:"location"})," to ",(0,o.jsx)(t.code,{children:"country"}),"."]}),"\n",(0,o.jsx)(t.li,{children:"Load the Covid Vaccinations dataset into the notebook - Repeat the 2 steps above."}),"\n",(0,o.jsx)(t.li,{children:"Cast a column to a different type e.g. a string date to date type."}),"\n",(0,o.jsxs)(t.li,{children:["Join the two tables to a single output using the ",(0,o.jsx)(t.code,{children:"country"})," column."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:"Write to the Refined zone\nWhen you are confident that your transformation is working, you can use the last cell of the notebook to actually write the data into the Data Platform (please note that a notebook will only ever write to the pre-production environment, never to the production environment as it is meant for prototyping)."}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:"Find and view the data in the refined zone bucket within S3\nIf the previous step has worked correctly, then you should be able to see your newly created parquet files in the refined zone S3 bucket within the sandbox department folder. We won't try to visualise or query the data in this module."}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsxs)(t.p,{children:["\ud83c\udf89"," Congratulations! You have completed this module!"]}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["In the ",(0,o.jsx)(t.a,{href:"/Data-Platform-Playbook/training-modules/module-3",children:"next module"}),", you will turn your script into a ",(0,o.jsx)(t.a,{href:"https://aws.amazon.com/glue/?whats-new-cards.sort-by=item.additionalFields.postDateTime&whats-new-cards.sort-order=desc",children:"Glue"})," job and deploy it into the Data Platform."]})]})}function u(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>s});var o=n(6540);const a={},i=o.createContext(a);function r(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);