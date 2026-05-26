"""
Demo ingest: read Police API street-level crime data and save raw JSON.
Doc: https://data.police.uk/docs/
"""

import json
import logging
import os
from typing import Any

import boto3
import requests
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

API_URL: str = "https://data.police.uk/api/crimes-street/all-crime"
API_PARAMS: dict[str, str] = {
    "date": "2024-01",
    "lat": "51.54532",
    "lng": "-0.057953",
}  # Hackney Service center, E8 1DY

RAW_BUCKET: str = f"dataplatform-{ENV}-raw-zone"
RAW_KEY: str = (
    "data-and-insight/testing/demo/police_api_crime_street/"
    "crimes-street-all-crime-hackney.json"
)


def read_crime_street_api() -> list[dict[str, Any]]:
    """Read street-level crime records from the Police API."""
    response = requests.get(API_URL, params=API_PARAMS, timeout=30)
    response.raise_for_status()

    data = response.json()
    if not isinstance(data, list):
        raise TypeError("Expected the Police API to return a JSON list")

    logger.info(f"Read {len(data)} records from {response.url}")
    return data


def write_raw_json(data: list[dict[str, Any]]) -> None:
    """Write the API response as one raw JSON file in S3."""
    s3_client = boto3_session.client("s3")
    body = json.dumps(data, indent=2, ensure_ascii=False)

    s3_client.put_object(
        Bucket=RAW_BUCKET,
        Key=RAW_KEY,
        Body=body.encode("utf-8"),
        ContentType="application/json",
    )

    logger.info(f"Wrote raw JSON to s3://{RAW_BUCKET}/{RAW_KEY}")


def main() -> None:
    """Run the raw API ingest."""
    data = read_crime_street_api()
    write_raw_json(data)


if __name__ == "__main__":
    main()
