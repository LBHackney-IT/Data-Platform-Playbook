---
title: CSV files to Glue Catalog automation
description: "Automatically create or delete AWS Glue Catalog tables when CSV files are uploaded or removed from S3"
layout: playbook_js
tags: [playbook]
---

# CSV files to Glue Catalog automation

This Lambda automatically creates or deletes AWS Glue Catalog tables whenever
any departmental user uploads or removes CSV files in the
`dataplatform-prod-user-uploads` S3 bucket.

## 1. Prerequisites

- CSV files with a single header row at the top.

## 2. Folder Structure & File Naming

Upload files to your departmental prefix inside the production bucket:

```
s3://dataplatform-prod-user-uploads/<department>/<user_prefix>/<file_name>.csv
```

- `<department>` identifies your team (e.g. `parking`, `housing`).
- `<user_prefix>` **must** be a folder named after the uploader (e.g.
  `davina`, `mike`). Each uploader should keep their files under their own
  prefix.
- `<file_name>` should describe the data set (e.g. `permits_march.csv`).
- Only `.csv` files are supported; other extensions are rejected.


### Table Names

The table name is generated automatically as:

```
normalize(<user_name>) + "_" + normalize(<file_name without .csv>)
```

Normalization replaces non-alphanumeric characters with underscores and
collapses consecutive underscores into one.

## Notes

- _Visibility:_ Every member of your department can currently see the CSV files and Glue tables created from these uploads, not just those stored under their own `<user_prefix>`.
- _Schema:_ All columns in the generated Glue tables are currently created as `string` types.
- _Upload location:_ Place one more CSV file per upload. Do not add additional subfolders beneath your `<user_prefix>` folder.

### Using Parking as an Example

Parking users upload to:

```
s3://dataplatform-prod-user-uploads/parking/davina/permits_march.csv
```

This generates the table `davina_permits_march` inside the
`parking_user_uploads_db` Glue database.


## 3. Upload CSV files (Console)

1. Sign in to the AWS Console and open **S3**.
2. Navigate to the `dataplatform-prod-user-uploads` bucket.
3. Browse into your department folder (e.g. `parking/`).
4. Create a folder named after yourself (if it doesn’t already exist) and open it.
5. Click **Upload** → **Add files** and choose your CSV files.
6. Leave default for everything else (e.g. permissions/encryption (SSE-S3), etc.).
7. Click **Upload**.

Processing takes less than a minute. When complete:

- The CSV is stored at `<department>/<user_prefix>/<file_name>.csv`.
- A Glue table with the generated name appears in the department upload
  database (currently `parking_user_uploads_db` for the Parking workflow).
- You can query the table immediately in Athena.

## 4. Delete CSV files (Console)
Deleting the CSV removes the corresponding Glue table.

1. In S3, select the CSV under `<department>/<user_prefix>/`.
2. Choose **Delete** and confirm.
3. Within less than a minute the table disappears from Glue/Athena.
