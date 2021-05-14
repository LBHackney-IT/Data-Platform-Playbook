# Data Platform - Data Dictionary & Playbook

This project is used to generate the [Data Platform Documentation Site](https://lbhackney-it.github.io/Data-Platform-Playbook/).

You can edit the pages files directly in this project, which are formated as .md files and once committed the changes will become visible on the site.

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

This website is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator.

### Installation

```console
yarn install
```

### Local Development

```console
yarn start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

### Build

```console
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

```console
GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

