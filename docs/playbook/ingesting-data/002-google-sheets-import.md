---
title: Ingesting data from Google Sheets
layout: playbook_js
tags: [playbook]
---

## Objective

Ingest data contained within a Google Sheet for use on the Data Platform, optionally setting a recurring schedule to ingest new data.

## Intended audience

- Data Analyst

## Preparing a Google sheet for ingestion

1. Open the Google sheet you would like to ingest
2. Ensure that all columns have headers. Columns without headers will be lost
3. If the document is unnamed, name it
4. Remove the `restricted` tag on your sheet
5. Click `Share` in the top right corner of the sheet with the two service email addresses with  `Viewer ` access provided in the table below
7. On the new window, choose from the dropdown on the right hand side and select `Viewer`, Uncheck the `Notify people` checkbox
9.  Click `Share`, You will be asked to confirm sharing outside the organisation, click `share anyway`.
10. Then edit the  `YAML` file (see the URL and instruction in below sections)  If your department does not have a YAML file, Please let DAP team know to do the configure for you.
11. Your Google sheet is now ready to ingest

### Departmental service email addresses and YAML files

<table>
  <thead>
    <tr>
      <th>Department</th>
      <th>Staging Service account email</th>
      <th>Production Service account email</th>
      <th>YAML file URL</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>parking</td>
      <td>parking@dataplatform-stg.iam.gserviceaccount.com</td>
      <td>parking@dataplatform-prod0.iam.gserviceaccount.com</td>
      <td>https://github.com/LBHackney-IT/dap-airflow/blob/main/airflow/dags/parking/google_sheet_ingestion_config/parking.yaml</td>
    </tr>
    <tr>
      <td>housing_repairs</td>
      <td>housing-repairs@dataplatform-stg.iam.gserviceaccount.com</td>
      <td>housing-repairs@dataplatform-prod0.iam.gserviceaccount.com</td>
    </tr>
    <tr>
      <td>data_and_insight</td>
      <td>data-and-insight@dataplatform-stg.iam.gserviceaccount.com</td>
      <td>data-and-insight@dataplatform-prod0.iam.gserviceaccount.com</td>
      <td>https://github.com/LBHackney-IT/dap-airflow/blob/main/airflow/dags/data_and_insight/google_sheet_ingestion_config/data_and_insight.yaml</td>
    </tr>
    <tr>
      <td>finance</td>
      <td>finance@dataplatform-stg.iam.gserviceaccount.com</td>
      <td>finance@dataplatform-prod0.iam.gserviceaccount.com</td>
    </tr>
    <tr>
      <td>env_enforcement</td>
      <td>env-enforcement@dataplatform-stg.iam.gserviceaccount.com</td>
      <td>env-enforcement@dataplatform-prod0.iam.gserviceaccount.com</td>
    </tr>
    <tr>
      <td>planning</td>
      <td>planning@dataplatform-stg.iam.gserviceaccount.com</td>
      <td>planning@dataplatform-prod0.iam.gserviceaccount.com</td>
    </tr>
    <tr>
      <td>unrestricted</td>
      <td>unrestricted@dataplatform-stg.iam.gserviceaccount.com</td>
      <td>unrestricted@dataplatform-prod0.iam.gserviceaccount.com</td>
    </tr>
    <tr>
      <td>sandbox</td>
      <td>sandbox@dataplatform-stg.iam.gserviceaccount.com</td>
      <td>sandbox@dataplatform-prod0.iam.gserviceaccount.com</td>
    </tr>
    <tr>
      <td>benefits_and_housing_needs</td>
      <td>benefits-housing-needs@dataplatform-stg.iam.gserviceaccount.com</td>
      <td>benefits-housing-needs@dataplatform-prod0.iam.gserviceaccount.com</td>
    </tr>
    <tr>
      <td>revenues</td>
      <td>revenues@dataplatform-stg.iam.gserviceaccount.com</td>
      <td>revenues@dataplatform-prod0.iam.gserviceaccount.com</td>
    </tr>
    <tr>
      <td>environmental_services</td>
      <td>environmental-services@dataplatform-stg.iam.gserviceaccount.com</td>
      <td>environmental-services@dataplatform-prod0.iam.gserviceaccount.com</td>
    </tr>
    <tr>
      <td>housing</td>
      <td>housing@dataplatform-stg.iam.gserviceaccount.com</td>
      <td>housing@dataplatform-prod0.iam.gserviceaccount.com</td>
      <td>https://github.com/LBHackney-IT/dap-airflow/blob/main/airflow/dags/housing/google_sheet_ingestion_config/housing.yaml</td>
    </tr>
    <tr>
      <td>child-fam-services</td>
      <td>child-fam-services@dataplatform-prod0.iam.gserviceaccount.com</td>
      <td>child-fam-services@dataplatform-stg.iam.gserviceaccount.com</td>
      <td>https://github.com/LBHackney-IT/dap-airflow/blob/main/airflow/dags/child_fam_services/google_sheet_ingestion_config/child_fam_services.yaml</td>
    </tr>
  </tbody>
</table>


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
