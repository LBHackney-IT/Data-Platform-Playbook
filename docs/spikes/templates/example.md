# Spike: Full-text address search with fuzzy matching.
### Postgres Tools vs Elasticsearch

## Objective

We want to determine which tools or technologies would be best for us to use to implement a full-text address search with fuzzy matching. This spike focused on two possibilities:
- Postgres tools: We have a live Postgres RDS instance with address data.
- Elasticsearch: It is a popular search engine & analytics tool.

## Considerations
For this spike, a few user scenarios were used to determine which tool would be appropriate in fulfilling our desired address matching requirements:
- Free text search across all address lines, i.e. Line1, Line2, Line3 & Line4.
- Abbreviations of common street names (e.g. str, rd) are accepted.
- Spelling mistakes are allowed.
- Names with/ without an apostrophe return expected results.
- Variations in describing address, e.g. Flat A 100 Mare Street vs 100A Mare Street.
- Match proper names regardless of the words street, road, lane, etc. e.g Cromwell street query should also return Cromwell Avenue matches.

## Findings
### Postgres:
Postgres has quite a number of tools (or extensions) that we can install on our AWS RDS instance giving us the functionality that we want for our full-text search.
With Postgres we can:
- Parse address strings into tokens (or lexemes). Tokenising should allow mapping of words in a query even if the way the user inputs the query varies e.g:
  - Saved string: “Try not to become a man of success, but rather try to become a man of value”
  - Tokens (or lexemes) created: 'becom', 'man', 'rather', 'success', 'tri', 'valu'
  - User one query: “Trying not to become a man of success”
  - User two query: “Becoming a valued man”
  - Both queries (after tokenising as well) should return the saved string. Note: Tokenising removes stop words like e.g ‘the’, ‘a’, ‘of’, etc.
  - We can structure how to get the most relevant matches first by adding rankings to specific columns when queried.
  - We can add custom dictionaries that would hold any stop words we don’t want to be ignored and can also hold synonyms for words e.g apartment vs flat. Str vs street.
  - Entity framework has support for Postgres full-text searching.
This is a quick overview of what Postgres full-text searching can offer us. The documentation for implementing this is very extensive and detailed.

####Limitation
Currently AWS RDS doesn’t support custom dictionaries. This is because custom dictionaries are created as files that need to be uploaded into the database. You currently can’t do this in RDS which would affect synonym and stop word matching.

####Suggestion
It might be possible to get around this by how we parse the user query i.e the parsed query for full-text search would use boolean operators, “AND”, “OR”, “NOT”. We would most likely use AND operations to get more relevant matches but there might be a way to use OR operators before certain abbreviations/synonyms but this would likely be custom code and could get a bit unwieldy. This also might result in more irrelevant matches but matches nonetheless whereas using just AND would return nothing.

### Elasticsearch:
This is a search and analytics engine tool so has been designed to tackle the full-text searching to a specialised degree. To use Elasticsearch we would need to get the data we want to index into it but if we use AWS Elasticsearch this can be accomplished by DMS.

Getting data in Elasticsearch also requires mapping, however, we don’t need to transfer all the data in the database. Might need more clarification on this but it sounds like an efficient way is to only transfer and index the data related to address search queries e.g the address line columns and postcode.

Elasticsearch also can:
- Parse address strings into tokens (or lexemes) using its analysers.
- Can install packages that add custom dictionaries of synonyms or words to ignore or stop words to not ignore.
- Can also add weights for ranking.
Elasticsearch comes with an extensive toolset for searching, analysing data and returning the relevant matches and can be integrated into dotnet project by using a package called NEST.

####Limitation
This is would be a separate tool that requires configuration and some understanding of what we should implement and don’t need from Elasticsearch.

AWS has an Elasticsearch service we could spin up in our AWS environments. If we use AWS Elasticsearch we can benefit from using DMS to get the data we need into it, however, if we do not use AWS Elasticsearch, we would need to create a script to import the data into our Elasticsearch instance.

Using AWS Elasticsearch means we’ll be adding an additional tool to our current stack in AWS and this would need to be managed and maintained. It also means that we would be adding an additional cost to the running of the stack. There is a free tier option but we would be charged for usages over that limit.

####Suggestion
From reading the ONS paper on address matching, Elasticsearch was being implemented for retrieving addresses. Since this paper was focused on tackling the address matching problem, it might be worth using this as a tool for indexing and searching rather than relying on database tools.

We currently have indexes in the Postgres DB but it might be worth understanding a bit more about the indexing in Elasticsearch and whether these would have an effect on query performance compared to what we have in Postgres.

In our case, we might be able to use Elasticsearch as our indexing tool for a subset of data, retrieve a list of matching ids and then query the database using these ids, which could result in faster retrieval but this needs to be checked.

##Helpful Resources/Documentation
- Postgres documentation on Full-Text Searching
- Postgres Full-Text Search with Entity Framework Core
- Postgres full-text search is Good Enough! Blog
- Postgres Full-Text Search How-To Video


- Setting up Elasticsearch with .Net and Docker Blog
- Amazon Elasticsearch Pricing
- Amazon Elasticsearch Overview
- Querying Elasticsearch using the Search API
- Using DMS to migrate data into Elasticsearch

