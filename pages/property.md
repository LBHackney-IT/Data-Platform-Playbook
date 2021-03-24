# Property

| Entity name | Entity Description           | Column              | Data type   | References | Source | Nullable | Sensitive | Primary Key | Description                      |
|-------------|------------------------------|---------------------|-------------|------------|--------|----------|-----------|-------------|----------------------------------|
| Property    |  land and buildings in Hackney | property_id         | int         |            | Auto   | false    |           | true        | Primary key of table             |
|             |                              | address_first_line  | varchar(50) | property   |        | false    | true      |             | Property first line address      |
|             |                              | address_second_line | varchar(50) | property   |        | true     | true      |             | Property second line address     |
|             |                              | address_third_line  | varchar(50) | property   |        | true     | true      |             | Property third line address      |
|             |                              | postcode            | varchar(50) | property   |        | false    |           |             | Property address postcode        |
|             |                              | uprn                | int         | property   |        | false    |           |             | Unique property reference number |
