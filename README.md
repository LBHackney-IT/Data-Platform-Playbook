# Data Platform - Data Dictionary & Playbook

This project is used to generate the [Data Platform Documentation Site](https://lbhackney-it.github.io/lbh-hackney-data-platform-docs/).

You can edit the pages files directly in this project, which are formated as .md files and once commited the changes will become visiable on the site.

The site is broken down into two sections:

* Data Dictionary
  * The Data Dictonary contains definitions of Data Entities
* Playbook
  * The Playbook contains articles on the processes involved in using the Data Platform
* Architecture Decision Records
  * Records of architecture decisions made regarding the platform. *See Architecture Decision Records (ADRs) below*.
* Technical Spikes (Discovery)
  * Records of findings around technical investigations concluding in an Architecture Decision Record (ADR).

## Architecture Decision Records (ADRs)

The Data Platform uses Architecture Decision Records (ADRs) to document architecture decisions that have been made.
They can be found in `pages/architecture-decisions` and contributed to with
[adr-tools](https://github.com/npryce/adr-tools).

Note: A custom template is provided in this project user `pages/architecture-decisions/templates/template.md`, this is
automatically picked up by [adr-tools](https://github.com/npryce/adr-tools).

## Developer Info

### Eleventy

An example showing how to use the Hackney design system with the [Eleventy](https://www.11ty.dev/) static site generator, along with Parcel for bundling JS.

It has a script for [copying assets to the root](https://design-system.hackney.gov.uk/developing/installing-from-npm#2-copying-assets), which are then included in the Eleventy build.

### Installation

You need Node.js and npm installed.

```
npm install
npm start
```

It will be on `localhost:8080`
