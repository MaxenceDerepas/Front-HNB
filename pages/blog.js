import Layout from "../components/layout";
import Head from "next/head";
import styles from "../styles/Blog.module.css";
import Link from "next/link";
import { useState } from "react";

export async function getStaticProps() {
    // Fetch data from external API
    const res = await fetch(`https://back-hnb-80318acc2db1.herokuapp.com/Blog`);
    const responseArticle = await fetch(
        `https://back-hnb-80318acc2db1.herokuapp.com/blogList`
    );
    const data = await res.json();
    const dataArticle = await responseArticle.json();

    // Pass data to the page via props
    return { props: { data, dataArticle }, revalidate: 17280 };
}

export default function Blog({ data, dataArticle }) {
    const [results, setResults] = useState(dataArticle);

    const search = (event) => {
        let newResult = [];
        if (event.target.value === "") {
            setResults(dataArticle);
        } else {
            for (let i = 0; i < dataArticle.length; i++) {
                if (
                    dataArticle[i].title
                        .toLowerCase()
                        .indexOf(event.target.value.toLowerCase()) !== -1
                ) {
                    newResult.push(dataArticle[i]);
                }
            }
            setResults(newResult);
        }
    };
    return (
        <Layout>
            <Head>
                <title>Blog | Heart n Brain</title>

                <meta property="og:image" content="/partage.png" />
                <meta property="og:image:width" content="600px" />
                <meta property="og:image:height" content="313px" />

                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <meta name="robots" content="index,follow" />
                <meta name="googlebot" content="index,follow" />
                <meta http-equiv="Accept-CH" content="Viewport-Width, Width" />
                <link
                    rel="canonical"
                    href="https://www.heart-n-brain.com/blog"
                ></link>
                <meta
                    name="description"
                    content="Vos coachs Heart n Brain partagent leurs tips, bonnes pratiques et exemples d'expériences pour vous aider à améliorer votre pratique de l'anglais professionnel !"
                />
                <meta property="og:title" content="Blog | Heart n Brain" />
                <meta
                    property="og:description"
                    content={`${data.description}`}
                />
                <meta property="og:site_name" content="Heart n Brain" />
                <meta property="og:type" content="website" />

                <link rel="icon" href="/favicon-heart-n-brain.png" />
            </Head>
            <section className={styles.container}>
                <div className={styles.search}>
                    <img
                        src="/search.svg"
                        alt="rechercher un article"
                        title="rechercher un article"
                        style={{
                            height: "15px",
                            width: "15px",
                            marginRight: "7px",
                        }}
                    />{" "}
                    <input
                        onChange={(event) => {
                            search(event);
                        }}
                        type="text"
                        className={styles.inputSearch}
                        placeholder="Rechercher un article"
                    />
                </div>
                {results.map((elem, i) => {
                    return (
                        <div key={elem._id} style={{ marginBottom: "30px" }}>
                            <Link href={`/posts/${elem.titleUrl}`}>
                                <a>
                                    <section className={styles.article}>
                                        <div className={styles.imageArticle}>
                                            {elem.urlMedia.type === "image" && (
                                                <img
                                                    src={`${elem.urlMedia.url}`}
                                                    alt="image article"
                                                    className={styles.img}
                                                />
                                            )}
                                            {elem.urlMedia.type === "video" &&
                                                elem.urlMedia.url !== "" && (
                                                    <iframe
                                                        width="100%"
                                                        height="100%"
                                                        src={`${elem.urlMedia.url}`}
                                                        title="YouTube video player"
                                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                    ></iframe>
                                                )}
                                        </div>
                                        <div
                                            className={styles.columnDescription}
                                        >
                                            <h1 className={styles.title}>
                                                {elem.title}
                                            </h1>
                                            <p className={styles.description}>
                                                {elem.description}
                                            </p>
                                        </div>
                                    </section>
                                </a>
                            </Link>
                        </div>
                    );
                })}
            </section>
        </Layout>
    );
}
