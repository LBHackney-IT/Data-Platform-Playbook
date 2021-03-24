# Resident

| Entity name | Entity Description           | Column              | Data type   | References | Source | Nullable | Sensitive | Primary Key | Description                      |
|-------------|------------------------------|---------------------|-------------|------------|--------|----------|-----------|-------------|----------------------------------|
| Resident    | Someone who lives in Hackney | resident_id         | int         |            | Auto   | false    |           | true        | Primary key of table             |
|             |                              | first_name          | varchar(50) | person     |        | false    | true      |             | Resident first name              |
|             |                              | last_name           | varchar(50) | person     |        | false    | true      |             | Resident last name               |
|             |                              | address_first_line  | varchar(50) | property   |        | false    | true      |             | Resident first line address      |
|             |                              | address_second_line | varchar(50) | property   |        | true     | true      |             | Resident second line address     |
|             |                              | address_third_line  | varchar(50) | property   |        | true     | true      |             | Resident third line address      |
|             |                              | postcode            | varchar(50) | property   |        | false    |           |             | Resident address postcode        |
|             |                              | uprn                | int         | property   |        | false    |           |             | Unique property reference number |
|             |                              | dob                 | datetime    | person     |        | false    |           |             | Resident date of birth           |