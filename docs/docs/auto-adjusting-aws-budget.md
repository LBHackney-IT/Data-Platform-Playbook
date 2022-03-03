---
title: Auto-adjusting AWS Budget Alerts
description: "Overview of the Auto-adjusting Budget Alerts"
layout: playbook_js
tags: [playbook] 
---

![AWS Budget Alert](./images/auto-adjusting-aws-budget.png)

AWS Budgets are a part of AWS Billing. Budgets are configured to send alert emails when we exceed specified amounts or when we’re forecast to exceed them. Currently we have two active budgets for all expenditures, one for actual expenditure and the other for forecast expenditure.

Budgets can be focussed down to individual AWS Services, but this is not currently set up in the module.

On the first of each month the `set_budget_limit_amount_lambda` runs. This lambda accesses the AWS Cost Explorer Client via Boto3. It then calculates the average expenditure over the past three months and sets that amount as the new threshold limit for both the actual and forecast Budgets. This ensures that the budget thresholds remains relevant. 