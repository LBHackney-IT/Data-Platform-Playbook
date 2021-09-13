---
title: Guide to testing on the Data Platform
description: "A beginners guide to testing on the data platform"
layout: playbook_js
tags: playbook
---

## Context

Historically, unit testing practices have helped:
- Improve the speed at which PySpark scripts can be developed
- Provide documentation for each script with example data they 
  expect, and what results they output 
- Increase the proportion of defects found before they reach staging environment
- Help those who come to maintain your script make their change without being scared 
  of breaking existing functionality

The most valuable code to test is the code which is subject to change, 
and has some complicated behaviour. We recommend that when writing PySpark 
code which isn’t exceedingly simple that you write some tests alongside that production code.

HackIT have produced [a video describing unit testing principles for C#][unit_testing_principles] 
which are transferable to Spark scripts.

## Organising your code so it can be tested

Writing tests around your spark scripts require them to be written in a way which makes them easy to test.

Using [address cleaning][address_cleaning] as an example script, we have
extracted all DataFrame manipulation code into a method, and then tested
the behaviours of that [with tests][tests_example].

The "main" part of the ETL job which will run within the AWS Glue environment
is then [wrapped in a conditional][main_script_example] which prevents
that code from being run within the testing environment. All code, except import statements, that isn't in a method should be included in this conditional.

## Writing your own tests

- Ensure that you run the tests and that they are all passing before writing your own tests. 
See [README.md][readme] for instructions on how to do this
- The tests are stored in the scripts folder of the project alongside the glue scripts themselves. 
Start by creating your own glue job script as usual, `script_name.py`, and also a test file `test_script_name.py`.  
Test files should be named with "test" at the beginning of the file. For example, `test_cleaning_script.py`.
  - You will need to organise your script according to the [Organising your code so it can be tested](#organising-your-code-so-it-can-be-tested) above
- Define a function within `script_name.py`, which takes in the input DataFrame(s), and returns the DataFrame to be written.
- Within your `test_script_name.py` start creating tests. 
  You can use the [test_spark_example][test_spark_example] as a template and [address cleaning][address_cleaning] as an example of a fully tested script. 
  Test method names should start with a "test" in their name, otherwise the tests won’t be run. 
  Ensure the name clearly describes what is being tested. 
  For example, if you are testing the behaviour of adding a unique id column, then a suitable name may be along the lines of `test_creates_unique_id_column`.
- There are some helper functions in `unit_testing_helpers.py` which you can use in your tests. 
  If you do decide to use these functions, ensure you import them at the top of your test file.
- If your script is using a logger, you will need to pass it into your testable method. 
  See the `clean_addresses` function in the `test_address_cleaning.py` for an example of how you can do this. 

We use the following things to help write and run tests against pyspark scripts.

- The testing framework that we use for the glue scripts is called [Pytest][pytest].
- [Unittest][unittest], is a testing framework like pytest, that has some helpful features that we use in some of the tests.
- Docker is used to run the tests locally. 
  We use a [docker image provided by amazon][aws_docker_docs] that helps us replicate the environment that our glue jobs are run in. 
  It also has pyspark and pytest installed to allow us to easily run the tests. You will need [docker installed][docker] to run tests locally.

## CI/CD Pipeline

The tests will run each time a commit is made to a branch including when branches are merged into main.
The build will not run/deploy if there are failing tests. 
This is to prevent breaking changes from being deployed to the Data Platform staging environment.

This has been configured in the [Github workflows configuration file][github_workflows_configuration]

[address_cleaning]: https://github.com/LBHackney-IT/Data-Platform/blob/2e4a89e280c326576a976b4f28c9b7faaa691ea4/scripts/address_cleaning.py#L16-L99
[test_spark_example]: https://github.com/LBHackney-IT/Data-Platform/blob/main/scripts/test_spark_example.py
[tests_example]: https://github.com/LBHackney-IT/Data-Platform/blob/2e4a89e280c326576a976b4f28c9b7faaa691ea4/scripts/test_address_cleaning.py#L7-L15
[main_script_example]: https://github.com/LBHackney-IT/Data-Platform/blob/2e4a89e280c326576a976b4f28c9b7faaa691ea4/scripts/address_cleaning.py#L103-L140
[unittest]: https://docs.python.org/3/library/unittest.html
[aws_docker_docs]: https://aws.amazon.com/blogs/big-data/developing-aws-glue-etl-jobs-locally-using-a-container/
[pytest]: https://docs.pytest.org/en/6.2.x/contents.html
[readme]: https://github.com/LBHackney-IT/Data-Platform/blob/main/scripts/README.md
[docker]: https://docs.docker.com/get-docker/
[unit_testing_principles]: https://www.youtube.com/embed/M-_F_Tr6paQ
[github_workflows_configuration]: https://github.com/LBHackney-IT/Data-Platform/blob/main/.github/workflows/data_platform_stg.yml
