import Layout from "../components/layout";
import Head from "next/head";
import styles from "../styles/Faq.module.css";
import Link from "next/link";
import fond from "../images/heart-n-brain-fond-ecran.webp";

export async function getStaticProps() {
    // Fetch data from external API
    const res = await fetch(`https://hnb-app.herokuapp.com/Faq`);
    const data = await res.json();

    // Pass data to the page via props
    return { props: { data } };
}

export default function Faq({ data }) {
    return (
        <Layout>
            <Head>
                <title>
                    Foire aux questions | Coaching Anglais Professionnel | Paris
                    | Heart n Brain
                </title>
                <meta name="robots" content="index,follow" />
                <meta name="googlebot" content="index,follow" />
                <meta property="og:image" content="/partage.png" />

                <link
                    rel="canonical"
                    href="https://front-hnb.vercel.app/faq"
                ></link>
                <meta http-equiv="Accept-CH" content="Viewport-Width, Width" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <meta property="og:site_name" content="Heart n Brain" />
                <meta property="og:type" content="website" />

                <meta
                    name="description"
                    content="Vos coachs Heart n Brain partagent leurs tips, bonnes pratiques et exemples d'expériences pour vous aider à améliorer votre pratique de l'anglais professionnel !"
                />
                <meta
                    property="og:title"
                    content="Foire aux questions | Coaching Anglais Professionnel | Paris | Heart n Brain"
                />
                <meta
                    property="og:url"
                    content="https://www.heart-n-brain.com/faq"
                ></meta>
                <meta
                    property="og:description"
                    content={`${data.description}`}
                />
                <link rel="icon" href="/favicon-heart-n-brain.png" />
            </Head>
            <section className={styles.content}>
                <img className={styles.fondEcran} src="/fond.webp" />
                <div className={styles.container}>
                    <h1 className={styles.title}>
                        Comment savoir si la méthode Heart n Brain est faite
                        pour moi ?
                    </h1>
                    <ul className={styles.list}>
                        <li>
                            Vous arrivez à vous exprimer simplement mais prendre
                            la parole en anglais en public vous rend nerveux ?
                        </li>
                        <li>
                            Vous avez répété 12 fois votre question dans votre
                            tête mais au moment d'intervenir en réunion, vous
                            n'osez plus vous lancer ?
                        </li>
                        <li>
                            Des interlocuteurs anglophones vous posent une
                            question que vous ne comprenez pas bien mais vous
                            n’osez pas les faire répéter ?
                        </li>
                        <li>
                            Un recruteur vous propose le job de vos rêves mais
                            le fait que cela soit en anglais vous angoisse ?
                        </li>
                    </ul>
                    <p
                        style={{
                            lineHeight: " 16px",
                            marginBottom: "20px",
                            marginTop: "20px",
                        }}
                    >
                        Bref, vous sentez que vous manquez d'aisance en anglais
                        et que cela vous empêche d'atteindre votre plein
                        potentiel professionnel.
                    </p>
                    <p className={styles.text}>
                        Si vous vous reconnaissez dans l’une de ces situations,
                        c'est que la méthode de coaching en anglais
                        professionnel d'Heart n Brain est faite pour vous !
                    </p>
                    <h2 className={styles.title}>
                        Comment en être certain(e) ?
                    </h2>
                    <p className={styles.text}>
                        Avant de démarrer un coaching ou un accompagnement Heart
                        n Brain, deux étapes préliminaires gratuites et sans
                        engagement vous sont proposées.
                    </p>
                    <p className={styles.textList}>
                        1. L'appel de préqualification de 20 mn : votre future
                        coach vous contacte pour un premier court échange
                        téléphonique afin de creuser votre besoin, vos objectifs
                        et vos éventuels blocages. Nous vérifions ainsi qu'ils
                        sont en adéquation avec notre accompagnement. Si c'est
                        le cas, nous convenons d'un 2ème rdv !
                    </p>
                    <p className={styles.textList}>
                        2. La séance d'essai d'1h : votre future coach vous
                        rencontre (en présentiel ou à distance) pour valider
                        votre besoin détaillé d'accompagnement et pour vous
                        présenter la pédagogie Heart n Brain à travers quelques
                        courts exercices en anglais.
                    </p>
                    <p className={styles.text}>
                        A l'issue de cette séance, nous vous proposons un
                        accompagnement sur mesure.
                    </p>
                    <p className={styles.text}>
                        Une fois que nous nous sommes mis d'accord, nous sommes
                        prêts à démarrer !
                    </p>
                    <h2 className={styles.title}>
                        Faut-il un niveau minimum en anglais ?
                    </h2>
                    <p className={styles.text}>
                        Pour que le coaching Heart n Brain vous soit vraiment
                        bénéfique, nous préconisons un niveau minimum d'aisance
                        en anglais qui vous permet d'interagir lors de
                        conversations simples en utilisant du vocabulaire
                        courant, même si cela vous demande des efforts.
                    </p>
                    <h2 className={styles.title}>Qui sont les coaches ?</h2>
                    <p className={styles.text}>
                        Nous sommes deux coaches, Morgane et Sarah, également
                        fondatrices d'Heart n Brain.
                        <br />
                        Pour plus d'informations nous concernant,{" "}
                        <Link href="/notre-mission#us">
                            <a className={styles.a}>c'est par ici.</a>
                        </Link>
                    </p>
                    <h2 className={styles.title}>
                        Comment se déroule un parcours individuel ?
                    </h2>
                    <p className={styles.text}>
                        A l'issue de la séance d'essai, votre future coach vous
                        soumet une proposition de parcours.
                    </p>
                    <p className={styles.text}>Ce parcours combine : </p>
                    <ul className={styles.list}>
                        <li>
                            Un nombre de séances, d'une durée d'1h30, réalisées
                            en présentiel et/ou à distance
                        </li>
                        <li>
                            Un objectif fil rouge, comme par exemple, « Gagner
                            en leadership en anglais »
                        </li>
                        <li>
                            Des sous-objectifs travaillés au fil des séances,
                            comme par exemple, « savoir introduire et animer une
                            réunion », « prendre la parole en anglais sur un
                            sujet technique », « répondre à des questions piège
                            », etc.
                        </li>
                        <li>
                            Des univers lexicaux qui vous seront utiles ou qui
                            vous font vous sentir à l’aise
                        </li>
                    </ul>

                    <p className={styles.text}>
                        Chaque séance de coaching d'1h30 se déroule en 4 temps.
                        Pour en savoir plus sur le déroulé,{" "}
                        <Link href="/notre-methode#exemple">
                            <a className={styles.a}>
                                découvrez l’exemple du parcours de Chloé.
                            </a>
                        </Link>
                    </p>
                    <p className={styles.text}>
                        Après chaque séance, votre coach vous transmet par mail
                        :
                    </p>
                    <ul className={styles.list}>
                        <li>
                            Une synthèse personnalisée de votre séance
                            (recommandations personnelles, phrases et lexique
                            utiles)
                        </li>
                        <li>
                            La fiche des bonnes pratiques travaillées en séance
                        </li>
                        <li>Vos éventuels enregistrements</li>
                    </ul>

                    <p className={styles.text}>
                        Des séances d'accompagnement ad hoc d'une durée plus
                        courte d’1h peuvent également vous être proposées, en
                        complément de vos séances de coaching. Elles permettent
                        par exemple de travailler une présentation en anglais
                        spécifique avant de prendre la parole en public.
                    </p>
                    <p className={styles.text}>
                        Chaque parcours de coaching donne lieu à une séance
                        finale :
                    </p>
                    <ul className={styles.list}>
                        <li>
                            Une mise en situation (entretien d’embauche,
                            présentation des résultats annuels…) filmée ou
                            enregistrée
                        </li>
                        <li>
                            Une évaluation et une certification de votre niveau
                            d'aisance et de votre capacité à communiquer
                            efficacement en anglais professionnel.
                        </li>
                        <li>
                            Une synthèse globale des outils et bonnes pratiques
                            partagés tout au long du parcours
                        </li>
                    </ul>

                    <h2 className={styles.title}>
                        Combien de séances me faut-il pour atteindre mon
                        objectif ?
                    </h2>
                    <p className={styles.text}>
                        Lors de la séance d'essai, votre coach vous propose de
                        vous positionner sur notre échelle d'aisance. Cette
                        échelle permet de définir un niveau d'aisance de départ
                        « Aujourd’hui, je me sens confiant pour… » et un niveau
                        cible « A terme, j'aimerais me sentir à l'aise pour… » .
                        <br />
                        Le nombre de niveaux à passer permet de déterminer le
                        nombre de séances approprié.
                        <br />
                        Pour vous faire une idée plus précise, voici quelques
                        chiffres intéressants :
                    </p>
                    <ul className={styles.list}>
                        <li>
                            En moyenne, nos coachés passent 2 niveaux dans
                            l'échelle de confiance après environ 6 à 7 séances
                            d’1h30 de coaching{" "}
                            <span className={styles.textMin}>
                                (mesure réalisée lors de la synthèse finale, à
                                travers notre échelle de confiance)
                            </span>
                        </li>
                        <li>
                            A l'issue de leur parcours, nos coachés ont acquis
                            en moyenne 88% des compétences de niveau 1 (anglais
                            opérationnel) et 83% des critères de niveau 2
                            (anglais managérial){" "}
                            <span className={styles.textMin}>
                                (mesure réalisée lors de la synthèse finale,
                                lors du passage de la certification)
                            </span>
                        </li>
                        <li>
                            Sur une échelle de 1 à 10, nos coachés répondent en
                            moyenne 9 à la question "Avez-vous atteint votre
                            objectif ?"{" "}
                            <span className={styles.textMin}>
                                (mesure réalisée lors de la synthèse finale,
                                lors de l'échange de cloture réalisé avec le
                                coaché)
                            </span>
                        </li>
                    </ul>

                    <h2 className={styles.title}>
                        Comment suivre ma progression ?
                    </h2>
                    <p className={styles.text}>
                        A l'issue de chaque séance de coaching, votre coach vous
                        permet de partager vos retours sur la séance (comment
                        vous êtes-vous senti ? Que retenez-vous de la séance ?)
                        et de noter votre appréciation sur 3 questions :
                    </p>
                    <ul className={styles.list}>
                        <li>
                            L'adéquation des moyens pédagogiques vis-à-vis de
                            votre objectif
                        </li>
                        <li>Votre niveau de motivation</li>
                        <li>Votre atteinte de l’objectif</li>
                    </ul>
                    <p className={styles.text}>
                        Ce retour à la fois qualitatif et quantitatif permet au
                        fil de séances de nous assurer que le coaching vous fait
                        progresser avec les moyens les plus adaptés !
                    </p>

                    <h2 className={styles.title}>
                        Comment sont créés les contenus ?
                    </h2>
                    <p className={styles.text}>
                        Les contenus sont créés par vos coachs en adéquation
                        avec les convictions pédagogiques que nous incarnons :
                        efficaces, concrets, facilement intégrables et
                        réutilisables pour vos futurs challenges professionnels
                        en anglais.
                        <br />
                        Nous mettons à votre disposition des exercices basés sur
                        différents médias (vidéo, audio, articles, images), des
                        jeux de rôle et des mises en situation inspirés de vos
                        cas réels.
                        <br />
                        Chaque exercice s'accompagne de bonnes pratiques pour
                        maitriser l’anglais opérationnel (mais qui s’appliquent
                        également en français) !
                    </p>
                    <h2 className={styles.title}>
                        Ma coach est-elle disponible pour répondre à mes
                        questions, en dehors des séances de coaching ?
                    </h2>
                    <p className={styles.text}>
                        Oui bien sûr, dans la mesure du possible et de ses
                        disponibilités.
                    </p>
                    <h2 className={styles.title}>
                        Puis-je ajouter des séances de coaching à mon parcours ?
                    </h2>
                    <p className={styles.text}>
                        Oui, cela est tout à fait possible ! Vous pouvez en
                        discuter avec votre coach tout au long de votre
                        parcours, à l'issue de celui-ci, ou même plus tard.
                    </p>
                    <h2 className={styles.title}>
                        Suis-je toujours suivi(e) par la même coach ?
                    </h2>
                    <p className={styles.text}>
                        Pour un accompagnement de moins de six séances, nous
                        privilégions un suivi par la même coach. Cela permet de
                        tisser un vrai lien de confiance et de vous mettre dans
                        les meilleures conditions possibles pour progresser !
                        <br />
                        Au-delà de six séances, il est tout à fait envisageable
                        de changer de coach. Cela pourra vous permettre, si vous
                        le souhaitez, de vous challenger, de recueillir d'autres
                        feedbacks…
                    </p>
                    <h2 className={styles.title}>
                        Où se déroulent les séances de coaching ?
                    </h2>
                    <p className={styles.text}>
                        Les séances de coaching présentiel peuvent se dérouler à
                        votre convenance (à Paris en Ile-de-France) :
                    </p>
                    <ul className={styles.list}>
                        <li>Dans vos locaux professionnels</li>
                        <li>À votre domicile</li>
                        <li>Dans un lieu extérieur qui vous convient</li>
                    </ul>
                    <p className={styles.text}>
                        Les séances de coaching à distance sont réalisées via un
                        outil de conférence en ligne (Google Meets, Teams, etc.)
                        selon les contraintes techniques que vous pourriez
                        avoir.
                    </p>

                    <h2 className={styles.title}>
                        Combien coûte une séance de coaching ?
                    </h2>
                    <p className={styles.text}>
                        Le tarif varie en fonction du public (Entreprises ou
                        Particuliers), de la durée, des modalités et du nombre
                        de séances.
                        <br />A l'issue de la séance d'essai, votre coach vous
                        communique une proposition tarifaire associée au
                        parcours d’accompagnement proposé.
                    </p>
                    <h2 className={styles.title}>
                        Comment et quand dois-je régler mes séances de coaching
                        ?
                    </h2>
                    <p className={styles.text}>
                        Les séances de coaching sont à régler par virement ou
                        par chèque, généralement après la 1ère séance de
                        coaching.
                        <br />
                        Nous proposons également des facilités de paiement pour
                        les particuliers (règlement en 2 ou 3 fois sans frais).
                    </p>
                    <h2 className={styles.title}>
                        En quoi consistent les expériences collectives ?
                    </h2>
                    <p className={styles.text}>
                        Ce format est pour l’instant réservé aux entreprises.
                        <br />
                        Il s'agit d'une expérience ludique et personnalisée
                        visant à renforcer des compétences clés et à stimuler la
                        collaboration en anglais sur une thématique prédéfinie
                        (communiquer efficacement, gérer les interactions
                        complexes, etc.)
                        <br />
                        Elle se décompose en plusieurs temps : défi à relever en
                        équipe, partage de la solution, débrief collectif.
                        <br />
                        Ce format convient à des équipes de 6 à 24 personnes.
                        Une session peut se faire seule ou s’intégrer dans un
                        temps d’équipe plus large.
                    </p>
                    <h2 className={styles.title}>
                        En quoi consiste l'intervention ad hoc ?
                    </h2>
                    <p className={styles.text}>
                        Ce format est pour l’instant réservé aux entreprises.
                        <br />
                        Il s'agit d'un soutien ponctuel, rapide et flexible pour
                        une personne ou un petit groupe visant à concevoir une
                        présentation importante ou à préparer une prise de
                        parole à fort enjeu.
                        <br />
                        Les séances sont réalisées par tranche d’une heure
                        minimum, en présentiel (en Île de France) ou à distance.
                        <br />
                        Le nombre de coachés dans une séance ne peut pas
                        dépasser 5 personnes.
                    </p>
                    <p className={styles.textMin}>
                        Dernière mise à jour : Juillet 2021
                    </p>
                </div>
            </section>
        </Layout>
    );
}
