---
id: ux
title: 📚UX
description: "The DAP⇨flow guide for data analysts and engineers, for developing and deploying Airflow DAGs, running data pipelines in the Data Analytics Platform (DAP)."
layout: playbook_js
tags: [dap-airflow]
---

# 📚`UX`
![DAP⇨flow](../dap-airflow/images/DAPairflowFLOWwide.png)  

## 📚User eXperience criteria
The **📚Onboarding** links below will take you directly to the **📚`UX` criteria** within each of the **DAP⇨flow** onboarding guides.

We start by using BDD language to map the flow of a process: 

**a)** This forms our behavior acceptance test or `UX` criteria. If this test fails then there likely was a change to the software, interface or underlying data. When we do not control how software works, it's BDD process description is often not as succinct as we would like, like if we wanted to develop our own software to perform the same task. 

**b)** By measuring a process in terms of steps or features, we can better understand how to improve it's operation or efficiency. This practice aligns with the Lean principle of "creating an uninterrupted workflow".

Software interfaces often require users to perform many additional steps to perform a single task. Measuring these steps or "flow features" helps us quickly identify processes likely to have poor user experience (UX) and helps find opportunities to cut waste.

Counting the number of extra steps needed to complete a task is a process mapping technique used in [*Lean*](https://en.wikipedia.org/wiki/Lean_government) to identify potential *"motion waste"*. 

**⇨** Flow feature scores of zero indicate ideal single-step processes.  
**+** Added one or steps represents opportunity for improvement.

## 📚Onboarding

| **📚** | **Guide** | &nbsp; **⇨ &nbsp; +** &nbsp; &nbsp; &nbsp; |
| --- | --- | :---: |
| [Before you begin](../dap-airflow/onboarding/begin#ux-criteria)                                  | What must happen before I can begin **DAP⇨flow**?                                              | 4 to 5 |
| [Welcome!](../dap-airflow/onboarding/welcome#ux-criteria)                                        | What are my **Service Terms`[]`**?                                                             | 3 |
| [AWS Console access](../dap-airflow/onboarding/access-the-AWS-Management-Console#ux-criteria)    | How will I access the ***AWS Management Console***?                                            | 2 to 3 |
| [AWS region](../dap-airflow/onboarding/access-the-AWS-region#ux-criteria)                        | How will I ensure I am in the correct **AWS region**?                                          | 2 to 3 |
| [Amazon Athena](../dap-airflow/onboarding/access-my-Amazon-Athena-database#ux-criteria)          | How will I use ***Amazon Athena*** to access my database?                                      | 3 to 4 |
| [My current service data](../dap-airflow/onboarding/access-my-current-service-data#ux-criteria)  | How will I access my `[service]`'s current data from ***Amazon Athena***?                      | 3 |
| [My service data history](../dap-airflow/onboarding/access-my-service-data-history#ux-criteria)  | How will I access my `[service]`'s data history from ***Amazon Athena***?                      | 3 |
| [Query my service data](../dap-airflow/onboarding/query-my-service-data#ux-criteria)             | How will I query and analyze my `[service]`'s data with ***Amazon Athena***?                   | 2 to 5 |
| [Prototype simple transforms](../dap-airflow/onboarding/prototype-simple-transforms#ux-criteria) | How can I use ***Amazon Athena*** to prototype a simple table-join data transformation?        | 7 to 14 |
| [GitHub access](../dap-airflow/onboarding/github-access#ux-criteria)                             | How do I set up my ***GitHub*** access for **DAP⇨flow**?                                       | 5 |
| [GitHub branching](../dap-airflow/onboarding/github-branch#ux-criteria)                          | How do I create `[transform branch]` as my new working branch of **DAP⇨flow**'s repository?    | 6 to 9 |
| [Committing transforms](../dap-airflow/onboarding/github-commit-transform#ux-criteria)           | How do I commit my working `[transform SQL]` to **DAP⇨flow**'s repository?                     | 12 to 20 |
| [GitHub pull requests](../dap-airflow/onboarding/github-pull-request#ux-criteria)                | How do I raise a *"pull request"* to merge my `[transform branch]` into the `main` trunk of the **DAP⇨flow** repository? | 13 to 16 |

## 📚Parking onboarding

Each of these guides will be updated with Park-specific changes. When done, we only need to consider the UX for the guides below that are different to the guides above.

| **📚** | **Guide** | &nbsp; **⇨ &nbsp; +** &nbsp; &nbsp; &nbsp; |
| --- | --- | :---: |
| [Before you begin](../dap-airflow/parking/begin#ux-criteria)                                  | What must happen before I can begin **DAP⇨flow**?                                             | 4 to 5 |
| [Welcome!](../dap-airflow/parking/welcome#ux-criteria)                                        | What are my **Service Terms`[]`**?                                                            | 3 |
| [AWS Console access](../dap-airflow/parking/access-the-AWS-Management-Console#ux-criteria)    | How will I access the ***AWS Management Console***?                                           | 2 to 3 |
| [AWS region](../dap-airflow/parking/access-the-AWS-region#ux-criteria)                        | How will I ensure I am in the correct **AWS region**?                                         | 2 to 3 |
| [Amazon Athena](../dap-airflow/parking/access-my-Amazon-Athena-database#ux-criteria)          | How will I use ***Amazon Athena*** to access my database?                                     | 3 to 4 |
| [My current service data](../dap-airflow/parking/access-my-current-service-data#ux-criteria)  | How will I access my `[service]`'s current data from ***Amazon Athena***?                     | 3 |
| [My service data history](../dap-airflow/parking/access-my-service-data-history#ux-criteria)  | How will I access my `[service]`'s data history from ***Amazon Athena***?                     | 3 |
| [Query my service data](../dap-airflow/parking/query-my-service-data#ux-criteria)             | How will I query and analyze my `[service]`'s data with ***Amazon Athena***?                  | 2 to 5 |
| [Prototype simple transforms](../dap-airflow/parking/prototype-simple-transforms#ux-criteria) | How can I use ***Amazon Athena*** to prototype a simple table-join data transformation?       | 7 to 14 |
| [GitHub access](../dap-airflow/parking/github-access#ux-criteria)                             | How do I set up my ***GitHub*** access for **DAP⇨flow**?                                      | 5 |
| [GitHub branching](../dap-airflow/parking/github-branch#ux-criteria)                          | How do I create `[transform branch]` as my new working branch of **DAP⇨flow**'s repository?   | 6 to 9 |
| [Committing transforms](../dap-airflow/parking/github-commit-transform#ux-criteria)           | How do I commit my working `[transform SQL]` to **DAP⇨flow**'s repository?                    | 12 to 20 |
| [GitHub pull requests](../dap-airflow/parking/github-pull-request#ux-criteria)                | How do I raise a *"pull request"* to merge my `[transform branch]` into the `main` trunk of the **DAP⇨flow** repository? | 13 to 16 |

## 📚Coming soon...
The following guides are due for completion.

### Merging branches 
How do i complete the merge of `[transform branch]` into the main trunk of **DAP⇨flow**'s repository?

### Airflow
How will I access my data transforms using ***Airflow*** on the web?

### Adding tables to the raw-zone
How do i add a new table ingestion to my `[service raw-zone]` database?

<br/>

![Apache Airflow](../dap-airflow/images/worker_tap_valve_800_wht.jpg)  
