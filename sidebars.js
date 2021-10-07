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
    "release-notes",
    {
      type: "category",
      label: "About",
      items: [
        "introduction",
        "zones",
        "environments",
        //'api_standards',
        //'platform_api_vs_service_api',
        //'documentation'
      ],
    },
    {
      type: "category",
      label: "Playbook",
      items: [...getItems("playbook"), ...getItems("workshop")],
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
          items: getItems("architecture-decisions"),
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
