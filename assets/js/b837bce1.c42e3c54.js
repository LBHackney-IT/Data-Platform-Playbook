"use strict";(self.webpackChunkdata_platform_playbook=self.webpackChunkdata_platform_playbook||[]).push([[9492],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>g});var o=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,o,r=function(e,t){if(null==e)return{};var a,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=o.createContext({}),m=function(e){var t=o.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=m(e.components);return o.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=m(a),c=r,g=u["".concat(p,".").concat(c)]||u[c]||d[c]||n;return a?o.createElement(g,i(i({ref:t},s),{},{components:a})):o.createElement(g,i({ref:t},s))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,i=new Array(n);i[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var m=2;m<n;m++)i[m]=a[m];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}c.displayName="MDXCreateElement"},8502:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>n,metadata:()=>l,toc:()=>m});var o=a(7462),r=(a(7294),a(3905));const n={title:"Onboarding new departments to the platform",description:"How to add a new Google group for a department.",layout:"playbook_js",tags:["playbook"]},i=void 0,l={unversionedId:"playbook/getting-set-up/onboarding-new-departments-to-the-platform",id:"playbook/getting-set-up/onboarding-new-departments-to-the-platform",title:"Onboarding new departments to the platform",description:"How to add a new Google group for a department.",source:"@site/docs/playbook/getting-set-up/onboarding-new-departments-to-the-platform.md",sourceDirName:"playbook/getting-set-up",slug:"/playbook/getting-set-up/onboarding-new-departments-to-the-platform",permalink:"/Data-Platform-Playbook/playbook/getting-set-up/onboarding-new-departments-to-the-platform",draft:!1,editUrl:"https://github.com/LBHackney-IT/data-platform-playbook/edit/master/docs/playbook/getting-set-up/onboarding-new-departments-to-the-platform.md",tags:[{label:"playbook",permalink:"/Data-Platform-Playbook/tags/playbook"}],version:"current",frontMatter:{title:"Onboarding new departments to the platform",description:"How to add a new Google group for a department.",layout:"playbook_js",tags:["playbook"]},sidebar:"docs",previous:{title:"Local Notebook Environment Setup",permalink:"/Data-Platform-Playbook/playbook/getting-set-up/notebook-setup"},next:{title:"Onboarding new users to the platform",permalink:"/Data-Platform-Playbook/playbook/getting-set-up/onboarding-new-users-to-the-platform"}},p={},m=[{value:"Objective",id:"objective",level:2},{value:"Intended audience",id:"intended-audience",level:2},{value:"Adding a department onto the platform",id:"adding-a-department-onto-the-platform",level:2}],s={toc:m},u="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,o.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"objective"},"Objective"),(0,r.kt)("p",null,"Before a department is able to use the data platform, its details must be configured and setup beforehand by a Data Platform Engineer."),(0,r.kt)("h2",{id:"intended-audience"},"Intended audience"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Data Platform Engineer")),(0,r.kt)("h2",{id:"adding-a-department-onto-the-platform"},"Adding a department onto the platform"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a Google group, with the name:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"saml-aws-data-platform-collaborator-<department-name>\n")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"Note: ensure that your ",(0,r.kt)("inlineCode",{parentName:"em"},"department-name")," is all lowercase with words separated by hyphens.")),(0,r.kt)("p",{parentName:"li"},"For example, the Housing Repairs Google group name would be:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"saml-aws-data-platform-collaborator-housing-repairs\n")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"You can do this by submitting a request to ",(0,r.kt)("a",{parentName:"li",href:"https://support.hackney.gov.uk"},"ICT support")," requesting a Google group."),(0,r.kt)("li",{parentName:"ul"},"Ensure you specify at least one manager for the group you are creating. This person is responsible for adding/removing\nusers to your department"),(0,r.kt)("li",{parentName:"ul"},"Enable the collaborative inbox feature on your Google group by following step 2 in this ",(0,r.kt)("a",{parentName:"li",href:"https://support.google.com/a/users/answer/10375787?hl=en#:~:text=Step%202%3A%20Turn%20on%20Collaborative%20Inbox%20features"},"guide"),".\nThis will allow your group and its members to receive emails from outside the Hackney organisation as you will need to be able to receive AWS email notifications"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Add the service account email, one can find this ",(0,r.kt)("a",{parentName:"p",href:"https://console.cloud.google.com/projectselector2/iam-admin/serviceaccounts?supportedpurview=project"},"here")," with the department name in ",(0,r.kt)("a",{parentName:"p",href:"/Data-Platform-Playbook/playbook/ingesting-data/google-sheets-import#department-specific-information"},"the table in the Google sheets ingestion guide"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Raise a ticket with dev ops by emailing ",(0,r.kt)("a",{parentName:"p",href:"mailto:cloudsupport@hackney.gov.uk"},"cloudsupport@hackney.gov.uk")," asking them to add the group to the SSO import lambda\u2019s google groups. This will allow members of the google group so sign into AWS via ",(0,r.kt)("a",{parentName:"p",href:"https://hackney.awsapps.com/start/#/"},"Hackney's SSO"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Wait for 2 hours for the next AWS sync before moving onto the next step")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a new department using the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/LBHackney-IT/Data-Platform/blob/main/terraform/core/05-departments.tf"},"existing resources")," as a template"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Specify ",(0,r.kt)("inlineCode",{parentName:"li"},"google_group_display_name")," with the email address of the Google group you created earlier"),(0,r.kt)("li",{parentName:"ul"},"Specify a unique name for the department, with a maximum of 16 characters"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Submit a pull request on GitHub, and await approval from two other Data Platform Engineer's.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Before merging, which will automatically apply the Terraform changes, it is intended that a Data Platform Engineer would first check that the pipeline and all required actions are clear.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Once Terraform has applied, an email address will be output, which can be retrieved from either the GitHub Actions output, or from within the GSuite admin portal. This email address can be shared with the department that you are onboarding, which they can then use to ingest data into the platform."))))}d.isMDXComponent=!0}}]);