workspace "Getting Started" "This is a model of my software system." {
    model {
        liberatorSFTP = softwareSystem "Liberator SFTP" "Contains nightly exports of liberator data"

        enterprise "Hackney Data Platform" {
            parkingAnalyst = person "Analyst" "Parking Analyst"
            athena = softwareSystem "AWS Athena"
            landingZone = softwareSystem "Landing Zone" "Data Platform Landing Zone" {
                landingZoneBucket = container "Bucket" "" "S3"
            }
            refinedZone = softwareSystem "Refined Zone" "Data Platform Refined Zone"

            liberatorImport = softwareSystem "Liberator importer" {
                dbSnapshotToS3 = container "DB Snapshot to Parquet" "Data Platform module for converting an RDS database to Parquet"
                liberatorMysql = container "Transitionary DB" "Database used for ingesting the dump" "RDS MySQL" "Database"
                liberatorZipStore = container "Liberator bucket" "Historical liberator dump storage" "S3 Bucket"
                liberatorSFTPDownloader = container "Liberator Downloader" "AWS Lambda function to download the latest liberator dump" "Lambda/Node.JS"
                flatFileExtractor = container "Liberator extractor" "Extracts the mysql dump, ingests the data into an RDS instance" "Fargate/ECS/Bash"

                liberatorSFTPDownloader -> liberatorSFTP "Downloads export nightly"
                liberatorSFTPDownloader -> liberatorZipStore "Saves to"

                flatFileExtractor -> liberatorZipStore "Downloads zip"
                flatFileExtractor -> liberatorMysql "Imports into MySQL"

                dbSnapshotToS3 -> liberatorMysql "Gets data from"
                dbSnapshotToS3 -> landingZone "Pushes data to"
            }

            glue = softwareSystem "AWS Glue" {
                
            }
        }
    }

    views {
        container liberatorImport "Liberator-Container" "Liberator import" {
            include *
        }

        styles {
            element "Container" {
                shape RoundedBox
            }
            element "Software System" {
                background #1168bd
                color #ffffff
            }
            element "Person" {
                shape person
                background #08427b
                color #ffffff
            }
            element "Database" {
                shape Cylinder
            }
        }

    }

}
