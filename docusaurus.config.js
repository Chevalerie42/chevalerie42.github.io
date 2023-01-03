// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Les Tutos de Chevalerie !',
  tagline: 'Système, Réseau, Pentest, voir même un peu de Dev. Tout y passe !',
  url: 'https://chevalerie42.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/Page_Accueil/Favicon.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Chevalerie42', // Usually your GitHub org/user name.
  projectName: 'chevalerie42.github.io', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/chevalerie42/chevalerie42.github.io/tree/site/docs',
                      routeBasePath: 'docs',
              tagsBasePath: 'tags',
              sidebarCollapsible: true,
              sidebarCollapsed: true,
              showLastUpdateAuthor: true,
              showLastUpdateTime: true,
              breadcrumbs: true,
          },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/chevalerie42/chevalerie42.github.io/tree/site/blog',
            feedOptions: {
            type: 'rss',
            language: 'fr',
            title: 'RSS : Les Tutos de Chevalerie ! ⚔️',
            description: 'Un nouvel article est disponible sur le site de Chevalerie ! <3 ',
            copyright: `Copyright © ${new Date().getFullYear()} & tout Droit d'Auteur réservé a "Chevalerie" ! ⚔️`,
          },
          path: 'blog',
          blogTitle: 'Blog de Chevalerie',
          blogDescription: 'Sortie des nouveaux tutos, test de produits en plus encore !',
          blogSidebarCount: 5,
          blogSidebarTitle: 'Les derniers articles :',
          tagsBasePath: 'tags',
          postsPerPage: 10, 
          authorsMapPath: 'authors.yml',
          sortPosts: 'descending',
          readingTime: ({content, defaultReadingTime}) =>
          defaultReadingTime({content, options: {wordsPerMinute: 250}}),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'writeup',
        path: 'writeup',
        routeBasePath: 'writeup',
        sidebarPath: require.resolve('./sidebars.js'),
        // ... autres options
        editUrl:
        'https://github.com/chevalerie42/chevalerie42.github.io/tree/site/writeup',
        tagsBasePath: 'tags',
        sidebarCollapsible: true,
        sidebarCollapsed: true,
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        breadcrumbs: true,

      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Chevalerie',
        logo: {
          alt: 'Logo_Chevalerie',
          src: 'img/Page_Accueil/Logo_Chevalerie_Menu.png',
        },
        items: [
          {
            to: '/blog', 
            label: 'Le Blog ✒️', 
            position: 'left'
          },
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Les Tutos de Cheche 📚',
          },
          {
            to: '/writeup/intro',
            position: 'left',
            label: 'Writeup 🎉',
          },
          {
            to: 'https://github.com/chevalerie42',
            label: 'GitHub 🐱‍👤',
            position: 'right',
          },
          {
            to: 'https://www.youtube.com/@chevalerie33',
            label: 'Youtube 📸',
            position: 'right', 
          },
          {
            to: 'https://discordapp.com/users/1026783209314320394',
            label: 'Discord 🤖',
            position: 'right', 
          }
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Navigation',
            items: [
              {
                label: 'Les Tutos de CheChe 📚',
                to: '/docs/intro',
              },
              {
                label: 'Blog ✒️',
                to : '/blog',
              },
              {
                label: 'Write Up 🎉',
                to : '/blog',
              }              
            ],
          },
          {
            title: 'Profil',
            items: [
              {
                label: 'Try Hack Me ☁️',
                to: 'https://tryhackme.com/p/Chevalerie',
              },
              {
                label: 'Hack The Box 🧊',
                to: 'https://app.hackthebox.com/profile/390130',
              },
            ],
          },
          {
            title: 'Mon travail',
            items: [
              {
                label: 'Youtube 📸',
                to: 'https://www.youtube.com/channel/UCl-oB2xW0ec2Vy0YScAPBIg',
              },
              {
                label: 'GitHub 🐱‍👤',
                to: 'https://github.com/Chevalerie42/',
              },
            ],
          },
          {
            title: 'Contact',
            items: [
              {
                label: 'chevalerie@keemail.me 💌',
                to: 'mailto:chevalerie@keemail.me',
              },
              {
                label: 'Discord 🤖',
                to: 'https://discordapp.com/users/1026783209314320394',
              },
            ],
          },
        ],
        logo: {
          alt: 'Chevalerie',
          src: 'img/logo.svg',
          href: 'https://redis.com/',
        },
        copyright: `Copyright © ${new Date().getFullYear()} & tout Droit d'Auteur réservé a "Chevalerie" ! ⚔️`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
