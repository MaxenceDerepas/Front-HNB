import Layout from "../components/layout";
import Head from "next/head";
import styles from "../styles/Blog.module.css";
import Link from "next/link";

export async function getStaticProps() {
    // Fetch data from external API
    const res = await fetch(`https://hnb-app.herokuapp.com/Blog`);
    const responseArticle = await fetch(
        `https://hnb-app.herokuapp.com/blogList`
    );
    const data = await res.json();
    const dataArticle = await responseArticle.json();

    // Pass data to the page via props
    return { props: { data, dataArticle } };
}

export default function Blog({ data, dataArticle }) {
    console.log(dataArticle);
    return (
        <Layout>
            <Head>
                <title>Blog | Heart n Brain</title>
                <meta property="og:image" content="/partage.png" />
                <meta property="og:image:width" content="600" />
                <meta property="og:image:height" content="390" />

                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <meta name="robots" content="index,follow" />
                <meta name="googlebot" content="index,follow" />
                <meta http-equiv="Accept-CH" content="Viewport-Width, Width" />
                <link
                    rel="canonical"
                    href="https://front-hnb.vercel.app/blog"
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
                {dataArticle.map((elem, i) => {
                    return (
                        <Link key={elem._id} href={`/posts/${elem.titleUrl}`}>
                            <a>
                                <section className={styles.article}>
                                    <div className={styles.imageArticle}>
                                        <img
                                            src={`${elem.urlMedia.url}`}
                                            alt="image article"
                                            className={styles.img}
                                        />
                                    </div>
                                    <div className={styles.columnDescription}>
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
                    );
                })}
            </section>
        </Layout>
    );
}
