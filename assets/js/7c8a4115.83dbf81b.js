"use strict";(self.webpackChunkdata_platform_playbook=self.webpackChunkdata_platform_playbook||[]).push([[9395],{7354:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>r,toc:()=>h});var n=o(4848),s=o(8453);const a={id:"using-sagemaker",title:"Prototyping glue jobs in a notebook",description:"Prototyping transformation scripts using a Jupyter Notebook",layout:"playbook_js",tags:["playbook"]},i=void 0,r={id:"playbook/transforming-data/using-aws-glue/using-sagemaker",title:"Prototyping glue jobs in a notebook",description:"Prototyping transformation scripts using a Jupyter Notebook",source:"@site/docs/playbook/transforming-data/using-aws-glue/006-using-sagemaker.md",sourceDirName:"playbook/transforming-data/using-aws-glue",slug:"/playbook/transforming-data/using-aws-glue/using-sagemaker",permalink:"/Data-Platform-Playbook/playbook/transforming-data/using-aws-glue/using-sagemaker",draft:!1,unlisted:!1,editUrl:"https://github.com/LBHackney-IT/data-platform-playbook/edit/master/docs/playbook/transforming-data/using-aws-glue/006-using-sagemaker.md",tags:[{inline:!0,label:"playbook",permalink:"/Data-Platform-Playbook/tags/playbook"}],version:"current",sidebarPosition:6,frontMatter:{id:"using-sagemaker",title:"Prototyping glue jobs in a notebook",description:"Prototyping transformation scripts using a Jupyter Notebook",layout:"playbook_js",tags:["playbook"]},sidebar:"docs",previous:{title:"Deploying Glue jobs to the Data Platform",permalink:"/Data-Platform-Playbook/playbook/transforming-data/using-aws-glue/deploy-glue-jobs"},next:{title:"Optimizing Glue jobs",permalink:"/Data-Platform-Playbook/playbook/transforming-data/using-aws-glue/optimizing-glue-jobs"}},l={},h=[{value:"Prototyping glue jobs in a Jupyter notebook",id:"prototyping-glue-jobs-in-a-jupyter-notebook",level:2},{value:"To start up a notebook",id:"to-start-up-a-notebook",level:3},{value:"Using a notebook",id:"using-a-notebook",level:3},{value:"Saving changes to the notebook scripts",id:"saving-changes-to-the-notebook-scripts",level:2},{value:"Helpful resources",id:"helpful-resources",level:2}];function c(e){const t={a:"a",br:"br",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"prototyping-glue-jobs-in-a-jupyter-notebook",children:"Prototyping glue jobs in a Jupyter notebook"}),"\n",(0,n.jsx)(t.p,{children:"This guide explains how to connect to a notebook instance using AWS Sagemaker and also some tips for using the notebook.\nWe use notebooks to prototype transformation scripts before they are run and scheduled in AWS Glue."}),"\n",(0,n.jsx)(t.h3,{id:"to-start-up-a-notebook",children:"To start up a notebook"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["Login to AWS using the ",(0,n.jsx)(t.a,{href:"https://hackney.awsapps.com/start/#/",children:"Hackney SSO portal"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:['Search "Amazon SageMaker" and then navigate to the ',(0,n.jsx)(t.a,{href:"https://eu-west-2.console.aws.amazon.com/sagemaker/home?region=eu-west-2#/notebook-instances",children:"Notebook Instances"})," under the ",(0,n.jsx)(t.strong,{children:"Notebook"})," section in the left-hand panel of the Amazon SageMaker console."]}),"\n",(0,n.jsxs)(t.li,{children:["Find the notebook appended by your department name, for example ",(0,n.jsx)(t.code,{children:"sagemaker-notebook-parking"}),".\nIf you can't see a notebook for your department then please contact the Data Platform team to request one."]}),"\n",(0,n.jsxs)(t.li,{children:["If the Status of the notebook is ",(0,n.jsx)(t.code,{children:"InService"}),", go on the step 5.\nIf not, click ",(0,n.jsx)(t.code,{children:"Start"})," under the ",(0,n.jsx)(t.strong,{children:"Actions"})," column. ",(0,n.jsx)(t.img,{alt:"start_notebook.png",src:o(6923).A+"",width:"2238",height:"422"}),"\nThe notebook will then go to ",(0,n.jsx)(t.code,{children:"Pending"})," status, if this is the first time the notebook has been used that day it will take around 10 minutes to start up."]}),"\n",(0,n.jsxs)(t.li,{children:["Once the Status of the notebook has changed to ",(0,n.jsx)(t.code,{children:"InService"}),", click the ",(0,n.jsx)(t.a,{href:"https://jupyterlab.readthedocs.io/en/stable/",children:"JupyterLab"})," link in the ",(0,n.jsx)(t.strong,{children:"Actions"})," column to open up the notebook."]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"using-a-notebook",children:"Using a notebook"}),"\n",(0,n.jsxs)(t.p,{children:["There is a ",(0,n.jsx)(t.a,{href:"https://github.com/LBHackney-IT/Data-Platform-Notebooks",children:"Github repository"})," which will be preloaded into the notebook.\nThis is where we store any notebooks scripts that we want to keep.\nIf you want to keep the changes you have made to any scripts you must commit the changes to this repository otherwise you may lose your work."]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["You should work in the folder ",(0,n.jsx)(t.strong,{children:'"Data-Platform-Notebooks/notebooks"'}),", where all the notebooks are stored.\nClick into this folder if you aren't already in there."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"notebook_folders.png",src:o(7678).A+"",width:"378",height:"174"})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Always start by pulling any latest changes from this repository.\nTo do this, click on the Github icon on the left panel and then select the icon to pull the latest changes, as shown below."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"git_pull_in_jupyter_lab.png",src:o(8361).A+"",width:"524",height:"438"})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["There are a few templates in the ",(0,n.jsx)(t.strong,{children:"templates"})," folder that you can copy and paste into your departments folder and then use as a starting point."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Commit your changes by following the next section when you have finished working, so you don't lose your work."}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"saving-changes-to-the-notebook-scripts",children:"Saving changes to the notebook scripts"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["To authenticate with your Github account you need to create a personal access token.\nThese are needed when two factor authentication is enabled, which the Hackney Github organisation enforces.\nTo create your personal access token you can follow ",(0,n.jsx)(t.a,{href:"https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token#creating-a-token",children:"this Github guide"}),".\nOnce you have created it, you can store somewhere securely and keep re using for as long as the expiration period that you set up."]}),"\n",(0,n.jsx)(t.li,{children:'Before commiting, you need to ensure all the outputs from any scripts you\'ve edited have been cleared. This is to prevent any data being stored in Github.\nTo do so you need to open each script you\'ve been working on, then click on "Edit" then "Clear all Outputs".'}),"\n",(0,n.jsx)(t.li,{children:"To add changes to the commit, navigate to the Github tab on the left panel.\nThere you will see a list of changed files & untracked files.\nThe changed files are any that you have changed since the last commit and the untracked files are files which have been added since the last commit.\nYou can add any files you want to commit by hovering over the file and clicking on the plus sign.\nWhen you do this the file will move to the Staged section, this lists all the changes that will be commiting."}),"\n",(0,n.jsx)(t.li,{children:'When you have added all the files you want to commit to staged you can write a Summary & Description then click "Commit". You will then be promted for your name and email address, fill these in using your Hackney email.'}),"\n",(0,n.jsxs)(t.li,{children:["The push your changes by clicking on the small cloud icon with an up arrow, as shown below.\nYou'll be prompted to enter your github username and a password.",(0,n.jsx)(t.br,{}),"\n","In the password box you should paste in the personal access token created in the first step."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"jupyter_push_icon.png",src:o(725).A+"",width:"696",height:"209"})}),"\n",(0,n.jsx)(t.h2,{id:"helpful-resources",children:"Helpful resources"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://jupyterlab.readthedocs.io/en/stable/",children:"JupyterLab documentation"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://jupyter-notebook.readthedocs.io/en/latest/",children:"Jupyter documentation"})}),"\n",(0,n.jsxs)(t.li,{children:["The sparkmagic pyspark kernel that we use in the notebook has a few ",(0,n.jsx)(t.a,{href:"https://github.com/jupyter-incubator/sparkmagic/blob/master/examples/Pyspark%20Kernel.ipynb",children:"helpful functions."})]}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},8361:(e,t,o)=>{o.d(t,{A:()=>n});const n=o.p+"assets/images/git_pull_in_jupyter_lab-05d54ace3e0a5ac7557a4aa05d02f722.png"},725:(e,t,o)=>{o.d(t,{A:()=>n});const n=o.p+"assets/images/jupyter_push_icon-e2b49d986e240ae403d48933d57809eb.png"},7678:(e,t,o)=>{o.d(t,{A:()=>n});const n=o.p+"assets/images/notebook_folders-3ab7ee0731beef0b2a0bf0edd1597364.png"},6923:(e,t,o)=>{o.d(t,{A:()=>n});const n=o.p+"assets/images/start_notebook-2eec2f4d3f18e628402611b69b2bb6c4.png"},8453:(e,t,o)=>{o.d(t,{R:()=>i,x:()=>r});var n=o(6540);const s={},a=n.createContext(s);function i(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);