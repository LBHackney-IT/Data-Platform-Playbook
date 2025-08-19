---
id: github-commit-transform
title: Committing transforms
description: "Onboarding data analysts and engineers to DAP⇨flow, the Data Analytics Platform Airflow integration."
layout: playbook_js
tags: [onboarding]
---

# How do I commit my `[transform].sql` in **DAP⇨flow**'s `dap-airflow` repository?
![DAP⇨flow](../images/DAPairflowFLOWmigration.png)   

## 🚧 🚧 🚧 🚧 🚧 🚧 🚧 🚧 🚧 

## **⚠️AWAITING COMPLETION⚠️** 

## 🚧 🚧 🚧 🚧 🚧 🚧 🚧 🚧 🚧 

<br> 
</br>  

---
## ***"We* ♡ *your feedback!"***
![DAP⇨flow](../images/DAPairflowFLOWmigration.png)   
:::tip UX  
### 👉 Please use **this link ►** [**DAP⇨flow** `UX` **Feedback / github-commit-transform**](https://docs.google.com/forms/d/e/1FAIpQLSc7nv1XmfRJKZlZTYIJQxAwbimUfsZLXQOVt3TJO-zUOjcRGQ/viewform?usp=pp_url&entry.339550210=github-commit-transform)  

- Your feedback enables us to improve **DAP⇨flow** and our Data Analytics Platform service.  
- We encourage all our users to be generous with their time, in giving us their recollections and honest opinions about our service.  
- We especially encourage our new users to give feedback at the end of every **DAP⇨flow📚Migration onboarding** task because the quality of the onboarding experience really matters.  

    ☝ **Please use this link to help us understand your user experience!**
:::

## 📚`UX` Criteria  
:::info ABILITY  
* Hackney **Google Workspace** user 
* Hackney `[service]` Data Analyst
* ***Amazon Athena*** user  
* ***GitHub*** user  
:::

:::note BEHAVIOR  
### How do I commit my working `[transform SQL]` query to **DAP⇨flow**'s `dap-airflow` repository?
**Measures** the behavior of ***GitHub*** and ***Amazon Athena***.  

**Given** in my web browser, I have logged into my AWS account  
**~and** I accessed ***Amazon Athena***  
**~and** I have selected my `[service workgroup]`  
**~and** I have created and saved my `[transform SQL]` as a working fully functional Athena SQL query  
**~and** I have my `[transform SQL]` kept open in the Athena query editor in a web browser tab  
**~and** in another tab in my web browser, I am logged on to my ***GitHub*** account using my ***Hackney email address*** with two-factor authentication  
**~and** I am granted membership of the **[London Borough of Hackney](https://github.com/LBHackney-IT) organization** on ***GitHub*** incorporating the [`dap-airflow`](https://github.com/LBHackney-IT/dap-airflow) private repository  
**~and** I have accessed the [`dap-airflow`](https://github.com/LBHackney-IT/dap-airflow) repository  
**~and** I previously created my **`[transform branch]`**  

**When** I select my **`[transform branch]`** as my working branch  
**~and** I navigate to `dap-airflow/airflow/dags/[service folder]/[dag folder]/[transforms folder]` where my transform `.sql` files are stored  
**~and** at the top right region of the page, click the "**Add file**" button and select "**Create new file**"  
**~and** in the box following the **`[transforms folder]/`** subfolder, I enter my `[transform].sql`  
**~and** back in the ***Amazon Athena*** web browser tab, I select my entire `[transform SQL]` code in the Athena query editor before *copying* it into the computer’s clipboard   
**~and** back in the ***GitHub*** web browser tab, in the editor window, beneath where it says “**Edit**”, I *paste* my `[transform SQL]` code, from the computer’s clipboard, into my `[transform].sql` file   
 **~and** I scroll to the bottom of the editor window to check and remove any `limit` clause (eg. `limit 100`), leaving just the `;` semi-colon at the very end  
**~and** I click the "**Commit changes**" button to open up a dialogue box  
**~and** I enter a short commit message, Eg. `Add ... [transform].sql`   
**~and** I enter a longer description if I want to  
**~and** I select the option “**Commit directly to my `[transform branch]`**  
**~and** I click the "**Commit changes**" button  

**Then** I should see a message telling me, my `[transform].sql` was successfully *committed* directly to my `[transform branch]`  
**~and** I will be permitted to make further edits to my `[transform].sql` followed by *commits* to my to my `[transform branch]`, as often as I need to, until I raise a *pull request* for my `[transform branch]`.

**Scale** of 12 to 20 **~and** flow features.
:::

[branch]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAAXNSR0IArs4c6QAAAU9JREFUOE+tk79Pg1AQx99bHPwf+k8URxJ2VngdtaTGMEDC4iqv0s2FxA4tjUl1fbzJiXSiOiKhy+s/wayDCWfbCKG/UBNveMPdffK9u3eH0bcRQmTbtl+EEJemaT6U/nrccZxr3/fvGGOvaz9eP+Px2JrNZveyLA+FEFYQBBt/3brdLrRareFyubQAwOacDzdJk8nEjaKIappG4zimo9FoDzZNExRFoZxzumJoGIb9KknX9XOE0CMAuJzz211lTdNuMMZ9hNBFGIZPVdlloq7rgDE+Y4y9HehZAoBkpVgJbpX3LzAhRDDGtsSLonhXVfWz1+udlIE9ZQAIJEm6StO0gtvtNprP5zRJkuc8z6vAHmwYBppOp6d1WUII6nQ6H7tz+HXPu+Cfpt0I//TPR+HFYuF6nte4YUfhLMuswWDQuNuNZa+vqkwor+YQUPd9AUZ2tBDCa9wvAAAAAElFTkSuQmCC>
