---
title: Ingesting Metadata to DataHub
description: "How to manage and ingest metadata to DataHub using YAML configuration files"
layout: playbook_js
tags: [playbook]
---

# Ingesting Metadata to DataHub

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
id: urn:li:dataProduct:domain-name.product-name
properties:
  name: Product Display Name
  description: "Business description of what this data product provides"
  domain: urn:li:domain:domain-name
  assets:
    - urn:li:dataset:(urn:li:dataPlatform:glue,database.table1,${ENV})
    - urn:li:dataset:(urn:li:dataPlatform:glue,database.table2,${ENV})
  customProperties:
    data_quality: "High"
    refresh_frequency: "Daily"
```

**Fields:**
- `id`: URN format: `urn:li:dataProduct:domain.product-name`
- `domain`: Must match an existing domain
- `assets`: List of dataset URNs to include
- `customProperties`: Optional metadata (key-value pairs)

---

## How to Add Dataset Metadata (Advanced)

**Note:**  In most cases, you do NOT need to add dataset metadata manually as datasets are automatically created during ingestion from sources as the single source of truth. Only use this if you need to override or add additional metadata to existing datasets. Please consult with the DAP team before adding custom dataset metadata.

**File:** Create a new YAML file in `metadata/datasets/` (e.g., `my_dataset.yaml` as below)

```yaml
id: database.table_name
platform: glue
env: '${ENV}'
editableProperties:
  description: "Your dataset description"
globalTags:
  tags:
    - tag: urn:li:tag:YourTag
ownership:
  owners:
    - owner: urn:li:corpuser:your.email@hackney.gov.uk
      type: TECHNICAL_OWNER
```
