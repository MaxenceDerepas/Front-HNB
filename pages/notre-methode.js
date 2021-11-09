import Layout from "../components/layout";
import Head from "next/head";
import styles from "../styles/OurMethode.module.css";
import Image from "next/image";
import Link from "next/link";
import Visuel from "../images/Heart-n-brain-parcours-de-Chloe.png";

export async function getStaticProps() {
    // Fetch data from external API
    const res = await fetch(`https://hnb-app.herokuapp.com/NotreMethode`);
    const data = await res.json();

    // Pass data to the page via props
    return { props: { data } };
}

export default function OurOffers({ data }) {
    return (
        <Layout>
            <Head>
                <title>
                    Notre méthode de coaching en anglais professionnel | Paris |
                    Heart n Brain
                </title>
                <meta name="robots" content="index,follow" />
                <meta name="googlebot" content="index,follow" />
                <meta property="og:image" content="/partage.png" />
                <meta property="og:image:width" content="600" />
                <meta property="og:image:height" content="313" />

                <link
                    rel="canonical"
                    href="https://front-hnb-ten.vercel.app/notre-methode"
                ></link>
                <meta http-equiv="Accept-CH" content="Viewport-Width, Width" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <meta property="og:site_name" content="Heart n Brain" />
                <meta property="og:type" content="website" />
                <meta
                    name="description"
                    content="Améliorer votre anglais professionnel grâce à la méthode de coaching Heart n Brain. Libérez-vous de vos blocages en anglais ! "
                />
                <meta
                    property="og:description"
                    content={`${data.description}`}
                />
                <meta
                    property="og:url"
                    content="https://www.heart-n-brain.com/notre-methode"
                ></meta>
                <meta
                    property="og:title"
                    content="Notre méthode de coaching en anglais professionnel | Paris | Heart n Brain"
                />
                <link rel="icon" href="/favicon-heart-n-brain.png" />
            </Head>
            <div className={styles.content}>
                <div className={styles.fondEcran}></div>
                <section className={styles.container}>
                    <div className={styles.padding}>
                        <div className={styles.rectangleWhiteLeft}>
                            <div className={styles.columnImage1}></div>
                            <div className={styles.column2Left}>
                                <h2 className={styles.h2Yellow}>
                                    accompagnement sur-mesure
                                </h2>
                                <p className={styles.textRectangle}>
                                    En format individuel ou en petits groupes,
                                    en présentiel ou à distance, nous
                                    construisons nos accompagnements selon vos
                                    besoins, pour répondre à votre objectif
                                    professionnel spécifique.
                                </p>
                            </div>
                        </div>
                        <div className={styles.rectangleWhiteRight}>
                            <div className={styles.column2Right}>
                                <h2 className={styles.h2Yellow}>
                                    outils pratiques et efficaces
                                </h2>
                                <p className={styles.textRectangle}>
                                    Nos outils ont été spécialement élaborés
                                    pour maîtriser les bonnes pratiques et la
                                    bonne posture dans des situations
                                    professionnelles concrètes (présenter en
                                    public, animer une réunion, gérer une
                                    situation délicate, vendre...).
                                </p>
                            </div>
                            <div className={styles.columnImage2}></div>
                        </div>
                        <div className={styles.rectangleWhiteLeft}>
                            <div className={styles.columnImage3}></div>
                            <div className={styles.column2Left}>
                                <h2 className={styles.h2Yellow}>
                                    coaching bienveillant et ludique
                                </h2>
                                <p
                                    id="exemple"
                                    className={styles.textRectangle}
                                >
                                    Nous plaçons la bienveillance au cœur de
                                    notre démarche pédagogique pour vous
                                    permettre de reprendre confiance en vos
                                    capacités. Nos exercices et supports de
                                    travail sont conçus pour apprendre en
                                    passant un bon moment !
                                </p>
                            </div>
                        </div>
                        <div className={styles.exemple}>
                            <div className={styles.separatorWhite}></div>

                            <h2 className={styles.h2}>
                                L’exemple concret de Chloé
                            </h2>
                            <p className={styles.text}>
                                <strong className={styles.strong}>
                                    Chloé est manager d'équipe dans un grand
                                    groupe industriel. Après 12 ans
                                    d’expérience, elle se voit proposer le poste
                                    de directrice de la zone Europe.
                                </strong>
                            </p>
                            <p className={styles.text}>
                                -{" "}
                                <span className={styles.italic}>
                                    «J'ai une superbe opportunité
                                    professionnelle pour vous Chloé ! En
                                    revanche c'est en anglais, mais ça ne vous
                                    fait pas peur n'est-ce pas ?»
                                </span>{" "}
                                Lui explique son supérieur hiérarchique.
                            </p>
                            <p className={styles.text}>
                                -{" "}
                                <span className={styles.italic}>
                                    « Hahaha… »
                                </span>{" "}
                                répond-elle, le sourire gêné.
                            </p>
                            <p className={styles.text}>
                                Car techniquement non, l'anglais ne fait pas
                                peur à Chloé. Sur le plan académique, elle en a
                                fait dix ans à l’école, se souvient de ses
                                verbes irréguliers et a même obtenu une bonne
                                note au TOEIC.
                            </p>
                            <p className={styles.text}>
                                Mais le problème n'est pas vraiment technique,
                                il est viscéral.
                            </p>
                            <p className={styles.text}>
                                Une nouvelle opportunité professionnelle c'est
                                déjà suffisamment effrayant mais en anglais,
                                elle n'est pas sûre d'avoir la crédibilité
                                nécessaire pour relever le défi.
                            </p>
                            <div className={styles.concept}>
                                <div className={styles.details}>
                                    <div
                                        style={{ marginBottom: "30.5px" }}
                                        className={styles.detail}
                                    >
                                        <h3 className={styles.h3Blue}>
                                            1. La séance d’essai (gratuite et
                                            sans engagement)
                                        </h3>
                                        <p
                                            style={{
                                                lineHeight: "17px",
                                                fontSize: "15px",
                                            }}
                                        >
                                            Pendant une heure, Chloé et sa coach
                                            vont faire connaissance et définir
                                            un parcours de coaching individuel
                                            professionnel adapté à l'objectif, à
                                            l’univers et aux blocages
                                            spécifiques de Chloé.
                                        </p>
                                    </div>
                                    <div
                                        style={{ marginBottom: "30.5px" }}
                                        className={styles.detail}
                                    >
                                        <h3 className={styles.h3DarkBlue}>
                                            2. La progression
                                        </h3>
                                        <p
                                            style={{
                                                lineHeight: "17px",
                                                fontSize: "15px",
                                                marginBottom: "20px",
                                            }}
                                        >
                                            Toutes les semaines pendant deux
                                            mois, Chloé et sa coach travaillent
                                            un sous-objectif (animer une réunion
                                            d'équipe, faire un feedback…) et/ou
                                            un blocage spécifique (répondre sans
                                            préparation, rester concentrée…).
                                        </p>
                                        <p>
                                            ​ Chaque séance d’1h30 (en
                                            présentiel ou à distance) se déroule
                                            en 4 temps :
                                        </p>

                                        <ul className={styles.ul}>
                                            <li>
                                                Passer à l’anglais en douceur
                                                avec un échauffement
                                            </li>
                                            <li>
                                                Appréhender l’outil dans un
                                                univers lexical qui met Chloé à
                                                l’aise
                                            </li>
                                            <li>
                                                Mettre en pratique dans son
                                                univers professionnel
                                            </li>
                                            <li>
                                                Synthétiser et auto-évaluer sa
                                                motivation et l’atteinte de son
                                                objectif
                                            </li>
                                        </ul>
                                    </div>
                                    <div className={styles.detail}>
                                        <h3 className={styles.h3Yellow}>
                                            3. Des résultats mesurables et
                                            certifiéS
                                        </h3>
                                        <p style={{ lineHeight: "17px" }}>
                                            Lors de la séance finale, quand nous
                                            avons demandé à Chloé comment elle
                                            se sentait à l'idée de prendre son
                                            nouveau poste, elle nous a répondu :{" "}
                                            <span className={styles.italic}>
                                                “Super ! Je suis d’autant plus à
                                                l’aise que j’ai enrichi ma boite
                                                à outils. Et en ce qui concerne
                                                l’anglais… J’ai déjà eu peur de
                                                l’anglais moi ? Hahaha !”
                                            </span>
                                        </p>
                                    </div>
                                    ​
                                </div>
                                <div className={styles.image}>
                                    <Image
                                        src={Visuel}
                                        alt="Logo heart-n-brain"
                                        title="heart-n-brain"
                                    />
                                </div>
                            </div>
                            <p className={styles.p}>
                                Vous souhaitez avoir plus de détails sur le
                                déroulement du coaching, le contenu des séances,
                                n’hésitez pas à consulter{" "}
                                <Link href="/faq">
                                    <a className={styles.a}>notre FAQ</a>
                                </Link>
                            </p>
                            <p className={styles.p}>
                                Envie de nous rencontrer ?{" "}
                                <Link href="/#contact">
                                    <a className={styles.a}>
                                        Contactez-nous pour demander votre
                                        séance d’essai gratuite.
                                    </a>
                                </Link>
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    );
}
