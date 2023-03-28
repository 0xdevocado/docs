// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const math = require('remark-math');
const katex = require('rehype-katex');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'MakerDAO Developer Portal',
  tagline: 'Technical documentation and developer guides',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-test-site.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: '', // Usually your GitHub org/user name.
  projectName: '', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [
    [
      require.resolve("@cmfcmf/docusaurus-search-local"),
      {
        indexBlog: false,
      },
    ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/', // Serve the docs at the site's root
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/makerdao/docs',
            remarkPlugins: [math],
            rehypePlugins: [katex],
        },
        blog: false,
        
          //{
          // showReadingTime: true,
          // // Please change this to your repo.
          // // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        //},
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      //image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Developer Portal',
        logo: {
          //alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
          type: 'search',
          position: 'left',
          }
          // {
          //   type: 'doc',
          //   docId: 'intro',
          //   position: 'left',
          //   label: 'Tutorial',
          // },
          // {
          //   href: 'https://github.com/makerdao/',
          //   label: 'GitHub',
          //   position: 'right',
          // },
          // {
          //   href: 'https://makerdao.com/',
          //   label: 'makerdao.com',
          //   position: 'right',
          // },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'More MakerDAO Documentation',
            items: [
              {
                label: 'Governance Manual',
                href: 'https://manual.makerdao.com/',
              },
              {
                label: 'Maker Improvement Proposals',
                href: 'https://mips.makerdao.com/',
              },
              {
                label: 'Endgame Plan',
                href: 'https://endgame.makerdao.com/',
              },
              {
                label: 'Collateral Onboarding',
                href: 'https://collateral.makerdao.com/',
              },
              {
                label: 'Protocol Security',
                href: 'https://security.makerdao.com/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Forum',
                href: 'https://forum.makerdao.com/',
              },
              {
                label: 'Discord',
                href: 'https://chat.makerdao.com/',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/makerdao',
              },
              {
                label: 'Youtube',
                href: 'https://www.youtube.com/@MakerDAO',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/makerdao',
              },
            ],
          },
          // {
          //   title: 'More',
          //   items: [
              
          //   ],
          // },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Dai Foundation`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
