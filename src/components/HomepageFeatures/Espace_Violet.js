import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

export default function Espace_Violet () 
// J'aurais tellement voulu trouver comment faire un "if theme sombre alors vouleur verte". Mais j'ai pas trouvé ^^
{
    return (
    <div 
        className={clsx('padding-vert--none','padding-top--none','padding-bottom--none','padding-horiz--none','margin-top--none','margin-bottom--none','margin-vert--none','margin-horiz--none')}
        style={{backgroundColor: 'rgb(177, 43, 171)'}}
    >
        <p style={{ margin: '0', padding: '0' }}>
            <font color="#b12bab">
                Si tu lis ceci, tu remportes un petit prix. Rends-toi sur ce lien et aime-moi : 
                https://tinyurl.com/K-Doo-2-cheche ! 
                Je suis curieux de savoir si des gens liront ...                
            </font>
        </p>
    </div>
    )
}
