---
title: Module 0 - Getting started with Training
description: "Training Module 0"
layout: playbook_js
tags: [playbook] [training]
---

# Module 0: Context and setup

## Introduction
### What is the goal of this module
- In this module, you will learn about several tools you’ll need to interact with the Data platform infrastructure, and how to set them up.
You will be able to find out which modules are best suited for your interests/goals
- Find out what you need as prerequisites for the modules

##  What is the goal of the Training as a whole
<details>
    <summary>Summary of what the purpose of this training is. Click to Expand </summary>

The goal of the training is to understand the end-to-end journey of data in the platform and get to grips with the core elements and processes of the Data Platform, in a safe environment, using open data. Depending on what you want to do in the platform, you may not need to complete all the modules. However, the modules rely on each other and need to be completed in order. 
After you complete the training, you will likely find that there is more you need to learn from the Playbook in order to use the Data Platform in your work (for example, performing other types of data transformation).

### Module 1

This module is intended for people who want to add/ingest data into the platform so they or others can use it in other tools (e.g. Qlik)
After completing this module, you should be able to do the following:

- Ingest Google Sheets into the Data Platform
- Write a simple terraform module
- Submit a pull request in Github
- Navigate the AWS console
- Run a job in AWS Glue
- View data objects in AWS S3
- Query data in AWS Athena
### Module 2
This module is intended for people who want to transform data within the Data Platform and make the result available for querying
After completing this module, you should be able to do the following:
- Load one or more datasets from S3 into a coding environment, local and on AWS Glue
- Learn how to test your Data Transformation in the Local Notebooking Environment ( saves money and is much faster to debug )
- Learn how to do transformations in Spark syntax (including Joins)
- Add a Glue job within the AWS console
- Save the dataset after transformation into the refined zone

### Module 3
This module is intended for people who want to schedule or automate data transformations
After completing this module, you should be able to do the following:
- Deploy a Glue Job into the Data Platform Production environment, with scheduler to automate the process
- Deploy a Glue job using Terraform
</details>

## Why we are moving away from old ways of work, and working using a Data Platform
Please visit and read : https://playbook.hackney.gov.uk/Data-Platform-Playbook/

# What are the prerequisites for these training modules  
<details>
    <summary>Click to Expand</summary>

## Introduction: Experience, skills, software and equipment

To get the most out of these modules, you must be comfortable with the idea of coding. It is fine to be a beginner in Python and Terraform, but you should at least have a bit of experience with a programming language (such as SQL or formulas in Excel/Sheets). 

You’ll also need accounts and permissions to access some platforms. In Module 2 you will use a local environment, so you’ll also need a Windows machine or a Mac and permissions to install software on it (though we have plans to develop the platform so that this is no longer the case).

You may have to contact IT to install some prerequisite software if you do not have the permissions to do it yourself

## Pre-requisites Table

Here are the details on these requirements by module.

| Module | Github | Notebook Environment | AWS Access |
|---|---|---|---|
| Module 1 | X | | |
| Module 2 | X | X| X|
| Module 3 | X | | X|

</details>

# Tools that are used with the Data Platform

<details>
    <summary>Click to Expand</summary>

## GitHub: Online repository for code where all Hackney codebase is stored

Github is where the Data Platform repository is stored. In particular, it is where the Terraform scripts are, which is the code which controls and manages the Data Platform resources in AWS. We also store the code for the Playbook there
You can refer to this playbook entry for more information : https://playbook.hackney.gov.uk/Data-Platform-Playbook/playbook/getting-set-up/using-github

### Benefits of using these tools 
Using Github means we have version control on our code, we also have a way to verify code and making sure code is suitable before it is live.


## The notebook environment

Essentially a Jupyter server so that we can run Jupyter Notebooks. Jupyter notebooks are Python scripts which run in cells, which makes it easier to develop and try things out
For the Data Platform, it will have the packages installed to be quite similar to AWS Glue.

### Benefits of using these tools

The notebooking tool uses your local resources to execute the code, meaning you don’t consume AWS resources, saving Hackney money.
Feedback on errors is a lot quicker, and as a result is a lot easier to debug. This makes it more efficient for developing code.
To set up the notebooking environment, click here [Link to other Playbook article Notebook Environment Setup - Google Docs ].

## Amazon Web Services (AWS)

AWS (Amazon Web Services) is a comprehensive cloud platform offering over 200 different services including data storage, computing power, and tools Glue, Athena and Redshift which we use in the Data Platform. AWS is the council’s primary cloud supplier and the primary environment in which we are building the Data Platform.

</details>

# How to set up the tools

<details>
    <summary>Click to Expand</summary>

## Github 

- [Instructions to set up](https://playbook.hackney.gov.uk/Data-Platform-Playbook/playbook/getting-set-up/using-github)
  - Github Playbook documentation 
  - If you are a part of the HackIT Github Group, you don’t need to set anything up
  - If you are not, make a request in the HackIT Dev Slack Channel
- Common Problems / FAQ
  - I can’t find the Repo for the Data Platform
    - Please visit https://github.com/LBHackney-IT/Data-Platform

## Notebook Environment

- Instructions to set up
  - [Notebook Environment Setup](https://docs.google.com/document/d/1CFfneUahaBVw-yIzmbdBB1lDXM3d2biApz_-CqbpCCc)
- Common Problems / FAQ
  - How can I tell if my Notebook Environment is working?
    - When you open up the Jupyter Instance, open the template.ipnyb and try to run the first Cell. It should create a Spark instance, if it doesn’t something might be wrong. At that point it is best to ask somebody for some troubleshooting

</details>
