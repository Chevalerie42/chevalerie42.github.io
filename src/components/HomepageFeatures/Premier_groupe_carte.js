import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

export default function Premier_groupe_carte () 
{
    return (
        <div className={clsx('padding-vert--md','padding-left--md','margin-left--md','padding-right--md','padding-top--lg')} id="Catégories">

            <div className={clsx('text--center')}>
            <h1>Catégories </h1>
            <br />
            </div>

            <div className={clsx('row','text--center')}>
                
                    <div class="col col--3">
                        <div class="card-demo">
                            <div class="card">
                                <div class="card__image">
                                    <img
                                        alt="Photo d'un switch Ethernet pour illustrer la catégorie Réseau"
                                        src="img/Page_Accueil/Photo_Reseau.jpg"
                                        title="Tuto Réseau" />
                                </div>
                                <div class="card__body">
                                    <h4>Tuto Réseau</h4>
                                    <small>
                                        Ici nous parlerons de TCP/IP, OSI, et comment interconencter nos équipements
                                    </small>
                                </div>
                            <div class="card__footer">
                                <a href="/docs/Réseau/Intro_Reseau">
                                    <button class="button button--primary button--block">Visit</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col col--3">
                        <div class="card-demo">
                            <div class="card">
                                <div class="card__image">
                                    <img
                                        alt="Photo de rack de Disque Dur pour la catégorie Système"
                                        src="img/Page_Accueil/Photo_Systeme.jpg"
                                        title="Tuto Systéme" />
                                </div>
                                <div class="card__body">
                                    <h4>Tuto Systéme</h4>
                                    <small>
                                        De Windows à Linux, ainsi que tous les softs y passent. Construisons nos Infras !
                                    </small>
                                </div>
                            <div class="card__footer">
                                <a href="/docs/Système/Intro_Systeme">
                                    <button class="button button--primary button--block">Visit</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col col--3">
                        <div class="card-demo">
                            <div class="card">
                                <div class="card__image">
                                    <img
                                        alt="Image a la matrix avec ligne de code, une bonne illustration pour le developpement"
                                        src="img/Page_Accueil/Photo_Dev.jpg"
                                        title="Tuto Dev" />
                                </div>
                                <div class="card__body">
                                    <h4>Tuto Dev</h4>
                                    <small>
                                        Le Developpement ou l'art de créer des applications et automatiser des tâches
                                    </small>
                                </div>
                            <div class="card__footer">
                                <a href="/docs/Dev/Intro_Tuto_Dev">
                                    <button class="button button--primary button--block">Visit</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col col--3">
                        <div class="card-demo">
                            <div class="card">
                                <div class="card__image">
                                    <img
                                        alt="Un ordinateur cadenassé afin de le sécuriser"
                                        src="img/Page_Accueil/Photo_Securite.jpg"
                                        title="Tuto Securite" />
                                </div>
                                <div class="card__body">
                                    <h4>Tuto Sécurité</h4>
                                    <small>
                                        RedTeam / BlueTeam ainsi que sécurité tout court, tout se passe ici
                                    </small>
                                </div>
                            <div class="card__footer">
                                <a href="/docs/Sécurité/Intro_Securite">
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