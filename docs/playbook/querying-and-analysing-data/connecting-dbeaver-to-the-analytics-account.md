---
title: Connecting DBeaver to the Analytics account
description: "Set up an AWS profile and query the Analytics account's Athena workgroup from DBeaver."
layout: playbook_js
tags: [playbook]
---

## Objective

Query data in the Analytics account from [DBeaver](https://dbeaver.io/), a desktop SQL client, rather than the Athena query editor in the AWS console.

## Intended audience

- Data Analyst

:::danger Only use a Hackney-managed device
Only follow this guide on a laptop issued and managed by Hackney Council. Do not set it up on a personal device.

When you run a query in DBeaver, the results are downloaded to your device. They no longer stay inside AWS. This includes any personal or sensitive data in the results. Handle query results in line with Hackney's data protection and information security policies. Do not copy or export them to personal storage.
:::

## Before you start

You need:

- Access to the Analytics account. When you can see the Analytics account in the [AWS access portal](https://hackney.awsapps.com/start), you have access. If you cannot see it, ask the Data Platform team.
- Your team's Athena workgroup name. It is `dap-` followed by your team name, for example `dap-data-insight` or `dap-nec-housing`.
- Permission to install software on your laptop, or help from IT to install it.

## How it works

DBeaver does not log in to AWS itself. Instead, you set up an **AWS profile** on your laptop. The profile records which AWS account and role to use. You log in through the AWS CLI, and DBeaver uses that login when it runs queries.

You do steps 1 to 4 once. After that, you only need to log in again when your session expires (see [Day-to-day use](#day-to-day-use)).

## 1. Install the AWS CLI

The AWS CLI is a command-line tool from AWS. You use it to create the profile and to log in.

1. Download the AWS CLI version 2 installer for your operating system from the [AWS CLI install page](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html).
   - **Windows**: download and run the `.msi` installer.
   - **macOS**: download and run the `.pkg` installer.
2. Open a new terminal window.
   - **Windows**: open the Start menu, type `PowerShell` and open **Windows PowerShell**.
   - **macOS**: open **Terminal** from Applications > Utilities.
3. Check that the CLI is installed:

   ```shell
   aws --version
   ```

   You should see a version that starts with `aws-cli/2`.

:::note Screenshot placeholder
Terminal showing the output of `aws --version`.
Suggested file: `../images/dbeaver-analytics-aws-cli-version.png`
:::

## 2. Find your account and role in the AWS access portal

1. Log in to your Hackney Google account in your browser.
2. Open the [AWS access portal](https://hackney.awsapps.com/start).
3. Expand the Analytics account (account ID `577817260960`).
4. Note the name of the role listed under it, for example `data-insight-data-analyst`. You will choose this role in the next step.

:::note Screenshot placeholder
AWS access portal with the Analytics account expanded and the team role visible.
Suggested file: `../images/dbeaver-analytics-access-portal.png`
:::

## 3. Create the AWS profile

1. In your terminal, run:

   ```shell
   aws configure sso
   ```

2. Answer each question as follows. Press Enter after each answer.

   | Question | Answer |
   | --- | --- |
   | `SSO session name (Recommended)` | `hackney` |
   | `SSO start URL [None]` | `https://hackney.awsapps.com/start` |
   | `SSO region [None]` | `eu-west-1` |
   | `SSO registration scopes [sso:account:access]` | Press Enter to accept the default |

3. Your browser opens and asks you to allow the AWS CLI to access your data. Check that the code in the browser matches the code in your terminal, then select **Allow**.

   :::note Screenshot placeholder
   Browser page asking you to allow access for the AWS CLI.
   Suggested file: `../images/dbeaver-analytics-allow-cli.png`
   :::

4. Go back to the terminal. If you have access to more than one account, the CLI lists them. Use the arrow keys to select the Analytics account (`577817260960`) and press Enter.
5. If you have more than one role in that account, select your team role, for example `data-insight-data-analyst`.
6. Answer the remaining questions:

   | Question | Answer |
   | --- | --- |
   | `Default client Region [None]` | `eu-west-2` |
   | `CLI default output format [None]` | `json` |
   | `Profile name` | `analytics` |

   :::note Screenshot placeholder
   Terminal showing the completed `aws configure sso` prompts.
   Suggested file: `../images/dbeaver-analytics-configure-sso.png`
   :::

7. Check that the profile works:

   ```shell
   aws sts get-caller-identity --profile analytics
   ```

   The output includes `"Account": "577817260960"` and your role name in the `Arn` value.

The CLI saves the profile in a file called `config`:

- **Windows**: `C:\Users\<your username>\.aws\config`
- **macOS**: `~/.aws/config`

It looks like this. Your `sso_role_name` will match your team.

```ini
[profile analytics]
sso_session = hackney
sso_account_id = 577817260960
sso_role_name = data-insight-data-analyst
region = eu-west-2
output = json

[sso-session hackney]
sso_start_url = https://hackney.awsapps.com/start
sso_region = eu-west-1
sso_registration_scopes = sso:account:access
```

If you prefer, you can create this file in a text editor instead of running `aws configure sso`. Then run `aws sso login --profile analytics` to log in.

## 4. Set up DBeaver

Download and install [DBeaver Community](https://dbeaver.io/download/) if you do not have it.

### Why not use the Athena connection type?

The Analytics account's team workgroups store query results in Athena-managed storage, not in an S3 bucket that you choose. DBeaver's built-in Athena connection type expects you to give it an S3 results location, and fails without one. To get around this, you copy the Athena driver and use it as a generic JDBC driver. It is still the official AWS Athena JDBC driver, but DBeaver no longer asks for a results location.

### Create the driver

1. In DBeaver, select **Database** > **Driver Manager**.
2. Select **Athena** in the list, then select **Copy**.

   :::note Screenshot placeholder
   Driver Manager with the Athena driver selected and the Copy button visible.
   Suggested file: `../images/dbeaver-analytics-driver-manager.png`
   :::

3. In the driver settings:
   - Set **Driver Name** to `Athena Managed Storage`.
   - Set **Driver Type** to **Generic**.
   - Leave the other settings and the **Libraries** tab as they are.

   :::note Screenshot placeholder
   Driver settings for "Athena Managed Storage" with Driver Type set to Generic.
   Suggested file: `../images/dbeaver-analytics-driver-settings.png`
   :::

4. Select **OK**, then close the Driver Manager.

### Create the connection

1. Select **Database** > **New Database Connection**.
2. Search for `Athena Managed Storage`, select it, then select **Next**.
3. In **JDBC URL**, enter the following. Replace `dap-data-insight` with your team's workgroup.

   ```text
   jdbc:athena://Region=eu-west-2;Workgroup=dap-data-insight;Catalog=AwsDataCatalog;CredentialsProvider=ProfileCredentials;ProfileName=analytics;
   ```

4. Leave **Username** and **Password** empty.

   :::note Screenshot placeholder
   New connection window with the JDBC URL filled in.
   Suggested file: `../images/dbeaver-analytics-connection-settings.png`
   :::

5. Select **Test Connection**. If DBeaver asks to download driver files, select **Download**.
6. When the test succeeds, select **Finish**.

The connection appears in the **Database Navigator**. Expand it to see the databases you have access to.

:::note Screenshot placeholder
Database Navigator showing the new connection expanded, with databases listed.
Suggested file: `../images/dbeaver-analytics-navigator.png`
:::

## 5. Run a query

1. Right-click the connection and select **SQL Editor** > **Open SQL script**.
2. Enter a query, for example:

   ```sql
   SELECT * FROM "<database name>"."<table name>" LIMIT 10;
   ```

3. Press **Ctrl+Enter** (**Cmd+Enter** on macOS) to run it.

:::note Screenshot placeholder
SQL editor with a query and its results.
Suggested file: `../images/dbeaver-analytics-query-results.png`
:::

## Day-to-day use

Your AWS login expires after a few hours. When it expires, DBeaver shows an error about expired or missing credentials. To log in again:

1. Open a terminal and run:

   ```shell
   aws sso login --profile analytics
   ```

2. Select **Allow** in the browser.
3. In DBeaver, right-click the connection and select **Invalidate/Reconnect**.

## Troubleshooting

| Problem | What to do |
| --- | --- |
| `aws` is not recognised | Close and reopen your terminal after installing the AWS CLI. If it still fails, restart your laptop. |
| The Analytics account is not listed in `aws configure sso` | Check that you can see it in the [AWS access portal](https://hackney.awsapps.com/start). If you cannot, ask the Data Platform team for access. |
| DBeaver says the token has expired or the profile cannot be loaded | Run `aws sso login --profile analytics`, then reconnect in DBeaver. |
| DBeaver asks for an S3 output location | You are using the built-in Athena connection type. Create the connection with the `Athena Managed Storage` driver instead. |
| Access denied on the workgroup | Check the `Workgroup` value in the JDBC URL matches your team's workgroup. Your role can only use its own team's workgroup. |
| You cannot see a database or table | Your team does not have access to it. Ask the Data Platform team. |
