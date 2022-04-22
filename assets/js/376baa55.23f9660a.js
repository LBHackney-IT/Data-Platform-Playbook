"use strict";(self.webpackChunkdata_platform_playbook=self.webpackChunkdata_platform_playbook||[]).push([[3470],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(n),f=a,g=p["".concat(i,".").concat(f)]||p[f]||c[f]||o;return n?r.createElement(g,u(u({ref:t},d),{},{components:n})):r.createElement(g,u({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,u=new Array(o);u[0]=p;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,u[1]=s;for(var l=2;l<o;l++)u[l]=n[l];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5652:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return i},metadata:function(){return l},toc:function(){return d},default:function(){return p}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),u=["components"],s={title:"Auto-adjusting AWS Budget Alerts",description:"Overview of the Auto-adjusting Budget Alerts",layout:"playbook_js",tags:["playbook"]},i=void 0,l={unversionedId:"docs/auto-adjusting-aws-budget",id:"docs/auto-adjusting-aws-budget",isDocsHomePage:!1,title:"Auto-adjusting AWS Budget Alerts",description:"Overview of the Auto-adjusting Budget Alerts",source:"@site/docs/docs/auto-adjusting-aws-budget.md",sourceDirName:"docs",slug:"/docs/auto-adjusting-aws-budget",permalink:"/Data-Platform-Playbook/docs/auto-adjusting-aws-budget",editUrl:"https://github.com/LBHackney-IT/data-platform-playbook/edit/master/docs/docs/auto-adjusting-aws-budget.md",tags:[{label:"playbook",permalink:"/Data-Platform-Playbook/tags/playbook"}],version:"current",frontMatter:{title:"Auto-adjusting AWS Budget Alerts",description:"Overview of the Auto-adjusting Budget Alerts",layout:"playbook_js",tags:["playbook"]},sidebar:"docs",previous:{title:"Querying the Data Platform using SQL within AWS Athena",permalink:"/Data-Platform-Playbook/playbook/querying-and-analysing-data/querying-data-using-sql"},next:{title:"Exporting database snapshots to the Data Platform Landing Zone",permalink:"/Data-Platform-Playbook/docs/exporting-snapshot-to-landing-zone"}},d=[],c={toc:d};function p(e){var t=e.components,s=(0,a.Z)(e,u);return(0,o.kt)("wrapper",(0,r.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"AWS Budget Alert",src:n(9778).Z})),(0,o.kt)("p",null,"AWS Budgets are a part of AWS Billing. Budgets are configured to send alert emails when we exceed customisable thresholds or when we\u2019re forecast to exceed them. Currently we have two active budgets for all expenditures, one for actual expenditure and the other for forecast expenditure. The threshold is the same for both budgets, and can be set individually withing the module."),(0,o.kt)("p",null,"Budgets can be focussed down to individual AWS Services, but this is not currently set up in the module."),(0,o.kt)("p",null,"On the first of each month the ",(0,o.kt)("inlineCode",{parentName:"p"},"set_budget_limit_amount_lambda")," runs. This lambda accesses the AWS Cost Explorer Client via Boto3. It then calculates the average expenditure over the past three months and sets that amount as the new threshold limit for both the actual and forecast Budgets. This ensures that the budget thresholds remains relevant. "),(0,o.kt)("p",null,"The Lambda automatically sets the actual and forecast budget to the same value, but could be refactored to set them individually, should the need arise."))}p.isMDXComponent=!0},9778:function(e,t,n){t.Z=n.p+"assets/images/auto-adjusting-aws-budget-875052f10fd799e2911d1523aeb44e6a.png"}}]);