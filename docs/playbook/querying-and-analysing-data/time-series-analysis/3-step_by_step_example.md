---
title: 3. Step by Step Guide to Forecasting
description: "Step by Step Guide with examples to follow along with"
layout: playbook_js
tags: [playbook]
---

# Time series documentation - Step by Step

## Introduction

This guide is for people who are very new to the Data Platform and want to do some forecasting. Can be used alone or conjunction with the other bits of documentation

Using Public Data which is stored on the Platform

## Prerequisites

1. Have access to Pre-Production in AWS Glue (PowerUser)
2. Your Data ready in Pandas Dataframe format. For this guide, the sample script has already gotten to this stage

## 1. Set up

First lets set up our test Glue Job. There is already one in the AWS Glue Jobs list for us to copy

```
Time Series Forecasting StepByStep
```

Clone and rename it to Time Series Forecasting StepByStep-[Your Name]

This script will load some public data about Bike Rentals

## Viewing the Data using Print in AWS Glue

Most people will have no idea what this data looks like, so lets print the data and see. The print statements are already there to show some of the data and to show its information. So just Run the script

Once the script runs, look at the Output Logs at the bottom of the run, and select the log

You should be able to see the python print outputs at the bottom, click on these to expand and take a look

In particular, the info is interesting

```
<class 'pandas.core.frame.DataFrame'>
RangeIndex: 4781 entries, 0 to 4780
Data columns (total 8 columns):
 #   Column                   Non-Null Count  Dtype         
---  ------                   --------------  -----         
 0   Day                      4781 non-null   object        
 1   Number of Bicycle Hires  4781 non-null   object        
 2   import_datetime          4781 non-null   datetime64[ns]
 3   import_timestamp         4781 non-null   object        
 4   import_year              4781 non-null   object        
 5   import_month             4781 non-null   object        
 6   import_day               4781 non-null   object        
 7   import_date              4781 non-null   object        
dtypes: datetime64[ns](1), object(7)
```
This shows us all the columns, how many values we have and their types. We have a few issues from here

1. The number of Bicycle Hires is not an int or float, but an object.
2. There are multiple columns
3. The Date is in a seperate column rather than in the Index

## Adding the Helper Functions to our Glue Job

You can import the helper functions by putting this line of code underneath your other imports

```
from scripts.helpers.time_series_helpers import "Your Function"
```
For what we want to do in this script, lets use these functions

- reshape_time_series_data: Most Time series functions use a 1 dimensional dataframe with the Date in the Index
- forecast_ets: The exponential smoothing ETS method. Requires a start and end date
- get_start_end_date: This will give us the start and end date needed

<details>
  <summary>Completed Import code Spoiler</summary>
  from scripts.helpers.time_series_helpers import reshape_time_series_data, forecast_ets, get_start_end_date
</details>

Next, we want to add the libraries needed into our Glue environment

Follow this guide on how to do so: [Link](https://github.com/LBHackney-IT/Data-Platform-Playbook/blob/f8682cb6ff53af1049dc40a9c67dd51aedc5ac6e/docs/playbook/querying-and-analysing-data/time-series-analysis/1-introduction.md#glue-job-prequisites)

Now save and run the Glue Script again. There should be no errors, and now you have some functions to use

## Reshaping the Data for Forecasting

So lets reshape the data so that its in the right shape

You probably noticed that there is this line in the code at the moment
```
bike_data['Number of Bicycle Hires'] = bike_data['Number of Bicycle Hires'].apply(clean_int)
```
Since this guide is not about cleaning data, we have applied this cleaning step for you

First let's get this data into the desired shape for Time Series Analysis which means having just one metric and the date in the index

``` reshape_time_series_data ``` is the helper to use here, its arguements are
- The Dataframe
- The name of the Date Column so it can move the date into the index. In this case its ```"Day"```
- The list of columns to include, so for this case its ``` ["Number of Bicycle Hires"] ```
- Format of the Date, for this dataset its american and is not MM/DD/YYYY so its ``` "%m/%d/%y"```

<details>
  <summary>Completed Reshape code Spoiler</summary>
  reshaped_data = reshape_time_series_data(bike_data,"Day",["Number of Bicycle Hires"], "%m/%d/%y")
</details>

We then need the start date and end date. ``` get_start_end_date ``` is what we want to use for this.

- The reshaped dataframe
- The period of your time data in the index. For this its ```"D"``` for days
- How many multiples of that period do you want, so for months you can put 6 for 6 months of data.

<details>
  <summary>Completed Start End Date code Spoiler</summary>
  start_date, end_date = get_start_end_date(reshaped_data,"D",180)

  To get 180 days of data
</details>

## Putting the reshaped data into a Function

Now lets use the ```forecast_ets``` function to get our forecast

- The dataset as a SERIES. This is important because the reshape function calls the single variable Y. So if your dataframe is called ```reshaped_dataset``` you will need to put ```reshaped_dataset.y```
- Start date
- End Date

<details>
  <summary>Completed Start End Date code Spoiler</summary>
  forecast = forecast_ets(reshaped_data.y,start_date,end_date)
</details>

This will return a dataframe with our forecast mean results.

## Using other functions instead

For other functions simply follow the documentation for their respective helper instead of using the forecast_ets helpers

and thats all we need. Just a few lines of code to copy and you get some forecasting. Now you need to figure out what you want to do with this forecast, but that won't be covered here