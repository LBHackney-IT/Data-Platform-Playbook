"""Demo ETL: read universal_calendar, aggregate it, and publish a Glue table."""

import logging
import os
from typing import Any

import awswrangler as wr
import boto3
import pandas as pd
from boto3.session import Session

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

ENV: str = "stg"
boto3_session: Session = boto3.Session(
    profile_name="DataPlatformDataAndInsightStg", region_name="eu-west-2"
)

# When you schedule the script via Airflow, please comment out the above two lines and uncomment the below two lines to use the default session and env variable from Airflow, keep anything else unchanged.
# ENV: str = os.environ.get("env", "prod")
# boto3_session: Session = boto3.Session()

SOURCE_DATABASE: str = "unrestricted-raw-zone"
SOURCE_TABLE: str = "universal_calendar"

TARGET_DATABASE: str = "data-and-insight-refined-zone"
TARGET_BUCKET: str = f"dataplatform-{ENV}-refined-zone"
TARGET_TABLE_NAME: str = "test_tian_demo_calendar"
TARGET_S3_PREFIX: str = (
    f"s3://{TARGET_BUCKET}/data-and-insight/testing/demo/{TARGET_TABLE_NAME}/"
)
ATHENA_CACHE_PREFIX: str = (
    f"s3://dataplatform-{ENV}-athena-storage/data-and-insight/{TARGET_TABLE_NAME}/"
)


def get_calendar_aggregate_query() -> str:
    return f"""
    SELECT
      year(CAST(date_iso AS timestamp)) AS calendar_year,
      count(*) AS day_count,
      sum(CASE WHEN bank_holiday_flag THEN 1 ELSE 0 END) AS bank_holiday_count,
      sum(CASE WHEN holiday_flag THEN 1 ELSE 0 END) AS holiday_count
    FROM "{SOURCE_DATABASE}"."{SOURCE_TABLE}"
    WHERE date_iso IS NOT NULL
    GROUP BY 1
    ORDER BY 1
    """


def read_calendar_aggregate() -> pd.DataFrame:
    df = wr.athena.read_sql_query(
        sql=get_calendar_aggregate_query(),
        database=SOURCE_DATABASE,
        ctas_approach=False,
        s3_output=ATHENA_CACHE_PREFIX,
        boto3_session=boto3_session,
    )
    logger.info(f"Read {len(df)} rows from {SOURCE_DATABASE}.{SOURCE_TABLE}")
    return df


def write_calendar_table(df: pd.DataFrame) -> dict[str, Any]:
    wr.s3.delete_objects(path=TARGET_S3_PREFIX, boto3_session=boto3_session)
    result = wr.s3.to_parquet(
        df=df,
        path=TARGET_S3_PREFIX,
        index=False,
        dataset=True,
        mode="overwrite",
        database=TARGET_DATABASE,
        table=TARGET_TABLE_NAME,
        filename_prefix=f"{TARGET_TABLE_NAME}_",
        boto3_session=boto3_session,
    )

    logger.info(f"Wrote {len(df)} rows to {TARGET_S3_PREFIX}")
    logger.info(f"Registered table {TARGET_DATABASE}.{TARGET_TABLE_NAME}")
    logger.info(f"Parquet files: {result['paths']}")

    return result


def main() -> None:
    df = read_calendar_aggregate()
    write_calendar_table(df)


if __name__ == "__main__":
    main()
