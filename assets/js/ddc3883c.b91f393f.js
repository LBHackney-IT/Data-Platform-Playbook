"use strict";(self.webpackChunkdata_platform_playbook=self.webpackChunkdata_platform_playbook||[]).push([[1715],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=i.createContext({}),u=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),h=o,m=p["".concat(s,".").concat(h)]||p[h]||d[h]||r;return n?i.createElement(m,a(a({ref:t},c),{},{components:n})):i.createElement(m,a({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<r;u++)a[u]=n[u];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1358:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return p}});var i=n(7462),o=n(3366),r=(n(7294),n(3905)),a=["components"],l={title:"Qlik Integration",description:"",tags:null,layout:"layout"},s="Spike: Qlik Integration",u={unversionedId:"spikes/qlik-integration",id:"spikes/qlik-integration",isDocsHomePage:!1,title:"Qlik Integration",description:"",source:"@site/docs/spikes/qlik-integration.md",sourceDirName:"spikes",slug:"/spikes/qlik-integration",permalink:"/Data-Platform-Playbook/spikes/qlik-integration",editUrl:"https://github.com/LBHackney-IT/data-platform-playbook/edit/master/docs/spikes/qlik-integration.md",tags:[],version:"current",frontMatter:{title:"Qlik Integration",description:"",tags:null,layout:"layout"},sidebar:"docs",previous:{title:"Ingesting data from MSSQL database",permalink:"/Data-Platform-Playbook/spikes/mssql-ingestion"}},c=[{value:"SUB-TITLE",id:"sub-title",children:[]},{value:"Objective",id:"objective",children:[]},{value:"Considerations",id:"considerations",children:[]},{value:"Findings",id:"findings",children:[{value:"Apache Drill:",id:"apache-drill",children:[]},{value:"Amazon Redshift Spectrum:",id:"amazon-redshift-spectrum",children:[]},{value:"Qlik Custom Connectors:",id:"qlik-custom-connectors",children:[]}]},{value:"Helpful Resources/Documentation",id:"helpful-resourcesdocumentation",children:[]}],d={toc:c};function p(e){var t=e.components,n=(0,o.Z)(e,a);return(0,r.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"spike-qlik-integration"},"Spike: Qlik Integration"),(0,r.kt)("h3",{id:"sub-title"},"SUB-TITLE"),(0,r.kt)("h2",{id:"objective"},"Objective"),(0,r.kt)("p",null,"Ensure a performant connection between the data platform and Hackney Business Insights tools. This spike will consider the\nfollowing:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Apache Drill"),(0,r.kt)("li",{parentName:"ul"},"Amazon Redshift Spectrum"),(0,r.kt)("li",{parentName:"ul"},"Amazon Athena"),(0,r.kt)("li",{parentName:"ul"},"Qlik Custom Connectors")),(0,r.kt)("h2",{id:"considerations"},"Considerations"),(0,r.kt)("p",null,"While investigating these options the following factors should be taken into account:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Time to implement the solution"),(0,r.kt)("li",{parentName:"ul"},"Cost of the solution"),(0,r.kt)("li",{parentName:"ul"},"Performance of reading large quantities of data")),(0,r.kt)("h2",{id:"findings"},"Findings"),(0,r.kt)("h3",{id:"apache-drill"},"Apache Drill:"),(0,r.kt)("p",null,"Apache Drill is a Schema-free SQL Query Engine for Hadoop, NoSQL and Cloud Storage providers such as Amazon S3. The\nsoftware is provided for free, however there would be associated costs with deploying the product with the Data Platform."),(0,r.kt)("h4",{id:"limitation"},"Limitation"),(0,r.kt)("p",null,"Apache Drill is not currently provided as a managed service by AWS, which means the product would need to be installed\nand maintained by Hackney. We are unaware of anyone within Hackney with knowledge of Apache Drill knowledge and this\ncould prove to be an issue in the longer term."),(0,r.kt)("h4",{id:"suggestion"},"Suggestion"),(0,r.kt)("p",null,"We could install and configure the service in conjunction with Hackney staff to ensure knowledge share through this\nwould not resolve longer term support issues."),(0,r.kt)("h3",{id:"amazon-redshift-spectrum"},"Amazon Redshift Spectrum:"),(0,r.kt)("p",null,"Amazon Redshift is a Data Warehousing that provides an SQL style interface for querying data.\nIn addition to being able to warehouse data Amazon Redshift Spectrum is able to query data directly from external\nstorage such as Amazon S3 without the additional cost of storing the data within the warehouse itself. Essentially\nseparating the compute-layer from the storage-layer.\nAmazon Redshift is provided as an AWS managed and supported service, with the ability to upscale and downscale as\nHackney requirements change in addition to being paused and unpaused on a scheduled basis."),(0,r.kt)("h4",{id:"limitation-1"},"Limitation"),(0,r.kt)("p",null,"The biggest limitation with Amazon Redshift is that it can get expensive to run large clusters. Running a single node\ncontinuously is $120 per month and with our lack of visibility of the quantities of data that is being queried."),(0,r.kt)("h4",{id:"suggestion-1"},"Suggestion"),(0,r.kt)("p",null,"We can reduce the overall cost of running the infrastructure by scheduling period where the nodes are paused such as\nevening and weekend."),(0,r.kt)("h3",{id:"qlik-custom-connectors"},"Qlik Custom Connectors:"),(0,r.kt)("p",null,"Qlik provides the option of building a custom connector which can allow the system to interact with a dataset. This in\ntheory could be used to allow Qlik to interact with AWS S3 directly."),(0,r.kt)("h4",{id:"limitation-2"},"Limitation"),(0,r.kt)("p",null,"Building a Qlik Custom Connector would require unspecified amount of development time and would likely require further investigation\ninto the specifics of how this would be implemented."),(0,r.kt)("h4",{id:"suggestion-2"},"Suggestion"),(0,r.kt)("h2",{id:"helpful-resourcesdocumentation"},"Helpful Resources/Documentation"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://drill.apache.org/"},"Apache Drill - Website"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://aws.amazon.com/redshift/"},"Redshift - Overview"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://help.qlik.com/en-US/sense-developer/February2021/Subsystems/QVXSDKAPI/Content/Sense_QVXSDKAPI/Introducing-QVX.htm"},"Qlik Custom Connectors - Documentation")))))}p.isMDXComponent=!0}}]);