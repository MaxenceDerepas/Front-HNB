import Layout from "../components/layout";
import Head from "next/head";
import styles from "../styles/Testimony.module.css";
import Image from "next/dist/client/image";
import { useState } from "react";

import HEC from "../images/HEC-heart-n-brain.jpg";
import LOREAL from "../images/LOREAL-heart-n-brain.png";
import KEOLIS from "../images/keolis-heart-n-brain.png";
import ACCENTURE from "../images/Accenture-heart-n-brain.png";
import PEGA from "../images/Pega-heart-n-brain.png";
import DELSEY from "../images/Delsey-heart-n-brain.png";
import UBISOFT from "../images/Ubisoft-heart-n-brain.jpg";
import MA from "../images/MA.png";
import CONTREX from "../images/Elles-Contrex.jpg";
import Right from "../images/chevron-right.svg";
import Left from "../images/chevron-left.svg";
import LINKEDIN from "../images/LinkedIn.png";

export async function getStaticProps() {
    // Fetch data from external API
    const res = await fetch(`https://hnb-app.herokuapp.com/Testimony`);
    const data = await res.json();

    // Pass data to the page via props
    return { props: { data } };
}

export default function Testimony({ data }) {
    const [index, setIndex] = useState(0);

    const nextImage = () => {
        if (data.length - 1 === index) {
            setIndex(0);
        } else {
            setIndex(index + 1);
        }
    };
    const previousImage = () => {
        if (index === 0) {
            setIndex(data.length - 1);
        } else {
            setIndex(index - 1);
        }
    };

    return (
        <Layout>
            <Head>
                <title>
                    Coaching anglais professionnel | Ils parlent de nous | Heart
                    n Brain
                </title>
                <meta property="og:site_name" content="Heart n Brain" />
                <meta property="og:type" content="website" />

                <meta
                    property="og:title"
                    content=" Coaching anglais professionnel | Ils parlent de nous | Paris | Heart n Brain"
                />
                <meta
                    name="description"
                    content="Vos coachs Heart n Brain partagent leurs tips, bonnes pratiques et exemples d'expériences pour vous aider à améliorer votre pratique de l'anglais professionnel !"
                />
                <meta
                    property="og:url"
                    content="https://www.heart-n-brain.com/temoignages"
                ></meta>
                <meta
                    property="og:description"
                    content="Découvrez les témoignages de coachés qui ont testé la méthode Heart n Brain ainsi que les entreprises qui nous font confiance."
                />
                <link rel="icon" href="/favicon-heart-n-brain.png" />
            </Head>
            <section className={styles.content}>
                <div
                    onClick={nextImage}
                    className={styles.testimony}
                    style={{
                        backgroundImage: `url(${data[index].url})`,
                    }}
                >
                    <div className={styles.chevron}>
                        <Image
                            src={Left}
                            height={80}
                            width={180}
                            onClick={previousImage}
                        />
                    </div>
                    <div className={styles.containerTestimony}>
                        <div className={styles.separatorWhite}></div>

                        <h1 className={styles.title}>
                            <p className={styles.textTitle}>
                                ILS PARLENT DE NOUS
                            </p>
                            <Image src={LINKEDIN} height={30} width={30} />
                        </h1>
                    </div>
                    <div className={styles.chevron}>
                        <Image
                            src={Right}
                            height={80}
                            width={180}
                            onClick={nextImage}
                        />
                    </div>
                </div>
                <div className={styles.trustUs}>
                    <div className={styles.container}>
                        <div className={styles.separatorWhite}></div>
                        <h2 className={styles.h2}>ILS NOUS FONT CONFIANCE</h2>
                        <div className={styles.trustBox}>
                            <div className={styles.boxDarkBlue}>
                                <div className={styles.contentBox}>
                                    <Image
                                        className={styles.img}
                                        src={HEC}
                                        alt="logo de HEC paris"
                                        title="logo HEC"
                                    />
                                </div>
                            </div>
                            <div className={styles.boxYellow}>
                                <div className={styles.contentBox}>
                                    <Image
                                        className={styles.img}
                                        src={LOREAL}
                                        alt="logo de L'Oreal Paris"
                                        title="logo L'Oreal"
                                    />
                                </div>
                            </div>
                            <div className={styles.boxBlue}>
                                <div className={styles.contentBox}>
                                    <Image
                                        className={styles.img}
                                        src={KEOLIS}
                                        alt="logo de keolis"
                                        title="logo keolis"
                                    />
                                </div>
                            </div>
                            <div className={styles.boxGrey}>
                                <div className={styles.contentBox}>
                                    <Image
                                        className={styles.img}
                                        src={ACCENTURE}
                                        alt="logo de Accenture"
                                        title="logo accenture"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className={styles.trustBox2}>
                            <div className={styles.boxBlue}>
                                <div className={styles.contentBox}>
                                    <Image
                                        className={styles.img}
                                        src={PEGA}
                                        alt="logo de Pega"
                                        title="logo pega"
                                    />
                                </div>
                            </div>
                            <div className={styles.boxGrey}>
                                <div className={styles.contentBox}>
                                    <Image
                                        className={styles.img}
                                        src={DELSEY}
                                        alt="logo de Delsey Paris"
                                        title="logo Delsey"
                                    />
                                </div>
                            </div>
                            <div className={styles.boxYellow}>
                                <div className={styles.contentBox}>
                                    <Image
                                        className={styles.img}
                                        src={UBISOFT}
                                        alt="logo de Ubisoft"
                                        title="logo ubisoft"
                                    />
                                </div>
                            </div>
                            <div className={styles.boxDarkBlue}>
                                <div className={styles.contentBox}>
                                    <Image
                                        className={styles.img}
                                        src={MA}
                                        alt="logo de Meilleur agent"
                                        title="logo Meilleur agent"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.talkAboutUs}>
                    <div className={styles.container}>
                        <div className={styles.separatorWhite}></div>
                        <h2 className={styles.h2}>ILS NOUS ACCOMPAGNENT</h2>
                        <div className={styles.contrex}>
                            <a href="https://www.contrex.fr/les-projets-des-elles-by-contrex?page=1">
                                <Image
                                    height={220}
                                    width={280}
                                    src={CONTREX}
                                    alt="photo les elles by contrex"
                                    title="photo lien contrex"
                                />
                            </a>
                            <p className={styles.text}>
                                Heart n Brain est soutenu par le programme "Les
                                Elles by Contrex", qui vise à mettre en lumière
                                et à accompagner des femmes dans leur projet
                                entrepreneurial !
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
