"use strict";(self.webpackChunkdata_platform_playbook=self.webpackChunkdata_platform_playbook||[]).push([[4251],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(a),m=n,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return a?r.createElement(f,i(i({ref:t},p),{},{components:a})):r.createElement(f,i({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},8443:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var r=a(3117),n=a(102),o=(a(7294),a(3905)),i=["components"],l={title:"Connecting to the redshift cluster from Google Data Studio",description:"Connect to the redshift cluster from Google Data Studio",layout:"playbook_js",tags:["playbook"]},s=void 0,c={unversionedId:"playbook/querying-and-analysing-data/connecting-to-redshift-from-data-studio",id:"playbook/querying-and-analysing-data/connecting-to-redshift-from-data-studio",title:"Connecting to the redshift cluster from Google Data Studio",description:"Connect to the redshift cluster from Google Data Studio",source:"@site/docs/playbook/querying-and-analysing-data/connecting-to-redshift-from-data-studio.md",sourceDirName:"playbook/querying-and-analysing-data",slug:"/playbook/querying-and-analysing-data/connecting-to-redshift-from-data-studio",permalink:"/Data-Platform-Playbook/playbook/querying-and-analysing-data/connecting-to-redshift-from-data-studio",draft:!1,editUrl:"https://github.com/LBHackney-IT/data-platform-playbook/edit/master/docs/playbook/querying-and-analysing-data/connecting-to-redshift-from-data-studio.md",tags:[{label:"playbook",permalink:"/Data-Platform-Playbook/tags/playbook"}],version:"current",frontMatter:{title:"Connecting to the redshift cluster from Google Data Studio",description:"Connect to the redshift cluster from Google Data Studio",layout:"playbook_js",tags:["playbook"]},sidebar:"docs",previous:{title:"Glue Studio workshop with Parking Analysts",permalink:"/Data-Platform-Playbook/workshop/aws_glue_studio_parking"},next:{title:"Create a data extract in Google Data Studio",permalink:"/Data-Platform-Playbook/playbook/querying-and-analysing-data/create_a_data_extract_in_GDS"}},p={},u=[{value:"Intro",id:"intro",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Steps",id:"steps",level:2},{value:"Department specific credentials",id:"department-specific-credentials",level:3}],d={toc:u};function m(e){var t=e.components,a=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"intro"},"Intro"),(0,o.kt)("p",null,"This guide will step you through how to connect to redshift, in the data platform, from Google Data Studio. You will then have access to the data stored in the platform from Data Studio."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You have access to your departments credentials listed ",(0,o.kt)("a",{parentName:"li",href:"#department-specific-credentials"},"here")," or you have had credentials shared with you by the platform team.")),(0,o.kt)("h2",{id:"steps"},"Steps"),(0,o.kt)("p",null,"First, download the following resources"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://dataplatform-prod-ssl-connection-resources.s3.eu-west-2.amazonaws.com/client_certificate.crt"},"Client Certificate"),". This will expire a year after you download it, after which you will have to download a new certificate."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://dataplatform-prod-ssl-connection-resources.s3.eu-west-2.amazonaws.com/client_private_key.key"},"Client Private Key"),"."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://s3.amazonaws.com/redshift-downloads/redshift-ca-bundle.crt"},"Server Certificate"),".")),(0,o.kt)("p",null,"Then, when adding a data source in ",(0,o.kt)("a",{parentName:"p",href:"https://datastudio.google.com/u/0/datasources/create/"},"Google Data Studio")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},'Select "PostgreSQL".'),(0,o.kt)("li",{parentName:"ol"},'Under "Database Authentication", ensure "BASIC" is selected then enter the credentials shared with you by the data platform team. See below for links to ',(0,o.kt)("a",{parentName:"li",href:"#department-specific-credentials"},"department specific credentials"),"."),(0,o.kt)("li",{parentName:"ol"},'Tick the "Enable SSL" box'),(0,o.kt)("li",{parentName:"ol"},"Upload the three files downloaded in the first step."),(0,o.kt)("li",{parentName:"ol"},'Click "Authenticate", then select "CUSTOM QUERY"'),(0,o.kt)("li",{parentName:"ol"},"In the free text box you need to enter a PostgreSQL query that defines the data that's in this data source. An example could be",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM liberator_refined_zone.denormalised_pcns where import_date = (\n    SELECT max(import_date) from liberator_refined_zone.denormalised_pcns\n) limit 100000;\n")),"This query can only return a maximum of 100,000 rows as specified in ",(0,o.kt)("a",{parentName:"li",href:"https://support.google.com/datastudio/answer/7288010?hl=en#zippy=%2Cin-this-article"},"Googles Documentation"),". It might be helpful to test your query in ",(0,o.kt)("a",{parentName:"li",href:"https://eu-west-2.console.aws.amazon.com/athena/home?region=eu-west-2#query"},"AWS Athena")," first to check there aren't too many rows."),(0,o.kt)("li",{parentName:"ol"},'Click "Add", this bit might take a little while. To improve the query performance you may also want to ',(0,o.kt)("a",{parentName:"li",href:"https://lbhackney-it.github.io/Data-Platform-Playbook/playbook/querying-and-analysing-data/create_a_data_extract_in_GDS/"},"create a data extract"),".")),(0,o.kt)("h3",{id:"department-specific-credentials"},"Department specific credentials"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Log into the ",(0,o.kt)("a",{parentName:"p",href:"https://hackney.awsapps.com/start/#/"},"AWS Console")," for the DataPlatform-Production account.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Go to the AWS Secrets Manager secret for your department"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://eu-west-2.console.aws.amazon.com/secretsmanager/home?region=eu-west-2#!/secret?name=dataplatform-prod%2Fparking%2Fredshift-cluster-user2021112314531694280000002d"},"Parking Credentials")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://eu-west-2.console.aws.amazon.com/secretsmanager/home?region=eu-west-2#!/secret?name=dataplatform-prod%2Fplanning%2Fredshift-cluster-user2021112314531441430000002b"},"Planning Credentials")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://eu-west-2.console.aws.amazon.com/secretsmanager/home?region=eu-west-2#!/secret?name=dataplatform-prod%2Fhousing-repairs%2Fredshift-cluster-user20211123145318429300000031"},"Housing Repairs Credentials"))),(0,o.kt)("p",{parentName:"li"},"If you clicking the link above before logging into the DataPlatform-production account you will be presented with an\nAWS login screen.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'Scroll down to the "Secret value" section and select "Retrieve secret value".'))))}m.isMDXComponent=!0}}]);