---
title: "Person"
description: "Someone belonging to a household or living in a property in Hackney"
tags: entity
layout: layout
relationships: 
    - entity: property
      relationship: "lives in"
    - entity: service
      relationship: "accesses"
---

# {{title}}


Description: {{description}}
Relationships:
{%- for relationship in computedRelationships %}
  - {{relationship.relationship}} [{{relationship.entity}}]({{relationship.url | url}})
  {% endfor -%}
Source: 