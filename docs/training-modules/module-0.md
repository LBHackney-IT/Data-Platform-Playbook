---
title: Getting started with training
description: "Training Module: Getting started with training"
layout: playbook_js
tags: [training]
---

# Introduction
### What is the goal of this module?

- In this module, you will learn about several tools you’ll need to interact with the Data platform infrastructure, and how to set them up.
You will be able to find out which modules are best suited for your interests and/or goals
- Find out what the prerequisites are before working through the training modules

The goal of the training is to understand the end-to-end journey of data in the platform and build confidence with the core elements and processes of the Data Platform, in a safe environment, using open data. Depending on what you want to do in the platform, you may not need to complete all the modules. However, the modules rely on each other and need to be completed in order. 
After you complete the training, you will likely find that there is more you need to learn from the Playbook in order to use the Data Platform in your work (for example, performing other types of data transformation).

### Training module: Ingesting data from Google Sheets

This module is intended for users who want to add/ingest data into the platform so they or others can use it in other tools (e.g. Qlik).
After completing this module, you should be able to do the following:

- Ingest Google Sheets into the Data Platform
- Write a simple Terraform module
- Submit a pull request in GitHub
- Navigate the AWS console
- Run a job in AWS Glue
- View data objects in AWS S3
- Query data in AWS Athena

### Training module: Transforming data to the refined zone using Sagemaker

This module is intended for users who want to transform data within the Data Platform and make the result available for querying.
After completing this module, you should be able to do the following:
- Load one or more datasets from S3 into a 'notebook' coding environment on AWS (SageMaker)
- Learn how to do simple data transformations in PySpark
- Write the transformed dataset into the refined zone by setting up job parameters

### Training module: Deploying a job in AWS Glue

This module is intended for users who want to schedule or automate data transformations.
After completing this module, you should be able to do the following:
- Add a Glue job within the AWS console to test the job in a staging environment
- Write a Terraform module to deploy the Glue Job into the Data Platform production environment, with scheduler to automate the process

## Why we are moving away from old ways of work, and are using a Data Platform
Please read the [Playbook Documentation](https://playbook.hackney.gov.uk/Data-Platform-Playbook/)

## What are the pre-requisites for these training modules?

## Introduction: Experience, skills, software and equipment

To get the most out of these training modules, you must be comfortable with the idea of coding. It is fine to be a beginner in Python and Terraform, but you should at least have a bit of experience with a programming language (such as SQL or developing formulas in Microsoft Excel and/or Google Sheets). 

You’ll also need accounts and permissions to access some platforms; please contact [data.platform@hackney.gov.uk](data.platform@hackney.gov.uk) to be given the necessary permissions.

You may have to contact the IT Support Desk to install some prerequisite software if you do not have the permissions to do it yourself.

## Pre-requisites

What you'll need to set up before starting specific training modules:

| Module                                                   | GitHub | Notebook Environment | AWS Access |
|----------------------------------------------------------|--------|---|---|
| Ingesting data from Google Sheets                        | X      | | |
| Transforming data to refined zone using Amazon Sagemaker | X      | X| X|
| Deploying a job in AWS Glue                              | X      | | X|

## Tools used with the Data Platform

### Amazon Web Services (AWS)

AWS (Amazon Web Services) is a comprehensive cloud platform offering over 200 different services including data storage, computing power, and tools Glue, Athena, SageMaker and Redshift which we use in the Data Platform. AWS is the Council’s primary cloud supplier and the chosen environment in which we are building the Data Platform.

### GitHub: Online code repository

GitHub is where the Data Platform code repository is stored. In particular, it is where the Terraform scripts are, which is the code which controls and manages the Data Platform resources in AWS. We also store the code for the Playbook there.
You can refer to the [Getting Set Up with GitHub](https://playbook.hackney.gov.uk/Data-Platform-Playbook/playbook/getting-set-up/using-github) Playbook entry for more information.

Using GitHub means we have version control on our code. It also means that have we have a way to verify and approve code before it is deployed to the Data Platform.

### The Jupyter notebook environment through Amazon SageMaker

Jupyter notebooks allow users to write snippets of Python code in 'cells', which makes it easier to develop scripts. Users of the Data Platform can now access Jupyter notebooks through Amazon SageMaker, which means that scripts can be developed within the browser and AWS environment rather than on local machines.

## How to get set up

### Github 

- [Instructions to set up](https://playbook.hackney.gov.uk/Data-Platform-Playbook/playbook/getting-set-up/using-github)
  - GitHub Playbook documentation 
  - If you are a part of the HackIT GitHub Group, you don’t need to set anything up
  - If you are not, make a request in the HackIT Dev Slack Channel
- Common Problems / FAQ
  - I can’t find the repository for the Data Platform
    - It can be found [here](https://github.com/LBHackney-IT/Data-Platform)  

### Notebook Environment

- [Instructions to set up](https://lbhackney-it.github.io/Data-Platform-Playbook/playbook/getting-set-up/notebook-setup)
- Common Problems / FAQ
  - How can I tell if my Notebook Environment is working?
    - When you open up the Jupyter Instance, open the ```template.ipnyb``` and try to run the first cell. It should create a Spark instance, if it doesn’t something might be wrong. At that point it is best to ask somebody for some troubleshooting.

