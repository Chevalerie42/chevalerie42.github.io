import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import styles from './index.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

import Espace_Violet from '@site/src/components/HomepageFeatures/Espace_Violet.js';
import Barre_Noir_Haut from '@site/src/components/HomepageFeatures/Barre_Noir_Haut.js';
import Barre_Noir_Bas from '@site/src/components/HomepageFeatures/Barre_Noir_Bas.js';

export default function Home() {
    const {siteConfig} = useDocusaurusContext();
    return (
      <Layout>
        <TEST_TCDOME />
        <Espace_Violet />
        <Barre_Noir_Bas />
      </Layout>
    );
  }

function TEST_TCDOME() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner,'padding-bottom--none','margin-bottom-none','padding-top--lg','margin-top-lg')}>
      <head>

      <title> Cyber-Xplorer </title>

      <meta name="description" content="Site de partage de tuto open source et gratuit sur l'informatique. Du systéme au réseau en passant par cloud ! Pentest et CTF au rendez-vous ! <3" />
      <meta name="author" content= "Chevalerie" />
      <meta name="keywords" content="CyberXplorer, Cyber-Xplorer, Réseau, Network, System, Système, Sécurité, security, Cybersecurity, cyber-security, Cloud, Dev, developper, developpement, developpment, project manager, Gestion de Projet, Réseau, Network, System, Système, Sécurité, security, Cybersecurity, cyber-security, Cloud, Dev, developper, developpement, developpment, project manager, Gestion de Projet, Réseau, Network, System, Système, Sécurité, security, Cybersecurity, cyber-security, Cloud, Dev, developper, developpement, developpment, project manager, Gestion de Projet ,ordinateur, computer, network, réseau, réseaux, systéme, système, system, security, sécurité, CTF, open source, open-source, informatique, informatic, chevalerie, chevalerie33, chevalerie42, chevalerie666" />

      <meta name="robots" content="all" />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />

      <meta property="og:type" content="Page" />
      <meta property="og:title" content="Cyber-Xplorer" />
      <meta property="og:description" content="Site de partage de tuto open source et gratuit sur l'informatique. Du systéme au réseau en passant par cloud ! Pentest et CTF au rendez-vous ! <3" />
      <meta property="og:url" content="https://chevalerie.github.io/" />
      <meta property="og:image" content="https://chevalerie42.github.io/img/Page_Accueil/Logo_Cyber-Xplorer.svg" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Cyber-Xplorer" />
      <meta name="twitter:description" content="Site de partage de tuto open source et gratuit sur l'informatique. Du systéme au réseau en passant par cloud ! Pentest et CTF au rendez-vous ! <3" />
      <meta name="twitter:creator" content="Chevalerie"/>
      <meta name="twitter:site" content="https://chevalerie.github.io/" />
      <meta name="twitter:image" content="https://chevalerie42.github.io/img/Page_Accueil/Logo_Cyber-Xplorer.svg" />

      </head>


        <div className={clsx('row','text--center','padding-left--md','padding-right--md','row--no-gutters','padding-bottom--none','margin-bottom-none')}
        >
          <div class="col">
            
<iframe width="100%" height="100%" src="https://www.youtube.com/embed/mOiKQF-6_ok" title="CAM1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
           
          </div>

          <div class="col">
            <div class="col-demo">
              <br />
                <h1 
                  className="hero__title">{siteConfig.title}
                </h1>
                <p className="hero__subtitle">
                  {siteConfig.tagline}
                </p>
                <img
                width="40%"
                height="40%"
                alt={siteConfig.title}
                className={clsx(styles.heroBannerLogo,)}
                src={useBaseUrl('img/Page_Accueil/Logo_Cyber-Xplorer2.svg')}
              />


            </div>
          </div>

        </div>


        
    </header>
  );
}
