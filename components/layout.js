import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { useEffect, useState } from "react";

import styles from "../styles/Layout.module.css";
import Logo from "../images/Heart-n-Brain.png";
import chevron from "../images/chevron-up.svg";
import Menu from "../images/menu.svg";
import Plus from "../images/plus.svg";

export default function Layout({ children }) {
    const router = useRouter();
    const [hoverConcept, setHoverConcept] = useState(false);
    const [hoverOffer, setHoverOffer] = useState(false);
    const [openNavMobile, setOpenNavMobile] = useState(false);
    const [openOfferMobile, setOpenOfferMobile] = useState(false);
    const [openConceptMobile, setOpenConceptMobile] = useState(false);
    const [width, setWidth] = useState(null);
    const [widthMobile, setWidthMobile] = useState(null);

    useEffect(() => {
        if (typeof window !== "undefined") {
            setWidth(window.innerWidth);
            setWidthMobile(window.screen.width / window.devicePixelRatio);
        }
    }, []);

    const navMobile = () => {
        if (openNavMobile && openOfferMobile) {
            plusOffer();
        }
        if (openNavMobile && openConceptMobile) {
            plusConcept();
        }
        setOpenNavMobile(!openNavMobile);
    };

    const plusOffer = () => {
        setOpenOfferMobile(!openOfferMobile);
    };

    const plusConcept = () => {
        setOpenConceptMobile(!openConceptMobile);
    };

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    return (
        <>
            <header
                style={
                    openNavMobile
                        ? {
                              boxSizing: "border-box",
                              zIndex: "1",
                              backgroundColor: "#fff",
                              display: "flex",
                              alignItems: "center",
                              flexDirection: "column",
                              position: "fixed",
                              height:
                                  !openConceptMobile && !openOfferMobile
                                      ? "420px"
                                      : openOfferMobile && openConceptMobile
                                      ? "560px"
                                      : "490px",
                              paddingBottom: "10px",
                              top: "0",
                              transitionDuration: "0.35s",
                              width: "100vw",
                              borderBottomLeftRadius: "20px",
                              borderBottomRightRadius: "20px",
                              overflow:
                                  width <= 650 || widthMobile <= 650
                                      ? "hidden"
                                      : "visible",
                          }
                        : {
                              boxSizing: "border-box",
                              zIndex: "1",
                              backgroundColor: "#FFF",
                              overflow:
                                  width <= 650 || widthMobile <= 650
                                      ? "hidden"
                                      : "visible",
                              height: "92px",
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                              position: "fixed",
                              top: "0",
                              transitionDuration: "0.35s",
                              width: "100vw",
                          }
                }
            >
                <section className={styles.container}>
                    <div className={styles.title}>
                        <div
                            style={{
                                display: width < 410 && "none",
                                height: "50px",
                                width: "77px",
                            }}
                        >
                            <Image
                                src={Logo}
                                alt="Logo heart-n-brain"
                                title="heart-n-brain"
                            />
                        </div>

                        <h1
                            style={{
                                fontSize: width > 650 ? "9px" : "13px",
                                lineHeight: width < 650 && " 13px",
                                letterSpacing: "1.4px",
                            }}
                        >
                            <span
                                style={{
                                    fontSize: width > 650 ? "13px" : "14px",
                                    lineHeight: width > 650 ? "10.8px" : "8px",
                                    letterSpacing: "2px",
                                }}
                            >
                                Révélateur d'anglofans
                            </span>
                            <br />
                            Coaching en anglais professionnel
                        </h1>
                    </div>
                    <nav className={styles.navigation}>
                        <ul className={styles.ul}>
                            <li
                                className={
                                    router.pathname === "/"
                                        ? styles.liActive
                                        : styles.li
                                }
                            >
                                <Link href="/">Home</Link>
                            </li>
                            <div
                                onMouseEnter={() => {
                                    setHoverConcept(true);
                                }}
                                onMouseLeave={() => {
                                    setHoverConcept(false);
                                }}
                                className={
                                    router.pathname === "/notre-concept" ||
                                    router.pathname === "/notre-mission" ||
                                    router.pathname === "/notre-methode"
                                        ? styles.liActive
                                        : styles.li
                                }
                            >
                                <Link href="/notre-concept">Notre concept</Link>
                                <div
                                    className={
                                        hoverConcept
                                            ? styles.list_visibleConcept
                                            : styles.list_none
                                    }
                                >
                                    <li
                                        className={
                                            router.pathname === "/notre-mission"
                                                ? styles.derouleActive
                                                : styles.deroule
                                        }
                                    >
                                        <Link href="/notre-mission">
                                            Notre mission
                                        </Link>
                                    </li>
                                    <li
                                        className={
                                            router.pathname === "/notre-methode"
                                                ? styles.derouleActive
                                                : styles.deroule
                                        }
                                    >
                                        <Link href="/notre-methode">
                                            Notre méthode
                                        </Link>
                                    </li>
                                </div>
                            </div>
                            <div
                                onMouseEnter={() => {
                                    setHoverOffer(true);
                                }}
                                onMouseLeave={() => {
                                    setHoverOffer(false);
                                }}
                                className={
                                    router.pathname === "/nos-offres" ||
                                    router.pathname ===
                                        "/accompagnement-individuel" ||
                                    router.pathname ===
                                        "/accompagnement-collectif"
                                        ? styles.liActive
                                        : styles.li
                                }
                            >
                                <Link href="/nos-offres">Nos offres</Link>
                                <div
                                    className={
                                        hoverOffer
                                            ? styles.list_visibleOffer
                                            : styles.list_none
                                    }
                                >
                                    <li
                                        className={
                                            router.pathname ===
                                            "/accompagnement-individuel"
                                                ? styles.derouleActive
                                                : styles.deroule
                                        }
                                    >
                                        <Link href="/accompagnement-individuel">
                                            Accompagnement individuel
                                        </Link>
                                    </li>
                                    <li
                                        className={
                                            router.pathname ===
                                            "/accompagnement-collectif"
                                                ? styles.derouleActive
                                                : styles.deroule
                                        }
                                    >
                                        <Link href="/accompagnement-collectif">
                                            Accompagnement collectif
                                        </Link>
                                    </li>
                                </div>
                            </div>
                            <li
                                className={
                                    router.pathname === "/temoignages"
                                        ? styles.liActive
                                        : styles.li
                                }
                            >
                                <Link href="/temoignages">Témoignages</Link>
                            </li>
                            <li
                                className={
                                    router.pathname === "/faq"
                                        ? styles.liActive
                                        : styles.li
                                }
                            >
                                <Link href="/faq">FAQ</Link>
                            </li>
                            <li
                                className={
                                    router.pathname === "/"
                                        ? children[2]._owner
                                            ? children[2]._owner.memoizedState
                                                  .baseState === true
                                                ? styles.liActive
                                                : styles.li
                                            : styles.li
                                        : styles.li
                                }
                            >
                                <Link href="/#contact">Contact</Link>
                            </li>
                            <li
                                className={
                                    router.pathname === "/blog"
                                        ? styles.liActive
                                        : styles.li
                                }
                            >
                                <Link href="/blog">Blog</Link>
                            </li>
                        </ul>
                    </nav>
                    <div className={styles.menu} onClick={navMobile}>
                        <div>
                            <Image
                                alt="menu"
                                title="menu"
                                id="menu"
                                src={Menu}
                                height={40}
                                width={40}
                            />
                        </div>
                    </div>
                </section>
                <div className={styles.listMobile}>
                    <nav>
                        <ul className={styles.ulMobile}>
                            <li
                                className={
                                    router.pathname === "/"
                                        ? styles.liMobileActive
                                        : styles.liMobile
                                }
                            >
                                <Link href="/">Home</Link>
                            </li>
                            <div
                                className={
                                    router.pathname === "/notre-concept" ||
                                    router.pathname === "/notre-mission" ||
                                    router.pathname === "/notre-methode"
                                        ? styles.liMobileActive
                                        : styles.liMobile
                                }
                            >
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                    }}
                                >
                                    <div
                                        onClick={plusConcept}
                                        className={styles.plus}
                                    >
                                        <Image
                                            src={Plus}
                                            alt="navigation concept"
                                            title="plus"
                                        />
                                    </div>
                                    <Link href="/notre-concept">
                                        Notre concept
                                    </Link>
                                </div>
                                <div
                                    style={
                                        openConceptMobile
                                            ? {
                                                  display: "flex",
                                                  flexDirection: "column",
                                                  justifyContent:
                                                      "space-between",
                                                  alignItems: "center",
                                                  marginTop: "20px",
                                                  transitionDuration: "0.35s",
                                                  height: "50px",
                                                  fontWeight: "lighter",
                                              }
                                            : {
                                                  display: "flex",
                                                  flexDirection: "column",
                                                  justifyContent:
                                                      "space-between",
                                                  alignItems: "center",
                                                  transitionDuration: "0.35s",
                                                  overflow: "hidden",
                                                  height: "0px",
                                              }
                                    }
                                >
                                    <Link href="/notre-mission">
                                        <a
                                            className={
                                                router.pathname ===
                                                "/notre-mission"
                                                    ? styles.liMobileActive2
                                                    : styles.liMobile2
                                            }
                                        >
                                            Notre mission
                                        </a>
                                    </Link>
                                    <Link href="/notre-methode">
                                        <a
                                            className={
                                                router.pathname ===
                                                "/notre-methode"
                                                    ? styles.liMobileActive2
                                                    : styles.liMobile2
                                            }
                                        >
                                            Notre methode
                                        </a>
                                    </Link>
                                </div>
                            </div>
                            <div
                                className={
                                    router.pathname === "/nos-offres" ||
                                    router.pathname ===
                                        "/accompagnement-individuel" ||
                                    router.pathname ===
                                        "/accompagnement-collectif"
                                        ? styles.liMobileActive
                                        : styles.liMobile
                                }
                            >
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                    }}
                                >
                                    <div
                                        onClick={plusOffer}
                                        className={styles.plus}
                                    >
                                        <Image
                                            src={Plus}
                                            alt="navigation offres"
                                            title="plus offres"
                                        />
                                    </div>
                                    <Link href="/nos-offres">Nos offres</Link>
                                </div>
                                <div
                                    style={
                                        openOfferMobile
                                            ? {
                                                  display: "flex",
                                                  flexDirection: "column",
                                                  justifyContent:
                                                      "space-between",
                                                  alignItems: "center",
                                                  marginTop: "20px",
                                                  transitionDuration: "0.35s",
                                                  height: "50px",
                                                  width: "240px",
                                                  fontWeight: "lighter",
                                              }
                                            : {
                                                  display: "flex",
                                                  flexDirection: "column",
                                                  justifyContent:
                                                      "space-between",
                                                  alignItems: "center",
                                                  width: "240px",

                                                  transitionDuration: "0.35s",
                                                  overflow: "hidden",
                                                  height: "0px",
                                              }
                                    }
                                >
                                    <Link href="/accompagnement-individuel">
                                        <a
                                            className={
                                                router.pathname ===
                                                "/accompagnement-individuel"
                                                    ? styles.liMobileActive2
                                                    : styles.liMobile2
                                            }
                                        >
                                            Accompagnement individuel
                                        </a>
                                    </Link>
                                    <Link href="/accompagnement-collectif">
                                        <a
                                            className={
                                                router.pathname ===
                                                "/accompagnement-collectif"
                                                    ? styles.liMobileActive2
                                                    : styles.liMobile2
                                            }
                                        >
                                            Accompagnement collectif
                                        </a>
                                    </Link>
                                </div>
                            </div>
                            <li
                                className={
                                    router.pathname === "temoignages"
                                        ? styles.liMobileActive
                                        : styles.liMobile
                                }
                            >
                                <Link href="/temoignages">Témoignages</Link>
                            </li>
                            <li
                                className={
                                    router.pathname === "/faq"
                                        ? styles.liMobileActive
                                        : styles.liMobile
                                }
                            >
                                <Link href="/faq">FAQ</Link>
                            </li>
                            <li
                                className={
                                    router.pathname === "/#contact"
                                        ? styles.liMobileActive
                                        : styles.liMobile
                                }
                            >
                                <Link href="/#contact">Contact</Link>
                            </li>
                            <li
                                className={
                                    router.pathname === "/blog"
                                        ? styles.liMobileActiveEnd
                                        : styles.liMobileEnd
                                }
                            >
                                <Link href="/blog">Blog</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
            <main id="main" className={styles.main}>
                {children}
            </main>
            <footer className={styles.footer}>
                <section className={styles.containerFooter}>
                    <div className={styles.link}>
                        <Link href="/#contact">Contact</Link>
                        <Link href="/mentions-legales-confidentialite">
                            Mentions Légales
                        </Link>
                        <Link href="/conditions-generales-de-vente">
                            Conditions Générales de Vente
                        </Link>
                    </div>
                    <div className={styles.chevron}>
                        <Image
                            alt="retour en haut de la page"
                            title="top page"
                            src={chevron}
                            width={30}
                            height={30}
                            onClick={scrollToTop}
                        />
                    </div>
                </section>
            </footer>
        </>
    );
}
