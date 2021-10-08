"use strict";(self.webpackChunkdata_platform_playbook=self.webpackChunkdata_platform_playbook||[]).push([[2714],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var r=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(a),m=o,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||n;return a?r.createElement(f,i(i({ref:t},p),{},{components:a})):r.createElement(f,i({ref:t},p))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,i=new Array(n);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<n;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5423:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var r=a(7462),o=a(3366),n=(a(7294),a(3905)),i=["components"],l={title:"Connecting to the redshift cluster from Google Data Studio",description:"Connect to the redshift cluster from Google Data Studio",layout:"playbook_js",tags:["playbook"]},s=void 0,c={unversionedId:"playbook/connecting-to-redshift-from-data-studio",id:"playbook/connecting-to-redshift-from-data-studio",isDocsHomePage:!1,title:"Connecting to the redshift cluster from Google Data Studio",description:"Connect to the redshift cluster from Google Data Studio",source:"@site/docs/playbook/connecting-to-redshift-from-data-studio.md",sourceDirName:"playbook",slug:"/playbook/connecting-to-redshift-from-data-studio",permalink:"/Data-Platform-Playbook/playbook/connecting-to-redshift-from-data-studio",editUrl:"https://github.com/LBHackney-IT/data-platform-playbook/edit/master/docs/playbook/connecting-to-redshift-from-data-studio.md",tags:[{label:"playbook",permalink:"/Data-Platform-Playbook/tags/playbook"}],version:"current",frontMatter:{title:"Connecting to the redshift cluster from Google Data Studio",description:"Connect to the redshift cluster from Google Data Studio",layout:"playbook_js",tags:["playbook"]},sidebar:"docs",previous:{title:"Environments",permalink:"/Data-Platform-Playbook/environments"},next:{title:"Create a data extract in Google Data Studio",permalink:"/Data-Platform-Playbook/playbook/create_a_data_extract_in_GDS"}},p=[{value:"Intro",id:"intro",children:[]},{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Steps",id:"steps",children:[{value:"Department specific credentials",id:"department-specific-credentials",children:[]}]}],u={toc:p};function d(e){var t=e.components,a=(0,o.Z)(e,i);return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"intro"},"Intro"),(0,n.kt)("p",null,"This guide will step you through how to connect to redshift, in the data platform, from Google Data Studio. You will then have access to the data stored in the platform from Data Studio."),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"You have access to your departments credentials listed ",(0,n.kt)("a",{parentName:"li",href:"#department-specific-credentials"},"here")," or you have had credentials shared with you by the platform team.")),(0,n.kt)("h2",{id:"steps"},"Steps"),(0,n.kt)("p",null,"First, download the following resources"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://dataplatform-stg-ssl-connection-resources.s3.eu-west-2.amazonaws.com/client_certificate.crt"},"Client Certificate"),". This will expire a year after you download it, after which you will have to download a new certificate."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://dataplatform-stg-ssl-connection-resources.s3.eu-west-2.amazonaws.com/client_private_key.key"},"Client Private Key"),"."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://s3.amazonaws.com/redshift-downloads/redshift-ca-bundle.crt"},"Server Certificate"),".")),(0,n.kt)("p",null,"Then, when adding a data source in ",(0,n.kt)("a",{parentName:"p",href:"https://datastudio.google.com/u/0/datasources/create/"},"Google Data Studio")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},'Select "PostgreSQL".'),(0,n.kt)("li",{parentName:"ol"},'Under "Database Authentication", ensure "BASIC" is selected then enter the credentials shared with you by the data platform team. See below for links to ',(0,n.kt)("a",{parentName:"li",href:"#department-specific-credentials"},"department specific credentials"),"."),(0,n.kt)("li",{parentName:"ol"},'Tick the "Enable SSL" box'),(0,n.kt)("li",{parentName:"ol"},"Upload the three files downloaded in the first step."),(0,n.kt)("li",{parentName:"ol"},'Click "Authenticate", then select "CUSTOM QUERY"'),(0,n.kt)("li",{parentName:"ol"},"In the free text box you need to enter a PostgreSQL query that defines the data that's in this data source. An example could be",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM liberator_refined_zone.denormalised_pcns where import_date = (\n    SELECT max(import_date) from liberator_refined_zone.denormalised_pcns\n) limit 100000;\n")),"This query can only return a maximum of 100,000 rows as specified in ",(0,n.kt)("a",{parentName:"li",href:"https://support.google.com/datastudio/answer/7288010?hl=en#zippy=%2Cin-this-article"},"Googles Documentation"),". It might be helpful to test your query in ",(0,n.kt)("a",{parentName:"li",href:"https://eu-west-2.console.aws.amazon.com/athena/home?region=eu-west-2#query"},"AWS Athena")," first to check there aren't too many rows."),(0,n.kt)("li",{parentName:"ol"},'Click "Add", this bit might take a little while.')),(0,n.kt)("h3",{id:"department-specific-credentials"},"Department specific credentials"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Log into the ",(0,n.kt)("a",{parentName:"p",href:"https://hackney.awsapps.com/start/#/"},"AWS Console")," for the DataPlatform-Staging account.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Go to the AWS Secrets Manager secret for your department"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://eu-west-2.console.aws.amazon.com/secretsmanager/home?region=eu-west-2#!/secret?name=dataplatform-stg%2Fparking%2Fredshift-cluster-user"},"Parking Credentials"))),(0,n.kt)("p",{parentName:"li"},"If you clicking the link above before logging into the DataPlatform-staging account you will be presented with an\nAWS login screen.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'Scroll down to the "Secret value" section and select "Retrieve secret value".'))))}d.isMDXComponent=!0}}]);