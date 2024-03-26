#just a test

# Data Platform - Data Dictionary & Playbook

This project is used to generate the [Data Platform Documentation Site](https://lbhackney-it.github.io/Data-Platform-Playbook/).

You can edit the pages files directly in this project, which are formatted as .md files and once committed the changes will become visible on the site.

The site is broken down into two sections:

- Data Dictionary
  - The Data Dictionary contains definitions of Data Entities
- Playbook
  - The Playbook contains articles on the processes involved in using the Data Platform
- Architecture Decision Records
  - Records of architecture decisions made regarding the platform. _See Architecture Decision Records (ADRs) below_.
- Technical Spikes (Discovery)
  - Records of findings around technical investigations concluding in an Architecture Decision Record (ADR).

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

If you don't have `yarn` installed, do so by running:

```console
npm install --global yarn
```

### Local Development

```console
yarn start
```

This command starts a local development server which you can view at [http://localhost:3000/Data-Platform-Playbook/](http://localhost:3000/Data-Platform-Playbook/). Most changes are reflected live without having to restart the server.

### Building static content

```console
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deploying changes

You should open a pull request with your suggested edits, and seek approval from another developer on your changes. New pull request notifications are automatically sent to the `#data-platform-chatops` Slack channel.

When changes are merged into the `main` branch, they will be automatically deployed to the [Data Platform Documentation Site](https://lbhackney-it.github.io/Data-Platform-Playbook/) via [GitHub actions](https://github.com/LBHackney-IT/Data-Platform-Playbook/actions).

To deploy manually you can run:

```console
GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
