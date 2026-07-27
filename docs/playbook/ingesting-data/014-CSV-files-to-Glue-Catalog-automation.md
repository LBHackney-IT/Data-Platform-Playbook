---
title: Ingest manually uploaded CSV files into the Glue Catalog
description: "Automatically create or delete AWS Glue Catalog tables when CSV files are uploaded or removed from S3"
layout: playbook_js
tags: [playbook]
---

# Ingest manually uploaded CSV files into the Glue Catalog

This Lambda automatically creates or deletes AWS Glue Catalog tables whenever
a user from an enabled department uploads or removes CSV files in the
`dataplatform-prod-user-uploads` S3 bucket.

## 1. Prerequisites

- CSV files with a single header row at the top.
- The automation is currently enabled for Parking, Housing, Data and Insight,
  Child Fam Services, Unrestricted, Environmental Services, and Revenues. If
  you need it enabled for another department, contact the Data Platform team.

## 2. Folder Structure & File Naming

Upload files to your departmental prefix inside the production bucket:

```
s3://dataplatform-prod-user-uploads/<department>/<project_name_prefix>/<file_name>.csv
```

- `<department>` identifies your team (e.g. `parking`, `housing`).
- `<project_name_prefix>` is a required folder because it becomes the first
  part of the Glue table name. Using a project or data-source name is
  recommended (e.g. `parking_permits`, `ringgo`). For individual work, you can
  use the uploader's name instead (e.g. `davina`).
- `<file_name>` should describe the data set (e.g. `permits_march.csv`).
- Only `.csv` files are supported; other extensions are rejected.

### Table Names

The table name is generated automatically as:

```
normalize(<project_name_prefix>) + "_" + normalize(<file_name without .csv>)
```

Normalization replaces non-alphanumeric characters with underscores and
collapses consecutive underscores into one.

## Notes

- _Visibility:_ Every member of your department can currently see the CSV
  files and Glue tables created from these uploads, not just those stored under
  a particular `<project_name_prefix>`.
- _Schema:_ All columns in the generated Glue tables are currently created as `string` types.
- _Upload location:_ Place one or more CSV files beneath the project prefix.
  Avoid additional subfolders because they do not become part of the table
  name and can cause table-name collisions.

### Using Parking as an Example

Parking users upload to:

```
s3://dataplatform-prod-user-uploads/parking/ringgo/permits_march.csv
```

This generates the table `ringgo_permits_march` inside the
`parking_user_uploads_db` Glue database.

## 3. Upload CSV files (Console)

1. Sign in to the AWS Console and open **S3**.
2. Navigate to the `dataplatform-prod-user-uploads` bucket.
3. Browse into your department folder (e.g. `parking/`).
4. Inside the `<department>` folder, create a subfolder named after the project
   or data source (`<project_name_prefix>`), then open it.
5. Click **Upload** → **Add files** and choose your CSV files.
6. Leave the default permissions and encryption settings unchanged.
7. Click **Upload**.

Processing takes less than a minute. When complete:

- The CSV is stored at
  `<department>/<project_name_prefix>/<file_name>.csv`.
- A Glue table with the generated name appears in the department upload
  database (currently `parking_user_uploads_db` for the Parking workflow).
- You can query the table immediately in Athena.

## 4. Delete CSV files (Console)

Deleting the CSV removes the corresponding Glue table.

1. In S3, select the CSV under
   `<department>/<project_name_prefix>/`.
2. Choose **Delete** and confirm.
3. Within less than a minute the table disappears from Glue/Athena.
