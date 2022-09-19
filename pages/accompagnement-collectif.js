import Layout from "../components/layout";
import Head from "next/head";
import styles from "../styles/Collective.module.css";
import Image from "next/image";
import Link from "next/link";

import Parcours from "../images/parcours-collectif.png";

export async function getStaticProps() {
    // Fetch data from external API
    const res = await fetch(`https://hnb-app.herokuapp.com/Collectif`);
    const data = await res.json();

    // Pass data to the page via props
    return { props: { data } };
}

export default function Collective({ data }) {
    return (
        <Layout>
            <Head>
                <meta property="og:image" content="/partage.png" />
                <meta property="og:image:width" content="600" />
                <meta property="og:image:height" content="313" />

                <title>
                    Coaching anglais collectif entreprises | Paris | Heart n
                    Brain
                </title>
                <meta name="robots" content="index,follow" />
                <meta name="googlebot" content="index,follow" />
                <meta http-equiv="Accept-CH" content="Viewport-Width, Width" />
                <link
                    rel="canonical"
                    href="https://www.heart-n-brain.com/accompagnement-collectif"
                ></link>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <meta
                    name="description"
                    content="Améliorer votre anglais professionnel grâce à la méthode de coaching Heart n Brain. Libérez-vous de vos blocages en anglais ! "
                />
                <meta
                    property="og:title"
                    content="Coaching anglais collectif entreprises | Paris | Heart n
                    Brain"
                />
                <meta
                    property="og:description"
                    content={`${data.description}`}
                />
                <meta
                    property="og:url"
                    content="https://www.heart-n-brain.com/accompagnement-collectif"
                ></meta>
                <meta property="og:site_name" content="Heart n Brain" />
                <meta property="og:type" content="website" />
                <link rel="icon" href="/favicon-heart-n-brain.png" />
            </Head>
            <section className={styles.content}>
                <div className={styles.fondEcran}></div>
                <div className={styles.container}>
                    <div className={styles.accompagnement}>
                        <div className={styles.separatorWhite}></div>
                        <div className={styles.rectangleWhite}>
                            <h2 className={styles.h2Yellow}>
                                L’anglais est au cœur de vos enjeux actuels ou à
                                venir ?
                            </h2>
                            <p className={styles.p}>
                                Vous souhaitez que vos collaborateurs soient
                                aussi performants en anglais qu’en français.
                            </p>
                            <p className={styles.p}>
                                Vous voulez renforcer des compétences clés ou
                                approfondir un savoir-faire tout en stimulant la
                                collaboration en anglais.
                            </p>
                            <p className={styles.pEnd}>
                                Vous souhaitez leur proposer un accompagnement
                                collectif novateur.
                            </p>
                        </div>
                        <div className={styles.separatorWhite}></div>
                        <h1 className={styles.h1}>
                            UN ACCOMPAGNEMENT SUR MESURE
                        </h1>
                        <div className={styles.infos}>
                            <div className={styles.info}>
                                <p>
                                    Autour d’une thématique, nous proposons à
                                    vos équipes des rendez-vous courts,
                                    fréquents, en petits groupes pour adopter un
                                    outil ou un savoir-faire spécifique :{" "}
                                    <span className={styles.span}>
                                        les clubs.
                                    </span>
                                </p>
                            </div>
                            <div className={styles.info}>
                                <p>
                                    Nous construisons ensemble un parcours
                                    collectif efficace, sur plusieurs semaines,
                                    afin d’assurer l’adoption pérenne des bonnes
                                    pratiques.
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
                        <div className={styles.thematique}>
                            <div className={styles.separatorBlack}></div>
                            <h1 className={styles.h1}>NOS THÉMATIQUES CLEFS</h1>
                            <div className={styles.infos}>
                                <div className={styles.infoThematique}>
                                    <h2 className={styles.titleYellow}>
                                        PITCHER ET VENDRE EN EQUIPE
                                    </h2>
                                    <p className={styles.infoText}>
                                        Être inspirant et convaincant en anglais
                                        sur l’ensemble du parcours de vente, de
                                        la première rencontre jusqu'à la
                                        soutenance orale.
                                    </p>
                                    <p className={styles.infoText}>
                                        <span className={styles.textDark}>
                                            Exemples de sujets de clubs :
                                        </span>{" "}
                                        partager une histoire client, devenir
                                        ‘solution builder’, soutenir en
                                        équipe...
                                    </p>
                                </div>
                                <div className={styles.infoThematique}>
                                    <h2 className={styles.titleBlue}>
                                        DEFINIR ET RENFORCER SON LEADERSHIP
                                    </h2>
                                    <p className={styles.infoText}>
                                        Se sentir aussi à l’aise en anglais
                                        qu’en français pour fédérer les acteurs
                                        internationaux autour de projets communs
                                        porteurs de sens.
                                    </p>
                                    <p className={styles.infoText}>
                                        <span className={styles.textDark}>
                                            Exemples de sujets de clubs :
                                        </span>{" "}
                                        découvrir son style de leadership,
                                        parler de soi et de ses projets,
                                        partager un objectif…
                                    </p>
                                </div>
                                <div className={styles.infoThematique}>
                                    <h2 className={styles.titleGrey}>
                                        COLLABORER ET COMMUNIQUER EFFICACEMENT
                                    </h2>
                                    <p className={styles.infoText}>
                                        Maîtriser les codes d’une communication
                                        efficace et bienveillante, notamment en
                                        anglais, pour assurer le succès de vos
                                        enjeux collectifs.
                                    </p>
                                    <p className={styles.infoText}>
                                        <span className={styles.textDark}>
                                            Exemples de sujets de clubs :
                                        </span>{" "}
                                        structurer un échange, animer une
                                        réunion, convaincre et se mettre
                                        d’accord…
                                    </p>
                                </div>
                                <div className={styles.infoThematique}>
                                    <h2 className={styles.titleRed}>
                                        GÉRER LES SITUATIONS COMPLEXES
                                    </h2>
                                    <p className={styles.infoText}>
                                        Faire face à des interactions clients
                                        délicates (gestion de l’agressivité,
                                        situation de crise, etc.) tout en
                                        maintenant un haut niveau d’excellence.
                                    </p>
                                    <p className={styles.infoText}>
                                        <span className={styles.textDark}>
                                            Exemples de sujets de clubs :
                                        </span>{" "}
                                        adopter la bonne posture, traiter une
                                        objection, pratiquer la communication
                                        non violente…
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.essai}>
                            <p className={styles.essaiText}>
                                <span className={styles.span}>
                                    Nous définissons ensemble un parcours
                                    collectif qui répond à vos attentes
                                </span>
                                <br />
                                (nombre de personnes, occurrence, durée,
                                intensité de personnalisation des
                                clubs/ingénierie pédagogique nécessaire)
                            </p>
                            <p className={styles.essaiText}>
                                Des formats courts pour les CLUBS à distance (3
                                personnes maximum)
                            </p>
                            <p className={styles.essaiText}>
                                DES ATELIERS EN PRÉSENTIEL DE 4H (DE 2 À 6
                                PERSONNES)
                                <br />à distance, dans vos locaux ou un lieu de
                                votre choix
                            </p>

                            <Link href="/#contact">
                                <a className={styles.a}>Contactez-nous</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
