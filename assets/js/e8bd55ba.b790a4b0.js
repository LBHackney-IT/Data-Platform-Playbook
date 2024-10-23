"use strict";(self.webpackChunkdata_platform_playbook=self.webpackChunkdata_platform_playbook||[]).push([[2323],{1030:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>l});var n=a(4848),o=a(8453);const i={title:"Create a data extract in Google Data Studio",description:"Create an extract to optimise dashboard performance",layout:"playbook_js",tags:["playbook"]},r=void 0,d={id:"playbook/querying-and-analysing-data/create_a_data_extract_in_GDS",title:"Create a data extract in Google Data Studio",description:"Create an extract to optimise dashboard performance",source:"@site/docs/playbook/querying-and-analysing-data/create_a_data_extract_in_GDS.md",sourceDirName:"playbook/querying-and-analysing-data",slug:"/playbook/querying-and-analysing-data/create_a_data_extract_in_GDS",permalink:"/Data-Platform-Playbook/playbook/querying-and-analysing-data/create_a_data_extract_in_GDS",draft:!1,unlisted:!1,editUrl:"https://github.com/LBHackney-IT/data-platform-playbook/edit/master/docs/playbook/querying-and-analysing-data/create_a_data_extract_in_GDS.md",tags:[{inline:!0,label:"playbook",permalink:"/Data-Platform-Playbook/tags/playbook"}],version:"current",frontMatter:{title:"Create a data extract in Google Data Studio",description:"Create an extract to optimise dashboard performance",layout:"playbook_js",tags:["playbook"]},sidebar:"docs",previous:{title:"Connecting to the Redshift cluster from Google Data Studio",permalink:"/Data-Platform-Playbook/playbook/querying-and-analysing-data/connecting-to-redshift-from-data-studio"},next:{title:"Geospatial enrichment",permalink:"/Data-Platform-Playbook/playbook/querying-and-analysing-data/geospatial-enrichments"}},s={},l=[{value:"Introduction",id:"introduction",level:2},{value:"Limitations",id:"limitations",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Create an extracted data source",id:"create-an-extracted-data-source",level:2},{value:"Adding an extract in the dashboard",id:"adding-an-extract-in-the-dashboard",level:2},{value:"Update extracted data",id:"update-extracted-data",level:2}];function c(e){const t={a:"a",h2:"h2",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,n.jsx)(t.p,{children:"When using a redshift connection in Google Data Studio simple dashboard selections can take a long time to return records. This is because each element on the page is querying the redshift cluster separately, despite the \u201cData Freshness\u201d being set to 12 hours."}),"\n",(0,n.jsx)(t.p,{children:"To overcome this you can create a \u201cData Extract\u201d of an existing data connection which is then cached and returns results much quicker. The Data Extract can also be refreshed at set intervals and \u201cshared\u201d for use in other dashboards."}),"\n",(0,n.jsx)(t.p,{children:"It is highly recommended that the data extract is created before the dashboard is developed as any calculated fields or dimensions may need to be rebuilt."}),"\n",(0,n.jsx)(t.h2,{id:"limitations",children:"Limitations"}),"\n",(0,n.jsx)(t.p,{children:"Google Data Studio has row limits relating to different data sources and the limit for the PostGresSQL connection used for the Data Platform is 100K."}),"\n",(0,n.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["An initial data connection to the Data Platform must be created before creating a data extract. If using a redshift connection the guidance on how to set up the initial connection is ",(0,n.jsx)(t.a,{href:"https://lbhackney-it.github.io/Data-Platform-Playbook/playbook/connecting-to-redshift-from-data-studio/",children:"here"})]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"create-an-extracted-data-source",children:"Create an extracted data source"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Sign in to ",(0,n.jsx)(t.a,{href:"https://datastudio.google.com/",children:"Data Studio"}),"."]}),"\n",(0,n.jsx)(t.li,{children:"In the top left, click the + button, then select Data Source"}),"\n",(0,n.jsx)(t.li,{children:"In the connectors list, select Extract Data."}),"\n",(0,n.jsx)(t.li,{children:"Select an existing data source to extract from."}),"\n",(0,n.jsx)(t.li,{children:"Select the dimensions and metrics to extract by dragging them from the Available Fields list onto the targets, or by clicking Add. All the fields you add appear in the list on the far right."}),"\n",(0,n.jsx)(t.li,{children:"(Optional) If the data is unaggregated, consider applying an aggregation, such as Sum, or Average, to reduce the amount of data extracted."}),"\n",(0,n.jsx)(t.li,{children:"(Optional) Apply filters to the data in order to reduce the number of rows."}),"\n",(0,n.jsx)(t.li,{children:"Apply a date range. Date ranges are required by some connectors, such as Analytics, but are optional for other connector types."}),"\n",(0,n.jsx)(t.li,{children:"Give your data source a name by clicking Untitled Data Source in the upper left."}),"\n",(0,n.jsx)(t.li,{children:"(Optional) To automatically refresh your data, in the lower right, turn on Auto update and set an update schedule."}),"\n",(0,n.jsx)(t.li,{children:"In the lower right, click SAVE AND EXTRACT."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"You can now add this data source to a report or explore further by clicking one of the buttons in the upper right.\nThis extract will now be visible in \u201cData Sources\u201d."}),"\n",(0,n.jsx)(t.h2,{id:"adding-an-extract-in-the-dashboard",children:"Adding an extract in the dashboard"}),"\n",(0,n.jsx)(t.p,{children:"Alternatively, you can create a report and configure the data extract using the ADD DATA button in a specific dashboard and follow the above steps.\nFor this data to be available for other dashboards it needs to be made reusable:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Resource>Manage added data sources and select MAKE REUSABLE"}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"update-extracted-data",children:"Update extracted data"}),"\n",(0,n.jsx)(t.p,{children:"To update the information contained in a data extract, turn on \u201cAuto update\u201d or edit the data source connection and extract the data again:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Sign in to ",(0,n.jsx)(t.a,{href:"https://datastudio.google.com/",children:"Data Studio"})]}),"\n",(0,n.jsxs)(t.li,{children:["Navigate to the data sources ",(0,n.jsx)(t.a,{href:"https://datastudio.google.com/navigation/datasources",children:"Home page"}),"."]}),"\n",(0,n.jsx)(t.li,{children:"Locate the extracted data source."}),"\n",(0,n.jsx)(t.li,{children:"Click the data source to edit it."}),"\n",(0,n.jsx)(t.li,{children:"In the upper left, click EDIT CONNECTION. You must be the data source owner to see this option."}),"\n",(0,n.jsx)(t.li,{children:"(Optional) To automatically refresh your data, in the lower right, turn on Auto update and set an update schedule."}),"\n",(0,n.jsx)(t.li,{children:"In the lower right, click SAVE AND EXTRACT."}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["For further details see the ",(0,n.jsx)(t.a,{href:"https://support.google.com/datastudio/answer/9019969?hl=en",children:"Google documentation"})]})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},8453:(e,t,a)=>{a.d(t,{R:()=>r,x:()=>d});var n=a(6540);const o={},i=n.createContext(o);function r(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);