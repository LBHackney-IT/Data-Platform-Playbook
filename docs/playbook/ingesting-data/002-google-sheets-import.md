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
4. **Remove any `restricted` sharing settings** on the sheet.
5. **Share the sheet** with the appropriate service account emails:
   - Click `Share` in the top right corner.
   - Enter the two service email addresses (found in the table below) and set their access to `Viewer`.
   - Uncheck the `Notify people` box.
   - Click `Share`. If prompted to confirm sharing outside your organisation, click `Share anyway`.
6. **Edit the YAML file** as described below. If your department does not have a YAML file, contact the DAP team for configuration assistance.
7. **Your Google Sheet is now ready for ingestion.**

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
| Child & Family Services | child-fam-services@dataplatform-prod0.iam.gserviceaccount.com | child-fam-services@dataplatform-stg.iam.gserviceaccount.com | [Link](https://github.com/LBHackney-IT/dap-airflow/blob/main/airflow/dags/child_fam_services/google_sheet_ingestion_config/child_fam_services.yaml) |



### How to Edit the YAML File

To configure data ingestion for a new sheet, follow these steps using **parking** as an example. This process ensures that the sheet is correctly mapped in the YAML file.

#### Steps:
1. **Locate the YAML file**
   - Open the relevant YAML file (e.g., `parking.yaml`).

2. **Append the following configuration**
   - Scroll to the end of the file.
   - Copy and paste the following details, replacing values where necessary:

   ```yaml
   - department: parking
     spreadsheet_title: nas_live_manual_updates_data_load
     sheet_name: nas_live_manual_updates_data_load
     sheet_id: 1Xf8nBhIW6wyvNOU7JOWSCJwZvsx65T9ZWYSct9vj9Gw
     target_table: nas_live_manual_updates_data_load
     pause_flag:
   ```

3. **Modify the parameters**
   - **`department`**: Define the department to which the data belongs.
   - **`spreadsheet_title`**: (Optional) A human-readable name for easy identification.
   - **`sheet_name`**: Specify the name of the sheet in the Google Spreadsheet.
   - **`sheet_id`**: Enter the unique Google Spreadsheet identifier.
   - **`target_table`**: Define the table name in the raw zone database (a department prefix will be added automatically).
   - **`pause_flag`**: Leave blank for scheduled ingestion or set to `True` to pause.
