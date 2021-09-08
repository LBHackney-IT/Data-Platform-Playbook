(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{100:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return c}));var a=r(3),n=r(7),o=(r(0),r(122)),i={title:"Onboarding new users to the platform",description:"How to add users to a Google group or add a new group for a department.",layout:"playbook_js",tags:"playbook"},l={unversionedId:"playbook/onboarding-new-users-to-the-platform",id:"playbook/onboarding-new-users-to-the-platform",isDocsHomePage:!1,title:"Onboarding new users to the platform",description:"How to add users to a Google group or add a new group for a department.",source:"@site/docs/playbook/onboarding-new-users-to-the-platform.md",slug:"/playbook/onboarding-new-users-to-the-platform",permalink:"/Data-Platform-Playbook/playbook/onboarding-new-users-to-the-platform",editUrl:"https://github.com/LBHackney-IT/data-platform-playbook/edit/master/docs/playbook/onboarding-new-users-to-the-platform.md",version:"current",sidebar:"docs",previous:{title:"Ingest manually uploaded csv files",permalink:"/Data-Platform-Playbook/playbook/ingest-data-from-csv-files"},next:{title:"Querying the Platform using SQL",permalink:"/Data-Platform-Playbook/playbook/querying-data-using-sql"}},p=[{value:"Prerequisites",id:"prerequisites",children:[{value:"Adding a user to a department",id:"adding-a-user-to-a-department",children:[]},{value:"Creating a department on the Data Platform",id:"creating-a-department-on-the-data-platform",children:[]}]}],u={toc:p};function c(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"You need to be a manager of the relevant Google group"),Object(o.b)("li",{parentName:"ul"},"The user you would like to add to the Google group has a Hackney GSuite account")),Object(o.b)("h3",{id:"adding-a-user-to-a-department"},"Adding a user to a department"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"To add a user to a Google group, follow the instructions ",Object(o.b)("a",{parentName:"li",href:"https://support.google.com/groups/answer/2465464?hl=en"},"here")),Object(o.b)("li",{parentName:"ul"},"This can take up to two hours to sync with AWS")),Object(o.b)("h3",{id:"creating-a-department-on-the-data-platform"},"Creating a department on the Data Platform"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Create a Google Group, with the name ",Object(o.b)("inlineCode",{parentName:"li"},"saml-aws-data-platform-collaborator-${department_name}")," as a template",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"You can do this by contacting the Hackney Service team via the ",Object(o.b)("a",{parentName:"li",href:"https://hackit-lbh.slack.com/archives/C01FX9ERRSL"},Object(o.b)("inlineCode",{parentName:"a"},"ask-devops")," Slack channel")),Object(o.b)("li",{parentName:"ul"},"Ensure you specify at least one manager for the group you are creating. This person is responsible for adding/removing\nusers to your department"))),Object(o.b)("li",{parentName:"ul"},"Wait for 2 hours for the next AWS sync before moving onto the next step"),Object(o.b)("li",{parentName:"ul"},"Create a new department using the ",Object(o.b)("a",{parentName:"li",href:"https://github.com/LBHackney-IT/Data-Platform/blob/main/terraform/05-departments.tf"},"existing resources")," as a template",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Specify ",Object(o.b)("inlineCode",{parentName:"li"},"google_group_display_name")," with the email address of the Google Group you created earlier"),Object(o.b)("li",{parentName:"ul"},"Specify a unique name for the department, with a maximum of 16 characters")))))}c.isMDXComponent=!0},122:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return d}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=n.a.createContext({}),c=function(e){var t=n.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=c(e.components);return n.a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},b=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=c(r),b=a,d=s["".concat(i,".").concat(b)]||s[b]||m[b]||o;return r?n.a.createElement(d,l(l({ref:t},u),{},{components:r})):n.a.createElement(d,l({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=b;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);