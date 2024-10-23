"use strict";(self.webpackChunkdata_platform_playbook=self.webpackChunkdata_platform_playbook||[]).push([[2112],{7422:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>n,metadata:()=>o,toc:()=>d});var s=i(4848),a=i(8453);const n={title:"1. Introduction to Time Series Helpers",description:"Introduction to Time Series Helpers",layout:"playbook_js",tags:["playbook"]},r="Introduction to Time Series Helpers",o={id:"playbook/querying-and-analysing-data/time-series-analysis/introduction",title:"1. Introduction to Time Series Helpers",description:"Introduction to Time Series Helpers",source:"@site/docs/playbook/querying-and-analysing-data/time-series-analysis/1-introduction.md",sourceDirName:"playbook/querying-and-analysing-data/time-series-analysis",slug:"/playbook/querying-and-analysing-data/time-series-analysis/introduction",permalink:"/Data-Platform-Playbook/playbook/querying-and-analysing-data/time-series-analysis/introduction",draft:!1,unlisted:!1,editUrl:"https://github.com/LBHackney-IT/data-platform-playbook/edit/master/docs/playbook/querying-and-analysing-data/time-series-analysis/1-introduction.md",tags:[{inline:!0,label:"playbook",permalink:"/Data-Platform-Playbook/tags/playbook"}],version:"current",sidebarPosition:1,frontMatter:{title:"1. Introduction to Time Series Helpers",description:"Introduction to Time Series Helpers",layout:"playbook_js",tags:["playbook"]},sidebar:"docs",previous:{title:"Glue Studio workshop with Parking Analysts",permalink:"/Data-Platform-Playbook/workshop/aws_glue_studio_parking"},next:{title:"2. Basic Time Series helpers",permalink:"/Data-Platform-Playbook/playbook/querying-and-analysing-data/time-series-analysis/basic_helpers"}},l={},d=[{value:"What is a Time Series Forecast",id:"what-is-a-time-series-forecast",level:3},{value:"What are Time Series helpers and what are we aiming to achieve",id:"what-are-time-series-helpers-and-what-are-we-aiming-to-achieve",level:3},{value:"When you should and shouldn&#39;t be using these helpers",id:"when-you-should-and-shouldnt-be-using-these-helpers",level:3},{value:"Forecasting best practises",id:"forecasting-best-practises",level:3},{value:"What is seasonality",id:"what-is-seasonality",level:3},{value:"Pre-requisites",id:"pre-requisites",level:3},{value:"Glue Job Prequisites",id:"glue-job-prequisites",level:3}];function c(e){const t={code:"code",h1:"h1",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"introduction-to-time-series-helpers",children:"Introduction to Time Series Helpers"})}),"\n",(0,s.jsx)(t.h3,{id:"what-is-a-time-series-forecast",children:"What is a Time Series Forecast"}),"\n",(0,s.jsx)(t.p,{children:"A time series is a sequence of data points indexed in time order. It is most commonly a sequence of discrete-time data taken at successive equally spaced points in time."}),"\n",(0,s.jsx)(t.p,{children:"A time series forecast is when you use a predictive model to predict future events. It\u2019s based on the idea that patterns and trends in data can be identified over time, and these patterns can be used to forecast future data points."}),"\n",(0,s.jsx)(t.h3,{id:"what-are-time-series-helpers-and-what-are-we-aiming-to-achieve",children:"What are Time Series helpers and what are we aiming to achieve"}),"\n",(0,s.jsx)(t.p,{children:"The Time Series Helpers are some functions you can import into your Glue Script so that very common, repetitive tasks can be done in a faster and automated way"}),"\n",(0,s.jsx)(t.p,{children:"Examples of functions we have at the moment are"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Dataframe reshaping"}),"\n",(0,s.jsx)(t.li,{children:"Train Test splitting by record count"}),"\n",(0,s.jsx)(t.li,{children:"Start End Date finder"}),"\n",(0,s.jsx)(t.li,{children:"Various Time Series Forecasting functions with values filled in"}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"when-you-should-and-shouldnt-be-using-these-helpers",children:"When you should and shouldn't be using these helpers"}),"\n",(0,s.jsx)(t.p,{children:"You should use these helpers if"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"You just want some simple forecasting with minimal knowledge of time series forecasting nuances"}),"\n",(0,s.jsx)(t.li,{children:"You only want the mean forecast results"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"You should NOT use these helpers if"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"You want FULL control of the model"}),"\n",(0,s.jsx)(t.li,{children:"You have a different seasonality period to the defaults set out here"}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"forecasting-best-practises",children:"Forecasting best practises"}),"\n",(0,s.jsx)(t.p,{children:"Here are some general tips and best practises for forecasting"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Have as much data as possible, and at minimum, at least 2 years of data"}),"\n",(0,s.jsx)(t.li,{children:"Don't forecast too far ahead. The further you forecast, the less likely it will be correct. You don't really want to be predicting 2 years ahead with 2 years of Data."}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"what-is-seasonality",children:"What is seasonality"}),"\n",(0,s.jsx)(t.p,{children:"Seasonality in a time series refers to periodic fluctuations in the data that occur at regular intervals. These intervals could be hourly, daily, weekly, monthly, quarterly, yearly, or at any other fixed period."}),"\n",(0,s.jsx)(t.p,{children:"For our helper functions, we have these seasonality settings automatically dialed in"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Months - 12"}),"\n",(0,s.jsx)(t.li,{children:"Weeks - 52"}),"\n",(0,s.jsx)(t.li,{children:"Quarters - 4"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"These are very common values for seasonality cycles, which will require at least 2 years of Data"}),"\n",(0,s.jsx)(t.h3,{id:"pre-requisites",children:"Pre-requisites"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Data aggregated into a Date + Metric format.","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"For example, the \u201cCount\u201d of records each week, means you need to make a Dataframe of \u201cCount of Records\u201d by week"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.li,{children:"Pandas Dataframe Format"}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"glue-job-prequisites",children:"Glue Job Prequisites"}),"\n",(0,s.jsx)(t.p,{children:"At the moment, you need to load all the dependancies of the helper scripts into AWS Glue."}),"\n",(0,s.jsx)(t.p,{children:'You can put this into the "Job Parameters" field in AWS Glue to do that'}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"--additional-python-modules | statsmodels==0.14.0, prophet\n"})}),"\n",(0,s.jsx)(t.p,{children:"This can be found in Job Details -> Scroll to the bottom -> Advanced Properties -> Job Parameters"})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8453:(e,t,i)=>{i.d(t,{R:()=>r,x:()=>o});var s=i(6540);const a={},n=s.createContext(a);function r(e){const t=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(n.Provider,{value:t},e.children)}}}]);