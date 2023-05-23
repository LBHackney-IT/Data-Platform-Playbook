"use strict";(self.webpackChunkdata_platform_playbook=self.webpackChunkdata_platform_playbook||[]).push([[1107],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(a),u=i,h=d["".concat(s,".").concat(u)]||d[u]||m[u]||o;return a?n.createElement(h,r(r({ref:t},c),{},{components:a})):n.createElement(h,r({ref:t},c))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:i,r[1]=l;for(var p=2;p<o;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},8914:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=a(7462),i=(a(7294),a(3905));const o={title:"Ingesting new data entities via event streaming",description:"Setting up a new Kafka topic to streaming events to from a new data entity",layout:"playbook_js",tags:["playbook"]},r=void 0,l={unversionedId:"playbook/ingesting-data/event-streaming",id:"playbook/ingesting-data/event-streaming",title:"Ingesting new data entities via event streaming",description:"Setting up a new Kafka topic to streaming events to from a new data entity",source:"@site/docs/playbook/ingesting-data/008-event-streaming.md",sourceDirName:"playbook/ingesting-data",slug:"/playbook/ingesting-data/event-streaming",permalink:"/Data-Platform-Playbook/playbook/ingesting-data/event-streaming",draft:!1,editUrl:"https://github.com/LBHackney-IT/data-platform-playbook/edit/master/docs/playbook/ingesting-data/008-event-streaming.md",tags:[{label:"playbook",permalink:"/Data-Platform-Playbook/tags/playbook"}],version:"current",sidebarPosition:8,frontMatter:{title:"Ingesting new data entities via event streaming",description:"Setting up a new Kafka topic to streaming events to from a new data entity",layout:"playbook_js",tags:["playbook"]},sidebar:"docs",previous:{title:"Ingesting Dynamo DB tables into the Landing Zone",permalink:"/Data-Platform-Playbook/playbook/ingesting-data/ingesting-dynamo-db-tables"},next:{title:"Ingesting data from an API to the Data Platform",permalink:"/Data-Platform-Playbook/playbook/ingesting-data/ingesting-api-data"}},s={},p=[{value:"Objective",id:"objective",level:2},{value:"Intended audience",id:"intended-audience",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Adding a new topic and schema for the data entity",id:"adding-a-new-topic-and-schema-for-the-data-entity",level:3}],c={toc:p},d="wrapper";function m(e){let{components:t,...a}=e;return(0,i.kt)(d,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"objective"},"Objective"),(0,i.kt)("p",null,"To explain the setup needed when you want to ingest a new data type via event streaming. "),(0,i.kt)("h2",{id:"intended-audience"},"Intended audience"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Data Engineers")),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Ensure you have completed the pre-requisites in our ",(0,i.kt)("a",{parentName:"li",href:"/Data-Platform-Playbook/playbook/getting-set-up/"},"getting set up guide"),"."),(0,i.kt)("li",{parentName:"ul"},"You will need the schema for the data entity you are hoping to ingest.")),(0,i.kt)("h3",{id:"adding-a-new-topic-and-schema-for-the-data-entity"},"Adding a new topic and schema for the data entity"),(0,i.kt)("p",null,"You will need to upload a schema for this data entity to the registry.\nEvents pushed to the new topic with be checked against this schema, if they are not compatible the events will be rejected.\nThe schema file needs to be a JSON file that follows the the ",(0,i.kt)("a",{parentName:"p",href:"https://avro.apache.org/docs/current/spec.html"},"AVRO schema specification"),".\nFor an example, you can see the schema for the tenure API events ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/LBHackney-IT/Data-Platform/blob/main/modules/kafka-schema-registry/schemas/tenure_api.json"},"here"),"."),(0,i.kt)("p",null,"Once you have the schema file, create a pull request to commit the following changes.\nIf you need help with this, refer to the ",(0,i.kt)("a",{parentName:"p",href:"../getting-set-up/using-github#committing-your-changes-to-the-data-platform-project"},"committing changes")," section of the Using Github guide."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Add the schema file to the ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/LBHackney-IT/Data-Platform/tree/main/modules/kafka-schema-registry/schemas"},"schemas folder")," of the kafka schema registry module in the data platform repository.\nThe file should have the same name as the topic, for example, ",(0,i.kt)("inlineCode",{parentName:"li"},"tenure_api.json"),"."),(0,i.kt)("li",{parentName:"ol"},"Add the topic name to the list of topics in the ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/LBHackney-IT/Data-Platform/blob/main/terraform/core/32-kafka-event-streaming.tf"},"kafka event streaming module"),".")),(0,i.kt)("p",null,"Once the pull request has been approved and merged, the new schema will be added to the registry in the pipeline."))}m.isMDXComponent=!0}}]);