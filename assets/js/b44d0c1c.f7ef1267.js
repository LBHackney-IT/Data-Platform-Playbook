"use strict";(self.webpackChunkdata_platform_playbook=self.webpackChunkdata_platform_playbook||[]).push([[301],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return f}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),l=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(a),f=n,m=u["".concat(c,".").concat(f)]||u[f]||d[f]||o;return a?r.createElement(m,i(i({ref:t},p),{},{components:a})):r.createElement(m,i({ref:t},p))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<o;l++)i[l]=a[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},3437:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return d}});var r=a(3117),n=a(102),o=(a(7294),a(3905)),i=["components"],s={id:"spatial-data-processing",title:"Spatial Data Processing - ADR 015",description:"",tags:["adr"],number:"15","date-issued":"2021-03-23",status:"Proposed"},c=void 0,l={unversionedId:"architecture-decisions/records/spatial-data-processing",id:"architecture-decisions/records/spatial-data-processing",title:"Spatial Data Processing - ADR 015",description:"",source:"@site/docs/architecture-decisions/records/015-spatial-data-processing.md",sourceDirName:"architecture-decisions/records",slug:"/architecture-decisions/records/spatial-data-processing",permalink:"/Data-Platform-Playbook/architecture-decisions/records/spatial-data-processing",draft:!1,editUrl:"https://github.com/LBHackney-IT/data-platform-playbook/edit/master/docs/architecture-decisions/records/015-spatial-data-processing.md",tags:[{label:"adr",permalink:"/Data-Platform-Playbook/tags/adr"}],version:"current",sidebarPosition:15,frontMatter:{id:"spatial-data-processing",title:"Spatial Data Processing - ADR 015",description:"",tags:["adr"],number:"15","date-issued":"2021-03-23",status:"Proposed"},sidebar:"docs",previous:{title:"Initial Extract of Tenure Data  - ADR 014",permalink:"/Data-Platform-Playbook/architecture-decisions/records/initial-extract-of-tenure-data"},next:{title:"Amundsen deployment",permalink:"/Data-Platform-Playbook/spikes/amundsen-deployment"}},p={},d=[{value:"Context",id:"context",level:2},{value:"Decision",id:"decision",level:2},{value:"Consequences",id:"consequences",level:2}],u={toc:d};function f(e){var t=e.components,a=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"context"},"Context"),(0,o.kt)("p",null,"For many services it is important to know which ward, LSOA or NHS area a specific record relates to. To provide this information we need to perform spatial joins between"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"the service area records, georeferenced by UPRNs or spatial coordinates "),(0,o.kt)("li",{parentName:"ul"},"and areas from reference spatial datasets held in the GIS database (Geolive)")),(0,o.kt)("p",null,"Geometric data types and spatial joins (aka point-on-area operations) are not supported by Pyspark so we have to use an additional library. "),(0,o.kt)("p",null,"The natural choice was Spatial Spark, now known as Apache Sedona, a geoprocessing library based on Spark. Unfortunately, we have not been able to install Apache Sedona in Glue, even with the help of AWS support. Other government bodies working with spatial data are recommending to use 'low-level' python libraries such as Shapely (on which Sedona is partly based) and then redevelop the needed functionalities, instead of installing large frameworks."),(0,o.kt)("h2",{id:"decision"},"Decision"),(0,o.kt)("p",null,"We are using Shapely to decode geometries from our spatial database (encoded in WKB format) and Geopandas to perform spatial joins. An example can be found in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/LBHackney-IT/Data-Platform/blob/spatial-enrichment-script/scripts/jobs/geospatial/spatial_enrichment.py"},"Spatial enrichment job"),"."),(0,o.kt)("h2",{id:"consequences"},"Consequences"),(0,o.kt)("p",null,"Using Geopandas in our jobs means we need to convert spark dataframes into pandas dataframes before processing them, and then back to Spark dataframes to write the data to S3. These conversions are probably less efficient than using Spark all the way. We can also suspect Sedona works faster with very big datasets. However, Geopandas has been satisfactory with our use cases so far."))}f.isMDXComponent=!0}}]);