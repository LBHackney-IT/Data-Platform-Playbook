---
title: 1. Introduction to Time Series Helpers
description: "Introduction to Time Series Helpers"
layout: playbook_js
tags: [playbook]
---

# Introduction to Time Series Helpers

### What is a Time Series Forecast

A time series is a sequence of data points indexed in time order. It is most commonly a sequence of discrete-time data taken at successive equally spaced points in time.

A Time series forecast is when you use a predictive model to predict future events. It’s based on the idea that patterns and trends in data can be identified over time, and these patterns can be used to forecast future data points.

### What are Time Series helpers and what are we aiming to achieve

The Time Series Helpers are some functions you can import into your Glue Script so that very common, repetitive tasks can be done in a faster and automated way

Examples of functions we have at the moment are

- Dataframe reshaping
- Train Test splitting by record count
- Start End Date finder
- Various Time Series Forecasting functions with values filled in

### When you should and shouldn't be using these helpers

You should use these helpers if

- You just want some simple forecasting with minimal knowledge of time series forecasting nuances
- You only want the mean forecast results

You should NOT use these helpers if
- You want FULL control of the model
- You have a different seasonality period to the defaults set out here

### Forecasting best practises

Here are some general tips and best practises for forecasting

- Have as much Data as possible, and at minimum, at least 2 years of Data
- Don't forecast too far ahead. The further you forecast, the less likely it will be correct. You don't really want to be predicting 2 years ahead with 2 years of Data.

### What is seasonality

Seasonality in a time series refers to periodic fluctuations in the data that occur at regular intervals. These intervals could be hourly, daily, weekly, monthly, quarterly, yearly, or at any other fixed period.

For our helper functions, we have these seasonality settings automatically dialed in

- Months - 12
- Weeks - 52
- Quarters - 4

These are very common values for seasonality cycles, which will require at least 2 years of Data