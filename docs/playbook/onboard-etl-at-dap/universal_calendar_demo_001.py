"""Demo ETL: read universal_calendar, aggregate it, and publish a Glue table."""

import logging

import awswrangler as wr
import boto3

PROFILE = "DataPlatformDataAndInsightStg"
REGION = "eu-west-2"

SOURCE_DATABASE = "unrestricted-raw-zone"
SOURCE_TABLE = "universal_calendar"

TARGET_DATABASE = "data-and-insight-refined-zone"
TARGET_BUCKET = "dataplatform-stg-refined-zone"
TABLE_NAME = "test_steve_demo_calendar"
ATHENA_OUTPUT_PREFIX = (
    f"s3://dataplatform-stg-athena-storage/data-and-insight/{TABLE_NAME}/"
)

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)


def create_session():
    return boto3.Session(profile_name=PROFILE, region_name=REGION)


def get_calendar_aggregate_query():
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


def read_calendar_aggregate(session, athena_output_prefix):
    return wr.athena.read_sql_query(
        sql=get_calendar_aggregate_query(),
        database=SOURCE_DATABASE,
        ctas_approach=False,
        s3_output=athena_output_prefix,
        boto3_session=session,
    )


def write_calendar_table(df, session, target_prefix):
    wr.s3.delete_objects(path=target_prefix, boto3_session=session)
    return wr.s3.to_parquet(
        df=df,
        path=target_prefix,
        index=False,
        dataset=True,
        mode="overwrite",
        database=TARGET_DATABASE,
        table=TABLE_NAME,
        filename_prefix=f"{TABLE_NAME}_",
        boto3_session=session,
    )


def main():
    session = create_session()
    target_prefix = f"s3://{TARGET_BUCKET}/data-and-insight/testing/demo/{TABLE_NAME}/"
    df = read_calendar_aggregate(session, ATHENA_OUTPUT_PREFIX)
    result = write_calendar_table(df, session, target_prefix)

    logger.info("Wrote %s rows to %s", len(df), target_prefix)
    logger.info("Registered table %s.%s", TARGET_DATABASE, TABLE_NAME)
    logger.info("Parquet files: %s", result["paths"])


if __name__ == "__main__":
    main()
