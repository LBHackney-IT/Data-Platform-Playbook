"use strict";(self.webpackChunkdata_platform_playbook=self.webpackChunkdata_platform_playbook||[]).push([[8313],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return c}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(a),c=o,f=m["".concat(s,".").concat(c)]||m[c]||d[c]||r;return a?n.createElement(f,i(i({ref:t},p),{},{components:a})):n.createElement(f,i({ref:t},p))}));function c(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<r;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},4910:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return d}});var n=a(3117),o=a(102),r=(a(7294),a(3905)),i=["components"],l={title:"Transforming data to refined zone using Sagemaker",description:"Training module: Transforming data to the refined zone using Sagemaker",layout:"playbook_js",tags:["training"]},s="Data Platform Training Module - Transforming data using PySpark and writing to the refined zone",u={unversionedId:"training-modules/module-2",id:"training-modules/module-2",title:"Transforming data to refined zone using Sagemaker",description:"Training module: Transforming data to the refined zone using Sagemaker",source:"@site/docs/training-modules/module-2.md",sourceDirName:"training-modules",slug:"/training-modules/module-2",permalink:"/Data-Platform-Playbook/training-modules/module-2",draft:!1,editUrl:"https://github.com/LBHackney-IT/data-platform-playbook/edit/master/docs/training-modules/module-2.md",tags:[{label:"training",permalink:"/Data-Platform-Playbook/tags/training"}],version:"current",frontMatter:{title:"Transforming data to refined zone using Sagemaker",description:"Training module: Transforming data to the refined zone using Sagemaker",layout:"playbook_js",tags:["training"]},sidebar:"docs",previous:{title:"Ingesting data from Google Sheets",permalink:"/Data-Platform-Playbook/training-modules/module-1"},next:{title:"module-3",permalink:"/Data-Platform-Playbook/training-modules/module-3"}},p={},d=[{value:"Overview",id:"overview",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Step-by-step instructions",id:"step-by-step-instructions",level:2},{value:"1. Developing the job script in a Jupyter notebook",id:"1-developing-the-job-script-in-a-jupyter-notebook",level:3}],m={toc:d};function c(e){var t=e.components,a=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"data-platform-training-module---transforming-data-using-pyspark-and-writing-to-the-refined-zone"},"Data Platform Training Module - Transforming data using PySpark and writing to the refined zone"),(0,r.kt)("p",null,"In this module you will manipulate the data that you loaded into the Data Platform raw zone in ",(0,r.kt)("a",{parentName:"p",href:"/Data-Platform-Playbook/training-modules/module-1"},"module 1"),".\nYou will save the result of your work into the ",(0,r.kt)("a",{parentName:"p",href:"/Data-Platform-Playbook/glossary#refined-zone"},"refined zone")," of the data platform."),(0,r.kt)("p",null,"The refined zone is for data that has been enhanced or enriched and is \u2018ready\u2019 for analysis. "),(0,r.kt)("p",null,"You will be using ",(0,r.kt)("a",{parentName:"p",href:"https://spark.apache.org/docs/latest/api/python/"},"PySpark")," to create and test your script. You will create your code in a Jupyter Notebook environment running in Amazon SageMaker."),(0,r.kt)("p",null,"Jupyter notebooks are a convenient way to test code locally as Glue Studio is not so straightforward for code development (despite what the name implies!). You can read more about Jupyter notebooks ",(0,r.kt)("a",{parentName:"p",href:"https://jupyter.org/"},"here"),"."),(0,r.kt)("p",null,"This module is all about prototyping within a sandbox environment, and therefore we won\u2019t be pushing any code to the Data Platform GitHub repository."),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"You\u2019ll write a few lines of code in PySpark which will include reading data from S3, joining the two Covid datasets together and then writing the newly created dataset back to S3 in the refined zone. "),(0,r.kt)("p",null,"PySpark is an interface that uses the Python programming language to access the Apache Spark cluster-computing framework; therefore the syntax will seem a bit different if you have used Python packages such as Pandas or NumPy before."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"Please ensure that both the ",(0,r.kt)("a",{parentName:"p",href:"/Data-Platform-Playbook/training-modules/module-0"},"'Getting set up' module")," and the ",(0,r.kt)("a",{parentName:"p",href:"/Data-Platform-Playbook/training-modules/module-1"},"'Ingesting data' module")," are completed before proceeding.\nYou will need the names of the tables that were created from completing the 'Ingesting data' module."),(0,r.kt)("h2",{id:"step-by-step-instructions"},"Step-by-step instructions"),(0,r.kt)("h3",{id:"1-developing-the-job-script-in-a-jupyter-notebook"},"1. Developing the job script in a Jupyter notebook"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Launch the sandbox notebook within Sagemaker by following ",(0,r.kt)("a",{parentName:"p",href:"/Data-Platform-Playbook/playbook/transforming-data/using-aws-glue/using-sagemaker"},"this guide"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open the notebook template called ",(0,r.kt)("inlineCode",{parentName:"p"},"using-pyspark.ipynb"),"."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Familiarise yourself with the steps (variables, reading, transforming and writing data)."),(0,r.kt)("li",{parentName:"ul"},"Duplicate the template, saving it in the sandbox folder, and rename it (you can append your name to the name of the file)."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Prototype your own ETL (Extract Transform Load) job to transform the data in PySpark.\nThe ",(0,r.kt)("a",{parentName:"p",href:"https://sparkbyexamples.com/pyspark-tutorial/"},"PySpark By Examples website")," is a handy resource to write your code. "),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Please try the following things on your data:")," "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Load the Covid Locations dataset into the notebook.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},'You will first need to set the variables in the first cell, see the "TODO" comments.\nThe datasets will be the same as the last step in Module 1 training.'))),(0,r.kt)("li",{parentName:"ul"},"Print out the schema and the first few rows of data to check it has imported correctly."),(0,r.kt)("li",{parentName:"ul"},"Change a column name: rename ",(0,r.kt)("inlineCode",{parentName:"li"},"location")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"country"),"."),(0,r.kt)("li",{parentName:"ul"},"Load the Covid Vaccinations dataset into the notebook - Repeat the 2 steps above. "),(0,r.kt)("li",{parentName:"ul"},"Cast a column to a different type e.g. a string date to date type."),(0,r.kt)("li",{parentName:"ul"},"Join the two tables to a single output using the ",(0,r.kt)("inlineCode",{parentName:"li"},"country")," column."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Write to the Refined zone\nWhen you are confident that your transformation is working, you can use the last cell of the notebook to actually write the data into the Data Platform (please note that a notebook will only ever write to the pre-production environment, never to the production environment as it is meant for prototyping).")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Find and view the data in the refined zone bucket within S3\nIf the previous step has worked correctly, then you should be able to see your newly created parquet files in the refined zone S3 bucket within the sandbox department folder. We won't try to visualise or query the data in this module."))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\ud83c\udf89 Congratulations! You have completed this module!")),(0,r.kt)("p",null,"In the ",(0,r.kt)("a",{parentName:"p",href:"/Data-Platform-Playbook/training-modules/module-3"},"next module"),", you will turn your script into a ",(0,r.kt)("a",{parentName:"p",href:"https://aws.amazon.com/glue/?whats-new-cards.sort-by=item.additionalFields.postDateTime&whats-new-cards.sort-order=desc"},"Glue")," job and deploy it into the Data Platform."))}c.isMDXComponent=!0}}]);