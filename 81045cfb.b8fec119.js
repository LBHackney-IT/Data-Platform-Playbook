(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{122:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return h}));var n=a(0),o=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},b=function(e){var t=u(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,r=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=u(a),p=n,h=b["".concat(r,".").concat(p)]||b[p]||d[p]||i;return a?o.a.createElement(h,l(l({ref:t},s),{},{components:a})):o.a.createElement(h,l({ref:t},s))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,r=new Array(i);r[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,r[1]=l;for(var s=2;s<i;s++)r[s]=a[s];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},93:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return u}));var n=a(3),o=a(7),i=(a(0),a(122)),r={title:"Datahub deployment",description:"Review datahub as a potential solution for a data catalogue",tags:null,layout:"layout"},l={unversionedId:"spikes/0008-datahub-deployment",id:"spikes/0008-datahub-deployment",isDocsHomePage:!1,title:"Datahub deployment",description:"Review datahub as a potential solution for a data catalogue",source:"@site/docs/spikes/0008-datahub-deployment.md",slug:"/spikes/0008-datahub-deployment",permalink:"/Data-Platform-Playbook/spikes/0008-datahub-deployment",editUrl:"https://github.com/LBHackney-IT/data-platform-playbook/edit/master/docs/spikes/0008-datahub-deployment.md",version:"current",sidebar:"docs",previous:{title:"Data Quality Testing",permalink:"/Data-Platform-Playbook/spikes/0007-data-quality-testing"},next:{title:"Amundsen deployment",permalink:"/Data-Platform-Playbook/spikes/0009-amundsen-deployment"}},c=[{value:"Objective",id:"objective",children:[]},{value:"Considerations",id:"considerations",children:[]},{value:"Findings",id:"findings",children:[{value:"Docker/container setup (via compose, ECS, Fargate etc)",id:"dockercontainer-setup-via-compose-ecs-fargate-etc",children:[]},{value:"SSO",id:"sso",children:[]},{value:"Role Based Access Control",id:"role-based-access-control",children:[]}]},{value:"Summary",id:"summary",children:[]},{value:"Helpful Resources / Documentation",id:"helpful-resources--documentation",children:[{value:"Deploying to EC2",id:"deploying-to-ec2",children:[]},{value:"Deploying to EKS",id:"deploying-to-eks",children:[]}]}],s={toc:c};function u(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"objective"},"Objective"),Object(i.b)("p",null,"Confirm that the data catalog meets the minimum expectations for infrastructure and security so that it can be maintained long term"),Object(i.b)("h2",{id:"considerations"},"Considerations"),Object(i.b)("p",null,"The following criteria were to be investigated"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Docker/container setup (via compose, ECS, Fargate etc)"),Object(i.b)("li",{parentName:"ul"},"SSO"),Object(i.b)("li",{parentName:"ul"},"Role Based Access Control"),Object(i.b)("li",{parentName:"ul"},"Notifications/Alerts")),Object(i.b)("h2",{id:"findings"},"Findings"),Object(i.b)("h3",{id:"dockercontainer-setup-via-compose-ecs-fargate-etc"},"Docker/container setup (via compose, ECS, Fargate etc)"),Object(i.b)("p",null,"Deploying this with docker and ECS was not feasible due to the number of dependencies."),Object(i.b)("p",null,"Datahub provides ",Object(i.b)("a",{parentName:"p",href:"https://datahubproject.io/docs/deploy/aws"},"documentation")," on how to deploy using Kubernetes and AWS EKS. Due to a lack of kubernetes expertise, this route was not further explored."),Object(i.b)("p",null,"Finally, we got deployed datahub by ",Object(i.b)("a",{parentName:"p",href:"https://gist.github.com/elena-vi/032b3f4aba12a8e1d0ed8e7cb05fd66e"},"provisioning an ec2 instance"),", connecting to the instace though SSH, cloning the ",Object(i.b)("a",{parentName:"p",href:"https://github.com/linkedin/datahub"},"datahub repository")," in the instance, and running datahub via ",Object(i.b)("inlineCode",{parentName:"p"},"docker-compose"),"."),Object(i.b)("h3",{id:"sso"},"SSO"),Object(i.b)("p",null,"You can ",Object(i.b)("a",{parentName:"p",href:"https://datahubproject.io/docs/how/auth/sso/configure-oidc-react/"},"enable OIDC SSO")," in React application (datahub frontend)."),Object(i.b)("p",null,"This was not investigated in this spike due to lack of time."),Object(i.b)("h3",{id:"role-based-access-control"},"Role Based Access Control"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Limitation:")," Not reviewed as part of the spike, ran out of time."),Object(i.b)("h2",{id:"summary"},"Summary"),Object(i.b)("h4",{id:"limitations"},"Limitations"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Could not get DataHub CLI with the deployment process specified above to work"),Object(i.b)("li",{parentName:"ul"},"Must ensure a process for constantly re-cloning the repo for updates"),Object(i.b)("li",{parentName:"ul"},"Datahub has various dependencies"),Object(i.b)("li",{parentName:"ul"},"There are no obvious solutions for notifications or alerts")),Object(i.b)("h4",{id:"suggestions"},"Suggestions"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Investigate datahub SAAS as an option")),Object(i.b)("h2",{id:"helpful-resources--documentation"},"Helpful Resources / Documentation"),Object(i.b)("h3",{id:"deploying-to-ec2"},"Deploying to EC2"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"To deploy datahub, ensure an EC2 instance with at least 4GM memory to be able to run datahub docker"),Object(i.b)("li",{parentName:"ul"},"SSH into the instance and run the following:")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-sh"},"sudo yum update -y\n\nsudo amazon-linux-extras install docker\n\nsudo service docker start\n\nsudo usermod -a -G docker ec2-user\n\n# restart connection\n\nsudo yum install git -y\n  # install docer-compose\nsudo curl -L https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m) -o /usr/local/bin/docker-compose\n\nsudo chmod +x /usr/local/bin/docker-compose\n  # download datahub\ngit clone https://github.com/linkedin/datahub.git\n\ncd datahub/docker/quickstart\n  # start datahub\ndocker-compose -f docker-compose.quickstart.yml up -d\n\ncd ../../metadata-ingestion/examples/recipes/\nvi glue_to_datahub.yml # add params\n\npython3 -m pip install --upgrade pip wheel setuptools\n\npip install 'acryl-datahub[glue]'\n\ndatahub ingest -c glue_to_datahub.yml\n")),Object(i.b)("h3",{id:"deploying-to-eks"},"Deploying to EKS"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"To deploy datahub to EKS we used eksctl, helm and kubectl using the following ",Object(i.b)("a",{parentName:"li",href:"https://datahubproject.io/docs/deploy/aws"},"guide")),Object(i.b)("li",{parentName:"ul"},"When deploying to a production environment we would prefer to deploy using terraform.")),Object(i.b)("p",null,"We have added helper files to the data platform project under the ",Object(i.b)("inlineCode",{parentName:"p"},"datahub-deployment")," directory. This directory includes:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"A ",Object(i.b)("a",{parentName:"li",href:"https://github.com/LBHackney-IT/Data-Platform/blob/datahub-eks-deployment/datahub-deployment/Makefile"},"makefile")," with commands for various common tasks"),Object(i.b)("li",{parentName:"ul"},"A values.yaml file which contains a helm config for the datahub chart"),Object(i.b)("li",{parentName:"ul"},"A kubeconfig file with the details for connecting to staging eks cluster",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Note: The file does NOT contain credentials, your aws credentials are used")))),Object(i.b)("h5",{id:"makefile"},"Makefile"),Object(i.b)("p",null,"The make file contains the following commands:"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"generate-kubeconfig-file"),"\nCreates or updates the kubeconfig file for the staging cluster"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"get-all"),"\nGet information about all the resources running in the cluster"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"upgrade-datahub-release"),"\nUpdates the datahub images to the latest version"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"datahub-release-history"),"\nPrints historical revisions for a given release"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"pull-datahub-repository"),"\nPull the latest datahub helm repository"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"datahub-source"),"\nGit clone the datahub project repo to your current location"),Object(i.b)("h4",{id:"data-ingestion"},"Data Ingestion"),Object(i.b)("p",null,"To ingest data into the data catalogue we followed this guide: ",Object(i.b)("a",{parentName:"p",href:"https://datahubproject.io/docs/metadata-ingestion"},"Metadata Ingestion")),Object(i.b)("p",null,"This involved installing the PyPI prerequisites on a engineer machine using the following commands:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-sh"},'python3 -m venv venv\nsource venv/bin/activate\npip3 install --upgrade pip wheel setuptools\npip3 install --upgrade acryl-datahub\ndatahub version\n# If you see "command not found", try running this instead: python3 -m datahub version\n')),Object(i.b)("p",null,"Once the prerequisites had been installed we needed to install the specific plugin that we need in order to be able to\ningest data from the data platform. In this case we installed the glue plugin which allowed us to ingest data from the\nGlue data catalogue."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-sh"},"pip3 install 'acryl-datahub[glue]' # install the required plugin\ndatahub check plugins\n")),Object(i.b)("p",null,"Once the prerequisites and the required plugins are installed you can then ingest the data from the glue catalogue by locate and update the glue_to_datahub.yml metadata ingestion example receipe which can be found here: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/linkedin/datahub/blob/master/metadata-ingestion/examples/recipes/glue_to_datahub.yml"},"/metadata-ingestion/examples/recipes/glue_to_datahub.yml")),Object(i.b)("p",null,"The contents of which should look as below:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'# see https://datahubproject.io/docs/metadata-ingestion/source_docs/glue for complete documentation\nsource:\n  type: glue\n  config:\n    aws_region: "us-west-2"\n    extract_transforms: true\n\n# see https://datahubproject.io/docs/metadata-ingestion/sink_docs/datahub for complete documentation\nsink:\n  type: "datahub-rest"\n  config:\n    server: "http://localhost:8080"\n')),Object(i.b)("p",null,"You will need to update the following properties:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"source -> config -> aws_region")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"sink -> config -> server"))),Object(i.b)("p",null,"With values which reflect the staging environment. One you have updated the recipe configuration you can run the\ningestion with the following command:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-sh/"},"datahub ingest -c ./metadata-ingestion/examples/recipes/glue_to_datahub.yml\n")),Object(i.b)("h4",{id:"dns-configuration"},"DNS configuration"),Object(i.b)("p",null,"When setting up the DataHub data catalogue site we required both a security certificate and a domain name to be associatable with the Kubernetes cluster."),Object(i.b)("p",null,"To accomplish this we:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Created a Name Server (NS) record on the Hackney domain for the data.hackney.gov.uk sub-domain. ",Object(i.b)("a",{parentName:"li",href:"https://github.com/LBHackney-IT/infrastructure/pull/456/files#diff-ca01997613717d7b58e624d2faf9e939b9e1bc8debc83fd01c85158003b7d8ac"},"Pull Request"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"This granted the production Data Platform account control over the sub-domain."))),Object(i.b)("li",{parentName:"ul"},"Created a Name Server (NS) record on the data.hackney.gov.uk Hosted Zone for the stg.data.hackney.gov.uk sub-domain.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"This granted the staging Data Platform account control over the sub-domain."))),Object(i.b)("li",{parentName:"ul"},"Created a CName record on the stg.data.hackney.gov.uk Hosted Zone for the datahub.stg.data.hackney.gove.uk sub-domain that points at the Kubernetes cluster."),Object(i.b)("li",{parentName:"ul"},"Using AWS Certificate Manager created a security certificate for datahub.stg.data.hackney.gove.uk by DNS validation.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"A guide to creating a certificate is referenced by the datahub setup guide and can be found here: ",Object(i.b)("a",{parentName:"li",href:"https://docs.aws.amazon.com/acm/latest/userguide/gs-acm-request-public.html"},"Create Certificate"))))))}u.isMDXComponent=!0}}]);