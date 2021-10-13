import "../styles/globals.css";
import "../fonts/stylesheet.css";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
