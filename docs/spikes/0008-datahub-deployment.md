---
title: "Datahub deployment"
description: "Review datahub as a potential solution for a data catalogue"
tags:
layout: layout
---

## Objective

Confirm that the data catalog meets the minimum expectations for infrastructure and security so that it can be maintained long term

## Considerations

The following criteria were to be investigated

- Docker/container setup (via compose, ECS, Fargate etc)
- SSO
- Role Based Access Control
- Notifications/Alerts

## Findings

### Docker/container setup (via compose, ECS, Fargate etc)

Deploying this with docker and ECS was not feasible due to the number of dependencies.

Datahub provides [documentation](https://datahubproject.io/docs/deploy/aws) on how to deploy using Kubernetes and AWS EKS. Due to a lack of kubernetes expertise, this route was not further explored.

Finally, we got deployed datahub by [provisioning an ec2 instance](https://gist.github.com/elena-vi/032b3f4aba12a8e1d0ed8e7cb05fd66e), connecting to the instace though SSH, cloning the [datahub repository](https://github.com/linkedin/datahub) in the instance, and running datahub via `docker-compose`.

### SSO

You can [enable OIDC SSO][datahub-oidc-sso] in React application (datahub frontend).

This was not investigated in this spike due to lack of time.

[datahub-oidc-sso]: https://datahubproject.io/docs/how/auth/sso/configure-oidc-react/

### Role Based Access Control

*Limitation:* Not reviewed as part of the spike, ran out of time.

## Summary

#### Limitations

- Could not get DataHub CLI with the deployment process specified above to work
- Must ensure a process for constantly re-cloning the repo for updates
- Datahub has various dependencies
- There are no obvious solutions for notifications or alerts

#### Suggestions

- Investigate datahub SAAS as an option

## Helpful Resources / Documentation

### Deploying to EC2

- To deploy datahub, ensure an EC2 instance with at least 4GM memory to be able to run datahub docker
- SSH into the instance and run the following:

```sh
sudo yum update -y

sudo amazon-linux-extras install docker

sudo service docker start

sudo usermod -a -G docker ec2-user

# restart connection

sudo yum install git -y
  # install docer-compose
sudo curl -L https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m) -o /usr/local/bin/docker-compose

sudo chmod +x /usr/local/bin/docker-compose
  # download datahub
git clone https://github.com/linkedin/datahub.git

cd datahub/docker/quickstart
  # start datahub
docker-compose -f docker-compose.quickstart.yml up -d

cd ../../metadata-ingestion/examples/recipes/
vi glue_to_datahub.yml # add params

python3 -m pip install --upgrade pip wheel setuptools

pip install 'acryl-datahub[glue]'

datahub ingest -c glue_to_datahub.yml
```

### Deploying to EKS

- To deploy datahub to EKS we used eksctl, helm and kubectl using the following [guide][datahub-aws-setup-guide]
- When deploying to a production environment we would prefer to deploy using terraform.

We have added helper files to the data platform project under the `datahub-deployment` directory. This directory includes:
- A [makefile][datahub-makefile] with commands for various common tasks
- A values.yaml file which contains a helm config for the datahub chart
- A kubeconfig file with the details for connecting to staging eks cluster
  - Note: The file does NOT contain credentials, your aws credentials are used

##### Makefile
The make file contains the following commands:

`generate-kubeconfig-file`
Creates or updates the kubeconfig file for the staging cluster

`get-all`
Get information about all the resources running in the cluster

`upgrade-datahub-release`
Updates the datahub images to the latest version

`datahub-release-history`
Prints historical revisions for a given release

`pull-datahub-repository`
Pull the latest datahub helm repository

`datahub-source`
Git clone the datahub project repo to your current location

#### Data Ingestion

To ingest data into the data catalogue we followed this guide: [Metadata Ingestion][datahub-metadata-ingestion]

This involved installing the PyPI prerequisites on a engineer machine using the following commands:
```sh
python3 -m venv venv
source venv/bin/activate
pip3 install --upgrade pip wheel setuptools
pip3 install --upgrade acryl-datahub
datahub version
# If you see "command not found", try running this instead: python3 -m datahub version
```

Once the prerequisites had been installed we needed to install the specific plugin that we need in order to be able to
ingest data from the data platform. In this case we installed the glue plugin which allowed us to ingest data from the
Glue data catalogue.

```sh
pip3 install 'acryl-datahub[glue]' # install the required plugin
datahub check plugins
```

Once the prerequisites and the required plugins are installed you can then ingest the data from the glue catalogue by locate and update the glue_to_datahub.yml metadata ingestion example receipe which can be found here: [/metadata-ingestion/examples/recipes/glue_to_datahub.yml][metadata-ingestion-example]

The contents of which should look as below:
```
# see https://datahubproject.io/docs/metadata-ingestion/source_docs/glue for complete documentation
source:
  type: glue
  config:
    aws_region: "us-west-2"
    extract_transforms: true

# see https://datahubproject.io/docs/metadata-ingestion/sink_docs/datahub for complete documentation
sink:
  type: "datahub-rest"
  config:
    server: "http://localhost:8080"
```

You will need to update the following properties:
- `source -> config -> aws_region`
- `sink -> config -> server`

With values which reflect the staging environment. One you have updated the recipe configuration you can run the
ingestion with the following command:
```sh/
datahub ingest -c ./metadata-ingestion/examples/recipes/glue_to_datahub.yml
```

#### DNS configuration

When setting up the DataHub data catalogue site we required both a security certificate and a domain name to be associatable with the Kubernetes cluster.

To accomplish this we:
- Created a Name Server (NS) record on the Hackney domain for the data.hackney.gov.uk sub-domain. [Pull Request][dns-record-pull-request]
  - This granted the production Data Platform account control over the sub-domain.
- Created a Name Server (NS) record on the data.hackney.gov.uk Hosted Zone for the stg.data.hackney.gov.uk sub-domain.
  - This granted the staging Data Platform account control over the sub-domain.
- Created a CName record on the stg.data.hackney.gov.uk Hosted Zone for the datahub.stg.data.hackney.gove.uk sub-domain that points at the Kubernetes cluster.

[datahub-makefile]: https://github.com/LBHackney-IT/Data-Platform/blob/datahub-eks-deployment/datahub-deployment/Makefile
[metadata-ingestion-example]: https://github.com/linkedin/datahub/blob/master/metadata-ingestion/examples/recipes/glue_to_datahub.yml
[datahub-metadata-ingestion]: https://datahubproject.io/docs/metadata-ingestion
[datahub-aws-setup-guide]: https://datahubproject.io/docs/deploy/aws
[dns-record-pull-request]: https://github.com/LBHackney-IT/infrastructure/pull/456/files#diff-ca01997613717d7b58e624d2faf9e939b9e1bc8debc83fd01c85158003b7d8ac