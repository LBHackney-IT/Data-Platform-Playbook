---
title: Optimizing Glue jobs
description: "Elements for optimizing glue jobs"
layout: playbook_js
tags: [playbook]
---

This article proposes a few principles to follow so that Glue jobs don’t run unnecessarily slowly.

# Making sure the job processes the minimum amount of data
Most of the time, we only are interested in the latest partition of the source data. 
When working from the *Trusted zone*, most of the time, only the latest data is available so there is nothing to do. But when working from the refined or the raw zone, historical partitions exist that we need to discard. This section describes several ways to do this.

As shown on the picture below, the typical job first loads some data from S3 using `Execution_context.get_dataframe` or `glueContext.create_dynamic_frame.from_catalog`, and then filters it down to only keep the latest records using `df.get_latest_partition` or
`df.get_latest_partition_optimized`.

![Typical steps when loading and processing data from S3](../../images/loading-processing-steps.png)
