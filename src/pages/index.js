import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
//import HomepageFeatures from '@site/src/components/HomepageFeatures';
import styles from './index.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';


import Espace_Violet from '@site/src/components/HomepageFeatures/Espace_Violet.js';
import Barre_Noir_Haut from '@site/src/components/HomepageFeatures/Barre_Noir_Haut.js';
import Barre_Noir_Bas from '@site/src/components/HomepageFeatures/Barre_Noir_Bas.js';
import Premier_groupe_carte from '@site/src/components/HomepageFeatures/Premier_groupe_carte.js';
import Second_groupe_carte from '@site/src/components/HomepageFeatures/Second_groupe_carte.js';
import Quel_Est_Ce_Projet from '@site/src/components/HomepageFeatures/Quel_Est_Ce_Projet.js';
import Qui_suis_je from '@site/src/components/HomepageFeatures/Qui_suis_je.js';
import Presentation_Youtube from '@site/src/components/HomepageFeatures/Presentation_Youtube.js';
import Rejoignez_Nous from '@site/src/components/HomepageFeatures/Rejoignez_Nous.js';

export default function Home() {
    const {siteConfig} = useDocusaurusContext();
    return (
      <Layout
        title={`Hello from ${siteConfig.title}`}
        description="Description will go into a meta tag in <head />">
        <HomepageHeader />
        <Barre_Noir_Haut />
        <Espace_Violet />
        <Barre_Noir_Bas />
        <Premier_groupe_carte />
        <Second_groupe_carte />
        <Quel_Est_Ce_Projet />
        <Qui_suis_je />
        <Presentation_Youtube />
        <Rejoignez_Nous />
      </Layout>
    );
  }

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <head>

      <title> Les Tutos de Chevalerie </title>

      <meta name="description" content="Site de partage de tuto open source et gratuit sur l'informatique. Du systéme au réseau en passant par cloud ! Pentest et CTF au rendez-vous ! <3" />
      <meta name="author" content= "Chevalerie" />
      <meta name="keywords" content="ordinateur, computer, network, réseau, réseaux, systéme, système, system, security, sécurité, CTF, open source, open-source, informatique, informatic, chevalerie, chevalerie33, chevalerie42, chevalerie666" />

      <meta name="robots" content="all" />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />

      <meta property="og:type" content="Page" />
      <meta property="og:title" content="Les Tutos de Chevalerie " />
      <meta property="og:description" content="Site de partage de tuto open source et gratuit sur l'informatique. Du systéme au réseau en passant par cloud ! Pentest et CTF au rendez-vous ! <3" />
      <meta property="og:url" content="https://chevalerie.github.io/" />
      <meta property="og:image" content="https://chevalerie42.github.io/img/Page_Accueil/Logo_Chevalerie.png" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Les Tutos de Chevalerie " />
      <meta name="twitter:description" content="Site de partage de tuto open source et gratuit sur l'informatique. Du systéme au réseau en passant par cloud ! Pentest et CTF au rendez-vous ! <3" />
      <meta name="twitter:creator" content="Chevalerie"/>
      <meta name="twitter:site" content="https://chevalerie.github.io/" />
      <meta name="twitter:image" content="https://chevalerie42.github.io/img/Page_Accueil/Logo_Chevalerie.png" />

      </head>        
        <div class="container">
            <div class="row row--no-gutters">
            <div className={clsx('col row--no-gutters','margin-left--xs')}>
                    <div className={clsx('col row--no-gutters','margin-left--xs')}>
	                    <img
                            alt={siteConfig.title}
                            className={clsx(styles.heroBannerLogo,)}
                            src={useBaseUrl('img/Page_Accueil/Logo_Chevalerie.png')}
                        />
	                </div>
                </div>
                <div class={clsx('col row--no-gutters','margin-left--lg','margin-right--xs')}>
                    <div class={clsx('col row--no-gutters','margin-left--lg','margin-right-xs')}>
                        <h1 
                            className="hero__title">{siteConfig.title}
                        </h1>
                        <br></br>
                        <br></br>
                        <p className="hero__subtitle">{siteConfig.tagline}</p>
                    </div>
                </div>
            </div>
        </div>
    </header>
  );
}