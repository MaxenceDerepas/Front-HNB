import styles from "../styles/Cookie.module.css";
import Link from "next/link";

const Cookie = ({ acceptCookie }) => {
    return (
        <section className={styles.cookie}>
            <p>
                Nous utilisons des cookies pour vous assurer un bon
                fonctionnement du site, établir des statistiques de
                fréquentation et comprendre les interactions de nos visiteurs
                avec notre service. Ces cookies ne sont déposés que si vous y
                consentez en cliquant sur l'onglet "Accepter".{" "}
                <Link href="/mentions-legales-confidentialite">
                    <a className={styles.a}>
                        Voir la politique de confidentialité
                    </a>
                </Link>
            </p>
            <div className={styles.buttons}>
                <div
                    onClick={() => {
                        acceptCookie(false);
                    }}
                    className={styles.refuse}
                >
                    <p>Tout refuser</p>
                </div>
                <div
                    onClick={() => {
                        acceptCookie(true);
                    }}
                    className={styles.accept}
                >
                    <p>Accepter</p>
                </div>
            </div>
        </section>
    );
};
export default Cookie;
