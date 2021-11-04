import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html lang="fr">
                <Head>
                    <meta charset="utf-8" />
                    <link
                        rel="preload"
                        rel="stylesheet"
                        href="/fonts/stylesheet.css"
                    />
                    <link rel="manifest" href="/manifest.json" />
                    <meta name="theme-color" content="#000" />
                    <link rel="apple-touch-icon" href="/logo-192x192.png" />
                    <meta
                        name="apple-mobile-web-app-status-bar"
                        content="#000"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
