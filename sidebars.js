const fs = require('fs');
const path = require('path');

const getItems = (folder) =>{
  return fs.readdirSync(`./docs/${folder}/`).filter((f)=>{
    return f.includes(".md")
  }).map(file => {
      return `${folder}/${file.split(".")[0].replace(/^[0-9]+\-/i, '')}`
    })
}

module.exports = {
  docs: [
    //"release-notes",
    {
      type: "category",
      label: "About",
      items: [
        "introduction",
        "about-playbook",
        "zones",
        "environments",
      ],
    },
    {
      type: "category",
      label: "Playbook",
      items: [
        {
          type: "category",
          label: "Getting set up on the platform",
          items: getItems ("playbook/getting-set-up"),
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
              label: "Glue Jobs and Testing",
              items: getItems("playbook/transforming-data"),
            },
            {
              type: "category",
              label: "Scheduling Glue Jobs",
              items: getItems("playbook/transforming-data/scheduling-glue-jobs"),
            },
          ],
        },
        {
          type: "category",
          label: "Querying and analysing data",
          items: getItems("playbook/querying-and-analysing-data"),
        },
      ],
    },
    {
      type: "category",
      label: "Technical Documentation",
      items: getItems("docs"),
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
    }
  ],
};
