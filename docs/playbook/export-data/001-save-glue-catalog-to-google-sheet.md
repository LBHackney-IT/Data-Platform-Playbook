---
title: Export data catalog table or view to Google Sheets
layout: playbook_js
tags: [playbook]
---

## Objective

Export data catalog table or view from AWS Glue to Google Sheets, allowing you to share and analyze data in a spreadsheet format.

## Intended audience

- Data Analyst

### Preparing a Google Sheet for Export

To ensure a Google Sheet is ready to receive exported table or view data, follow these steps:

1. **Create or open the Google Sheet** where you want to export the data.
2. **Create your worksheet** in the sheet with the desired name.
3. **Remove `restricted` tag** on the sheet.
4. **Share the sheet** with the appropriate service account emails:
   - Click `Share` in the top right corner.
   - Enter the two service email addresses (found in the table below) and set their access to `Editor` (required for writing data to the sheet).
   - Uncheck the `Notify people` box.
   - Click `Share`. If prompted to confirm sharing outside your organisation, click `Share anyway`.
5. **Add your sheet information to the configuration file** as described below.
6. **Your Google Sheet is now ready to receive exported table or view data.**

---
### Departmental Service Email Addresses and YAML Files

| Department | Staging Service Account Email | Production Service Account Email | YAML File URL |
|------------|------------------------------|----------------------------------|---------------|
| Parking | parking@dataplatform-stg.iam.gserviceaccount.com | parking@dataplatform-prod0.iam.gserviceaccount.com | [Link](https://github.com/LBHackney-IT/dap-airflow/blob/main/airflow/dags/parking/google_sheet_ingestion_config/parking.yaml) |
| Housing Repairs | housing-repairs@dataplatform-stg.iam.gserviceaccount.com | housing-repairs@dataplatform-prod0.iam.gserviceaccount.com | |
| Data & Insight | data-and-insight@dataplatform-stg.iam.gserviceaccount.com | data-and-insight@dataplatform-prod0.iam.gserviceaccount.com | [Link](https://github.com/LBHackney-IT/dap-airflow/blob/main/airflow/dags/data_and_insight/google_sheet_ingestion_config/data_and_insight.yaml) |
| Finance | finance@dataplatform-stg.iam.gserviceaccount.com | finance@dataplatform-prod0.iam.gserviceaccount.com | |
| Environmental Enforcement | env-enforcement@dataplatform-stg.iam.gserviceaccount.com | env-enforcement@dataplatform-prod0.iam.gserviceaccount.com | |
| Planning | planning@dataplatform-stg.iam.gserviceaccount.com | planning@dataplatform-prod0.iam.gserviceaccount.com | |
| Unrestricted | unrestricted@dataplatform-stg.iam.gserviceaccount.com | unrestricted@dataplatform-prod0.iam.gserviceaccount.com | |
| Sandbox | sandbox@dataplatform-stg.iam.gserviceaccount.com | sandbox@dataplatform-prod0.iam.gserviceaccount.com | |
| Benefits & Housing Needs | benefits-housing-needs@dataplatform-stg.iam.gserviceaccount.com | benefits-housing-needs@dataplatform-prod0.iam.gserviceaccount.com | |
| Revenues | revenues@dataplatform-stg.iam.gserviceaccount.com | revenues@dataplatform-prod0.iam.gserviceaccount.com | |
| Environmental Services | environmental-services@dataplatform-stg.iam.gserviceaccount.com | environmental-services@dataplatform-prod0.iam.gserviceaccount.com | |
| Housing | housing@dataplatform-stg.iam.gserviceaccount.com | housing@dataplatform-prod0.iam.gserviceaccount.com | [Link](https://github.com/LBHackney-IT/dap-airflow/blob/main/airflow/dags/housing/google_sheet_ingestion_config/housing.yaml) |
| Child & Family Services | child-fam-services@dataplatform-stg.iam.gserviceaccount.com | child-fam-services@dataplatform-prod0.iam.gserviceaccount.com | [Link](https://github.com/LBHackney-IT/dap-airflow/blob/main/airflow/dags/child_fam_services/google_sheet_ingestion_config/child_fam_services.yaml) |


#### Configuration Parameters

Each sheet export configuration can include the following parameters:

- **`sheet_id`**: The unique identifier for the Google Sheet (required)
- **`worksheet_name`**: The name of the worksheet within the Google Sheet where data will be exported (required)
- **`glue_database`**: The database name in Glue data catalog (required)
- **`glue_table`**: The table or view name in the Glue database (required)
- **`custom_query`**: (Optional) Custom SQL query to filter the catalog data before export.
  - By default, it's empty and means `SELECT * FROM glue_database.glue_table`
  - Cannot be used together with `only_latest_partition`
- **`only_latest_partition`**: (Optional) Boolean (`true`/`false`). Only allow to be `true` if table is partitioned by import_date. When `true`, automatically generates a query to get only the latest partition based on `import_date`:
  ```
  SELECT * FROM "database"."table" WHERE import_date = (SELECT MAX(import_date) FROM "database"."table")
  ```
  - Cannot be used together with `custom_query`. By default, it's `false`.
- **`sheet_schedule`**: (Optional) Schedule for this specific sheet export within the DAG run.
  - If not specified, the task runs daily.
  - Format: cron expression (e.g., `"30 3 * * 5"` for Friday at 3:30 AM)

#### Important Notes

- Use either `custom_query` OR `only_latest_partition`, not both.

#### Example Configuration

```yaml
# Example for non-partitioned table or view
sheets:
  - sheet_id: 1qgRT9GTSJw9DzJAazbLcN1sjIkqNXEMOMWaQD6m79M0
    worksheet_name: Flat Table
    glue_database: housing_nec_migration
    glue_table: homeowners_flat_database
# Example for custom query
  - sheet_id: 1InRDSKgMGYuuhAB8huORD_mZVZKADuuVNM-egsZ_7hc
    worksheet_name: cfs_test1
    glue_database: child-fam-services-refined-zone
    glue_table: addresses
    custom_query: SELECT id, flat_number, post_code FROM "child-fam-services-raw-zone"."addresses" where street = 'Essex Road'
    sheet_schedule: 30 3 * * 5
# Example for partitioned table
  - sheet_id: 1InRDSKgMGYuuhAB8huORD_mZVZKADuuVNM-egsZ_7hc
    worksheet_name: cfs_test2
    glue_database: child-fam-services-refined-zone
    glue_table: open_cin_cases_vs_supervisions
    only_latest_partition: true
```
