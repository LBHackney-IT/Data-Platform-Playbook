(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{126:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(n),b=a,m=d["".concat(i,".").concat(b)]||d[b]||p[b]||r;return n?o.a.createElement(m,c(c({ref:t},l),{},{components:n})):o.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<r;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},91:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var a=n(3),o=n(7),r=(n(0),n(126)),i={title:"Datahub deployment",description:"Review datahub as a potential solution for a data catalogue",tags:null,layout:"layout"},c={unversionedId:"spikes/0007-datahub-deployment",id:"spikes/0007-datahub-deployment",isDocsHomePage:!1,title:"Datahub deployment",description:"Review datahub as a potential solution for a data catalogue",source:"@site/docs/spikes/0007-datahub-deployment.md",slug:"/spikes/0007-datahub-deployment",permalink:"/Data-Platform-Playbook/spikes/0007-datahub-deployment",editUrl:"https://github.com/LBHackney-IT/data-platform-playbook/edit/master/docs/spikes/0007-datahub-deployment.md",version:"current",sidebar:"docs",previous:{title:"Data Quality Testing",permalink:"/Data-Platform-Playbook/spikes/0007-data-quality-testing"},next:{title:"Amundsen deployment",permalink:"/Data-Platform-Playbook/spikes/0008-amundsen-deployment"}},s=[{value:"Objective",id:"objective",children:[]},{value:"Considerations",id:"considerations",children:[]},{value:"Findings",id:"findings",children:[{value:"Docker/container setup (via compose, ECS, Fargate etc)",id:"dockercontainer-setup-via-compose-ecs-fargate-etc",children:[]},{value:"SSO",id:"sso",children:[]},{value:"Role Based Access Control",id:"role-based-access-control",children:[]}]},{value:"Summary",id:"summary",children:[]},{value:"Helpful Resources/Documentation",id:"helpful-resourcesdocumentation",children:[]}],l={toc:s};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"objective"},"Objective"),Object(r.b)("p",null,"Confirm that the data catalog meets the minimum expectations for infrastructure and security so that it can be maintained long term"),Object(r.b)("h2",{id:"considerations"},"Considerations"),Object(r.b)("p",null,"The following criteria were to be investigated"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Docker/container setup (via compose, ECS, Fargate etc)"),Object(r.b)("li",{parentName:"ul"},"SSO"),Object(r.b)("li",{parentName:"ul"},"Role Based Access Control"),Object(r.b)("li",{parentName:"ul"},"Notifications/Alerts")),Object(r.b)("h2",{id:"findings"},"Findings"),Object(r.b)("h3",{id:"dockercontainer-setup-via-compose-ecs-fargate-etc"},"Docker/container setup (via compose, ECS, Fargate etc)"),Object(r.b)("p",null,"Deploying this with docker and ECS was not feasible due to the number of dependencies."),Object(r.b)("p",null,"Datahub provides ",Object(r.b)("a",{parentName:"p",href:"https://datahubproject.io/docs/deploy/aws"},"documentation")," on how to deploy using Kubernetes and AWS EKS. Due to a lack of kubernetes expertise, this route was not further explored."),Object(r.b)("p",null,"Finally, we got deployed datahub by ",Object(r.b)("a",{parentName:"p",href:"https://gist.github.com/elena-vi/032b3f4aba12a8e1d0ed8e7cb05fd66e"},"provisioning an ec2 instance"),", connecting to the instace though SSH, cloning the ",Object(r.b)("a",{parentName:"p",href:"https://github.com/linkedin/datahub"},"datahub repository")," in the instance, and running datahub via ",Object(r.b)("inlineCode",{parentName:"p"},"docker-compose"),"."),Object(r.b)("h3",{id:"sso"},"SSO"),Object(r.b)("p",null,"You can ",Object(r.b)("a",{parentName:"p",href:"https://datahubproject.io/docs/how/auth/sso/configure-oidc-react/"},"enable OIDC SSO")," in React application (datahub frontend)."),Object(r.b)("p",null,"This was not investigated in this spike due to lack of time."),Object(r.b)("h3",{id:"role-based-access-control"},"Role Based Access Control"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Limitation:")," Not reviewed as part of the spike, ran out of time."),Object(r.b)("h2",{id:"summary"},"Summary"),Object(r.b)("h4",{id:"limitations"},"Limitations"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Could not get DataHub CLI with the deployment process specified above to work"),Object(r.b)("li",{parentName:"ul"},"Must ensure a process for constantly re-cloning the repo for updates"),Object(r.b)("li",{parentName:"ul"},"Datahub has various dependencies"),Object(r.b)("li",{parentName:"ul"},"There are no obvious solutions for notifications or alerts")),Object(r.b)("h4",{id:"suggestions"},"Suggestions"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Investigate datahub SAAS as an option")),Object(r.b)("h2",{id:"helpful-resourcesdocumentation"},"Helpful Resources/Documentation"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"To deploy datahub, ensure an EC2 instance with at least 4GM memory to be able to run datahub docker"),Object(r.b)("li",{parentName:"ul"},"SSH into the instance and run the following:")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"sudo yum update -y\n\nsudo amazon-linux-extras install docker\n\nsudo service docker start\n\nsudo usermod -a -G docker ec2-user\n\n# restart connection\n\nsudo yum install git -y\n  # install docer-compose\nsudo curl -L https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m) -o /usr/local/bin/docker-compose\n\nsudo chmod +x /usr/local/bin/docker-compose\n  # download datahub\ngit clone https://github.com/linkedin/datahub.git\n\ncd datahub/docker/quickstart\n  # start datahub\ndocker-compose -f docker-compose.quickstart.yml up -d\n\ncd ../../metadata-ingestion/examples/recipes/\nvi glue_to_datahub.yml # add params\n\npython3 -m pip install --upgrade pip wheel setuptools\n\npip install 'acryl-datahub[glue]'\n\ndatahub ingest -c glue_to_datahub.yml\n")))}u.isMDXComponent=!0}}]);