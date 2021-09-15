(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{124:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return m}));var r=a(0),n=a.n(r);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=n.a.createContext({}),p=function(e){var t=n.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},d=function(e){var t=p(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},b=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(a),b=r,m=d["".concat(i,".").concat(b)]||d[b]||u[b]||o;return a?n.a.createElement(m,c(c({ref:t},s),{},{components:a})):n.a.createElement(m,c({ref:t},s))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=a[s];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"},84:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return p}));var r=a(3),n=a(7),o=(a(0),a(124)),i={title:"Connecting to the redshift cluster from Google Data Studio",description:"Connect to the redshift cluster from Google Data Studio",layout:"playbook_js",tags:"playbook"},c={unversionedId:"playbook/connecting-to-redshift-from-data-studio",id:"playbook/connecting-to-redshift-from-data-studio",isDocsHomePage:!1,title:"Connecting to the redshift cluster from Google Data Studio",description:"Connect to the redshift cluster from Google Data Studio",source:"@site/docs/playbook/connecting-to-redshift-from-data-studio.md",slug:"/playbook/connecting-to-redshift-from-data-studio",permalink:"/Data-Platform-Playbook/playbook/connecting-to-redshift-from-data-studio",editUrl:"https://github.com/LBHackney-IT/data-platform-playbook/edit/master/docs/playbook/connecting-to-redshift-from-data-studio.md",version:"current",sidebar:"docs",previous:{title:"Environments",permalink:"/Data-Platform-Playbook/environments"},next:{title:"Create a data extract in Google Data Studio",permalink:"/Data-Platform-Playbook/playbook/create_a_data_extract_in-GDS"}},l=[{value:"Intro",id:"intro",children:[]},{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Steps",id:"steps",children:[{value:"Department specific credentials",id:"department-specific-credentials",children:[]}]}],s={toc:l};function p(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"intro"},"Intro"),Object(o.b)("p",null,"This guide will step you through how to connect to redshift, in the data platform, from Google Data Studio. You will then have access to the data stored in the platform from Data Studio."),Object(o.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"You have access to your departments credentials listed ",Object(o.b)("a",{parentName:"li",href:"#department-specific-credentials"},"here")," or you have had credentials shared with you by the platform team.")),Object(o.b)("h2",{id:"steps"},"Steps"),Object(o.b)("p",null,"First, download the following resources"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",{parentName:"li",href:"https://dataplatform-stg-ssl-connection-resources.s3.eu-west-2.amazonaws.com/client_certificate.crt"},"Client Certificate"),". This will expire a year after you download it, after which you will have to download a new certificate."),Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",{parentName:"li",href:"https://dataplatform-stg-ssl-connection-resources.s3.eu-west-2.amazonaws.com/client_private_key.key"},"Client Private Key"),"."),Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",{parentName:"li",href:"https://s3.amazonaws.com/redshift-downloads/redshift-ca-bundle.crt"},"Server Certificate"),".")),Object(o.b)("p",null,"Then, when adding a data source in ",Object(o.b)("a",{parentName:"p",href:"https://datastudio.google.com/u/0/datasources/create/"},"Google Data Studio")),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},'Select "PostgreSQL".'),Object(o.b)("li",{parentName:"ol"},'Under "Database Authentication", ensure "BASIC" is selected then enter the credentials shared with you by the data platform team. See below for links to ',Object(o.b)("a",{parentName:"li",href:"#department-specific-credentials"},"department specific credentials"),"."),Object(o.b)("li",{parentName:"ol"},'Tick the "Enable SSL" box'),Object(o.b)("li",{parentName:"ol"},"Upload the three files downloaded in the first step."),Object(o.b)("li",{parentName:"ol"},'Click "Authenticate", then select "CUSTOM QUERY"'),Object(o.b)("li",{parentName:"ol"},"In the free text box you need to enter a PostgreSQL query that defines the data that's in this data source. An example could be",Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM liberator_refined_zone.denormalised_pcns where import_date = (\n    SELECT max(import_date) from liberator_refined_zone.denormalised_pcns\n) limit 100000;\n")),"This query can only return a maximum of 100,000 rows as specified in ",Object(o.b)("a",{parentName:"li",href:"https://support.google.com/datastudio/answer/7288010?hl=en#zippy=%2Cin-this-article"},"Googles Documentation"),". It might be helpful to test your query in ",Object(o.b)("a",{parentName:"li",href:"https://eu-west-2.console.aws.amazon.com/athena/home?region=eu-west-2#query"},"AWS Athena")," first to check there aren't too many rows."),Object(o.b)("li",{parentName:"ol"},'Click "Add", this bit might take a little while.')),Object(o.b)("h3",{id:"department-specific-credentials"},"Department specific credentials"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Log into the ",Object(o.b)("a",{parentName:"p",href:"https://hackney.awsapps.com/start/#/"},"AWS Console")," for the DataPlatform-Staging account.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Go to the AWS Secrets Manager secret for your department"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://eu-west-2.console.aws.amazon.com/secretsmanager/home?region=eu-west-2#!/secret?name=dataplatform-stg%2Fparking%2Fredshift-cluster-user"},"Parking Credentials"))),Object(o.b)("p",{parentName:"li"},"If you clicking the link above before logging into the DataPlatform-staging account you will be presented with an\nAWS login screen.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},'Scroll down to the "Secret value" section and select "Retrieve secret value".'))))}p.isMDXComponent=!0}}]);