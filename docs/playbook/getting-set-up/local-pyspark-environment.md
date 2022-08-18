---
title: Local PySpark Environment Setup
description: "Local PySpark Environment Setup"
layout: playbook_js
tags: [playbook, setup]
---

# Introduction

## Why develop PySpark scripts on your local machine?

Prototyping your jobs on your local machine's IDE is the cheapest and quickest way to work. It has the following advantages:
- Seamless process: The script you're writing and testing locally is exactly the script that will end up in the repository. You won't need to copy/paste and transform code from Sagemaker or Glue Studio into GitHub. 
- Speed: you are able to test your script on a data sample and not the full data hosted in S3 pre-prod. Your local environment is also quicker to start than Glue.
- Cost: you are not consuming any AWS resource and compute power while prototyping your job.

## Who is this tutorial for?

People who need to prototype Glue jobs. If you just need to explore or analyse data on an ad-hoc basis, you should rather use a notebooking environment like Sagemaker.

## Pre-requisites

You should be familiar with Python, Git, and the use of an IDE like PyCharm or VS Code. This guide uses PyCharm.

**Windows or Mac**

This guide covers Windows and Mac setup. You'll need admin permissions.

**Data Platform Access?**

You don't need Data Platform access to use the local environment.

# Instructions for Mac

## Install prerequisites

### Java
Spark needs Java. Check if you have Java installed by running 
`java --version` 
in your command prompt. If you do not have Java installed, then go to https://adoptopenjdk.net
Select OpenJDK 8 (LTS) & HotSpot
Choose x64 OSX version

### Python
Check if you have Python3 installed by running
`python3 --version`
in your command prompt. If you do not have it, then go to https://www.python.org/downloads/ and install it.

### Git
Check if you have Git installed by running
`git --version`
in your command prompt. If you do not have it, then get it from https://git-scm.com/book/en/v2/Getting-Started-Installing-Git.

### PyCharm
Install the Community free version from https://www.jetbrains.com/pycharm/.

### Additional Python packages 
For the Data Platform code to run, you need at least the packages boto3, pytest, pyspark and pydeequ. 
You can install them now by typing in your command line:
`python3 -m pip install --user  boto3 pytest pyspark pydeequ`.

Alternatively, these libraries can be installed inside PyCharm as shown below.

### Glue libraries
We need these libraries to simulate the Glue environment.
Go to the project GitHub page: https://github.com/awslabs/aws-glue-libs and download the code (Code > Download zip). 
Unzip it and leave it there. We will move it in other step later.

## Create the Data Platform local environment using PyCharm

### Install the project in PyCharm
Open PyCharm and clone the Data Platform project: https://github.com/LBHackney-IT/Data-Platform.

Alternatively, if you already have the project, pull the latest changes by running `git pull` in the PyCharm terminal window.

### Set the Python interpreter for the project
Open the preferences > Project:Data_platform > Python Interpreter > Click on the setting icon > Add.

In this screen, set the python interpreter to the version you’ve installed.

![pycharm_python_interpreter.png](../images/pycharm_python_interpreter.png)

### Add extra Python libraries
The following packages are necessary for unit tests. You can install them in the below window, or alternatively use `pip install`.
- gspread
- freezegun
- pytest-mock

![pycharm_additional_python_packages.png](../images/pycharm_additional_python_packages.png)

### Import the Glue library as an external library 
Paste the full downloaded awsglue folder in `External Libraries > Python X.X > site-packages` as shown on the following screen.

![pycharm_external_libraries.png](../images/pycharm_external_libraries.png)

### Check your environment
Open the file `scripts/jobs/levenshtein_address_matching.py`. 

If you have installed all the dependencies, the imports at the top of this script should all be fine.

If you have underlined imports, try to close and reopen PyCharm. If you still have problems, you can try to re-import the packages you installed via `pip install` within the DP environment, from the Python packages tab.

When the script looks fine, go the section 'Test the Levenshtein address matching script'

# Instructions for Windows


# Test the Levenshtein address matching script

## Install prerequisites

### Java
Check if you have Java by running the command `java –version`. We want version 8.
If you have the wrong version, uninstall it from the start menu.
Install openjdk (version 8) form https://adoptopenjdk.net.
In the installer, activate the option to `set JAVA_HOME`.
After the install, the command `java –version` should return something.

### Python
Install python from Windows store: it will set the right environment variables.
After the install, the command `python --version` should return something.

NB: For some Windows OS, python installation from python.org also works fine. If you chose to install yourself, the Python command will be the normal `py` command.

### Hadoop
This is specific to windows and will help us with paths etc. Download the full project from https://github.com/steveloughran/winutils/blob/master/hadoop-3.0.0/bin/.
Unzip and locate the *2 files* we need: 
- winutils.exe 
- hadoop.dll
We will now place these files in different locations.
1. Create a bin folder for `winutils.exe` and save it there, e.g. `C:\winutils\bin` or `C:\users\sballey\winutils\bin`.
2. Create the environment variable `HADOOP_HOME` and set it to the path (omitting bin at the end), e.g. `C:\users\sballey\winutils`.
![windows_hadoop_env_variable.png](../images/windows_hadoop_env_variable.png).
3. Copy hadoop.dll in `C:\Windows\System32` (NB: you can try without this step – it is critical for some users but it looks like some others don’t need it. Everything we need should be in winutils.exe).
4.

