"use strict";(self.webpackChunkdata_platform_playbook=self.webpackChunkdata_platform_playbook||[]).push([[873],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return d}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),f=s(a),d=o,m=f["".concat(p,".").concat(d)]||f[d]||u[d]||r;return a?n.createElement(m,l(l({ref:t},c),{},{components:a})):n.createElement(m,l({ref:t},c))}));function d(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,l=new Array(r);l[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<r;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},2525:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return u}});var n=a(3117),o=a(102),r=(a(7294),a(3905)),l=["components"],i={title:"Data Lake",layout:"playbook_js",tags:["playbook"]},p=void 0,s={unversionedId:"playbook/elements-of-the-platform/data-lake",id:"playbook/elements-of-the-platform/data-lake",title:"Data Lake",description:"This is an overview of the data lake, its responsibilities and how data moves through the zones within the data lake",source:"@site/docs/playbook/elements-of-the-platform/data-lake.md",sourceDirName:"playbook/elements-of-the-platform",slug:"/playbook/elements-of-the-platform/data-lake",permalink:"/Data-Platform-Playbook/playbook/elements-of-the-platform/data-lake",draft:!1,editUrl:"https://github.com/LBHackney-IT/data-platform-playbook/edit/master/docs/playbook/elements-of-the-platform/data-lake.md",tags:[{label:"playbook",permalink:"/Data-Platform-Playbook/tags/playbook"}],version:"current",frontMatter:{title:"Data Lake",layout:"playbook_js",tags:["playbook"]},sidebar:"docs",previous:{title:"Data Catalogue",permalink:"/Data-Platform-Playbook/playbook/elements-of-the-platform/data-catalogue"},next:{title:"Data Warehouse",permalink:"/Data-Platform-Playbook/playbook/elements-of-the-platform/data-warehouse"}},c={},u=[{value:"Zones",id:"zones",level:2},{value:"Moving data through zones with Glue",id:"moving-data-through-zones-with-glue",level:2},{value:"Planning example",id:"planning-example",level:4},{value:"Data format",id:"data-format",level:2},{value:"Crawling data",id:"crawling-data",level:2}],f={toc:u};function d(e){var t=e.components,i=(0,o.Z)(e,l);return(0,r.kt)("wrapper",(0,n.Z)({},f,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This is an overview of the data lake, its responsibilities and how data moves through the zones within the data lake"),(0,r.kt)("h2",{id:"zones"},"Zones"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Zones",src:a(8888).Z,width:"1476",height:"850"})),(0,r.kt)("h2",{id:"moving-data-through-zones-with-glue"},"Moving data through zones with Glue"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Moving data through zones with glue",src:a(5293).Z,width:"1490",height:"832"})),(0,r.kt)("h4",{id:"planning-example"},"Planning example"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Planning example",src:a(341).Z,width:"1858",height:"921"})),(0,r.kt)("h2",{id:"data-format"},"Data format"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Data Format",src:a(7123).Z,width:"1847",height:"867"})),(0,r.kt)("h2",{id:"crawling-data"},"Crawling data"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Crawling data",src:a(2046).Z,width:"1680",height:"724"})))}d.isMDXComponent=!0},2046:function(e,t,a){t.Z=a.p+"assets/images/crawling-data-lake-a9cb46d521fef08db3bc52401a9bb556.png"},7123:function(e,t,a){t.Z=a.p+"assets/images/data-format-data-lake-9b9fb7e832c04f6afc8ac11ad97b2f56.png"},5293:function(e,t,a){t.Z=a.p+"assets/images/moving-data-data-lake-9c78661688006e9a8406c0b9b80401b5.png"},341:function(e,t,a){t.Z=a.p+"assets/images/planning-example-5602d61450f848681a632ad81ec618a8.png"},8888:function(e,t,a){t.Z=a.p+"assets/images/zones-a488e97dc11dde1b1181af069e9b1ffe.png"}}]);