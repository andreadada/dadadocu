// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'DadaWiki',
  tagline: 'Documentation for Dada plugins, tools, and server projects.',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://andreadada.github.io',
  baseUrl: '/dadadocu/',
  organizationName: 'andreadada',
  projectName: 'dadadocu',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-blog',
      /** @type {import('@docusaurus/plugin-content-blog').Options} */
      ({
        id: 'structoryChangelog',
        path: './structory-changelog',
        routeBasePath: 'structory-changelog',
        showReadingTime: true,
        blogTitle: 'Structory Changelog',
        blogDescription: 'Release notes and updates for Structory.',
      }),
    ],
    [
      '@docusaurus/plugin-content-blog',
      /** @type {import('@docusaurus/plugin-content-blog').Options} */
      ({
        id: 'dadaGravesChangelog',
        path: './dadagraves-changelog',
        routeBasePath: 'dadagraves-changelog',
        showReadingTime: false,
        blogTitle: 'DadaGraves Changelog',
        blogDescription: 'Release notes and updates for DadaGraves.',
      }),
    ],
    [
      '@docusaurus/plugin-content-blog',
      /** @type {import('@docusaurus/plugin-content-blog').Options} */
      ({
        id: 'dadaProgressionsChangelog',
        path: './dadaprogressions-changelog',
        routeBasePath: 'dadaprogressions-changelog',
        showReadingTime: false,
        blogTitle: 'DadaProgressions Changelog',
        blogDescription: 'Release notes and update guidance for DadaProgressions.',
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'DadaWiki',
        logo: {
          alt: 'DadaWiki Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'structorySidebar',
            position: 'left',
            label: 'Structory',
          },
          {
            type: 'docSidebar',
            sidebarId: 'dadaGravesSidebar',
            position: 'left',
            label: 'DadaGraves',
          },
          {
            type: 'docSidebar',
            sidebarId: 'dadaProgressionsSidebar',
            position: 'left',
            label: 'DadaProgressions',
          },
          {
            type: 'docSidebar',
            sidebarId: 'dadaDndSidebar',
            position: 'left',
            label: 'DND',
          },
          {
            type: 'docSidebar',
            sidebarId: 'dadaEventDirectorSidebar',
            position: 'left',
            label: 'EventDirector'
          }
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Structory',
                to: '/docs/structory/intro',
              },
              {
                label: 'DadaGraves',
                to: '/docs/dadagraves/intro',
              },
              {
                label: 'DadaProgressions',
                to: '/docs/dadaprogressions/intro',
              },
              {
                label: 'EventDirector',
                to: '/docs/eventdirector/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/KBNDByfjuC',
              },
              {
                label: 'Spigot',
                href: 'https://www.spigotmc.org/members/mrbast.610454/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Structory Changelog',
                to: '/structory-changelog',
              },
              {
                label: 'DadaGraves Changelog',
                to: '/dadagraves-changelog',
              },
              {
                label: 'DadaProgressions Changelog',
                to: '/dadaprogressions-changelog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/andreadada',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} DadaWiki. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
