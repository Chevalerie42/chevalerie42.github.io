import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

export default function Second_groupe_carte () 
{
    return (

        <div className={clsx('padding-vert--md','padding-left--xl','margin-left--md','padding-right--md')}>
            <div className={clsx('row','text--center')}>

                    <div class="col col--3 col--offset-1">
                        <div class="card-demo">
                            <div class="card">
                                <div class="card__image">
                                    <img
                                        alt="Belle image d'un globe terrestre car le cloud nous interconnectent tous dans le monde"
                                        src="img/Page_Accueil/Photo_Cloud.jpg"
                                        title="Tuto Cloud" />
                                </div>
                                <div class="card__body">
                                    <h4>Tuto Cloud</h4>
                                    <small>
                                        Tous les services stockés sur internet, ce site WEB par exemple
                                    </small>
                                </div>
                            <div class="card__footer">
                                <a href="/docs/Cloud/Intro_Tuto_Cloud">
                                    <button class="button button--primary button--block">Visit</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col col--3 col--offset-0">
                        <div class="card-demo">
                            <div class="card">
                                <div class="card__image">
                                    <img
                                        alt="Deux informaticiens, un dev et un ops, en train de collaborer en mode devops"
                                        src="img/Page_Accueil/Photo_DevOps.jpg"
                                        title="Tuto DevOps" />
                                </div>
                                <div class="card__body">
                                    <h4>Tuto DevOps</h4>
                                    <small>
                                        Les Dev et les Ops se font la guerre, cette pratique cherche a les unirent
                                    </small>
                                </div>
                            <div class="card__footer">
                                <a href="/docs/DevOps/Intro_Tuto_DevOps">
                                    <button class="button button--primary button--block">Visit</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col col--3 col--offset-0">
                        <div class="card-demo">
                            <div class="card">
                                <div class="card__image">
                                    <img
                                        alt="Diagramme, ordinateur et collaboration, bref, de la gestion de projet"
                                        src="img/Page_Accueil/Photo_Gestion_De_Projet.jpg"
                                        title="Tuto Gestion de Projet" />
                                </div>
                                <div class="card__body">
                                    <h4>Tuto GESTION DE PROJET</h4>
                                    <small>
                                        Comment mettre en place un projet de A à Z avec notion juridique
                                    </small>
                                </div>
                            <div class="card__footer">
                                <a href="/docs/Gestion de Projet/Intro_Gestion_de_Projet">
                                    <button class="button button--primary button--block">Visit</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
