"use strict";(self.webpackChunkdata_platform_playbook=self.webpackChunkdata_platform_playbook||[]).push([[5303],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return d}});var i=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=i.createContext({}),u=function(e){var t=i.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=u(e.components);return i.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(a),d=n,h=m["".concat(l,".").concat(d)]||m[d]||p[d]||o;return a?i.createElement(h,r(r({ref:t},c),{},{components:a})):i.createElement(h,r({ref:t},c))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,r=new Array(o);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,r[1]=s;for(var u=2;u<o;u++)r[u]=a[u];return i.createElement.apply(null,r)}return i.createElement.apply(null,a)}m.displayName="MDXCreateElement"},6833:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return m}});var i=a(7462),n=a(3366),o=(a(7294),a(3905)),r=["components"],s={id:"data-quality-testing-guide",title:"Guide to testing data quality in Glue Jobs",description:"A guide to continuous data quality testing in Glue Jobs",layout:"playbook_js",tags:["playbook"]},l=void 0,u={unversionedId:"playbook/transforming-data/guides-to-testing-in-the-platform/data-quality-testing-guide",id:"playbook/transforming-data/guides-to-testing-in-the-platform/data-quality-testing-guide",isDocsHomePage:!1,title:"Guide to testing data quality in Glue Jobs",description:"A guide to continuous data quality testing in Glue Jobs",source:"@site/docs/playbook/transforming-data/guides-to-testing-in-the-platform/003-data-quality-testing-guide.md",sourceDirName:"playbook/transforming-data/guides-to-testing-in-the-platform",slug:"/playbook/transforming-data/guides-to-testing-in-the-platform/data-quality-testing-guide",permalink:"/Data-Platform-Playbook/playbook/transforming-data/guides-to-testing-in-the-platform/data-quality-testing-guide",editUrl:"https://github.com/LBHackney-IT/data-platform-playbook/edit/master/docs/playbook/transforming-data/guides-to-testing-in-the-platform/003-data-quality-testing-guide.md",tags:[{label:"playbook",permalink:"/Data-Platform-Playbook/tags/playbook"}],version:"current",sidebarPosition:3,frontMatter:{id:"data-quality-testing-guide",title:"Guide to testing data quality in Glue Jobs",description:"A guide to continuous data quality testing in Glue Jobs",layout:"playbook_js",tags:["playbook"]},sidebar:"docs",previous:{title:"Ingesting Dynamo DB tables into the Landing Zone",permalink:"/Data-Platform-Playbook/playbook/ingesting-data/ingesting-dynamo-db-tables"},next:{title:"Guide to unit testing on the Data Platform",permalink:"/Data-Platform-Playbook/playbook/transforming-data/guides-to-testing-in-the-platform/unit-testing-guide"}},c=[{value:"Resources",id:"resources",children:[]},{value:"Context",id:"context",children:[]},{value:"Pre-requisites of data quality testing",id:"pre-requisites-of-data-quality-testing",children:[]},{value:"Pre-requisites to using PyDeequ",id:"pre-requisites-to-using-pydeequ",children:[]},{value:"Types of Data Quality tests",id:"types-of-data-quality-tests",children:[{value:"1. Fact-checking of data values example",id:"1-fact-checking-of-data-values-example",children:[]},{value:"2. Historical analysis of the dataset - Example Anomaly Detection",id:"2-historical-analysis-of-the-dataset---example-anomaly-detection",children:[]}]},{value:"Providing tags to metrics for verification constraint checks",id:"providing-tags-to-metrics-for-verification-constraint-checks",children:[]},{value:"Stopping Glue jobs when constraint checks fail",id:"stopping-glue-jobs-when-constraint-checks-fail",children:[]},{value:"Commit your data quality tests to your Glue job",id:"commit-your-data-quality-tests-to-your-glue-job",children:[]},{value:"Email notifications of failing Glue jobs",id:"email-notifications-of-failing-glue-jobs",children:[]}],p={toc:c};function m(e){var t=e.components,a=(0,n.Z)(e,r);return(0,o.kt)("wrapper",(0,i.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"resources"},"Resources"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/awslabs/python-deequ"},"PyDeequ README"))),(0,o.kt)("h2",{id:"context"},"Context"),(0,o.kt)("p",null,"Data Quality tests are used to verify the quality of production datasets.\nThey are intended to make assertions against the data itself as opposed to the code when unit testing."),(0,o.kt)("p",null,"This guide introduces the Python library 'PyDeequ' which can be used to perform data quality testing in your Glue scripts.\nPyDeequ allows you to calculate data quality metrics on your dataset, define and verify data quality constraints,\nand be informed about changes in the data distribution."),(0,o.kt)("h2",{id:"pre-requisites-of-data-quality-testing"},"Pre-requisites of data quality testing"),(0,o.kt)("p",null,"In order to efficiently test your data, it is necessary that you define and set the right expectations from the ETL process and the data itself.\nIt is therefore helpful to have a good understanding of the purpose of the data and think about the following questions:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"What do you want to achieve with your data?"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Knowing what the intended purpose of the data is and what specific business questions it will help answer."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"What does high-quality data mean to you?"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"You must understand the metrics that will help you to measure data quality.")))),(0,o.kt)("h2",{id:"pre-requisites-to-using-pydeequ"},"Pre-requisites to using PyDeequ"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Update the job arguments of your Glue job to include:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Metrics repository S3 target location using the template format:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},'"--deequ_metrics_location" = "s3://${module.<ZONE>_zone.bucket_id}/quality-metrics/department=<YOUR-DEPARTMENT-NAME>/dataset=<DATASET-NAME>/deequ-metrics.json"\n')),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("em",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"em"},"<ZONE>")," refers to either: ",(0,o.kt)("inlineCode",{parentName:"em"},"raw"),", ",(0,o.kt)("inlineCode",{parentName:"em"},"landing"),", ",(0,o.kt)("inlineCode",{parentName:"em"},"refined"),", or ",(0,o.kt)("inlineCode",{parentName:"em"},"trusted")," S3 zones.")),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("em",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"em"},"<YOUR-DEPARTMENT-NAME>")," and ",(0,o.kt)("inlineCode",{parentName:"em"},"<DATASET-NAME>")," must be all lowercase with words separated by hyphens.")),(0,o.kt)("p",{parentName:"li"},"For example:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},'"--deequ_metrics_location" = "s3://${module.refined_zone.bucket_id}/quality-metrics/department=housing-repairs/dataset=repairs-axis/deequ-metrics.json"\n')),(0,o.kt)("p",{parentName:"li"},"The metrics stored here can help you understand the profile of your data as well as help you come up with suitable constraints to measure the data quality of your dataset."))),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Import the following functions from PyDeequ in the top of your script.\nAs you are writing your tests, you may discover that you need additional functions from the PyDeequ library.\nYou may import these as required. The examples in this guide also introduce some functions that may be used.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"from pydeequ.repository import FileSystemMetricsRepository, ResultKey\nfrom pydeequ.verification import VerificationSuite, VerificationResult\nfrom helpers.data_quality_testing import get_metrics_target_location, cancel_job_if_failing_quality_checks\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Add the metrics target location and also a metrics repoistory and result key instance. This will ensure that data quality metrics are written to the deequ-metrics.json file in S3.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"metrics_target_location = get_metrics_target_location()\n\nmetricsRepository = FileSystemMetricsRepository(spark_session, metrics_target_location)\nresultKey = ResultKey(spark_session, ResultKey.current_milli_time(), {})\n")),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"There is a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/awslabs/python-deequ/issues/7"},"defect with PyDeequ"),' which causes the Glue Spark session to hang.\nWhile this issue still exists, we recommend wrapping your data quality verification code in a "try/finally" block (see example ',(0,o.kt)("a",{parentName:"p",href:"https://github.com/LBHackney-IT/Data-Platform/blob/6468778d865c6203d1d11df78805720da9cd22b5/scripts/elec_mech_fire_tv_aerials_cleaning.py#L79-L105"},"here"),")."),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-python"},"try:\n  ...\nfinally:\n    spark_session.sparkContext._gateway.close()\n    spark_session.stop()\n")))),(0,o.kt)("h2",{id:"types-of-data-quality-tests"},"Types of Data Quality tests"),(0,o.kt)("p",null,"We introduce two types of data quality tests; ",(0,o.kt)("strong",{parentName:"p"},"fact-checking of data values")," and ",(0,o.kt)("strong",{parentName:"p"},"historical analysis of the dataset")," being processed."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Fact-checking of data values"),": involves validating the values of columns and checking that they conform to set standards.\nFor example, an ID column only contains unique values or values in a given column should be in a specific range, between a minimum and maximum value.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Historical analysis of the dataset"),": involves analysing a dataset as it evolves over time and testing that the new data is consistent with a baseline.\nThis requires having a profile or baseline of the data to compare to."))),(0,o.kt)("p",null,"Below are examples of these two types of data quality tests."),(0,o.kt)("h3",{id:"1-fact-checking-of-data-values-example"},"1. Fact-checking of data values example"),(0,o.kt)("p",null,"Here is an example of using Deequ checks to validate a dataframe, and storing related metrics to S3.\nThe ",(0,o.kt)("inlineCode",{parentName:"p"},"description_of_work")," column is checked to be complete, and ",(0,o.kt)("inlineCode",{parentName:"p"},"work_priority_priority_code")," between\n1 and 4 inclusively.\nThere is also the option to include a hint message on each of the checks which will be\ndisplayed to the user in the event there is a failing constraint to help diagnose the problem.\nFor example, the ",(0,o.kt)("inlineCode",{parentName:"p"},"hasMin")," check has the hint message:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"'The minimum(work_priority_priority_code) >= 1'\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from pydeequ.checks import Check, CheckLevel\nfrom pydeequ.repository import FileSystemMetricsRepository, ResultKey\nfrom pydeequ.verification import VerificationSuite, VerificationResult, RelativeRateOfChangeStrategy\nfrom helpers.data_quality_testing import get_metrics_target_location\n\nmetrics_target_location = get_metrics_target_location()\n\nmetricsRepository = FileSystemMetricsRepository(spark_session, metrics_target_location)\nresultKey = ResultKey(spark_session, ResultKey.current_milli_time(), {})\n\ncheckResult = VerificationSuite(spark_session) \\\n    .onData(df) \\\n    .useRepository(metricsRepository) \\\n    .addCheck(Check(spark_session, CheckLevel.Error, "data quality checks") \\\n        .hasMin("work_priority_priority_code", lambda x: x >= 1, \'The minimum(work_priority_priority_code) >= 1\') \\\n        .hasMax("work_priority_priority_code", lambda x: x <= 4, \'The maximum(work_priority_priority_code) <= 4\')  \\\n        .isComplete("description_of_work")) \\\n    .saveOrAppendResult(resultKey) \\\n    .run()\n\ncheckResult_df = VerificationResult.checkResultsAsDataFrame(spark_session, checkResult)\ncheckResult_df.show()\n')),(0,o.kt)("p",null,"Here is a ",(0,o.kt)("a",{parentName:"p",href:"https://pydeequ.readthedocs.io/en/latest/pydeequ.html#module-pydeequ.checks"},"list of checks")," that are available to use."),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Remember to ensure that any checks, analyzers, anomaly checks are included within the imports."))),(0,o.kt)("h3",{id:"2-historical-analysis-of-the-dataset---example-anomaly-detection"},"2. Historical analysis of the dataset - Example Anomaly Detection"),(0,o.kt)("p",null,"Anomaly detection uses historic metrics to determine if a value is invalid."),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"You can only run an anomaly check if there are historic metrics results in the metrics repository you are using.\nIf no historic metrics results exist, you will get the below error message:"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-markdown"},"Can't execute the assertion: requirement failed:\nThere have to be previous results in the MetricsRepository!!\n")),(0,o.kt)("p",{parentName:"div"},"To avoid this error, run the standard verification constraint checks first (see ",(0,o.kt)("a",{parentName:"p",href:"#1-fact-checking-of-data-values-example"},"Fact-checking of data values example")," section above) and then add your anomaly constraint checks afterwards."))),(0,o.kt)("p",null,"For example, we check if the size of a dataframe has increased by more than twice the previous size."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from pydeequ.verification import VerificationSuite, VerificationResult\nfrom pydeequ.repository import FileSystemMetricsRepository, ResultKey\nfrom pydeequ.anomaly_detection import RelativeRateOfChangeStrategy\nfrom helpers.data_quality_testing import get_metrics_target_location, cancel_job_if_failing_quality_checks\n\nmetrics_target_location = get_metrics_target_location()\n\nmetricsRepository = FileSystemMetricsRepository(spark_session, metrics_target_location)\nresultKey = ResultKey(spark_session, ResultKey.current_milli_time(), {})\n\nanomalyVerificationSuite = VerificationSuite(spark_session) \\\n    .onData(df) \\\n    .useRepository(metricsRepository) \\\n    .addAnomalyCheck(RelativeRateOfChangeStrategy(maxRateIncrease = 2.0), Size())\n\ncancel_job_if_failing_quality_checks(VerificationResult.checkResultsAsDataFrame(spark_session, anomalyVerificationSuite.run()))\n\n# Only update the metrics repository if cancel_job_if_failing_quality_checks succeeds.\n# Otherwise the next time anomaly check runs it will compare against "incorrect" metrics.\nanomalyVerificationSuite.saveOrAppendResult(resultKey).run()\n')),(0,o.kt)("p",null,"Here is a ",(0,o.kt)("a",{parentName:"p",href:"https://pydeequ.readthedocs.io/en/latest/pydeequ.html#module-pydeequ.anomaly_detection"},"list of anomaly detection types")," that are available to use."),(0,o.kt)("h2",{id:"providing-tags-to-metrics-for-verification-constraint-checks"},"Providing tags to metrics for verification constraint checks"),(0,o.kt)("p",null,"You can add tags to your verification metrics which may be helpful when reviewing the metric\nresults for a particular job.\nTo do this, include a dictionary containing key value pairs in the ",(0,o.kt)("inlineCode",{parentName:"p"},"ResultKey")," as shown in example below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'import sys\nfrom awsglue.utils import getResolvedOptions\n\nargs = getResolvedOptions(sys.argv, [\'JOB_NAME\'])\n\nresultKey = ResultKey(spark_session, ResultKey.current_milli_time(), {\n    "source_database": source_catalog_database,\n    "source_table": source_catalog_table,\n    "glue_job_id": args[\'JOB_RUN_ID\']\n})\n')),(0,o.kt)("h2",{id:"stopping-glue-jobs-when-constraint-checks-fail"},"Stopping Glue jobs when constraint checks fail"),(0,o.kt)("p",null,"In order to ensure that only trusted data is outputted from your Glue job, it is important\nto make an assertion against your constraints to check that they have been satisfied."),(0,o.kt)("p",null,"You can do this by including a helper function called ",(0,o.kt)("inlineCode",{parentName:"p"},"cancel_job_if_failing_quality_checks()"),"\nin your script (see ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/LBHackney-IT/Data-Platform/blob/main/scripts/helpers/data_quality_testing.py"},"data quality testing helpers")," for more info).\nYou can see an example usage in the ",(0,o.kt)("a",{parentName:"p",href:"#2-historical-analysis-of-the-dataset---example-anomaly-detection"},"Historical analysis of the dataset - Example Anomaly Detection")," section."),(0,o.kt)("p",null,"When a constraint check fails, the Glue job will fail and, an error message will be provided which might look something like\nthe below message:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-markdown"},"Exception: data quality checks. Value: 1.0 does not meet the constraint requirement!\nThe minimum(work_priority_priority_code) >= 2\n| Anomaly check for Size(None). Value: 486.0 does not meet the constraint requirement!\n")),(0,o.kt)("p",null,"Multiple constraint failures are delimited by a ",(0,o.kt)("inlineCode",{parentName:"p"},"|")," character in the error message."),(0,o.kt)("h2",{id:"commit-your-data-quality-tests-to-your-glue-job"},"Commit your data quality tests to your Glue job"),(0,o.kt)("p",null,"Once you are satisfied with your data quality tests, you will need to commit them to the Data Platform project so that they can be deployed to your existing Glue job."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Submit your changes by referring to the ",(0,o.kt)("a",{parentName:"li",href:"../../getting-set-up/using-github#committing-your-changes-to-the-data-platform-project"},"Committing changes")," section of the ",(0,o.kt)("strong",{parentName:"li"},"Using Github")," guide.\nThe Data Platform team needs to approve any changes to the code, so your change won't happen automatically.")),(0,o.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If you are working with a new Glue job that has not yet been deployed to the Data Platform project, refer to ",(0,o.kt)("a",{parentName:"p",href:"../using-aws-glue/deploy-glue-jobs"},"this guide")," to have it added to the project."))),(0,o.kt)("h2",{id:"email-notifications-of-failing-glue-jobs"},"Email notifications of failing Glue jobs"),(0,o.kt)("p",null,"Each time a Glue job fails as a result of failing constraint checks, an email notification with details of the error message is sent to the respective department, and their subscribed members."),(0,o.kt)("p",null,"The message will include:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Name of the Glue job"),(0,o.kt)("li",{parentName:"ul"},"Error message from the failing constraint check"),(0,o.kt)("li",{parentName:"ul"},"Time of failure"),(0,o.kt)("li",{parentName:"ul"},"Job start time"),(0,o.kt)("li",{parentName:"ul"},"Job end time"),(0,o.kt)("li",{parentName:"ul"},"Job last modified time"),(0,o.kt)("li",{parentName:"ul"},"A link to log in to Hackney SSO and view the Job run details")),(0,o.kt)("p",null,"In order to receive email notifications, you will need to ensure that you are subscribed to receive emails from your department's ",(0,o.kt)("a",{parentName:"p",href:"https://groups.google.com/my-groups"},"Google group")," and that you have confirmed your subscription to receive AWS Notifications when prompted."),(0,o.kt)("p",null,"Additionally, Spark Web UI is used to monitior and debug the glue jobs. Every 30 seconds, AWS Glue flushes the Spark event logs to an S3 bucket titled Spark UI Bucket."),(0,o.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If you are still prototyping your data quality tests in Glue Studio, ensure the ",(0,o.kt)("strong",{parentName:"p"},"PlatformDepartment")," tag is correctly set in the ",(0,o.kt)("em",{parentName:"p"},"Advanced details")," section in the Glue job's ",(0,o.kt)("em",{parentName:"p"},"Job Details")," (see ",(0,o.kt)("a",{parentName:"p",href:"../using-aws-glue/using-glue-studio"},"Using Glue Studio"),")."))))}m.isMDXComponent=!0}}]);