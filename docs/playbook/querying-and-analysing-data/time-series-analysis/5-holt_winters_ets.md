---
title: Holt Winters ETS
description: "Forecast using Holt Winters ETS"
layout: playbook_js
tags: [playbook]
---

# Holt Winters ETS

The Holt winters function in the helpers will deliver a generic commonly used forecast. For people who don't really want to tinker with the Holt Winters function

```
from scripts.helpers.time_series_helpers import forecast_holt_winters_ets
```

```
def holt_winters (
  dataframe: pd.DataFrame,
  forecast_count: int,
  seasonal_period: str ="none",
  trend: str ="add",
  use_boxcox: bool = False,
  initialization_method: str ="estimated"):

Returns:
  Forecast Results (Dataframe)
```
Required Arguments:

  - Dataframe (Dataframe): Dataframe containing training timeseries dataset. Must be equally spaced with Date in the Index
  - forecast_count (int): Amount of data points to forecast
  - seasonal_period (String): Period for the data. "M" /  "W" / "Q" this will fill in the parameters for the model based on very commonly used values, not including days. Use "none" if the data is not seasonal

Optional:
  - trend (String): The trend component model. “add” (default), “mul”, or None.
  - use_boxcox (bool): Should the Box-Cox transform be applied to the data first? If ‘log’ then apply the log. If float then use the value as lambda. Defaults to False
  - initialization_method (String): Method for initialize the recursions. One of:None,‘estimated’ (Default),‘heuristic’,‘legacy-heuristic’,‘known’

For example, if you have monthly data, it is quite common to want to check for yearly seasonality, simply doing the following will give you a forecast

```
forecast = forecast_holt_winters_ets(df,12,"M")
```

This gives you the next 12 months, with yearly seasonality taken into account, where we use 12 as the cycle