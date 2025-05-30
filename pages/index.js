import Head from "next/head";
import Link from "next/link";
import styles from "../styles/index.module.css";
import Layout from "../components/layout";
import Image from "next/image";
import Ampoule from "../images/ampoule-heart-n-brain.png";
import Coeur from "../images/coeur-heart-n-brain.png";
import Pin from "../images/pin-heart-n-brain.png";
import { useState, useEffect } from "react";
import { useInView } from "react-cool-inview";
import emailjs from "@emailjs/browser";
import { TailSpin } from "react-loader-spinner";

import SocialLinkedin from "../images/linkedinSocial.webp";
import SocialInsta from "../images/instaSocial.webp";
import Qualiopi from "../images/Qualiopi.png";
import LogoFinal from "../images/LOGO-FINAL.png";

export async function getStaticProps() {
    // Fetch data from external API
    const res = await fetch(`https://back-hnb-80318acc2db1.herokuapp.com/Home`);
    const data = await res.json();

    // Pass data to the page via props
    return { props: { data } };
}

export default function Home({ data }) {
    const [visible, setVisible] = useState(false);
    const [loader, setLoader] = useState(false);
    const [width, setWidth] = useState(null);

    useEffect(() => {
        setWidth(window.innerWidth);
    }, []);

    const { observe } = useInView({
        threshold: 1,
        onEnter: () => {
            setVisible(true);
        },
        onLeave: () => {
            setVisible(false);
        },
    });

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [succes, setSucces] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoader(true);

        emailjs.init(`user_pdd4xrYEWf15fTrS03aXr`);

        await emailjs
            .send("service_ouw6v6j", "template_80x9feq", {
                name: name,
                email: email,
                subject: subject,
                message: message,
            })
            .then(
                function (response) {
                    console.log("SUCCESS!", response.status, response.text);
                    setSucces("Message envoyé !");
                    setName("");
                    setEmail("");
                    setMessage("");
                    setSubject("");
                },
                function (error) {
                    console.log("FAILED...", error);
                    setSucces("Une erreur s'est produite");
                }
            );

        setLoader(false);
    };

    return (
        <Layout visible={visible}>
            <Head>
                <title>
                    Coaching Anglais Professionnel | Paris | Heart n Brain
                </title>
                <meta name="robots" content="index,follow" />
                <meta name="googlebot" content="index,follow" />
                <link
                    rel="canonical"
                    href="https://www.heart-n-brain.com/"
                ></link>
                <meta http-equiv="Accept-CH" content="Viewport-Width, Width" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <meta property="og:image" content="/partage.png" />
                <meta property="og:image:width" content="600" />
                <meta property="og:image:height" content="313" />
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
            <a href="/CertificatRNQ.pdf" target="_blank">
                clique ici
            </a>
            <section className={styles.content}>
                <div className={styles.fondEcran}></div>
                <div className={styles.title}>
                    <div className={styles.container}>
                        <h1>
                            (Ré)apprenez à aimer l'anglais
                            <br />
                            Libérez votre potentiel
                        </h1>
                    </div>
                </div>

                <div className={styles.promise}>
                    <div className={styles.container}>
                        <div className={styles.slider}>
                            <div className={styles.sliderTrack}>
                                <div className={styles.slide}>
                                    <img
                                        className={styles.imgSlide}
                                        style={{ width: "144px" }}
                                        src="/loreal.png"
                                        alt="logo l'oréal"
                                        title="logo l'oréal"
                                    />
                                </div>
                                <div className={styles.slide}>
                                    <img
                                        className={styles.imgSlide}
                                        style={{ width: "131px" }}
                                        src="/Accenture.png"
                                        alt="logo Accenture"
                                        title="logo Accenture"
                                    />
                                </div>
                                <div className={styles.slide}>
                                    <img
                                        className={styles.imgSlide}
                                        style={{ width: "121px" }}
                                        src="/Delsey.png"
                                        alt="logo delsey"
                                        title="logo delsey"
                                    />
                                </div>
                                <div className={styles.slide}>
                                    <img
                                        className={styles.imgSlide}
                                        style={{ width: "71px" }}
                                        src="/HEC.png"
                                        alt="logo HEC"
                                        title="logo HEC"
                                    />
                                </div>
                                <div className={styles.slide}>
                                    <img
                                        style={{
                                            width: "163px",
                                            height: "25px",
                                        }}
                                        src="/Keolis.png"
                                        alt="logo Keolis"
                                        title="logo Keolis"
                                    />
                                </div>
                                <div className={styles.slide}>
                                    <img
                                        className={styles.imgSlide}
                                        style={{ width: "124px" }}
                                        src="/Meilleurs-Agents.png"
                                        alt="logo meilleurs agents"
                                        title="logo meilleurs agents"
                                    />
                                </div>
                                <div className={styles.slide}>
                                    <img
                                        className={styles.imgSlide}
                                        style={{ width: "121px" }}
                                        src="/Pega.png"
                                        alt="logo Pega"
                                        title="logo Pega"
                                    />
                                </div>
                                <div className={styles.slide}>
                                    <img
                                        className={styles.imgSlide}
                                        style={{ width: "109px" }}
                                        src="/ubisoft.png"
                                        alt="logo ubisoft"
                                        title="logo ubisoft"
                                    />
                                </div>
                                <div className={styles.slide}>
                                    <img
                                        style={{ height: "40px" }}
                                        src="/Decathlon.png"
                                        alt="logo Decathlon"
                                        title="logo Decarhlon"
                                    />
                                </div>
                                <div className={styles.slide}>
                                    <img
                                        src="/allianz-trade.png"
                                        alt="Allianz"
                                        title="Allianz"
                                    />
                                </div>
                                <div className={styles.slide}>
                                    <img
                                        className={styles.imgSlide}
                                        style={{ width: "144px" }}
                                        src="/loreal.png"
                                        alt="logo l'oréal"
                                        title="logo l'oréal"
                                    />
                                </div>
                                <div className={styles.slide}>
                                    <img
                                        className={styles.imgSlide}
                                        style={{ width: "131px" }}
                                        src="/Accenture.png"
                                        alt="logo Accenture"
                                        title="logo Accenture"
                                    />
                                </div>
                                <div className={styles.slide}>
                                    <img
                                        className={styles.imgSlide}
                                        style={{ width: "121px" }}
                                        src="/Delsey.png"
                                        alt="logo delsey"
                                        title="logo delsey"
                                    />
                                </div>
                                <div className={styles.slide}>
                                    <img
                                        className={styles.imgSlide}
                                        style={{ width: "71px" }}
                                        src="/HEC.png"
                                        alt="logo HEC"
                                        title="logo HEC"
                                    />
                                </div>
                                <div className={styles.slide}>
                                    <img
                                        style={{
                                            width: "163px",
                                            height: "25px",
                                        }}
                                        src="/Keolis.png"
                                        alt="logo Keolis"
                                        title="logo Keolis"
                                    />
                                </div>
                            </div>
                        </div>
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
                            <p className={styles.finPromess}>
                                Tous nos accompagnements peuvent également se
                                décliner en français sur demande.
                            </p>
                        </div>
                    </div>
                </div>
                <div className={styles.container}>
                    <div className={styles.reveal}>
                        <div className={styles.separatorBlack}></div>
                        <h2 className={styles.h2}>
                            révélons l'anglofan en vous
                        </h2>
                        <p className={styles.p}>
                            Être anglofan ce n'est pas avoir l'accent de Clint
                            Eastwood ​ni connaître par cœur ses verbes
                            irréguliers.
                            <br />
                            Être anglofan c'est avoir envie de prendre du
                            plaisir à parler anglais pour se faire comprendre et
                            s'ouvrir des opportunités.
                        </p>
                        <div className={styles.columnsVideo}>
                            <div className={styles.video}>
                                <video
                                    controls
                                    className={styles.movie}
                                    src="https://res.cloudinary.com/dprljzowa/video/upload/v1633456973/Re_d%C3%A9couvrez_Heart_n_Brain_opkk8z.mp4"
                                    height="230px"
                                    width="460px"
                                    alt="video presentation heart n brain"
                                    title="presentation heart n brain"
                                />
                            </div>
                            <div>
                                <p
                                    className={styles.p}
                                    style={{ marginBottom: "35px" }}
                                >
                                    Nous vous accompagnons avec une méthode
                                    ludique et professionnelle qui mêle
                                    challenge et bienveillance. Notre objectif
                                    c’est que vous n’ayez plus{" "}
                                    <strong className={styles.bold}>
                                        peur de parler anglais, de libérer votre
                                        potentiel.
                                    </strong>
                                </p>
                                <p className={styles.p}>
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
                                        <a id="contact" className={styles.a}>
                                            c’est par ici.
                                        </a>
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section ref={observe} className={styles.contact}>
                <div className={styles.container}>
                    <div className={styles.padding}>
                        <div className={styles.separatorWhite}></div>
                        <h2 className={styles.h2}>CONTACT</h2>
                        <div className={styles.contactTextHnb}>
                            <p className={styles.text}>
                                Besoin d'un renseignement ? Envie de vous lancer
                                ?
                                <br />
                                Vous ne trouvez pas la réponse à une question
                                spécifique (déroulement des séances,
                                certification, accueil des personnes en
                                situation de handicap… ) ?
                                <br />
                                N'hésitez pas à nous écrire !<br /> Le premier
                                échange et la séance d'essai sont gratuits et
                                sans engagement !{" "}
                                <span className={styles.span}>
                                    contact@heart-n-brain.com
                                </span>
                            </p>
                            {width > 650 && (
                                <div className={styles.LogoFinal}>
                                    <Image
                                        className={styles.LogoFinal}
                                        src={LogoFinal}
                                        alt="certifié qualiopi"
                                        title="certification qualiopi"
                                        width={174}
                                        height={100}
                                    />
                                </div>
                            )}
                        </div>

                        <div className={styles.formSocial}>
                            <form
                                className={styles.form}
                                onSubmit={handleSubmit}
                            >
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
                                    name="subject"
                                    value={subject}
                                    onChange={(e) => {
                                        setSubject(e.target.value);
                                    }}
                                />
                                <textarea
                                    required
                                    className={styles.area}
                                    type="textarea"
                                    placeholder="Message*"
                                    name="message"
                                    value={message}
                                    onChange={(e) => {
                                        setMessage(e.target.value);
                                    }}
                                />
                                <div className={styles.succes}>
                                    <p>{succes}</p>
                                    {loader === false ? (
                                        <input
                                            className={styles.button}
                                            type="submit"
                                            value="Envoyer"
                                        />
                                    ) : (
                                        <TailSpin
                                            height="30"
                                            width="30"
                                            color="#8D8D8D"
                                            ariaLabel="tail-spin-loading"
                                            radius="1"
                                            wrapperStyle={{}}
                                            wrapperClass=""
                                            visible={true}
                                        />
                                    )}
                                </div>
                            </form>
                            <div className={styles.contactRight}>
                                {width <= 650 && (
                                    <div className={styles.LogoFinal}>
                                        <Image
                                            className={styles.LogoFinal}
                                            src={LogoFinal}
                                            alt="certifié qualiopi"
                                            title="certification qualiopi"
                                            height={100}
                                            width={174}
                                        />
                                    </div>
                                )}

                                <div className={styles.qualiopi}>
                                    <Image
                                        src={Qualiopi}
                                        alt="certifié qualiopi"
                                        title="certification qualiopi"
                                        width={131}
                                        height={70}
                                    />
                                    <p className={styles.qualiopiP}>
                                        La certification de qualité a été
                                        délivrée au titre de la catégorie
                                        d'action suivante : <br /> ACTIONS DE
                                        FORMATION.
                                        <br />
                                        <br />
                                        <a
                                            className={styles.buttonCertif}
                                            href="/CertificatRNQ.pdf"
                                            target="_blank"
                                        >
                                            CONSULTER LE CERTIFICAT
                                        </a>
                                    </p>
                                </div>

                                <div className={styles.buttonSocial}>
                                    <p
                                        style={{
                                            fontFamily: "Caviar Dreams",
                                            fontSize: "22px",
                                        }}
                                    >
                                        FOLLOW US
                                    </p>
                                    <div className={styles.imgSocial}>
                                        <div className={styles.linkedin}>
                                            <a
                                                rel="noopener"
                                                target="_blank"
                                                style={{ cursor: "pointer" }}
                                                href="https://www.linkedin.com/company/heart-n-brain/"
                                            >
                                                <Image
                                                    src={SocialLinkedin}
                                                    alt="lien linkedin heart n brain"
                                                    title="lien linkedin"
                                                    height={30}
                                                    width={30}
                                                />
                                            </a>
                                        </div>
                                        <div>
                                            <a
                                                rel="noopener"
                                                target="_blank"
                                                style={{ cursor: "pointer" }}
                                                href="https://www.instagram.com/_heart_n_brain_/"
                                            >
                                                <Image
                                                    src={SocialInsta}
                                                    alt="lien instagram heart n brain"
                                                    title="lien instagram"
                                                    height={30}
                                                    width={30}
                                                />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
