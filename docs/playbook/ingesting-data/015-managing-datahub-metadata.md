---
title: Managing DataHub Metadata
description: "How DataHub metadata is created and maintained"
layout: playbook_js
tags: [playbook]
---

# Managing DataHub Metadata

## Overview

DataHub metadata is managed through YAML configuration files in the `dap-datahub` repository under `yaml_config/`. After updating these files and merging to the main branch, they will be synced to a bespoke S3 bucket and the DataHub ingestion DAG will process them daily at 10:00 AM.

## Configuration File Structure

```
yaml_config/
├── ingestion/                    # Source ingestion recipes
│   ├── glue.yaml                 # AWS Glue Catalog ingestion
│   └── qlik_cloud.yaml           # Qlik Cloud ingestion
├── metadata/
│   ├── domains/                  # Domain definitions
│   │   └── domains.yaml
│   ├── dataplatforms/            # Platform definitions
│   │   └── dataplatforms.yaml
│   ├── datasets/                 # Individual dataset metadata
│   │   └── *.yaml
│   └── dataproducts/             # Data product definitions (grouped by domain)
│       ├── child-fam-services/
│       │   └── *.yaml
│       └── housing/
│           └── *.yaml
```

---

## How to Add Tables to Glue Ingestion

**File:** `ingestion/glue.yaml`

### Add a Database

Add to the `database_pattern.allow` list:

```yaml
database_pattern:
    allow:
        - your-database-name
```

### Add a Table

Add to the `table_pattern.allow` list:

```yaml
table_pattern:
    allow:
        - database-name.table-name
```

### Remove a Table

- The SQL-based sources (e.g. Glue) allow the enable of `remove_stale_metadata` parameter. Simply remove the table from the `table_pattern.allow` list. It will be automatically soft-deleted from DataHub on the next ingestion run.
- Qlik Cloud ingestion does not support automatic deletion of stale metadata, so you will need to manually delete the dataset via DataHub UI or CLI if you want to remove it from the metadata store.

---

## How to Add Qlik Spaces to Ingestion

**File:** `ingestion/qlik_cloud.yaml`

Add space names to the `space_pattern.allow` list:

```yaml
space_pattern:
    allow:
        - 'Your Space Name'
```

---

## How to Add Ingestion from Other Sources

If you need to add ingestion from sources other than Glue or Qlik Cloud, please **contact the DAP team** to create the YAML template for you for the first time.

---

## How to Add a New Domain

**File:** `metadata/domains/domains.yaml`

Add a new entry to the list:

```yaml
- id: your-domain-id
  display_name: Your Domain Display Name
  description: Description of what this domain covers
```

**Fields:**
- `id`: Unique identifier (kebab-case)
- `display_name`: Name shown in DataHub UI
- `description`: What the domain covers

---

## How to Add a New Data Platform

**File:** `metadata/dataplatforms/dataplatforms.yaml`

Add a new platform to the `platforms` list:

```yaml
platforms:
  - id: glue
    display_name: Data Analytics Platform
    description: Platform description
    logo: https://url-to-logo.png
```

**Fields:**
- `id`: Must match the source type used in the ingestion configuration (e.g., `glue`, `qlik-sense`, `athena`) or a custom platform ID if you are adding metadata for a non-ingested source
- `display_name`: Custom name shown in DataHub UI
- `logo`: URL to logo image (optional)

**Note:** after adding a new platform, without attaching a dataset to it, the platform will not show up in the DataHub UI.

---

## How to Add a Data Product

1. **Navigate to the correct domain folder:** `metadata/dataproducts/{domain-name}/`
2. **Create a new YAML file:** e.g., `my-product.yaml`
3. **Add the data product definition:**

```yaml
id: domain-name-product-name
domain: urn:li:domain:domain-name
display_name: Product Display Name
description: Business description of what this data product provides.
```

**Fields:**
- `id`: Stable Data Product identifier
- `domain`: Must match an existing domain
- `display_name`: Name shown in the DataHub UI
- `description`: Business description of the Data Product

After creating the Data Product, authorized analysts and Asset Admins attach
datasets to it through the DataHub UI. Dataset associations are not managed in
the YAML definition.

---

## How to Maintain Dataset Metadata

Datasets are created by ingestion sources. Do not add dataset YAML under
`dap-datahub-tools/yaml_config/metadata/datasets/`; that local directory is no
longer part of the repository.

Authorized analysts and Asset Admins maintain human-authored dataset metadata
in the DataHub UI:

1. Find the dataset through search or its Data Platform page.
2. Edit its description and ownership on the dataset page.
3. Use the UI to attach it to the correct Domain and Data Product.

The separate Airflow asset-generation pipeline still publishes machine-
generated metadata for web maps, Earthlight layers, and Qlik Sense Enterprise
dashboards directly to the runtime S3 prefix. This is an automated system
contract, not a manual YAML-authoring route.
