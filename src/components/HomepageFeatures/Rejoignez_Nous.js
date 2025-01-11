import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

export default function Rejoignez_Nous () 
{
    return (
        <div class="container text--center" id="Communauté">

        <h2 className={clsx('text--center','margin-top--md',)}>
            Envie d'aider ? :
        </h2>
        <br/>
        <img
            width="60%" 
            alt="GIF de la communauté de l'anneau"
            src="img/Page_Accueil/GIF_Rejoignez_Nous.gif"
            title="GIF Rejoignez nous !" 
        />
        <br/>
        <br />
        <p>
        Si vous souhaitez contribuer au projet, que vous soyez informaticien ou non, n'hésitez pas ! <br />
        <br />
        Que vous soyez développeur, opérateur de système, relecteur, correcteur d'orthographe, graphiste ou juriste, tout le monde peut aider !<br />
        <br />
        Et si vous souhaitez contribuer financièrement, cela me permettra de réinvestir dans le site : par exemple avec un nom de domaine ou un hébergement.<br />
        Mais aussi d'acheter différents produits pour créer d'autres tutos, comme Azure ou Fortinet (toujours en guise d'exemple). <br />
        <br />
        En somme, tout le monde est le bienvenu !<br />
        <br />
        </p>
        </div>
      );
}