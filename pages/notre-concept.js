import Layout from "../components/layout";
import Head from "next/head";
import styles from "../styles/OurConcept.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";

export async function getStaticProps() {
    // Fetch data from external API
    const res = await fetch(`https://hnb-app.herokuapp.com/NotreConcept`);
    const data = await res.json();

    // Pass data to the page via props
    return { props: { data } };
}

export default function OurConcept({ data }) {
    const [height, setHeight] = useState();
    const [platform, setPlatform] = useState();
    useEffect(() => {
        if (typeof window !== "undefined") {
            setHeight(window.innerHeight - 540);
            setPlatform(window.platform);
        }
    }, []);
    return (
        <Layout>
            <Head>
                <title>Notre concept | Paris | Heart n Brain</title>
                <meta
                    property="og:title"
                    content="Notre concept | Paris | Heart n Brain"
                />
                <meta property="og:image" content="/partage.png" />
                <meta property="og:image:width" content="600" />
                <meta property="og:image:height" content="390" />

                <meta name="robots" content="index,follow" />
                <meta name="googlebot" content="index,follow" />

                <link
                    rel="canonical"
                    href="https://front-hnb.vercel.app/notre-concet"
                ></link>
                <meta http-equiv="Accept-CH" content="Viewport-Width, Width" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <meta property="og:site_name" content="Heart n Brain" />
                <meta
                    property="og:description"
                    content={`${data.description}`}
                />
                <meta
                    name="description"
                    content="Vos coachs Heart n Brain partagent leurs tips, bonnes pratiques et exemples d'expériences pour vous aider à améliorer votre pratique de l'anglais professionnel !"
                />
                <meta property="og:site_name" content="Heart n Brain" />
                <meta property="og:type" content="website" />
                <meta
                    property="og:url"
                    content="https://www.heart-n-brain.com/notre-concept"
                ></meta>

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
                <Link href="/notre-mission">
                    <div className={styles.column1}>
                        <div className={styles.text}>
                            <p>NOTRE MISSION</p>
                        </div>
                    </div>
                </Link>

                <Link href="/notre-methode">
                    <div className={styles.column2}>
                        <div className={styles.text}>
                            <p>NOTRE MÉTHODE</p>
                        </div>
                    </div>
                </Link>
            </section>
        </Layout>
    );
}
