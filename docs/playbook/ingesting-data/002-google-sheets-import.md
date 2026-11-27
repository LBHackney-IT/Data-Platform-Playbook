---
title: Ingesting data from Google Sheets
layout: playbook_js
tags: [playbook]
---

## Objective

Ingest data contained within a Google Sheet for use on the Data Platform, optionally setting a recurring schedule to ingest new data.

## Intended audience

- Data Analyst

### Preparing a Google Sheet for Ingestion

To ensure a Google Sheet is ready for ingestion, follow these steps:

1. **Open the Google Sheet** you want to ingest.
2. **Ensure all columns have headers** – Columns without headers will be ignored.
3. **Name the document** if it is currently unnamed.
4. **Keep the `restricted` label** if it is already applied to the sheet.
5. **Share the sheet** with your department's Workspace automation account. The same account is used in `stg` and `prod`.
   - Click `Share` in the top right corner.
   - Add the automation account listed below and set its access to `Viewer`.
   - Uncheck the `Notify people` box, then click `Share`.
6. **Edit the YAML file** as described below. If your department does not have a YAML file, contact the DAP team for configuration assistance.
7. **Your Google Sheet is now ready for ingestion.**

---
### Departmental Service Email Addresses and YAML Files

| Department | Workspace Automation Account | YAML File URL |
| --- | --- | --- |
| Parking | dap.parking.automationaccount@hackney.gov.uk | [Link](https://github.com/LBHackney-IT/dap-airflow/blob/main/airflow/dags/parking/google_sheet_ingestion_config/parking.yaml) |
| Data & Insight | dap.data-insight.automationaccount@hackney.gov.uk | [Link](https://github.com/LBHackney-IT/dap-airflow/blob/main/airflow/dags/data_and_insight/google_sheet_ingestion_config/data_and_insight.yaml) |
| Env Health | dap.env-health.automationaccount@hackney.gov.uk | [Link](https://github.com/LBHackney-IT/dap-airflow/blob/main/airflow/dags/env_health/google_sheet_ingestion_config/env_health.yaml) |
| Housing | dap.housing.automationaccount@hackney.gov.uk | [Link](https://github.com/LBHackney-IT/dap-airflow/blob/main/airflow/dags/housing/google_sheet_ingestion_config/housing.yaml) |
| Child & Family Services | dap.children-families.automationaccount@hackney.gov.uk | [Link](https://github.com/LBHackney-IT/dap-airflow/blob/main/airflow/dags/child_fam_services/google_sheet_ingestion_config/child_fam_services.yaml) |
| Children & Education | dap.children-education.automationaccount@hackney.gov.uk | [Link](https://github.com/LBHackney-IT/dap-airflow/blob/main/airflow/dags/children_and_edu/google_sheet_ingestion_config/children_and_edu.yaml) |



### How to Edit the YAML File

To configure data ingestion for a new sheet, follow these steps using **parking** as an example. This process ensures that the sheet is correctly mapped in the YAML file.

The department is determined by the folder containing the YAML file.

#### Steps:
1. **Locate the YAML file**
   - Open the relevant YAML file (e.g., `parking.yaml`).

2. **Append the following configuration**
   - Scroll to the end of the file.
   - Copy and paste the following details, replacing values where necessary:

   ```yaml
   - target_table: nas_live_manual_updates_data_load
     spreadsheet_title: nas_live_manual_updates_data_load
     sheet_name: nas_live_manual_updates_data_load
     sheet_id: 1Xf8nBhIW6wyvNOU7JOWSCJwZvsx65T9ZWYSct9vj9Gw
     pause_flag:
   ```

3. **Modify the parameters**
   - **`target_table`**: Define the table name in the raw zone database (The table name in the raw zone database will be same as target_table specified here and it's not mandatory to add department name in the table name).
   - **`spreadsheet_title`**: (Optional) A human-readable name for easy identification.
   - **`sheet_name`**: Specify the name of the sheet in the Google Spreadsheet.
   - **`sheet_id`**: Enter the unique Google Spreadsheet identifier.
   - **`starting_position`**: (Optional) Specify the first cell to read from using A1 notation, such as `A1`, `A2`, `W16`, or `AB123`. The import ignores rows above and columns to the left of this cell. The selected cell is treated as the first header cell, with the data rows expected below it. If this value is omitted, blank, or set to `None`, the import starts from `A1`.
   - **`pause_flag`**: Leave blank to include the import when the DAG runs, or set to `true` to pause it.
