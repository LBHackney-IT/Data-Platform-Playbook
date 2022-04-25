# Goal

In this module you will load 2 datasets from a Google Sheet into the data platform, and make them available for querying in SQL. 

## Overview of the steps

To achieve this goal, you’ll first need to set up a new ingestion job using Terraform in GitHub. When your job has been approved and deployed by the Data Platform team, you will be able to run it in the AWS console, crawl the loaded data, and view and query it in a database-like client (AWS Athena).

# Step by step instructions

Ensure prerequisites for Module 1 are completed

### Preparing the Google Sheet for this exercise
Make a copy of the data here and name the Google Sheet as `covid_vaccination_data` in your own Drive. We are going to use the tabs `locations` and `vaccination`.

### Granting the Data Platform access to your new Google sheet.
We have created a ‘sandbox’ department in the Data Platform, and an associated Google service account: `sandbox@dataplatform-stg.iam.gserviceaccount.com`
The Data platform will use this account to connect to your Google sheet. 

### Use the sharing settings of your sheet and grant “Viewer” permissions to this user.
Detailed steps are in the playbook.

### Creating two ingestion jobs in Terraform
Your Google sheet is going to be ingested by a job running in AWS Glue. You will write a bit of Terraform that will deploy this job automatically in the AWS environment. You are going to write this code directly in your web browser in GitHub here, adding to the existing `Terraform script 26-google-sheets-imports.tf`

You could also write it locally in your IDE, but you wouldn’t be able to test it, so editing via the GitHub web interface will be easier in this case.  

You will need to create two Terraform modules as we are ingesting two datasets from the Google spreadsheet:
locations
vaccinations

Go to the playbook to view detailed steps on how to create a Terraform module.

Please follow these additional rules as several users may be completing the training:
1. Suffix your new Terraform module name with YOURNAME so that each participant’s job will be easily identifiable. The module name will need to also reflect the individual dataset so make sure that the dataset name is also included within the module name e.g. `locations`.
2. Your department name will be ‘sandbox’ for the purpose of the training. 
3. Prefix the dataset_name with your name
4. No schedule is required as this is a one-off import, so this line does not need to be included within the module.

### Getting your jobs deployed to the Data Platform
Once modules have been completed above then changes will need to be committed. Follow the instructions in Github UI on how to do this. 
Please note that if you do not have access to the AWS sandbox account then this step will fail.
Create a Pull Request for the Terraform code you’ve just written. Two approvals are required before your code can get merged into the main branch of the Data Platform repository. If you know the names of your reviewers, you can send them the URL of your PR to speed up the process. 

Once you have received emails that two reviewers have approved your PR, go back to GitHub and merge your code. This will deploy your job out to Data Platform Pre-Production. This only happens once. From that point, you will be able to see it in the AWS console, and it will run on schedule or manually, depending on how it was configured in Terraform.
Detailed steps are in the playbook.

```There will be a 10-15 minute delay whilst the code deployment takes place. You can take a break or look at a ready-made job in the interim. To check the status of your deployment, navigate to the `Actions` tab in the Github UI
```
In everyday use you may not need the data to be immediately available, in which case steps 5-7 would be picked up by the scheduled daily jobs, provided a schedule is specified in the terraform module. 

Log in to AWS as the Sandbox department via the AWS Management Console for that role. The rest of the steps of Module 1 are done in the console.

Finding and running your jobs in the AWS console and running them

```Tip 1
You can search for AWS tools like AWS Glue, Crawlers etc using the toolbar.
```
```Tip 2
If you cannot find a job or crawler check the region is London in the top right of the screen.
```

Your jobs are now available in the console, you can find them in Glue Studio. They will be named like [Google Sheets Import Job - department dataset name].

```If you are waiting for code deployment to complete, then look for “stg Google Sheets Import Job - sandbox-daro-covid-locations” and “stg Google Sheets Import Job - sandbox-daro-covid-vaccinations” jobs instead.
```

Once you have selected a Glue job, you can run it by clicking `Run job` 
To monitor the progress of your Glue job run, click through to the Glue job and navigate to the `Runs` tab

### Crawling the ingested data to make it available in the Glue catalogue. 
Crawling is the mechanism used to populate the AWS Glue Data Catalog so that the data is visible in Athena, picking up the column names and data types. 
Once the Glue jobs have successfully run, go ahead and run the crawlers that were created as part of the Import Job 
You can use the AWS search bar to locate the Crawlers page
To search for your Crawler, click on the search box and then select the `Name` filter and enter the name of your crawler, and run.

Check the data in AWS Athena, the interface to view and query data from the Glue Catalogue.
Open the `Query editor`
Make sure workgroup is “sandbox” and you’re using the sandbox-raw-zone database
a simple query in Athena against your tables (created/ updated) by the crawlers. (Select the 3 vertical dots by the table name and select “Preview Table” to see the top 10 lines). The dialect of SQL used in Athena is Presto SQL.
Then repeat steps 6-9 for the job that you created as the code should have deployed by now.
