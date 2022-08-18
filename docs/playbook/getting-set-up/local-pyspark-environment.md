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
![pycharm_python_interpreter.png](../../images/pycharm_python_interpreter.png)


