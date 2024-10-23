"use strict";(self.webpackChunkdata_platform_playbook=self.webpackChunkdata_platform_playbook||[]).push([[9455],{9475:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>h});var n=o(4848),a=o(8453);const i={title:"Using GitHub",description:"A guide on how to carry out common tasks in GitHub",layout:"playbook_js",tags:["playbook"]},s=void 0,r={id:"playbook/getting-set-up/using-github",title:"Using GitHub",description:"A guide on how to carry out common tasks in GitHub",source:"@site/docs/playbook/getting-set-up/using-github.md",sourceDirName:"playbook/getting-set-up",slug:"/playbook/getting-set-up/using-github",permalink:"/Data-Platform-Playbook/playbook/getting-set-up/using-github",draft:!1,unlisted:!1,editUrl:"https://github.com/LBHackney-IT/data-platform-playbook/edit/master/docs/playbook/getting-set-up/using-github.md",tags:[{inline:!0,label:"playbook",permalink:"/Data-Platform-Playbook/tags/playbook"}],version:"current",frontMatter:{title:"Using GitHub",description:"A guide on how to carry out common tasks in GitHub",layout:"playbook_js",tags:["playbook"]},sidebar:"docs",previous:{title:"Onboarding new users to the platform",permalink:"/Data-Platform-Playbook/playbook/getting-set-up/onboarding-new-users-to-the-platform"},next:{title:"Data Catalogue",permalink:"/Data-Platform-Playbook/playbook/elements-of-the-platform/data-catalogue"}},c={},h=[{value:"Objective of this article",id:"objective-of-this-article",level:2},{value:"What is GitHub used for?",id:"what-is-github-used-for",level:2},{value:"Getting access to GitHub",id:"getting-access-to-github",level:2},{value:"Committing your changes to the Data Platform Project",id:"committing-your-changes-to-the-data-platform-project",level:2},{value:"Introduction about branches",id:"introduction-about-branches",level:3},{value:"Creating a branch to commit multiple changes",id:"creating-a-branch-to-commit-multiple-changes",level:3},{value:"Committing one change",id:"committing-one-change",level:3}];function l(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",ul:"ul",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"objective-of-this-article",children:"Objective of this article"}),"\n",(0,n.jsx)(t.p,{children:"To provide general guidance and assist you in performing common tasks in GitHub."}),"\n",(0,n.jsx)(t.h2,{id:"what-is-github-used-for",children:"What is GitHub used for?"}),"\n",(0,n.jsxs)(t.p,{children:["GitHub is a repository which stores the code for the data platform's infrastructure and processes (including the code for this playbook). It enables us to track and test any changes in the code before they reach the platform. Many of the processes within this playbook require you to make changes to code in GitHub in order to see them in the data platform, for example ",(0,n.jsx)(t.a,{href:"https://playbook.hackney.gov.uk/Data-Platform-Playbook/playbook/ingesting-data/google-sheets-import",children:"ingesting data from Google Sheets"})," or ",(0,n.jsx)(t.a,{href:"https://playbook.hackney.gov.uk/Data-Platform-Playbook/playbook/transforming-data/using-aws-glue/deploy-glue-jobs",children:"creating Glue jobs to transform your data"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"getting-access-to-github",children:"Getting access to GitHub"}),"\n",(0,n.jsxs)(t.p,{children:["You'll need to ",(0,n.jsx)(t.a,{href:"https://github.com/signup",children:"create a GitHub account"})," if you don't already have one, using your Hackney email. You'll also need to ",(0,n.jsx)(t.a,{href:"https://docs.github.com/en/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication",children:"set up 2 factor authentication"})," in your GitHub account."]}),"\n",(0,n.jsx)(t.p,{children:"Once you've done this, you'll need to ask Rashmi Shetty (Development Manager) to add you to the 'LBHackney-IT' team. This will enable you to contribute to the Data Platform projects in the team account."}),"\n",(0,n.jsx)(t.p,{children:"There are two ways to use GitHub:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["Using the GitHub web browser interface (simply at ",(0,n.jsx)(t.a,{href:"https://github.com/",children:"github.com"}),"). This is the easiest to use and enables you to make simple changes through a user interface."]}),"\n",(0,n.jsxs)(t.li,{children:["Using the ",(0,n.jsx)(t.a,{href:"https://desktop.github.com/",children:"GitHub app"}),". This is a more advanced tool which requires more configuration and coding."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"committing-your-changes-to-the-data-platform-project",children:"Committing your changes to the Data Platform Project"}),"\n",(0,n.jsx)(t.h3,{id:"introduction-about-branches",children:"Introduction about branches"}),"\n",(0,n.jsx)(t.p,{children:"The Data Platform repository contains several branches, i.e. several versions of the code base. The current live branch is called main, this is the only branch which gets deployed into the AWS environment. You can see which branch you are looking at in the dropdown list above the code section. In the screenshot below (default configuration), we're looking at the main branch."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Looking at the main branch",src:o(4299).A+"",width:"2304",height:"658"})}),"\n",(0,n.jsx)(t.p,{children:"In the screenshot below, we are looking at a secondary branch that has diverged a lot: 19 changes have been committed and aren't in main yet. And since it was created, 435 changes have happened on main!"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Looking at a secondary branch",src:o(2444).A+"",width:"2306",height:"762"})}),"\n",(0,n.jsxs)(t.p,{children:["As a security measure, nobody is allowed to commit changes directly onto the main branch. Instead, changes are made on new branches that temporarily diverge from the main branch. These new branches get merged to the main branch via a process called ",(0,n.jsx)(t.code,{children:"Pull Request (PR)"})," that involves some peer review of the code changes. This greatly reduces the risk of deploying faulty code to the Data Platform.\nTwo approaches are detailed below to commit your changes: creating a new branch first (useful when you want to bundle several changes), or making your changes first and creating the branch on the fly at the time you 'save' (quicker if you are only editing or creating a single file)."]}),"\n",(0,n.jsx)(t.h3,{id:"creating-a-branch-to-commit-multiple-changes",children:"Creating a branch to commit multiple changes"}),"\n",(0,n.jsx)(t.p,{children:"If you are making changes to multiple files you may wish to create a branch and submit the changes at the same time. This can prevent conflicts later on when there are inter-dependencies in the files you are submitting  (eg one refers to the other)."}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["Navigate to GitHub site and drop down the branches, type the name of your new branch and select ",(0,n.jsx)(t.code,{children:"Create branch"}),"\n",(0,n.jsx)(t.img,{src:"https://user-images.githubusercontent.com/5946742/201316320-f90d2274-d258-48fa-865b-4e5456e5fb9e.PNG",alt:"Create Branch"})]}),"\n",(0,n.jsxs)(t.li,{children:["Make the changes to existing files or add new files in the new branch you have created. When you ",(0,n.jsx)(t.code,{children:"Propose changes"})," at the bottom of the document you will add them to branch you have created."]}),"\n",(0,n.jsxs)(t.li,{children:["Once you have finished creating or editing files, navigate to the Pull Releases page and you will see ",(0,n.jsx)(t.code,{children:"Compare and pull request"}),". Select this and submit your Pull Request with some commentary on the changes you are proposing.\n",(0,n.jsx)(t.img,{src:"https://user-images.githubusercontent.com/5946742/201317135-6ccb6b7c-b39f-4be8-be41-34c4091eda5b.PNG",alt:"Create PR"})]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"The remaining process is the same as outlined from step 6 below."}),"\n",(0,n.jsx)(t.h3,{id:"committing-one-change",children:"Committing one change"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["Navigate to the ",(0,n.jsx)(t.code,{children:"Commit new file"})," or ",(0,n.jsx)(t.code,{children:"Commit changes"})," section at the bottom of the page."]}),"\n",(0,n.jsx)(t.li,{children:"Provide a short sentence in the first field and then an optional description in the field below to explain what you've changed."}),"\n",(0,n.jsxs)(t.li,{children:["Select the option to create a ",(0,n.jsx)(t.code,{children:"new branch"})," for this commit (i.e. the code you've changed).\nYou can just use the suggested name for your branch."]}),"\n",(0,n.jsxs)(t.li,{children:["Once you click ",(0,n.jsx)(t.code,{children:"Commit new file"})," or ",(0,n.jsx)(t.code,{children:"Commit changes"})," you'll have the opportunity to add even more detail if needed before submitting it for review."]}),"\n",(0,n.jsxs)(t.li,{children:["Click ",(0,n.jsx)(t.code,{children:"Create Pull Request"})," when finished."]}),"\n",(0,n.jsx)(t.li,{children:"The pull request will require 1 approval. This approval can be from a member of the data platform team or another colleague familiar with the platform. At this point please reach out to the Data Platform team or colleague in order to obtain a review"}),"\n",(0,n.jsx)(t.li,{children:"You'll receive an email to confirm when your changes have been approved or if any comments have been added to your Pull Request."}),"\n",(0,n.jsxs)(t.li,{children:["After the pull request you created has been approved you will then have the ability to merge the pull request, Please click ",(0,n.jsx)(t.code,{children:"Squash and merge"})," to complete this step\n",(0,n.jsx)(t.img,{alt:"merge_pr.png",src:o(822).A+"",width:"1149",height:"477"})]}),"\n",(0,n.jsxs)(t.li,{children:["Once you have merged the pull request you will be able to view the progress of the staging deployment by navigating to the ",(0,n.jsx)(t.a,{href:"https://github.com/LBHackney-IT/Data-Platform/actions",children:"Actions"})," tab of the Github repository"]}),"\n"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["The workflow for the deployment will contain the following text under the workflow title: ",(0,n.jsx)(t.code,{children:"Data-Platform #xxx: Commit xxxx pushed by xxxxx"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.ol,{start:"10",children:["\n",(0,n.jsx)(t.li,{children:"When the staging section of the deployment has finished you should be able to see that the Data Platform pre-production/staging environment has updated to reflect the changes you made in the code, and you can now perform some testing to ensure your change is working as expected"}),"\n",(0,n.jsxs)(t.li,{children:["By this point you will have received a notification email to approve the deployment of your change to production:\n",(0,n.jsx)(t.img,{alt:"img.png",src:o(8332).A+"",width:"576",height:"488"})]}),"\n"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"If you are happy with how your change is performing in pre-production then please follow the links in the email you have received to progress your change to production."}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.ol,{start:"2",children:["\n",(0,n.jsx)(t.li,{children:"If the change did not work as expected in pre-production then please decline the deployment of your change to production and repeat the steps above in order to fix any issues you have found in pre-production"}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.ol,{start:"3",children:["\n",(0,n.jsx)(t.li,{children:"If you did not receive an email regarding deployment of your change to production and you are ready to do so then please reach out to the Data Platform team"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.ol,{start:"12",children:["\n",(0,n.jsxs)(t.li,{children:["If you wish to explore the deployment process in more detail please see the ",(0,n.jsx)(t.a,{href:"/Data-Platform-Playbook/docs/CD-process",children:"CD Process"})," section of the playbook"]}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},2444:(e,t,o)=>{o.d(t,{A:()=>n});const n=o.p+"assets/images/being_on_a_secondary_branch-add3ab15b32a5dced4b5092e66f81e11.png"},4299:(e,t,o)=>{o.d(t,{A:()=>n});const n=o.p+"assets/images/being_on_the_main_branch-5a479791511bac0cb8ac52f16b294a6f.png"},822:(e,t,o)=>{o.d(t,{A:()=>n});const n=o.p+"assets/images/merge_pr-e4de075c2b4ea6fc6356aa9f283507aa.png"},8332:(e,t,o)=>{o.d(t,{A:()=>n});const n=o.p+"assets/images/production-deployment-cd66907c821f27075b9d93846057ceff.png"},8453:(e,t,o)=>{o.d(t,{R:()=>s,x:()=>r});var n=o(6540);const a={},i=n.createContext(a);function s(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);