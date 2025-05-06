import Layout from "../components/layout";
import Head from "next/head";
import styles from "../styles/LegalNotice.module.css";
import Link from "next/link";

export async function getStaticProps() {
    // Fetch data from external API
    const res = await fetch(
        `https://back-hnb-80318acc2db1.herokuapp.com/MentionsLegales`
    );
    const data = await res.json();

    // Pass data to the page via props
    return { props: { data } };
}

export default function LegalNotice({ data }) {
    return (
        <Layout>
            <Head>
                <title>
                    Mentions Légales et confidentialité | Heart n Brain
                </title>
                <meta property="og:image" content="/partage.png" />
                <meta property="og:image:width" content="600" />
                <meta property="og:image:height" content="313" />

                <link
                    rel="canonical"
                    href="https://www.heart-n-brain.com/mentions-legales-confidentialite"
                ></link>
                <meta http-equiv="Accept-CH" content="Viewport-Width, Width" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <meta
                    property="og:description"
                    content={`${data.description}`}
                />
                <meta
                    name="description"
                    content="Vos coachs Heart n Brain partagent leurs tips, bonnes pratiques et exemples d'expériences pour vous aider à améliorer votre pratique de l'anglais professionnel !"
                />
                <meta property="og:site_name" content="Heart n Brain" />
                <meta property="og:type" content="website" />
                <link rel="icon" href="/favicon-heart-n-brain.png" />
                <meta
                    property="og:url"
                    content="https://front-hnb.vercel.app/mentions-legales-confidentialite"
                ></meta>
            </Head>
            <section className={styles.container}>
                <h1 className={styles.h1}>MENTIONS LéGALEs</h1>
                <h3 className={styles.h3}>EDITEUR</h3>
                <p>Heart n Brain SAS</p>
                <Link href="/">
                    <a className={styles.a}>https://www.heart-n-brain.com/</a>
                </Link>
                <p>17, Boulevard FINOT</p>
                <p>93200 Saint-Denis</p>
                <p>contact@heart-n-brain.com</p>
                <p>Capital social de 5.000 euros</p>
                <p>SIRET 850 609 389 00026</p>
                <p style={{ marginBottom: "20px" }}>
                    Directeur de la publication : Sarah EKIZIAN
                </p>
                <h3 style={{ marginBottom: "5px" }} className={styles.h3}>
                    Hébergeur
                </h3>
                <p>hostinger</p>
                <a className={styles.a} href="https://www.hostinger.fr/">
                    https://www.hostinger.fr/
                </a>
                <p style={{ marginBottom: "30px" }}> </p>
                <h2 className={styles.h2}>
                    Politique de confidentialité et de traitement des données
                    personnelles dE Heart n Brain
                </h2>
                <p style={{ marginBottom: "15px" }}>
                    La société Heart n Brain, soucieuse des droits des individus
                    et dans une volonté de transparence avec ses clients, a mis
                    en place une politique reprenant l’ensemble de ces
                    traitements, des finalités poursuivies par ces derniers
                    ainsi que des moyens d’actions à la disposition des
                    individus afin qu’ils puissent au mieux exercer leurs
                    droits.
                </p>
                <p style={{ marginBottom: "20px" }}>
                    Pour toute information complémentaire sur la protection des
                    données personnelles, nous vous invitons à consulter le site
                    :{" "}
                    <a className={styles.a} href="https://www.cnil.fr/">
                        https://www.cnil.fr/
                    </a>
                </p>
                <h3 className={styles.h3}>
                    Responsable du traitement (au sens de la loi 78-17 dite loi
                    « CNIL »)
                </h3>
                <p style={{ marginBottom: "20px" }}>
                    Vos données sont collectées par :<br />
                    Heart n Brain, SAS au capital de 5.000 euros, immatriculée
                    au Registre du Commerce et des Sociétés de Paris sous le n°
                    850 609 389, dont le siège social se situe au 17, boulevard
                    Finot, 93200 Saint-Denis, représentée par Morgane Duphot,
                    Présidente.
                    <br />
                    Ci-après dénommée « HnB » Au sens des articles 34 et 35 de
                    la Loi 78-17, HnB agit en tant que Responsable de
                    Traitement.
                    <br />
                    Site internet de HnB :{" "}
                    <a
                        className={styles.a}
                        href="https://www.heart-n-brain.com/"
                    >
                        https://www.heart-n-brain.com/
                    </a>
                </p>
                <h3 className={styles.h3}>
                    Identification des données collectées, finalités et
                    exploitation des données traitées
                </h3>
                <p className={styles.p}>
                    Afin d’assurer ses engagements contractuels vis-à-vis de ses
                    clients, HnB collecte les données nécessaires à la mise en
                    œuvre de ses prestations.
                </p>
                <p className={styles.p}>
                    Ces données sont collectées lorsque le client :
                </p>
                <ul className={styles.ul}>
                    <li>Consulte le site d’HnB ;</li>
                    <li>
                        Remplit un formulaire de contact sur le site d’HnB ;
                    </li>
                    <li>
                        Envoie un courrier électronique à
                        contact@heart-n-brain.com ;
                    </li>
                    <li>Contacte HnB par téléphone ;</li>
                    <li>
                        Rencontre l’un des représentants de la société HnB ;
                    </li>
                    <li>
                        S'inscrit ou participe à une formation dispensée par la
                        société HnB.
                    </li>
                </ul>
                <p className={styles.p}>
                    Dans le cadre des activités de collecte mentionnées
                    ci-avant, HnB collecte les données suivantes :
                </p>
                <ul className={styles.ul}>
                    <li>Civilité</li>
                    <li>Nom</li>
                    <li>Prénom(s)</li>
                    <li>Adresse(s)</li>
                    <li>Numéro(s) de téléphone</li>
                    <li>Adresse(s) de courrier électronique</li>
                    <li>Poste et fonction occupés</li>
                    <li>Société</li>
                    <li>Adresse IP</li>
                    <li>
                        Données relatives aux moyens de paiement : données
                        bancaires (notamment relevé d’identité postale ou
                        bancaire), numéro de chèque
                    </li>
                    <li>
                        Demandes de séances d’essai, de services, quantité,
                        montant, périodicité, historique de relation
                        contractuelle, origine de la vente, correspondances avec
                        le client, commentaires des clients et prospects
                    </li>
                    <li>
                        ​Autres données éventuellement partagées: âge, centres
                        d’intérêt, objectif professionnel, objectif de coaching,
                        niveau d’étude en anglais.
                    </li>
                </ul>
                <p className={styles.p}>
                    Afin de mieux appréhender les traitements de données
                    effectués par HnB, nous vous informons qu’HnB peut traiter
                    vos données dans le cadre des finalités suivantes :
                </p>
                <ul className={styles.ul}>
                    <li>
                        La réalisation de traitements relatifs à la gestion des
                        clients et en particulier des contrats ; les commandes ;
                        les factures ; la comptabilité, et en particulier la
                        gestion des comptes clients ; les programmes de fidélité
                        ; le suivi de la relation client tel que la réalisation
                        d'enquêtes de satisfaction, la gestion des réclamations
                        et du service après-vente ; la gestion des impayés et du
                        contentieux ; la sélection de clients pour réaliser des
                        études, sondages et tests.
                    </li>
                    <li>
                        La réalisation de traitements relatifs à la prospection
                        commerciale ; la sélection de personnes pour réaliser
                        des actions de fidélisation, de prospection, d'étude, de
                        sondage, d’essai et de promotion ; la réalisation
                        d'opérations de sollicitations ; l'élaboration de
                        statistiques commerciales ; l'organisation de toute
                        opération promotionnelle ; la gestion des avis des
                        personnes sur les services ou contenus.
                    </li>
                </ul>
                <h3 className={styles.h3}>Hébergement des données</h3>
                <p className={styles.p}>
                    Les données collectées et traitées par HnB sont notamment
                    hébergées sur les serveurs de Google (Europe ou Etats-Unis
                    le cas échéant) :{" "}
                    <a
                        className={styles.a}
                        href="https://policies.google.com/privacy?hl=fr"
                    >
                        https://policies.google.com/privacy?hl=fr
                    </a>
                </p>
                <h3 className={styles.h3}>
                    Destination des données collectées
                </h3>
                <p className={styles.p}>
                    Les données collectées pourront également être transmises à
                    des tiers dès lors que cette transmission sera rendue
                    indispensable à la réalisation du contrat qui lie HnB à son
                    client.
                </p>
                <h3 className={styles.h3}>Durée de conservation des données</h3>
                <p className={styles.p}>
                    Les données sont conservées et utilisées pour une durée
                    conforme à la législation en vigueur.
                </p>
                <h3 className={styles.h3}>
                    Droit d’accès et de rectification de vos données
                </h3>
                <p className={styles.p}>
                    Conformément à la Loi 78-17 « Informatique et Libertés » du
                    6 janvier 1978, chaque personne dispose d’un droit d’accès,
                    de rectification et d’opposition à ses données personnelles.
                </p>
                <p className={styles.p}>
                    Vous pouvez exercer ce droit en nous contactant, à l’adresse
                    suivante :
                </p>
                <p className={styles.p}>
                    Heart n Brain – 17, boulevard Finot - 93200 Saint-Denis
                    <br />
                    Ou par email : contact@heart-n-brain.com
                </p>
                <p className={styles.p}>
                    Conformément à l’article 40 de la loi précitée, toute
                    demande doit être accompagnée de la photocopie d’un titre
                    d’identité en cours de validité signé et faire mention de
                    l’adresse à laquelle HnB pourra contacter le demandeur. La
                    réponse sera adressée dans le mois suivant la réception de
                    la demande.
                </p>
                <p className={styles.p}>
                    De plus, et depuis la loi n°2016-1321 du 7 octobre 2016, les
                    personnes qui le souhaitent, ont la possibilité d’organiser
                    le sort de leurs données après leur décès. Pour plus
                    d’information sur le sujet, vous pouvez consulter le site
                    Internet de la CNIL :{" "}
                    <a className={styles.a} href="https://www.cnil.fr/">
                        https://www.cnil.fr/.
                    </a>
                </p>
                <p className={styles.p}>
                    Enfin, chaque personne dispose d’un droit à la portabilité
                    des données personnelles qu’elle a transmise au responsable
                    de traitement. Ce droit s’applique dans les mêmes conditions
                    que le droit d’accès et de rectification.
                </p>
                <h3 className={styles.h3}>Utilisation des « cookies »</h3>
                <p className={styles.p}>Qu’est-ce qu’un « cookie » ?</p>
                <p className={styles.p}>
                    Un « cookie » ou traceur est un fichier électronique déposé
                    sur un terminal (ordinateur, tablette, smartphone…) et lu
                    par exemple lors de la consultation d'un site internet, de
                    la lecture d'un courrier électronique, de l'installation ou
                    de l'utilisation d'un logiciel ou d'une application mobile
                    et ce quel que soit le type de terminal utilisé. (Source :{" "}
                    <a
                        className={styles.a}
                        href="https://www.cnil.fr/fr/cookies-traceurs-que-dit-la-loi"
                    >
                        https://www.cnil.fr/fr/cookies-traceurs-que-dit-la-loi
                    </a>
                    )
                </p>
                <p className={styles.p}>
                    En navigant sur le site d’HnB, des « cookies » émanant de la
                    société responsable du site concerné et/ou des sociétés
                    tiers pourront être déposés sur votre terminal.
                </p>
                <p className={styles.p}>
                    Lors de la première navigation sur le site d'HnB, une
                    bannière explicative sur l’utilisation des « cookies »
                    apparaitra. Dès lors, en poursuivant la navigation, le
                    client et/ou prospect sera réputé informé et avoir accepté
                    l’utilisation desdits « cookies ». Le consentement donné
                    sera valable pour une période de treize (13) mois.
                </p>
                <p className={styles.p}>
                    Pour plus d’informations sur l’utilisation, la gestion et la
                    suppression des « cookies », pour tout type de navigateur,
                    nous vous invitons à consulter le lien suivant :
                </p>
                <p className={styles.p}>
                    <a
                        className={styles.a}
                        href="https://www.cnil.fr/fr/cookies-les-outils-pour-les-maitriser"
                    >
                        https://www.cnil.fr/fr/cookies-les-outils-pour-les-maitriser
                    </a>
                </p>
                <p className={styles.p}>
                    Une donnée à caractère personnel désigne toute information
                    concernant une personne physique identifiée ou identifiable
                    (personne concernée) ; est réputée identifiable une personne
                    qui peut être identifiée, directement ou indirectement,
                    notamment par référence à un numéro d'identification ou à un
                    ou plusieurs éléments spécifiques, propres à son identité
                    physique, physiologique, psychique, économique, culturelle
                    ou sociale.
                </p>
            </section>
        </Layout>
    );
}
