(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{113:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return h}));var i=n(0),o=n.n(i);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,a=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(n),b=i,h=d["".concat(a,".").concat(b)]||d[b]||p[b]||r;return n?o.a.createElement(h,l(l({ref:t},s),{},{components:n})):o.a.createElement(h,l({ref:t},s))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var s=2;s<r;s++)a[s]=n[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},79:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var i=n(3),o=n(7),r=(n(0),n(113)),a={title:"Qlik Integration",description:"",tags:null,layout:"layout"},l={unversionedId:"spikes/0005-qlik-integration",id:"spikes/0005-qlik-integration",isDocsHomePage:!1,title:"Qlik Integration",description:"Spike: Qlik Integration",source:"@site/docs/spikes/0005-qlik-integration.md",slug:"/spikes/0005-qlik-integration",permalink:"/Data-Platform-Playbook/spikes/0005-qlik-integration",editUrl:"https://github.com/LBHackney-IT/data-platform-playbook/edit/master/docs/spikes/0005-qlik-integration.md",version:"current"},c=[{value:"SUB-TITLE",id:"sub-title",children:[]},{value:"Objective",id:"objective",children:[]},{value:"Considerations",id:"considerations",children:[]},{value:"Findings",id:"findings",children:[{value:"Apache Drill:",id:"apache-drill",children:[]},{value:"Amazon Redshift Spectrum:",id:"amazon-redshift-spectrum",children:[]},{value:"Qlik Custom Connectors:",id:"qlik-custom-connectors",children:[]}]},{value:"Helpful Resources/Documentation",id:"helpful-resourcesdocumentation",children:[]}],s={toc:c};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"spike-qlik-integration"},"Spike: Qlik Integration"),Object(r.b)("h3",{id:"sub-title"},"SUB-TITLE"),Object(r.b)("h2",{id:"objective"},"Objective"),Object(r.b)("p",null,"Ensure a performant connection between the data platform and Hackney Business Insights tools. This spike will consider the\nfollowing:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Apache Drill"),Object(r.b)("li",{parentName:"ul"},"Amazon Redshift Spectrum"),Object(r.b)("li",{parentName:"ul"},"Amazon Athena"),Object(r.b)("li",{parentName:"ul"},"Qlik Custom Connectors")),Object(r.b)("h2",{id:"considerations"},"Considerations"),Object(r.b)("p",null,"While investigating these options the following factors should be taken into account:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Time to implement the solution"),Object(r.b)("li",{parentName:"ul"},"Cost of the solution"),Object(r.b)("li",{parentName:"ul"},"Performance of reading large quantities of data")),Object(r.b)("h2",{id:"findings"},"Findings"),Object(r.b)("h3",{id:"apache-drill"},"Apache Drill:"),Object(r.b)("p",null,"Apache Drill is a Schema-free SQL Query Engine for Hadoop, NoSQL and Cloud Storage providers such as Amazon S3. The\nsoftware is provided for free, however there would be associated costs with deploying the product with the Data Platform."),Object(r.b)("h4",{id:"limitation"},"Limitation"),Object(r.b)("p",null,"Apache Drill is not currently provided as a managed service by AWS, which means the product would need to be installed\nand maintained by Hackney. We are unaware of anyone within Hackney with knowledge of Apache Drill knowledge and this\ncould prove to be an issue in the longer term."),Object(r.b)("h4",{id:"suggestion"},"Suggestion"),Object(r.b)("p",null,"We could install and configure the service in conjunction with Hackney staff to ensure knowledge share through this\nwould not resolve longer term support issues."),Object(r.b)("h3",{id:"amazon-redshift-spectrum"},"Amazon Redshift Spectrum:"),Object(r.b)("p",null,"Amazon Redshift is a Data Warehousing that provides an SQL style interface for querying data.\nIn addition to being able to warehouse data Amazon Redshift Spectrum is able to query data directly from external\nstorage such as Amazon S3 without the additional cost of storing the data within the warehouse itself. Essentially\nseparating the compute-layer from the storage-layer.\nAmazon Redshift is provided as an AWS managed and supported service, with the ability to upscale and downscale as\nHackney requirements change in addition to being paused and unpaused on a scheduled basis."),Object(r.b)("h4",{id:"limitation-1"},"Limitation"),Object(r.b)("p",null,"The biggest limitation with Amazon Redshift is that it can get expensive to run large clusters. Running a single node\ncontinuously is $120 per month and with our lack of visibility of the quantities of data that is being queried."),Object(r.b)("h4",{id:"suggestion-1"},"Suggestion"),Object(r.b)("p",null,"We can reduce the overall cost of running the infrastructure by scheduling period where the nodes are paused such as\nevening and weekend."),Object(r.b)("h3",{id:"qlik-custom-connectors"},"Qlik Custom Connectors:"),Object(r.b)("p",null,"Qlik provides the option of building a custom connector which can allow the system to interact with a dataset. This in\ntheory could be used to allow Qlik to interact with AWS S3 directly."),Object(r.b)("h4",{id:"limitation-2"},"Limitation"),Object(r.b)("p",null,"Building a Qlik Custom Connector would require unspecified amount of development time and would likely require further investigation\ninto the specifics of how this would be implemented."),Object(r.b)("h4",{id:"suggestion-2"},"Suggestion"),Object(r.b)("h2",{id:"helpful-resourcesdocumentation"},"Helpful Resources/Documentation"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("a",{parentName:"p",href:"https://drill.apache.org/"},"Apache Drill - Website"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("a",{parentName:"p",href:"https://aws.amazon.com/redshift/"},"Redshift - Overview"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("a",{parentName:"p",href:"https://help.qlik.com/en-US/sense-developer/February2021/Subsystems/QVXSDKAPI/Content/Sense_QVXSDKAPI/Introducing-QVX.htm"},"Qlik Custom Connectors - Documentation")))))}u.isMDXComponent=!0}}]);