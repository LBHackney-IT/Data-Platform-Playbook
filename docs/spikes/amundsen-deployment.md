---
title: "Amundsen deployment"
description: "Review amundsen as a potential solution for a data catalogue"
tags: [tech-spike]
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

[Deployed](https://www.amundsen.io/amundsen/installation-aws-ecs/aws-ecs-deployment/) a non-production amundsen on AWS ECS using aws-cli.

Amundsen also has some [limited documentation](https://www.amundsen.io/amundsen/k8s_install/) on Kubernetes deployment, we have not investigated this.

### SSO

You can [enable OIDC authentication][amundsen-oidc-authentication] in React application (amundsen frontend).

This was not further investigated in this spike due to setup complications.

[amundsen-oidc-authentication]: https://www.amundsen.io/amundsen/authentication/oidc/

## Summary

#### Limitations

- Unable to load the data though the frontend. This is despite the fact that the data was successfully loaded to the Neo4j backend and the data was queryable though elasticsearch
- The Amundsen documentation assumes a level of experience with the tool
- There are no obvious solutions for notifications or alerts
- Role bases access control was not reviewed as part of the spike due to time constraints and deployment issues
- Notifications/alerts was not reviewed as part of the spike due to time constraints and deployment issues

#### Suggestions

- Investigate [kubernetes deployment](https://www.amundsen.io/amundsen/k8s_install/)

## Helpful Resources/Documentation

- To deploy amundsen, first install the ECS CLI according to the [AWS documentation](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ECS_CLI_installation.html)
- Then follow Amundsen [documentation](https://www.amundsen.io/amundsen/installation-aws-ecs/aws-ecs-deployment/)
- If you are using aws-vault, you can follow the commands below

_Note that you will need to set up a [key pair](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html)_

```
cd amundsen/docs/installation-aws-ecs

aws-vault exec hackney-dataplatform-development -- ecs-cli configure --cluster amundsen --region eu-west-2 --default-launch-type EC2 --config-name amundsen

aws-vault exec hackney-dataplatform-development -- ecs-cli configure profile --profile-name amundsen

aws-vault exec hackney-dataplatform-development --  ecs-cli up --keypair test-amundsen --extra-user-data userData.sh --capability-iam --size 1 --instance-type t2.large --cluster-config amundsen --verbose --force

aws-vault exec hackney-dataplatform-development --  ecs-cli compose --cluster-config amundsen --file docker-ecs-amundsen.yml up --create-log-groups

aws-vault exec hackney-dataplatform-development -- ecs-cli ps
```
