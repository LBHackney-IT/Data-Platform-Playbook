---
title: Ingesting new data entities via event streaming
description: "Setting up a new Kafka topic to streaming events to from a new data entity"
layout: playbook_js
tags: [playbook]
---

## Objective

To explain the setup needed when you want to ingest a new data type via event streaming. 

## Intended audience

- Data Engineers

## Prerequisites

- Ensure you have completed the pre-requisites in our [getting set up guide][getting_set_up].
- You will need the schema for the data entity you are hoping to ingest.

### Adding a new topic and schema for the data entity

You will need to upload a schema for this data entity to the registry.
Events pushed to the new topic with be checked against this schema, if they are not compatible the events will be rejected.
The schema file needs to be a JSON file that follows the the [AVRO schema specification][avro_specification].
For an example, you can see the schema for the tenure API events [here][tenure_api_schema].

Once you have the schema file, create a pull request to commit the following changes.
If you need help with this, refer to the [committing changes][committing-changes] section of the Using Github guide.

1. Add the schema file to the [schemas folder][schemas_in_module] of the kafka schema registry module in the data platform repository.
The file should have the same name as the topic, for example, `tenure_api.json`.
1. Add the topic name to the list of topics in the [kafka event streaming module][list_of_topics].

Once the pull request has been approved and merged, the new schema will be added to the registry in the pipeline.

[avro_specification]: https://avro.apache.org/docs/current/spec.html
[committing-changes]: ../getting-set-up/using-github#committing-your-changes-to-the-data-platform-project
[getting_set_up]: ../getting-set-up/index.md
[schemas_in_module]: https://github.com/LBHackney-IT/Data-Platform/tree/main/modules/kafka-schema-registry/schemas
[list_of_topics]: https://github.com/LBHackney-IT/Data-Platform/blob/main/terraform/core/32-kafka-event-streaming.tf
[tenure_api_schema]: https://github.com/LBHackney-IT/Data-Platform/blob/main/modules/kafka-schema-registry/schemas/tenure_api.json
