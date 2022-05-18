---
title: "Sagemaker"
description: "Investigating whether using AWS sagemaker with AWS glue development endpoints is a viable notebooking tool"
tags: [tech-spike]
layout: layout
---

# Spike: Sagemaker

### Invesitgate the use of sagemaker with glue development endpoints as a notebooking tool

## Objective & Considerations

Our current notebooking solution is a docker container that closes emulates the environment that a glue job run in that can be run locally.
We are looking to replace this solution due to the following issues:

1. The image we are using in unstable on the new Mac M1 laptops 
2. It requires a lot of installation which is too high a barrier of entry for some users, e.g. cloning the repository, installing docker desktop, using the terminal 
3. Users who have chromebooks can't use it.
4. It doesn't have access to the glue datacatalog, preinstalled helpers module that we use in a lot of glue jobs.
This means that after prototyping in the notebook there are quite a few changes to the script that need to be made to test it as a glue job.

We have the following user stories for what we would like from a new notebooking solution.

1. As a BI Analyst I want to develop a SQL script in the same syntax it will run in so that I can reduce development time and time to insight.
2. As a Python Analyst I want to develop a Python script to transform data in an environment where I can easily debug the script so that I can reduce development time and time to insight
3. As a Python Analyst/BI Analyst I want a development environment that doesn’t require me to install something and works on my Chrome Device so that I can develop SQL/Python scripts

An additional consideration not mentioned in these user stories is the cost of the tool.

## Findings

### The Setup 

AWS sagemaker provides is a managed notebook instance, we can provide startup scripts that run when the instance is created and everytime it is started.
In this startup script ([example][startup-script]) we can install a spark magic and setup the connection to a glue development endpoint so that when we run scripts in the pyspark kernel they will run against the development endpoint.
This gives access to the full glue catalogue & runs in the same environment that glue jobs run in.

When creating the glue devleopment endpoint you provide an IAM role, which controls the access to any data. 
Hence we would need a separate endpoint for each department that needs one, to control permissions.

You can also provide the develpoment endpoint with any extra python libraries and jars that are stored in S3, similar to a glue job.
This means we can access the helpers module & data quality testing in the same we that we do in glue jobs.

### Github integration

Each notebook instance can be linked to a GitHub repository ([example][notebook-github-repo]). 
The repository will appear as a folder in jupyterlab and users can use the UI to push to GitHub, as long as they have been added to the repository.
As two factor authentication in enforced in the Hackney Github, users who wish to push changes will have to generate a PAT(Personal Access Token) code to use as a password.

### Running spark SQL

Spark SQL can be run with after the data has first been loaded using PySpark.
In this following code block the mtfh_tenureinformation table, which exists in the glue catalog, is being "loaded" for use in Spark SQL as the table "tenures".

```python
from awsglue.context import GlueContext

glue_context = GlueContext(spark)

df = glue_context.create_data_frame.from_catalog( 
    database="dataplatform-emmacorbett-landing-zone-database", 
    table_name="mtfh_tenureinformation", 
    transformation_ctx="tenures_source")

df.createOrReplaceTempView("tenures")
```

After preparing any tables needed for the SQL query there are two ways to run spark SQL, using the spark magic or written in pyspark.

#### Using sparkmagic

This gets the first 10 rows in the tenures table and save it to a pandas dataframe called tenures.
```
%%sql -o tenures -q
SELECT * FROM tenures limit 10
```
This will print out the first 10 rows of the tenures pandas dataframe.
```
%%local
tenures
```

#### Using PySpark functions

This gets the first 10 rows in the tenures table and saves it to a dataframe.
```python
tenuresDF = spark.sql("""
SELECT * FROM tenures limit 10
""")
```

This will print out the first 10 rows of the dataframe.
```python
sqlDF.show()
```



### Costing

I've worked out a few scenarios for the cost of running both development endpoints & notebook instances for 4 weeks.


| Scenario               | Running continuously | Running 10 hrs/day, 5 days/week |
| ---------------------- | -------------------- | ------------------------------- |
| 2 nbs @ 2dpu each | $1259.328 | $374.8 |
| 2 nbs @ 4dpu each | $2442.04 | $726.8 |
| 1 nb @ 2dpu | $629.664 | $187.4 |


*nbs*: Notebook Instance (inc development endpoint)

*dpu*: data processing unit. Pricing for running glue, it depended on worker type and number of workers. 
The worker types are:
- Standard (2dpu/hour): 16 GB memory, 4 vCPUs of compute capacity, and 50 GB of attached EBS storage (2 Executors / worker)
- G.1X (4dpu/hour): 16 GB memory, 4 vCPUs, and 64 GB of attached EBS storage (1 Executor / worker)
- G.2X (8dpu/hour): 32 GB memory, 8vCPUs, 128 GB of EBS (1 Executor / worker)


### Shutting down in evenings and weekends

Due to the cost of keeping a development endpoint running continuously, I would recommend deleting the endpoints and shutting down the notebooks at the end of the working day.
Then recreating them when the notebook instance is started up again.
It would take around 10 minutes when a notebook instance is started for the first time that day as it need to provision the devlopment endpoint.
To achieve this we wouldn't manage the development endpoint in terraform, but would store it's configuration in the notebook startup script so it would be version controlled.



## Helpful Resources/Documentation

The terraform module for the aforementioned notebook instance is on [this branch][sagemaker-branch].

[startup-script]: https://github.com/LBHackney-IT/Data-Platform/blob/sagemaker/modules/sagemaker/scripts/notebook-start-up.sh
[notebook-github-repo]: https://github.com/LBHackney-IT/Data-Platform-Notebooks
[notebook-terraform-code]: https://github.com/LBHackney-IT/Data-Platform/blob/sagemaker/modules/sagemaker/11-notebook.tf
[sagemaker-branch]: https://github.com/LBHackney-IT/Data-Platform/tree/sagemaker/modules/sagemaker