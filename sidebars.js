const fs = require("fs");

const getItems = (folder) => {
  return fs
    .readdirSync(`./docs/${folder}/`)
    .filter((f) => {
      return f.includes(".md");
    })
    .map((file) => {
      return `${folder}/${file.split(".")[0].replace(/^[0-9]+\-/i, "")}`;
    });
};

module.exports = {
  docs: [
    //"release-notes",
    {
      type: "category",
      label: "About",
      items: ["introduction", "about-playbook", "zones", "environments"],
    },
    {
      type: "category",
      label: "Playbook",
      items: [
      {
          type: "category",
          label: "Getting set up on the platform",
          items: getItems("playbook/getting-set-up"),
        },
        {
          type: "category",
          label: "Elements of the platform",
          items: getItems("playbook/elements-of-the-platform"),
        },
        {
          type: "category",
          label: "Finding data on the platform",
          items: getItems("playbook/finding-data"),
        },
        {
          type: "category",
          label: "Getting access to data",
          items: getItems("playbook/getting-access-to-data"),
        },
        {
          type: "category",
          label: "Ingesting data",
          items: getItems("playbook/ingesting-data"),
        },
        {
          type: "category",
          label: "Transforming data",
          items: [
            {
              type: "category",
              label: "Guides to testing in the platform",
              items: getItems(
                "playbook/transforming-data/guides-to-testing-in-the-platform"
              ),
            },
            {
              type: "category",
              label: "Using AWS Glue",
              items: [
                ...getItems("playbook/transforming-data/using-aws-glue"),
                {
                  type: "category",
                  label: "Practical examples",
                  items: [
                    ...getItems(
                      "playbook/transforming-data/using-aws-glue/practical-examples"
                    ),
                    "workshop/aws_glue_studio_parking",
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "category",
          label: "Querying and analysing data",
          items: [
                {
                  type: "category",
                  label: "Time Series Analysis",
                  items: [
                    ...getItems(
                      "playbook/querying-and-analysing-data/time-series-analysis"
                  ),
                  ],
                },
                ...getItems("playbook/querying-and-analysing-data"),
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Training Modules",
      items: [
          {
            type: "category",
            label: "Main Modules",
            items: getItems("training-modules"),
          },
        {
          type: "category",
          label: "Qlik Modules",
          items: getItems("training-modules/Qlik"),
        },
      ]
    },
    {
      type: "category",
      label: "Technical Documentation",
      items: getItems("docs"),
    },
    {
      type: "category",
      label: "DAP⇨flow",
      items: [
        "dap-airflow/introduction",
        {
          type: "category",
          label: "📚Onboarding",
          /* items: getItems("dap-airflow/onboarding"), */
          items: ["dap-airflow/onboarding/begin", "dap-airflow/onboarding/access-the-AWS-Management-Console"],
        },
      ],
    },
    {
      type: "category",
      label: "Architecture Decision",
      items: [
        "architecture-decisions/index",
        {
          type: "category",
          label: "Records",
          items: getItems("architecture-decisions/records"),
        },
      ],
    },
    {
      type: "category",
      label: "Spikes",
      items: getItems("spikes"),
    },
    {
      type: "doc",
      id: "glossary",
      label: "Glossary",
    },
    {
      type: "doc",
      id: "roles",
      label: "Roles",
    },
/*
*/
  ],
};
