(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{123:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return b}));var n=a(0),i=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=i.a.createContext({}),p=function(e){var t=i.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=p(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(a),d=n,b=u["".concat(o,".").concat(d)]||u[d]||m[d]||r;return a?i.a.createElement(b,s(s({ref:t},l),{},{components:a})):i.a.createElement(b,s({ref:t},l))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var l=2;l<r;l++)o[l]=a[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},82:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return p}));var n=a(3),i=a(7),r=(a(0),a(123)),o={title:"Guide to testing data quality in Glue Jobs",description:"A guide to continuous data quality testing in Glue Jobs",layout:"playbook_js",tags:"playbook"},s={unversionedId:"playbook/data-quality-testing-guide",id:"playbook/data-quality-testing-guide",isDocsHomePage:!1,title:"Guide to testing data quality in Glue Jobs",description:"A guide to continuous data quality testing in Glue Jobs",source:"@site/docs/playbook/data-quality-testing-guide.md",slug:"/playbook/data-quality-testing-guide",permalink:"/Data-Platform-Playbook/playbook/data-quality-testing-guide",editUrl:"https://github.com/LBHackney-IT/data-platform-playbook/edit/master/docs/playbook/data-quality-testing-guide.md",version:"current",sidebar:"docs",previous:{title:"Connecting to the redshift cluster from Google Data Studio",permalink:"/Data-Platform-Playbook/playbook/connecting-to-redshift-from-data-studio"},next:{title:"Exporting database snapshot to the Data Platform Landing Zone",permalink:"/Data-Platform-Playbook/playbook/exporting-snapshot-to-landing-zone"}},c=[{value:"Resources",id:"resources",children:[]},{value:"Prerequisites",id:"prerequisites",children:[{value:"Example Check",id:"example-check",children:[]},{value:"Example Anomaly Detection",id:"example-anomaly-detection",children:[]},{value:"Stopping Glue jobs when constraint checks fail",id:"stopping-glue-jobs-when-constraint-checks-fail",children:[]}]}],l={toc:c};function p(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"resources"},"Resources"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://github.com/awslabs/python-deequ"},"PyDeequ README"))),Object(r.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(r.b)("p",null,"Update the job arguments of your Glue job to include:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Extra jars: ",Object(r.b)("inlineCode",{parentName:"li"},"--extra-jars = s3://dataplatform-stg-glue-scripts/jars/deequ-1.0.3.jar")," "),Object(r.b)("li",{parentName:"ul"},"Extra Python files: ",Object(r.b)("inlineCode",{parentName:"li"},"--extra-py-file = s3://dataplatform-stg-glue-scripts/python-modules/pydeequ-1.0.1.zip")," "),Object(r.b)("li",{parentName:"ul"},"Metrics repository S3 target location using the template format:\n",Object(r.b)("inlineCode",{parentName:"li"},"--deequ_metrics_location = s3://dataplatform-stg-EXAMPLE-zone/quality-metrics/department=EXAMPLE/dataset=EXAMPLE/deequ-metrics.json"))),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"There is a ",Object(r.b)("a",{parentName:"p",href:"https://github.com/awslabs/python-deequ/issues/7"},"defect with PyDeequ"),' which causes the Glue Spark session to hang.\nWhile this issue still exists, we recommend wrapping your data quality verification code in a "try/finally" block (see example ',Object(r.b)("a",{parentName:"p",href:"https://github.com/LBHackney-IT/Data-Platform/blob/6468778d865c6203d1d11df78805720da9cd22b5/scripts/elec_mech_fire_tv_aerials_cleaning.py#L79-L105"},"here"),")."),Object(r.b)("pre",{parentName:"div"},Object(r.b)("code",{parentName:"pre",className:"language-python"},"try:\n  ...\nfinally:\n    spark_session.sparkContext._gateway.close()\n    spark_session.stop()\n")))),Object(r.b)("h3",{id:"example-check"},"Example Check"),Object(r.b)("p",null,"Here is an example of using deequ checks to validate a dataframe, and storing related metrics to S3.\nThe ",Object(r.b)("inlineCode",{parentName:"p"},"description_of_work")," column is checked to be complete, and ",Object(r.b)("inlineCode",{parentName:"p"},"work_priority_priority_code")," between\n1 and 4 inclusively.\nThere is also the option to include a hint message on each of the checks which will be\ndisplayed to the user in the event there is a failing constraint to help diagnose the problem.\nFor example, the ",Object(r.b)("inlineCode",{parentName:"p"},"hasMin"),' check has the hint message: "',Object(r.b)("inlineCode",{parentName:"p"},"The minimum(work_priority_priority_code) >= 1')"),'". '),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},'from helpers import get_metrics_target_location\nfrom pydeequ.checks import Check, CheckLevel\nfrom pydeequ.repository import FileSystemMetricsRepository, ResultKey\nfrom pydeequ.verification import VerificationSuite, VerificationResult, RelativeRateOfChangeStrategy\n\nmetrics_target_location = get_metrics_target_location()\n\nmetricsRepository = FileSystemMetricsRepository(spark_session, metrics_target_location)\nresultKey = ResultKey(spark_session, ResultKey.current_milli_time(), {})\n\ncheckResult = VerificationSuite(spark_session) \\\n    .onData(df) \\\n    .useRepository(metricsRepository) \\\n    .addCheck(Check(spark_session, CheckLevel.Error, "data quality checks") \\\n        .hasMin("work_priority_priority_code", lambda x: x >= 1, \'The minimum(work_priority_priority_code) >= 1\') \\\n        .hasMax("work_priority_priority_code", lambda x: x <= 4, \'The maximum(work_priority_priority_code) <= 4\')  \\\n        .isComplete("description_of_work")) \\\n    .saveOrAppendResult(resultKey) \\\n    .run()\n    \ncheckResult_df = VerificationResult.checkResultsAsDataFrame(spark_session, checkResult)\ncheckResult_df.show()\n')),Object(r.b)("p",null,"Here is a ",Object(r.b)("a",{parentName:"p",href:"https://pydeequ.readthedocs.io/en/latest/pydeequ.html#module-pydeequ.checks"},"list of checks")," that are available to use."),Object(r.b)("h3",{id:"example-anomaly-detection"},"Example Anomaly Detection"),Object(r.b)("p",null,"Anomaly detection uses historic metrics to determine if a value is invalid.\nFor example, we check if the size of a dataframe has increased by more than twice the previous size."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},"from helpers import get_metrics_target_location\nfrom pydeequ.verification import VerificationSuite, VerificationResult\nfrom pydeequ.repository import FileSystemMetricsRepository, ResultKey\nfrom pydeequ.anomaly_detection import RelativeRateOfChangeStrategy\n\nmetrics_target_location = get_metrics_target_location()\n\nmetricsRepository = FileSystemMetricsRepository(spark_session, metrics_target_location)\nresultKey = ResultKey(spark_session, ResultKey.current_milli_time(), {})\n\nanomalyCheckResult = VerificationSuite(spark_session) \\\n    .onData(df) \\\n    .useRepository(metricsRepository) \\\n    .addAnomalyCheck(RelativeRateOfChangeStrategy(maxRateIncrease = 2.0), Size()) \\\n    .saveOrAppendResult(resultKey) \\\n    .run()\n\nanomalyCheckResult_df = VerificationResult.checkResultsAsDataFrame(spark_session, anomalyCheckResult)\nanomalyCheckResult_df.show()\n")),Object(r.b)("p",null,"Here is a ",Object(r.b)("a",{parentName:"p",href:"https://pydeequ.readthedocs.io/en/latest/pydeequ.html#module-pydeequ.checks"},"list of anomaly detection types")," that are available to use."),Object(r.b)("h3",{id:"stopping-glue-jobs-when-constraint-checks-fail"},"Stopping Glue jobs when constraint checks fail"),Object(r.b)("p",null,"In order to ensure that only trusted data is outputted from your Glue job, it is important\nto make an assertion against your constraints to check that they have been satisfied."),Object(r.b)("p",null,"You can do this by including a helper function called ",Object(r.b)("inlineCode",{parentName:"p"},"cancel_job_if_failing_quality_checks()"),"\nin your script (see ",Object(r.b)("a",{parentName:"p",href:"https://github.com/LBHackney-IT/Data-Platform/blob/main/scripts/helpers.py"},"helpers.py")," for more info)."),Object(r.b)("p",null,"When a constraint check fails, an error message will be provided which might look something like\nthe below message:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-markdown"},"  Exception: data quality checks. Value: 1.0 does not meet the constraint requirement! \n  The minimum(work_priority_priority_code) >= 2 \n  | Anomaly check for Size(None). Value: 486.0 does not meet the constraint requirement!\n")),Object(r.b)("p",null,"Multiple constraint failures are delimited by a ",Object(r.b)("inlineCode",{parentName:"p"},"|")," character in the error message."))}p.isMDXComponent=!0}}]);