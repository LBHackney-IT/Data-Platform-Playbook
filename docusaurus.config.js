module.exports = {
  title: "Hackney Data Platform Playbook",
  tagline:
    "A guide on Hackney's Data Platform practices, and how to follow them",
  url: "https://playbook.hackney.gov.uk/",
  baseUrl: "/Data-Platform-Playbook/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.png",
  organizationName: "lbhackney-it",
  projectName: "Data Platform Playbook",
  trailingSlash: false,
  themeConfig: {
    prism: {
      additionalLanguages: ["csharp"],
    },
    navbar: {
      title: "Data Platform Playbook",
      logo: {
        alt: "Data Platform Playbook",
        src: "img/logo-long.svg",
      },
      items: [
        {
          href: "https://github.com/LBHackney-IT/data-platform-playbook",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    algolia: {
      appId: process.env.app_id,
      apiKey: process.env.api_key,
      indexName: 'hackney',
      placeholder: 'Search playbook'
    },
    footer: {
      style: "dark",
      links: [],
      copyright: `Made by HackIT.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/LBHackney-IT/data-platform-playbook/edit/master/",
        },
        theme: {
          customCss: [require.resolve("./src/docs.scss")],
        },
      },
    ],
  ],
  clientModules: [require.resolve("./src/docs.js")],
  plugins: ["docusaurus-plugin-sass"],
};
