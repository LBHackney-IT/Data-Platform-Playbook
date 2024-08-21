"use strict";(self.webpackChunkdata_platform_playbook=self.webpackChunkdata_platform_playbook||[]).push([[5495],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>c});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=s(a),k=r,c=d["".concat(p,".").concat(k)]||d[k]||u[k]||o;return a?n.createElement(c,i(i({ref:t},m),{},{components:a})):n.createElement(c,i({ref:t},m))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=k;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},889:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const o={id:"prototype-simple-transforms",title:"Prototype simple transforms",description:"Onboarding data analysts and engineers to DAP\u21e8flow, the Data Analytics Platform Airflow integration.",layout:"playbook_js",tags:["onboarding"]},i="How can I use Amazon Athena to prototype a simple table-join data transformation?",l={unversionedId:"dap-airflow/onboarding/prototype-simple-transforms",id:"dap-airflow/onboarding/prototype-simple-transforms",title:"Prototype simple transforms",description:"Onboarding data analysts and engineers to DAP\u21e8flow, the Data Analytics Platform Airflow integration.",source:"@site/docs/dap-airflow/onboarding/prototype-simple-transforms.md",sourceDirName:"dap-airflow/onboarding",slug:"/dap-airflow/onboarding/prototype-simple-transforms",permalink:"/Data-Platform-Playbook/dap-airflow/onboarding/prototype-simple-transforms",draft:!1,editUrl:"https://github.com/LBHackney-IT/data-platform-playbook/edit/master/docs/dap-airflow/onboarding/prototype-simple-transforms.md",tags:[{label:"onboarding",permalink:"/Data-Platform-Playbook/tags/onboarding"}],version:"current",frontMatter:{id:"prototype-simple-transforms",title:"Prototype simple transforms",description:"Onboarding data analysts and engineers to DAP\u21e8flow, the Data Analytics Platform Airflow integration.",layout:"playbook_js",tags:["onboarding"]},sidebar:"docs",previous:{title:"Query my service data",permalink:"/Data-Platform-Playbook/dap-airflow/onboarding/query-my-service-data"},next:{title:"Prototype legacy transforms",permalink:"/Data-Platform-Playbook/dap-airflow/onboarding/prototype-legacy-transforms"}},p={},s=[{value:"1. Access Amazon Athena",id:"1-access-amazon-athena",level:3},{value:"2. Select your workgroup",id:"2-select-your-workgroup",level:3},{value:"3. Explore your database",id:"3-explore-your-database",level:3},{value:"4. Understand the data model",id:"4-understand-the-data-model",level:3},{value:"5. Prepare your SQL query",id:"5-prepare-your-sql-query",level:3},{value:"Considerations when using <em>Amazon Athena</em> for the first time",id:"considerations-when-using-amazon-athena-for-the-first-time",level:4},{value:"6. Customizing a template query",id:"6-customizing-a-template-query",level:3},{value:"General considerations",id:"general-considerations",level:4},{value:"7. Run your query",id:"7-run-your-query",level:3},{value:"8. Review the results",id:"8-review-the-results",level:3},{value:"9. Save your query",id:"9-save-your-query",level:3},{value:"<strong><em>&quot;We</em> \u2661 <em>your feedback!&quot;</em></strong>",id:"we--your-feedback",level:2},{value:"UX Criteria",id:"ux-criteria",level:4}],m={toc:s},d="wrapper";function u(e){let{components:t,...o}=e;return(0,r.kt)(d,(0,n.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"how-can-i-use-amazon-athena-to-prototype-a-simple-table-join-data-transformation"},"How can I use Amazon Athena to prototype a simple table-join data transformation?"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"DAP\u21e8flow",src:a(2632).Z,width:"750",height:"100"}),"  "),(0,r.kt)("h3",{id:"1-access-amazon-athena"},"1. Access Amazon Athena"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"\ud83d\uddb1"))," In your web browser, log in to your AWS account, navigate to the AWS Management Console, and open Amazon Athena. "),(0,r.kt)("p",null,"\ud83d\udc49 First time Amazon Athena users should ",(0,r.kt)("strong",{parentName:"p"},"start here \u25ba")," ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"../onboarding/access-my-Amazon-Athena-database"},"DAP\u21e8flow\ud83d\udcdaAmazon Athena"))," "),(0,r.kt)("h3",{id:"2-select-your-workgroup"},"2. Select your workgroup"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"\ud83d\uddb1"))," Ensure you have selected ",(0,r.kt)("inlineCode",{parentName:"p"},"[my service]")," from the list box next to \u201cWorkgroup\u201d.  "),(0,r.kt)("h3",{id:"3-explore-your-database"},"3. Explore your database"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"\ud83d\uddb1"))," Ensure you have selected ",(0,r.kt)("inlineCode",{parentName:"p"},"[my service raw zone]"),' from the list box under "',(0,r.kt)("strong",{parentName:"p"},"Database"),'" on the left side of the Athena interface, before expanding the lists of names under "',(0,r.kt)("strong",{parentName:"p"},"\u25ba Tables"),'" or "',(0,r.kt)("strong",{parentName:"p"},"\u25ba Views"),'". Expanding those names further should reveal column names with data types, as follows:'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'"',(0,r.kt)("strong",{parentName:"p"},"\u25bc Tables"),'"',(0,r.kt)("br",{parentName:"p"}),"\n","\ud83d\udc49 Documented here \u25ba ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"../onboarding/access-my-service-data-history"},"\ud83d\udcdaMy service data history"))," ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'"',(0,r.kt)("strong",{parentName:"p"},"\u25bc Views"),'"',(0,r.kt)("br",{parentName:"p"}),"\n","\ud83d\udc49 Documented here \u25ba ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"../onboarding/access-my-current-service-data"},"\ud83d\udcdaMy current service data"))," "))),(0,r.kt)("h3",{id:"4-understand-the-data-model"},"4. Understand the data model"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"\ud83d\udc41"))," Identify which tables and columns you need to use for your data transformation.  "),(0,r.kt)("p",null,"To be clear, where we want a ",(0,r.kt)("inlineCode",{parentName:"p"},"<table>")," originally from ",(0,r.kt)("inlineCode",{parentName:"p"},"[my service database]")," we will refer to it's equivalent name listed under \"",(0,r.kt)("strong",{parentName:"p"},"\u25bc Views"),'" under the ',(0,r.kt)("inlineCode",{parentName:"p"},"[my service raw zone]"),", in all that follows:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"You will need a ",(0,r.kt)("inlineCode",{parentName:"p"},"<parent table>")," with a unique ",(0,r.kt)("inlineCode",{parentName:"p"},"<parent key>"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"You will need a ",(0,r.kt)("inlineCode",{parentName:"p"},"<child table>")," with a unique ",(0,r.kt)("inlineCode",{parentName:"p"},"<child key>")," and a foreign key pointing to the ",(0,r.kt)("inlineCode",{parentName:"p"},"<parent key>")," of the ",(0,r.kt)("inlineCode",{parentName:"p"},"<parent table>"),"."))),(0,r.kt)("h3",{id:"5-prepare-your-sql-query"},"5. Prepare your SQL query"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"\ud83d\uddb1"))," You can either:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Start completely from scratch and building up your query in the editor as you go along;  ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Or, begin with ",(0,r.kt)("inlineCode",{parentName:"p"},"[my SQL template]"),", eg. ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Fig. 5")),", by copying and pasting it into the query editor. "))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Fig. 5 [my SQL template]"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"-- Query will use table names from [my service database]...\nSELECT \n    p.import_date AS original_import_date, -- added to my query\n    p.<parent key>, \n    p.<col1>,\n    p.<col2>,\n    .\n    .\n    p.<etc.>,\n    c.<child key>, \n    c.<col1>,\n    c.<col2>,\n    .\n    .\n    c.<etc.>\nFROM \n    <parent table> p\nLEFT JOIN \n    <child table> c\nON \n    c.<parent key> = p.<parent key>\nORDER BY\n    p.<parent key>,\n    c.<child key>\nlimit 100;\n")),(0,r.kt)("h4",{id:"considerations-when-using-amazon-athena-for-the-first-time"},"Considerations when using ",(0,r.kt)("em",{parentName:"h4"},"Amazon Athena")," for the first time"),(0,r.kt)("p",null,"Migrating to a new technology or platform offers an ideal opportunity to raise standards and shed old coding habits of the past. But you are welcome to skip right to the next section and think about this later..."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'You have complete freedom over the SQL code formatting however we recommend always putting each element, table or column, on its own line. This helps debugging and readability. You should endeavour to be consistent in your style and agree a particular style among your service colleagues. In our examples, we will use 4-space tabulation and use "hard left" nesting, which you are welcome to adopt. ')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Nesting has no syntactic significance to SQL interpreters. So a JOIN-clause joins everything previous, not just the previous table, with the table following, and nesting the JOIN-clauses makes no difference to the forward-order of execution. Execution order can only be affected by the use of bracketed sub-queries. The hard-left nesting style, on the other hand, is designed to help the reader be conscious of the execution order above all else.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Avoid using lazy cartesian table products without JOIN-clauses in between the tables (or subqueries or CTEs). Likewise avoid using WHERE-clauses to perform cartesian filters and use JOIN-clauses instead. Conversely, Athena does not mind non-cartesian filters within JOIN-clauses and is even recommended where partition-columns are involved because it reduces the quantity of data scanned before any subsequent joins are executed.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Always consider using CTEs in place of subqueries to help debugging and readability. ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Amazon Athena"))," permits VALUES table constructors in CTEs allowing replacement of very lengthy WHERE-CASE filters with the more efficient JOIN-CTE filters."))),(0,r.kt)("h3",{id:"6-customizing-a-template-query"},"6. Customizing a template query"),(0,r.kt)("p",null,"When, for example, using the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Fig. 5"))," template:  "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"\ud83d\uddb1"))," You will need to replace  ",(0,r.kt)("inlineCode",{parentName:"p"},"<parent table>")," and  ",(0,r.kt)("inlineCode",{parentName:"p"},"<child table>")," placeholders with actual names listed under \u201c",(0,r.kt)("strong",{parentName:"p"},"\u25bc Views"),"\u201d on the left-hand side of the interface. The Athena editor allows you to insert names directly into the text by simply clicking on the three dots ",(0,r.kt)("strong",{parentName:"p"},"\u22ee"),"  to the right of the name, over on the left-hand side, then selecting \u201cinsert into editor\u201d."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Fig. 6a"))," ",(0,r.kt)("img",{alt:"Fig. 6a",src:a(3744).Z,width:"512",height:"408"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"\ud83d\uddb1"))," You will need to replace the  ",(0,r.kt)("inlineCode",{parentName:"p"},"<parent key>")," and  ",(0,r.kt)("inlineCode",{parentName:"p"},"<child key>")," placeholders with corresponding key column names from ",(0,r.kt)("inlineCode",{parentName:"p"},"[my example]")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Fig. 6b"))," ",(0,r.kt)("img",{alt:"Fig. 6b",src:a(5084).Z,width:"922",height:"936"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"\ud83d\uddb1"))," Include all the columns you need. So replace ",(0,r.kt)("inlineCode",{parentName:"p"},"<col1>"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"<col2>"),", etc. as per the example, with actual column names."),(0,r.kt)("h4",{id:"general-considerations"},"General considerations"),(0,r.kt)("p",null,"\ud83d\udc49 If your column expressions require functions, you can check the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Amazon Athena")," documentation \u25ba",(0,r.kt)("a",{parentName:"strong",href:"https://docs.aws.amazon.com/athena/latest/ug/functions.html"},"here")),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"\ud83d\uddb1"))," Edit your table names to ensure they are fully qualified, as follows: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Table names should be prefixed by their correct database names, eg. ",(0,r.kt)("inlineCode",{parentName:"p"},"[my service zone].<table name>"),".  ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Amazon Athena")),", by default, renders editor-inserted names encapsulated in ",(0,r.kt)("inlineCode",{parentName:"p"},'"')," double-quotes, eg. ",(0,r.kt)("inlineCode",{parentName:"p"},"\u201c[my service zone]\u201d.\u201c<table name>\u201d"),".  You don't need to do this! But FYI, the quotes are a safeguard in case of column names containing spaces, even though we never allow that.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The original ",(0,r.kt)("inlineCode",{parentName:"p"},"[my service database]")," database name will not be used by ",(0,r.kt)("strong",{parentName:"p"},"DAP\u21e8flow"),", so you will need to swap it out with ",(0,r.kt)("inlineCode",{parentName:"p"},"[my service raw zone]"),".\n")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The use of fully-qualified table names means you can use tables from databases elsewhere in the Data Platform. For example, you might want to join your table from your raw-zone database with a table or view from a refined-zone elsewhere.   ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"You must avoid using the following column names in your transform query output because they are reserved by the ",(0,r.kt)("strong",{parentName:"p"},"DAP\u21e8flow")," implementation when writing your transform output to the S3 data lake partition folders:   "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"import_date"),"  ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"import_year"),"  ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"import_month"),"  ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"import_day"),"  "),(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Fig. 5"))," template example shows the column ",(0,r.kt)("inlineCode",{parentName:"p"},"import_date")," renamed as ",(0,r.kt)("inlineCode",{parentName:"p"},"original_import_date")," to avoid that ever being a problem.  "),(0,r.kt)("p",{parentName:"li"},"It isn't necessary to output this column in your query but it is good practice to add ",(0,r.kt)("inlineCode",{parentName:"p"},"original_import_date")," to inform users of your transform products about which generation the data came from.  "),(0,r.kt)("p",{parentName:"li"},"Because ",(0,r.kt)("strong",{parentName:"p"},"DAP\u21e8flow"),"'s Airflow ingestion can trigger transforms immediately afterward, it natually follows that, the transform output dates will be equal to the import dates of the raw-zone views feeding those transforms. For that reason, you might not want to use ",(0,r.kt)("inlineCode",{parentName:"p"},"original_import_date")," in your transform in production. But if the pipeline trigger logic might cause these dates to diverge in some future use case, then you should consider leaving it in."))))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"It is recommended to order the output by ",(0,r.kt)("inlineCode",{parentName:"p"},"<parent key>")," then ",(0,r.kt)("inlineCode",{parentName:"p"},"<child key>"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Adding a ",(0,r.kt)("inlineCode",{parentName:"p"},"limit")," clause at the end of your query when testing SQL queries in the Athena console normally prevents long-running queries when testing. You will routinely remove the ",(0,r.kt)("inlineCode",{parentName:"p"},"limit")," clause later when your transform goes into production."))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Fig. 7"))," ",(0,r.kt)("img",{alt:"Fig. 7",src:a(389).Z,width:"512",height:"379"})),(0,r.kt)("h3",{id:"7-run-your-query"},"7. Run your query"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"\ud83d\uddb1"))," After customizing the SQL code, click \u201cRun\u201d located underneath the code window on the left side in the Athena interface."),(0,r.kt)("h3",{id:"8-review-the-results"},"8. Review the results"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"\ud83d\udc41"))," ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Amazon Athena"))," should fetch however many rows your SQL ",(0,r.kt)("inlineCode",{parentName:"p"},"[limit]")," clause is set to (eg. ",(0,r.kt)("inlineCode",{parentName:"p"},"limit 100;")," in ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Fig. 5")),").  "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If you included it, the first column ",(0,r.kt)("inlineCode",{parentName:"p"},"original_import_data")," will inform us when the underlying data was ingested from ",(0,r.kt)("inlineCode",{parentName:"p"},"[my service database]"),". If you do not see today\u2019s date then you\u2019ll immediately know that the data ingestion had failed sometime after the date shown, and you should contact the DAP Team to find out what the problem is. But so long as you have data of any given generation you can still test your transform query.  ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The data will be sorted, eg.,  in the  ",(0,r.kt)("inlineCode",{parentName:"p"},"<parent key>")," + ",(0,r.kt)("inlineCode",{parentName:"p"},"<child key>")," order if that is what your ",(0,r.kt)("inlineCode",{parentName:"p"},"order by")," clause says.  ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If your query is based on a ",(0,r.kt)("inlineCode",{parentName:"p"},"<parent table>")," left-joined to the ",(0,r.kt)("inlineCode",{parentName:"p"},"<child table>")," it is possible for the ",(0,r.kt)("inlineCode",{parentName:"p"},"<child key>")," and its associated child columns to output NULLs in the place of values, alongside the ",(0,r.kt)("inlineCode",{parentName:"p"},"<parent key>")," and parent column values. It is worth paying attention to ensure such behavior is the same way as when querying ",(0,r.kt)("inlineCode",{parentName:"p"},"[my service database]")," previously.  "))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Fig. 8"))," ",(0,r.kt)("img",{alt:"Fig. 8",src:a(2856).Z,width:"512",height:"169"})),(0,r.kt)("h3",{id:"9-save-your-query"},"9. Save your query"),(0,r.kt)("p",null,"Check you are in the correct ",(0,r.kt)("inlineCode",{parentName:"p"},"[my service]")," workgroup before clicking on the three dots ",(0,r.kt)("strong",{parentName:"p"},"\u22ee")," to the right of your Query tab, then select \u201c",(0,r.kt)("strong",{parentName:"p"},"Save as"),"\u201d. When the dialogue pops up, enter the name of your transform query eg. ",(0,r.kt)("inlineCode",{parentName:"p"},"[my transform].sql")," and write a description before clicking the \u201c",(0,r.kt)("strong",{parentName:"p"},"Save query"),"\u201d button."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Fig. 9a"))," ",(0,r.kt)("img",{alt:"Fig. 9a",src:a(693).Z,width:"507",height:"374"}),"  "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Fig. 9b"))," ",(0,r.kt)("img",{alt:"Fig. 9b",src:a(2780).Z,width:"512",height:"379"})),(0,r.kt)("br",null),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"we--your-feedback"},(0,r.kt)("strong",{parentName:"h2"},(0,r.kt)("em",{parentName:"strong"},'"We')," \u2661 ",(0,r.kt)("em",{parentName:"strong"},'your feedback!"'))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"DAP\u21e8flow",src:a(2632).Z,width:"750",height:"100"}),"  "),(0,r.kt)("admonition",{title:"UX  ",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\ud83d\udc49 Please use ",(0,r.kt)("strong",{parentName:"p"},"this link \u25ba")," ",(0,r.kt)("a",{parentName:"p",href:"https://docs.google.com/forms/d/e/1FAIpQLSdqeNyWIPMNBHEr-YSyxnXQ4ggTwJPkffMYgFaJ4hGEhIL6LA/viewform?usp=pp_url&entry.339550210=prototype-simple-transforms"},(0,r.kt)("strong",{parentName:"a"},"DAP\u21e8flow")," ",(0,r.kt)("inlineCode",{parentName:"a"},"UX")," ",(0,r.kt)("strong",{parentName:"a"},"Feedback / prototype-simple-transforms")),"  "),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Your feedback enables us to improve ",(0,r.kt)("strong",{parentName:"li"},"DAP\u21e8flow")," and our Data Analytics Platform service.  "),(0,r.kt)("li",{parentName:"ul"},"We encourage all our users to be generous with their time, in giving us their recollections and honest opinions about our service.  "),(0,r.kt)("li",{parentName:"ul"},"We especially encourage our new users to give feedback at the end of every ",(0,r.kt)("strong",{parentName:"li"},"\ud83d\udcdaOnboarding")," task because the quality of the onboarding experience really matters.",(0,r.kt)("br",{parentName:"li"}),"\u261d ",(0,r.kt)("strong",{parentName:"li"},"Please use this link to help us understand your user experience!")))),(0,r.kt)("h4",{id:"ux-criteria"},"UX Criteria"),(0,r.kt)("admonition",{title:"ABILITY  ",type:"info"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Hackney ",(0,r.kt)("strong",{parentName:"li"},"AWS Management Console")," user  "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"Amazon Athena"))," beginner  "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"[my service]")," Data Analyst"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"[my service database]")," user"))),(0,r.kt)("admonition",{title:"BEHAVIOR  ",type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Measures")," the behavior of ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Amazon Athena"))," showing ",(0,r.kt)("inlineCode",{parentName:"p"},"[my service raw zone]")," when the user prototypes a simple transform."),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Given")," in my web browser, I have accessed ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Amazon Athena")),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"~and")," I have selected ",(0,r.kt)("inlineCode",{parentName:"p"},"[my service]")," workgroup",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"~and")," I have ",(0,r.kt)("inlineCode",{parentName:"p"},"[my example]")," data transformation I want to implement using ",(0,r.kt)("inlineCode",{parentName:"p"},"[my SQL template]")," involving two related tables from ",(0,r.kt)("inlineCode",{parentName:"p"},"[my service database]")," that I want joined to produce a combined output",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"~and")," ",(0,r.kt)("inlineCode",{parentName:"p"},"[my example]")," has a ",(0,r.kt)("inlineCode",{parentName:"p"},"<parent table>")," containing a unique ",(0,r.kt)("inlineCode",{parentName:"p"},"<parent key>")," which is a foreign key in a ",(0,r.kt)("inlineCode",{parentName:"p"},"<child table>")," which also with its own unique ",(0,r.kt)("inlineCode",{parentName:"p"},"<child key>"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"~and")," ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Amazon Athena"))," shows ",(0,r.kt)("inlineCode",{parentName:"p"},"[my service raw zone]")," with ",(0,r.kt)("inlineCode",{parentName:"p"},"[my service database]")," equivalent tables and columns which includes the ",(0,r.kt)("inlineCode",{parentName:"p"},"<parent table>")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"<child table>"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"~and")," I am familiar with the concepts and basic requirements of writing an ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Amazon Athena"))," SQL query  "),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"When")," I copy-and-paste ",(0,r.kt)("inlineCode",{parentName:"p"},"[my SQL template]")," into the query editor",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"~and")," replace the  ",(0,r.kt)("inlineCode",{parentName:"p"},"<parent table>")," and  ",(0,r.kt)("inlineCode",{parentName:"p"},"<child table>")," placeholders with corresponding table names from ",(0,r.kt)("inlineCode",{parentName:"p"},"[my example]"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"~and")," replace the  ",(0,r.kt)("inlineCode",{parentName:"p"},"<parent key>")," and  ",(0,r.kt)("inlineCode",{parentName:"p"},"<child key>")," placeholders with corresponding key column names from ",(0,r.kt)("inlineCode",{parentName:"p"},"[my example]"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"~and")," include ",(0,r.kt)("inlineCode",{parentName:"p"},"<col1>, <col2>,..<etc.>")," for each table and column I want to fetch",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"~and")," click \u201cRun\u201d underneath the code window on the left-hand side"),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Then")," ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Amazon Athena"))," should fetch the first ",(0,r.kt)("inlineCode",{parentName:"p"},"<limit>")," rows of data",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"~and")," the first column named ",(0,r.kt)("inlineCode",{parentName:"p"},"original_import_date")," will show when the data was ingested from ",(0,r.kt)("inlineCode",{parentName:"p"},"[my service database]"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"~and")," the output data should be sorted in ",(0,r.kt)("inlineCode",{parentName:"p"},"<parent key>"),"+",(0,r.kt)("inlineCode",{parentName:"p"},"<child key>")," order",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"~and")," I can save my SQL as a working and fully functional transform query with the name ",(0,r.kt)("inlineCode",{parentName:"p"},"[my transform].sql")," and description in ",(0,r.kt)("inlineCode",{parentName:"p"},"[my service]")," workgroup."),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Scale")," of 7 to 12 ",(0,r.kt)("strong",{parentName:"p"},"~and")," flow features.  ")))}u.isMDXComponent=!0},2632:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/DAPairflowFLOWleft-e023069f4c3409ab8db1b918e04abb3b.png"},2856:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/prototype-simple-transforms-eight-e37cc674e7c6b5f18cabee43543c75db.png"},693:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/prototype-simple-transforms-nine-a-89447a3cea022b7a9619256b08a0fd9c.png"},2780:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/prototype-simple-transforms-nine-b-3a2477648b069424c9a9c61e2908005a.png"},389:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/prototype-simple-transforms-seven-3a2477648b069424c9a9c61e2908005a.png"},3744:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/prototype-simple-transforms-six-a-bd703f3e265771fc5d3c2dfa9f730036.png"},5084:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/prototype-simple-transforms-six-b-e6bb109e4e35b0563efe670d0e38eae4.png"}}]);