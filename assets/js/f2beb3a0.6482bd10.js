"use strict";(self.webpackChunkdata_platform_playbook=self.webpackChunkdata_platform_playbook||[]).push([[1486],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(n),m=o,f=u["".concat(l,".").concat(m)]||u[m]||c[m]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var d=2;d<a;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7469:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var r=n(7462),o=(n(7294),n(3905));const a={id:"environments",title:"Environments",slug:"/environments"},i=void 0,s={unversionedId:"environments",id:"environments",title:"Environments",description:"The platform has the following 3 environments:",source:"@site/docs/environments.md",sourceDirName:".",slug:"/environments",permalink:"/Data-Platform-Playbook/environments",draft:!1,editUrl:"https://github.com/LBHackney-IT/data-platform-playbook/edit/master/docs/environments.md",tags:[],version:"current",frontMatter:{id:"environments",title:"Environments",slug:"/environments"},sidebar:"docs",previous:{title:"Zones",permalink:"/Data-Platform-Playbook/zones"},next:{title:"Introduction",permalink:"/Data-Platform-Playbook/playbook/getting-set-up/"}},l={},d=[{value:"Production\u200b",id:"production",level:2},{value:"Pre-production / Staging\u200b",id:"pre-production--staging",level:2},{value:"Development\u200b",id:"development",level:2}],p={toc:d},u="wrapper";function c(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The platform has the following 3 environments:"),(0,o.kt)("h2",{id:"production"},"Production\u200b"),(0,o.kt)("p",null,"The production environment is where successfully tested features and data pipelines are made available to end users.\nChanges to data pipelines and access to underlying infrastructure is more restricted here than in the other environments; there is a focus on providing stable, reliable data for analysts and other consumers.\nThis environment should be used by analysts for generating insights. Dashboards and other mature data products intended for live use in a service should connect to data in this environment. "),(0,o.kt)("h2",{id:"pre-production--staging"},"Pre-production / Staging\u200b"),(0,o.kt)("p",null,"The pre-production environment is used by both analysts and engineers to develop and test new features and pipelines to ensure they behave as expected when deployed to the production environment.\nThe same tools available in the production environment are available here but the focus is on integration and experimentation before a new pipeline or feature is deployed to the production environment.\n90 days of data is back copied from the production environment to facilitate realistic testing of new processes that will be built on the production data. However, because of the experimental and quick changing nature of the code base in this environment this should not be relied on for any use outside of the platform beyond exploratory and experimental phases of work. "),(0,o.kt)("h2",{id:"development"},"Development\u200b"),(0,o.kt)("p",null,"The development environment is used primarily by engineers to build, test and iterate on features and changes to the underlying infrastructure before it is deployed to the other two environments for use by the wider data community.\nThere is no \u2018real\u2019 data in this environment, with a focus on developing the tooling and new features that are not present in the other environments.\nThis environment should be treated as volatile, prone to unexpected behaviour and not for use in producing data products."))}c.isMDXComponent=!0}}]);