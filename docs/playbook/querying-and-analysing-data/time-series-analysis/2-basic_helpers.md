---
title: 2. Basic Time Series helpers
description: "Generally useful Time Series Helpers"
layout: playbook_js
tags: [playbook]
---

# Basic Time Series helpers

These are the helpers which are going to be useful regardless of the model you want to use

### Data Reshaping

For simple Time Series forecasting, you generally want a dataframe or series with just the metric and  the date in the index, evenly spaced apart

For example, The count of records (Metric) in each month (Date)

We have a helper function which can help you transform your data into this format

```
from scripts.helpers.time_series_helpers import reshape_time_series_data
```
```
def reshape_time_series_data(
  pdf: ps.DataFrame,
  date_col: str,
  var_cols: list,
  dateformat: str
)

returns ps.DataFrame
```
- pdf: Your Dataframe
- date_col: The name of the date column, this will be converted into the index
- var_cols: The name of the metrics you want to use, in a list. A lot of the time you only want a single metric
- dateformat: Format of your date. For example YYYY/MM/DD would be %Y/%m%d

### Usage Example

Lets say you have a dataframe, with various metric columns but you wanted to just keep one of them, in particular the one called total_call_time

```
reshaped_df = reshape_time_series_data(pdf,"date",["total_call_time"], "%Y/%M/%d")

```

### Finding Start and End Date

Some forecast functions will need a start and end date. If you need to quickly find these out from your data and the amount of prediction points, we have a function for that

```
from scripts.helpers.time_series_helpers import reshape_time_series_data
```
```
def get_start_end_date(
  dataframe: pd.DataFrame,
  period: str,
  forecast_count: int
)

returns start_date date,end_date date
```

So an example of calling this would be
```
start_date, end_date = get_start_end_date(df,"M",12)
```
If the final date in the index of DF is "01/12/2022"

start_date = "01/01/2023"

end_date = "01/12/2023"

### Making Train Test subsets by count

When evaluating models, we use something called Train Test as a testing methodology

### Why would we want to do this?

This function will split your data into 2 parts for this purpose
```
from scripts.helpers.time_series_helpers import get_train_test_subsets
```

```
def get_train_test_subsets(
  time_series: ps.DataFrame,
  periods: int):

Returns:
  Train(DataFrame),Test(DataFrame)

```

### Usage Example

```
train, test = get_train_test_subsets(pdf,6)
```
If pdf is of length 10, train will be of length 4 and test will be of length 6
If pdf is of length 100, train will be of length 94 and test will be of length 6
