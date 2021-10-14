import Layout from "../components/layout";
import Head from "next/head";
import styles from "../styles/ourOffers.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function OurOffers() {
    const [height, setHeight] = useState();
    const [platform, setPlatform] = useState();
    useEffect(() => {
        if (typeof window !== "undefined") {
            setHeight(window.innerHeight - 540);
            setPlatform(window.platform);
            console.log(window.platform);
        }
    }, []);
    return (
        <Layout>
            <Head>
                <title>
                    Nos offres d'accompagnement | Paris | Heart n Brain
                </title>

                <link
                    rel="canonical"
                    href="https://front-hnb.vercel.app/nos-offres"
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
                    content="Vos coachs Heart n Brain partagent leurs tips, bonnes pratiques et exemples d'expériences pour vous aider à améliorer votre pratique de l'anglais professionnel !"
                />
                <meta
                    property="og:description"
                    content="Venez découvrir les offres de coaching en anglais professionnel d'Heart n Brain. Que vous soyez un particulier ou une entreprise, vous trouverez ici les informations concernant nos différents formats d'accompagnement !"
                />
                <meta
                    property="og:url"
                    content="https://www.heart-n-brain.com/nos-offres"
                ></meta>
                <meta
                    property="og:title"
                    content="Nos offres d'accompagnement | Paris  | Heart n Brain"
                />
                <link rel="icon" href="/favicon-heart-n-brain.png" />
            </Head>
            <section
                style={{
                    marginBottom:
                        platform !== ("iOs" || "Android") &&
                        height > 0 &&
                        `${height}px`,
                }}
                className={styles.container}
            >
                <Link href="/accompagnement-individuel">
                    <div className={styles.column1}>
                        <div className={styles.text}>
                            <p>L'ACCOMPAGNEMENT INDIVIDUEL</p>
                        </div>
                        <div className={styles.textYellow}>
                            POUR LES PARTICULIERS ET LES ENTREPRISES
                        </div>
                    </div>
                </Link>

                <Link href="/accompagnement-collectif">
                    <div className={styles.column2}>
                        <div className={styles.text}>
                            <p>L'ACCOMPAGNEMENT COLLECTIF</p>
                        </div>
                        <div className={styles.textYellow}>
                            POUR LES ENTREPRISES
                        </div>
                    </div>
                </Link>
            </section>
        </Layout>
    );
}
