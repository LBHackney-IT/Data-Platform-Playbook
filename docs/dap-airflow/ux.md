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
The **📚** ***links*** in the table below will take you directly to the **📚`UX` criteria** within each of  **DAP⇨flow📚Onboarding** guides.

#### Using behavioral language (BDD) to map the process *flow* and define the `UX` *criteria*: 

**a)** The `UX` *criteria* on the one hand, **defines the success of a task completed by the user**, when using the integrated software interface. Failure might be caused by a change or a fault in the software, the software interface, or software integration, or where the underlying configuration or data might cause a task to exceed its operational parameters.  

**b)** The `UX` *criteria* on the other hand, **measures the flow and potential motion waste**. The latter being derived from *added or embedded process features* (aka *flow-motions*), which are the extra things that a user must do to allow *the core process* (aka the (*flow-movement*), to be completed and remain value-aligned. This practice aligns with the **Lean principle** of "creating an uninterrupted workflow".  

**c)** *What* are we measuring the **success** and **flow-motion** *of?* In reality we are not just measuring one thing. A single process may require users to interact with one or more software (usually web-based), other people (teams and mangers), and configuration information (often updated). How is it integrated (coupled or de-coupled)? Where does agency come from? What about operating window? Etc.

Because we often cannot control how software works, we accept it's BDD process description might not be succinct or economically stated. However, we must still be on the lookout for high-scoring inefficiency. 

Unlike software automation which can execute a task in a single movement, the *software interface*'s role is to assist a user in prosecuting a task. *Software interfaces* often need users to perform unwanted motions, such as added clicks and observations, or lookup information, eg. operating parameters or instructions. 

This easily contributes to high cognitive load and a poor experience for users (`UX`). Opportunities to improve `UX` are also opportunities to cut motion-waste, and vice versa. 

When our own software is involved, we try to improve the software, but when relying upon off-the-self vendor solutions, we look for ways to improve their integration. And when it becomes necessary to exchange a vendor software, or integration, with another we should endeavor to compare their respective flow-motion characteristics. 

#### How the **flow-motion** (**⇨ +**) is measured below:

Each guide represents the prosecution of a single goal by a user. Each guide can therefore be considered in isolation. Each is a single process movement with various motions added, as are only necessary, to complete the process. Measuring this, is a technique of [*Lean*](https://en.wikipedia.org/wiki/Lean_government) for identifying potential *"motion waste"*. 

- **⇨** A flow feature score of *zero* indicates the ideal single-movement processes.  

- **+** Added motions represent opportunities for process optimization and improvement of the user experience (`UX`).

The **flow-motion** (**⇨ +**) is range-measured. When given as range:
- The high score represents the guided task prosecuted in isolation, as happens when a significant time interval occurs between a user finishing one task and beginning the next. Such as might be caused by excessive WIP, multitasking or some other resource constraint. That is because the "Givens" need to be re-established before the task can actually begin.  
- The low score represents the guided task being prosecuted immediately after the preceding task being successfully completed, whereupon the "Givens" are already conjured, so that the task can begin immediately with no additional motion-waste overhead at the start.

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
| [Prototype legacy transforms](../dap-airflow/onboarding/prototype-legacy-transforms#ux-criteria) | How can I use ***Amazon Athena*** to prototype a legacy transformation?                        | 4 to 8 |
| [GitHub access](../dap-airflow/onboarding/github-access#ux-criteria)                             | How do I set up my ***GitHub*** access for **DAP⇨flow**?                                       | 5 |
| [GitHub branching](../dap-airflow/onboarding/github-branch#ux-criteria)                          | How do I create `[transform branch]` as my new working branch of **DAP⇨flow**'s repository?    | 6 to 9 |
| [Committing transforms](../dap-airflow/onboarding/github-commit-transform#ux-criteria)           | How do I commit my working `[transform SQL]` to **DAP⇨flow**'s repository?                     | 12 to 20 |
| [GitHub pull requests](../dap-airflow/onboarding/github-pull-request#ux-criteria)                | How do I raise a *"pull request"* to merge my `[transform branch]` into the `main` trunk of the **DAP⇨flow** repository? | 13 to 16 |

## 📚Migration onboarding

The following guides were updated in parallel to those above, intended for existing **Glue ETL** users who migrated to **DAP⇨flow** with their existing database features left intact.  

:::info 🚧 MIGRATION ONBOARDING
When these guides are finally and fully completed, we should only need to consider the `UX` for the guides that are meant to be different to the guides above. We want to eliminate duplication, so, where guides are substantially the same they will be merged, and both the side-menus will point to the current official version.
:::

| ![DAP⇨flow](../dap-airflow/images/migration-small.png) | **Guide** | &nbsp; **⇨ &nbsp; +** &nbsp; &nbsp; &nbsp; |
| --- | --- | :---: |
| [Before you begin](../dap-airflow/parking/begin#ux-criteria)                                  | What must happen before I can begin **DAP⇨flow**?                                            | 4 to 5 |
| [Welcome!](../dap-airflow/parking/welcome#ux-criteria)                                        | What are my **Service Terms`[]`**?                                                            | 3 |
| [AWS Console access](../dap-airflow/parking/access-the-AWS-Management-Console#ux-criteria)    | How will I access the ***AWS Management Console***?                                           | 2 to 3 |
| [AWS region](../dap-airflow/parking/access-the-AWS-region#ux-criteria)                        | How will I ensure I am in the correct **AWS region**?                                         | 2 to 3 |
| [Amazon Athena](../dap-airflow/parking/access-my-Amazon-Athena-database#ux-criteria)          | How will I use ***Amazon Athena*** to access my database?                                     | 3 to 4 |
| [My service data history](../dap-airflow/parking/access-my-service-data-history#ux-criteria)  | How will I access my `[service]`'s data history from ***Amazon Athena***?                     | 3 |
| [My current service data](../dap-airflow/parking/access-my-current-service-data#ux-criteria)  | How will I access my `[service]`'s current data from ***Amazon Athena***?                     | 3 |
| [Query my service data](../dap-airflow/parking/query-my-service-data#ux-criteria)             | How will I query and analyze my `[service]`'s data with ***Amazon Athena***?                  | 2 to 5 |
| [Prototype simple transforms](../dap-airflow/parking/prototype-simple-transforms#ux-criteria) | How can I use ***Amazon Athena*** to prototype a simple table-join data transformation?       | 4 to 9 |
| [Migrating transforms](../parking/migrating-transforms)                                       | How was my ***Amazon Glue*** *ETL job's Spark SQL query* migrated to **DAP⇨flow**?         🚧| 🚧 |
| [GitHub access](../dap-airflow/parking/github-access#ux-criteria)                             | How do I set up my ***GitHub*** access for **DAP⇨flow**?                                      | 5 |
| [GitHub branching](../dap-airflow/parking/github-branch#ux-criteria)                          | How do I create `[transform branch]` as my new working branch of **DAP⇨flow**'s repository?   | 4 to 6 |
| [Committing transforms](../dap-airflow/parking/github-commit-transform#ux-criteria)           | How do I commit my working `[transform SQL]` to **DAP⇨flow**'s repository?                 🚧| 12 to 20 |
| [Orchestrating transforms](../dap-airflow/parking/github-orchestrate-transform#ux-criteria)   | How do I orchestrate my `[transform].sql` in the **DAP⇨flow** repository?                  🚧| 🚧 |
| [GitHub pull requests](../dap-airflow/parking/github-pull-request#ux-criteria)                | How do I raise a *"pull request"* to merge my `[transform branch]` into the `main` trunk of the **DAP⇨flow** repository? | 13 to 16 |

Measuring **flow-motion** (**⇨ +**), usefully highlights the tasks presenting users with the most difficult experience (`UX`). The BDD formatting of tasks presents us with a more concise or compact behavior-based comparison, than would counting numbered steps in a guide, or accounting every click, entry, observation or lookup. 

However, it is only when this information is coupled with the actual feedback given by users, as they follow these guides, that we can obtain the accurate picture of how well each task performs, and how good is our *flow*. 

#### ***"We* ♡ *your feedback!"***
Your continuous feedback enables us to improve **DAP⇨flow** and our ***Data Analytics Platform*** service. Survey links are provided at the end of each onboarding guide.

<br/>

![Apache Airflow](../dap-airflow/images/worker_tap_valve_800_wht.jpg)  
