"use strict";(self.webpackChunkdata_platform_playbook=self.webpackChunkdata_platform_playbook||[]).push([[4251],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var r=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(a),m=o,h=p["".concat(s,".").concat(m)]||p[m]||u[m]||n;return a?r.createElement(h,i(i({ref:t},d),{},{components:a})):r.createElement(h,i({ref:t},d))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,i=new Array(n);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<n;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8443:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>n,metadata:()=>l,toc:()=>c});var r=a(7462),o=(a(7294),a(3905));const n={title:"Connecting to the Redshift cluster from Google Data Studio",description:"Connect to the Redshift cluster from Google Data Studio",layout:"playbook_js",tags:["playbook"]},i=void 0,l={unversionedId:"playbook/querying-and-analysing-data/connecting-to-redshift-from-data-studio",id:"playbook/querying-and-analysing-data/connecting-to-redshift-from-data-studio",title:"Connecting to the Redshift cluster from Google Data Studio",description:"Connect to the Redshift cluster from Google Data Studio",source:"@site/docs/playbook/querying-and-analysing-data/connecting-to-redshift-from-data-studio.md",sourceDirName:"playbook/querying-and-analysing-data",slug:"/playbook/querying-and-analysing-data/connecting-to-redshift-from-data-studio",permalink:"/Data-Platform-Playbook/playbook/querying-and-analysing-data/connecting-to-redshift-from-data-studio",draft:!1,editUrl:"https://github.com/LBHackney-IT/data-platform-playbook/edit/master/docs/playbook/querying-and-analysing-data/connecting-to-redshift-from-data-studio.md",tags:[{label:"playbook",permalink:"/Data-Platform-Playbook/tags/playbook"}],version:"current",frontMatter:{title:"Connecting to the Redshift cluster from Google Data Studio",description:"Connect to the Redshift cluster from Google Data Studio",layout:"playbook_js",tags:["playbook"]},sidebar:"docs",previous:{title:"Glue Studio workshop with Parking Analysts",permalink:"/Data-Platform-Playbook/workshop/aws_glue_studio_parking"},next:{title:"Create a data extract in Google Data Studio",permalink:"/Data-Platform-Playbook/playbook/querying-and-analysing-data/create_a_data_extract_in_GDS"}},s={},c=[{value:"Intro",id:"intro",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Steps",id:"steps",level:2},{value:"Department specific credentials",id:"department-specific-credentials",level:3}],d={toc:c},p="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"intro"},"Intro"),(0,o.kt)("p",null,"This guide will step you through how to connect to Redshift, on the Data Platform, from Google Data Studio. You will then be able to access the data stored on the platform from Data Studio."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You have access to your department's credentials listed ",(0,o.kt)("a",{parentName:"li",href:"#department-specific-credentials"},"here")," or you have had credentials shared with you by the platform team.")),(0,o.kt)("h2",{id:"steps"},"Steps"),(0,o.kt)("p",null,"First, download the bundle certificate you will need to connect to the Redshift cluster here:"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://s3.amazonaws.com/redshift-downloads/amazon-trust-ca-bundle.crt"},"https://s3.amazonaws.com/redshift-downloads/amazon-trust-ca-bundle.crt")),(0,o.kt)("p",null,"Then, when adding a data source in ",(0,o.kt)("a",{parentName:"p",href:"https://datastudio.google.com/u/0/datasources/create/"},"Google Data Studio")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},'Select "Amazon Redshift".'),(0,o.kt)("li",{parentName:"ol"},'If this is the first time you\'ve made a connection, you may need to select "Authorise".'),(0,o.kt)("li",{parentName:"ol"},"Ensure \"Basic\" is selected to the left of 'Database authentication' (not JDBC URL)."),(0,o.kt)("li",{parentName:"ol"},"Retrieve your credentials from AWS using the links below for ",(0,o.kt)("a",{parentName:"li",href:"#department-specific-credentials"},"department specific credentials"),'. Once on the AWS Secrets Manager page, scroll down to the "Secret Value" box and click "Retrieve secret value" to reveal the credentials (e.g. Database, Host Name or IP etc). Alternatively, use the credentials shared with you by the data platform team.'),(0,o.kt)("li",{parentName:"ol"},"Copy and paste these credentials into the corresponding fields in Google Data Studio."),(0,o.kt)("li",{parentName:"ol"},'Tick the "Enable SSL" box.'),(0,o.kt)("li",{parentName:"ol"},"Upload the ",(0,o.kt)("em",{parentName:"li"},"amazon-trust-ca-bundle.crt")," file you previously downloaded:")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"gds-redshift-crt.png",src:a(4176).Z,width:"631",height:"262"})),(0,o.kt)("ol",{start:10},(0,o.kt)("li",{parentName:"ol"},'Click "Authenticate".'),(0,o.kt)("li",{parentName:"ol"},"To the right of the 'Database authentication' panel, you should see options for TABLES or CUSTOM QUERY; select CUSTOM QUERY and provide a PostgreSQL query for the data you want. (Note: The TABLES option will not list out the available tables even when your connection is successful.) An example could be:",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM liberator_refined_zone.denormalised_pcns where import_date = (\n    SELECT max(import_date) from liberator_refined_zone.denormalised_pcns\n) limit 100;\n")),"This query can only return a maximum of 150,000 rows as specified in ",(0,o.kt)("a",{parentName:"li",href:"https://support.google.com/datastudio/answer/11377200#zippy=%2Cin-this-article"},"Googles Documentation"),". It might be helpful to test your query in ",(0,o.kt)("a",{parentName:"li",href:"https://eu-west-2.console.aws.amazon.com/athena/home?region=eu-west-2#query"},"AWS Athena")," first to check there aren't too many rows."),(0,o.kt)("li",{parentName:"ol"},'Click "Add" (if adding data directly to a report) or "Connect" (if creating a new data source), this bit might take a little while. To improve the query performance you may also want to ',(0,o.kt)("a",{parentName:"li",href:"https://lbhackney-it.github.io/Data-Platform-Playbook/playbook/querying-and-analysing-data/create_a_data_extract_in_GDS/"},"create a data extract"),".")),(0,o.kt)("h3",{id:"department-specific-credentials"},"Department specific credentials"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Log into the ",(0,o.kt)("a",{parentName:"p",href:"https://hackney.awsapps.com/start/#/"},"AWS Console")," for the DataPlatform-Production or DataPlatform-Pre-Production account depending on which you wish to connect to.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Go to the AWS Secrets Manager secret for your department"))),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Production"),(0,o.kt)("th",{parentName:"tr",align:null},"Pre-production"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://eu-west-2.console.aws.amazon.com/secretsmanager/home?region=eu-west-2#!/secret?name=dataplatform-prod%2Fparking%2Fredshift-cluster-user2021112314531694280000002d"},"Parking Credentials")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://eu-west-2.console.aws.amazon.com/secretsmanager/home?region=eu-west-2#!/secret?name=dataplatform-prod%2Fparking%2Fredshift-cluster-user2021112314531694280000002d"},"Parking Credentials"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://eu-west-2.console.aws.amazon.com/secretsmanager/home?region=eu-west-2#!/secret?name=dataplatform-prod%2Fplanning%2Fredshift-cluster-user2021112314531441430000002b"},"Planning Credentials")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://eu-west-2.console.aws.amazon.com/secretsmanager/secret?name=dataplatform-stg%2Fplanning%2Fredshift-cluster-user20211116150112018900000006"},"Planning Credentials"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://eu-west-2.console.aws.amazon.com/secretsmanager/home?region=eu-west-2#!/secret?name=dataplatform-prod%2Fhousing-repairs%2Fredshift-cluster-user20211123145318429300000031"},"Housing Repairs Credentials")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://eu-west-2.console.aws.amazon.com/secretsmanager/home?region=eu-west-2#!/secret?name=dataplatform-prod%2Fhousing-repairs%2Fredshift-cluster-user20211123145318429300000031"},"Housing Repairs Credentials"))))),(0,o.kt)("p",null,"   If you click the link above before logging into the relevant Data Platform account you will be presented with an\nAWS login screen."),(0,o.kt)("p",null,"   If your department is not listed above but exists with the platform, you should be able to find the credentials by searching for 'YOUR DEPARTMENT/redshift' in Secrets Manager. "),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},'Scroll down to the "Secret value" section and select "Retrieve secret value".')))}u.isMDXComponent=!0},4176:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/gds-redshift-crt-c52e257008197e15bb9e8a3058bc337c.png"}}]);