import Layout from "../components/layout";
import Head from "next/head";

export default function Blog() {
    return (
        <Layout>
            <Head>
                <title>Blog | Heart n Brain</title>

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
                    content="Vos coachs Heart n Brain partagent leurs tips, bonnes pratiques et exemples d'expériences pour vous aider à améliorer votre pratique de l'anglais professionnel !"
                />
                <meta property="og:site_name" content="Heart n Brain" />
                <meta property="og:type" content="website" />

                <link rel="icon" href="/favicon-heart-n-brain.png" />
            </Head>
        </Layout>
    );
}
