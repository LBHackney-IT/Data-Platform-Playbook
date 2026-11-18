---
title: Ingesting CSV and Excel files from Google Drive
layout: playbook_js
tags: [playbook]
---

## 1. Share the file before ingestion

Upload the CSV or Excel (`.xlsx`) file to Google Drive. Before the first import,
open **Share**, add your department's DAP automation account as a **Viewer**,
and save. The account needs permission to download the file.

| Department | DAP automation account | Department folder |
| --- | --- | --- |
| Parking | DAP.Parking.AutomationAccount@hackney.gov.uk | `parking` |
| Housing | DAP.Housing.AutomationAccount@hackney.gov.uk | `housing` |
| Child & Family Services | DAP.Children-Families.AutomationAccount@hackney.gov.uk | `child-fam-services` |
| Environmental Health | DAP.Env-Health.AutomationAccount@hackney.gov.uk | `env-health` |

## 2. Configure the import

In `dap-airflow`, open `airflow/dags/team_projects/<department>/google-drive/project.yaml`.
Replace `<department>` with the folder from the table above. Copy the relevant
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
