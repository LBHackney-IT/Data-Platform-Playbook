"use strict";(self.webpackChunkdata_platform_playbook=self.webpackChunkdata_platform_playbook||[]).push([[2983],{8904:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>t,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>l});var s=n(4848),o=n(8453);const i={id:"github-commit-transform",title:"Committing transforms",description:"Onboarding data analysts and engineers to DAP\u21e8flow, the Data Analytics Platform Airflow integration.",layout:"playbook_js",tags:["onboarding"]},t="How do I commit my working [transform SQL] query to DAP\u21e8flow's dap-airflow repository?",d={id:"dap-airflow/onboarding/github-commit-transform",title:"Committing transforms",description:"Onboarding data analysts and engineers to DAP\u21e8flow, the Data Analytics Platform Airflow integration.",source:"@site/docs/dap-airflow/onboarding/github-commit-transform.md",sourceDirName:"dap-airflow/onboarding",slug:"/dap-airflow/onboarding/github-commit-transform",permalink:"/Data-Platform-Playbook/dap-airflow/onboarding/github-commit-transform",draft:!1,unlisted:!1,editUrl:"https://github.com/LBHackney-IT/data-platform-playbook/edit/master/docs/dap-airflow/onboarding/github-commit-transform.md",tags:[{inline:!0,label:"onboarding",permalink:"/Data-Platform-Playbook/tags/onboarding"}],version:"current",frontMatter:{id:"github-commit-transform",title:"Committing transforms",description:"Onboarding data analysts and engineers to DAP\u21e8flow, the Data Analytics Platform Airflow integration.",layout:"playbook_js",tags:["onboarding"]},sidebar:"docs",previous:{title:"GitHub branching",permalink:"/Data-Platform-Playbook/dap-airflow/onboarding/github-branch"},next:{title:"GitHub pull requests",permalink:"/Data-Platform-Playbook/dap-airflow/onboarding/github-pull-request"}},c={},l=[{value:"1. Access <em><strong>Amazon Athena</strong></em> with your <code>[service workgroup]</code>",id:"1-access-amazon-athena-with-your-service-workgroup",level:2},{value:"2. Prepare and make ready your <code>[transform SQL]</code> query",id:"2-prepare-and-make-ready-your-transform-sql-query",level:2},{value:"3. Access the <code>dap-airflow</code> repository in <em><strong>GitHub</strong></em>",id:"3-access-the-dap-airflow-repository-in-github",level:2},{value:"4. Open your <code>[service dags]/transformations</code> subfolder on a your <code>[transform branch]</code>",id:"4-open-your-service-dagstransformations-subfolder-on-a-your-transform-branch",level:2},{value:"5. Create your new <code>[transform].sql</code> file in <em><strong>GitHub</strong></em>",id:"5-create-your-new-transformsql-file-in-github",level:2},{value:"6. Copy your <code>[transform SQL]</code> code from <em><strong>Amazon Athena</strong></em>",id:"6-copy-your-transform-sql-code-from-amazon-athena",level:2},{value:"7. Paste your <code>[transform SQL]</code> code into <em><strong>GitHub</strong></em>",id:"7-paste-your-transform-sql-code-into-github",level:2},{value:"8. Review and adjust your <code>[transform SQL]</code> code",id:"8-review-and-adjust-your-transform-sql-code",level:2},{value:"9. Commit your <code>[transform].sql</code> file",id:"9-commit-your-transformsql-file",level:2},{value:"10. Making subsequent changes to <code>[transform].sql</code>",id:"10-making-subsequent-changes-to-transformsql",level:2},{value:"<strong><em>&quot;We</em> \u2661 <em>your feedback!&quot;</em></strong>",id:"we--your-feedback",level:2},{value:"\ud83d\udc49 Please use <strong>this link \u25ba</strong> <strong>DAP\u21e8flow</strong> <code>UX</code> <strong>Feedback / github-commit-transform</strong>",id:"-please-use-this-link--dapflow-ux-feedback--github-commit-transform",level:3},{value:"\ud83d\udcda<code>UX</code> Criteria",id:"ux-criteria",level:2},{value:"How do I commit my working <code>[transform SQL]</code> query to <strong>DAP\u21e8flow</strong>&#39;s <code>dap-airflow</code> repository?",id:"how-do-i-commit-my-working-transform-sql-query-to-dapflows-dap-airflow-repository-1",level:3}];function a(e){const r={a:"a",admonition:"admonition",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.header,{children:(0,s.jsxs)(r.h1,{id:"how-do-i-commit-my-working-transform-sql-query-to-dapflows-dap-airflow-repository",children:["How do I commit my working ",(0,s.jsx)(r.code,{children:"[transform SQL]"})," query to ",(0,s.jsx)(r.strong,{children:"DAP\u21e8flow"}),"'s ",(0,s.jsx)(r.code,{children:"dap-airflow"})," repository?"]})}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.img,{alt:"DAP\u21e8flow",src:n(2854).A+"",width:"750",height:"100"})}),"\n",(0,s.jsxs)(r.h2,{id:"1-access-amazon-athena-with-your-service-workgroup",children:["1. Access ",(0,s.jsx)(r.em,{children:(0,s.jsx)(r.strong,{children:"Amazon Athena"})})," with your ",(0,s.jsx)(r.code,{children:"[service workgroup]"})]}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"\ud83d\uddb1"})})," In your web browser, log in to your AWS account, navigate to the ",(0,s.jsx)(r.em,{children:(0,s.jsx)(r.strong,{children:"AWS Management Console"})}),", and open ",(0,s.jsx)(r.em,{children:(0,s.jsx)(r.strong,{children:"Amazon Athena"})}),"."]}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"\ud83d\uddb1"})})," Ensure you have selected your ",(0,s.jsx)(r.code,{children:"[service workgroup]"})," from the list box next to \u201c",(0,s.jsx)(r.strong,{children:"Workgroup"}),"\u201d."]}),"\n",(0,s.jsx)(r.admonition,{title:"REMINDER",type:"info",children:(0,s.jsxs)(r.p,{children:["\ud83d\udc49  Your ",(0,s.jsxs)(r.strong,{children:["Service Terms",(0,s.jsx)(r.code,{children:"[]"})]})," are defined in the ",(0,s.jsx)(r.em,{children:(0,s.jsx)(r.strong,{children:"welcome"})})," document stored in your ",(0,s.jsxs)(r.a,{href:"https://drive.google.com/drive/folders/1k30M7Hh8WLttL5T5JVGbnKvSLNX7lVSg?usp=drive_link",children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"[service access group]"})})," ",(0,s.jsx)(r.em,{children:(0,s.jsx)(r.strong,{children:"Google Drive subfolder"})})]}),"."]})}),"\n",(0,s.jsxs)(r.h2,{id:"2-prepare-and-make-ready-your-transform-sql-query",children:["2. Prepare and make ready your ",(0,s.jsx)(r.code,{children:"[transform SQL]"})," query"]}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"\ud83d\uddb1"})})," Ensure you have already created, tested and saved your ",(0,s.jsx)(r.code,{children:"[transform SQL]"})," as a working, fully functional Athena SQL query."]}),"\n",(0,s.jsxs)(r.p,{children:["\ud83d\udc49 If you want reminding of how to do any of that, see ",(0,s.jsx)(r.strong,{children:"here"})," or ",(0,s.jsx)(r.strong,{children:"here \u25ba"})]}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.a,{href:"../dap-airflow/onboarding/prototype-simple-transforms",children:"DAP\u21e8flow\ud83d\udcdaPrototype simple transforms"})})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.a,{href:"../dap-airflow/onboarding/prototype-legacy-transforms",children:"DAP\u21e8flow\ud83d\udcdaPrototype legacy transforms"})})}),"\n"]}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"\ud83d\uddb1"})}),"  Open your ",(0,s.jsx)(r.code,{children:"[transform SQL]"})," in the ",(0,s.jsx)(r.em,{children:(0,s.jsx)(r.strong,{children:"Amazon Athena"})})," query editor and keep it open in a web browser tab."]}),"\n",(0,s.jsxs)(r.h2,{id:"3-access-the-dap-airflow-repository-in-github",children:["3. Access the ",(0,s.jsx)(r.code,{children:"dap-airflow"})," repository in ",(0,s.jsx)(r.em,{children:(0,s.jsx)(r.strong,{children:"GitHub"})})]}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"\ud83d\uddb1"})})," Use another tab in your web browser to log into your ",(0,s.jsx)(r.em,{children:(0,s.jsx)(r.strong,{children:"GitHub"})})," account using your ",(0,s.jsx)(r.em,{children:"Hackney email address"})," with two-factor authentication."]}),"\n",(0,s.jsxs)(r.p,{children:["\ud83d\udc49 Users without a ",(0,s.jsx)(r.em,{children:(0,s.jsx)(r.strong,{children:"GitHub"})})," account or existing ",(0,s.jsx)(r.em,{children:(0,s.jsx)(r.strong,{children:"GitHub"})})," users without membership of the ",(0,s.jsxs)(r.strong,{children:[(0,s.jsx)(r.a,{href:"https://github.com/LBHackney-IT",children:"London Borough of Hackney"})," organization,"]})," should check back at ",(0,s.jsx)(r.strong,{children:"the start \u25ba"})," ",(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.a,{href:"../onboarding/github-access",children:"DAP\u21e8flow\ud83d\udcdaGitHub access"})})]}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"\ud83d\uddb1"})})," Open the ",(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.a,{href:"https://github.com/LBHackney-IT/dap-airflow",children:(0,s.jsx)(r.code,{children:"dap-airflow"})})})," repository in your web browser."]}),"\n",(0,s.jsxs)(r.h2,{id:"4-open-your-service-dagstransformations-subfolder-on-a-your-transform-branch",children:["4. Open your ",(0,s.jsx)(r.code,{children:"[service dags]/transformations"})," subfolder on a your ",(0,s.jsx)(r.code,{children:"[transform branch]"})]}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"\ud83d\uddb1"})})," Ensure you have created your ",(0,s.jsx)(r.img,{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAAXNSR0IArs4c6QAAAU9JREFUOE+tk79Pg1AQx99bHPwf+k8URxJ2VngdtaTGMEDC4iqv0s2FxA4tjUl1fbzJiXSiOiKhy+s/wayDCWfbCKG/UBNveMPdffK9u3eH0bcRQmTbtl+EEJemaT6U/nrccZxr3/fvGGOvaz9eP+Px2JrNZveyLA+FEFYQBBt/3brdLrRareFyubQAwOacDzdJk8nEjaKIappG4zimo9FoDzZNExRFoZxzumJoGIb9KknX9XOE0CMAuJzz211lTdNuMMZ9hNBFGIZPVdlloq7rgDE+Y4y9HehZAoBkpVgJbpX3LzAhRDDGtsSLonhXVfWz1+udlIE9ZQAIJEm6StO0gtvtNprP5zRJkuc8z6vAHmwYBppOp6d1WUII6nQ6H7tz+HXPu+Cfpt0I//TPR+HFYuF6nte4YUfhLMuswWDQuNuNZa+vqkwor+YQUPd9AUZ2tBDCa9wvAAAAAElFTkSuQmCC",alt:""}),(0,s.jsx)(r.code,{children:"[transform branch]"})," and have it selected.",(0,s.jsx)(r.br,{}),"\n",(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"Fig. 4a"})})," ",(0,s.jsx)(r.img,{alt:"Fig. 4a",src:n(2645).A+"",width:"402",height:"229"})]}),"\n",(0,s.jsxs)(r.p,{children:["\ud83d\udc49 For how to create your ",(0,s.jsx)(r.code,{children:"[transform branch]"}),", ",(0,s.jsx)(r.strong,{children:"see here \u25ba"})," ",(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.a,{href:"../onboarding/github-branch",children:"DAP\u21e8flow\ud83d\udcdaGitHub branching"})})]}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"\ud83d\uddb1"})})," In the ",(0,s.jsx)(r.code,{children:"dap-airflow"})," repository, navigate to your ",(0,s.jsx)(r.code,{children:"dap-airflow/airflow/dags/"})," ",(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"[service dags]/transformations"})})," service sub-folder. You can use ",(0,s.jsx)(r.em,{children:(0,s.jsx)(r.strong,{children:"GitHub"})}),"\u2019s left-hand navigation pane as follows:"]}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["Click on the ",(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"airflow"})})," folder"]}),"\n",(0,s.jsxs)(r.li,{children:["Inside the ",(0,s.jsx)(r.code,{children:"airflow"})," folder, click on the ",(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"dags"})})," folder"]}),"\n",(0,s.jsxs)(r.li,{children:["Inside the ",(0,s.jsx)(r.code,{children:"dags"})," folder, click on your ",(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"[service dags]"})})," folder"]}),"\n",(0,s.jsxs)(r.li,{children:["Inside the  ",(0,s.jsx)(r.code,{children:"[service dags]"})," folder, click on the ",(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"transformations"})})," subfolder"]}),"\n"]}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"Fig. 4b & 5a"})})," ",(0,s.jsx)(r.img,{alt:"Fig. 4b &amp; 5a",src:n(2971).A+"",width:"580",height:"343"})]}),"\n",(0,s.jsxs)(r.h2,{id:"5-create-your-new-transformsql-file-in-github",children:["5. Create your new ",(0,s.jsx)(r.code,{children:"[transform].sql"})," file in ",(0,s.jsx)(r.em,{children:(0,s.jsx)(r.strong,{children:"GitHub"})})]}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"\ud83d\uddb1"})}),' At the top right region of the page, click the "',(0,s.jsx)(r.strong,{children:"Add file"}),'" button and select "',(0,s.jsx)(r.strong,{children:"Create new file"}),'"']}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"\ud83d\uddae"})})," In the box following the ",(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"transformations/"})})," subfolder, enter your ",(0,s.jsx)(r.code,{children:"[transform].sql"}),"."]}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"Fig. 5b"})})," ",(0,s.jsx)(r.img,{alt:"Fig. 5b",src:n(3802).A+"",width:"1591",height:"340"})]}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"\ud83d\uddb1"})})," Keep this ",(0,s.jsx)(r.em,{children:(0,s.jsx)(r.strong,{children:"Github"})})," code editor and it's web browser tab open for later on."]}),"\n",(0,s.jsxs)(r.h2,{id:"6-copy-your-transform-sql-code-from-amazon-athena",children:["6. Copy your ",(0,s.jsx)(r.code,{children:"[transform SQL]"})," code from ",(0,s.jsx)(r.em,{children:(0,s.jsx)(r.strong,{children:"Amazon Athena"})})]}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"\ud83d\uddb1"})})," Switch back to the ",(0,s.jsx)(r.em,{children:(0,s.jsx)(r.strong,{children:"Amazon Athena"})})," tab in your web browser, with your ",(0,s.jsx)(r.code,{children:"[transform SQL]"})," still in the query editor.",(0,s.jsx)(r.br,{}),"\n",(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"\ud83d\uddb1"})})," Select your entire ",(0,s.jsx)(r.code,{children:"[transform SQL]"})," code in the Athena query editor.",(0,s.jsx)(r.br,{}),"\n",(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"Fig. 6"})})," ",(0,s.jsx)(r.img,{alt:"Fig. 6",src:n(5615).A+"",width:"887",height:"1380"}),(0,s.jsx)(r.br,{}),"\n",(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"\ud83d\uddb1"})}),' Use the right-click menu to "',(0,s.jsx)(r.em,{children:"Copy"}),'" the selected code to your computer\u2019s clipboard.']}),"\n",(0,s.jsxs)(r.h2,{id:"7-paste-your-transform-sql-code-into-github",children:["7. Paste your ",(0,s.jsx)(r.code,{children:"[transform SQL]"})," code into ",(0,s.jsx)(r.em,{children:(0,s.jsx)(r.strong,{children:"GitHub"})})]}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"\ud83d\uddb1"})})," Switch back to the ",(0,s.jsx)(r.em,{children:(0,s.jsx)(r.strong,{children:"GitHub"})})," tab in your web browser, with ",(0,s.jsx)(r.code,{children:"[transform].sql"})," currently empty in the code editor.",(0,s.jsx)(r.br,{}),"\n",(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"\ud83d\uddb1"})})," In the ",(0,s.jsx)(r.em,{children:(0,s.jsx)(r.strong,{children:"GitHub"})})," editor window beneath where it says \u201c",(0,s.jsx)(r.strong,{children:"Edit"}),'\u201d, use the right-click menu to "',(0,s.jsx)(r.em,{children:"Paste"}),'" your entire ',(0,s.jsx)(r.code,{children:"[transform SQL]"})," code, from the computer\u2019s clipboard, into your ",(0,s.jsx)(r.code,{children:"[transform].sql"})," file.",(0,s.jsx)(r.br,{}),"\n",(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"Fig. 7 & 8"})})," ",(0,s.jsx)(r.img,{alt:"Fig. 7 &amp; 8",src:n(6854).A+"",width:"1109",height:"487"})]}),"\n",(0,s.jsxs)(r.h2,{id:"8-review-and-adjust-your-transform-sql-code",children:["8. Review and adjust your ",(0,s.jsx)(r.code,{children:"[transform SQL]"})," code"]}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"\ud83d\uddb1"})})," Scroll to the bottom of the ",(0,s.jsx)(r.em,{children:(0,s.jsx)(r.strong,{children:"GitHub"})})," editor window to remove any ",(0,s.jsx)(r.code,{children:"limit"})," clause (e.g., ",(0,s.jsx)(r.code,{children:"limit 100"}),"), leaving just the final ",(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:";"})})," semi-colon at the very end."]}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"\ud83d\udc41"})})," If you spot problems in your code you have an opportunity to fix them now, or fix them later."]}),"\n",(0,s.jsxs)(r.h2,{id:"9-commit-your-transformsql-file",children:["9. Commit your ",(0,s.jsx)(r.code,{children:"[transform].sql"})," file"]}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"\ud83d\uddb1"})}),' Click the "',(0,s.jsx)(r.strong,{children:"Commit changes"}),'" button to open a dialogue box.',(0,s.jsx)(r.br,{}),"\n",(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"Fig. 9"})})," ",(0,s.jsx)(r.img,{alt:"Fig. 9",src:n(8247).A+"",width:"983",height:"1044"}),(0,s.jsx)(r.br,{}),"\n",(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"\ud83d\uddae"})})," Enter a short commit message, Eg. ",(0,s.jsx)(r.code,{children:"Add ... [transform].sql"}),".",(0,s.jsx)(r.br,{}),"\n",(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"\ud83d\uddae"})})," Enter a longer description if wanted.",(0,s.jsx)(r.br,{}),"\n",(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"\ud83d\uddb1"})})," Select the option \u201c",(0,s.jsxs)(r.strong,{children:["Commit directly to the ",(0,s.jsx)(r.code,{children:"[transform branch]"})]}),"\u201d.",(0,s.jsx)(r.br,{}),"\n",(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"\ud83d\uddb1"})}),' Click the "',(0,s.jsx)(r.strong,{children:"Commit changes"}),'" button.']}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"\ud83d\udc41"})})," You should see a message confirming your ",(0,s.jsx)(r.code,{children:"[transform].sql"})," was successfully committed directly to your ",(0,s.jsx)(r.code,{children:"[transform branch]"}),"."]}),"\n",(0,s.jsxs)(r.h2,{id:"10-making-subsequent-changes-to-transformsql",children:["10. Making subsequent changes to ",(0,s.jsx)(r.code,{children:"[transform].sql"})]}),"\n",(0,s.jsxs)(r.p,{children:["Whether you are just fault-fixing or you want to add new SQL code features to your ",(0,s.jsx)(r.code,{children:"[transform SQL]"}),":"]}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"\ud83d\uddb1"})})," In the ",(0,s.jsx)(r.em,{children:(0,s.jsx)(r.strong,{children:"GitHub"})})," editor window beneath where it says \u201c",(0,s.jsx)(r.strong,{children:"Edit"}),"\u201d, you can edit your ",(0,s.jsx)(r.code,{children:"[transform].sql"})," file directly."]}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"\ud83d\uddb1"})}),' Alternatively, you can use the right-click menu to "',(0,s.jsx)(r.em,{children:"Paste"}),'" a new version of your ',(0,s.jsx)(r.code,{children:"[transform SQL]"})," code, from the computer\u2019s clipboard, into your ",(0,s.jsx)(r.code,{children:"[transform].sql"})," file."]}),"\n",(0,s.jsxs)(r.p,{children:["\ud83d\udca1 But unlike regular code editors, ",(0,s.jsx)(r.em,{children:(0,s.jsx)(r.strong,{children:"GitHub"})})," will not allow you to simply ",(0,s.jsx)(r.em,{children:'"Save"'})," consecutive changes to your code then come back later to finally ",(0,s.jsx)(r.em,{children:"commit"})," your ",(0,s.jsx)(r.code,{children:"[transform].sql"})," with the rest of your ",(0,s.jsx)(r.code,{children:"[transform branch]"}),". Using ",(0,s.jsx)(r.em,{children:(0,s.jsx)(r.strong,{children:"GitHub"})}),"'s ",(0,s.jsx)(r.em,{children:"web console"})," in this way absolutely requires you to re-",(0,s.jsx)(r.em,{children:"commit"})," your ",(0,s.jsx)(r.code,{children:"[transform branch]"})," each and every time you edit or change your files. If you closed your web browser before ",(0,s.jsx)(r.em,{children:"committing"}),", you would lose the edits you did using ",(0,s.jsx)(r.em,{children:(0,s.jsx)(r.strong,{children:"GitHub"})}),"'s editor since the previous ",(0,s.jsx)(r.em,{children:"commit"}),"."]}),"\n",(0,s.jsxs)(r.p,{children:["\ud83d\udc49 After editing ",(0,s.jsx)(r.code,{children:"[transform].sql"})," each time, simply ",(0,s.jsxs)(r.strong,{children:["repeat from \u25ba ",(0,s.jsx)(r.a,{href:"#9-commit-your-transformsql-file",children:"step 9"})]}),"."]}),"\n",(0,s.jsxs)(r.p,{children:["\ud83d\udc49 You may ",(0,s.jsx)(r.em,{children:"commit"})," as often as you need to, until finally, you raise a ",(0,s.jsx)(r.em,{children:"pull request"}),", ",(0,s.jsx)(r.strong,{children:"here \u25ba"})," ",(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.a,{href:"../onboarding/github-pull-request",children:"DAP\u21e8flow\ud83d\udcdaGitHub pull request"})})]}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h2,{id:"we--your-feedback",children:(0,s.jsxs)(r.strong,{children:[(0,s.jsx)(r.em,{children:'"We'})," \u2661 ",(0,s.jsx)(r.em,{children:'your feedback!"'})]})}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.img,{alt:"DAP\u21e8flow",src:n(2854).A+"",width:"750",height:"100"})}),"\n",(0,s.jsxs)(r.admonition,{title:"UX",type:"tip",children:[(0,s.jsxs)(r.h3,{id:"-please-use-this-link--dapflow-ux-feedback--github-commit-transform",children:["\ud83d\udc49 Please use ",(0,s.jsx)(r.strong,{children:"this link \u25ba"})," ",(0,s.jsxs)(r.a,{href:"https://docs.google.com/forms/d/e/1FAIpQLSdqeNyWIPMNBHEr-YSyxnXQ4ggTwJPkffMYgFaJ4hGEhIL6LA/viewform?usp=pp_url&entry.339550210=github-commit-transform",children:[(0,s.jsx)(r.strong,{children:"DAP\u21e8flow"})," ",(0,s.jsx)(r.code,{children:"UX"})," ",(0,s.jsx)(r.strong,{children:"Feedback / github-commit-transform"})]})]}),(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:["Your feedback enables us to improve ",(0,s.jsx)(r.strong,{children:"DAP\u21e8flow"})," and our Data Analytics Platform service."]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:"We encourage all our users to be generous with their time, in giving us their recollections and honest opinions about our service."}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:["We especially encourage our new users to give feedback at the end of every ",(0,s.jsx)(r.strong,{children:"\ud83d\udcdaOnboarding"})," task because the quality of the onboarding experience really matters."]}),"\n",(0,s.jsxs)(r.p,{children:["\u261d ",(0,s.jsx)(r.strong,{children:"Please use this link to help us understand your user experience!"})]}),"\n"]}),"\n"]})]}),"\n",(0,s.jsxs)(r.h2,{id:"ux-criteria",children:["\ud83d\udcda",(0,s.jsx)(r.code,{children:"UX"})," Criteria"]}),"\n",(0,s.jsx)(r.admonition,{title:"ABILITY",type:"info",children:(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["Hackney ",(0,s.jsx)(r.strong,{children:"Google Workspace"})," user"]}),"\n",(0,s.jsxs)(r.li,{children:["Hackney ",(0,s.jsx)(r.code,{children:"[service]"})," Data Analyst"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.em,{children:(0,s.jsx)(r.strong,{children:"Amazon Athena"})})," user"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.em,{children:(0,s.jsx)(r.strong,{children:"GitHub"})})," user"]}),"\n"]})}),"\n",(0,s.jsxs)(r.admonition,{title:"BEHAVIOR",type:"note",children:[(0,s.jsxs)(r.h3,{id:"how-do-i-commit-my-working-transform-sql-query-to-dapflows-dap-airflow-repository-1",children:["How do I commit my working ",(0,s.jsx)(r.code,{children:"[transform SQL]"})," query to ",(0,s.jsx)(r.strong,{children:"DAP\u21e8flow"}),"'s ",(0,s.jsx)(r.code,{children:"dap-airflow"})," repository?"]}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"Measures"})," the behavior of ",(0,s.jsx)(r.em,{children:(0,s.jsx)(r.strong,{children:"GitHub"})})," and ",(0,s.jsx)(r.em,{children:(0,s.jsx)(r.strong,{children:"Amazon Athena"})}),"."]}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"Given"})," in my web browser, I have logged into my AWS account",(0,s.jsx)(r.br,{}),"\n",(0,s.jsx)(r.strong,{children:"~and"})," I accessed ",(0,s.jsx)(r.em,{children:(0,s.jsx)(r.strong,{children:"Amazon Athena"})}),(0,s.jsx)(r.br,{}),"\n",(0,s.jsx)(r.strong,{children:"~and"})," I have selected my ",(0,s.jsx)(r.code,{children:"[service workgroup]"}),(0,s.jsx)(r.br,{}),"\n",(0,s.jsx)(r.strong,{children:"~and"})," I have created and saved my ",(0,s.jsx)(r.code,{children:"[transform SQL]"})," as a working fully functional Athena SQL query",(0,s.jsx)(r.br,{}),"\n",(0,s.jsx)(r.strong,{children:"~and"})," I have my ",(0,s.jsx)(r.code,{children:"[transform SQL]"})," kept open in the Athena query editor in a web browser tab",(0,s.jsx)(r.br,{}),"\n",(0,s.jsx)(r.strong,{children:"~and"})," in another tab in my web browser, I am logged on to my ",(0,s.jsx)(r.em,{children:(0,s.jsx)(r.strong,{children:"GitHub"})})," account using my ",(0,s.jsx)(r.em,{children:(0,s.jsx)(r.strong,{children:"Hackney email address"})})," with two-factor authentication",(0,s.jsx)(r.br,{}),"\n",(0,s.jsx)(r.strong,{children:"~and"})," I am granted membership of the ",(0,s.jsxs)(r.strong,{children:[(0,s.jsx)(r.a,{href:"https://github.com/LBHackney-IT",children:"London Borough of Hackney"})," organization"]})," on ",(0,s.jsx)(r.em,{children:(0,s.jsx)(r.strong,{children:"GitHub"})})," incorporating the ",(0,s.jsx)(r.a,{href:"https://github.com/LBHackney-IT/dap-airflow",children:(0,s.jsx)(r.code,{children:"dap-airflow"})})," private repository",(0,s.jsx)(r.br,{}),"\n",(0,s.jsx)(r.strong,{children:"~and"})," I have accessed the ",(0,s.jsx)(r.a,{href:"https://github.com/LBHackney-IT/dap-airflow",children:(0,s.jsx)(r.code,{children:"dap-airflow"})})," repository",(0,s.jsx)(r.br,{}),"\n",(0,s.jsx)(r.strong,{children:"~and"})," I previously created my ",(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"[transform branch]"})})]}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"When"})," I select my ",(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"[transform branch]"})})," as my working branch",(0,s.jsx)(r.br,{}),"\n",(0,s.jsx)(r.strong,{children:"~and"})," I navigate to my ",(0,s.jsx)(r.code,{children:"dap-airflow/airflow/dags/"})," ",(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"[service dags]/transformations"})})," service subfolder",(0,s.jsx)(r.br,{}),"\n",(0,s.jsx)(r.strong,{children:"~and"}),' at the top right region of the page, click the "',(0,s.jsx)(r.strong,{children:"Add file"}),'" button and select "',(0,s.jsx)(r.strong,{children:"Create new file"}),'"',(0,s.jsx)(r.br,{}),"\n",(0,s.jsx)(r.strong,{children:"~and"})," in the box following the ",(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"transformations/"})})," subfolder, I enter my ",(0,s.jsx)(r.code,{children:"[transform].sql"}),(0,s.jsx)(r.br,{}),"\n",(0,s.jsx)(r.strong,{children:"~and"})," back in the ",(0,s.jsx)(r.em,{children:(0,s.jsx)(r.strong,{children:"Amazon Athena"})})," web browser tab, I select my entire ",(0,s.jsx)(r.code,{children:"[transform SQL]"})," code in the Athena query editor before ",(0,s.jsx)(r.em,{children:"copying"})," it into the computer\u2019s clipboard",(0,s.jsx)(r.br,{}),"\n",(0,s.jsx)(r.strong,{children:"~and"})," back in the ",(0,s.jsx)(r.em,{children:(0,s.jsx)(r.strong,{children:"GitHub"})})," web browser tab, in the editor window, beneath where it says \u201c",(0,s.jsx)(r.strong,{children:"Edit"}),"\u201d, I ",(0,s.jsx)(r.em,{children:"paste"})," my ",(0,s.jsx)(r.code,{children:"[transform SQL]"})," code, from the computer\u2019s clipboard, into my ",(0,s.jsx)(r.code,{children:"[transform].sql"})," file",(0,s.jsx)(r.br,{}),"\n",(0,s.jsx)(r.strong,{children:"~and"})," I scroll to the bottom of the editor window to check and remove any ",(0,s.jsx)(r.code,{children:"limit"})," clause (eg. ",(0,s.jsx)(r.code,{children:"limit 100"}),"), leaving just the ",(0,s.jsx)(r.code,{children:";"})," semi-colon at the very end",(0,s.jsx)(r.br,{}),"\n",(0,s.jsx)(r.strong,{children:"~and"}),' I click the "',(0,s.jsx)(r.strong,{children:"Commit changes"}),'" button to open up a dialogue box',(0,s.jsx)(r.br,{}),"\n",(0,s.jsx)(r.strong,{children:"~and"})," I enter a short commit message, Eg. ",(0,s.jsx)(r.code,{children:"Add ... [transform].sql"}),(0,s.jsx)(r.br,{}),"\n",(0,s.jsx)(r.strong,{children:"~and"})," I enter a longer description if I want to",(0,s.jsx)(r.br,{}),"\n",(0,s.jsx)(r.strong,{children:"~and"})," I select the option \u201c",(0,s.jsxs)(r.strong,{children:["Commit directly to my ",(0,s.jsx)(r.code,{children:"[transform branch]"})]}),(0,s.jsx)(r.br,{}),"\n",(0,s.jsx)(r.strong,{children:"~and"}),' I click the "',(0,s.jsx)(r.strong,{children:"Commit changes"}),'" button']}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"Then"})," I should see a message telling me, my ",(0,s.jsx)(r.code,{children:"[transform].sql"})," was successfully ",(0,s.jsx)(r.em,{children:"committed"})," directly to my ",(0,s.jsx)(r.code,{children:"[transform branch]"}),(0,s.jsx)(r.br,{}),"\n",(0,s.jsx)(r.strong,{children:"~and"})," I will be permitted to make further edits to my ",(0,s.jsx)(r.code,{children:"[transform].sql"})," followed by ",(0,s.jsx)(r.em,{children:"commits"})," to my to my ",(0,s.jsx)(r.code,{children:"[transform branch]"}),", as often as I need to, until I raise a ",(0,s.jsx)(r.em,{children:"pull request"})," for my ",(0,s.jsx)(r.code,{children:"[transform branch]"}),"."]}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"Scale"})," of 12 to 20 ",(0,s.jsx)(r.strong,{children:"~and"})," flow features."]})]})]})}function h(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},2854:(e,r,n)=>{n.d(r,{A:()=>s});const s=n.p+"assets/images/DAPairflowFLOWleft-e023069f4c3409ab8db1b918e04abb3b.png"},3802:(e,r,n)=>{n.d(r,{A:()=>s});const s=n.p+"assets/images/github-commit-transform-five-b-82361e4af478bbb96aba97ba067f7aa9.png"},2645:(e,r,n)=>{n.d(r,{A:()=>s});const s=n.p+"assets/images/github-commit-transform-four-a-8581500854f87ee77ebcaf5dc5f1a893.png"},2971:(e,r,n)=>{n.d(r,{A:()=>s});const s=n.p+"assets/images/github-commit-transform-four-b-five-a-1190e3675075a3c370e33fbea1865870.png"},8247:(e,r,n)=>{n.d(r,{A:()=>s});const s=n.p+"assets/images/github-commit-transform-nine-e08fb99d06879fcbc042c6d6baa5f0ea.png"},6854:(e,r,n)=>{n.d(r,{A:()=>s});const s=n.p+"assets/images/github-commit-transform-seven-eight-499ee5c613ed34b6bbf262769e00e5f1.png"},5615:(e,r,n)=>{n.d(r,{A:()=>s});const s=n.p+"assets/images/github-commit-transform-six-6f20c13b26e26571c34bcb5e805061b7.png"},8453:(e,r,n)=>{n.d(r,{R:()=>t,x:()=>d});var s=n(6540);const o={},i=s.createContext(o);function t(e){const r=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),s.createElement(i.Provider,{value:r},e.children)}}}]);