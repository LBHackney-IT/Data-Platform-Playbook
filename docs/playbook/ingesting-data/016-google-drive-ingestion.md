---
title: Ingesting CSV and Excel files from Google Drive
layout: playbook_js
tags: [playbook]
---
## 1. Share the file before ingestion

Upload the CSV or Excel (`.xlsx`) file to Google Drive. Before the first import,
open **Share**, add your department's DAP automation account as a **Viewer**,
and save. The account needs permission to download the file.

| Department              | DAP automation account                                  | Department folder      | Configuration in`dap-airflow`                                                                                                                            |
| ----------------------- | ------------------------------------------------------- | ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Parking                 | DAP.Parking.AutomationAccount@hackney.gov.uk            | `parking`            | [Edit YAML](https://github.com/LBHackney-IT/dap-airflow/edit/main/airflow/dags/team_projects/parking/google-drive/project.yaml)                     |
| Housing                 | DAP.Housing.AutomationAccount@hackney.gov.uk            | `housing`            | [Edit YAML](https://github.com/LBHackney-IT/dap-airflow/edit/main/airflow/dags/team_projects/housing/google-drive/project.yaml)                     |
| Child & Family Services | DAP.Children-Families.AutomationAccount@hackney.gov.uk  | `child-fam-services` | [Edit YAML](https://github.com/LBHackney-IT/dap-airflow/edit/main/airflow/dags/team_projects/child-fam-services/google-drive/project.template.yaml) |
| Children & Education    | DAP.Children-Education.AutomationAccount@hackney.gov.uk | `children-and-edu`   | [Edit YAML](https://github.com/LBHackney-IT/dap-airflow/edit/main/airflow/dags/team_projects/children-and-edu/google-drive/project.template.yaml)   |
| Environmental Health    | DAP.Env-Health.AutomationAccount@hackney.gov.uk         | `env-health`         | [Edit YAML](https://github.com/LBHackney-IT/dap-airflow/edit/main/airflow/dags/team_projects/env-health/google-drive/project.template.yaml)         |


## 2. Configure the import

Use the link above to open your department's configuration in `dap-airflow`.
CSV or Excel entry under `tasks` and keep the existing entries.


```yaml
schedule: "0 22 * * *"
tasks:
  - google_drive:
      target_table: permit_summary
      file_id: "CSV_FILE_ID"

  - google_drive:
      target_table: monthly_permits
      file_id: "EXCEL_FILE_ID"
      worksheet: Monthly permits
      starting_position: A2
```

- `file_id` is the part after `/d/` in the Drive file link.
- `target_table` is the raw table name. Start with a lowercase letter and use lowercase letters, digits and underscores.
- For Excel, `worksheet` defaults to `Sheet1`. If your tab has a different name,
  enter its exact name. Add one task per tab you want to import.
- For CSV, omit `worksheet`.
- `starting_position` is the first header cell. Omit it to start at `A1`.
- `schedule` applies to all tasks. This example runs daily at 10 pm London time. Use `null` for manual runs.
- `column_types_override` is optional. See [below](#3-additional-notes) for details.

## 3. Additional notes

### Column type overrides

The import infers column types automatically. If it misinterprets values in
a commonly used data format, contact the DAP team to discuss adding default
support.

To set a column type for your import, add `column_types_override` under
`google_drive`, alongside `file_id`. Use the normalised column name, such as
`permit_id` for `Permit ID`. The `type` sets the output data type. For dates
or timestamps stored as text, `format` describes how to read the source value.

Supported types are `string`, `boolean`, `bigint`, `double`, `date`, `timestamp`
and `decimal`.

```yaml
column_types_override:
  permit_id:
    type: string
  issued_on:
    type: date
    format: "%Y%m%d"
  fee_amount:
    type: decimal
    precision: 12
    scale: 2
```

This example keeps `00123` as text, reads `20261124` as 24 November 2026 and
stores fees such as `12.50` exactly. For a `decimal`, `precision` sets the
maximum total number of digits and `scale` sets the number of decimal places.
