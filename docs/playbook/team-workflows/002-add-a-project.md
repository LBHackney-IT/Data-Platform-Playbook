---
id: add-a-project
title: Add a project
description: "Set up and schedule a new SQL or Python project in a team workflow repository."
layout: playbook_js
tags: [playbook, team-workflows]
---

# Add a project

Each project is a folder inside `projects/` in your team's repository
(`dap-<team>-workflows`). Every project becomes one scheduled pipeline (DAG) in
Airflow.

If you only need to schedule one or more SQL queries, you can set the whole
project up in the GitHub website — you don't need Git or Python on your
computer.

## 1. Ask the platform team to register the project

Before you open a pull request, ask the platform team to register the project.
They create its AWS permissions and test databases once. **Check** on your pull
request will fail until this is done, so send the request early.

Choose a project name first: use lowercase letters, numbers and hyphens,
starting with a letter, and keep it short (ideally under 30 characters — see
[Project reference](project-reference) for the exact limit).

Send a request via Halo to the Data Analytics Platform team with this filled in:

```text
Team: <your department, for example data-and-insight>
Project: <folder name, for example success-measures-row-counts>
Repository: <link to your repository>

Reads: <databases or tables the project reads>
Writes: <databases the project writes to, by production name>
Secrets: <Secrets Manager names the Python code reads, or "none">
Python tasks: <yes or no>
CPU and memory: <only if a Python task needs more than the default>
```

Ask again later if the project starts reading or writing different databases.
Changes to SQL, code, tasks or the schedule don't need the platform team.

## 2. Add the project files

### Option A: SQL-only project (in the GitHub website)

A SQL-only project needs just two things inside `projects/<project-name>/`: a
`project.yaml` file and one `.sql` file in `sql/` for each table you want to
build.

1. **Test your query in Athena first.** Write it as one `SELECT` query using
   production database names in double quotes (for example
   `"data-and-insight-refined-zone"."my_table"`). Leave out `CREATE TABLE` and
   `INSERT` — the platform creates and fills the table for you.
2. **Create a branch in GitHub.** Open your team's repository, select the
   **main** branch dropdown near the top left, type a short branch name such as
   `add-my-project`, and select **Create branch**.
3. **Create `project.yaml`.** Make sure your new branch is selected, then select
   **Add file → Create new file**. In the file name box, type:

   ```text
   projects/<project-name>/project.yaml
   ```

   Typing `/` creates the folders automatically. Paste a configuration like
   this, replacing the schedule, database and table name with your own:

   ```yaml
   # Run at 06:00 Monday to Friday (UK time). Remove this line to run manually only.
   schedule: "0 6 * * 1-5"
   database: data-and-insight-refined-zone
   tasks:
     - table: my_summary_table
       history: true
   ```

   Select **Commit changes**, choose **Commit directly to the `<your-branch>`
   branch**, and confirm.

4. **Create the SQL file.** On the same branch, select **Add file → Create new
   file** and name it to match the `table:` in `project.yaml`:

   ```text
   projects/<project-name>/sql/my_summary_table.sql
   ```

   Paste your `SELECT` query and commit it to the same branch. Repeat for any
   other tables in `tasks:`.

5. **Open a pull request.** Return to the repository's main page, select
   **Compare & pull request**, describe what the project does, and select
   **Create pull request**.

See [Project reference](project-reference) for schedules, task order (`after:`),
and table options.

### Option B: Project with Python tasks (on your computer)

For a project that runs Python code, work on your computer with Git and
[uv](https://docs.astral.sh/uv/) so you can run tests locally.

1. Clone your team repository (or update `main` if you already have it) and
   start a branch:

   ```sh
   git clone https://github.com/LBHackney-IT/dap-<team>-workflows.git
   cd dap-<team>-workflows
   git switch -c add-<project-name>
   ```

2. Copy `projects/example-project` from
   [dap-team-workflows-template](https://github.com/LBHackney-IT/dap-team-workflows-template)
   into your repository's `projects/` folder and rename it to `<project-name>`.
3. Update these files in the copied folder:
   - `project.yaml` — set your `schedule`, `database` and `tasks`.
   - `src/example_project/` — rename the package folder if you want a new module
     name, and update `TEAM` and `PROJECT` in `settings.py` to match your
     department and project folder name. (Python tasks can write files only
     under `<team>/<project>/`.)
   - `pyproject.toml` — update `name` and `packages` (under
     `[tool.hatch.build.targets.wheel]`) if you renamed `src/example_project/`.
   - `sql/` and `tests/` — replace the example SQL, Python code and tests with
     your own.
   - Leave `Dockerfile` unchanged.
4. Run `uv lock` (if you edited `pyproject.toml`) and check the tests pass:

   ```sh
   cd projects/<project-name>
   uv run pytest
   ```

5. Commit and push the branch, then open the pull request from the link GitHub
   prints:

   ```sh
   git add -A
   git commit -m "Add <project-name> project"
   git push -u origin add-<project-name>
   ```

## 3. Check, review and merge

Once your pull request is open, the **Check** workflow validates your project
automatically. See [Make a change](make-a-change#read-the-checks) for how to
read the checks, fix any errors on the same branch, and merge into
pre-production.

Next: [Make a change](make-a-change) or, if your pull request is already
merged, [Test in pre-production](test-in-pre-production).
