(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{100:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),i=n(7),o=(n(0),n(112)),a={title:"TITLE",description:"",tags:"tech-spike",layout:"layout"},c={unversionedId:"spikes/templates/template",id:"spikes/templates/template",isDocsHomePage:!1,title:"TITLE",description:"Spike: {{ title }}",source:"@site/docs/spikes/templates/template.md",slug:"/spikes/templates/template",permalink:"/Data-Platform-Playbook/spikes/templates/template",editUrl:"https://github.com/LBHackney-IT/data-platform-playbook/edit/master/docs/spikes/templates/template.md",version:"current"},l=[{value:"SUB-TITLE",id:"sub-title",children:[]},{value:"Objective",id:"objective",children:[]},{value:"Considerations",id:"considerations",children:[]},{value:"Findings",id:"findings",children:[{value:"Postgres:",id:"postgres",children:[]},{value:"Elasticsearch:",id:"elasticsearch",children:[]}]}],s={toc:l};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"spike--title-"},"Spike: {{ title }}"),Object(o.b)("h3",{id:"sub-title"},"SUB-TITLE"),Object(o.b)("h2",{id:"objective"},"Objective"),Object(o.b)("h2",{id:"considerations"},"Considerations"),Object(o.b)("h2",{id:"findings"},"Findings"),Object(o.b)("h3",{id:"postgres"},"Postgres:"),Object(o.b)("p",null,"####Limitation"),Object(o.b)("p",null,"####Suggestion"),Object(o.b)("h3",{id:"elasticsearch"},"Elasticsearch:"),Object(o.b)("p",null,"####Limitation"),Object(o.b)("p",null,"####Suggestion"),Object(o.b)("p",null,"##Helpful Resources/Documentation"))}p.isMDXComponent=!0},112:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),p=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),b=r,f=u["".concat(a,".").concat(b)]||u[b]||d[b]||o;return n?i.a.createElement(f,c(c({ref:t},s),{},{components:n})):i.a.createElement(f,c({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var s=2;s<o;s++)a[s]=n[s];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);