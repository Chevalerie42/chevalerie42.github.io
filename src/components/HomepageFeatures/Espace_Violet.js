import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

export default function Espace_Violet () 
// J'aurais tellement voulu trouver comment faire un "if theme sombre alors vouleur verte". Mais j'ai pas trouvé ^^
{
    return (
        <div 
            className={clsx('padding-vert--md')}
            style={{backgroundColor: 'rgb(177, 43, 171)'}}
        >
            <p>
                <font color="#b12bab">
                    Si tu lis ceci, tu remportes un petit prix. Rends-toi sur ce lien et aime-moi : 
                    https://tinyurl.com/K-Doo-2-cheche ! 
                    Je suis curieux de savoir si des gens iront ...                
                </font>
            </p>
        </div>
    )
}
