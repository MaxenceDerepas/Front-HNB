import Layout from "../components/layout";
import Head from "next/head";
import styles from "../styles/Individuel.module.css";
import Image from "next/image";
import Link from "next/link";

import Palette from "../images/Palette.png";
import Pin from "../images/pin-heart-n-brain.png";
import Point from "../images/Point.png";
import Parcours from "../images/parcours-indiv.png";

export async function getStaticProps() {
    // Fetch data from external API
    const res = await fetch(`https://hnb-app.herokuapp.com/Individuel`);
    const data = await res.json();

    // Pass data to the page via props
    return { props: { data } };
}

export default function Individual({ data }) {
    return (
        <Layout>
            <Head>
                <title>
                    Coaching anglais individuel particuliers | Paris | Heart n
                    Brain
                </title>
                <meta name="robots" content="index,follow" />
                <meta name="googlebot" content="index,follow" />

                <meta http-equiv="Accept-CH" content="Viewport-Width, Width" />
                <link
                    rel="canonical"
                    href="https://front-hnb.vercel.app/accompagnement-individuel"
                ></link>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <meta
                    name="description"
                    content="Notre concept de coaching en anglais professionnel se fonde sur une approche pédagogique à la fois bienveillante et opérationnelle."
                />
                <meta
                    property="og:title"
                    content="Coaching anglais individuel particuliers | Paris | Heart n Brain"
                />
                <meta
                    property="og:description"
                    content={`${data.description}`}
                />
                <meta
                    property="og:url"
                    content="https://www.heart-n-brain.com/accompagnement-individuel"
                ></meta>
                <meta property="og:site_name" content="Heart n Brain" />
                <meta property="og:type" content="website" />
                <link rel="icon" href="/favicon-heart-n-brain.png" />
            </Head>
            <section className={styles.content}>
                <img className={styles.fondEcran} src="/fond.webp" />

                <div className={styles.container}>
                    <div className={styles.parcours}>
                        <div className={styles.separatorWhite}></div>
                        <div className={styles.rectangleWhite}>
                            <h2 className={styles.h2Yellow}>
                                Une échéance professionnelle imminente ou
                                récurrente en anglais ?
                            </h2>
                            <p className={styles.p}>
                                Vous évoluez ou souhaitez évoluer dans un
                                contexte professionnel anglophone ou
                                international.
                            </p>
                            <p className={styles.p}>
                                Vous voulez vous assurer d'être aussi performant
                                en anglais qu'en français.
                            </p>
                            <h2 className={styles.h2Yellow}>
                                Vos appréhensions freinent votre évolution de
                                carrière ?
                            </h2>
                            <p className={styles.p}>
                                Vous souhaitez acquérir les compétences
                                communicationnelles en anglais nécessaires pour
                                relever de nouveaux défis.
                            </p>
                            <p className={styles.pEnd}>
                                Vous souhaitez certifier votre capacité à
                                communiquer en anglais dans une situation
                                professionnelle opérationnelle.
                            </p>
                        </div>
                        <div className={styles.separatorWhite}></div>
                        <h1 className={styles.h1}>
                            Votre parcours personnalisé
                        </h1>
                        <div className={styles.infos}>
                            <div className={styles.info}>
                                <Image
                                    alt="logo heart n brain"
                                    title="logo"
                                    src={Pin}
                                    height={30}
                                    width={30}
                                />
                                <p className={styles.textInfo}>
                                    <strong className={styles.strong}>
                                        Votre objectif et votre ambition
                                    </strong>
                                    <br />
                                    "J'ai identifié le défi que je souhaite
                                    relever et je connais mon échéance"
                                </p>
                            </div>
                            <div className={styles.info}>
                                <Image
                                    alt="logo heart n brain"
                                    title="logo"
                                    src={Palette}
                                    height={30}
                                    width={30}
                                />
                                <p className={styles.textInfo}>
                                    <strong className={styles.strong}>
                                        Vos univers lexicaux
                                    </strong>
                                    <br />
                                    "J'identifie les univers dans lesquels j'ai
                                    envie et besoin de m'améliorer"
                                </p>
                            </div>
                            <div className={styles.info}>
                                <Image
                                    alt="logo heart n brain"
                                    title="logo"
                                    src={Point}
                                    height={30}
                                    width={30}
                                />
                                <p className={styles.textInfo}>
                                    <strong className={styles.strong}>
                                        Vos freins
                                    </strong>
                                    <br />
                                    "J'identifie les freins qui m'empêchent
                                    d'être à l'aise et performant en anglais"
                                </p>
                            </div>
                        </div>
                        <div className={styles.img}>
                            <Image
                                src={Parcours}
                                alt="parcours individuel heart-n-brain"
                                title="heart-n-brain"
                            />
                        </div>
                        <Link href="/#contact">
                            <a className={styles.contact}>
                                Premiers échanges gratuits et sans engagement
                            </a>
                        </Link>
                    </div>
                    <div className={styles.exemple}>
                        <div className={styles.separatorBlack}></div>
                        <h1 className={styles.h1}>EXEMPLES D'ENJEUX</h1>
                        <div className={styles.infos}>
                            <div className={styles.info}>
                                <h2 className={styles.titleYellow}>
                                    PRÉSENTER UN PROJET EN ANGLAIS
                                </h2>
                                <p className={styles.infoText}>
                                    Charlotte travaille généralement en français
                                    mais entame une série de présentations en
                                    Europe pour soutenir son projet de l'année.
                                </p>
                                <p className={styles.infoText}>
                                    Elle a dû s’exprimer en anglais lors d’une
                                    réunion récente et s’est sentie mal à
                                    l’aise.
                                </p>
                                <p className={styles.infoText}>
                                    Elle veut donc aborder ces présentations
                                    avec sérénité car c’est un moment-clé pour
                                    asseoir sa légitimité.
                                </p>
                            </div>
                            <div className={styles.info}>
                                <h2 className={styles.titleBlue}>
                                    SE SENTIR CRÉDIBLE EN ANGLAIS
                                </h2>
                                <p className={styles.infoText}>
                                    Mickaël est directeur commercial, il anime
                                    de nombreuses réunions d'équipe et présente
                                    ses résultats en anglais.
                                </p>
                                <p className={styles.infoText}>
                                    Il sait se faire comprendre mais manque de
                                    synthèse et de précision qui lui
                                    permettraient de gagner en crédibilité.
                                </p>
                                <p className={styles.infoText}>
                                    Il cherche donc à retravailler sa pratique
                                    de l’anglais pour acquérir des réflexes et
                                    être plus efficace.
                                </p>
                            </div>
                            <div className={styles.info}>
                                <h2 className={styles.titleGrey}>
                                    CHANGER DE POSTE, ÉVOLUER
                                </h2>
                                <p className={styles.infoText}>
                                    Sylvia a l’opportunité de prendre une
                                    fonction dans une équipe qui mène parfois
                                    des projets internationaux.
                                </p>
                                <p className={styles.infoText}>
                                    Elle doit passer des entretiens en anglais
                                    alors qu'elle n'aime déjà pas tellement
                                    l'exercice en français.
                                </p>
                                <p className={styles.infoText}>
                                    Elle veut se préparer au mieux pour être à
                                    la hauteur de ce beau défi, tournant de son
                                    évolution de carrière.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.essai}>
                        <p className={styles.essaiText}>
                            <span className={styles.span}>
                                Séance d'essai gratuite
                            </span>
                            <br />
                            et sans engagement
                        </p>
                        <p className={styles.essaiText}>
                            <span className={styles.span}>Parcours adapté</span>
                            <br />
                            composé de plusieurs séances <br />
                            individuelles de coaching ou soutien ad hoc en face
                            à face et/ou à distance
                        </p>
                        <p className={styles.essaiText}>
                            <span className={styles.span}>
                                Séance de synthèse personnalisée d'1h
                            </span>
                            <br />
                            offerte en fin de parcours au delà de 9 heures de
                            coaching
                        </p>

                        <Link href="/#contact">
                            <a className={styles.a}>Contactez-nous</a>
                        </Link>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
