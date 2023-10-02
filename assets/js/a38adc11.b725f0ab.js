"use strict";(self.webpackChunkdata_platform_playbook=self.webpackChunkdata_platform_playbook||[]).push([[719],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),s=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=s(n),f=r,m=u["".concat(p,".").concat(f)]||u[f]||d[f]||a;return n?o.createElement(m,c(c({ref:t},l),{},{components:n})):o.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:r,c[1]=i;for(var s=2;s<a;s++)c[s]=n[s];return o.createElement.apply(null,c)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},4896:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var o=n(7462),r=(n(7294),n(3905));const a={title:"VPC Peering Connection between Data Platform and Production APIs AWS accounts",description:"Overview of how the VPC Peering Connection and its purpose",layout:"playbook_js",tags:["playbook"]},c=void 0,i={unversionedId:"docs/vpc-peering-connection-dataplatform-and-production-apis-account",id:"docs/vpc-peering-connection-dataplatform-and-production-apis-account",title:"VPC Peering Connection between Data Platform and Production APIs AWS accounts",description:"Overview of how the VPC Peering Connection and its purpose",source:"@site/docs/docs/vpc-peering-connection-dataplatform-and-production-apis-account.md",sourceDirName:"docs",slug:"/docs/vpc-peering-connection-dataplatform-and-production-apis-account",permalink:"/Data-Platform-Playbook/docs/vpc-peering-connection-dataplatform-and-production-apis-account",draft:!1,editUrl:"https://github.com/LBHackney-IT/data-platform-playbook/edit/master/docs/docs/vpc-peering-connection-dataplatform-and-production-apis-account.md",tags:[{label:"playbook",permalink:"/Data-Platform-Playbook/tags/playbook"}],version:"current",frontMatter:{title:"VPC Peering Connection between Data Platform and Production APIs AWS accounts",description:"Overview of how the VPC Peering Connection and its purpose",layout:"playbook_js",tags:["playbook"]},sidebar:"docs",previous:{title:"Tascomi data ingestion",permalink:"/Data-Platform-Playbook/docs/tascomi-ingestion"},next:{title:"Introduction",permalink:"/Data-Platform-Playbook/architecture-decisions/"}},p={},s=[],l={toc:s},u="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,o.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"VPC Peering Connection",src:n(132).Z,width:"580",height:"301"})),(0,r.kt)("p",null,"The VPC Peering connection is set up between the Data Platform Pre-Production account VPC and the Production APIs account VPC. This will allow traffic to flow to and from these AWS accounts."),(0,r.kt)("p",null,"This enables Data and Insights Analysts to fulfil their analysis and reporting duties on data from the Data Platform, such as housing and parking data, using the Qlik Sense Business Intelligence tool from the Production APIs AWS account."))}d.isMDXComponent=!0},132:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/vpc-peering-connection-f02586c89cad2165c425d15609b62401.png"}}]);