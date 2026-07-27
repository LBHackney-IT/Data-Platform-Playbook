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
  Child Fam Services, Environmental Services, and Revenues. If you need it
  enabled for another department, contact the Data Platform team.

## 2. Folder Structure & File Naming

Upload files to your departmental prefix inside the production bucket:

```
s3://dataplatform-prod-user-uploads/<department>/<target_table_name>/<file_name>.csv
```

- `<department>` identifies your team (e.g. `parking`, `housing`).
- `<target_table_name>` is the folder immediately below the department and
  becomes the Glue table name (e.g. `ringgo_permits`).
- `<file_name>` is ignored when generating the Glue table name. Every CSV in
  the same `<target_table_name>` folder contributes data to the same table.
- Only lowercase `.csv` files are processed; other extensions are ignored.

### Table Names

The table name is generated automatically as:

```
normalize(<target_table_name>)
```

Normalization replaces non-alphanumeric characters with underscores and
collapses consecutive underscores into one.

### Required Path

The Lambda accepts exactly one table folder beneath the department:

```text
<department>/<target_table_name>/<file_name>.csv
```

CSV files that do not match this path structure are rejected, an error is
logged, and no Glue table is created. Other file types do not trigger this
automation. For example:

```text
parking/permits.csv                         # Missing target table folder
parking/ringgo/permits/permits.csv         # Too many folders
parking/ringgo_permits/permits.xlsx        # Unsupported and not processed
```

## Notes

- _Visibility:_ Every member of your department can currently see the CSV
  files and Glue tables created from these uploads, not just those stored under
  a particular `<target_table_name>`.
- _Schema:_ All columns in the generated Glue tables are currently created as `string` types.
- _Table isolation:_ Each `<target_table_name>` folder is a separate table and
  has its own S3 location.
- _Multiple files:_ CSV files in the same table folder must have the same
  header and schema because Athena reads them together as one table.
- _Data format:_ The CSV files are not converted to Parquet. Athena reads the
  original CSV files directly from the user uploads bucket.

### Using Parking as an Example

Parking users can upload monthly files to the same table folder:

```
s3://dataplatform-prod-user-uploads/parking/ringgo_permits/january.csv
s3://dataplatform-prod-user-uploads/parking/ringgo_permits/february.csv
```

These two files jointly make up `ringgo_permits`; they do not create two
tables. The table is created inside the `parking_user_uploads_db` Glue database
and points to the `parking/ringgo_permits/` S3 folder.

To create a separate table, use another table folder:

```text
s3://dataplatform-prod-user-uploads/parking/ringgo_payments/payments.csv
```

This creates the separate `ringgo_payments` table.

## 3. Upload CSV files (Console)

1. Sign in to the AWS Console and open **S3**.
2. Navigate to the `dataplatform-prod-user-uploads` bucket.
3. Browse into your department folder (e.g. `parking/`).
4. Inside the `<department>` folder, create a subfolder named after the target
   table (`<target_table_name>`), then open it.
5. Click **Upload** → **Add files** and choose one or more CSV files that have
   the same header and schema.
6. Leave the default permissions and encryption settings unchanged.
7. Click **Upload**.

After the upload is complete, the automated processing takes less than a
minute. When processing is complete, Parking users can query the table in
Athena as:

```text
parking_user_uploads_db.<target_table_name>
```

## 4. Delete CSV files (Console)

Deleting a CSV removes the Glue table only when no other CSV files remain in
the same `<target_table_name>` folder.

1. In S3, select the CSV under
   `<department>/<target_table_name>/`.
2. Choose **Delete** and confirm.
3. If it was the final CSV in the folder, the table disappears from Glue/Athena
   within less than a minute. Otherwise, the table remains.
