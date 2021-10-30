import Layout from "../../components/layout";
import Head from "next/head";
import styles from "../../styles/[id].module.css";
import { useEffect, useState } from "react";

export default function Blog({ data }) {
    const [url, setUrl] = useState("");
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        setUrl(window.location.href);
    }, []);
    return (
        <Layout>
            <Head>
                <title>{`${data.title}`} | Blog | Heart n Brain</title>

                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <meta http-equiv="Accept-CH" content="Viewport-Width, Width" />
                <link
                    rel="canonical"
                    href={`https://front-hnb.vercel.app/posts/${data.titleUrl}`}
                ></link>
                <meta
                    name="description"
                    content="Vos coachs Heart n Brain partagent leurs tips, bonnes pratiques et exemples d'expériences pour vous aider à améliorer votre pratique de l'anglais professionnel !"
                />
                <meta
                    property="og:title"
                    content={`${data.title} | Heart n Brain"`}
                />
                <meta property="og:image" content={`${data.urlMedia}`} />

                <meta
                    property="og:description"
                    content="Vos coachs Heart n Brain partagent leurs tips, bonnes pratiques et exemples d'expériences pour vous aider à améliorer votre pratique de l'anglais professionnel !"
                />
                <meta property="og:site_name" content="Heart n Brain" />
                <meta property="og:type" content="website" />

                <link rel="icon" href="/favicon-heart-n-brain.png" />
            </Head>
            <section className={styles.container}>
                <div className={styles.blog}>
                    <p className={styles.date}>{data.date}</p>
                    <h1 className={styles.title}>{data.title}</h1>
                    {data.content.map((elem, i) => {
                        return (
                            <div key={i}>
                                {elem.type === "text" && (
                                    <div
                                        style={{
                                            marginTop: `${elem.style.marginTop}px`,
                                        }}
                                    >
                                        {elem.text
                                            .split("<br/>")
                                            .map((item, j) => {
                                                return (
                                                    <p
                                                        key={j}
                                                        style={{
                                                            fontFamily:
                                                                elem.style
                                                                    .fontFamily,
                                                            textAlign:
                                                                elem.style
                                                                    .textAlign,
                                                            color: elem.style
                                                                .color,
                                                            fontWeight:
                                                                elem.style
                                                                    .fontWeight,
                                                            fontStyle:
                                                                elem.style
                                                                    .fontStyle,
                                                            textDecoration:
                                                                elem.style
                                                                    .textDecoration,
                                                            fontSize: `${elem.style.fontSize}px`,
                                                            lineHeight:
                                                                elem.style
                                                                    .fontSize <
                                                                    22 &&
                                                                "22.5px",
                                                        }}
                                                    >
                                                        {item}
                                                    </p>
                                                );
                                            })}
                                    </div>
                                )}
                                {elem.type === "image" && (
                                    <div
                                        style={
                                            elem.style.textAlign === "center"
                                                ? {
                                                      display: "flex",
                                                      justifyContent: "center",
                                                      marginTop: `${elem.style.marginTop}px`,
                                                  }
                                                : elem.style.textAlign ===
                                                  "right"
                                                ? {
                                                      display: "flex",
                                                      justifyContent:
                                                          "flex-end",
                                                      marginTop: `${elem.style.marginTop}px`,
                                                  }
                                                : {
                                                      display: "flex",
                                                      justifyContent:
                                                          "flex-start",
                                                      marginTop: `${elem.style.marginTop}px`,
                                                  }
                                        }
                                    >
                                        <img
                                            src={`${elem.url}`}
                                            alt="imgRender"
                                            style={{
                                                height: `${elem.style.height}px`,
                                                width: `${elem.style.width}px`,
                                            }}
                                        />
                                    </div>
                                )}
                                {elem.type === "video" && (
                                    <div
                                        style={
                                            elem.style.textAlign === "center"
                                                ? {
                                                      display: "flex",
                                                      justifyContent: "center",
                                                      marginTop: `${elem.style.marginTop}px`,
                                                  }
                                                : elem.style.textAlign ===
                                                  "right"
                                                ? {
                                                      display: "flex",
                                                      justifyContent:
                                                          "flex-end",
                                                      marginTop: `${elem.style.marginTop}px`,
                                                  }
                                                : {
                                                      display: "flex",
                                                      justifyContent:
                                                          "flex-start",
                                                      marginTop: `${elem.style.marginTop}px`,
                                                  }
                                        }
                                    >
                                        <video
                                            controls
                                            src={`${elem.url}`}
                                            height={`${elem.style.height}px`}
                                            width={`${elem.style.width}px`}
                                            alt="video presentation heart n brain"
                                            title="presentation heart n brain"
                                        />
                                    </div>
                                )}
                                {elem.type === "block" && (
                                    <p
                                        style={{
                                            minHeight: `${elem.image.style.height}px`,
                                            lineHeight:
                                                elem.paragraph.style.fontSize <
                                                    22 && "22.5px",
                                            fontSize: `${elem.paragraph.style.fontSize}px`,
                                            color: `${elem.paragraph.style.color}`,
                                            marginTop: `${elem.paragraph.style.marginTop}px`,
                                            fontFamily:
                                                elem.paragraph.style.fontFamily,
                                        }}
                                    >
                                        <img
                                            src={`${elem.image.url}`}
                                            alt="float"
                                            style={{
                                                height: `${elem.image.style.height}px`,
                                                marginLeft:
                                                    elem.image.style.float ===
                                                        "right" && "40px",
                                                marginRight:
                                                    elem.image.style.float ===
                                                        "left" && "40px",
                                                marginBottom: "10px",
                                                width: `${elem.image.style.width}px`,
                                                float: elem.image.style.float,
                                            }}
                                        />
                                        {elem.paragraph.text
                                            .split("</r>")
                                            .map((item, z) => {
                                                return (
                                                    <span
                                                        style={{
                                                            marginBottom:
                                                                "30px",
                                                            display: "block",
                                                        }}
                                                        key={z}
                                                    >
                                                        {item
                                                            .split("<br/>")
                                                            .map((elem, i) => {
                                                                return (
                                                                    <span
                                                                        style={{
                                                                            display:
                                                                                "block",
                                                                        }}
                                                                    >
                                                                        {elem}
                                                                    </span>
                                                                );
                                                            })}
                                                    </span>
                                                );
                                            })}
                                    </p>
                                )}
                            </div>
                        );
                    })}
                    <div className={styles.separatorGray}> </div>
                    <div className={styles.logo}>
                        <a
                            rel="noopener noreferrer"
                            href={`https://www.linkedin.com/sharing/share-offsite/?url=${url}`}
                            target="_blank"
                            title="Share on LinkedIn"
                        >
                            <div className={styles.Linkedin}>
                                <img
                                    src="/linkedin-2.svg"
                                    alt="logo linkedin"
                                    title="logo linkedin"
                                    className={styles.logoLinkedin}
                                />
                            </div>
                        </a>

                        <div
                            onClick={() => {
                                setVisible(true);
                            }}
                            className={styles.link}
                        >
                            <img
                                src="/link-2.svg"
                                alt="logo reseau "
                                title="copié url"
                                className={styles.logos}
                            />
                        </div>
                    </div>
                </div>
                <div
                    className={
                        visible === false ? styles.modalNone : styles.modal
                    }
                >
                    <img
                        onClick={() => {
                            setVisible(false);
                        }}
                        src="/x.svg"
                        alt="close"
                        title="close Modal"
                        className={styles.closed}
                    />
                    <div className={styles.modalContent}>
                        <h3 className={styles.titleModal}>
                            <div className={styles.link}>
                                <img
                                    src="/link-2-bold.svg"
                                    alt="logo reseau "
                                    title="copié url"
                                    className={styles.logoModal}
                                />
                            </div>
                            <span style={{ marginLeft: "20px" }}>
                                PARTAGER LE LIEN
                            </span>
                        </h3>
                        <input
                            type="text"
                            value={url}
                            className={styles.copy}
                            readOnly
                        />
                    </div>
                </div>
            </section>
        </Layout>
    );
}
export async function getStaticPaths() {
    const res = await fetch(`https://hnb-app.herokuapp.com/blogList`);
    const data = await res.json();

    const paths = data.map((elem) => ({ params: { id: elem.titleUrl } }));
    return {
        paths,
        fallback: false,
    };
}
export async function getStaticProps({ params }) {
    const res = await fetch(
        `https://hnb-app.herokuapp.com/article/${params.id}`
    );
    const data = await res.json();

    return {
        props: { data },
    };
}
