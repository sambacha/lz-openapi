// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const currentVersion = "1.8.0";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'LayerZero API',
  tagline: 'lz API',
  url: 'https://lz-api.securerpc.com',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'manifoldfinance', // Usually your GitHub org/user name.
  projectName: 'lz-api', // Usually your repo name.
  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      'redocusaurus',
      {
        // Plugin Options for loading OpenAPI files
        specs: [
          {
            spec: 'openapi.json',
            route: '/api/',
          },
        ],
        // Theme Options for modifying how redoc renders them
        theme: {
          // Change with your site colors
          primaryColor: '#1890ff',
        },
        redocTheme: {
          spacing: {
            unit: 5,
            sectionVertical: 8,
          },
          menu: {
            arrow: {
              size: '6em'
            }
          },
          typography: {
            fontSize: '16px',
          },
          breakpoints: {
            medium: '130rem'
          }
        },
        /**
        * Options to pass to redoc
        * @see https://github.com/redocly/redoc#redoc-options-object
        */
        redocOptions: {
          hideHostname: true,
          noAutoAuth: true, // Hide auth url
          menuToggle: false, // Double click on item on control won't close it
          pathInMiddlePanel: true, // Put Verb and URL in the center panel
          sortPropsAlphabetically: true, // Props sorted
          // hideSingleRequestSampleTab: true,
          jsonSampleExpandLevel: 1,
          // expandResponses: "800",
          // hideRequestPayloadSample: true,
          scrollYOffset: 100,
        },
      },
    ],
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/manifoldfinance/lz-api/',
            lastVersion: "current",
            versions: {
              current: {
                label: `${currentVersion}`
              }
            }
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'LayerZero Relayer API',
        logo: {
          alt: 'lz-api',
          src: 'img/logo.svg',
        }
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'API',
                to: '/api/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Telegram',
                href: 'https://t.me/manifoldfinance',
              },
              {
                label: 'Discourse',
                href: 'https://forums.manifoldfinance.com',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/foldfinance',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/manifoldfinance/lz-api',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Manifold Finance, Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
