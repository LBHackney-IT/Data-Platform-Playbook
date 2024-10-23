"use strict";(self.webpackChunkdata_platform_playbook=self.webpackChunkdata_platform_playbook||[]).push([[8108],{8577:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>t,metadata:()=>l,toc:()=>d});var s=r(4848),o=r(8453);const t={id:"deploy-glue-jobs",title:"Deploying Glue jobs to the Data Platform",description:"Creating Glue jobs in terraform",layout:"playbook_js",tags:["playbook"]},i=void 0,l={id:"playbook/transforming-data/using-aws-glue/deploy-glue-jobs",title:"Deploying Glue jobs to the Data Platform",description:"Creating Glue jobs in terraform",source:"@site/docs/playbook/transforming-data/using-aws-glue/002-deploy-glue-jobs.md",sourceDirName:"playbook/transforming-data/using-aws-glue",slug:"/playbook/transforming-data/using-aws-glue/deploy-glue-jobs",permalink:"/Data-Platform-Playbook/playbook/transforming-data/using-aws-glue/deploy-glue-jobs",draft:!1,unlisted:!1,editUrl:"https://github.com/LBHackney-IT/data-platform-playbook/edit/master/docs/playbook/transforming-data/using-aws-glue/002-deploy-glue-jobs.md",tags:[{inline:!0,label:"playbook",permalink:"/Data-Platform-Playbook/tags/playbook"}],version:"current",sidebarPosition:2,frontMatter:{id:"deploy-glue-jobs",title:"Deploying Glue jobs to the Data Platform",description:"Creating Glue jobs in terraform",layout:"playbook_js",tags:["playbook"]},sidebar:"docs",previous:{title:"Using Glue Studio",permalink:"/Data-Platform-Playbook/playbook/transforming-data/using-aws-glue/using-glue-studio"},next:{title:"Prototyping glue jobs in a notebook",permalink:"/Data-Platform-Playbook/playbook/transforming-data/using-aws-glue/using-sagemaker"}},a={},d=[{value:"Deploying Glue jobs to the Data Platform using the Glue jobs Terraform template",id:"deploying-glue-jobs-to-the-data-platform-using-the-glue-jobs-terraform-template",level:2},{value:"1. Add your script to the Data Platform Project using the GitHub UI",id:"1-add-your-script-to-the-data-platform-project-using-the-github-ui",level:3},{value:"2. Copy an existing Glue job module block or use the example below and populate the necessary variables",id:"2-copy-an-existing-glue-job-module-block-or-use-the-example-below-and-populate-the-necessary-variables",level:3},{value:"Update or add your input variables.",id:"update-or-add-your-input-variables",level:4},{value:"The following input variables are required:",id:"the-following-input-variables-are-required",level:4},{value:"Script Name/ Location (required)",id:"script-name-location-required",level:4},{value:"The following input variables are optional:",id:"the-following-input-variables-are-optional",level:4},{value:"Variables used for scheduling a Glue job",id:"variables-used-for-scheduling-a-glue-job",level:4},{value:"Advanced optional input variables:",id:"advanced-optional-input-variables",level:4},{value:"Optional variables used for configuring the capacity a Glue job",id:"optional-variables-used-for-configuring-the-capacity-a-glue-job",level:4},{value:"Example module block",id:"example-module-block",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"deploying-glue-jobs-to-the-data-platform-using-the-glue-jobs-terraform-template",children:"Deploying Glue jobs to the Data Platform using the Glue jobs Terraform template"}),"\n",(0,s.jsx)(n.admonition,{type:"important",children:(0,s.jsxs)(n.p,{children:["This guide contains instructions on how to deploy your Glue job to the Data Platform using the GitHub UI.\nIt assumes you have finished developing your script, and it is ready to be deployed to the Data Platform Production environment.\nIf you are still testing or prototyping your script, it is recommended that you refer to ",(0,s.jsx)(n.a,{href:"./using-glue-studio",children:"this guide"})," first."]})}),"\n",(0,s.jsx)(n.h3,{id:"1-add-your-script-to-the-data-platform-project-using-the-github-ui",children:"1. Add your script to the Data Platform Project using the GitHub UI"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Navigate to the ",(0,s.jsx)(n.a,{href:"https://github.com/LBHackney-IT/Data-Platform/tree/main/scripts/jobs",children:"jobs directory"})," in the Data Platform Project and open your department folder."]}),"\n",(0,s.jsxs)(n.li,{children:["Click ",(0,s.jsx)(n.code,{children:"Add file"})," and then ",(0,s.jsx)(n.code,{children:"Create new file"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Name your file.\nThis should be the same name you gave your job in Glue Studio.\nEnsure the file name only contains ",(0,s.jsx)(n.strong,{children:"lowercase letters"}),", ",(0,s.jsx)(n.strong,{children:"words are separated by underscores"}),", and has the extension ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:".py"})})," at the end.\nFor example: ",(0,s.jsx)(n.code,{children:"address_cleaning_housing_repairs.py"}),".","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.em,{children:"Remember this name as you will need it for the following section."})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["If your Glue job was created using Glue Studio, open your Glue job and copy the auto generated ",(0,s.jsx)(n.strong,{children:"Python"})," script by navigating to the ",(0,s.jsx)(n.code,{children:"Script"})," tab."]}),"\n",(0,s.jsx)(n.li,{children:"Navigate back to the new script file you created in the GitHub UI (or existing script file, if you are updating your script), and paste your script."}),"\n",(0,s.jsxs)(n.li,{children:["Submit your changes by referring to the ",(0,s.jsx)(n.a,{href:"../../getting-set-up/using-github#committing-your-changes-to-the-data-platform-project",children:"Committing changes"})," section of the ",(0,s.jsx)(n.strong,{children:"Using Github"})," guide.\nThe Data Platform team needs to approve any changes to the code, so your change won't happen automatically."]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{title:"Updating your Glue job script",type:"important",children:(0,s.jsx)(n.p,{children:"If you need to update your Glue job script in the future, you must follow steps 4-6 to have those changes deployed to the Data Platform Project."})}),"\n",(0,s.jsx)(n.h3,{id:"2-copy-an-existing-glue-job-module-block-or-use-the-example-below-and-populate-the-necessary-variables",children:"2. Copy an existing Glue job module block or use the example below and populate the necessary variables"}),"\n",(0,s.jsxs)(n.p,{children:["In this section, you will be writing the code, using a template format, that will deploy your Glue job (and crawler) to the Data Platform Project (or update an existing one if you need to make changes to an existing Glue job).\nYou can view a complete example ",(0,s.jsx)(n.a,{href:"#example-module-block",children:"here"}),"."]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Open the ",(0,s.jsx)(n.a,{href:"https://github.com/LBHackney-IT/Data-Platform/tree/main/terraform/etl",children:"terraform/etl directory"})," in the Data Platform Project in GitHub."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["If you don't have the correct permissions, you'll get a '404' error (see ",(0,s.jsx)(n.a,{href:"../../ingesting-data/google-sheets-import#prerequisites",children:"prerequisites"}),")."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Open ",(0,s.jsx)(n.code,{children:"25-aws-glue-jobs-<YOUR-DEPARTMENT-NAME>.tf"}),". e.g. ",(0,s.jsx)(n.code,{children:"38-aws-glue-job-parking.tf"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsxs)(n.em,{children:["If this file does not exist, create a new terraform file for your department by clicking ",(0,s.jsx)(n.code,{children:"Add file"})," then ",(0,s.jsx)(n.code,{children:"Create new file"}),".\nThe name of the new file should be:"]})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"25-aws-glue-jobs-<YOUR-DEPARTMENT-NAME>.tf\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsxs)(n.em,{children:["Refer to the ",(0,s.jsx)(n.a,{href:"#example-module-block",children:"example"})," below to get started."]})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Click ",(0,s.jsx)(n.code,{children:"edit"})," or the ",(0,s.jsx)(n.strong,{children:"pencil icon"})," (","\u270f\ufe0f",") then copy the last module block and paste it at the bottom of the file.\nAn example of what a module block looks like can be seen ",(0,s.jsx)(n.a,{href:"https://github.com/LBHackney-IT/Data-Platform/blob/main/terraform/etl/38-aws-glue-job-parking.tf#L31-L44",children:"here"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Update the ",(0,s.jsx)(n.code,{children:"module"})," name using the name convention ",(0,s.jsx)(n.code,{children:"<job_name>_<department_name>"}),", for example: ",(0,s.jsx)(n.code,{children:'"manually_uploaded_csv_data_to_raw_parking"'}),"."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.code,{children:"<job_name>"})," here must be the same as the script name you specified in the ",(0,s.jsx)(n.a,{href:"#1-add-your-script-to-the-data-platform-project-using-the-github-ui",children:"previous section"})," (without the ",(0,s.jsx)(n.code,{children:".py"})," extension)."]}),"\n",(0,s.jsxs)(n.li,{children:["The final module name (",(0,s.jsx)(n.code,{children:"<job_name>_<department_name>"}),") must be all ",(0,s.jsx)(n.strong,{children:"lowercase"})," with ",(0,s.jsx)(n.strong,{children:"words separated by underscores"}),".\nEnsure the name is unique to all other module names in this file."]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsxs)(n.em,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," If your department name is already in the name of your Glue job, you do not need to repeat it in the module name\nand can just name the module after your ",(0,s.jsx)(n.code,{children:"<job_name>"}),"."]})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.h4,{id:"update-or-add-your-input-variables",children:"Update or add your input variables."}),"\n",(0,s.jsxs)(n.p,{children:["For this section, you will need the following values from your Glue job if applicable.\nYou can find them by navigating to the ",(0,s.jsx)(n.code,{children:"Job Details"})," tab of your job in Glue Studio."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Name"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Description"})}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Job bookmark"}),". The value of this will either be ",(0,s.jsx)(n.code,{children:"Enable"})," or ",(0,s.jsx)(n.code,{children:"Disable"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Job parameters"}),". Expand the ",(0,s.jsx)(n.code,{children:"Advanced properties"})," section and scroll down to ",(0,s.jsx)(n.code,{children:"Job parameters"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"the-following-input-variables-are-required",children:"The following input variables are required:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.em,{children:[(0,s.jsx)(n.strong,{children:"Note"}),": If you've copied an existing module block from your department folder then you won\u2019t need to change the ",(0,s.jsx)(n.strong,{children:"source"}),", ",(0,s.jsx)(n.strong,{children:"department"}),", ",(0,s.jsx)(n.strong,{children:"helper_module_key"})," and, ",(0,s.jsx)(n.strong,{children:"pydeequ_zip_key"})," variables and will only need to update the ",(0,s.jsx)(n.strong,{children:"job_name"})," variable."]})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"If a variable is not needed you should delete the entire line in the module block."})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"source"})," (required): This will be ",(0,s.jsx)(n.code,{children:'"../modules/aws_glue_job"'}),". It is the path to where the Glue job module is saved within the repository."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"department"})," (required): This will be ",(0,s.jsx)(n.code,{children:"module.department_<YOUR_DEPARTMENT_NAME>"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.em,{children:["Note: the department name must be all lowercase and separated by underscores\ne.g. ",(0,s.jsx)(n.code,{children:"module.department_housing_repairs"})]})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"job_name"})," (required): Name of the Glue job. Set this to the name of the script file you created in the previous section (without the ",(0,s.jsx)(n.code,{children:".py"})," extension)\nand prefix it with ",(0,s.jsx)(n.code,{children:"${local.short_identifier_prefix}"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"If the name of your Glue job doesn't already have your department name, you should add it as a suffix here.\nFor example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'job_name = "${local.short_identifier_prefix}address_cleaning_housing_repairs"\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"helper_module_key"})," (required): This will be ",(0,s.jsx)(n.code,{children:"aws_s3_bucket_object.helpers.key"}),". It is the S3 object key for the helpers python module.\nThis gives you access to all of the functions defined in the ",(0,s.jsx)(n.a,{href:"https://github.com/LBHackney-IT/Data-Platform/tree/main/scripts/helpers",children:"helpers folder"}),". You can add new files or functions to the folder and they will be available in your glue jobs."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"pydeequ_zip_key"})," (required): This will be ",(0,s.jsx)(n.code,{children:"aws_s3_bucket_object.pydeequ.key"}),". It is the S3 object key for the PyDeequ python library, which is used for data quality testing in the Data Platform."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"spark_ui_output_storage_id"})," (required): This will be ",(0,s.jsx)(n.code,{children:"module.spark_ui_output_storage.bucket_id"}),". It is the S3 bucket ID where Spark UI Logs will be stored in order to monitor and debug the job."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.h4,{id:"script-name-location-required",children:"Script Name/ Location (required)"}),"\n",(0,s.jsxs)(n.p,{children:["One of the following variables must be populated: ",(0,s.jsx)(n.strong,{children:"script_name"})," OR ",(0,s.jsx)(n.strong,{children:"script_s3_object_key"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["If you are adding a new script to only be used for one Glue job you must provide a value for ",(0,s.jsx)(n.strong,{children:"script_name"})," and leave the second blank.\nIf your script file is already saved in S3 then you must provide a value for ",(0,s.jsx)(n.strong,{children:"script_s3_object_key"}),"."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"script_name"})," : Name of the Glue job script. Set this to the name of the script file you created in ",(0,s.jsx)(n.a,{href:"#1-add-your-script-to-the-data-platform-project-using-the-github-ui",children:"section 1"})," ",(0,s.jsxs)(n.strong,{children:["without the ",(0,s.jsx)(n.code,{children:".py"})," extension"]})," and ensure the name is all ",(0,s.jsx)(n.strong,{children:"lowercase"}),".\n",(0,s.jsx)(n.em,{children:"This file must have been saved in your departmental folder."})]}),"\n",(0,s.jsx)(n.p,{children:"For example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'script_name = "address_cleaning_housing_repairs"\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Note: you must add quotes around the script name as shown in the example."})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"script_s3_object_key"})," : S3 object key of the script file.\nIf your script is used across multiple jobs it may already be saved in S3, in this case you can provide the key for that object within the scripts S3 bucket e.g. ",(0,s.jsx)(n.code,{children:"aws_s3_bucket_object.address_matching.key"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"the-following-input-variables-are-optional",children:"The following input variables are optional:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.h4,{id:"variables-used-for-scheduling-a-glue-job",children:"Variables used for scheduling a Glue job"}),"\n",(0,s.jsxs)(n.p,{children:["To schedule your Glue job, you will need to set one of the following optional variables:\n",(0,s.jsx)(n.strong,{children:"triggered_by_crawler"}),", ",(0,s.jsx)(n.strong,{children:"triggered_by_job"})," or ",(0,s.jsx)(n.strong,{children:"schedule"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["The job created in this module will be triggered on completion of either\nthe crawler specified in ",(0,s.jsx)(n.strong,{children:"triggered_by_crawler"}),", the job specified in ",(0,s.jsx)(n.strong,{children:"triggered_by_job"}),", or the ",(0,s.jsx)(n.strong,{children:"schedule"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.em,{children:["Note: the placeholder variable ",(0,s.jsx)(n.code,{children:"<NAME_OF_GLUE_JOB_MODULE>"})," used in ",(0,s.jsx)(n.strong,{children:"trigger_by_job"})," and ",(0,s.jsx)(n.strong,{children:"triggered_by_crawler"}),"\nrefers to the existing Glue job module from which the job or crawler is being referenced."]})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"triggered_by_crawler"})," (optional): The Glue crawler that will trigger this job e.g."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"triggered_by_crawler = module.<NAME_OF_GLUE_JOB_MODULE>.crawler_name\n"})}),"\n",(0,s.jsxs)(n.p,{children:["From the ",(0,s.jsx)(n.a,{href:"#example-module-block",children:"example template below"}),", the name of the Glue job module would be ",(0,s.jsx)(n.code,{children:"manually_uploaded_csv_data_to_raw_parking"}),", and therefore you would write:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"triggered_by_crawler = module.manually_uploaded_csv_data_to_raw_parking.crawler_name\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"triggered_by_job"})," (optional): The Glue job that will trigger this job e.g."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"triggered_by_job = module.<NAME_OF_GLUE_JOB_MODULE>.job_name\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"schedule"})," (optional): Schedule to run the Glue job specified using Cron expressions (see ",(0,s.jsx)(n.a,{href:"https://docs.aws.amazon.com/AmazonCloudWatch/latest/events/ScheduledEvents.html#CronExpressions",children:"AWS Cron Expression documentation"}),")."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"For example, if you wanted your Glue job to run at 23:00:00pm, on every Monday, Tuesday, Wednesday, Thursday and Friday, every month,\nyour Cron expression would look like:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'schedule = "cron(0 0 23 ? * MON,TUE,WED,THU,FRI *)"\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["You can use ",(0,s.jsx)(n.a,{href:"https://www.freeformatter.com/cron-expression-generator-quartz.html",children:"this tool"})," to generate your Cron expressions."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"job_description"}),' (optional): A description of the AWS Glue job e.g. "Exports Google Sheets imported datasets to the landing zone"']}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"extra_jars"})," (optional): If your Glue job requires extra packages that are zipped in a JAR file, you can provide the list of the S3 path(s) to the JAR file(s) here.\nFor example:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'extra_jars = ["s3://${module.department_<DEPARTMENT_NAME>.glue_scripts_bucket.bucket_id}/<JARS_FILE_NAME>.jar", "s3://${module.department_<DEPARTMENT_NAME>.glue_scripts_bucket.bucket_id}/<JARS_FILE_NAME>.jar"]\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.em,{children:["Note: ensure that your department name is all lowercase with words separated by underscores\ne.g. replace ",(0,s.jsx)(n.code,{children:"<DEPARTMENT_NAME>"})," with ",(0,s.jsx)(n.code,{children:"housing_repairs"}),"."]})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"job_parameters"})," (optional): Here you can set some configuration for your Glue job or if your Glue job uses environment variables/ job parameters, you can set them here as well."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["You can find a list of optional Glue job configuration in ",(0,s.jsx)(n.a,{href:"https://docs.aws.amazon.com/glue/latest/dg/aws-glue-programming-etl-glue-arguments.html",children:"AWS's documentation"}),". A common one used in the Data Platform is ",(0,s.jsx)(n.strong,{children:"job bookmarking"}),". Which can be enabled like this:","\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{\n  "--job-bookmark-option" = "job-bookmark-enable"\n}\n'})}),"\n",(0,s.jsx)(n.em,{children:"Note: job bookmarking is disabled by default."})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.strong,{children:["If your Glue job was created using the ",(0,s.jsx)(n.code,{children:"Visual"})," tab in Glue Studio, you won't need to set any other job parameters and can continue setting other input variables where necessary."]})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["To retrieve the job parameters you set here, add this import statement to your script: ",(0,s.jsx)(n.code,{children:"from scripts.helpers.helpers import get_glue_env_var"})]}),"\n",(0,s.jsx)(n.p,{children:"You can then get the value of your job parameters to use in your script like this:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"s3_target_location = get_glue_env_var('s3_bucket_target', '')\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["In the following optional ",(0,s.jsx)(n.strong,{children:"job parameters"}),"; ",(0,s.jsx)(n.em,{children:'"--s3_bucket_target"'}),", ",(0,s.jsx)(n.em,{children:'"--s3_bucket_source"'})," and ",(0,s.jsx)(n.em,{children:'"--source_catalog_database"'}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"<ZONE>"})," refers to either: ",(0,s.jsx)(n.code,{children:"raw"}),", ",(0,s.jsx)(n.code,{children:"landing"}),", ",(0,s.jsx)(n.code,{children:"refined"}),", or ",(0,s.jsx)(n.code,{children:"trusted"})," S3 or Glue database zones."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Specifically for ",(0,s.jsx)(n.em,{children:'"--s3_bucket_source"'})," and ",(0,s.jsx)(n.em,{children:'"--s3_bucket_target"'}),", and any other S3 location path,\nensure that your department name and folder name is all ",(0,s.jsx)(n.strong,{children:"lowercase"})," and ",(0,s.jsx)(n.strong,{children:"hyphen separated"})," if necessary,\nand that there is a ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:'"/"'})}),' after the folder name (end of S3 path). For example, if your department is "Housing Repairs", it\nshould be written as ',(0,s.jsx)(n.code,{children:"housing-repairs"}),"."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:'"--s3_bucket_source"'})," (optional): the S3 source of the data used in the Glue job\ne.g."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'"--s3_bucket_source" = "s3://${module.<ZONE>_zone.bucket_id}/<YOUR_DEPARTMENT_NAME>/<FOLDER_NAME>/"\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:'"--s3_bucket_target"'})," (optional): the output S3 location for your Glue job\ne.g."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'"--s3_bucket_target" = "s3://${module.<ZONE>_zone.bucket_id}/<YOUR_DEPARTMENT_NAME>/<FOLDER_NAME>/"\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:'"--source_catalog_database"'})," (optional): the Glue database which contains the Glue ",(0,s.jsx)(n.em,{children:"source_catalog table"})," needed for the Glue job\ne.g."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'"--source_catalog_database" = module.department_<YOUR_DEPARTMENT_NAME>.<ZONE>_catalog_database_name\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsxs)(n.em,{children:["Note: ensure that your department name is all ",(0,s.jsx)(n.strong,{children:"lowercase"})," with ",(0,s.jsx)(n.strong,{children:"words separated by underscores"}),"\ne.g. ",(0,s.jsx)(n.code,{children:"housing_repairs"}),"."]})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:'"--source_catalog_table"'})," (optional): the Glue catalog source table of the data used in the Glue job\ne.g."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'"--source_catalog_table" = "housing_repairs_repairs_purdy"\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsxs)(n.em,{children:["Note: if sourcing data from a catalog table, the ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.code,{children:"--source_catalog_database"})})," job parameter must be set as well."]})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["See the ",(0,s.jsx)(n.a,{href:"#example-module-block",children:"example module"})," below for guidance on how to set your own job parameters."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"workflow_name"})," (optional): An existing workflow to add the triggers to"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsxs)(n.em,{children:["Note: this module ",(0,s.jsx)(n.strong,{children:"does not"})," create Glue workflows"]})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"crawler_details"})," (optional): Inputs required to create a crawler. If this variable is not provided then no crawler will be created. These are:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"database_name"}),": Glue database where results are written"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"module.department_<YOUR_DEPARTMENT_NAME>.<S3_BUCKET_ZONE>_catalog_database_name\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Where ",(0,s.jsx)(n.code,{children:"<S3_BUCKET_ZONE>"})," can be either: ",(0,s.jsx)(n.code,{children:"raw"}),", ",(0,s.jsx)(n.code,{children:"landing"}),", ",(0,s.jsx)(n.code,{children:"refined"}),", or ",(0,s.jsx)(n.code,{children:"trusted"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"s3_target_location"}),": The S3 location to be crawled.\nThis will likely be the same as the value of Glue job job parameter: ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"--s3_bucket_target"})})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'"s3://${module.<S3_BUCKET_ZONE>_zone_bucket_id}/<YOUR_DEPARTMENT_NAME>/<FOLDER_NAME>/"\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"table_prefix"}),": The table prefix used for catalog tables that are created in the specified Glue database (",(0,s.jsx)(n.strong,{children:"database_name"})," variable set above) in ",(0,s.jsx)(n.strong,{children:"Athena"}),",\nafter crawling the ",(0,s.jsx)(n.strong,{children:"s3_target_location"})," e.g. ",(0,s.jsx)(n.code,{children:'"housing_repairs_"'})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"configuration"})," (Optional): By default, the ",(0,s.jsx)(n.code,{children:"TableGroupingPolicy"})," will be set to ",(0,s.jsx)(n.code,{children:"CombineCompatibleSchemas"})]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"advanced-optional-input-variables",children:"Advanced optional input variables:"}),"\n",(0,s.jsx)(n.p,{children:"The default values for the following optional input variables are generally fine and don't need to be changed."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"max_concurrent_runs_of_glue_job"})," (optional): Max number of concurrent runs for the Glue job. The is set to ",(0,s.jsx)(n.strong,{children:"1"})," by default."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"trigger_enabled"})," (optional): Set to ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"false"})})," to disable scheduled or conditional triggers for the Glue job.\nThis is set to ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"true"})})," by default. ",(0,s.jsx)(n.em,{children:"Note: the value of this variable does not need to be surrounded by quotes."})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"glue_job_timeout"})," (optional): The job timeout in minutes. By default this is set to 2880 minutes (48 hours)."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.h4,{id:"optional-variables-used-for-configuring-the-capacity-a-glue-job",children:"Optional variables used for configuring the capacity a Glue job"}),"\n",(0,s.jsxs)(n.p,{children:["To change the capacity of your Glue job, you will need to set the following ",(0,s.jsx)(n.strong,{children:"glue_job_worker_type"})," and ",(0,s.jsx)(n.strong,{children:"number_of_workers_for_glue_job"})," variables.\nIn most instances, the default settings are fine, and you would only need to set or change these variables if your Glue job is processing very large datasets\nor performing complex transformations."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"number_of_workers_for_glue_job"})," (optional): The number of workers to use for the Glue job. The is set to ",(0,s.jsx)(n.strong,{children:"2"})," by default."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"glue_job_worker_type"})," (optional): Worker type for Glue job (see ",(0,s.jsx)(n.a,{href:"https://docs.aws.amazon.com/glue/latest/dg/add-job.html#:~:text=Own%20Custom%20Scripts.-,Worker%20type,-The%20following%20worker",children:"AWS documentation on 'Worker types"}),"'). The default is ",(0,s.jsx)(n.strong,{children:"Standard"}),'. This can either be set as "Standard", "G.1X" or "G.2X".']}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{title:"Before committing your changes, please check that:",type:"warning",children:(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["You have not changed any spacing before the ",(0,s.jsx)(n.code,{children:"="})," of input variables' values"]}),"\n",(0,s.jsxs)(n.li,{children:["You have not removed the ",(0,s.jsx)(n.code,{children:'"quotation marks"'})," around any values which use them"]}),"\n",(0,s.jsxs)(n.li,{children:["All equal signs (",(0,s.jsx)(n.code,{children:"="}),") line up as shown in the example below"]}),"\n",(0,s.jsx)(n.li,{children:"Any unneeded variables are removed by deleting the entire line"}),"\n"]})}),"\n",(0,s.jsxs)(n.ol,{start:"6",children:["\n",(0,s.jsxs)(n.li,{children:["Once you have finished creating your Glue job using the template and have populated all relevant variables,\nsubmit your job for review by the Data Platform team by following ",(0,s.jsx)(n.a,{href:"../../getting-set-up/using-github#committing-your-changes-to-the-data-platform-project",children:"this guide"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"example-module-block",children:"Example module block"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-markdown",children:'module "manually_uploaded_csv_data_to_raw_parking" {\n  source = "../modules/aws-glue-job"\n\n  department  = module.department_housing_repairs\n  job_name    = "${local.short_identifier_prefix}housing repairs address cleaning"\n  script_name = "address_cleaning_housing_repairs"\n  schedule    = "cron(0 23 ? * MON,TUE,WED,THU,FRI _)"\n  job_parameters = {\n    "--s3_bucket_source" = "${module.landing_zone.bucket_id}/manual/housing-repairs/repairs-axis/"\n    "--s3_bucket_target" = "${module.raw_zone.bucket_id}/housing-repairs/repairs-axis/"\n  }\n  crawler_details = {\n    database_name      = module.department_housing_repairs.raw_zone_catalog_database_name\n    s3_target_location = "s3://${module.raw_zone.bucket_id}/housing-repairs/repairs-axis/"\n    table_prefix       = "housing_repairs_"\n  }\n}\n'})})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>l});var s=r(6540);const o={},t=s.createContext(o);function i(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);