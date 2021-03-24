# Person

| Entity name | Entity Description                                                  | Column              | Data type   | References | Source | Nullable | Sensitive | Primary Key | Description                      |
|-------------|---------------------------------------------------------------------|---------------------|-------------|------------|--------|----------|-----------|-------------|----------------------------------|
| Person      | Someone belonging to a household or living in a property in Hackney | property_id         | int         |            | Auto   | false    |           | true        | Primary key of table             |
|             |                                                                     | first_name          | varchar(50) |            |        | false    | true      |             | Person first name                |
|             |                                                                     | last_name           | varchar(50) |            |        | false    | true      |             | Person last name                 |
|             |                                                                     | address_first_line  | varchar(50) | property   |        | false    | true      |             | Person first line address        |
|             |                                                                     | address_second_line | varchar(50) | property   |        | true     | true      |             | Person second line address       |
|             |                                                                     | address_third_line  | varchar(50) | property   |        | true     | true      |             | Person third line address        |
|             |                                                                     | postcode            | varchar(50) | property   |        | false    |           |             | Person address postcode          |
|             |                                                                     | uprn                | int         | property   |        | false    |           |             | Unique property reference number |
|             |                                                                     | dob                 | datetime    |            |        | false    |           |             | Person date of birth             |