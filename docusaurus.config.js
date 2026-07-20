// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';
import {links as footerLinks} from './footer_links.js';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Inteligencia Artificial',
  tagline: 'Análisis de Datos y Automatización',
  favicon: 'img/favicon.ico',
  staticDirectories: ['public', 'static'],

  markdown: {
    mermaid: true,
    hooks: {
      // Downgrade to warnings so your staging preview or local build won't fail
      onBrokenMarkdownImages: 'warn', 
    },
    remarkRehypeOptions: {
      footnoteLabel: 'Notas al pie',
      footnoteBackLabel: 'Volver a referencia',
    },
  },
  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://patricioaraneda.cl',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/inteligencia-artificial/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'patricioaraneda', // Usually your GitHub org/user name.
  projectName: 'inteligencia-artificial', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "es".
  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
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
          
        },
        
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        {name: 'keywords', content: 'ia, manual, inteligencia artificial, gestión pública, análisis de datos, estrategia, gobernanza, automatización'},
        {name: 'author', content: 'Patricio Araneda'},
      ],
      // Replace with your project's social card
      image: 'img/ODC-isotipo.svg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Inteligencia Artificial',
        logo: {
          alt: 'Inteligencia Artificial para la Gestión Pública Logo',
          src: 'img/ODC-isotipo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Manual',
          },
          //{to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/paranedagarcia/inteligencia-artificial',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: footerLinks,
        copyright: `Copyright © ${new Date().getFullYear()} Patricio Araneda G. | Inteligencia Artificial para la Gestión Pública, Built with <a href="https://docusaurus.io/">Docusaurus</a>. <br /><img src="img/cc-by-nc-sa.png" alt="CC-BY-SA 4.0" width="120" />`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
