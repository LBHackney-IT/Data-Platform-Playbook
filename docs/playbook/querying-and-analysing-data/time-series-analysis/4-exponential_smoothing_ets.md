---
title: Exponential Smoothing ETS
description: "Forecast using Exponential Smoothing"
layout: playbook_js
tags: [playbook]
---

# Exponential Smoothing ETS

Creates a generic ETS forecast with some seasonal values already filled in.

https://www.statsmodels.org/dev/generated/statsmodels.tsa.exponential_smoothing.ets.ETSModel.html


```
from scripts.helpers.time_series_helpers import forecast_ets
```

```
def forecast_ets(
  dataframe: pd.DataFrame,
  start_date: str,
  end_date: str,
  seasonal_period: str = "none",
  error: str = "add",
  trend: str = "add",
  damped_trend: bool = False):
   
  Returns:
    Forecast Results (Dataframe)
```

Required Arguements:
  - Dataframe (dataframe): Dataframe containing training timeseries dataset.
  - start_date (string): Start date of the Forecast,
  - end_date (string): End date of the Forecast
  - seasonal_period (String) Optional: Period for the data. "M" /  "W" / "Q" this will fill in the parameters for the model based on very commonly used values, not including days. Default is "none", use "none" if the data is not seasonal
  
Optional Arguements:
  - error (String): The error model. “add” (default) or “mul”.
  - trend (String): The trend component model. “add” (default), “mul”, or None.
  - damped_trend (Bool): Whether an included trend component is damped. Default is False.

For example, if you have monthly data, it is quite common to want to check for yearly seasonality, simply doing the following will give you a forecast

```
forecast = forecast_ets(df,start_date,end_date,"M")
```
ETS Forecast using seasonality set to 12 for months in a year