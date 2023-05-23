"use strict";(self.webpackChunkdata_platform_playbook=self.webpackChunkdata_platform_playbook||[]).push([[1492],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),c=u(a),h=o,m=c["".concat(s,".").concat(h)]||c[h]||p[h]||i;return a?n.createElement(m,l(l({ref:t},d),{},{components:a})):n.createElement(m,l({ref:t},d))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,l=new Array(i);l[0]=h;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[c]="string"==typeof e?e:o,l[1]=r;for(var u=2;u<i;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},9944:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>r,toc:()=>u});var n=a(7462),o=(a(7294),a(3905));const i={title:"Datahub deployment",description:"Review datahub as a potential solution for a data catalogue",tags:["tech-spike"],layout:"layout"},l=void 0,r={unversionedId:"spikes/datahub-deployment",id:"spikes/datahub-deployment",title:"Datahub deployment",description:"Review datahub as a potential solution for a data catalogue",source:"@site/docs/spikes/datahub-deployment.md",sourceDirName:"spikes",slug:"/spikes/datahub-deployment",permalink:"/Data-Platform-Playbook/spikes/datahub-deployment",draft:!1,editUrl:"https://github.com/LBHackney-IT/data-platform-playbook/edit/master/docs/spikes/datahub-deployment.md",tags:[{label:"tech-spike",permalink:"/Data-Platform-Playbook/tags/tech-spike"}],version:"current",frontMatter:{title:"Datahub deployment",description:"Review datahub as a potential solution for a data catalogue",tags:["tech-spike"],layout:"layout"},sidebar:"docs",previous:{title:"Data Quality Testing",permalink:"/Data-Platform-Playbook/spikes/data-quality-testing"},next:{title:"Ingesting data from MSSQL database",permalink:"/Data-Platform-Playbook/spikes/mssql-ingestion"}},s={},u=[{value:"Objective",id:"objective",level:2},{value:"Considerations",id:"considerations",level:2},{value:"Findings",id:"findings",level:2},{value:"Docker/container setup (via compose, ECS, Fargate etc)",id:"dockercontainer-setup-via-compose-ecs-fargate-etc",level:3},{value:"SSO",id:"sso",level:3},{value:"Role Based Access Control",id:"role-based-access-control",level:3},{value:"Summary",id:"summary",level:2},{value:"Limitations",id:"limitations",level:4},{value:"Suggestions",id:"suggestions",level:4},{value:"Helpful Resources / Documentation",id:"helpful-resources--documentation",level:2},{value:"Deploying to EC2",id:"deploying-to-ec2",level:3},{value:"Deploying to EKS",id:"deploying-to-eks",level:3},{value:"Makefile",id:"makefile",level:5},{value:"Data Ingestion",id:"data-ingestion",level:4},{value:"DNS configuration",id:"dns-configuration",level:4}],d={toc:u},c="wrapper";function p(e){let{components:t,...a}=e;return(0,o.kt)(c,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"objective"},"Objective"),(0,o.kt)("p",null,"Confirm that the data catalog meets the minimum expectations for infrastructure and security so that it can be maintained long term"),(0,o.kt)("h2",{id:"considerations"},"Considerations"),(0,o.kt)("p",null,"The following criteria were to be investigated"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Docker/container setup (via compose, ECS, Fargate etc)"),(0,o.kt)("li",{parentName:"ul"},"SSO"),(0,o.kt)("li",{parentName:"ul"},"Role Based Access Control"),(0,o.kt)("li",{parentName:"ul"},"Notifications/Alerts")),(0,o.kt)("h2",{id:"findings"},"Findings"),(0,o.kt)("h3",{id:"dockercontainer-setup-via-compose-ecs-fargate-etc"},"Docker/container setup (via compose, ECS, Fargate etc)"),(0,o.kt)("p",null,"Deploying this with docker and ECS was not feasible due to the number of dependencies."),(0,o.kt)("p",null,"Datahub provides ",(0,o.kt)("a",{parentName:"p",href:"https://datahubproject.io/docs/deploy/aws"},"documentation")," on how to deploy using Kubernetes and AWS EKS. Due to a lack of kubernetes expertise, this route was not further explored."),(0,o.kt)("p",null,"Finally, we got deployed datahub by ",(0,o.kt)("a",{parentName:"p",href:"https://gist.github.com/elena-vi/032b3f4aba12a8e1d0ed8e7cb05fd66e"},"provisioning an ec2 instance"),", connecting to the instace though SSH, cloning the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/linkedin/datahub"},"datahub repository")," in the instance, and running datahub via ",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose"),"."),(0,o.kt)("h3",{id:"sso"},"SSO"),(0,o.kt)("p",null,"You can ",(0,o.kt)("a",{parentName:"p",href:"https://datahubproject.io/docs/how/auth/sso/configure-oidc-react/"},"enable OIDC SSO")," in React application (datahub frontend)."),(0,o.kt)("p",null,"This was not investigated in this spike due to lack of time."),(0,o.kt)("h3",{id:"role-based-access-control"},"Role Based Access Control"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Limitation:")," Not reviewed as part of the spike, ran out of time."),(0,o.kt)("h2",{id:"summary"},"Summary"),(0,o.kt)("h4",{id:"limitations"},"Limitations"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Could not get DataHub CLI with the deployment process specified above to work"),(0,o.kt)("li",{parentName:"ul"},"Must ensure a process for constantly re-cloning the repo for updates"),(0,o.kt)("li",{parentName:"ul"},"Datahub has various dependencies"),(0,o.kt)("li",{parentName:"ul"},"There are no obvious solutions for notifications or alerts")),(0,o.kt)("h4",{id:"suggestions"},"Suggestions"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Investigate datahub SAAS as an option")),(0,o.kt)("h2",{id:"helpful-resources--documentation"},"Helpful Resources / Documentation"),(0,o.kt)("h3",{id:"deploying-to-ec2"},"Deploying to EC2"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"To deploy datahub, ensure an EC2 instance with at least 4GM memory to be able to run datahub docker"),(0,o.kt)("li",{parentName:"ul"},"SSH into the instance and run the following:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"sudo yum update -y\n\nsudo amazon-linux-extras install docker\n\nsudo service docker start\n\nsudo usermod -a -G docker ec2-user\n\n# restart connection\n\nsudo yum install git -y\n  # install docer-compose\nsudo curl -L https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m) -o /usr/local/bin/docker-compose\n\nsudo chmod +x /usr/local/bin/docker-compose\n  # download datahub\ngit clone https://github.com/linkedin/datahub.git\n\ncd datahub/docker/quickstart\n  # start datahub\ndocker-compose -f docker-compose.quickstart.yml up -d\n\ncd ../../metadata-ingestion/examples/recipes/\nvi glue_to_datahub.yml # add params\n\npython3 -m pip install --upgrade pip wheel setuptools\n\npip install 'acryl-datahub[glue]'\n\ndatahub ingest -c glue_to_datahub.yml\n")),(0,o.kt)("h3",{id:"deploying-to-eks"},"Deploying to EKS"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"To deploy datahub to EKS we used eksctl, helm and kubectl using the following ",(0,o.kt)("a",{parentName:"li",href:"https://datahubproject.io/docs/deploy/aws"},"guide")),(0,o.kt)("li",{parentName:"ul"},"When deploying to a production environment we would prefer to deploy using terraform.")),(0,o.kt)("p",null,"We have added helper files to the data platform project under the ",(0,o.kt)("inlineCode",{parentName:"p"},"datahub-deployment")," directory. This directory includes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/LBHackney-IT/Data-Platform/blob/datahub-eks-deployment/datahub-deployment/Makefile"},"makefile")," with commands for various common tasks"),(0,o.kt)("li",{parentName:"ul"},"A values.yaml file which contains a helm config for the datahub chart"),(0,o.kt)("li",{parentName:"ul"},"A kubeconfig file with the details for connecting to staging eks cluster",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Note: The file does NOT contain credentials, your aws credentials are used")))),(0,o.kt)("h5",{id:"makefile"},"Makefile"),(0,o.kt)("p",null,"The make file contains the following commands:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"generate-kubeconfig-file"),"\nCreates or updates the kubeconfig file for the staging cluster"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"get-all"),"\nGet information about all the resources running in the cluster"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"upgrade-datahub-release"),"\nUpdates the datahub images to the latest version"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"datahub-release-history"),"\nPrints historical revisions for a given release"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"pull-datahub-repository"),"\nPull the latest datahub helm repository"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"datahub-source"),"\nGit clone the datahub project repo to your current location"),(0,o.kt)("h4",{id:"data-ingestion"},"Data Ingestion"),(0,o.kt)("p",null,"To ingest data into the data catalogue we followed this guide: ",(0,o.kt)("a",{parentName:"p",href:"https://datahubproject.io/docs/metadata-ingestion"},"Metadata Ingestion")),(0,o.kt)("p",null,"This involved installing the PyPI prerequisites on a engineer machine using the following commands:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'python3 -m venv venv\nsource venv/bin/activate\npip3 install --upgrade pip wheel setuptools\npip3 install --upgrade acryl-datahub\ndatahub version\n# If you see "command not found", try running this instead: python3 -m datahub version\n')),(0,o.kt)("p",null,"Once the prerequisites had been installed we needed to install the specific plugin that we need in order to be able to\ningest data from the data platform. In this case we installed the glue plugin which allowed us to ingest data from the\nGlue data catalogue."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"pip3 install 'acryl-datahub[glue]' # install the required plugin\ndatahub check plugins\n")),(0,o.kt)("p",null,"Once the prerequisites and the required plugins are installed you can then ingest the data from the glue catalogue by locate and update the glue_to_datahub.yml metadata ingestion example receipe which can be found here: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/linkedin/datahub/blob/master/metadata-ingestion/examples/recipes/glue_to_datahub.yml"},"/metadata-ingestion/examples/recipes/glue_to_datahub.yml")),(0,o.kt)("p",null,"The contents of which should look as below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'# see https://datahubproject.io/docs/metadata-ingestion/source_docs/glue for complete documentation\nsource:\n  type: glue\n  config:\n    aws_region: "us-west-2"\n    extract_transforms: true\n\n# see https://datahubproject.io/docs/metadata-ingestion/sink_docs/datahub for complete documentation\nsink:\n  type: "datahub-rest"\n  config:\n    server: "http://localhost:8080"\n')),(0,o.kt)("p",null,"You will need to update the following properties:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"source -> config -> aws_region")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"sink -> config -> server"))),(0,o.kt)("p",null,"With values which reflect the staging environment. One you have updated the recipe configuration you can run the\ningestion with the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh/"},"datahub ingest -c ./metadata-ingestion/examples/recipes/glue_to_datahub.yml\n")),(0,o.kt)("h4",{id:"dns-configuration"},"DNS configuration"),(0,o.kt)("p",null,"When setting up the DataHub data catalogue site we required both a security certificate and a domain name to be associatable with the Kubernetes cluster."),(0,o.kt)("p",null,"To accomplish this we:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Created a Name Server (NS) record on the Hackney domain for the data.hackney.gov.uk sub-domain. ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/LBHackney-IT/infrastructure/pull/456/files#diff-ca01997613717d7b58e624d2faf9e939b9e1bc8debc83fd01c85158003b7d8ac"},"Pull Request"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"This granted the production Data Platform account control over the sub-domain."))),(0,o.kt)("li",{parentName:"ul"},"Created a Name Server (NS) record on the data.hackney.gov.uk Hosted Zone for the stg.data.hackney.gov.uk sub-domain.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"This granted the staging Data Platform account control over the sub-domain."))),(0,o.kt)("li",{parentName:"ul"},"Created a CName record on the stg.data.hackney.gov.uk Hosted Zone for the datahub.stg.data.hackney.gove.uk sub-domain that points at the Kubernetes cluster."),(0,o.kt)("li",{parentName:"ul"},"Using AWS Certificate Manager created a security certificate for datahub.stg.data.hackney.gove.uk by DNS validation.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"A guide to creating a certificate is referenced by the datahub setup guide and can be found here: ",(0,o.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/acm/latest/userguide/gs-acm-request-public.html"},"Create Certificate"))))))}p.isMDXComponent=!0}}]);