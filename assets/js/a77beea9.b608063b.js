"use strict";(self.webpackChunkdata_platform_playbook=self.webpackChunkdata_platform_playbook||[]).push([[2116],{1392:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var a=n(4848),o=n(8453);const i={title:"Holt Winters ETS",description:"Forecast using Holt Winters ETS",layout:"playbook_js",tags:["playbook"]},s="Holt Winters ETS",r={id:"playbook/querying-and-analysing-data/time-series-analysis/holt_winters_ets",title:"Holt Winters ETS",description:"Forecast using Holt Winters ETS",source:"@site/docs/playbook/querying-and-analysing-data/time-series-analysis/5-holt_winters_ets.md",sourceDirName:"playbook/querying-and-analysing-data/time-series-analysis",slug:"/playbook/querying-and-analysing-data/time-series-analysis/holt_winters_ets",permalink:"/Data-Platform-Playbook/playbook/querying-and-analysing-data/time-series-analysis/holt_winters_ets",draft:!1,unlisted:!1,editUrl:"https://github.com/LBHackney-IT/data-platform-playbook/edit/master/docs/playbook/querying-and-analysing-data/time-series-analysis/5-holt_winters_ets.md",tags:[{inline:!0,label:"playbook",permalink:"/Data-Platform-Playbook/tags/playbook"}],version:"current",sidebarPosition:5,frontMatter:{title:"Holt Winters ETS",description:"Forecast using Holt Winters ETS",layout:"playbook_js",tags:["playbook"]},sidebar:"docs",previous:{title:"Exponential Smoothing ETS",permalink:"/Data-Platform-Playbook/playbook/querying-and-analysing-data/time-series-analysis/exponential_smoothing_ets"},next:{title:"Connecting to the Redshift cluster from Google Data Studio",permalink:"/Data-Platform-Playbook/playbook/querying-and-analysing-data/connecting-to-redshift-from-data-studio"}},l={},d=[];function c(e){const t={code:"code",h1:"h1",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"holt-winters-ets",children:"Holt Winters ETS"})}),"\n",(0,a.jsx)(t.p,{children:"The Holt winters function in the helpers will deliver a generic commonly used forecast. For people who don't really want to tinker with the Holt Winters function"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"from scripts.helpers.time_series_helpers import forecast_holt_winters_ets\n"})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:'def holt_winters (\n  dataframe: pd.DataFrame,\n  forecast_count: int,\n  seasonal_period: str ="none",\n  trend: str ="add",\n  use_boxcox: bool = False,\n  initialization_method: str ="estimated"):\n\nReturns:\n  Forecast Results (Dataframe)\n'})}),"\n",(0,a.jsx)(t.p,{children:"Required Arguments:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Dataframe (Dataframe): Dataframe containing training timeseries dataset. Must be equally spaced with Date in the Index"}),"\n",(0,a.jsx)(t.li,{children:"forecast_count (int): Amount of data points to forecast"}),"\n",(0,a.jsx)(t.li,{children:'seasonal_period (String): Period for the data. "M" /  "W" / "Q" this will fill in the parameters for the model based on very commonly used values, not including days. Use "none" if the data is not seasonal'}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"Optional:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"trend (String): The trend component model. \u201cadd\u201d (default), \u201cmul\u201d, or None."}),"\n",(0,a.jsx)(t.li,{children:"use_boxcox (bool): Should the Box-Cox transform be applied to the data first? If \u2018log\u2019 then apply the log. If float then use the value as lambda. Defaults to False"}),"\n",(0,a.jsxs)(t.li,{children:["initialization_method (String): Method for initialize the recursions. One of",":None",",\u2018estimated\u2019 (Default),\u2018heuristic\u2019,\u2018legacy-heuristic\u2019,\u2018known\u2019"]}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"For example, if you have monthly data, it is quite common to want to check for yearly seasonality, simply doing the following will give you a forecast"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:'forecast = forecast_holt_winters_ets(df,12,"M")\n'})}),"\n",(0,a.jsx)(t.p,{children:"This gives you the next 12 months, with yearly seasonality taken into account, where we use 12 as the cycle"})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>r});var a=n(6540);const o={},i=a.createContext(o);function s(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);