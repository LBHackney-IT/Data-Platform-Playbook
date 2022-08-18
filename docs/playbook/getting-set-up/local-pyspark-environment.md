---
title: Local PySpark Environment Setup
description: "Local PySpark Environment Setup"
layout: playbook_js
tags: [playbook, setup]
---

## Introduction

**Why develop PySpark scripts on your local machine**

Prototyping your jobs on your local machine's IDE is the cheapest and quickest way to work. It has the following advantages:
- Seamless process: The script you're writing and testing locally is exactly the script that will end up in the repository. You won't need to copy/paste and transform code from Sagemaker or Glue Studio into GitHub. 
- Speed: you are able to test your script on a data sample and not the full data hosted in S3 pre-prod. Your local environment is also quicker to start than Glue.
- Cost: you are not consuming any AWS resource and compute power while prototyping your job.

**Who is this tutorial for**

People who need to be set up with an environment to prototype jobs. You should be familiar with Python, Git, and the use of an IDE like PyCharm or VS Code. This guide uses PyCharm.

## Pre-requisites

**Windows or Mac**

This guide covers Windows and Mac setup. You'll need admin permissions.

**Git?**

No need to install Git if you don't have it yet. You will use the plugin that comes with the IDE.

**PyCharm**

**Data Platform Access?**

You don't need Data Platform access to use the local environment.

## Notebook set up

**Setting up the Local Files**


