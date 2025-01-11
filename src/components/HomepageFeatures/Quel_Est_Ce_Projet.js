import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

export default function Quel_Est_Ce_Projet () 
{
return(

    <div class="container text--center" id="Ce_Projet">

    <h2 className={clsx('text--center','margin-top--md')} >
    Quel est ce projet ?
    </h2>
    <br/>

    <div class="row row--no-gutters">
        <div class="col">
            <div class="col-demo">
                <p className={clsx('text--left','margin-left--none')}>
                Après des années d'apprentissage autodidacte, explorant une multitude de cours, 
                tutos et lab, j'ai accumulé une vaste collection de notes dans mon OneNote devenu 
                quelque peu chaotique. En reconnaissance envers la communauté généreuse et l'esprit 
                de l'open source, je souhaite aujourd'hui ajouter ma pierre à l'édifice. <br />                
                Je partage ici, touts mes connaissances et expériences à travers des cours que je rédigerais.
                Vous trouverez également mes write-ups pour les passionnés de cybersécurité. <br />                
                L'apprentissage est un voyage continu. Mon objectif est de transmettre tout ce que je sais <br />
                Merci de rejoindre cette aventure et de faire partie de cette communauté ! Chaque visiteur 
                et commentaire est une source de motivation. Continuons à apprendre et à grandir ensemble !
             <br />
                </p>
            </div>
        </div>

        <div class="col col--1">
            <div class="col-demo">
            </div>
        </div>

        <div class="col">
            <div class="col-demo">             
                <img
                    alt="Image de deux écrans avec du travail d'informatique en cours"
                    src="img/Page_Accueil/Photo_Poste_De_Travail.jpg"
                    title="Poste de Travail" 
                />
            </div>
        </div>
    </div>


</div>

    );
}