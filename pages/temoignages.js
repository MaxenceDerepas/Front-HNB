import Layout from "../components/layout";
import Head from "next/head";
import styles from "../styles/Testimony.module.css";
import Image from "next/image";
import { useState } from "react";

import Right from "../images/chevron-right.svg";
import Left from "../images/chevron-left.svg";
import LINKEDIN from "../images/LinkedIn.png";

export async function getStaticProps() {
    // Fetch data from external API
    const res = await fetch(
        `https://back-hnb-80318acc2db1.herokuapp.com/Testimony`
    );
    const response = await fetch(
        `https://back-hnb-80318acc2db1.herokuapp.com/Temoignages`
    );
    const dataDescription = await response.json();
    const data = await res.json();

    // Pass data to the page via props
    return { props: { data, dataDescription }, revalidate: 17280 };
}

export default function Testimony({ data, dataDescription }) {
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

                <meta name="robots" content="index,follow" />
                <meta name="googlebot" content="index,follow" />
                <meta property="og:image" content="/partage.png" />
                <meta property="og:image:width" content="600" />
                <meta property="og:image:height" content="313" />

                <link
                    rel="canonical"
                    href="https://www.heart-n-brain.com/temoignages"
                ></link>
                <meta http-equiv="Accept-CH" content="Viewport-Width, Width" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
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
                    content={`${dataDescription.description}`}
                />
                <link rel="icon" href="/favicon-heart-n-brain.png" />
            </Head>
            <section className={styles.content}>
                <div
                    className={styles.testimony}
                    style={{
                        backgroundSize: "cover",
                        backgroundImage: `url(${data[index].url})`,
                        position: "relative",
                    }}
                >
                    {" "}
                    <div
                        style={{
                            position: "absolute",
                            bottom: "35px",
                            display: "flex",
                            width: "65px",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                    >
                        <div
                            onClick={() => setIndex(0)}
                            style={
                                index === 0
                                    ? {
                                          height: "9px",
                                          width: "9px",
                                          borderRadius: "50%",
                                          border: "white 2px solid",
                                          boxSizing: "border-box",
                                          cursor: "pointer",
                                      }
                                    : {
                                          height: "6px",
                                          width: "6px",
                                          borderRadius: "50%",
                                          backgroundColor: "#fff",
                                          cursor: "pointer",
                                      }
                            }
                        ></div>
                        <div
                            onClick={() => setIndex(1)}
                            style={
                                index === 1
                                    ? {
                                          height: "9px",
                                          width: "9px",
                                          borderRadius: "50%",
                                          border: "white 2px solid",
                                          boxSizing: "border-box",
                                          cursor: "pointer",
                                      }
                                    : {
                                          height: "6px",
                                          width: "6px",
                                          borderRadius: "50%",
                                          backgroundColor: "#fff",
                                          cursor: "pointer",
                                      }
                            }
                        ></div>
                        <div
                            onClick={() => setIndex(2)}
                            style={
                                index === 2
                                    ? {
                                          height: "9px",
                                          width: "9px",
                                          borderRadius: "50%",
                                          border: "white 2px solid",
                                          boxSizing: "border-box",
                                          cursor: "pointer",
                                      }
                                    : {
                                          height: "6px",
                                          width: "6px",
                                          borderRadius: "50%",
                                          backgroundColor: "#fff",
                                          cursor: "pointer",
                                      }
                            }
                        ></div>
                        <div
                            onClick={() => setIndex(3)}
                            style={
                                index === 3
                                    ? {
                                          height: "9px",
                                          width: "9px",
                                          borderRadius: "50%",
                                          border: "white 2px solid",
                                          boxSizing: "border-box",
                                          cursor: "pointer",
                                      }
                                    : {
                                          height: "6px",
                                          width: "6px",
                                          borderRadius: "50%",
                                          backgroundColor: "#fff",
                                          cursor: "pointer",
                                      }
                            }
                        ></div>
                    </div>
                    <div className={styles.chevron}>
                        <Image
                            alt="fleche defilement image"
                            title="vers la gauche"
                            src={Left}
                            height={80}
                            width={180}
                            onClick={previousImage}
                        />
                    </div>
                    <div
                        className={
                            data[index]._id === "615c755f2540e2713e6d008e"
                                ? styles.containerTestimony3
                                : styles.containerTestimony
                        }
                    >
                        <div>
                            {" "}
                            <div style={{ height: "92px" }}></div>
                            <div className={styles.separatorWhite}></div>
                            <h1 className={styles.title}>
                                <p className={styles.textTitle}>
                                    ILS PARLENT DE NOUS
                                </p>
                                <Image
                                    alt="logo linkedin"
                                    title="linkedin"
                                    src={LINKEDIN}
                                    height={30}
                                    width={30}
                                />
                            </h1>
                            {data[index].text.map((item, i) => {
                                return (
                                    <div
                                        key={i}
                                        className={
                                            data[index]._id ===
                                            "615c755f2540e2713e6d008e"
                                                ? styles.testimonyContent3
                                                : styles.testimonyContent
                                        }
                                    >
                                        {item.logo.url !== "" && (
                                            <div className={styles.logo}>
                                                <img
                                                    style={{
                                                        widt: "100%",
                                                        height: "100%",
                                                    }}
                                                    src={item.logo.url}
                                                    alt="logo"
                                                    title="logo"
                                                />
                                            </div>
                                        )}
                                        <div className={styles.textTestimony}>
                                            {item.testimony
                                                .split("<br/>")
                                                .map((elem, j) => {
                                                    return (
                                                        <p key={j}>{elem}</p>
                                                    );
                                                })}
                                        </div>
                                        <p className={styles.textName}>
                                            {item.name}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className={styles.chevron}>
                        <Image
                            alt="fleche defilement image"
                            title="vers la droite"
                            src={Right}
                            height={80}
                            width={180}
                            onClick={nextImage}
                        />
                    </div>
                </div>
                <div className={styles.testimonyMobile}>
                    <div className={styles.container}>
                        <div className={styles.textMobile}>
                            <h1 className={styles.title}>
                                <p className={styles.textTitle}>
                                    ILS PARLENT DE NOUS
                                </p>
                                <Image
                                    alt="logo linkedin"
                                    title="linkedin"
                                    src={LINKEDIN}
                                    height={30}
                                    width={30}
                                />
                            </h1>
                            {data.map((elem, j) => {
                                return (
                                    <div key={j}>
                                        {elem.text.map((item, i) => {
                                            return (
                                                <div
                                                    style={{
                                                        width: "100%",
                                                    }}
                                                    key={i}
                                                    className={
                                                        styles.testimonyContent
                                                    }
                                                >
                                                    {item.logo.url !== "" && (
                                                        <div
                                                            className={
                                                                styles.logo
                                                            }
                                                        >
                                                            <img
                                                                style={{
                                                                    widt: "100%",
                                                                    height: "100%",
                                                                }}
                                                                src={
                                                                    item.logo
                                                                        .url
                                                                }
                                                                alt="logo"
                                                                title="logo"
                                                            />
                                                        </div>
                                                    )}
                                                    <div
                                                        className={
                                                            styles.textTestimony
                                                        }
                                                    >
                                                        {item.testimony
                                                            .split("<br/>")
                                                            .map((elem, j) => {
                                                                return (
                                                                    <p key={j}>
                                                                        {elem}
                                                                    </p>
                                                                );
                                                            })}
                                                    </div>
                                                    <p
                                                        className={
                                                            styles.textName
                                                        }
                                                    >
                                                        {item.name}
                                                    </p>
                                                </div>
                                            );
                                        })}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
