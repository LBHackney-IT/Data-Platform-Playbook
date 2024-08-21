"use strict";(self.webpackChunkdata_platform_playbook=self.webpackChunkdata_platform_playbook||[]).push([[9851],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>g});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),l=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),u=l(a),c=r,g=u["".concat(s,".").concat(c)]||u[c]||d[c]||o;return a?n.createElement(g,i(i({ref:t},m),{},{components:a})):n.createElement(g,i({ref:t},m))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=c;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[u]="string"==typeof e?e:r,i[1]=p;for(var l=2;l<o;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},8270:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var n=a(7462),r=(a(7294),a(3905));const o={id:"prototype-legacy-transforms",title:"Prototype legacy transforms",description:"Onboarding data analysts and engineers to DAP\u21e8flow, the Data Analytics Platform Airflow integration.",layout:"playbook_js",tags:["onboarding"]},i="How do I use *Amazon Athena* to prototype a data transformation from a [legacy SQL query]?",p={unversionedId:"dap-airflow/onboarding/prototype-legacy-transforms",id:"dap-airflow/onboarding/prototype-legacy-transforms",title:"Prototype legacy transforms",description:"Onboarding data analysts and engineers to DAP\u21e8flow, the Data Analytics Platform Airflow integration.",source:"@site/docs/dap-airflow/onboarding/prototype-legacy-transforms.md",sourceDirName:"dap-airflow/onboarding",slug:"/dap-airflow/onboarding/prototype-legacy-transforms",permalink:"/Data-Platform-Playbook/dap-airflow/onboarding/prototype-legacy-transforms",draft:!1,editUrl:"https://github.com/LBHackney-IT/data-platform-playbook/edit/master/docs/dap-airflow/onboarding/prototype-legacy-transforms.md",tags:[{label:"onboarding",permalink:"/Data-Platform-Playbook/tags/onboarding"}],version:"current",frontMatter:{id:"prototype-legacy-transforms",title:"Prototype legacy transforms",description:"Onboarding data analysts and engineers to DAP\u21e8flow, the Data Analytics Platform Airflow integration.",layout:"playbook_js",tags:["onboarding"]},sidebar:"docs",previous:{title:"Prototype simple transforms",permalink:"/Data-Platform-Playbook/dap-airflow/onboarding/prototype-simple-transforms"},next:{title:"Introduction",permalink:"/Data-Platform-Playbook/architecture-decisions/"}},s={},l=[{value:"1. Access <em>Amazon Athena</em>",id:"1-access-amazon-athena",level:3},{value:"2. Select your workgroup",id:"2-select-your-workgroup",level:3},{value:"3. Select your database",id:"3-select-your-database",level:3},{value:"4.Prepare your SQL query",id:"4prepare-your-sql-query",level:3},{value:"5. Verify Table and Column Availability",id:"5-verify-table-and-column-availability",level:3},{value:"6. Ensure your SQL query is compatible with <em>Amazon Athena</em>",id:"6-ensure-your-sql-query-is-compatible-with-amazon-athena",level:3},{value:"7. Run your query",id:"7-run-your-query",level:3},{value:"8. Review the results",id:"8-review-the-results",level:3},{value:"9. Save your query",id:"9-save-your-query",level:3},{value:"<strong><em>&quot;We</em> \u2661 <em>your feedback!&quot;</em></strong>",id:"we--your-feedback",level:2},{value:"UX Criteria",id:"ux-criteria",level:4}],m={toc:l},u="wrapper";function d(e){let{components:t,...o}=e;return(0,r.kt)(u,(0,n.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"how-do-i-use-amazon-athena-to-prototype-a-data-transformation-from-a-legacy-sql-query"},"How do I use ",(0,r.kt)("em",{parentName:"h1"},"Amazon Athena")," to prototype a data transformation from a ",(0,r.kt)("inlineCode",{parentName:"h1"},"[legacy SQL query]"),"?"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"DAP\u21e8flow",src:a(2632).Z,width:"750",height:"100"}),"  "),(0,r.kt)("h3",{id:"1-access-amazon-athena"},"1. Access ",(0,r.kt)("em",{parentName:"h3"},"Amazon Athena")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"\ud83d\uddb1"))," In your web browser, log in to your AWS account, navigate to the ",(0,r.kt)("strong",{parentName:"p"},"AWS Management Console"),", and open ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Amazon Athena")),". "),(0,r.kt)("p",null,"\ud83d\udc49 First time ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Amazon Athena"))," users should ",(0,r.kt)("strong",{parentName:"p"},"start here \u25ba")," ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"../onboarding/access-my-Amazon-Athena-database"},"DAP\u21e8flow\ud83d\udcdaAmazon Athena"))," "),(0,r.kt)("h3",{id:"2-select-your-workgroup"},"2. Select your workgroup"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"\ud83d\uddb1"))," Ensure you have selected ",(0,r.kt)("inlineCode",{parentName:"p"},"[my service]")," from the list box next to \u201c",(0,r.kt)("strong",{parentName:"p"},"Workgroup"),"\u201d.  "),(0,r.kt)("h3",{id:"3-select-your-database"},"3. Select your database"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"\ud83d\uddb1"))," Ensure you select ",(0,r.kt)("inlineCode",{parentName:"p"},"[my service raw zone]"),' from the list box under the "',(0,r.kt)("strong",{parentName:"p"},"Database"),'" section on the left side of the Athena interface.  '),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"\ud83d\udc41"))," You should observe ",(0,r.kt)("inlineCode",{parentName:"p"},"[my service database]"),' equivalent tables and columns with their respective data types listed below "',(0,r.kt)("strong",{parentName:"p"},"\u25bc Views"),'".  '),(0,r.kt)("h3",{id:"4prepare-your-sql-query"},"4.Prepare your SQL query"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"\ud83d\uddb1"))," Copy and paste your ",(0,r.kt)("inlineCode",{parentName:"p"},"[legacy SQL query]")," lifted from  ",(0,r.kt)("inlineCode",{parentName:"p"},"[my service database]")," into the query editor.  "),(0,r.kt)("p",null,"You should take the opportunity to tidy up and format your code, making it easier to read, maintain, and spot errors."),(0,r.kt)("p",null,"\ud83d\udc49 For an example, see ",(0,r.kt)("a",{parentName:"p",href:"https://docs.google.com/document/d/1EOBUOT6rZUk4tasub6Mqv_ywHaXwQscTmFod9HQZQpU/edit?usp=sharing"},"DPF-185 EXAMPLE 2.2 CFS Allocations query"),"  "),(0,r.kt)("h3",{id:"5-verify-table-and-column-availability"},"5. Verify Table and Column Availability"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"\ud83d\uddb1"))," Over on the left of the Athena interface, expand the list under \u201c",(0,r.kt)("strong",{parentName:"p"},"\u25bc Views"),"\u201d to verify it includes your ",(0,r.kt)("inlineCode",{parentName:"p"},"[my service database]")," equivalent tables and columns matching those in your ",(0,r.kt)("inlineCode",{parentName:"p"},"[legacy SQL query]"),".",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Fig. 5a"))," ",(0,r.kt)("img",{alt:"Fig. 5a",src:a(8174).Z,width:"331",height:"408"}),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Fig. 5b"))," ",(0,r.kt)("img",{alt:"Fig. 5b",src:a(8504).Z,width:"323",height:"512"})),(0,r.kt)("h3",{id:"6-ensure-your-sql-query-is-compatible-with-amazon-athena"},"6. Ensure your SQL query is compatible with ",(0,r.kt)("em",{parentName:"h3"},"Amazon Athena")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"\ud83d\udc41"))," Review your SQL code to ensure all column functions and expressions are compatible with ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Amazon Athena")),", aiming to produce the same column output as the original. "),(0,r.kt)("p",null,"Often the easy way to test your SQL code compatibility is simply to try running it (as per ",(0,r.kt)("strong",{parentName:"p"},"Step 7"),"). It might succeed, or fail with errors that will inform you about what you need to change."),(0,r.kt)("p",null,"\ud83d\udc49 If your original column functions need replacing with equivalent ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Amazon Athena"))," functions then you can check the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Amazon Athena")," documentation \u25ba",(0,r.kt)("a",{parentName:"strong",href:"https://docs.aws.amazon.com/athena/latest/ug/functions.html"},"here")),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"\ud83d\uddb1"))," The first thing you will do when editing your SQL code, is make sure your tables names are fully qualified. "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Table names should be prefixed by their correct database names, eg. ",(0,r.kt)("inlineCode",{parentName:"p"},"\u201c[my service raw zone]\u201d.\u201c<table name>\u201d"),".  ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The original ",(0,r.kt)("inlineCode",{parentName:"p"},"[my service database]")," database name, where used in your ",(0,r.kt)("inlineCode",{parentName:"p"},"[legacy SQL query]"),", will be different here in ",(0,r.kt)("strong",{parentName:"p"},"DAP\u21e8flow"),", so you will need to swap it out with ",(0,r.kt)("inlineCode",{parentName:"p"},"[my service raw zone]"),".   "))),(0,r.kt)("h3",{id:"7-run-your-query"},"7. Run your query"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"\ud83d\uddb1"))," After customizing the SQL code, click \u201c",(0,r.kt)("strong",{parentName:"p"},"Run"),"\u201d located underneath the code window on the left side in the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Amazon Athena"))," interface.",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Fig. 7"))," ",(0,r.kt)("img",{alt:"Fig. 7",src:a(3408).Z,width:"390",height:"161"})),(0,r.kt)("h3",{id:"8-review-the-results"},"8. Review the results"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"\ud83d\udc41"))," ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Amazon Athena"))," should fetch the same results as your ",(0,r.kt)("inlineCode",{parentName:"p"},"[legacy SQL query]")," would have when executed upon your original ",(0,r.kt)("inlineCode",{parentName:"p"},"[my service database]"),". If you are able at his point, to make such a direct comparison with the legacy system then it will help you have confidence in the results of your prototype.",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Fig. 8"))," ",(0,r.kt)("img",{alt:"Fig. 8",src:a(1819).Z,width:"512",height:"169"})),(0,r.kt)("h3",{id:"9-save-your-query"},"9. Save your query"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"\ud83d\uddb1"))," Check you are in the correct ",(0,r.kt)("inlineCode",{parentName:"p"},"[my service]")," workgroup before clicking on the three dots ",(0,r.kt)("strong",{parentName:"p"},"\u22ee")," to the right of your Query tab, then select \u201c",(0,r.kt)("strong",{parentName:"p"},"Save as"),"\u201d.",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Fig. 9a"))," ",(0,r.kt)("img",{alt:"Fig. 9a",src:a(9759).Z,width:"507",height:"374"}),"  "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"\ud83d\uddb1"))," When the dialogue pops up, enter the name of your transform query eg. ",(0,r.kt)("inlineCode",{parentName:"p"},"[my transform].sql")," and write a description before clicking the \u201c",(0,r.kt)("strong",{parentName:"p"},"Save query"),"\u201d button.",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Fig. 9b"))," ",(0,r.kt)("img",{alt:"Fig. 9b",src:a(3752).Z,width:"512",height:"354"})),(0,r.kt)("br",null),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"we--your-feedback"},(0,r.kt)("strong",{parentName:"h2"},(0,r.kt)("em",{parentName:"strong"},'"We')," \u2661 ",(0,r.kt)("em",{parentName:"strong"},'your feedback!"'))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"DAP\u21e8flow",src:a(2632).Z,width:"750",height:"100"}),"  "),(0,r.kt)("admonition",{title:"UX  ",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\ud83d\udc49 Please use ",(0,r.kt)("strong",{parentName:"p"},"this link \u25ba")," ",(0,r.kt)("a",{parentName:"p",href:"https://docs.google.com/forms/d/e/1FAIpQLSdqeNyWIPMNBHEr-YSyxnXQ4ggTwJPkffMYgFaJ4hGEhIL6LA/viewform?usp=pp_url&entry.339550210=prototype-legacy-transforms"},(0,r.kt)("strong",{parentName:"a"},"DAP\u21e8flow")," ",(0,r.kt)("inlineCode",{parentName:"a"},"UX")," ",(0,r.kt)("strong",{parentName:"a"},"Feedback / prototype-legacy-transforms")),"  "),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Your feedback enables us to improve ",(0,r.kt)("strong",{parentName:"li"},"DAP\u21e8flow")," and our Data Analytics Platform service.  "),(0,r.kt)("li",{parentName:"ul"},"We encourage all our users to be generous with their time, in giving us their recollections and honest opinions about our service.  "),(0,r.kt)("li",{parentName:"ul"},"We especially encourage our new users to give feedback at the end of every ",(0,r.kt)("strong",{parentName:"li"},"\ud83d\udcdaOnboarding")," task because the quality of the onboarding experience really matters.",(0,r.kt)("br",{parentName:"li"}),"\u261d ",(0,r.kt)("strong",{parentName:"li"},"Please use this link to help us understand your user experience!")))),(0,r.kt)("h4",{id:"ux-criteria"},"UX Criteria"),(0,r.kt)("admonition",{title:"ABILITY  ",type:"info"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Hackney ",(0,r.kt)("strong",{parentName:"li"},"AWS Management Console")," user  "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Amazon Athena")," beginner  "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"[my service]")," Data Analyst"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"[my service database]")," user"))),(0,r.kt)("admonition",{title:"BEHAVIOR  ",type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Measures")," the behavior of ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Amazon Athena"))," when the user prototypes a transform from a ",(0,r.kt)("inlineCode",{parentName:"p"},"[legacy SQL query]"),"."),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Given")," in my web browser, I have accessed ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Amazon Athena")),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"~and")," I have selected ",(0,r.kt)("inlineCode",{parentName:"p"},"[my service]")," workgroup",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"~and")," ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Amazon Athena"))," shows ",(0,r.kt)("inlineCode",{parentName:"p"},"[my service raw zone]")," with ",(0,r.kt)("inlineCode",{parentName:"p"},"[my service database]")," equivalent tables and columns",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"~and")," data was previously ingested from ",(0,r.kt)("inlineCode",{parentName:"p"},"[my service database]")," into",(0,r.kt)("inlineCode",{parentName:"p"},"[my service raw zone]"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"~and")," I have my ",(0,r.kt)("inlineCode",{parentName:"p"},"[legacy SQL query]")," from ","[my service database]"," that I want to migrate to ",(0,r.kt)("strong",{parentName:"p"},"DAP\u21e8flow"),"  "),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"When")," I copy-and-paste my ",(0,r.kt)("inlineCode",{parentName:"p"},"[legacy SQL query]")," into the query editor",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"~and")," I ensure all the column functions and expressions are made input-and-output-compatible with ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Amazon Athena")),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"~and")," I ensure the table names are fully qualified, being prefixed with ",(0,r.kt)("inlineCode",{parentName:"p"},"[my service raw zone]")," instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"[my service database]"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"~and")," I click \u201c",(0,r.kt)("strong",{parentName:"p"},"Run"),"\u201d underneath the code window on the left-hand side"),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Then")," ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Amazon Athena"))," should fetch results as would my ",(0,r.kt)("inlineCode",{parentName:"p"},"[legacy SQL query]"),"  have done when executed upon ",(0,r.kt)("inlineCode",{parentName:"p"},"[my service database]"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"~and")," I can save ",(0,r.kt)("inlineCode",{parentName:"p"},"[my transform]")," with a name ",(0,r.kt)("inlineCode",{parentName:"p"},"[my transform].sql")," and a description in ",(0,r.kt)("inlineCode",{parentName:"p"},"[my service]")," workgroup.  "),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Scale")," of 4 to 8 ",(0,r.kt)("strong",{parentName:"p"},"~and")," flow features.  ")))}d.isMDXComponent=!0},2632:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/DAPairflowFLOWleft-e023069f4c3409ab8db1b918e04abb3b.png"},1819:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/prototype-legacy-transforms-eight-35e44488f12ad29458524d2054a9b57f.png"},8174:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/prototype-legacy-transforms-five-a-02c352beabf88e227a2eafce869ca70e.png"},8504:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/prototype-legacy-transforms-five-b-5738329e4b4512cdf760fda237701f11.png"},9759:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/prototype-legacy-transforms-nine-a-89447a3cea022b7a9619256b08a0fd9c.png"},3752:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/prototype-legacy-transforms-nine-b-1ae6d304bd37d17cde3d57239db2988b.png"},3408:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/prototype-legacy-transforms-seven-647d659fb9e9c91dbda407acb221615f.png"}}]);