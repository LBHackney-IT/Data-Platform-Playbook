---
id: glossary
title: Glossary
slug: /glossary
layout: playbook_js
tags: [playbook]
---
A Table of terms of Terms and Tools used by the Data Platform

 ### API
Application Programming Interface, which is a software intermediary that allows two applications to talk to each other. Each time you use an app like Facebook, send an instant message, or check the weather on your phone, you're using an API.
 ### Athena
[Athena][athena] is an AWS cloud-based service which enables you to query data in the data lake using SQL (Presto SQL). You can find out in [the Playbook article about how to query data in Athena][query-data-using-sql].
 ### AWS
[AWS (Amazon Web Services)](https://aws.amazon.com/what-is-aws/) is a comprehensive cloud platform offering over 200 different services including data storage, computing power, and tools Glue, Athena and Redshift which we use in the data platform.. AWS is the council’s primary cloud supplier and the primary environment in which we are building the data platform.
 ### Bucket
Amazon S3 stores data as objects within resources called "buckets" which are equivalent to folders. Object storage keeps the blocks of data that make up a file together and adds all of its associated metadata to that file. We use buckets to separate the different zones in the data lake.
 ### Cluster
A cluster is a collection of servers that are connected together so that they can as a group provide the same service or accomplish the same task. We often use clusters to spread the work that needs to be accomplished so that it can be completed faster but we also use them to provide resilience where one member of a cluster can fail so long as one member remains functional.
 ### Container
A container is essentially a virtual computer. Though there are specific technical differences between a Container and a Virtual Machine (VM) meaning they shouldn't be considered interchangeable.
 ### Crawler
A [crawler](https://docs.aws.amazon.com/glue/latest/dg/crawler-running.html) is a process that is designed to read through a collection of data and collage metadata about what is being held. It stores this information within the AWS Glue Data Catalog. This information covers, the structure of the data such as the columns, data types and partitions along with information about the individual files that hold the data such as their format and where they are stored within S3. We also use the metadata created by crawlers to populate the data catalogue.
 ### Data Catalogue
This is a place to store documentation and metadata about the datasets within the data lake. It helps users discover what data exists, understand what the data mean, and find out who owns the data. We use a tool called [DataHub](https://datahubproject.io/docs/features) to provide our data catalogue.
 ### Data Dictionary
This defines domain-driven design entities and their relationships to one another at a high level. For example, what attributes are related to a person (name, date of birth) and how a ‘person’ relates to a 'household', 'property', etc.)
 ### Data Lake
A data lake is a centralized repository designed to store, process and sure large amounts of structured, semistructured, and unstructured data. 
 ### Data Pipeline
A data pipeline is a set of tools and processes used to automate the movement and transformation of data between a source system and a target repository (for example, a data lake or a BI dashboard).
 ### Data Platform
A data platform is an integrated technology solution that allows data located in different data sources to be governed, accessed, and delivered to users, applications, or other technologies. A data platform isn’t just one ‘thing’, but a platform composed of a number of different elements, most notably the data lake. For a more thorough explanation, see [the Introduction session in the Playbook][data-platform-intro]
 ### Data Warehouse
This is a store of 'gold standard' data that is ready for analysis or publication. It is the result of processes to ingest, clean and transform data in the data lake. In the Data Platform, this typically consists on data stored in our [refined](#refined-zone) and [trusted](#trusted-zone) zones.
 ### Docker
Software platform that enables to run programs in any environment. In Docker, programs run in '[containers](#container)' that contain the full operating system and configuration items that the program requires. In the data platform, we use Docker and a container that replicates the AWS Glue environment. This enables us to write and test pySpark scripts on a local machine (PC or Mac) before making them available a jobs in the platform.
 ### Environments
The platform has 3 [Environments][environments]: Development (used by engineers in the Data Platform team), Pre-Production/Staging (used by analysts to prototype processes to ingest or transform data) and Production (used by analysts to schedule and ‘productionise’ processes)
 ### ETL (EXTRACT, TRANSFORM AND LOAD)
Extract the data from its original source, whether that is another database or an application, Transform data by cleaning it up, deduplicating it, combining it, and otherwise getting ready to Load the data into the target database.
 ### Github
[GitHub](https://docs.github.com/en/get-started/quickstart/hello-world) is a code hosting platform for version control and collaboration. We use it as a repository to store the code for the data platform's infrastructure and processes (including the code for this playbook). It enables us to track and test any changes in the code before they reach the platform. Many of the processes within this playbook require you to make changes to code in GitHub in order to see them in the data platform. See the [Playbook article for more information about using GitHub](https://lbhackney-it.github.io/Data-Platform-Playbook/playbook/getting-set-up/using-github).
 ### Glue
[Glue](https://docs.aws.amazon.com/glue/latest/dg/what-is-glue.html) is an AWS cloud-based service that we use to ingest data into the data lake, transform data (e.g. cleaning, joining, aggregating etc.), schedule these processes to run automatically, and collect metadata from the datasets in the data lake so that it can be used in the data catalogue. These processes are called Glue ‘[jobs](#jobs)’. You can create and run jobs through the graphical interface in [Glue Studio](https://playbook.hackney.gov.uk/Data-Platform-Playbook/playbook/transforming-data/using-aws-glue/using-glue-studio) or [deploy PySpark or Spark SQL scripts in Glue](https://playbook.hackney.gov.uk/Data-Platform-Playbook/playbook/transforming-data/using-aws-glue/deploy-glue-jobs)
 ### IAM
Identity and Access Management (IAM) provides fine-grained access control across all of AWS. With IAM, you can specify who can access which services and resources, and under which conditions. With IAM policies, you manage permissions to your workforce and systems to ensure least-privilege permissions. We use IAM to restrict users of the platform so they can only view the data needed for their department. [User Management Tool](https://aws.amazon.com/iam/).
 ### Ingest
This is the process of bringing data from its original source (e.g. Google Sheet, database, API, etc.) into the data lake. The exact process will depend on the type of data being ingested and where that data is being stored.
However each ingestion process will result in the data being stored in [S3](#s3) in [Parquet](#parquet) format, stored in a bucket specific to the service.
The data will be [partitioned](#partition) by the day it was ingested, and will optionally run on a schedule so that the data will be loaded into the lake each day, week, etc.
 ### Jobs
An AWS [Glue](#glue) job encapsulates a script that connects to your source data, processes it, and then writes it out to your data target. Typically, a job runs extract, transform, and load (ETL) scripts.
Jobs can also run general-purpose Python scripts (Python shell jobs.) AWS Glue triggers can start jobs based on a schedule or event, or on demand.
To find out more read [AWS's documentation](https://docs.aws.amazon.com/glue/latest/dg/how-it-works.html).
To find out how to add jobs to the Data Platform please see our transforming data playbook articles on [using AWS Glue](https://lbhackney-it.github.io/Data-Platform-Playbook/playbook/transforming-data/using-aws-glue/using-glue-studio).
 ### Jupyter
Jupyter is a notebooking environment for Python. For more information, check [here](https://jupyter.org/). On the Data Platform team we regularly use Jupyter to prototype jobs before scheduling them in [AWS Glue](#glue).
 ### Kafka
[Apache Kafka](https://aws.amazon.com/msk/what-is-kafka/) is an open-source distributed data store optimised for ingesting and processing streaming data in real-time. We use Kafka to ingest some data sources (namely those developed by Hackney) onto the platform through event streaming so that we receive updates as they happen rather than taking a snapshot of a data source. For example, if a user changes a tenure in Manage My Home, the Tenure API sends a message to Kafka which processes this data and stores it in the data lake.
 ### Lambda
[AWS Lambda](https://docs.aws.amazon.com/lambda/latest/dg/welcome.html) is an event-driven, serverless computing platform provided by Amazon as a part of Amazon Web Services. It is a computing service that runs code in response to events and automatically manages the computing resources required by that code.
 ### Landing Zone
The initial ingestion point for some datasets where we need to separate the data between different departments (e.g. some Liberator data belongs to Parking and some belongs to Environmental services). Only the Data Platform team have access to the Landing Zone.
 ### Notebook
[Wikipedia](https://en.wikipedia.org/wiki/Notebook_interface). We commonly use [Jupyter](#jupyter) in the Data Platform team.
 ### Objects
Object storage, also called object-based storage, is an approach to addressing and manipulating data storage as discrete units, called objects. Objects are kept inside a single repository, and are not nested as files inside a folder inside other folders.
 ### Parquet
Parquet is the data storage format we use to store data in the data platform. It is an efficient columnar data storage format that supports complex nested data structures in a flat columnar format. This means it offers compressed storage and faster querying.
 ### Partition
Partitioning is the dividing of data into sections, often by date or age. It is used to enhance performance and make data easier to manage.
For example, historic data from a service may be stored on the platform in a partition, and every day new data is added in it’s own partition.
A user would then only need to query the partitions relevant to their work rather than the whole data set.
In the Data Platform you will normally see data partitioned by `import_year`, `import_month`, `import_day` and `import_date`.
 ### Playbook
Our [playbook][playbook] provides step-by-step guidance about how to use the Data Platform, along with technical documentation about how the platform has been set up and decisions we've made.
 ### Productionise
Make a resource (e.g. a job) ready for deployment in the production environment. It involves describing the resource in Terraform so it can be replicated. For jobs, it also involves writing tests that will run automatically and prevent breaking changes.  
 ### PySpark
PySpark is an interface for Apache Spark in Python.
 ### Python
An open-source programming language that is commonly used for data tasks such as data cleaning, transformation, analysis and machine learning.
 ### Qlik
[Qlik][qlik] is the council’s primary Business Intelligence tool for analysing and visualising data. 
 ### Raw Zone
The initial ingestion point for some datasets which belong to a single service. Data in the raw zone is a direct copy of the raw data in its original location (e.g. from a database, Google Sheet, API etc).
 ### Redshift
[Redshift](https://docs.aws.amazon.com/redshift/latest/mgmt/welcome.html) is an AWS cloud-based [data warehouse](#data-warehouse) service which we use to publish data from the data lake into analytical tools like Qlik, Google Data Studio and Tableau.
 ### Refined Zone
Data in this zone has been refined or transformed in some way to make it more suitable for analysis. For example, two tables have been merged together, data types have been recast (to convert strings into date format), unused columns dropped, etc. Data in the refined zone can be published into analytical tools like Qlik.
 ### S3
[S3](https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html) is short for Amazon Simple Storage Service, which provides cloud-based, scalable storage.
It is an [object](#objects) based storage and we use it to store all of the data in our data lake.
 ### Secrets Manager
AWS Secrets Manager helps you protect secrets needed to access your applications, services, and IT resources. The service enables you to easily rotate, manage, and retrieve database credentials, API keys, and other secrets throughout their lifecycle. [Credentials Storage/Management ](https://docs.aws.amazon.com/secretsmanager/latest/userguide/intro.html)
 ### Spark
Apache Spark is an open source engine that is used to perform processing tasks quickly on large datasets. There is support for code written in Scala, Java, Python and R.
 ### Terraform
Terraform is our chosen Infrastucture as Code (IaC) tool. See the entry [here](https://playbook.hackney.gov.uk/API-Playbook/infrastructure) in the Hackney Council API Playbook for more detail.
 ### Trusted Zone
Data in this zone is 'gold standard' data that is well documented and can be easily shared between different services within the council. It may be anonymised or aggregated to make it suitable for wide use.
 ### Zones
The Platform has 4 [data zones](https://lbhackney-it.github.io/Data-Platform-Playbook/zones), as data moves from the landing to the trusted zone it will:Increase the Usability, Quality of the Data to the council, by improved structure and cleaning of data. Reduce in volume as unusable data is removed.


[data-platform-intro]: https://playbook.hackney.gov.uk/Data-Platform-Playbook/
[query-data-using-sql]: https://playbook.hackney.gov.uk/Data-Platform-Playbook/playbook/querying-and-analysing-data/querying-data-using-sql
[athena]: https://docs.aws.amazon.com/athena/latest/ug/what-is.html
[qlik]: https://www.qlik.com/us/products/qlik-sense
[playbook]: https://lbhackney-it.github.io/Data-Platform-Playbook/about-playbook
[environments]: https://lbhackney-it.github.io/Data-Platform-Playbook/environments