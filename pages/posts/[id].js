import Layout from "../../components/layout";
import Head from "next/head";
import styles from "../../styles/[id].module.css";
import { useEffect, useState } from "react";

export default function Blog({ data }) {
    const [url, setUrl] = useState("");
    const [width, setWidth] = useState(null);
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        setUrl(window.location.href);
        setWidth(window.innerWidth);
    }, []);
    return (
        <Layout>
            <Head>
                <title>{`${data.title}`} | Blog | Heart n Brain</title>
                <meta name="robots" content="index,follow" />
                <meta name="googlebot" content="index,follow" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <meta http-equiv="Accept-CH" content="Viewport-Width, Width" />
                <link
                    rel="canonical"
                    href={`https://www.heart-n-brain.com/posts/${data.titleUrl}`}
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
                                    <p
                                        style={{
                                            marginTop: `${elem.style.marginTop}px`,
                                            textAlign: elem.style.textAlign,
                                        }}
                                    >
                                        {elem.paragraph.map((item, j) => {
                                            return (
                                                <span
                                                    key={j}
                                                    style={{
                                                        color: item.style.color,
                                                        fontSize: `${item.style.fontSize}px`,
                                                        fontWeight:
                                                            item.style
                                                                .fontWeight,
                                                        fontStyle:
                                                            item.style
                                                                .fontStyle,
                                                        textDecoration:
                                                            item.style
                                                                .textDecoration,
                                                        fontFamily:
                                                            item.style
                                                                .fontFamily,
                                                        lineHeight:
                                                            item.style
                                                                .fontSize < 22
                                                                ? "22.5px"
                                                                : "",
                                                    }}
                                                >
                                                    {item.type === "text" &&
                                                    item.text.indexOf(
                                                        "<br/>"
                                                    ) === -1 ? (
                                                        <>{item.text}</>
                                                    ) : (
                                                        item.type ===
                                                            "link" && (
                                                            <a
                                                                href={`${item.url}`}
                                                            >
                                                                {item.text}
                                                            </a>
                                                        )
                                                    )}
                                                    {item.type === "text" &&
                                                    item.text.indexOf(
                                                        "<br/>"
                                                    ) !== -1 ? (
                                                        <>
                                                            {item.text
                                                                .split("<br/>")
                                                                .map(
                                                                    (
                                                                        element,
                                                                        z
                                                                    ) => {
                                                                        return (
                                                                            <span
                                                                                key={
                                                                                    z
                                                                                }
                                                                            >
                                                                                {
                                                                                    element
                                                                                }
                                                                                {z !==
                                                                                    item.text.split(
                                                                                        "<br/>"
                                                                                    )
                                                                                        .length -
                                                                                        1 && (
                                                                                    <br />
                                                                                )}
                                                                            </span>
                                                                        );
                                                                    }
                                                                )}
                                                        </>
                                                    ) : (
                                                        <></>
                                                    )}
                                                </span>
                                            );
                                        })}
                                    </p>
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
                                                height:
                                                    width > 650
                                                        ? `${elem.style.height}px`
                                                        : "",
                                                width:
                                                    width > 650
                                                        ? `${elem.style.width}px`
                                                        : "100%",
                                            }}
                                        />{" "}
                                    </div>
                                )}
                                {elem.type === "video" && elem.url !== "" && (
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
                                        <iframe
                                            width={`${elem.style.width}`}
                                            height={`${elem.style.height}`}
                                            src={`${elem.url}`}
                                            title="YouTube video player"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        ></iframe>
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
                                                width:
                                                    width > 650
                                                        ? `${elem.image.style.width}px`
                                                        : "100%",
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
                                                                        key={i}
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
    const res = await fetch(
        `https://back-hnb-80318acc2db1.herokuapp.com/blogList`
    );
    const data = await res.json();

    const paths = data.map((elem) => ({ params: { id: elem.titleUrl } }));
    return {
        paths,
        fallback: "blocking",
    };
}
export async function getStaticProps({ params }) {
    const res = await fetch(
        `https://back-hnb-80318acc2db1.herokuapp.com/article/${params.id}`
    );
    const data = await res.json();

    return {
        props: { data },
        revalidate: 17280,
    };
}
