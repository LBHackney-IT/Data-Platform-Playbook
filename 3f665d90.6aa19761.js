(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{112:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return m}));var n=a(0),o=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},b=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=p(a),u=n,m=b["".concat(i,".").concat(u)]||b[u]||d[u]||r;return a?o.a.createElement(m,l(l({ref:t},s),{},{components:a})):o.a.createElement(m,l({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<r;s++)i[s]=a[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},80:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return p}));var n=a(3),o=a(7),r=(a(0),a(112)),i={title:"Ingest manually uploaded csv files",description:"Ingest data from csv files",layout:"playbook_js",tags:"playbook"},l={unversionedId:"playbook/ingest-data-from-csv-files",id:"playbook/ingest-data-from-csv-files",isDocsHomePage:!1,title:"Ingest manually uploaded csv files",description:"Ingest data from csv files",source:"@site/docs/playbook/ingest-data-from-csv-files.md",slug:"/playbook/ingest-data-from-csv-files",permalink:"/Data-Platform-Playbook/playbook/ingest-data-from-csv-files",editUrl:"https://github.com/LBHackney-IT/data-platform-playbook/edit/master/docs/playbook/ingest-data-from-csv-files.md",version:"current",sidebar:"docs",previous:{title:"Exporting database snapshot to the Data Platform Landing Zone",permalink:"/Data-Platform-Playbook/playbook/exporting-snapshot-to-landing-zone"},next:{title:"Exporting database snapshots to the Data Platform Landing Zone",permalink:"/Data-Platform-Playbook/docs/exporting-snapshot-to-landing-zone"}},c=[],s={toc:c};function p(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"This functionality needs to be configured for your department before it can be used.\nPlease contact the Data Platform team if you haven't used this before."))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Sign in to the AWS Management Console and open the ",Object(r.b)("a",{parentName:"p",href:"https://console.aws.amazon.com/s3/"},"Amazon S3 console"),".")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"In the Buckets list, choose a landing zone bucket, either the ",Object(r.b)("inlineCode",{parentName:"p"},"dataplatform-stg-landing-zone"),"\nor ",Object(r.b)("inlineCode",{parentName:"p"},"dataplatform-prod-landing-zone")," bucket.\nNavigate to your departments manual upload folder, see below for structure."),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre"},"<department>/\n\u2514\u2500\u2500 manual/\n"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},'Inside of the manual folder, create a new folder for the dataset you wish to create inside the data platform.\nThe name of the folder you create here will be used throughout the platform, e.g. if you create a folder\ncalled "cake-designs" you will see a table called "cake_designs" within ',Object(r.b)("a",{parentName:"p",href:"/Data-Platform-Playbook/playbook/querying-data-using-sql"},"AWS Athena"),".")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Inside of your dataset folder, upload a CSV containing your dataset.  Any CSVs uploaded within this folder\nwill be combined into one dataset, and should have a matching set of columns.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Now switch to ",Object(r.b)("a",{parentName:"p",href:"https://eu-west-2.console.aws.amazon.com/glue/home?region=eu-west-2#etl:tab=jobs"},"AWS Glue Jobs"),", where you will run the job called\n",Object(r.b)("inlineCode",{parentName:"p"},"<department> copy manually uploaded CSVs to raw"),'.\nSelect this job and click the "Run job" option underneath the Action menu.')),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},'Observe the progress of this job using the "History" tab, and wait for the "Run status" to reach "Succeeded".\nThis job will have created a S3 folder structure as shown below inside the Raw zone, and an Apache Parquet file\ncontaining your CSV data inside of there.'),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre"},"<department>/\n\u2514\u2500\u2500 manual/\n    \u2514\u2500\u2500 <dataset-name>/\n        \u2514\u2500\u2500 import_year=<year>/\n            \u2514\u2500\u2500 import_month=<month>/\n                \u2514\u2500\u2500 import_day=<day>/\n"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"To access this data within ",Object(r.b)("a",{parentName:"p",href:"/Data-Platform-Playbook/playbook/querying-data-using-sql"},"AWS Athena"),", you will need to crawl this data, using\nthe matching crawler.  Navigate to the ",Object(r.b)("a",{parentName:"p",href:"https://eu-west-2.console.aws.amazon.com/glue/home?region=eu-west-2#catalog:tab=crawlerss"},"AWS Glue Crawler")," interface, find the job\nnamed ",Object(r.b)("inlineCode",{parentName:"p"},"raw-zone-<department>-manual-uploads-crawler"),', and select "Run crawler".  Observe the job within the\nconsole until it\'s status returns to "Ready".')),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Once crawled, there will be a newly created table within the database ",Object(r.b)("inlineCode",{parentName:"p"},"raw-zone-<department>-manual-uploads-database"),"."))))}p.isMDXComponent=!0}}]);