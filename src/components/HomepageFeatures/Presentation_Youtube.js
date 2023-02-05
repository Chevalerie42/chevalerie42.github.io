import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

export default function Presentation_Youtube () 
{
return(
    <div class="container text--center" id="Tutube">

        <head>

        <title> Vidéo Youtube de présentation</title>

        <meta name="description" content="Vidéo Youtube de la présentation de Chevalerie ainsi que du projet 'Les Tutos de Chevalerie'" />
        <meta name="author" content= "Chevalerie" />
        <meta name="keywords" content="Youtube, Vidéo, Video, Presentation" />
        <meta name="robots" content="all" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />

        <meta property="og:type" content="Page" />
        <meta property="og:title" content="Vidéo Youtube de présentation" />
        <meta property="og:description" content="Vidéo Youtube de la présentation de Chevalerie ainsi que du projet 'Les Tutos de Chevalerie'" />
        <meta property="og:url" content="https://chevalerie.github.io/#Tutube" />
        <meta property="og:image" content="https://chevalerie42.github.io/img/Page_Accueil/Logo_Chevalerie.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Vidéo Youtube de présentation" />
        <meta name="twitter:description" content="Vidéo Youtube de la présentation de Chevalerie ainsi que du projet 'Les Tutos de Chevalerie'" />
        <meta name="twitter:creator" content="Chevalerie"/>
        <meta name="twitter:site" content="https://chevalerie.github.io/#Tutube" />
        <meta name="twitter:image" content="https://chevalerie42.github.io/img/Page_Accueil/Logo_Chevalerie.png" />

        </head>
        
        <h2 className={clsx('text--center','margin-top--md',)}>
            Pour aller plus loin :
        </h2>
        <br/>
            <div>
                <iframe 
                    alt="Vidéo de présentation sur ma chaine youtube"
                    width="75%" 
                    height="415" 
                    src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ" 
                    title="YouTube présentation" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                />
            </div>
        <br/>
    </div>

);
}