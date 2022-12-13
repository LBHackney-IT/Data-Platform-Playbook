"use strict";(self.webpackChunkdata_platform_playbook=self.webpackChunkdata_platform_playbook||[]).push([[9107],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(n),p=a,f=m["".concat(c,".").concat(p)]||m[p]||d[p]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6017:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return d}});var r=n(3117),a=n(102),i=(n(7294),n(3905)),o=["components"],s={id:"initial-extract-of-tenure-data",title:"Initial Extract of Tenure Data  - ADR 014",description:"",tags:["adr"],number:"14","date-issued":"2022-02-??",status:"Accepted"},c=void 0,l={unversionedId:"architecture-decisions/records/initial-extract-of-tenure-data",id:"architecture-decisions/records/initial-extract-of-tenure-data",title:"Initial Extract of Tenure Data  - ADR 014",description:"",source:"@site/docs/architecture-decisions/records/014-initial-extract-of-tenure-data.md",sourceDirName:"architecture-decisions/records",slug:"/architecture-decisions/records/initial-extract-of-tenure-data",permalink:"/Data-Platform-Playbook/architecture-decisions/records/initial-extract-of-tenure-data",draft:!1,editUrl:"https://github.com/LBHackney-IT/data-platform-playbook/edit/master/docs/architecture-decisions/records/014-initial-extract-of-tenure-data.md",tags:[{label:"adr",permalink:"/Data-Platform-Playbook/tags/adr"}],version:"current",sidebarPosition:14,frontMatter:{id:"initial-extract-of-tenure-data",title:"Initial Extract of Tenure Data  - ADR 014",description:"",tags:["adr"],number:"14","date-issued":"2022-02-??",status:"Accepted"},sidebar:"docs",previous:{title:"Using Event Streaming to Ingest Data - ADR 013",permalink:"/Data-Platform-Playbook/architecture-decisions/records/using-event-streaming-to-ingest-data"},next:{title:"Spatial Data Processing - ADR 015",permalink:"/Data-Platform-Playbook/architecture-decisions/records/spatial-data-processing"}},u={},d=[{value:"Context",id:"context",level:2},{value:"Decision Drivers",id:"decision-drivers",level:2},{value:"Considered Options",id:"considered-options",level:2},{value:"Decision",id:"decision",level:2},{value:"Consequences",id:"consequences",level:2},{value:"Short Term",id:"short-term",level:3},{value:"Long Term",id:"long-term",level:3}],m={toc:d};function p(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"context"},"Context"),(0,i.kt)("p",null,"The Data Platform team are interested in ingesting data from the Tenure API and a variety of other Hackney APIs. To this\nend we have decided to use event streaming to access the data."),(0,i.kt)("p",null,"With event streaming, new entities, changes and deletions emit events that can be consumed by the Data Platform to track\nthe state of that system. However, this only works if we have an initial state to apply those changes to. We therefore\nneed a method of ingesting the current state of the system."),(0,i.kt)("h2",{id:"decision-drivers"},"Decision Drivers"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Providing consistent data to analysts"),(0,i.kt)("li",{parentName:"ul"},"Not impacting production services"),(0,i.kt)("li",{parentName:"ul"},"Volume of work that the engineering team currently has")),(0,i.kt)("h2",{id:"considered-options"},"Considered Options"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Enhance the current event streaming process to emit a series of current state events which can then be consumed by the Data Platform to build the state"),(0,i.kt)("li",{parentName:"ul"},"Provide a one off export of the state from the service and then consume this into the Data Platform"),(0,i.kt)("li",{parentName:"ul"},"Extract the data directly from the services' data storage.")),(0,i.kt)("h2",{id:"decision"},"Decision"),(0,i.kt)("p",null,"The best long term solution is to enhance the event streaming process to emit a series of current state events for the\nData Platform to consume. This will allow the service to re-sync it's overall state at any time, without the intervention\nof the Data Platform team, in the event that there is an inconsistency."),(0,i.kt)("p",null,"However, due to the development time required to implement this system we have opted to do a one time DynamoDb ingestion\nto bring in the initial state of the services until the development is complete."),(0,i.kt)("p",null,"Our initial test candidate will be the Tenure API and therefore we will be performing in the ingestion twice. Once to test\nthe ingestion process works as expected and a subsequent ingestion to set the state of the service."),(0,i.kt)("h2",{id:"consequences"},"Consequences"),(0,i.kt)("h3",{id:"short-term"},"Short Term"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The Data Platform will need direct access to the APIs data storage in order to perform the ingestion"),(0,i.kt)("li",{parentName:"ul"},"The process is not designed to be maintainable and should not be repeated multiple times"),(0,i.kt)("li",{parentName:"ul"},"Any data inconsistencies will be difficult to resolve.")),(0,i.kt)("h3",{id:"long-term"},"Long Term"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"All APIs will need to be designed to emit current state events when required."),(0,i.kt)("li",{parentName:"ul"},"Large amounts of data will be pushed through the event streaming infrastructure")))}p.isMDXComponent=!0}}]);