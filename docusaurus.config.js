const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "vTime Docs",
  tagline: "vTime Docs",
  url: "https://docs.vtime.me",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/vTime.ico",
  organizationName: "vTimeMain",
  projectName: "docs",
  i18n: {
    defaultLocale: "en",
    locales: ["en", "ar", "es", "fr", "tr", "ru", "ja"],
    localeConfigs: {
      ar: {
        direction: "rtl",
      },
    },
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/vTimeMain/docs/blob/master",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        blog: false,
        gtag: {
          trackingID: "G-2ME5P0RZYD", // Google analytics
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: "dark",
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      algolia: {
        appId: "EIXRQE8V4M",
        apiKey: "31c6e641e9741ac44d474bd545f1acaa",
        indexName: "docs_vtime_me_eixrqe8v4m_pages",
        contextualSearch: true,
        aggregateContent: true,
      },
      image: "img/vTime_docs.png",
      navbar: {
        title: "vTime Docs",
        logo: {
          alt: "vTime Docs",
          src: "img/logo.png",
        },
        items: [
          {
            type: "doc",
            docId: "introduction",
            position: "left",
            label: "Introduction",
          },
          {
            to: "https://vTime.me/dashboard",
            label: "Dashboard",
            position: "left",
          },
          {
            to: "https://discord.com/invite/vTime",
            label: "Contact support",
            position: "left",
          },
          {
            type: "localeDropdown",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        logo: {
          alt: "vTime brand logo",
          src: "img/logo.png",
          width: 130,
          height: 130,
        },

        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Introduction",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://discord.gg/vTime",
              },
              {
                label: "Reddit",
                href: "https://reddit.com/r/vTime",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/intent/follow?screen_name=tryvTime",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "vTime Website",
                href: "https://vTime.me",
              },
              {
                label: "Commands",
                href: "https://vTime.me/commands",
              },
              {
                label: "Support",
                href: "https://vTime.me/commands",
              },
              {
                label: "Privacy Policy",
                href: "https://vTime.me/privacy",
              },
              {
                label: "Privacy Policy",
                href: "https://vTime.me/terms",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} vTime, Inc. Built with Docusaurus.`,
      },
      prism: {
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
