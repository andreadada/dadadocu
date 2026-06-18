// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'DadaWiki',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://andreadada.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/dadadocu/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'andreadada', // Usually your GitHub org/user name.
  projectName: 'dadadocu', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        /*
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        */
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],


  plugins: [
      [
        "@docusaurus/plugin-content-blog",
        /** @type {import('@docusaurus/plugin-content-blog').Options} */
        {
          id: "structoryChangelog",
          path: "./structory-changelog",
          routeBasePath: "structory-changelog",
          showReadingTime: true,
          blogTitle: "Structory Changelog",
          blogDescription: "Release notes and updates for Structory.",
        },
      ],
      [
        "@docusaurus/plugin-content-blog",
        /** @type {import('@docusaurus/plugin-content-blog').Options} */
        {
          id: "dadaGravesChangelog",
          path: "./dadagraves-changelog",
          routeBasePath: "dadagraves-changelog",
          showReadingTime: false,
          blogTitle: "DadaGraves Changelog",
          blogDescription: "Release notes and updates for DadaGraves.",
        },
      ],
    ],


  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
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
          /*
          {to: '/blog', label: 'Blog', position: 'left'},
          {to: '/structory-changelog', label: 'Structory Changelog', position: 'left'}
          */
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
                /*
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
                  */
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
                label: 'GitHub',
                href: 'https://github.com/andreadada',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} DadaWiki, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};



export default config;
