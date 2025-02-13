// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Cyber-Xplorer !',
  tagline: 'Du Système, Réseau, Pentest, voire même un peu de Dev. Nous explorons tout !',
  favicon: 'img/Page_Accueil/Logo_Cyber-Xplorer.svg',

  // Set the production url of your site here
  url: 'https://chevalerie42.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Chevalerie42', // Usually your GitHub org/user name.
  projectName: 'chevalerie42.github.io', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: 
  {
    defaultLocale: 'fr',
    locales: ['fr'],
    localeConfigs: 
    {
    fr: {
      label: 'Français',
      direction: 'ltr',
      htmlLang: 'fr-FR',
      calendar: 'gregory',
      path: 'fr',
      },
    },
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
          editUrl: 'https://github.com/chevalerie42/chevalerie42.github.io/edit/main/',
          routeBasePath: 'docs',
          tagsBasePath: 'tags',
          sidebarCollapsible: true,
          sidebarCollapsed: true,
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          breadcrumbs: true,
        },

        blog: 
        {
          showReadingTime: true,
          feedOptions: 
            {
            type: 'rss',
            language: 'fr',
            title: 'RSS : Cyber-Xplorer ! ⚔️',
            description: 'Un nouvel article a explorer sur le site de Cyber-Xploerr ! <3 ',
            copyright: `Copyright © ${new Date().getFullYear()} & tout Droit d'Auteur réservé a "Cyber-Xplorer" ! ⚔️`,
            xslt: true,
            },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/chevalerie42/chevalerie42.github.io/edit/main/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
          path: 'blog',
          blogTitle: 'Blog de Cyber-Xplorer',
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
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  plugins: [
   
    [
      require.resolve("@cmfcmf/docusaurus-search-local"),
      {
        indexDocs: true,
        indexDocSidebarParentCategories: 0,
        includeParentCategoriesInPageTitle: false,
        indexBlog: true,
        indexPages: false,
        language: "fr",
        style: undefined,
        maxSearchResults: 8,
        ///  tokenizerSeparator: /[\s\-]+/,
        ///  b: 0.75,
        ///  titleBoost: 5,
        ///  contentBoost: 1,
        ///  tagsBoost: 3,
        ///  parentCategoriesBoost: 2, // Only used when indexDocSidebarParentCategories > 0
      },
    ],


    [
       "@lunaticmuch/docusaurus-terminology",
          {
            termsDir: './glossaire',
            glossaryFilepath: './glossaire/glossaire.md',
          }
     ],

     [
      '@docusaurus/plugin-content-docs',
      {
        id: 'glossaire',
        path: 'glossaire',
        routeBasePath: 'glossaire',
        sidebarPath: require.resolve('./sidebars.js'),
        // ... autres options
        editUrl: 'https://github.com/chevalerie42/chevalerie42.github.io/edit/main/',
        tagsBasePath: 'tags',
        sidebarCollapsible: true,
        sidebarCollapsed: true,
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        breadcrumbs: true
      },
        ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'writeup',
        path: 'writeup',
        routeBasePath: 'writeup',
        sidebarPath: require.resolve('./sidebars.js'),
        // ... autres options
        editUrl: 'https://github.com/chevalerie42/chevalerie42.github.io/edit/main/',
        tagsBasePath: 'tags',
        sidebarCollapsible: true,
        sidebarCollapsed: true,
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        breadcrumbs: true
      },
        ],

        
          require.resolve('docusaurus-plugin-image-zoom'),
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      announcementBar: {
        id: 'Pedagogique_que_diable',
        content:
          "L'intégralité de ce site est à but pédagogique. Nous n'incitons personne à utiliser ces connaissances dans un but illicite, répréhensible par la loi.",
          backgroundColor: '#932087',
          textColor: '#acacac',
          isCloseable: true,
      },
      // Replace with your project's social card
      image: 'img/Page_Accueil/Logo_Chevalerie.png',
      navbar: 
        {
        title: 'Accueil',
        logo: 
          {
          alt: 'Logo_Cyber-Xplorer',
          src: 'img/Page_Accueil/Logo_Cyber-Xplorer.svg',      
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
              label: 'Les Tutos 📚',
            },
            {
              to: '/writeup/Write-Up',
              position: 'left',
              label: 'Write-Up 🎉',
            },
            {
              href: 'https://github.com/Chevalerie42',
              position: 'right',
              className: 'navbar-icon navbar-icon-github','aria-label': 'GitHub repository',
              html: 
                `
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 496 512"
                    height="35px"
                    width="35px"
                    xmlns="http://www.w3.org/2000/svg">
                    <title>GitHub</title>
                    <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                  </svg>
                 `,
            },
            {
              to: 'https://www.youtube.com/@chevalerie33',
              position: 'right',
              className: 'navbar-icon navbar-icon-youtube','aria-label': 'Youtube Chaine',
              html: 
                `
                  <svg 
                    width="35px" 
                    height="35px" 
                    viewBox="0 0 72 72" 
                    stroke="currentColor"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"> 
                    <title>Youtube</title>         
                    <path d="M36,72 L36,72 C55.882251,72 72,55.882251 72,36 L72,36 C72,16.117749 55.882251,-3.65231026e-15 36,0 L36,0 C16.117749,3.65231026e-15 -2.4348735e-15,16.117749 0,36 L0,36 C2.4348735e-15,55.882251 16.117749,72 36,72 Z" fill="#FF0002"/> <path d="M31.044,42.269916 L31.0425,28.6877416 L44.0115,35.5022437 L31.044,42.269916 Z M59.52,26.3341627 C59.52,26.3341627 59.0505,23.003199 57.612,21.5363665 C55.7865,19.610299 53.7405,19.6012352 52.803,19.4894477 C46.086,19 36.0105,19 36.0105,19 L35.9895,19 C35.9895,19 25.914,19 19.197,19.4894477 C18.258,19.6012352 16.2135,19.610299 14.3865,21.5363665 C12.948,23.003199 12.48,26.3341627 12.48,26.3341627 C12.48,26.3341627 12,30.2467232 12,34.1577731 L12,37.8256098 C12,41.7381703 12.48,45.6492202 12.48,45.6492202 C12.48,45.6492202 12.948,48.9801839 14.3865,50.4470165 C16.2135,52.3730839 18.612,52.3126583 19.68,52.5135736 C23.52,52.8851913 36,53 36,53 C36,53 46.086,52.9848936 52.803,52.4954459 C53.7405,52.3821478 55.7865,52.3730839 57.612,50.4470165 C59.0505,48.9801839 59.52,45.6492202 59.52,45.6492202 C59.52,45.6492202 60,41.7381703 60,37.8256098 L60,34.1577731 C60,30.2467232 59.52,26.3341627 59.52,26.3341627 L59.52,26.3341627 Z" fill="#FFF"/> </g> </g>
                  </svg>
                `,
            },
            {
              to: 'https://discord.gg/T6vAdtGBhb',
              position: 'right', 
              className: 'navbar-icon navbar-icon-github','aria-label': 'GitHub repository',
              html:
              `
                <svg 
                  width="35px" 
                  height="35px" 
                  viewBox="0 0 100 100" 
                  version="1.1" 
                  xml:space="preserve" 
                  xmlns="http://www.w3.org/2000/svg" 
                  xmlns:xlink="http://www.w3.org/1999/xlink" 
                  fill="#000000"><g id="SVGRepo_bgCarrier" 
                  stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <style type="text/css"> .st0{fill:#FFFFFF;} .st1{fill:#F5BB41;} .st2{fill:#2167D1;} .st3{fill:#3D84F3;} .st4{fill:#4CA853;} .st5{fill:#398039;} .st6{fill:#D74F3F;} .st7{fill:#D43C89;} .st8{fill:#B2005F;} .st9{fill:none;stroke:#000000;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;} .st10{fill-rule:evenodd;clip-rule:evenodd;fill:none;stroke:#000000;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;} .st11{fill-rule:evenodd;clip-rule:evenodd;fill:none;stroke:#040404;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;} .st12{fill-rule:evenodd;clip-rule:evenodd;} .st13{fill-rule:evenodd;clip-rule:evenodd;fill:#040404;} .st14{fill:url(#SVGID_1_);} .st15{fill:url(#SVGID_2_);} .st16{fill:url(#SVGID_3_);} .st17{fill:url(#SVGID_4_);} .st18{fill:url(#SVGID_5_);} .st19{fill:url(#SVGID_6_);} .st20{fill:url(#SVGID_7_);} .st21{fill:url(#SVGID_8_);} .st22{fill:url(#SVGID_9_);} .st23{fill:url(#SVGID_10_);} .st24{fill:url(#SVGID_11_);} .st25{fill:url(#SVGID_12_);} .st26{fill:url(#SVGID_13_);} .st27{fill:url(#SVGID_14_);} .st28{fill:url(#SVGID_15_);} .st29{fill:url(#SVGID_16_);} .st30{fill:url(#SVGID_17_);} .st31{fill:url(#SVGID_18_);} .st32{fill:url(#SVGID_19_);} .st33{fill:url(#SVGID_20_);} .st34{fill:url(#SVGID_21_);} .st35{fill:url(#SVGID_22_);} .st36{fill:url(#SVGID_23_);} .st37{fill:url(#SVGID_24_);} .st38{fill:url(#SVGID_25_);} .st39{fill:url(#SVGID_26_);} .st40{fill:url(#SVGID_27_);} .st41{fill:url(#SVGID_28_);} .st42{fill:url(#SVGID_29_);} .st43{fill:url(#SVGID_30_);} .st44{fill:url(#SVGID_31_);} .st45{fill:url(#SVGID_32_);} .st46{fill:url(#SVGID_33_);} .st47{fill:url(#SVGID_34_);} .st48{fill:url(#SVGID_35_);} .st49{fill:url(#SVGID_36_);} .st50{fill:url(#SVGID_37_);} .st51{fill:url(#SVGID_38_);} .st52{fill:url(#SVGID_39_);} .st53{fill:url(#SVGID_40_);} .st54{fill:url(#SVGID_41_);} .st55{fill:url(#SVGID_42_);} .st56{fill:url(#SVGID_43_);} .st57{fill:url(#SVGID_44_);} .st58{fill:url(#SVGID_45_);} .st59{fill:#040404;} .st60{fill:url(#SVGID_46_);} .st61{fill:url(#SVGID_47_);} .st62{fill:url(#SVGID_48_);} .st63{fill:url(#SVGID_49_);} .st64{fill:url(#SVGID_50_);} .st65{fill:url(#SVGID_51_);} .st66{fill:url(#SVGID_52_);} .st67{fill:url(#SVGID_53_);} .st68{fill:url(#SVGID_54_);} .st69{fill:url(#SVGID_55_);} .st70{fill:url(#SVGID_56_);} .st71{fill:url(#SVGID_57_);} .st72{fill:url(#SVGID_58_);} .st73{fill:url(#SVGID_59_);} .st74{fill:url(#SVGID_60_);} .st75{fill:url(#SVGID_61_);} .st76{fill:url(#SVGID_62_);} .st77{fill:none;stroke:#000000;stroke-width:3;stroke-miterlimit:10;} .st78{fill:none;stroke:#FFFFFF;stroke-miterlimit:10;} .st79{fill:#4BC9FF;} .st80{fill:#5500DD;} .st81{fill:#FF3A00;} .st82{fill:#E6162D;} .st83{fill:#F1F1F1;} .st84{fill:#FF9933;} .st85{fill:#B92B27;} .st86{fill:#00ACED;} .st87{fill:#BD2125;} .st88{fill:#1877F2;} .st89{fill:#6665D2;} .st90{fill:#CE3056;} .st91{fill:#5BB381;} .st92{fill:#61C3EC;} .st93{fill:#E4B34B;} .st94{fill:#181EF2;} .st95{fill:#FF0000;} .st96{fill:#FE466C;} .st97{fill:#FA4778;} .st98{fill:#FF7700;} .st99{fill-rule:evenodd;clip-rule:evenodd;fill:#1F6BF6;} .st100{fill:#520094;} .st101{fill:#4477E8;} .st102{fill:#3D1D1C;} .st103{fill:#FFE812;} .st104{fill:#344356;} .st105{fill:#00CC76;} .st106{fill-rule:evenodd;clip-rule:evenodd;fill:#345E90;} .st107{fill:#1F65D8;} .st108{fill:#EB3587;} .st109{fill-rule:evenodd;clip-rule:evenodd;fill:#603A88;} .st110{fill:#E3CE99;} .st111{fill:#783AF9;} .st112{fill:#FF515E;} .st113{fill:#FF4906;} .st114{fill:#503227;} .st115{fill:#4C7BD9;} .st116{fill:#69C9D0;} .st117{fill:#1B92D1;} .st118{fill:#EB4F4A;} .st119{fill:#513728;} .st120{fill:#FF6600;} .st121{fill-rule:evenodd;clip-rule:evenodd;fill:#B61438;} .st122{fill:#FFFC00;} .st123{fill:#141414;} .st124{fill:#94D137;} .st125{fill-rule:evenodd;clip-rule:evenodd;fill:#F1F1F1;} .st126{fill-rule:evenodd;clip-rule:evenodd;fill:#66E066;} .st127{fill:#2D8CFF;} .st128{fill:#F1A300;} .st129{fill:#4BA2F2;} .st130{fill:#1A5099;} .st131{fill:#EE6060;} .st132{fill-rule:evenodd;clip-rule:evenodd;fill:#F48120;} .st133{fill:#222222;} .st134{fill:url(#SVGID_63_);} .st135{fill:#0077B5;} .st136{fill:#FFCC00;} .st137{fill:#EB3352;} .st138{fill:#F9D265;} .st139{fill:#F5B955;} .st140{fill:#DD2A7B;} .st141{fill:#66E066;} .st142{fill:#EB4E00;} .st143{fill:#FFC794;} .st144{fill:#B5332A;} .st145{fill:#4E85EB;} .st146{fill:#58A45C;} .st147{fill:#F2BC42;} .st148{fill:#D85040;} .st149{fill:#464EB8;} .st150{fill:#7B83EB;} </style> <g id="Layer_1"></g> <g id="Layer_2"> <g> <g> 
                  <path class="st89" d="M85.22,24.958c-11.459-8.575-22.438-8.334-22.438-8.334l-1.122,1.282 c13.623,4.087,19.954,10.097,19.954,10.097c-19.491-10.731-44.317-10.654-64.59,0c0,0,6.571-6.331,20.996-10.418l-0.801-0.962 c0,0-10.899-0.24-22.438,8.334c0,0-11.54,20.755-11.54,46.319c0,0,6.732,11.54,24.442,12.101c0,0,2.965-3.526,5.369-6.571 c-10.177-3.045-14.024-9.376-14.024-9.376c6.394,4.001,12.859,6.505,20.916,8.094c13.108,2.698,29.413-0.076,41.591-8.094 c0,0-4.007,6.491-14.505,9.456c2.404,2.965,5.289,6.411,5.289,6.411c17.71-0.561,24.441-12.101,24.441-12.02 C96.759,45.713,85.22,24.958,85.22,24.958z M35.055,63.824c-4.488,0-8.174-3.927-8.174-8.815 c0.328-11.707,16.102-11.671,16.348,0C43.229,59.897,39.622,63.824,35.055,63.824z M64.304,63.824 c-4.488,0-8.174-3.927-8.174-8.815c0.36-11.684,15.937-11.689,16.348,0C72.478,59.897,68.872,63.824,64.304,63.824z"></path> </g> </g> </g> </g>
                </svg>
              `,
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
                label: 'Les Tutos 📚',
                to: '/docs/Intro_Tutos',
              },
              {
                label: 'Blog ✒️',
                to : '/blog',
              },
              {
                label: 'Write Up 🎉',
                to : '/writeup/Write-Up',
              }              
            ],
          },
          {
            title: 'Profil',
            items: [
              {
                html:
                `
                  <a href="https://tryhackme.com/p/Chevalerie">
                    <svg 
                      width="50px" height="50px"
                      style="color: red" 
                      role="img" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg">
                      <title>TryHackMe</title>
                      <path d="M10.705 0C7.54 0 4.902 2.285 4.349 5.291a4.525 4.525 0 0 0-4.107 4.5 4.525 4.525 0 0 0 4.52 4.52h6.761a.625.625 0 1 0 0-1.25H4.761a3.273 3.273 0 0 1-3.27-3.27A3.273 3.273 0 0 1 6.59 7.08a.625.625 0 0 0 .7-1.035 4.488 4.488 0 0 0-1.68-.69 5.223 5.223 0 0 1 5.096-4.104 5.221 5.221 0 0 1 5.174 4.57 4.489 4.489 0 0 0-.488.305.625.625 0 1 0 .731 1.013 3.245 3.245 0 0 1 1.912-.616 3.278 3.278 0 0 1 3.203 2.61.625.625 0 0 0 1.225-.251 4.533 4.533 0 0 0-4.428-3.61 4.54 4.54 0 0 0-.958.105C16.556 2.328 13.9 0 10.705 0zm5.192 10.64a.925.925 0 0 0-.462.108.913.913 0 0 0-.313.29 1.27 1.27 0 0 0-.175.427 2.39 2.39 0 0 0-.054.514c0 .181.018.353.054.517.036.164.095.307.175.43a.899.899 0 0 0 .313.297c.127.073.281.11.462.11.18 0 .334-.037.46-.11a.897.897 0 0 0 .309-.296c.08-.124.137-.267.173-.431.036-.164.054-.336.054-.517 0-.18-.018-.352-.054-.514a1.271 1.271 0 0 0-.173-.426.901.901 0 0 0-.309-.291.917.917 0 0 0-.46-.108zm6.486 0a.925.925 0 0 0-.462.108.913.913 0 0 0-.313.29 1.27 1.27 0 0 0-.175.427 2.39 2.39 0 0 0-.053.514c0 .181.017.353.053.517.036.164.095.307.175.43a.899.899 0 0 0 .313.297c.127.073.281.11.462.11.18 0 .334-.037.46-.11a.897.897 0 0 0 .31-.296c.078-.124.136-.267.172-.431.036-.164.054-.336.054-.517 0-.18-.018-.352-.054-.514a1.271 1.271 0 0 0-.173-.426.901.901 0 0 0-.308-.291.916.916 0 0 0-.461-.108zm-8.537.068l-.84.618.313.43.476-.368v1.877h.603v-2.557zm6.486 0l-.841.618.314.43.477-.368v1.877h.603v-2.557zm-4.435.445c.08 0 .143.028.193.084.05.057.087.127.114.21.026.083.044.173.054.269a2.541 2.541 0 0 1 0 .533c-.01.097-.028.187-.054.27a.584.584 0 0 1-.114.21.243.243 0 0 1-.193.085.248.248 0 0 1-.195-.086.584.584 0 0 1-.118-.209 1.245 1.245 0 0 1-.056-.27 2.645 2.645 0 0 1 0-.533c.01-.096.029-.186.056-.27a.583.583 0 0 1 .118-.209.25.25 0 0 1 .195-.084zm6.486 0c.08 0 .144.028.193.084.05.057.087.127.114.21.027.083.044.173.054.269a2.541 2.541 0 0 1 0 .533c-.01.097-.027.187-.054.27a.584.584 0 0 1-.114.21.243.243 0 0 1-.193.085.249.249 0 0 1-.195-.086.581.581 0 0 1-.117-.209 1.245 1.245 0 0 1-.056-.27 2.642 2.642 0 0 1 0-.533c.01-.096.028-.186.056-.27a.58.58 0 0 1 .117-.209.25.25 0 0 1 .195-.084zm-2.191 3.51a.93.93 0 0 0-.463.109.908.908 0 0 0-.312.291c-.08.122-.139.263-.175.426a2.383 2.383 0 0 0-.054.514c0 .18.018.353.054.516.036.164.094.308.175.432a.91.91 0 0 0 .312.296.92.92 0 0 0 .463.11c.18 0 .333-.037.46-.11a.892.892 0 0 0 .308-.296 1.32 1.32 0 0 0 .174-.432c.036-.163.054-.335.054-.516 0-.18-.018-.352-.054-.514a1.274 1.274 0 0 0-.174-.426.89.89 0 0 0-.309-.291.918.918 0 0 0-.46-.108zm-6.402.07l-.841.617.314.43.476-.369v1.878h.604v-2.557zm2.125 0l-.841.617.314.43.477-.369v1.878h.603v-2.557zm2.116 0l-.84.617.313.43.477-.369v1.878h.603v-2.557zm2.16.443c.08 0 .144.028.194.085a.605.605 0 0 1 .114.21c.026.083.044.172.053.269a2.639 2.639 0 0 1 0 .532 1.28 1.28 0 0 1-.053.27.585.585 0 0 1-.114.21.244.244 0 0 1-.193.085.25.25 0 0 1-.196-.085.589.589 0 0 1-.117-.21 1.245 1.245 0 0 1-.056-.27 2.597 2.597 0 0 1 0-.532c.01-.097.028-.186.056-.27a.589.589 0 0 1 .117-.209.249.249 0 0 1 .196-.085zm-6.729 3.073a.676.676 0 0 0-.335.078.661.661 0 0 0-.227.211.91.91 0 0 0-.127.31c-.027.118-.04.242-.04.373s.013.256.04.375a.93.93 0 0 0 .127.313.65.65 0 0 0 .227.215c.092.053.204.08.335.08a.655.655 0 0 0 .334-.08.65.65 0 0 0 .225-.215c.057-.09.1-.194.125-.313a1.75 1.75 0 0 0 .04-.375c0-.13-.014-.255-.04-.373a.931.931 0 0 0-.125-.31.658.658 0 0 0-.225-.21.667.667 0 0 0-.334-.08zm3.086 0a.675.675 0 0 0-.336.078.661.661 0 0 0-.226.211.907.907 0 0 0-.127.31 1.69 1.69 0 0 0-.04.373c0 .131.013.256.04.375a.928.928 0 0 0 .127.313c.058.09.134.162.226.215.093.053.205.08.336.08a.655.655 0 0 0 .334-.08.65.65 0 0 0 .224-.215c.058-.09.1-.194.126-.313a1.752 1.752 0 0 0 0-.748.94.94 0 0 0-.126-.31.657.657 0 0 0-.224-.21.667.667 0 0 0-.334-.08zm5.108 0a.675.675 0 0 0-.336.078.661.661 0 0 0-.226.211.91.91 0 0 0-.127.31c-.027.118-.04.242-.04.373s.013.256.04.375a.931.931 0 0 0 .127.313c.058.09.134.162.226.215.093.053.205.08.336.08.13 0 .243-.027.334-.08a.65.65 0 0 0 .224-.215c.058-.09.1-.194.126-.313a1.75 1.75 0 0 0 .04-.375c0-.13-.014-.255-.04-.373a.943.943 0 0 0-.126-.31.657.657 0 0 0-.224-.21.668.668 0 0 0-.334-.08zm-6.658.05l-.61.448.227.311.346-.266v1.362h.438v-1.856zm3.068 0l-.61.448.227.311.346-.266v1.362h.438v-1.856zm5.108 0l-.611.448.228.311.346-.266v1.362h.438v-1.856zm-9.712.322c.058 0 .105.02.14.062a.421.421 0 0 1 .083.151.96.96 0 0 1 .04.196 1.932 1.932 0 0 1 0 .386.954.954 0 0 1-.04.197.421.421 0 0 1-.083.152.176.176 0 0 1-.14.061.18.18 0 0 1-.141-.06.427.427 0 0 1-.085-.153.887.887 0 0 1-.041-.197 1.96 1.96 0 0 1 0-.386.893.893 0 0 1 .04-.196.42.42 0 0 1 .086-.151.181.181 0 0 1 .141-.062zm3.086 0c.058 0 .104.02.14.062a.421.421 0 0 1 .082.151.94.94 0 0 1 .04.196 1.906 1.906 0 0 1 0 .386.93.93 0 0 1-.04.197.421.421 0 0 1-.082.152.176.176 0 0 1-.14.061.18.18 0 0 1-.141-.06.42.42 0 0 1-.086-.153.846.846 0 0 1-.04-.197 1.965 1.965 0 0 1-.011-.195c0-.057.004-.121.01-.191a.849.849 0 0 1 .041-.196.42.42 0 0 1 .086-.151.182.182 0 0 1 .141-.062zm5.108 0c.058 0 .104.02.14.062a.421.421 0 0 1 .082.151.92.92 0 0 1 .04.196 1.963 1.963 0 0 1 0 .386.943.943 0 0 1-.04.197.421.421 0 0 1-.082.152.177.177 0 0 1-.14.061.18.18 0 0 1-.142-.06.437.437 0 0 1-.085-.153.95.95 0 0 1-.04-.197 1.965 1.965 0 0 1-.011-.195c0-.057.004-.121.01-.191a.959.959 0 0 1 .04-.196.47.47 0 0 1 .086-.151.181.181 0 0 1 .142-.062zm-1.684 1.814a.675.675 0 0 0-.336.079.66.66 0 0 0-.227.21.91.91 0 0 0-.127.31 1.731 1.731 0 0 0 0 .748.939.939 0 0 0 .127.314c.059.09.134.162.227.215.093.053.205.08.336.08a.66.66 0 0 0 .334-.08.648.648 0 0 0 .224-.215c.058-.09.1-.195.126-.314a1.737 1.737 0 0 0-.001-.747.928.928 0 0 0-.125-.31.65.65 0 0 0-.224-.211.668.668 0 0 0-.334-.079zm3.063 0a.676.676 0 0 0-.336.079.664.664 0 0 0-.227.21.906.906 0 0 0-.127.31 1.74 1.74 0 0 0 0 .748.936.936 0 0 0 .127.314.66.66 0 0 0 .227.215c.092.053.204.08.336.08a.654.654 0 0 0 .334-.08.648.648 0 0 0 .223-.215c.058-.09.1-.195.126-.314a1.74 1.74 0 0 0 0-.747.928.928 0 0 0-.126-.31.65.65 0 0 0-.223-.211.666.666 0 0 0-.334-.079zm-1.545.05l-.611.448.228.312.346-.267v1.363h.438v-1.856zm-1.518.323c.057 0 .104.02.14.061a.42.42 0 0 1 .082.152.91.91 0 0 1 .04.195 1.966 1.966 0 0 1 0 .387.951.951 0 0 1-.04.197.421.421 0 0 1-.082.152.177.177 0 0 1-.14.06.18.18 0 0 1-.142-.06.428.428 0 0 1-.085-.152.914.914 0 0 1-.04-.197 1.96 1.96 0 0 1-.011-.195c0-.058.003-.122.01-.192a.923.923 0 0 1 .041-.195c.02-.06.048-.11.085-.152a.181.181 0 0 1 .142-.061zm3.063 0c.057 0 .104.02.14.061a.42.42 0 0 1 .082.152.94.94 0 0 1 .04.195 1.91 1.91 0 0 1 0 .387.93.93 0 0 1-.04.197.422.422 0 0 1-.083.152.175.175 0 0 1-.14.06.18.18 0 0 1-.141-.06.423.423 0 0 1-.085-.152.907.907 0 0 1-.04-.197 1.95 1.95 0 0 1 0-.387.915.915 0 0 1 .04-.195c.02-.06.048-.11.085-.152a.182.182 0 0 1 .142-.061zm-9.713.185a.465.465 0 0 0-.232.055.456.456 0 0 0-.157.146.627.627 0 0 0-.089.215 1.168 1.168 0 0 0-.027.259c0 .09.009.177.027.26a.648.648 0 0 0 .089.216c.04.063.093.112.157.149a.459.459 0 0 0 .232.056c.09 0 .168-.02.231-.056a.45.45 0 0 0 .156-.149.67.67 0 0 0 .087-.217 1.218 1.218 0 0 0 0-.518.647.647 0 0 0-.087-.215.448.448 0 0 0-.156-.146.458.458 0 0 0-.23-.055zm1.052.035l-.423.31.158.217.24-.185v.944h.303v-1.286zm-1.052.224c.04 0 .073.014.097.042a.284.284 0 0 1 .057.105.69.69 0 0 1 .028.136c.004.049.007.092.007.133 0 .04-.003.086-.007.135a.684.684 0 0 1-.028.136.285.285 0 0 1-.057.105.123.123 0 0 1-.097.043.125.125 0 0 1-.098-.043.298.298 0 0 1-.059-.105.612.612 0 0 1-.028-.136 1.39 1.39 0 0 1 0-.268.62.62 0 0 1 .028-.136.297.297 0 0 1 .06-.105.125.125 0 0 1 .097-.042zm3.775 1.394a.463.463 0 0 0-.232.054.452.452 0 0 0-.157.146.621.621 0 0 0-.088.214 1.19 1.19 0 0 0 0 .519.641.641 0 0 0 .088.217.46.46 0 0 0 .157.15.458.458 0 0 0 .232.054.454.454 0 0 0 .232-.055.45.45 0 0 0 .155-.149.664.664 0 0 0 .087-.217 1.189 1.189 0 0 0 0-.519.642.642 0 0 0-.087-.214.446.446 0 0 0-.155-.146.459.459 0 0 0-.232-.054zm1.052.034l-.423.31.158.216.24-.185v.945h.303V22.68zm-1.052.223c.04 0 .073.014.098.043a.3.3 0 0 1 .057.105.643.643 0 0 1 .027.135 1.31 1.31 0 0 1 0 .268.654.654 0 0 1-.027.137.307.307 0 0 1-.057.105.124.124 0 0 1-.098.042.125.125 0 0 1-.098-.042.293.293 0 0 1-.059-.105.618.618 0 0 1-.028-.137 1.364 1.364 0 0 1 0-.268.612.612 0 0 1 .028-.135.287.287 0 0 1 .06-.105.123.123 0 0 1 .097-.043z" fill="red"></path>
                    </svg>
                  </a>                
                `
              },
              {
                html: 
                `
                  <a href="https://app.hackthebox.com/profile/390130">
                    <svg 
                    width="50px" 
                    height="50px" 
                    viewBox="0 0 1024 1024" 
                    xmlns="http://www.w3.org/2000/svg" fill="#000000">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="512" cy="512" r="512" style="fill:#9fef00"></circle> <path d="M506.5 256.6c2.9-.8 5.9-.7 8.9-.4 3.8.4 7 2.8 10.3 4.6 66.5 38.4 133 76.9 199.6 115.3 6.4 3.2 11.1 10 10.7 17.4v237.7c.2 6.7-4 12.9-9.7 16-67.9 39.2-135.8 78.5-203.7 117.7-6.1 4-14.5 4.1-20.7.3-66.7-38.5-133.3-77-200-115.6-3.3-2-6.9-3.6-9.4-6.6-3.1-3.4-4.7-8-4.5-12.6V392.6c-.2-6.6 4-12.8 9.6-15.9 67.1-38.7 134.1-77.5 201.1-116.2 2.6-1.4 5-3.1 7.8-3.9zm3.9 47.5c-1.5.2-2.8 1-4.1 1.7-46.2 26.7-92.4 53.3-138.5 80.1-5.5 3.1-5.5 12.1.2 15.1 46.3 26.9 92.7 53.6 139.1 80.4 2.9 1.9 6.9 1.9 9.8 0 46.4-26.8 92.8-53.5 139.1-80.4 5.6-3 5.7-12 .1-15.1-46.3-26.8-92.7-53.6-139.1-80.4-1.9-1.3-4.3-1.8-6.6-1.4zM336.5 442.4c-3.5 1.3-5.8 5.1-5.6 8.8v159.9c-.1 3.6 2.1 6.9 5.2 8.5 46.2 26.7 92.3 53.4 138.5 80 5.7 3.5 13.6-1.4 13.2-8v-160c.1-3.3-1.6-6.5-4.4-8.2l-138.6-80.1c-2.4-1.5-5.6-2.2-8.3-.9zm344.8-.1c-4.1 1.9-7.8 4.4-11.8 6.6-42.8 24.7-85.6 49.5-128.4 74.2-3.2 1.6-5.1 5-5 8.6v159.9c-.4 6.6 7.5 11.5 13.2 8.1 46.2-26.7 92.4-53.4 138.5-80 3.1-1.5 5.4-4.9 5.2-8.4V450.5c.1-5.8-6.4-10.4-11.7-8.2z" style="fill:#fff"></path> </g></svg>
                  </a>
                `,
              },
            ],
          },
          {
            title: 'Mon travail',
            items: [
              {
                html: 
                `
                  <a href="https://www.youtube.com/@chevalerie33">
                    <svg 
                      width="50px" 
                      height="50px" 
                      viewBox="0 0 72 72" 
                      stroke="currentColor"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"> 
                      <title>Youtube</title>            
                      <path d="M36,72 L36,72 C55.882251,72 72,55.882251 72,36 L72,36 C72,16.117749 55.882251,-3.65231026e-15 36,0 L36,0 C16.117749,3.65231026e-15 -2.4348735e-15,16.117749 0,36 L0,36 C2.4348735e-15,55.882251 16.117749,72 36,72 Z" fill="#FF0002"/> <path d="M31.044,42.269916 L31.0425,28.6877416 L44.0115,35.5022437 L31.044,42.269916 Z M59.52,26.3341627 C59.52,26.3341627 59.0505,23.003199 57.612,21.5363665 C55.7865,19.610299 53.7405,19.6012352 52.803,19.4894477 C46.086,19 36.0105,19 36.0105,19 L35.9895,19 C35.9895,19 25.914,19 19.197,19.4894477 C18.258,19.6012352 16.2135,19.610299 14.3865,21.5363665 C12.948,23.003199 12.48,26.3341627 12.48,26.3341627 C12.48,26.3341627 12,30.2467232 12,34.1577731 L12,37.8256098 C12,41.7381703 12.48,45.6492202 12.48,45.6492202 C12.48,45.6492202 12.948,48.9801839 14.3865,50.4470165 C16.2135,52.3730839 18.612,52.3126583 19.68,52.5135736 C23.52,52.8851913 36,53 36,53 C36,53 46.086,52.9848936 52.803,52.4954459 C53.7405,52.3821478 55.7865,52.3730839 57.612,50.4470165 C59.0505,48.9801839 59.52,45.6492202 59.52,45.6492202 C59.52,45.6492202 60,41.7381703 60,37.8256098 L60,34.1577731 C60,30.2467232 59.52,26.3341627 59.52,26.3341627 L59.52,26.3341627 Z" fill="#FFF"/> </g> </g>
                    </svg>
                  </a>
                `,
              },
              {
                html:
                `
                  <a href="https://github.com/Chevalerie42/">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="50px" 
                      height="50^x" 
                      viewBox="0 0 24 24">
                      <title>GitHub</title>
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                `,
              },
            ],
          },
          {
            title: 'Contact',
            items: [
              {
                html: 
                `
                  <a href="https://discord.gg/T6vAdtGBhb">
                    <svg 
                      width="50px" 
                      height="50px" 
                      viewBox="0 0 100 100" 
                      version="1.1" 
                      xml:space="preserve" 
                      xmlns="http://www.w3.org/2000/svg" 
                      xmlns:xlink="http://www.w3.org/1999/xlink" 
                      fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                      <g id="SVGRepo_iconCarrier"> <style type="text/css"> .st0{fill:#FFFFFF;} .st1{fill:#F5BB41;} .st2{fill:#2167D1;} .st3{fill:#3D84F3;} .st4{fill:#4CA853;} .st5{fill:#398039;} .st6{fill:#D74F3F;} .st7{fill:#D43C89;} .st8{fill:#B2005F;} .st9{fill:none;stroke:#000000;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;} .st10{fill-rule:evenodd;clip-rule:evenodd;fill:none;stroke:#000000;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;} .st11{fill-rule:evenodd;clip-rule:evenodd;fill:none;stroke:#040404;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;} .st12{fill-rule:evenodd;clip-rule:evenodd;} .st13{fill-rule:evenodd;clip-rule:evenodd;fill:#040404;} .st14{fill:url(#SVGID_1_);} .st15{fill:url(#SVGID_2_);} .st16{fill:url(#SVGID_3_);} .st17{fill:url(#SVGID_4_);} .st18{fill:url(#SVGID_5_);} .st19{fill:url(#SVGID_6_);} .st20{fill:url(#SVGID_7_);} .st21{fill:url(#SVGID_8_);} .st22{fill:url(#SVGID_9_);} .st23{fill:url(#SVGID_10_);} .st24{fill:url(#SVGID_11_);} .st25{fill:url(#SVGID_12_);} .st26{fill:url(#SVGID_13_);} .st27{fill:url(#SVGID_14_);} .st28{fill:url(#SVGID_15_);} .st29{fill:url(#SVGID_16_);} .st30{fill:url(#SVGID_17_);} .st31{fill:url(#SVGID_18_);} .st32{fill:url(#SVGID_19_);} .st33{fill:url(#SVGID_20_);} .st34{fill:url(#SVGID_21_);} .st35{fill:url(#SVGID_22_);} .st36{fill:url(#SVGID_23_);} .st37{fill:url(#SVGID_24_);} .st38{fill:url(#SVGID_25_);} .st39{fill:url(#SVGID_26_);} .st40{fill:url(#SVGID_27_);} .st41{fill:url(#SVGID_28_);} .st42{fill:url(#SVGID_29_);} .st43{fill:url(#SVGID_30_);} .st44{fill:url(#SVGID_31_);} .st45{fill:url(#SVGID_32_);} .st46{fill:url(#SVGID_33_);} .st47{fill:url(#SVGID_34_);} .st48{fill:url(#SVGID_35_);} .st49{fill:url(#SVGID_36_);} .st50{fill:url(#SVGID_37_);} .st51{fill:url(#SVGID_38_);} .st52{fill:url(#SVGID_39_);} .st53{fill:url(#SVGID_40_);} .st54{fill:url(#SVGID_41_);} .st55{fill:url(#SVGID_42_);} .st56{fill:url(#SVGID_43_);} .st57{fill:url(#SVGID_44_);} .st58{fill:url(#SVGID_45_);} .st59{fill:#040404;} .st60{fill:url(#SVGID_46_);} .st61{fill:url(#SVGID_47_);} .st62{fill:url(#SVGID_48_);} .st63{fill:url(#SVGID_49_);} .st64{fill:url(#SVGID_50_);} .st65{fill:url(#SVGID_51_);} .st66{fill:url(#SVGID_52_);} .st67{fill:url(#SVGID_53_);} .st68{fill:url(#SVGID_54_);} .st69{fill:url(#SVGID_55_);} .st70{fill:url(#SVGID_56_);} .st71{fill:url(#SVGID_57_);} .st72{fill:url(#SVGID_58_);} .st73{fill:url(#SVGID_59_);} .st74{fill:url(#SVGID_60_);} .st75{fill:url(#SVGID_61_);} .st76{fill:url(#SVGID_62_);} .st77{fill:none;stroke:#000000;stroke-width:3;stroke-miterlimit:10;} .st78{fill:none;stroke:#FFFFFF;stroke-miterlimit:10;} .st79{fill:#4BC9FF;} .st80{fill:#5500DD;} .st81{fill:#FF3A00;} .st82{fill:#E6162D;} .st83{fill:#F1F1F1;} .st84{fill:#FF9933;} .st85{fill:#B92B27;} .st86{fill:#00ACED;} .st87{fill:#BD2125;} .st88{fill:#1877F2;} .st89{fill:#6665D2;} .st90{fill:#CE3056;} .st91{fill:#5BB381;} .st92{fill:#61C3EC;} .st93{fill:#E4B34B;} .st94{fill:#181EF2;} .st95{fill:#FF0000;} .st96{fill:#FE466C;} .st97{fill:#FA4778;} .st98{fill:#FF7700;} .st99{fill-rule:evenodd;clip-rule:evenodd;fill:#1F6BF6;} .st100{fill:#520094;} .st101{fill:#4477E8;} .st102{fill:#3D1D1C;} .st103{fill:#FFE812;} .st104{fill:#344356;} .st105{fill:#00CC76;} .st106{fill-rule:evenodd;clip-rule:evenodd;fill:#345E90;} .st107{fill:#1F65D8;} .st108{fill:#EB3587;} .st109{fill-rule:evenodd;clip-rule:evenodd;fill:#603A88;} .st110{fill:#E3CE99;} .st111{fill:#783AF9;} .st112{fill:#FF515E;} .st113{fill:#FF4906;} .st114{fill:#503227;} .st115{fill:#4C7BD9;} .st116{fill:#69C9D0;} .st117{fill:#1B92D1;} .st118{fill:#EB4F4A;} .st119{fill:#513728;} .st120{fill:#FF6600;} .st121{fill-rule:evenodd;clip-rule:evenodd;fill:#B61438;} .st122{fill:#FFFC00;} .st123{fill:#141414;} .st124{fill:#94D137;} .st125{fill-rule:evenodd;clip-rule:evenodd;fill:#F1F1F1;} .st126{fill-rule:evenodd;clip-rule:evenodd;fill:#66E066;} .st127{fill:#2D8CFF;} .st128{fill:#F1A300;} .st129{fill:#4BA2F2;} .st130{fill:#1A5099;} .st131{fill:#EE6060;} .st132{fill-rule:evenodd;clip-rule:evenodd;fill:#F48120;} .st133{fill:#222222;} .st134{fill:url(#SVGID_63_);} .st135{fill:#0077B5;} .st136{fill:#FFCC00;} .st137{fill:#EB3352;} .st138{fill:#F9D265;} .st139{fill:#F5B955;} .st140{fill:#DD2A7B;} .st141{fill:#66E066;} .st142{fill:#EB4E00;} .st143{fill:#FFC794;} .st144{fill:#B5332A;} .st145{fill:#4E85EB;} .st146{fill:#58A45C;} .st147{fill:#F2BC42;} .st148{fill:#D85040;} .st149{fill:#464EB8;} .st150{fill:#7B83EB;} </style> <g id="Layer_1"></g> <g id="Layer_2"> <g> <g> 
                      <path class="st89" d="M85.22,24.958c-11.459-8.575-22.438-8.334-22.438-8.334l-1.122,1.282 c13.623,4.087,19.954,10.097,19.954,10.097c-19.491-10.731-44.317-10.654-64.59,0c0,0,6.571-6.331,20.996-10.418l-0.801-0.962 c0,0-10.899-0.24-22.438,8.334c0,0-11.54,20.755-11.54,46.319c0,0,6.732,11.54,24.442,12.101c0,0,2.965-3.526,5.369-6.571 c-10.177-3.045-14.024-9.376-14.024-9.376c6.394,4.001,12.859,6.505,20.916,8.094c13.108,2.698,29.413-0.076,41.591-8.094 c0,0-4.007,6.491-14.505,9.456c2.404,2.965,5.289,6.411,5.289,6.411c17.71-0.561,24.441-12.101,24.441-12.02 C96.759,45.713,85.22,24.958,85.22,24.958z M35.055,63.824c-4.488,0-8.174-3.927-8.174-8.815 c0.328-11.707,16.102-11.671,16.348,0C43.229,59.897,39.622,63.824,35.055,63.824z M64.304,63.824 c-4.488,0-8.174-3.927-8.174-8.815c0.36-11.684,15.937-11.689,16.348,0C72.478,59.897,68.872,63.824,64.304,63.824z"></path> </g> </g> </g> </g>
                    </svg>
                  </a>
                `,
              },
              {
                html:
                `
                  <a href="mailto:chevalerie@keemail.me">
                    <svg 
                      height="50px" 
                      width="50px" 
                      version="1.1" 
                      id="_x32_" 
                      xmlns="http://www.w3.org/2000/svg" 
                      xmlns:xlink="http://www.w3.org/1999/xlink" 
                      viewBox="0 0 512 512" xml:space="preserve" 
                      fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <style type="text/css"> .st0{fill:#000000;} </style> <g> 
                      <path class="st0" d="M490.237,90.753c-13.382-13.412-32.076-21.764-52.532-21.756H74.295C33.258,69.012,0.015,102.247,0,143.284 v225.432c0.015,41.036,33.258,74.272,74.295,74.286h363.41c20.456,0.008,39.15-8.344,52.532-21.755 C503.648,407.866,512,389.171,512,368.716V143.284C512,122.829,503.648,104.135,490.237,90.753z M74.295,107.04h363.41 c8.701,0.008,16.466,3.136,22.714,8.21L256,269.478L51.58,115.25C57.829,110.175,65.594,107.047,74.295,107.04z M38.042,368.716 V143.284c0.016-5.826,1.486-11.205,3.894-16.05l141.813,129.998L41.55,384.044C39.365,379.393,38.058,374.252,38.042,368.716z M437.705,404.96H74.295c-8.204-0.007-15.581-2.771-21.637-7.319l150.618-121.825l22.818,21.711 c16.911,15.529,42.902,15.529,59.813,0l22.818-21.711l150.61,121.825C453.279,402.189,445.901,404.953,437.705,404.96z M473.958,368.716c-0.016,5.535-1.322,10.677-3.508,15.328L328.251,257.233l141.805-129.998c2.415,4.844,3.886,10.217,3.901,16.05 V368.716z"></path> </g> </g>
                    </svg>
                  </a>
                `,
              }
            ],
          },
        ],
        logo: {
          alt: 'Chevalerie',
          src: 'img/Page_Accueil/Logo_Cyber-Xplorer2.svg',
          href: 'https://chevalerie42.github.io',
          height: '100',
        },

         copyright: `Copyright © ${new Date().getFullYear()} & tout Droit d'Auteur réservé a "Cyber-Xplorer" ! ⚔️ <br><a class="footer__link-item" href="/Mentions_Legale" target="_blank">Mention légales 🚔</a>`,

},

      prism: {
        theme: prismThemes.shadesOfPurple,
        darkTheme: prismThemes.shadesOfPurple,
      //  defaultLanguage: 'bash',
        additionalLanguages: ['markup','php','powershell','bash','apacheconf','asciidoc','awk','batch','css','csv','docker','editorconfig','git','http','java','javascript','c','csharp','cpp','cmake','ini','json','log','mermaid','mongodb','python','jsx','tsx','regex','ruby','rust','splunk-spl','sql','vim','yaml'],
      },

      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },

      metadata: [{
        name: "name", content: "Cyber-Xplorer"
      },
      {
        name: "title", content: "Cyber-Xplorer !"
      },
      {
        name: "desciption", content: "Site de partage de tuto open source et gratuit sur l'informatique. Du systéme au réseau en passant par cloud ! Pentest et CTF au rendez-vous ! <3"
      },
      {
        name: "keywords", content: "ordinateur, computer, network, réseau, réseaux, systéme, système, system, security, sécurité, cybersécu, cyber-sécu, cyber sécurité, cyber-sécurité, CTF, open source, open-source, informatique, informatic, chevalerie, chevalerie33, chevalerie42, chevalerie666"
      },
      {
        name: "robots", content:"all"
      },
      {
        name:"viewport", content:"width=device-width, initial-scale=1, maximum-scale:1"
      },
      {
        name: "author", content: "Chevalerie"
      },
      {
        name: "copyright", content: "Copyright © ${new Date().getFullYear()} & tout Droit d'Auteur réservé a 'Cyber-Xplorer' ! ⚔️"
      },
      {
        property:"og:title", content:"Cyber-Xplorer !"
      },
      {
        property:"og:description", content:"Site de partage de tuto open source et gratuit sur l'informatique. Du systéme au réseau en passant par cloud ! Pentest et CTF au rendez-vous ! <3"
      },
      {
        property:"og:url", content:"https://chevalerie.github.io/"
      },
      {
        property:"og:image", content:"https://chevalerie42.github.io/img/Page_Accueil/Logo_Cyber-Xplorer.svg"
      },
      {
        name:"twitter:card", content:"summary_large_image"
      },
      {
        name:"twitter:title", content:"Cyber-Xplorer !"
      },
      {
        name:"twitter:description", content:"Site de partage de tuto open source et gratuit sur l'informatique. Du systéme au réseau en passant par cloud ! Pentest et CTF au rendez-vous ! <3"
      },
      {
        name:"twitter:creator", content:"Chevalerie"
      },
      {
        name:"twitter:site", content:"https://chevalerie.github.io/"
      },
      {
        name:"twitter:image", content:"https://chevalerie42.github.io/img/Page_Accueil/Logo_Cyber-Xplorer.svg"
      },
    ],

    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
               },
            },

            zoom: {
              selector: '.markdown :not(em) > img',
              config: {
                // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
                background: {
                  light: 'rgb(255, 255, 255)',
                  dark: 'rgb(50, 50, 50)'
                }
              }
            },

    }),
};


export default config;
