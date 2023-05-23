"use strict";(self.webpackChunkdata_platform_playbook=self.webpackChunkdata_platform_playbook||[]).push([[5352],{3905:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>m});var r=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},o=Object.keys(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var d=r.createContext({}),c=function(t){var e=r.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},s=function(t){var e=c(t.components);return r.createElement(d.Provider,{value:e},t.children)},u="mdxType",p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},h=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,o=t.originalType,d=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),u=c(a),h=n,m=u["".concat(d,".").concat(h)]||u[h]||p[h]||o;return a?r.createElement(m,i(i({ref:e},s),{},{components:a})):r.createElement(m,i({ref:e},s))}));function m(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=a.length,i=new Array(o);i[0]=h;var l={};for(var d in e)hasOwnProperty.call(e,d)&&(l[d]=e[d]);l.originalType=t,l[u]="string"==typeof t?t:n,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},2521:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=a(7462),n=(a(7294),a(3905));const o={title:"Create a data extract in Google Data Studio",description:"Create an extract to optimise dashboard performance",layout:"playbook_js",tags:["playbook"]},i=void 0,l={unversionedId:"playbook/querying-and-analysing-data/create_a_data_extract_in_GDS",id:"playbook/querying-and-analysing-data/create_a_data_extract_in_GDS",title:"Create a data extract in Google Data Studio",description:"Create an extract to optimise dashboard performance",source:"@site/docs/playbook/querying-and-analysing-data/create_a_data_extract_in_GDS.md",sourceDirName:"playbook/querying-and-analysing-data",slug:"/playbook/querying-and-analysing-data/create_a_data_extract_in_GDS",permalink:"/Data-Platform-Playbook/playbook/querying-and-analysing-data/create_a_data_extract_in_GDS",draft:!1,editUrl:"https://github.com/LBHackney-IT/data-platform-playbook/edit/master/docs/playbook/querying-and-analysing-data/create_a_data_extract_in_GDS.md",tags:[{label:"playbook",permalink:"/Data-Platform-Playbook/tags/playbook"}],version:"current",frontMatter:{title:"Create a data extract in Google Data Studio",description:"Create an extract to optimise dashboard performance",layout:"playbook_js",tags:["playbook"]},sidebar:"docs",previous:{title:"Connecting to the Redshift cluster from Google Data Studio",permalink:"/Data-Platform-Playbook/playbook/querying-and-analysing-data/connecting-to-redshift-from-data-studio"},next:{title:"Querying the Data Platform using SQL within AWS Athena",permalink:"/Data-Platform-Playbook/playbook/querying-and-analysing-data/querying-data-using-sql"}},d={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Limitations",id:"limitations",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Create an extracted data source",id:"create-an-extracted-data-source",level:2},{value:"Adding an extract in the dashboard",id:"adding-an-extract-in-the-dashboard",level:2},{value:"Update extracted data",id:"update-extracted-data",level:2}],s={toc:c},u="wrapper";function p(t){let{components:e,...a}=t;return(0,n.kt)(u,(0,r.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"introduction"},"Introduction"),(0,n.kt)("p",null,"When using a redshift connection in Google Data Studio simple dashboard selections can take a long time to return records. This is because each element on the page is querying the redshift cluster separately, despite the \u201cData Freshness\u201d being set to 12 hours."),(0,n.kt)("p",null,"To overcome this you can create a \u201cData Extract\u201d of an existing data connection which is then cached and returns results much quicker. The Data Extract can also be refreshed at set intervals and \u201cshared\u201d for use in other dashboards."),(0,n.kt)("p",null,"It is highly recommended that the data extract is created before the dashboard is developed as any calculated fields or dimensions may need to be rebuilt."),(0,n.kt)("h2",{id:"limitations"},"Limitations"),(0,n.kt)("p",null,"Google Data Studio has row limits relating to different data sources and the limit for the PostGresSQL connection used for the Data Platform is 100K."),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"An initial data connection to the Data Platform must be created before creating a data extract. If using a redshift connection the guidance on how to set up the initial connection is ",(0,n.kt)("a",{parentName:"li",href:"https://lbhackney-it.github.io/Data-Platform-Playbook/playbook/connecting-to-redshift-from-data-studio/"},"here"))),(0,n.kt)("h2",{id:"create-an-extracted-data-source"},"Create an extracted data source"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Sign in to ",(0,n.kt)("a",{parentName:"li",href:"https://datastudio.google.com/"},"Data Studio"),"."),(0,n.kt)("li",{parentName:"ul"},"In the top left, click the + button, then select Data Source"),(0,n.kt)("li",{parentName:"ul"},"In the connectors list, select Extract Data."),(0,n.kt)("li",{parentName:"ul"},"Select an existing data source to extract from."),(0,n.kt)("li",{parentName:"ul"},"Select the dimensions and metrics to extract by dragging them from the Available Fields list onto the targets, or by clicking Add. All the fields you add appear in the list on the far right."),(0,n.kt)("li",{parentName:"ul"},"(Optional) If the data is unaggregated, consider applying an aggregation, such as Sum, or Average, to reduce the amount of data extracted."),(0,n.kt)("li",{parentName:"ul"},"(Optional) Apply filters to the data in order to reduce the number of rows."),(0,n.kt)("li",{parentName:"ul"},"Apply a date range. Date ranges are required by some connectors, such as Analytics, but are optional for other connector types."),(0,n.kt)("li",{parentName:"ul"},"Give your data source a name by clicking Untitled Data Source in the upper left."),(0,n.kt)("li",{parentName:"ul"},"(Optional) To automatically refresh your data, in the lower right, turn on Auto update and set an update schedule."),(0,n.kt)("li",{parentName:"ul"},"In the lower right, click SAVE AND EXTRACT.")),(0,n.kt)("p",null,"You can now add this data source to a report or explore further by clicking one of the buttons in the upper right.\nThis extract will now be visible in \u201cData Sources\u201d."),(0,n.kt)("h2",{id:"adding-an-extract-in-the-dashboard"},"Adding an extract in the dashboard"),(0,n.kt)("p",null,"Alternatively, you can create a report and configure the data extract using the ADD DATA button in a specific dashboard and follow the above steps.\nFor this data to be available for other dashboards it needs to be made reusable:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Resource>Manage added data sources and select MAKE REUSABLE")),(0,n.kt)("h2",{id:"update-extracted-data"},"Update extracted data"),(0,n.kt)("p",null,"To update the information contained in a data extract, turn on \u201cAuto update\u201d or edit the data source connection and extract the data again:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Sign in to ",(0,n.kt)("a",{parentName:"li",href:"https://datastudio.google.com/"},"Data Studio")),(0,n.kt)("li",{parentName:"ul"},"Navigate to the data sources ",(0,n.kt)("a",{parentName:"li",href:"https://datastudio.google.com/navigation/datasources"},"Home page"),"."),(0,n.kt)("li",{parentName:"ul"},"Locate the extracted data source."),(0,n.kt)("li",{parentName:"ul"},"Click the data source to edit it."),(0,n.kt)("li",{parentName:"ul"},"In the upper left, click EDIT CONNECTION. You must be the data source owner to see this option."),(0,n.kt)("li",{parentName:"ul"},"(Optional) To automatically refresh your data, in the lower right, turn on Auto update and set an update schedule."),(0,n.kt)("li",{parentName:"ul"},"In the lower right, click SAVE AND EXTRACT.")),(0,n.kt)("p",null,"For further details see the ",(0,n.kt)("a",{parentName:"p",href:"https://support.google.com/datastudio/answer/9019969?hl=en"},"Google documentation")))}p.isMDXComponent=!0}}]);