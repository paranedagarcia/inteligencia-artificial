// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Inteligencia Artificial para la Gestión Pública',
  tagline: 'Análisis de Datos, Estrategia, Gobernanza y Automatización',
  favicon: 'img/favicon.ico',

  markdown: {
    mermaid: true,
    hooks: {
      // Downgrade to warnings so your staging preview or local build won't fail
      onBrokenMarkdownImages: 'warn', 
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
  baseUrl: '/ia-gestionpublica',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'patricioaraneda', // Usually your GitHub org/user name.
  projectName: 'ia-gestionpublica', // Usually your repo name.

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
            href: 'https://github.com/paranedagarcia/ia-gestionpublica',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Manual',
                to: '/docs/intro',
              },
              {
                label: 'DOI',
                href: 'https://orcid.org/0000-0001-9677-5959',
              }
            ],
          },
          {
            title: 'Conecta',
            items: [
              {
                label: 'Website',
                href: 'https://patricioaraneda.cl',
              },
              {
                label: 'Linkedin',
                href: 'https://www.linkedin.com/in/patricioaraneda',
              },
              {
                label: 'Whatsapp',
                href: 'https://wa.me/56978872845',
              },
              
            ],
          },
          {
            title: 'Más',
            items: [
             
              {
                label: 'GitHub',
                href: 'https://github.com/paranedagarcia/ia-gestionpublica',
              },
              {
                label: 'Correo',
                href: 'mailto:paraneda@ug.uchile.cl',
              }
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Patricio Araneda G. | Inteligencia Artificial para la Gestión Pública, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
