import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

export default function Presentation_Youtube () 
{
return(
    <div class="container text--center" id="Tutube">

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