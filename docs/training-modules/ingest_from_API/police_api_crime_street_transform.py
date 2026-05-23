"""Demo transform: convert raw Police API JSON into a partitioned Glue table."""

import json
import logging
import os
from datetime import date
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

# When you schedule the script via Airflow, please comment out the above two
# lines and uncomment the below two lines to use the default session and env
# variable from Airflow. Keep anything else unchanged.
# ENV: str = os.environ.get("env", "prod")
# boto3_session: Session = boto3.Session()

RAW_BUCKET: str = f"dataplatform-{ENV}-raw-zone"
RAW_KEY: str = (
    "data-and-insight/testing/demo/police_api_crime_street/"
    "crimes-street-all-crime-hackney.json"
)

TARGET_DATABASE: str = "data-and-insight-refined-zone"
TARGET_BUCKET: str = f"dataplatform-{ENV}-refined-zone"
TARGET_TABLE_NAME: str = "test_tian_demo_police_crime_street"
TARGET_S3_PREFIX: str = (
    f"s3://{TARGET_BUCKET}/data-and-insight/testing/demo/{TARGET_TABLE_NAME}/"
)
PARTITION_COLUMNS: list[str] = [
    "import_year",
    "import_month",
    "import_day",
    "import_date",
]


def read_raw_json() -> list[dict[str, Any]]:
    s3_client = boto3_session.client("s3")
    response = s3_client.get_object(Bucket=RAW_BUCKET, Key=RAW_KEY)
    data = json.loads(response["Body"].read())

    if not isinstance(data, list):
        raise TypeError("Expected the raw S3 object to contain a JSON list")

    logger.info("Read %s raw records from s3://%s/%s", len(data), RAW_BUCKET, RAW_KEY)
    return data


def build_dataframe(data: list[dict[str, Any]]) -> pd.DataFrame:
    if not data:
        raise ValueError("Raw Police API file contains no records")

    df = pd.json_normalize(data, sep="_")

    today = date.today()
    df["import_year"] = today.year
    df["import_month"] = today.month
    df["import_day"] = today.day
    df["import_date"] = today.isoformat()

    logger.info("Built dataframe with %s rows and %s columns", len(df), len(df.columns))
    return df


def write_refined_table(df: pd.DataFrame) -> dict[str, Any]:
    wr.s3.delete_objects(path=TARGET_S3_PREFIX, boto3_session=boto3_session)
    result = wr.s3.to_parquet(
        df=df,
        path=TARGET_S3_PREFIX,
        index=False,
        dataset=True,
        mode="overwrite",
        database=TARGET_DATABASE,
        table=TARGET_TABLE_NAME,
        partition_cols=PARTITION_COLUMNS,
        filename_prefix=f"{TARGET_TABLE_NAME}_",
        boto3_session=boto3_session,
    )

    logger.info("Wrote %s rows to %s", len(df), TARGET_S3_PREFIX)
    logger.info("Registered table %s.%s", TARGET_DATABASE, TARGET_TABLE_NAME)
    logger.info("Partition columns: %s", PARTITION_COLUMNS)
    logger.info("Parquet files: %s", result["paths"])

    return result


def main() -> None:
    data = read_raw_json()
    df = build_dataframe(data)
    write_refined_table(df)


if __name__ == "__main__":
    main()
