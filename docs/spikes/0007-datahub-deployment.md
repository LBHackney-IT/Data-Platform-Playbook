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

Can enable OIDC SSO in React application (datahub frontend). This was not investigated in this spike due to lack of time. Dathub does not have (or have removed) the documentation for this.

### Role Based Access Control

#### Limitation

- Not using datahub CLI with the deployment process specified above
- Must ensure a process for constantly re-cloning the repo for updates
- Datahub has various dependencies
- There are no obvious solutions for notifications or alerts

#### Suggestion

- Investigate datahub SAAS as an option

## Helpful Resources/Documentation

- To deploy datahub, ensure an EC2 instance with at least 4GM memory to be able to run datahub docker
- SSH into the instance and run the following:

```
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
