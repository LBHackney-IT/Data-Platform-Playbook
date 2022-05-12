"use strict";(self.webpackChunkdata_platform_playbook=self.webpackChunkdata_platform_playbook||[]).push([[899],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),f=r,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||o;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4439:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var a=n(3117),r=n(102),o=(n(7294),n(3905)),i=["components"],s={title:"Data Quality Testing",description:"Testing data quality from Glue jobs",tags:["tech-spike"],layout:"layout"},l=void 0,u={unversionedId:"spikes/data-quality-testing",id:"spikes/data-quality-testing",title:"Data Quality Testing",description:"Testing data quality from Glue jobs",source:"@site/docs/spikes/data-quality-testing.md",sourceDirName:"spikes",slug:"/spikes/data-quality-testing",permalink:"/Data-Platform-Playbook/spikes/data-quality-testing",draft:!1,editUrl:"https://github.com/LBHackney-IT/data-platform-playbook/edit/master/docs/spikes/data-quality-testing.md",tags:[{label:"tech-spike",permalink:"/Data-Platform-Playbook/tags/tech-spike"}],version:"current",frontMatter:{title:"Data Quality Testing",description:"Testing data quality from Glue jobs",tags:["tech-spike"],layout:"layout"},sidebar:"docs",previous:{title:"Amundsen deployment",permalink:"/Data-Platform-Playbook/spikes/amundsen-deployment"},next:{title:"Datahub deployment",permalink:"/Data-Platform-Playbook/spikes/datahub-deployment"}},c={},p=[{value:"Context",id:"context",level:2},{value:"Decision",id:"decision",level:2},{value:"Considerations",id:"considerations",level:2},{value:"Consequences",id:"consequences",level:2}],d={toc:p};function f(e){var t=e.components,s=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"context"},"Context"),(0,o.kt)("p",null,"The Data Platform currently does not have a way to test the data quality of the outputs from Glue jobs"),(0,o.kt)("h2",{id:"decision"},"Decision"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Data Quality Testing",src:n(4282).Z,width:"471",height:"431"})),(0,o.kt)("p",null,"Use a Python module; ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/awslabs/python-deequ"},"PyDeequ"),".\nPyDeequ enables you to calculate and track changes of metrics\non a dataset, define custom constraints and/or use automated\nconstraint suggestions to test the quality of a dataset.",(0,o.kt)("br",{parentName:"p"}),"\n","Datasets being consumed by a Glue job will be analysed to produce\nmetrics (profile of the data), which will be stored in a Metrics Repository\nin the respective S3 location of the dataset.\nAt each Glue job run, the defined constraints will be compared\nagainst the latest metrics from the respective Metrics Repository in S3.\nIf there are no anomalies in regards to the defined constraints,\nthen the Glue job will proceed as normal and write the output to\nits target S3 location.\nIf there are any anomalies, then Glue job fails, and the constraint\nerror message is published as an SNS notification to an email\nrecipient, notifying them of the error."),(0,o.kt)("h2",{id:"considerations"},"Considerations"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Will need to have a formal review of acceptable constraints per dataset\nconsumed by a Glue job."),(0,o.kt)("li",{parentName:"ul"},"On the first run, metrics will be stored without analysing against constraints\nto set a benchmark for future constraint analyses."),(0,o.kt)("li",{parentName:"ul"},"Metrics stored in the Metrics Repository in S3 are stored as JSON files and thus\nshould not be picked up by any Crawlers (providing the Crawlers' configuration\nis not changed)")),(0,o.kt)("h2",{id:"consequences"},"Consequences"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Users will have confidence that the data being consumed as a result of a Glue job\nis of high quality and can be trusted."),(0,o.kt)("li",{parentName:"ul"},"If there are any anomalies, then users will be notified via email, so that the issue\ncan be investigated. Consequently, the Glue job is stopped to prevent passing on the data\nthat does not meet the specified constraints to other Glue jobs or Business Intelligence tools.")))}f.isMDXComponent=!0},4282:function(e,t,n){t.Z=n.p+"assets/images/data-quality-testing-ef8e0b9ec8abd3d359e7d283fdcdb7ad.png"}}]);