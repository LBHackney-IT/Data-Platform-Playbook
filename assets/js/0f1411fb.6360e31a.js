"use strict";(self.webpackChunkdata_platform_playbook=self.webpackChunkdata_platform_playbook||[]).push([[7693],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return c}});var o=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=o.createContext({}),u=function(e){var t=o.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=u(a),c=n,h=d["".concat(s,".").concat(c)]||d[c]||p[c]||r;return a?o.createElement(h,i(i({ref:t},m),{},{components:a})):o.createElement(h,i({ref:t},m))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var u=2;u<r;u++)i[u]=a[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}d.displayName="MDXCreateElement"},7994:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return m},default:function(){return d}});var o=a(7462),n=a(3366),r=(a(7294),a(3905)),i=["components"],l={id:"using-glue-studio",title:"Using Glue Studio",description:"Using AWS Glue Studio to create ETL processes.",layout:"playbook_js",tags:["playbook"]},s=void 0,u={unversionedId:"playbook/transforming-data/using-aws-glue/using-glue-studio",id:"playbook/transforming-data/using-aws-glue/using-glue-studio",isDocsHomePage:!1,title:"Using Glue Studio",description:"Using AWS Glue Studio to create ETL processes.",source:"@site/docs/playbook/transforming-data/using-aws-glue/001-using-glue-studio.md",sourceDirName:"playbook/transforming-data/using-aws-glue",slug:"/playbook/transforming-data/using-aws-glue/using-glue-studio",permalink:"/Data-Platform-Playbook/playbook/transforming-data/using-aws-glue/using-glue-studio",editUrl:"https://github.com/LBHackney-IT/data-platform-playbook/edit/master/docs/playbook/transforming-data/using-aws-glue/001-using-glue-studio.md",tags:[{label:"playbook",permalink:"/Data-Platform-Playbook/tags/playbook"}],version:"current",sidebarPosition:1,frontMatter:{id:"using-glue-studio",title:"Using Glue Studio",description:"Using AWS Glue Studio to create ETL processes.",layout:"playbook_js",tags:["playbook"]},sidebar:"docs",previous:{title:"Guide to unit testing on the Data Platform",permalink:"/Data-Platform-Playbook/playbook/transforming-data/guides-to-testing-in-the-platform/unit-testing-guide"},next:{title:"Deploying Glue jobs to the Data Platform",permalink:"/Data-Platform-Playbook/playbook/transforming-data/using-aws-glue/deploy-glue-jobs"}},m=[{value:"Using AWS Glue Studio to create ETL processes",id:"using-aws-glue-studio-to-create-etl-processes",children:[]},{value:"Creating a new Glue job",id:"creating-a-new-glue-job",children:[{value:"Note: Exporting Data",id:"note-exporting-data",children:[]}]},{value:"Clone and edit an existing Glue job",id:"clone-and-edit-an-existing-glue-job",children:[{value:"Email notifications of failing Glue jobs",id:"email-notifications-of-failing-glue-jobs",children:[]}]}],p={toc:m};function d(e){var t=e.components,a=(0,n.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"using-aws-glue-studio-to-create-etl-processes"},"Using AWS Glue Studio to create ETL processes"),(0,r.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The aim of this guide is to help you get started in creating and testing your Glue jobs."),(0,r.kt)("p",{parentName:"div"},"Once your Glue job is ready and working as expected, you can refer to ",(0,r.kt)("a",{parentName:"p",href:"./deploy-glue-jobs"},"this guide"),"\nto deploy your Glue job to the Data Platform Production environment. You should keep your original Glue job (which was created in Glue Studio) should you need to make further improvements to it in the future\nand refer to the note at the bottom of ",(0,r.kt)("a",{parentName:"p",href:"./deploy-glue-jobs#1-add-your-script-to-the-data-platform-project-using-the-github-ui"},"section 1")," of ",(0,r.kt)("strong",{parentName:"p"},"Deploying Glue jobs to the Data Platform"),", to re-deploy the new version to the Data Platform Production environment."))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/glue/latest/ug/what-is-glue-studio.html"},"AWS Glue Studio")," is a new graphical interface that makes it easy to create, run, and monitor extract, transform, and load (ETL) jobs in AWS Glue."),(0,r.kt)("p",null,"To use AWS Glue Studio the job needs to be created manually. This guide includes the steps needed to create an editable job in Glue Studio. Templates may have already been created and existing jobs can be duplicated to make it easier to get started with Glue Studio. Dynamically created scripts using ",(0,r.kt)("a",{parentName:"p",href:"https://www.terraform.io/"},"terraform")," (the infrastructure as code tool Hackney use) will not have the ability to use the visual editor."),(0,r.kt)("p",null,"Note: If a job has already been created manually you can select the job using the radio button and in the job ",(0,r.kt)("em",{parentName:"p"},"Actions")," mennu, select ",(0,r.kt)("strong",{parentName:"p"},"Clone job"),"."),(0,r.kt)("h2",{id:"creating-a-new-glue-job"},"Creating a new Glue job"),(0,r.kt)("p",null,"Note: The instructions below assume an S3 Data Source and Target Location."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Log in to AWS Management Console."),(0,r.kt)("li",{parentName:"ol"},"Select the ",(0,r.kt)("strong",{parentName:"li"},"AWS Glue")," service from the services menu (or search field)."),(0,r.kt)("li",{parentName:"ol"},"From the AWS Glue menu ETL section, select ",(0,r.kt)("strong",{parentName:"li"},"AWS Glue Studio"),"."),(0,r.kt)("li",{parentName:"ol"},"From the AWS Glue Studio main page, choose the ",(0,r.kt)("strong",{parentName:"li"},"Create and manage jobs")," option."),(0,r.kt)("li",{parentName:"ol"},"Within the ",(0,r.kt)("em",{parentName:"li"},"Create Job")," section, select ",(0,r.kt)("strong",{parentName:"li"},"Source and target added to the graph")," and select desired Source and Target values."),(0,r.kt)("li",{parentName:"ol"},"Click the ",(0,r.kt)("strong",{parentName:"li"},"Create")," button."),(0,r.kt)("li",{parentName:"ol"},"In the Visual editor that is now displayed, click on the ",(0,r.kt)("em",{parentName:"li"},"Data Source - S3")," box and in the ",(0,r.kt)("em",{parentName:"li"},"Data source properties - S3")," tab to set ",(0,r.kt)("em",{parentName:"li"},"S3 source type")," to ",(0,r.kt)("strong",{parentName:"li"},"S3 location")," and set the ",(0,r.kt)("em",{parentName:"li"},"S3 URL")," for the source data."),(0,r.kt)("li",{parentName:"ol"},"Also ",(0,r.kt)("em",{parentName:"li"},"Data Target - S3")," box and in the ",(0,r.kt)("em",{parentName:"li"},"Data target properties - S3")," tab set the ",(0,r.kt)("em",{parentName:"li"},"S3 URL")," for the data target, usually your department folder in the Data Platform account.\n",(0,r.kt)("em",{parentName:"li"},"NB: You can add additional folders at this point for your new data within your department folder. Each department has an unrestricted directory within each zone where unrestricted datasets can be stored, in order to add further cross-department insights and maintain datasets. There is also an unrestricted department which allows users to maintain datasets which don't have access restrictions across each zone"),(0,r.kt)("strong",{parentName:"li"},"Data source and data target (amongst other operations) must be set to be able to save the job. You can also apply ",(0,r.kt)("em",{parentName:"strong"},"Transformations")," specific to your job via the Visual tab. See the ",(0,r.kt)("a",{parentName:"strong",href:"https://docs.aws.amazon.com/glue/latest/ug/edit-nodes-chapter.html"},"AWS Glue Studio Documentation")),"."),(0,r.kt)("li",{parentName:"ol"},"To complete the set up you need to select the ",(0,r.kt)("strong",{parentName:"li"},"Job details")," tab."),(0,r.kt)("li",{parentName:"ol"},"Complete the ",(0,r.kt)("em",{parentName:"li"},"Name")," and optional ",(0,r.kt)("em",{parentName:"li"},"Description")," fields. You may use this job as a template for repeat use, so a generic name to use as a template might be useful to begin with."),(0,r.kt)("li",{parentName:"ol"},"Select ",(0,r.kt)("strong",{parentName:"li"},"dataplatform-{environment}-glue-role")," where environment is either 'stg' or 'prod'; as the ",(0,r.kt)("em",{parentName:"li"},"IAM Role")," for the job."),(0,r.kt)("li",{parentName:"ol"},"The remaining standard fields default values are usually fine to use. The programming language Glue Studio creates can be Scala or Python."),(0,r.kt)("li",{parentName:"ol"},"In ",(0,r.kt)("em",{parentName:"li"},"Advanced properties")," check the ",(0,r.kt)("em",{parentName:"li"},"Script filename")," refers to the task being carried out."),(0,r.kt)("li",{parentName:"ol"},"Set the ",(0,r.kt)("em",{parentName:"li"},"Script path")," to the central scripts S3 bucket: ",(0,r.kt)("inlineCode",{parentName:"li"},"s3://dataplatform-{environment}-glue-scripts/custom/")," where environment is either 'stg' or 'prod' - you can create new folders or specify existing folders in the S3 bucket like this: ",(0,r.kt)("inlineCode",{parentName:"li"},"s3://dataplatform-{environment}-glue-scripts/custom/YOUR_FOLDER_NAME/"),"."),(0,r.kt)("li",{parentName:"ol"},"Set the ",(0,r.kt)("em",{parentName:"li"},"Temporary path")," to the central temp storage S3 bucket: ",(0,r.kt)("inlineCode",{parentName:"li"},"s3://dataplatform-{environment}-glue-temp-storage/")," where environment is either 'stg' or 'prod'."),(0,r.kt)("li",{parentName:"ol"},"In ",(0,r.kt)("em",{parentName:"li"},"Security configuration")," select the appropriate security configuration for your target bucket location (for example for the Raw Zone, use ",(0,r.kt)("strong",{parentName:"li"},"glue-job-security-configuration-to-raw"),")."),(0,r.kt)("li",{parentName:"ol"},"Ensure the ",(0,r.kt)("em",{parentName:"li"},"Server-side encryption")," option is ",(0,r.kt)("strong",{parentName:"li"},"not checked"),", so that it uses the buckets default encryption configuration."),(0,r.kt)("li",{parentName:"ol"},"In the ",(0,r.kt)("em",{parentName:"li"},"Tags")," section, add the key ",(0,r.kt)("inlineCode",{parentName:"li"},"PlatformDepartment")," and set the value as the name of your department.\nThis should be the same name which was used to set up the department on the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/LBHackney-IT/Data-Platform/blob/main/terraform/05-departments.tf"},"Data Platform"),"."),(0,r.kt)("li",{parentName:"ol"},"Add any further libraries or parameters you need in the ",(0,r.kt)("em",{parentName:"li"},"Advanced properties")," section.")),(0,r.kt)("h3",{id:"note-exporting-data"},"Note: Exporting Data"),(0,r.kt)("p",null,"When exporting data from your Glue Job it is important that you follow the Data Platforms partitioning stratagy. To do this, exports must be exported with the partitions import_year, import_month, import_day & import_date at a minimum. To accomplish this using AWS Glue Studio use the ",(0,r.kt)("inlineCode",{parentName:"p"},"Add a partition")," key option at the bottom of the Data target node. It is important to further note, that inorder to add these attributes as partitions, they must exist within the dataset as fields."),(0,r.kt)("h2",{id:"clone-and-edit-an-existing-glue-job"},"Clone and edit an existing Glue job"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"In the ",(0,r.kt)("em",{parentName:"li"},"Your jobs")," sections, select the radio button of the job you would like to clone."),(0,r.kt)("li",{parentName:"ol"},"In the ",(0,r.kt)("em",{parentName:"li"},"Actions")," dropdown, select ",(0,r.kt)("em",{parentName:"li"},"Clone job"),". If there is an information banner with a message ",(0,r.kt)("em",{parentName:"li"},"Your job was created outside of Glue Studio and has no DAG available")," (see screenshot below) there will not be a Visual tab and therefore you will not have an interface to edit your job. Instead you will need to edit your job in the python job script. To do this navigate to the ",(0,r.kt)("em",{parentName:"li"},"Script")," tab. If you prefer to use the interface, then select another job which has a Visual tab or create a new job as instructed in the ",(0,r.kt)("em",{parentName:"li"},"Creating a new Glue job")," section above.\n",(0,r.kt)("img",{parentName:"li",src:"https://user-images.githubusercontent.com/46002877/114702251-bcac0500-9d1b-11eb-8475-814523fd58dc.png",alt:"image"})),(0,r.kt)("li",{parentName:"ol"},"In the Job Details tab, update the ",(0,r.kt)("em",{parentName:"li"},"Name")," for your new job and check the ",(0,r.kt)("em",{parentName:"li"},"Creating a new Glue job")," seciton above to ensure the configuration suits your needs."),(0,r.kt)("li",{parentName:"ol"},"To save your job, select the ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"Save"))," button.")),(0,r.kt)("h3",{id:"email-notifications-of-failing-glue-jobs"},"Email notifications of failing Glue jobs"),(0,r.kt)("p",null,"Each time a Glue job fails, an email notification with details of the error message is sent to the respective department, and their subscribed members."),(0,r.kt)("p",null,"The message will include:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Name of the Glue job"),(0,r.kt)("li",{parentName:"ul"},"Error message"),(0,r.kt)("li",{parentName:"ul"},"Time of failure"),(0,r.kt)("li",{parentName:"ul"},"Job start time"),(0,r.kt)("li",{parentName:"ul"},"Job end time"),(0,r.kt)("li",{parentName:"ul"},"Job last modified time"),(0,r.kt)("li",{parentName:"ul"},"A link to log in to Hackney SSO and view the Job run details")),(0,r.kt)("p",null,"In order to receive email notifications, you will need to ensure that you are subscribed to receive emails from your department's ",(0,r.kt)("a",{parentName:"p",href:"https://groups.google.com/my-groups"},"Google group")," and that you have confirmed your subscription to receive AWS Notifications when prompted."),(0,r.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Ensure the ",(0,r.kt)("strong",{parentName:"p"},"PlatformDepartment")," tag is correctly set in the ",(0,r.kt)("em",{parentName:"p"},"Advanced details")," section in the Glue job's ",(0,r.kt)("em",{parentName:"p"},"Job Details")," (see ",(0,r.kt)("a",{parentName:"p",href:"#creating-a-new-glue-job"},"Creating a new Glue job")," section above)."))))}d.isMDXComponent=!0}}]);