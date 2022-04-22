"use strict";(self.webpackChunkdata_platform_playbook=self.webpackChunkdata_platform_playbook||[]).push([[934],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),p=u(n),f=o,m=p["".concat(s,".").concat(f)]||p[f]||d[f]||i;return n?r.createElement(m,c(c({ref:t},l),{},{components:n})):r.createElement(m,c({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,c=new Array(i);c[0]=p;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var u=2;u<i;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3498:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return l},default:function(){return p}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),c=["components"],a={title:"Introduction"},s="Architecture Decision Records",u={unversionedId:"architecture-decisions/index",id:"architecture-decisions/index",isDocsHomePage:!1,title:"Introduction",description:"An Architectural Decision (AD) is a software design choice that addresses a functional or non-functional requirement",source:"@site/docs/architecture-decisions/index.md",sourceDirName:"architecture-decisions",slug:"/architecture-decisions/index",permalink:"/Data-Platform-Playbook/architecture-decisions/index",editUrl:"https://github.com/LBHackney-IT/data-platform-playbook/edit/master/docs/architecture-decisions/index.md",tags:[],version:"current",frontMatter:{title:"Introduction"},sidebar:"docs",previous:{title:"VPC Peering Connection between Data Platform and Production APIs AWS accounts",permalink:"/Data-Platform-Playbook/docs/vpc-peering-connection-dataplatform-and-production-apis-account"},next:{title:"Record architecture decisions",permalink:"/Data-Platform-Playbook/architecture-decisions/records/record-architecture-decisions"}},l=[],d={toc:l};function p(e){var t=e.components,n=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"architecture-decision-records"},"Architecture Decision Records"),(0,i.kt)("p",null,"An Architectural Decision (AD) is a software design choice that addresses a functional or non-functional requirement\nthat is architecturally significant. An Architecturally Significant Requirement (ASR) is a requirement that has a\nmeasurable effect on a software system\u2019s architecture and quality. An Architectural Decision Record (ADR) captures a\nsingle AD, such as often done when writing personal notes or meeting minutes. The collection of ADRs created and\nmaintained in a project constitute its decision log."))}p.isMDXComponent=!0}}]);