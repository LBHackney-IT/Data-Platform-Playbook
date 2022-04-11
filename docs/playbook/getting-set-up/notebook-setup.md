---
title: Local Notebook Environment Setup
description: "Local Notebook Environment Setup"
layout: playbook_js
tags: [playbook, setup]
---

## Introduction

**What is the notebooking tool**

Essentially a Jupyter server so that we can run Jupyter Notebooks. A Jupyter notebook is a web-based interactive development environment that runs Python code in a sequence of cells, which can be individually executed in the form of a notebook. This makes it easier to develop code and try things out on your own computer.

We have some ready-made notebooks which will include scripts that will allow interaction with the Data Platform. The Python code will be similar to what will eventually be used within the Data Platform infrastructure, therefore Jupyter notebooks are great for prototyping.

**Why should you use the notebooking tool**

-  The notebooking tool uses your local resources to execute the code, meaning you don’t consume AWS resources and compute power, saving the council money
-  It also gives you the error messages immediately, and is a lot easier to debug as a result. Which makes it more efficient for developing code

**Who is this tutorial for**

People who need to be set up with an environment to write code and learn how to code

## Pre-requisites

**Windows**

This Notebook environment guide will be for Windows. 

**Git**

Git is a Code Versioning Control tool. It is used to help you synchronise your local version of the code repository with the controlled version of the repository (our controlled shared version is in GitHub)

We suggest you install Git on its own. This is a very quick install and this will allow you to run commands in the terminal of your PC . Alternatively, Git comes as a plugin for most integrated development environments (PyCharm, Visual Studio Code) which is slightly more user friendly long term, but requires more installation.

-  **Benefits to Git**
   -  Updating the Data Platform Environment is very easy with Git commands
   -  Also cloning the Data Platform Repository is easier with Git commands.

-  **How to install Git**

   - Install git by following this link - [Git Guides](https://github.com/git-guides/install-git?msclkid=af84852cb0f211ec9ad73e08c013d33c)

-  **How to check your Git is working properly**
   - Open terminal by searching for cmd or command prompt in Windows
   - Type ```git version``` and press enter
   - The output will tell you which version of Git you have installed
   - If it says ```git is an unknown command``` then you don't have git installed


**Docker Desktop**

Docker is essentially a way of opening a virtual machine but for just one application.
We use Docker Desktop just to open a Jupyter Server locally so we have an environment to code Python but with the environment that is very similar to the AWS Glue Environment

- **Benefits of using Docker Desktop**

  - Means we don’t need to have a separate computer which will run our Jupyter Environment
  - Docker can be run on most operating systems
    

- **Installing Docker Desktop**

  - Install [Docker Desktop for Windows](https://hub.docker.com/editions/community/docker-ce-desktop-windows?msclkid=d06d5c4caeb011ec8b168b9f3d7e1e4e)
  - You also need the Linux Kernel Package found [Here](https://docs.microsoft.com/en-gb/windows/wsl/install-manual#step-4---download-the-linux-kernel-update-package)

**Data Platform Access**

You need access to the Data Platform to run the code which will access the Data Platform's Data

- **How to Check if your Data Platform Access is ok**

  - Click this [link](https://hackney.awsapps.com/start#/) to access Single Sign-on for AWS Services
  - Click `[AWS Account]` and check if you have any users with `DataPlatform` in its name
  - If you can't do this, you need a username for the Data Platform

## Notebook set up

**Setting up the Local Files**
1. Navigate to where you want the Data Platform Folder to be stored in `Windows Explorer`


2. Open the Terminal in that area by entering `cmd` in the address bar in Windows Explorer
   - You should see a terminal window with the path you navigated to `C:\Users\<your user name in windows>\<somewhere>`
    

3. Enter `git clone https://github.com/LBHackney-IT/Data-Platform.git` 
   - This will download the entire Data Platform Repository onto your Local drive, where you navigated to


4. Open the newly created `Data-Platform` folder and then Open the `notebook` folder


5. Open the terminal in this folder like above.


6. Enter `type nul > .env`. This creates an empty .env file in the notebook folder, if this worked properly, you should see a .env file in that folder


7. Now open the `aws-config` folder


8. Open the terminal in this folder like above.


9. Enter `type nul > credentials`. 
   - This creates an empty credentials file in the aws-config folder, if this worked properly, you should see a credentials file with no type. 

**Alternate Set Up Method using Batch Files**

This alternative method can be quicker and easier if you know how to make .bat files

1. Open `Notepad`


2. Copy and Paste the code block below into `Notepad`

```@echo off
setlocal
:PROMPT
SET /P AREYOUSURE=This will Download and create the Data Platform Notebooking Environment, continue? (y/n)?
IF /I "%AREYOUSURE%" NEQ "y" GOTO END

git clone https://github.com/LBHackney-IT/Data-Platform.git
cd Data-Platform
(echo cd notebook & echo start "" "http://localhost:8888" & echo docker compose up notebook & echo pause) > StartNotebookEnvironment.bat
(echo git pull & echo pause) > UpdateNotebookEnvironment.bat
cd notebook
type nul > .env
cd aws-config
type nul > credentials
pause

:END
endlocal
```
3. Go to `File > Save As`


4. Where it says `Save as type:` select `All Files`


5. Save the file with any name you want but end the name with `.bat`
    - This will make a .bat file with all the commands you need to create the Data Platform Notebooking Environment


6. Run the .bat file you have just created

**Authenticating the Data Platform Repository with AWS credentials.**

1. Go to AWS by clicking this [Link.](https://hackney.awsapps.com/start#/)
     
 
2. Click AWS Account
   

3. Click the user you would like to use, and then `Command line or programmatic access`
      

4. Select [Option 2: Add a profile to your AWS credentials file] and paste the contents into your AWS Credentials File
   - This File can be found in `Data-Platform > Notebook > aws-config`
   - Opening in Notepad is recommended since most computers will have notepad   


5. Replace the text in the square Brackets with `default`
    

## Opening the Data Platform Notebooking Environment

**Instructions**

1. Make sure Docker Desktop is running, and if it isn’t, open Docker Desktop
   

2. Open a terminal window in the Notebook folder of the Data Platform environment
   

3. In that terminal window, enter `docker compose up notebook`
   - This starts up a Jupyter Server on Docker 
   - This may require a bit of time to run and create the Instance
    

4. You can then access this server by typing `https://localhost:8888` into your internet browser of choice.

**How to make sure your Data Platform Environment works**

1. Start the Jupyter Environment
   

2. Open the Jupyter Notebook called `test-s3-connection.ipynb`
   

3. Run the first code block
   - If you see an output with `SparkSession available as 'spark'.` then your environment is set up properly
   - If you then see Data in a Dataframe format, then your connection to AWS S3 and credentials are also working properly

