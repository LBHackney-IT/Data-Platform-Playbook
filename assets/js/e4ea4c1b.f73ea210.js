"use strict";(self.webpackChunkdata_platform_playbook=self.webpackChunkdata_platform_playbook||[]).push([[9056],{3470:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var t=o(4848),i=o(8453);const s={title:"Local Notebook Environment Setup",description:"Local Notebook Environment Setup",layout:"playbook_js",tags:["playbook","setup"]},r=void 0,l={id:"playbook/getting-set-up/notebook-setup",title:"Local Notebook Environment Setup",description:"Local Notebook Environment Setup",source:"@site/docs/playbook/getting-set-up/notebook-setup.md",sourceDirName:"playbook/getting-set-up",slug:"/playbook/getting-set-up/notebook-setup",permalink:"/Data-Platform-Playbook/playbook/getting-set-up/notebook-setup",draft:!1,unlisted:!1,editUrl:"https://github.com/LBHackney-IT/data-platform-playbook/edit/master/docs/playbook/getting-set-up/notebook-setup.md",tags:[{inline:!0,label:"playbook",permalink:"/Data-Platform-Playbook/tags/playbook"},{inline:!0,label:"setup",permalink:"/Data-Platform-Playbook/tags/setup"}],version:"current",frontMatter:{title:"Local Notebook Environment Setup",description:"Local Notebook Environment Setup",layout:"playbook_js",tags:["playbook","setup"]},sidebar:"docs",previous:{title:"Getting started with the local PySpark environment",permalink:"/Data-Platform-Playbook/playbook/getting-set-up/local-pyspark-environment"},next:{title:"Onboarding new departments to the platform",permalink:"/Data-Platform-Playbook/playbook/getting-set-up/onboarding-new-departments-to-the-platform"}},a={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Pre-requisites",id:"pre-requisites",level:2},{value:"Notebook set up",id:"notebook-set-up",level:2},{value:"Opening the Data Platform Notebooking Environment",id:"opening-the-data-platform-notebooking-environment",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"What is the notebooking tool"})}),"\n",(0,t.jsx)(n.p,{children:"A Jupyter notebook is a web-based interactive development environment that runs Python code in a sequence of cells, which can be individually executed in the form of a notebook. This makes it easier to develop code and try things out on your own computer."}),"\n",(0,t.jsx)(n.p,{children:"We have some ready-made notebooks which will include scripts that will allow interaction with the Data Platform. The Python code will be similar to what will eventually be used within the Data Platform infrastructure, therefore Jupyter notebooks are great for prototyping."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Why should you use the notebooking tool"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"The notebooking tool uses your local resources to execute the code, meaning you don\u2019t consume AWS resources and compute power"}),"\n",(0,t.jsx)(n.li,{children:"It also gives you the error messages immediately, and is a lot easier to debug as a result. Which makes it more efficient for developing code"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Who is this tutorial for"})}),"\n",(0,t.jsx)(n.p,{children:"People who need to be set up with an environment to write code and learn how to code"}),"\n",(0,t.jsx)(n.h2,{id:"pre-requisites",children:"Pre-requisites"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Windows"})}),"\n",(0,t.jsx)(n.p,{children:"This Notebook environment guide will be for Windows."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Git"})}),"\n",(0,t.jsx)(n.p,{children:"Git is a Code Versioning Control tool. It is used to help you synchronise your local version of the code repository with the controlled version of the repository (our controlled shared version is in GitHub)"}),"\n",(0,t.jsx)(n.p,{children:"We suggest you install Git on its own. This is a very quick install and this will allow you to run commands in the terminal of your PC . Alternatively, Git comes as a plugin for most integrated development environments (PyCharm, Visual Studio Code) which is slightly more user friendly long term, but requires more installation."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Benefits to Git"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Updating the Data Platform Environment is very easy with Git commands"}),"\n",(0,t.jsx)(n.li,{children:"Also cloning the Data Platform Repository is easier with Git commands."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"How to install Git"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Install git by following this link - ",(0,t.jsx)(n.a,{href:"https://github.com/git-guides/install-git?msclkid=af84852cb0f211ec9ad73e08c013d33c",children:"Git Guides"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"How to check your Git is working properly"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Open terminal by searching for cmd or command prompt in Windows"}),"\n",(0,t.jsxs)(n.li,{children:["Type ",(0,t.jsx)(n.code,{children:"git version"})," and press enter"]}),"\n",(0,t.jsx)(n.li,{children:"The output will tell you which version of Git you have installed"}),"\n",(0,t.jsxs)(n.li,{children:["If it says ",(0,t.jsx)(n.code,{children:"git is an unknown command"})," then you don't have git installed"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Docker"})}),"\n",(0,t.jsx)(n.p,{children:"Docker is essentially a way of opening a virtual machine but for just one application.\nWe use Docker Desktop to open a Jupyter Server locally on our machine so we have an environment that allows us to work with Python as well as_PySpark_ (a Python interface to Apache Spark). This replicates what we will work with in AWS Glue."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Benefits of using Docker"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Means we don\u2019t need to have a separate computer which will run our Jupyter Environment"}),"\n",(0,t.jsx)(n.li,{children:"Docker can be run on most operating systems"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Installing Docker"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Install ",(0,t.jsx)(n.a,{href:"https://hub.docker.com/editions/community/docker-ce-desktop-windows?msclkid=d06d5c4caeb011ec8b168b9f3d7e1e4e",children:"Docker Desktop for Windows"})]}),"\n",(0,t.jsxs)(n.li,{children:["You also need the Linux Kernel Package found ",(0,t.jsx)(n.a,{href:"https://docs.microsoft.com/en-gb/windows/wsl/install-manual#step-4---download-the-linux-kernel-update-package",children:"Here"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Data Platform Access"})}),"\n",(0,t.jsx)(n.p,{children:"You need to be given access to the Data Platform in order to access data."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"How to check if you have access to the Data Platform"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Click this ",(0,t.jsx)(n.a,{href:"https://hackney.awsapps.com/start#/",children:"link"})," to access Single Sign-on for AWS Services"]}),"\n",(0,t.jsxs)(n.li,{children:["Click ",(0,t.jsx)(n.code,{children:"[AWS Account]"})," and check if you have any users with ",(0,t.jsx)(n.code,{children:"DataPlatform"})," in its name"]}),"\n",(0,t.jsx)(n.li,{children:"If you can't do this, you need a username for the Data Platform"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"notebook-set-up",children:"Notebook set up"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Setting up the Local Files"})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Navigate to where you want the Data Platform folder to be stored in ",(0,t.jsx)(n.code,{children:"Windows Explorer"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Open the Terminal in that area by entering ",(0,t.jsx)(n.code,{children:"cmd"})," in the address bar in Windows Explorer"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["You should see a terminal window with the path you navigated to ",(0,t.jsx)(n.code,{children:"C:\\Users\\<your user name in windows>\\<somewhere>"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Enter ",(0,t.jsx)(n.code,{children:"git clone https://github.com/LBHackney-IT/Data-Platform.git"})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"This will download the entire Data Platform Repository onto your Local drive, where you navigated to"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Open the newly created ",(0,t.jsx)(n.code,{children:"Data-Platform"})," folder and then Open the ",(0,t.jsx)(n.code,{children:"notebook"})," folder"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Open the terminal in this folder like above."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Enter ",(0,t.jsx)(n.code,{children:"type nul > .env"}),". This creates an empty .env file in the notebook folder, if this worked properly, you should see a .env file in that folder"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Now open the ",(0,t.jsx)(n.code,{children:"aws-config"})," folder"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Open the terminal in this folder like above."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Enter ",(0,t.jsx)(n.code,{children:"type nul > credentials"}),"."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"This creates an empty credentials file in the aws-config folder, if this worked properly, you should see a credentials file with no type."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Authenticating the Data Platform Repository with AWS credentials."})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Go to AWS by clicking this ",(0,t.jsx)(n.a,{href:"https://hackney.awsapps.com/start#/",children:"Link."})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Click AWS Account"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Click the user you would like to use, and then ",(0,t.jsx)(n.code,{children:"Command line or programmatic access"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Select [Option 2: Add a profile to your AWS credentials file] and paste the contents into your AWS Credentials File"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["This File can be found in ",(0,t.jsx)(n.code,{children:"Data-Platform > Notebook > aws-config"})]}),"\n",(0,t.jsx)(n.li,{children:"Opening in Notepad is recommended since most computers will have notepad"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Replace the text in the square Brackets with ",(0,t.jsx)(n.code,{children:"default"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"opening-the-data-platform-notebooking-environment",children:"Opening the Data Platform Notebooking Environment"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Instructions"})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Make sure Docker Desktop is running, and if it isn\u2019t, open Docker Desktop"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Open a terminal window in the Notebook folder of the Data Platform environment"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["In that terminal window, enter ",(0,t.jsx)(n.code,{children:"docker compose up notebook"})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"This starts up a Jupyter Server on Docker"}),"\n",(0,t.jsx)(n.li,{children:"This may require a bit of time to run and create the Instance"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["You can then access this server by typing ",(0,t.jsx)(n.code,{children:"https://localhost:8888"})," into your internet browser of choice."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"How to make sure your Data Platform Environment works"})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Start the Jupyter Environment"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Open the Jupyter Notebook called ",(0,t.jsx)(n.code,{children:"test-s3-connection.ipynb"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Run the first code block"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["If you see an output with ",(0,t.jsx)(n.code,{children:"SparkSession available as 'spark'."})," then your environment is set up properly"]}),"\n",(0,t.jsx)(n.li,{children:"If you then see Data in a Dataframe format, then your connection to AWS S3 and credentials are also working properly"}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>r,x:()=>l});var t=o(6540);const i={},s=t.createContext(i);function r(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);