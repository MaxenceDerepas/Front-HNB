import Head from "next/head";
import Link from "next/link";
import styles from "../styles/index.module.css";
import Layout from "../components/layout";
import Image from "next/image";
import Ampoule from "../images/ampoule-heart-n-brain.png";
import Coeur from "../images/coeur-heart-n-brain.png";
import Pin from "../images/pin-heart-n-brain.png";
import { useState } from "react";
// import sgMail from "@sendgrid/mail";
// sgMail.setApiKey(
//     "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"
// );

export default function Home() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [sujet, setSujet] = useState("");
    const [message, setMessage] = useState("");
    const [succes, setSucces] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        // const msg = {
        //     to: "maxence.derepas@gmail.com",
        //     from: email,
        //     subject: sujet,
        //     text: message,
        //     html: "<strong>and easy to do anywhere, even with Node.js</strong>",
        // };
        // (async () => {
        //     try {
        //         await sgMail.send(msg);
        //     } catch (error) {
        //         console.error(error);

        //         if (error.response) {
        //             console.error(error.response.body);
        //         }
        //     }
        // })();
        setSucces("Message envoyé !");
    };

    return (
        <Layout>
            <Head>
                <title>
                    Coaching Anglais Professionnel | Paris | Heart n Brain
                </title>
                <meta
                    name="viewport"
                    content="width=320, user-scalable=yes"
                    id="wixMobileViewport"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />

                <meta property="og:site_name" content="Heart n Brain" />
                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content="Coaching Anglais Professionnel | Paris | Heart n Brain"
                />
                <meta
                    property="og:description"
                    content="Améliorez votre anglais professionnel grâce à la méthode de coaching Heart n Brain. Libérez-vous de vos blocages en anglais et faites de vos futurs défis professionnels un succès. En bref, révélez l’anglofan qui est en vous !"
                />
                <meta
                    name="description"
                    content="Vos coachs Heart n Brain partagent leurs tips, bonnes pratiques et exemples d'expériences pour vous aider à améliorer votre pratique de l'anglais professionnel !"
                />
                <meta
                    property="og:url"
                    content="https://www.heart-n-brain.com/"
                ></meta>
                <link rel="icon" href="/favicon-heart-n-brain.png" />
            </Head>
            <section className={styles.content}>
                <div className={styles.container}>
                    <div className={styles.title}>
                        <h1>
                            (Ré)apprenez à aimer l'anglais
                            <br />
                            Libérez votre potentiel
                        </h1>
                    </div>
                </div>

                <div className={styles.promise}>
                    <div className={styles.container}>
                        <div className={styles.padding}>
                            <div className={styles.separatorWhite}></div>

                            <h2 className={styles.h2}>NOTRE PROMESSE</h2>
                            <div className={styles.columns}>
                                <div className={styles.column}>
                                    <div className={styles.image}>
                                        <Image
                                            src={Ampoule}
                                            width={34}
                                            height={35}
                                            objectFit={"contain"}
                                            alt="Logo heart-n-brain"
                                            title="heart-n-brain"
                                        />
                                    </div>

                                    <p className={styles.p}>
                                        Un peu de brain
                                        <br />
                                        <strong className={styles.strong}>
                                            "I know how to work in English"
                                        </strong>
                                    </p>
                                    <p className={styles.p}>
                                        Une pédagogie novatrice, des exercices,
                                        des outils et des synthèses
                                        personnalisés pour être au plus proche
                                        de vos besoins en{" "}
                                        <strong className={styles.strong}>
                                            anglais opérationnel.
                                        </strong>
                                    </p>
                                    <p className={styles.p}>
                                        Ensemble, nous partageons et mettons en
                                        pratique des outils, utiles aussi bien
                                        en anglais qu'en français, pour les
                                        adopter sur{" "}
                                        <strong className={styles.strong}>
                                            le long terme
                                        </strong>{" "}
                                        !
                                    </p>
                                    <p className={styles.italique}>
                                        Présenter en public, animer une réunion,
                                        passer des entretiens, transmettre un
                                        savoir-faire, vendre…
                                    </p>
                                </div>
                                <div className={styles.column}>
                                    <div className={styles.image}>
                                        <Image
                                            src={Coeur}
                                            width={34}
                                            height={35}
                                            objectFit={"contain"}
                                            alt="Logo heart-n-brain"
                                            title="heart-n-brain"
                                        />
                                    </div>

                                    <p className={styles.p}>
                                        Beaucoup de heart
                                        <br />{" "}
                                        <strong className={styles.strong}>
                                            {" "}
                                            "I feel like speaking English"
                                        </strong>
                                    </p>
                                    <p className={styles.p}>
                                        Une expérience libératoire en face à
                                        face ou à distance pour{" "}
                                        <strong className={styles.strong}>
                                            dépasser ses blocages en anglais
                                        </strong>
                                        , retrouver l’envie de pratiquer et de
                                        s’améliorer.
                                    </p>
                                    <p className={styles.p}>
                                        Nous ne cherchons pas le perfect English
                                        mais le{" "}
                                        <strong className={styles.strong}>
                                            feel-good English
                                        </strong>
                                        , celui qui vous permet de prendre du
                                        plaisir à échanger en anglais.
                                    </p>
                                    <p className={styles.italique}>
                                        Adopter la bonne posture, travailler son
                                        accent et sa prononciation, réagir en
                                        situations complexes…
                                    </p>
                                </div>
                                <div className={styles.column}>
                                    <div className={styles.image}>
                                        <Image
                                            src={Pin}
                                            width={34}
                                            height={35}
                                            objectFit={"contain"}
                                            alt="Logo heart-n-brain"
                                            title="heart-n-brain"
                                        />
                                    </div>

                                    <p className={styles.p}>
                                        Votre objectif
                                        <br />
                                        <strong className={styles.strong}>
                                            Maximiser votre potentiel
                                        </strong>
                                    </p>
                                    <p className={styles.p}>
                                        Chez nous, pas d’évaluation formelle de
                                        votre anglais académique. Nous nous
                                        engageons ensemble vers{" "}
                                        <strong className={styles.strong}>
                                            un objectif concret, sur une période
                                            définie.
                                        </strong>
                                    </p>
                                    <p className={styles.p}>
                                        Nous mesurons votre réussite à votre
                                        aisance et à l’atteinte de votre plein
                                        potentiel dans des situations de{" "}
                                        <strong className={styles.strong}>
                                            communication en anglais
                                            professionnel.
                                        </strong>
                                    </p>
                                    <p className={styles.italique}>
                                        Nous nous adaptons à vos besoins tout au
                                        long du parcours pour vous garantir une
                                        évolution soutenue.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.container}>
                    <div className={styles.reveal}>
                        <div className={styles.separatorBlack}></div>
                        <h2 className={styles.h2}>
                            révélons l'anglofan en vous
                        </h2>
                        <p>
                            Être anglofan ce n'est pas avoir l'accent de Clint
                            Eastwood ​ni connaître par cœur ses verbes
                            irréguliers.
                        </p>
                        <p>
                            Être anglofan c'est avoir envie de prendre du
                            plaisir à parler anglais pour se faire comprendre et
                            s'ouvrir des opportunités.
                        </p>
                        <div className={styles.columnsVideo}>
                            <div className={styles.video}>
                                <iframe
                                    className={styles.movie}
                                    src="https://res.cloudinary.com/dprljzowa/video/upload/v1633456973/Re_d%C3%A9couvrez_Heart_n_Brain_opkk8z.mp4"
                                    height="230px"
                                    width="460px"
                                />
                            </div>
                            <div>
                                <p style={{ marginBottom: "35px" }}>
                                    Nous vous accompagnons avec une méthode
                                    ludique et professionnelle qui mêle
                                    challenge et bienveillance. Notre objectif
                                    c’est que vous n’ayez plus peur de parler
                                    anglais, de libérer votre potentiel.
                                </p>
                                <p>
                                    <strong className={styles.strong}>
                                        La méthode Heart n Brain est faite pour
                                        vous si :
                                    </strong>
                                </p>
                                <ul className={styles.ul}>
                                    <li>
                                        Vous êtes capable de vous exprimer
                                        simplement et de comprendre une
                                        conversation de la vie courante en
                                        anglais.
                                    </li>
                                    <li>
                                        Vous êtes motivé pour améliorer votre
                                        anglais professionnel.
                                    </li>
                                </ul>
                                <p className={styles.italique}>
                                    Pour en savoir davantage sur nos
                                    accompagnements et notre méthode,{" "}
                                    <Link href="/notre-methode">
                                        <a className={styles.a}>
                                            c’est par ici.
                                        </a>
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="contact" className={styles.contact}>
                <div className={styles.container}>
                    <div className={styles.padding}>
                        <div className={styles.separatorWhite}></div>
                        <h2 className={styles.h2}>CONTACT</h2>
                        <p className={styles.text}>
                            Besoin d'un renseignement ? Envie de vous lancer ?
                            <br />
                            Vous ne trouvez pas la réponse à une question
                            spécifique (déroulement des séances, certification,
                            accueil des personnes en situation de handicap… ) ?
                            <br />
                            N'hésitez pas à nous écrire !<br /> Le premier
                            échange et la séance d'essai sont gratuits et sans
                            engagement !{" "}
                            <span className={styles.span}>
                                contact@heart-n-brain.com
                            </span>
                        </p>
                        <form className={styles.form} onSubmit={handleSubmit}>
                            <input
                                required
                                className={styles.input}
                                placeholder="Nom*"
                                type="text"
                                name="name"
                                value={name}
                                onChange={(e) => {
                                    setName(e.target.value);
                                }}
                            />
                            <input
                                required
                                className={styles.input}
                                placeholder="Email*"
                                type="email"
                                name="email"
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                }}
                            />
                            <input
                                required
                                className={styles.input}
                                type="text"
                                placeholder="Sujet*"
                                name="sujet"
                                value={sujet}
                                onChange={(e) => {
                                    setSujet(e.target.value);
                                }}
                            />
                            <textarea
                                required
                                className={styles.area}
                                type="textarea"
                                placeholder="Message"
                                name="message"
                                value={message}
                                onChange={(e) => {
                                    setMessage(e.target.value);
                                }}
                            />
                            <div className={styles.succes}>
                                <p>{succes}</p>
                                <input
                                    className={styles.button}
                                    type="submit"
                                    value="Envoyer"
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
