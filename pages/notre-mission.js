import Layout from "../components/layout";
import Head from "next/head";
import styles from "../styles/OurPhilosophy.module.css";
import Image from "next/image";
import Photo from "../images/photo-equipe-heart-n-brain.jpg";

export default function OurOffers() {
    return (
        <Layout>
            <Head>
                <title>Notre philosophie | Paris | Heart n Brain</title>

                <link
                    rel="canonical"
                    href="https://front-hnb.vercel.app/notre-philosophie"
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
                    content="Notre philosophie chez Heart n Brain : Se libérer de sa peur de parler anglais au travail et adopter les bons outils de communication en anglais pour s’ouvrir de nouvelles opportunités professionnelles. Venez découvrir l'histoire d'Heart n Brain, quelques mots sur ses coaches et leurs valeurs !"
                />
                <meta
                    property="og:url"
                    content="https://www.heart-n-brain.com/notre-philosophie"
                ></meta>

                <meta
                    property="og:title"
                    content="Notre Philosophie  | Paris | Heart n Brain"
                />
                <link rel="icon" href="/favicon-heart-n-brain.png" />
            </Head>
            <section className={styles.content}>
                <div className={styles.container}>
                    <div className={styles.title}>
                        <h1>
                            Dépasser vos blocages en anglais pour libérer votre
                            potentiel et maximiser votre performance
                        </h1>
                    </div>
                </div>
                <div className={styles.mission}>
                    <div className={styles.container}>
                        <div className={styles.padding}>
                            <div className={styles.separatorWhite}></div>

                            <h2 className={styles.h2}>NOTRE MISSION</h2>
                            <strong className={styles.strongTitle}>
                                En finir avec les blocages en anglais pour
                                libérer les talents
                            </strong>
                            <p className={styles.text}>
                                Après plusieurs années dans le conseil et la
                                formation, nous nous sommes rendu compte que la
                                peur de parler anglais était très souvent un
                                frein à l'efficacité et à l'évolution des
                                talents.{" "}
                            </p>
                            <p className={styles.text}>
                                Les cours d'anglais répondent à une partie du
                                besoin : comprendre et se faire comprendre.
                                <br />
                                Cependant, certaines personnes cherchent
                                davantage à se libérer de leur blocage et à
                                s'outiller pour être aussi performantes en
                                anglais qu'en français.
                            </p>
                            <p className={styles.text}>
                                Notre ambition, c'est de combattre le{" "}
                                <span className={styles.italique}>
                                    "Sorry I don't speak English very well"
                                </span>{" "}
                                en permettant à nos coachés de libérer leur
                                potentiel en anglais professionnel.
                            </p>
                        </div>
                    </div>
                </div>
                <div className={styles.container}>
                    <div className={styles.us}>
                        <div className={styles.padding}>
                            <div className={styles.separatorBlack}></div>

                            <h2 className={styles.h2}>NOUS</h2>
                            <strong className={styles.strong}>
                                Heart n Brain c’est deux coaches, Sarah et
                                Morgane,
                                <br />
                                passionnées d'anglais, formatrices et coaches
                                depuis plus de 10 ans
                            </strong>
                            <div className={styles.team}>
                                <Image
                                    src={Photo}
                                    width={830}
                                    height={600}
                                    objectFit={"cover"}
                                    alt="Photo team heart-n-brain"
                                    title="heart-n-brain"
                                />
                                <div className={styles.teamText}>
                                    <p className={styles.teamP}>
                                        Morgane a accompagné des clients CXO par
                                        le conseil, le coaching et la formation,
                                        sur tous les enjeux des Directions
                                        Commerciales, Relation Client et
                                        Marketing Digital.
                                    </p>
                                    <p className={styles.teamP}>
                                        Dynamique et empathique, Morgane vous
                                        fera sortir de votre zone de confort et
                                        s’assurera que vous preniez plaisir à
                                        aller chercher le bon niveau d’exigence
                                        !
                                    </p>
                                    <p className={styles.teamP}>
                                        Sarah, quant à elle, a piloté des
                                        projets de transformation technologique
                                        et métier pour des clients de diverses
                                        industries, par l'innovation
                                        pédagogique, digitale et humaine.
                                    </p>
                                    <p className={styles.teamP}>
                                        Pédagogue et bienveillante, Sarah
                                        s’engagera à vos côtés pour vous
                                        permettre de vous sentir plus
                                        confiant(e) et prêt(e) à relever vos
                                        futurs challenges !
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.value}>
                <div className={styles.container}>
                    <div className={styles.padding}>
                        <div className={styles.separatorWhite}></div>

                        <h2 className={styles.h2}>NOS VALEURS</h2>
                        <div className={styles.values}>
                            <div className={styles.valueBox}>
                                <div className={styles.boxBlue}>
                                    <div className={styles.contentBox}>
                                        <h3 className={styles.h3Blue}>
                                            PERFORMANCE
                                        </h3>
                                        <p>
                                            Nous employons notre énergie à
                                            libérer le potentiel de nos coachés.
                                            Nous mettons notre performance au
                                            service de la leur.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.valueBox}>
                                <div className={styles.boxGrey}>
                                    <div className={styles.contentBox}>
                                        <h3 className={styles.h3Grey}>
                                            COURAGE
                                        </h3>
                                        <p>
                                            Parce que le dépassement de soi est
                                            une aventure, nous veillons à
                                            transmettre notre courage à nos
                                            anglofans.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.valueBox}>
                                <div className={styles.boxGrey}>
                                    <div className={styles.contentBox}>
                                        <h3 className={styles.h3Grey}>
                                            ENGAGEMENT
                                        </h3>
                                        <p>
                                            Nous nous engageons personnellement
                                            à faire équipe avec nos coachés pour
                                            atteindre leurs objectifs.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.valueBox}>
                                <div className={styles.boxGrey}>
                                    <div className={styles.contentBox}>
                                        <h3 className={styles.h3Grey}>
                                            AUTHENTICITÉ
                                        </h3>
                                        <p>
                                            Pour proposer une aventure humaine
                                            basée sur l’échange et la
                                            bienveillance, nous restons vraies
                                            et fidèles à nos valeurs.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.valueBox}>
                                <div className={styles.boxGrey}>
                                    <div className={styles.contentBox}>
                                        <h3 className={styles.h3Grey}>
                                            TRANSMISSION
                                        </h3>
                                        <p>
                                            Partager des connaissances et des
                                            expériences pour avoir un impact
                                            durable sur nos coachés et leur
                                            environnement.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.valueBox}>
                                <div className={styles.boxYellow}>
                                    <div className={styles.contentBox}>
                                        <h3 className={styles.h3Yellow}>
                                            VIBRATION
                                        </h3>
                                        <p>
                                            Nous nous levons le matin pour
                                            donner envie, entraîner, tirer vers
                                            le haut nos coachés tout en nous
                                            faisant plaisir.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
