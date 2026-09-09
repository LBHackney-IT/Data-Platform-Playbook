---
title: Managing DataHub Metadata
description: "A data engineer's guide to DataHub metadata ownership, configuration, and permissions"
layout: playbook_js
tags: [playbook]
---
# Managing DataHub Metadata

> **Primary audience:** DAP data engineers who maintain DataHub catalog
> structure, automated metadata, user groups, and metadata permissions.

## Overview

DataHub metadata has more than one source of truth. Before making a change,
identify which system owns it:

- `dap-datahub-tools` owns repository-managed DataHub metadata,
  authorization configuration, ingestion recipes, and supporting runtime code.
- `dap-access-management` owns Lake Formation-derived groups, their members,
  and their LF-tag scopes.
- Glue, Qlik Cloud, Tableau Cloud, and the Airflow asset-generation workflow
  own the technical assets they create.
- Authorized users maintain permitted human-authored metadata and asset
  associations in the DataHub UI.

Do not copy UI-managed or source-managed metadata into repository YAML. The
automated workflows treat their configured sources as authoritative and can
replace manual changes made in the wrong place.

## Metadata Ownership and Permissions

### Manage through YAML

Use YAML when the definition, membership, or permission is intended to be
reviewed and deployed as code.

| What you are changing                                               | Source of truth                                                                        | Notes                                                                                                   |
| ------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| Domain and Subdomain definitions                                    | `dap-datahub-tools/yaml_config/metadata/domains/*.yaml`                              | Each service-area file contains a`domains` list and may contain nested `subdomains`.                |
| Data Platform display definitions                                   | `dap-datahub-tools/yaml_config/metadata/dataplatforms/dataplatforms.yaml`            | The built-in source IDs`glue`, `qlik-sense`, and `tableau` must not be changed.                   |
| Data Product definitions                                            | `dap-datahub-tools/yaml_config/metadata/dataproducts/<top-level-group>/*.yaml`       | The`domain` field, rather than the folder name, determines the DataHub Domain relationship.           |
| Reusable DataHub metadata permission profiles                       | `dap-datahub-tools/yaml_config/authorization/permission_profiles.yaml`               | Defines capabilities only; it does not assign users or groups.                                          |
| Profiles assigned to every Lake Formation-derived group             | `dap-datahub-tools/yaml_config/authorization/lakeformation_group_authorization.yaml` | The resulting DataHub policies are restricted by each group's LF-tags.                                  |
| DataHub-only groups, authoritative members, and profile assignments | `dap-datahub-tools/yaml_config/authorization/managed_datahub_groups.yaml`            | Use this for groups that do not come from Lake Formation.                                               |
| Lake Formation-derived group members and LF-tag scopes              | `dap-access-management/groups/<team>/<group>.yaml`                                   | This also controls DAP access intent. Do not duplicate these members in`managed_datahub_groups.yaml`. |

Removing a repository-managed Domain, Data Platform, or Data Product from YAML
can cause the corresponding DataHub entity to be hard-deleted by automated reconciliation Airflow task.

### Manage without YAML

Use the DataHub UI for permitted human-authored enrichment and associations on
existing assets.

| What you are changing                        | Where to change it            | Who can change it                                                                                                                                                                                              |
| -------------------------------------------- | ----------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Dataset descriptions                         | The asset page in DataHub     | Members of a matching Lake Formation-derived group can edit descriptions where the asset's LF-tags match their scope. Members of`dap-datahub-asset-admins` can edit the configured asset types more broadly. |
| Dataset column descriptions                  | The Dataset schema in DataHub | Members of a matching Lake Formation-derived group and members of`dap-datahub-asset-admins`.                                                                                                                 |
| Ownership and other permitted asset metadata | The asset page in DataHub     | Members of`dap-datahub-asset-admins`.                                                                                                                                                                        |
| Assigning an asset to a Domain               | The asset page in DataHub     | Members of`dap-datahub-asset-admins`.                                                                                                                                                                        |
| Assigning an asset to a Data Product         | The DataHub UI                | Members of`dap-datahub-asset-admins`. The Data Product definition itself remains YAML-managed.                                                                                                               |

Domain and Data Product associations are intentionally not stored in the
repository YAML. Manual membership or policy changes made directly in DataHub
are also not supported for reconciler-managed groups; the next successful
authorization run will restore the YAML-defined state.

### No manual action is required

The following metadata is created, updated, and removed by automation. Data
engineers should troubleshoot the owning source or workflow rather than create
replacement entities manually in DataHub.

| Metadata or process                                                             | Automated owner                                                                                                                               |
| ------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| Glue Catalog assets                                                             | The Glue DataHub ingestion source                                                                                                             |
| Qlik Cloud dashboards                                                           | The Qlik Cloud DataHub ingestion source                                                                                                       |
| Tableau Cloud dashboards                                                        | The Tableau Cloud DataHub ingestion source; each published workbook with an allowed visible dashboard is represented as one DataHub Dashboard |
| Web map, Earthlight, and Qlik Sense Enterprise Dataset metadata                 | The`data_and_insight_datahub_assets_yaml_generate_dag` Airflow DAG and generated runtime YAML                                               |
| Creation and updates of YAML-managed Domains, Data Platforms, and Data Products | The`data_and_insight_datahub_metadata` Airflow DAG                                                                                          |
| Removal of entities that disappear from managed YAML                            | The metadata DAG's guarded reconciliation tasks                                                                                               |
| DataHub Groups, memberships, and metadata policies declared in YAML             | The independent`data_and_insight_datahub_authorization` Airflow DAG                                                                         |

The repository intentionally has no
`dap-datahub-tools/yaml_config/metadata/datasets/` directory. Generated Dataset
YAML exists only in the environment-specific runtime S3 prefix; manually
authored Dataset YAML is not supported.

## Repository and Runtime Structure

The relevant source layout is:

```text
dap-datahub-tools/
├── yaml_config/
│   ├── authorization/
│   │   ├── permission_profiles.yaml
│   │   ├── lakeformation_group_authorization.yaml
│   │   └── managed_datahub_groups.yaml
│   ├── ingestion/
│   │   ├── glue.yaml
│   │   ├── qlik_cloud.yaml
│   │   └── tableau_cloud.yaml
│   └── metadata/
│       ├── domains/
│       │   └── *.yaml
│       ├── dataplatforms/
│       │   └── dataplatforms.yaml
│       └── dataproducts/
│           └── <top-level-group>/*.yaml
└── etl_scripts/
    ├── authorization/
    ├── ingestion_sources/
    └── metadata/

dap-access-management/
└── groups/
    └── <team>/<group>.yaml
```

Metadata management and authorization run as separate Airflow DAGs:

| Airflow DAG                                | DAG source path                                                                                  | Responsibility                                                                                       |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------- |
| `data_and_insight_datahub_metadata`      | `dap-airflow/airflow/dags/data_and_insight/datahub/metadata/datahub_metadata_dag.py`           | Creates and updates managed metadata and technical assets, then reconciles removed managed entities. |
| `data_and_insight_datahub_authorization` | `dap-airflow/airflow/dags/data_and_insight/datahub/authorization/datahub_authorization_dag.py` | Reconciles DataHub Groups, authoritative memberships, and metadata policies.                         |

Both DAGs run independently on weekdays at 15:00. They download
`yaml_config/` and `etl_scripts/` from
`s3://dataplatform-{env}-datahub-ingestion/` into `/app/` before running, where
`{env}` is `stg` or `prod`.

## How to Add or Update a Domain

**Repository:** `dap-datahub-tools`

**Path:** `yaml_config/metadata/domains/<service-area>.yaml`

Create or update the appropriate service-area file. A file contains a
`domains` list and can define Subdomains:

```yaml
domains:
  - id: example-domain
    display_name: Example Domain
    description: What this Domain covers.
    subdomains:
      - id: example-subdomain
        display_name: Example Subdomain
        description: What this Subdomain covers.
```

- `id` is a stable, unique, kebab-case identifier used in the DataHub URN.
- `display_name` is the name shown in DataHub.
- `description` explains the business scope.
- `subdomains` is optional. Each Subdomain also needs a stable, unique `id`.

Do not change an existing ID to correct display text. Update `display_name`
instead, because changing the ID creates a different DataHub entity.

## How to Add or Update a Data Platform

**Repository:** `dap-datahub-tools`

**Path:** `yaml_config/metadata/dataplatforms/dataplatforms.yaml`

Add or update an item under `platforms`:

```yaml
platforms:
  - id: example-platform
    display_name: Example Platform
    description: What the platform contains.
    logo: https://example.org/platform-logo.png
```

- `id` is the DataHub platform ID.
- `display_name` is the name shown in DataHub.
- `description` describes the platform.
- `logo` is optional and must be a URL that DataHub can read.

The source-owned IDs `glue`, `qlik-sense`, and `tableau` are built-in names
used by ingestion and cannot be renamed. A new platform does not appear in the
DataHub UI until at least one asset is associated with it.

## How to Add or Update a Data Product

**Repository:** `dap-datahub-tools`

**Path:**
`yaml_config/metadata/dataproducts/<top-level-group>/<product-name>.yaml`

Use one YAML file per Data Product:

```yaml
id: homeowner-services-major-works
domain: urn:li:domain:homeowner-services
display_name: Major Works
description: Major Works data product for Homeowner Services.
```

- `id` is a stable, unique Data Product identifier.
- `domain` must be the URN of an existing Domain or Subdomain.
- `display_name` is the name shown in DataHub.
- `description` explains what the Data Product provides.

The folder is for repository organization only. The `domain` field is the
source of truth for the Data Product's Domain. After the definition is
deployed, a member of `dap-datahub-asset-admins` attaches the relevant assets
to the Data Product through the DataHub UI.

## How to Maintain Dataset Metadata

Datasets are created by ingestion sources or by the automated asset-generation
workflow. Do not create a local `yaml_config/metadata/datasets/` directory.

For human-authored metadata:

1. Find the Dataset through DataHub search or its Data Platform page.
2. Confirm that you are editing the correct `stg` or `prod` asset.
3. Edit only the fields allowed by your DataHub group.
4. If you are an Asset Admin, assign the Dataset to the appropriate Domain and
   Data Product through the UI.

If an automated name, schema, tag, URL, or source-owned field is wrong, fix the
source data or ingestion workflow. A manual DataHub edit may be overwritten by
the next ingestion run.

## How to Manage User Groups and Permissions

There are two supported group types. **DataHub-only Group** is the name of the
category; it has not been renamed. The Asset Admin group is one DataHub-only
Group with the stable ID `dap-datahub-asset-admins`. A group's `display_name`
is only its label in the DataHub UI.

| Group type                   | How permissions are managed                                                                                                                                                                                                                                                                                                                                                                                         |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Lake Formation-derived Group | No DataHub configuration change is required for normal use. Membership and LF-tag scope come from`dap-access-management/groups/<team>/<group>.yaml`. The authorization workflow automatically creates the DataHub Group and gives its users `EDIT_ENTITY_DOCS` and `EDIT_DATASET_COL_DESCRIPTION` on matching catalog assets, allowing them to edit asset and column descriptions.                            |
| DataHub-only Group           | Use this when selected users need metadata permissions beyond the two automatically assigned permissions. Add users to the appropriate group in`dap-datahub-tools/yaml_config/authorization/managed_datahub_groups.yaml` and assign an existing profile in `permission_profiles`. If a new capability is required, define it first in `dap-datahub-tools/yaml_config/authorization/permission_profiles.yaml`. |

Use Hackney email addresses for members. Membership is authoritative, so
manual changes in DataHub will be reverted by the next successful authorization
reconciliation. These permissions control DataHub metadata only; they do not
grant access to the underlying Lake Formation data.
