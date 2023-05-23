"use strict";(self.webpackChunkdata_platform_playbook=self.webpackChunkdata_platform_playbook||[]).push([[5127],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>c});var o=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,o,r=function(e,t){if(null==e)return{};var a,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=o.createContext({}),s=function(e){var t=o.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=s(e.components);return o.createElement(u.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,u=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=s(a),h=r,c=p["".concat(u,".").concat(h)]||p[h]||m[h]||n;return a?o.createElement(c,l(l({ref:t},d),{},{components:a})):o.createElement(c,l({ref:t},d))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,l=new Array(n);l[0]=h;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[p]="string"==typeof e?e:r,l[1]=i;for(var s=2;s<n;s++)l[s]=a[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,a)}h.displayName="MDXCreateElement"},8040:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>n,metadata:()=>i,toc:()=>s});var o=a(7462),r=(a(7294),a(3905));const n={title:"Deploying a job in AWS Glue",description:"Training module: Deploying a job in AWS Glue",layout:"playbook_js",tags:["training"]},l="Deploying a job in Glue",i={unversionedId:"training-modules/module-3",id:"training-modules/module-3",title:"Deploying a job in AWS Glue",description:"Training module: Deploying a job in AWS Glue",source:"@site/docs/training-modules/module-3.md",sourceDirName:"training-modules",slug:"/training-modules/module-3",permalink:"/Data-Platform-Playbook/training-modules/module-3",draft:!1,editUrl:"https://github.com/LBHackney-IT/data-platform-playbook/edit/master/docs/training-modules/module-3.md",tags:[{label:"training",permalink:"/Data-Platform-Playbook/tags/training"}],version:"current",frontMatter:{title:"Deploying a job in AWS Glue",description:"Training module: Deploying a job in AWS Glue",layout:"playbook_js",tags:["training"]},sidebar:"docs",previous:{title:"Transforming data to refined zone using Sagemaker",permalink:"/Data-Platform-Playbook/training-modules/module-2"},next:{title:"Module 1 - Introduction to Qlik",permalink:"/Data-Platform-Playbook/training-modules/Qlik/qlik-module-1"}},u={},s=[{value:"Overview",id:"overview",level:2},{value:"Using Terraform (Infrastructure as Code)",id:"using-terraform-infrastructure-as-code",level:3},{value:"Using GitHub",id:"using-github",level:3},{value:"Pre-requisites",id:"pre-requisites",level:2},{value:"Part 1. Prototyping the job in the AWS Glue console",id:"part-1-prototyping-the-job-in-the-aws-glue-console",level:2},{value:"2. Part 2: Deploying your job via Terraform",id:"2-part-2-deploying-your-job-via-terraform",level:2},{value:"Overview of the steps for part 2:",id:"overview-of-the-steps-for-part-2",level:3},{value:"Detailed steps for part 2:",id:"detailed-steps-for-part-2",level:3}],d={toc:s},p="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"deploying-a-job-in-glue"},"Deploying a job in Glue"),(0,r.kt)("p",null,"In this module, you will move the data transformation script you created Sagemaker (from ",(0,r.kt)("a",{parentName:"p",href:"/Data-Platform-Playbook/training-modules/module-2"},"Transforming data to refined zone using Sagemaker"),") into a Glue job and then \u2018productionise\u2019 it. "),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"First you will test the script within the Glue console like you did in the training module ",(0,r.kt)("strong",{parentName:"p"},"Ingesting data from Google Sheets"),". "),(0,r.kt)("p",null,"Once this job runs successfully, you will then set up the job formally by writing a Terraform module. "),(0,r.kt)("p",null,"This will replicate a common task within the Data Platform, where data from the raw zone is transformed and written into the refined zone, usually on a schedule. We use Terraform to productionise jobs for a number of reasons:"),(0,r.kt)("p",null,"When deployed, Terraform will generate all the necessary infrastructure in the AWS environment (job, crawler, scheduler)"),(0,r.kt)("h3",{id:"using-terraform-infrastructure-as-code"},"Using Terraform (Infrastructure as Code)"),(0,r.kt)("p",null,"This will replace the elements you\u2019ve created manually in the AWS console in the second part of Module 2. This is called \u2018Infrastructure as Code\u2019 (IaC) and brings a lot of advantages to the Data Platform: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Quality assurance:")," we use Terraform templates so all elements of infrastructure follow the same standards"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Repeatability:")," your job can be recreated by a simple redeployment if anything goes wrong. It can also be replicated to another environment, for instance from Staging to Production. Be aware that any changes made to your Glue job directly within the Glue console will be overwritten when the Terraform next deploys. ")),(0,r.kt)("h3",{id:"using-github"},"Using GitHub"),(0,r.kt)("p",null,"Both the PySpark script and the job details in Terraform will become part of the Data Platform code base and saved in GitHub. This also brings advantages:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Safety:")," Your code cannot be accidentally lost and is each version of your code is 'saved', also known as version-control. This means that code can be rolled back if necessary.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Quality assurance:")," Your code will be reviewed by at least two Data Platform developers. GitHub will also perform automated checks which verify certain criteria , and therefore must pass before being allowed to merge into the repository"))),(0,r.kt)("h2",{id:"pre-requisites"},"Pre-requisites"),(0,r.kt)("p",null,"Please ensure that the modules ",(0,r.kt)("a",{parentName:"p",href:"/Data-Platform-Playbook/training-modules/module-0"},"Getting started"),", ",(0,r.kt)("a",{parentName:"p",href:"/Data-Platform-Playbook/training-modules/module-1"},"Ingesting data from Google Sheets")," and ",(0,r.kt)("a",{parentName:"p",href:"/Data-Platform-Playbook/training-modules/module-2"},"Transforming data to refined zone using Amazon Sagemaker")," are completed before proceeding."),(0,r.kt)("h2",{id:"part-1-prototyping-the-job-in-the-aws-glue-console"},"Part 1. Prototyping the job in the AWS Glue console"),(0,r.kt)("p",null,"You\u2019ll take the following steps before productionising the script you wrote in the  ",(0,r.kt)("strong",{parentName:"p"},"Transforming data to refined zone using Amazon Sagemaker")," module, to check it runs smoothly as a job in the AWS Glue environment; we expect it will as the notebook environment within SageMaker also runs within the same Glue environment).\nIt will be an opportunity for you to try logging.\nAs we\u2019re just testing, we won\u2019t write any Terraform (we'll do this in the second half of this module) and we won\u2019t schedule the job.\nWe\u2019ll also delete our job at the end.\nIf you need more detailed instructions at any point checkout ",(0,r.kt)("a",{parentName:"p",href:"/Data-Platform-Playbook/playbook/transforming-data/using-aws-glue/using-glue-studio"},"the guide to set up an ETL job"),"."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Login to AWS pre-production account via the ",(0,r.kt)("a",{parentName:"li",href:"https://hackney.awsapps.com/start#/"},"Hackney SSO"),".")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Set up a new job in Glue Studio.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Go to ",(0,r.kt)("a",{parentName:"li",href:"https://eu-west-2.console.aws.amazon.com/gluestudio/home?region=eu-west-2#/jobs"},"AWS Glue Studio")," and open the ",(0,r.kt)("strong",{parentName:"li"},"template job"),', called "stg job_template" (To make it easier to get started, this template has some of the script layout formatted, and job parameters specified already).'),(0,r.kt)("li",{parentName:"ul"},'Clone the job (from Actions) and rename it with your name and remove "stg" from the prefix, for example "joe bloggs template".'),(0,r.kt)("li",{parentName:"ul"},"Open the job and familiarise yourself with the steps (reading, transforming and writing data) and note the differences compared to the Notebook template.")))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Cloning a glue job",src:a(9408).Z,width:"512",height:"223"})),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Write your Glue job."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"In a different tab, open Sagemaker and navigate to the notebook you created in Module 2.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Paste your code from the notebook into the template, ignoring the first cell (Cells can be merged in Jupyter by holding ",(0,r.kt)("inlineCode",{parentName:"p"},"Shift")," and selecting the cells, then pressing ",(0,r.kt)("inlineCode",{parentName:"p"},"Shift+M")," on your keyboard).")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"For the variables defined in the first cell of your notebook, you will use the ",(0,r.kt)("inlineCode",{parentName:"p"},"Job details")," tab instead of writing them in the script.\nYou should define them in the ",(0,r.kt)("strong",{parentName:"p"},"Job parameters")," panel which can be found under ",(0,r.kt)("inlineCode",{parentName:"p"},"Advanced properties"),".\nYou should also update the S3 path in the ",(0,r.kt)("strong",{parentName:"p"},"Script path")," field to ",(0,r.kt)("inlineCode",{parentName:"p"},"s3://dataplatform-stg-glue-scripts/custom/"),". "))))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"job parameters",src:a(9493).Z,width:"512",height:"342"})),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Run your job."),(0,r.kt)("li",{parentName:"ol"},"Review the run result logs.\nSee the ",(0,r.kt)("a",{parentName:"li",href:"/Data-Platform-Playbook/playbook/transforming-data/using-aws-glue/using-glue-studio#monitoring-a-glue-job-run"},"monitoring section")," of the using Glue Studio guide for an explanation on how to do this."),(0,r.kt)("li",{parentName:"ol"},"Once your job status has changed from ",(0,r.kt)("inlineCode",{parentName:"li"},"Running")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"Succeeded")," you should check the data wrote correctly into ",(0,r.kt)("a",{parentName:"li",href:"https://s3.console.aws.amazon.com/s3/home?region=eu-west-2"},"S3"),".\nTo do this, follow the same steps in the ",(0,r.kt)("a",{parentName:"li",href:"/Data-Platform-Playbook/training-modules/module-1#6-crawling-the-ingested-data-to-make-it-available-in-the-glue-catalogue"},"last section of Module 1"),"."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://eu-west-2.console.aws.amazon.com/glue/home?region=eu-west-2#catalog:tab=crawlers"},"Crawl")," the results. (Using the crawler named \u201csandbox-refined-zone\u201d)."),(0,r.kt)("li",{parentName:"ol"},"Check the data in ",(0,r.kt)("a",{parentName:"li",href:"https://eu-west-2.console.aws.amazon.com/athena/home?region=eu-west-2#/query-editor/"},"Athena")," - (",(0,r.kt)("a",{parentName:"li",href:"/Data-Platform-Playbook/playbook/querying-and-analysing-data/querying-data-using-sql"},"playbook"),").")),(0,r.kt)("p",null,"Congratulations, you've tested that your transformation is working in Glue. You can move to the next part of this Module."),(0,r.kt)("h2",{id:"2-part-2-deploying-your-job-via-terraform"},"2. Part 2: Deploying your job via Terraform"),(0,r.kt)("p",null,"In this second part of Module 3, you will \u2018productionize\u2019 the job you\u2019ve tested in the previous part. To do this, you will write a Terraform module in the Data Platform GitHub repository, and then deploy it. The entirety of this module will be carried out in the GitHub User Interface (GUI), but you could also work in your local development environment such as PyCharm or VSCode if you prefer. "),(0,r.kt)("h3",{id:"overview-of-the-steps-for-part-2"},"Overview of the steps for part 2:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"First, you\u2019ll delete the data you have just created in part 1 as the Terraform you are about to write will replicate the process, but in an automated way. "),(0,r.kt)("li",{parentName:"ul"},"Then, you will save your PySpark script in the relevant location of the Data Platform GitHub repository. The code will be the same as what you have used within the script part of the Glue job creation."),(0,r.kt)("li",{parentName:"ul"},"Next, you will write a Module in Terraform that encapsulates all the resources your Glue job requires."),(0,r.kt)("li",{parentName:"ul"},"You will then create a Pull Request and merge your code with the pre-production Data Platform repository"),(0,r.kt)("li",{parentName:"ul"},"At this point, GitHub will attempt to deploy your code, and your job will get created in AWS. "),(0,r.kt)("li",{parentName:"ul"},"You will be able to retrieve your Glue job in the AWS console, to run it, and check the results in Athena. ")),(0,r.kt)("h3",{id:"detailed-steps-for-part-2"},"Detailed steps for part 2:"),(0,r.kt)("ol",{start:9},(0,r.kt)("li",{parentName:"ol"},"Delete the data generated in Part 1 of this module.")),(0,r.kt)("p",null,"This is so that we can check that the job deployed through the Terraform that you are about to write, actually works. To delete your data, navigate to it in S3 (Refined zone bucket, Sandbox department) and permanently delete the two full folders with your name (there should be one folder for Locations and one for Vaccinations). ",(0,r.kt)("em",{parentName:"p"},"Do NOT")," delete your data from the Raw zone, otherwise you would have to ingest it again by running the ingestion job created in ",(0,r.kt)("em",{parentName:"p"},"Ingesting data from Google Sheets!")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Deleting folders in S3",src:a(3121).Z,width:"1704",height:"1412"})),(0,r.kt)("ol",{start:10},(0,r.kt)("li",{parentName:"ol"},"Create and add your PySpark script to the GitHub repository.")),(0,r.kt)("p",null,"This step can be done via GitHub website, or in your local IDE (in the latter case make sure you have pulled the latest version of the Data Platform repository from the ",(0,r.kt)("em",{parentName:"p"},"main")," branch)."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Navigate to the ",(0,r.kt)("strong",{parentName:"li"},"Jobs")," directory in the Data Platform Project and open your department folder."),(0,r.kt)("li",{parentName:"ul"},"Click ",(0,r.kt)("em",{parentName:"li"},"Add file")," and then ",(0,r.kt)("em",{parentName:"li"},"Create new file"),"."),(0,r.kt)("li",{parentName:"ul"},"Name your file. This should be the same name you gave your job in Glue Studio. Ensure the file name only contains lowercase letters, that words are separated by underscores, and that the file has the extension ",(0,r.kt)("em",{parentName:"li"},".py")," at the end. Add your name at the end of the file name. An example is ",(0,r.kt)("em",{parentName:"li"},"covid_vaccinations_joe_bloggs.py"),". Remember the name you have given your script as you will need it for the following section."),(0,r.kt)("li",{parentName:"ul"},"If your Glue job was created using Glue Studio, open your Glue job and copy the Python script by navigating to the ",(0,r.kt)("em",{parentName:"li"},"Script")," tab."),(0,r.kt)("li",{parentName:"ul"},"Navigate back to the new script file you created in the GitHub interface (or existing script file, if you are updating your script), and paste in your script."),(0,r.kt)("li",{parentName:"ul"},"When you validate your new file in GitHub, do not create a Pull Request straight away as we also need to write the Terraform module. Look at the name of the new branch you are creating. You'll use the same branch in the next step and raise one single PR at the end")),(0,r.kt)("p",null,"More information about using GitHub is in the ",(0,r.kt)("a",{parentName:"p",href:"https://lbhackney-it.github.io/Data-Platform-Playbook/playbook/transforming-data/using-aws-glue/deploy-glue-jobs/#1-add-your-script-to-the-data-platform-project-using-the-github-ui"},"Using GitHub Playbook article"),"."),(0,r.kt)("ol",{start:11},(0,r.kt)("li",{parentName:"ol"},"Define your job in a Terraform module.")),(0,r.kt)("p",null,"A module is a block of Terraform code that creates a set of related resources in our Amazon Web Services account. The Data Platform team has created a module template for Glue jobs. An ",(0,r.kt)("a",{parentName:"p",href:"https://lbhackney-it.github.io/Data-Platform-Playbook/playbook/transforming-data/using-aws-glue/deploy-glue-jobs/#example-module-block"},"example from the Playbook")," is reproduced below. As you can see, it includes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The job name and department"),(0,r.kt)("li",{parentName:"ul"},"The location of the PySpark script"),(0,r.kt)("li",{parentName:"ul"},"The schedule of the job"),(0,r.kt)("li",{parentName:"ul"},"The job parameters (this is the same as what you defined manually in ",(0,r.kt)("em",{parentName:"li"},"Job details")," in the Glue console)"),(0,r.kt)("li",{parentName:"ul"},"A crawler to crawl the results of your job so that data is available to view in a tabular format in the Glue data catalogue (rather than as a set of parquet files in S3)")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Module example",src:a(3720).Z,width:"512",height:"217"})),(0,r.kt)("p",null,"You\u2019ll create your module in the existing file: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/LBHackney-IT/Data-Platform/blob/main/terraform/etl/40-aws-glue-job-sandbox.tf"},"terraform/core/40-aws-glue-job-sandbox.tf"),". This link takes you to the ",(0,r.kt)("inlineCode",{parentName:"p"},"main")," branch of the repository, but you should make sure you switch to the branch you were using to develop the Pythin script in the previous step. "),(0,r.kt)("p",null,"To create your module, follow the steps from the ","[Playbook, Part 2][job module in playbook]",". "),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f Please ensure that you ",(0,r.kt)("strong",{parentName:"p"},"add your name")," at the end of the module name and the job name so that it can be distinguished from other modules and jobs that other users have created as part of this training.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f Please ",(0,r.kt)("strong",{parentName:"p"},"do not")," add a schedule to your module, you\u2019ll just run it manually later.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f The example above does not contain all the mandatory fields\u2026 make sure you read the Playbook guidance above carefully so that you don\u2019t forget any! If you do, GitHub won't let you commit your work.")),(0,r.kt)("ol",{start:12},(0,r.kt)("li",{parentName:"ol"},"Raise a Pull Request so that your code can be reviewed.")),(0,r.kt)("p",null,"Commit your code to your current working branch and then open a Pull Request. This Pull Request will contain your new Python script and your new Terraform module."),(0,r.kt)("ol",{start:13},(0,r.kt)("li",{parentName:"ol"},"Deploy to the Data Platform.")),(0,r.kt)("p",null,"When you have received ",(0,r.kt)("strong",{parentName:"p"},"two approvals")," from reviewers, go back to GitHub. You will now be able to merge your branch (the merge button is green). "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Merge your branch",src:a(1125).Z,width:"512",height:"489"})),(0,r.kt)("p",null,"The automated deployment will now start and make take up to an hour to complete.\nTo check how it is going, you can navigate to the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/LBHackney-IT/Data-Platform/actions"},"Actions tab")," and monitor the progress of your code deployment. "),(0,r.kt)("p",null,"A common reason for a deployment failure is when a resource declared in Terraform (for instance a pySpark script file) is missing from the AWS environment. If this is happening, make sure all the necessary resources have been deployed before re-trying to deploy yours."),(0,r.kt)("ol",{start:14},(0,r.kt)("li",{parentName:"ol"},"Check your new resources in the AWS console.")),(0,r.kt)("p",null,"In the ",(0,r.kt)("a",{parentName:"p",href:"https://eu-west-2.console.aws.amazon.com/gluestudio/home?region=eu-west-2#/jobs"},"Glue Studio page"),", you should find your Glue job with the prefix \u201cstg-\u201d included. In the ",(0,r.kt)("a",{parentName:"p",href:"https://eu-west-2.console.aws.amazon.com/glue/home?region=eu-west-2#catalog:tab=crawlers"},"Glue Crawlers")," page, you should find the associated crawler. You can easily link the details of these new resources to the statements you wrote in the Terraform module."),(0,r.kt)("ol",{start:15},(0,r.kt)("li",{parentName:"ol"},"Run the deployed job.")),(0,r.kt)("p",null,"You can now run your job manually from Glue Studio. After it has completed, the job will trigger the crawler so you don\u2019t need to run it yourself. If you navigate to the Crawler page, you should see your crawler in the \u2018running\u2019 state."),(0,r.kt)("ol",{start:16},(0,r.kt)("li",{parentName:"ol"},"Check the resulting data in Athena - the interface to view and query data from the Glue Catalogue.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Open the ",(0,r.kt)("a",{parentName:"li",href:"https://eu-west-2.console.aws.amazon.com/athena/home?region=eu-west-2#/query-editor"},"Query editor")),(0,r.kt)("li",{parentName:"ul"},"Make sure workgroup is \u201csandbox\u201d and you\u2019re using the \u201csandbox-raw-zone\u201d database")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Sandbox workgroup in Athena",src:a(7332).Z,width:"512",height:"130"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Run a simple query in Athena against your tables (created/ updated) by the Crawlers. A simple way to do this is to select the 3 vertical dots by the table name and select \u201cPreview Table\u201d to see the top 10 lines. (The dialect of SQL used in Athena is ",(0,r.kt)("a",{parentName:"li",href:"https://prestodb.io/"},"Presto SQL"),")")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Preview table in AThena",src:a(518).Z,width:"1652",height:"1576"})),(0,r.kt)("ol",{start:17},(0,r.kt)("li",{parentName:"ol"},"Delete the job prototype you've created manually in the Glue console in the Part 1 of this training module.")),(0,r.kt)("p",null,"If the deployed job has worked successfully, you can safely delete the one you created manually earlier as you won't need to reload the data again - your code is now in the Data Platform codebase!  "),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\ud83c\udf89 Congratulations, you've completed this module and deployed a job in the Data Platform! ")))}m.isMDXComponent=!0},518:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/athena-preview-table-74253ea19ab498864c94fdb2105f9f73.png"},7332:(e,t,a)=>{a.d(t,{Z:()=>o});const o="data:image/png;base64,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"},9408:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/cloning_jobs-c2503e064e6e9ecf46dbfa06882c3695.png"},3121:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/delete_S3_folder-1b3186d8be9533ffa75437e33f4225f1.png"},3720:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/job-module-example-9e4720dc2f0d162490a892091cd35250.png"},9493:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/job_parameters-a3dbe41df15b36bdcb26ce05edb564cc.png"},1125:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/merge-branch-02ee69ead4c0d6ee9a5a333c29d9b573.png"}}]);