---
id: unit-testing-guide
title: Guide to unit testing on the Data Platform
description: "A beginners guide to testing on the data platform"
layout: playbook_js
tags: [playbook]
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
The “main” part is also the part where AWS connections should happen. Make sure that your testable methods, outside the “main” part, don’t require AWS connections, or you won’t be able to test them locally.

## Writing your own tests

- Before starting, pull the latest Data Platform code from GitHub. You need to have [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) working and ready in your IDE. In VSCode, you may need to use the bash command line for git commands to be recognised. 
- Ensure that you run the tests and that they are all passing before writing your own tests. 
See [README.md][readme] for instructions on how to do this.
- Create and check out a new branch to develop your tests. For example, if you are testing the individual cleaning scripts for Housing repairs Google sheets, you could use: 	`git checkout -b testing_housing_repairs_cleaning_scripts`. 
- The tests are stored in the scripts folder of the project alongside the glue scripts themselves. 
- There are 2 scenarios: 
  - In the ideal scenario, you should be writing your script and your tests at the same time. Start by creating your own glue job script as usual, `script_name.py`, and also a test file `test_script_name.py`. Test files should be named with "test" at the beginning of the file. For example, `test_cleaning_script.py`.
  - In the non-ideal scenario, you are writing tests at posteriori for a script that already exists. Pick this script and create the corresponding test file named `test_script_name.py`.

- You will need to organise your script (or reorganise it if it already exists) according to the [Organising your code so it can be tested](#organising-your-code-so-it-can-be-tested) above. For existing scripts, it includes adding the line
`if  __name__ = “__main__”:`
Just after the methods definitions and just before the part that reads arguments from the AWS environment (look at examples). Indent everything under this new line.
- Define a function within `script_name.py`, which takes in the input DataFrame(s), and returns the DataFrame to be written. (For existing scripts: take the processing code out of the main part and turn it into one or several methods).
- Within your `test_script_name.py` start creating tests. You can use the [test_spark_example][test_spark_example] as a template and [address cleaning][address_cleaning] as an example of a fully tested script. If you do, rename the class name into something relevant, for instance TestMechFireDpaCleaning. 
  Test method names should start with a "test" in their name, otherwise the tests won’t be run. 
  Ensure the name clearly describes what is being tested. 
  For example, if you are testing the behaviour of adding a unique id column, then a suitable name may be along the lines of `test_creates_unique_id_column`.
- There are some helper functions in `unit_testing_helpers.py` which you can use in your tests. For example, `assertDictionaryContains` is a useful function that asserts that specific fields and values exist in an output, instead of asserting equality for a full data line.
  If you do decide to use these functions, ensure you import them at the top of your test file.
- If your script is using a logger, you will need to pass it into your testable method. 
  See the `clean_addresses` function in the `test_address_cleaning.py` for an example of how you can do this. 
- When you’ve written your first test, run it using one of the commands in the [README.md][readme]. It is common practice to write a test in such a way that it initially fails, and then to change it to make it pass. This practice is called Test-driven development (TDD), for more information [this video][unit_testing_principles] talks through the principles of TDD.
- When you’re happy with your test, commit your changes locally on your branch. 
- To have your tests published on the Data Platform, push your commits to GitHub and create a Pull Request on your branch, so others can review and merge your code.


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
