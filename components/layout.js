import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { useEffect, useState } from "react";

import styles from "../styles/Layout.module.css";
import Logo from "../images/Heart-n-Brain.png";
import chevron from "../images/chevron-up.svg";
import Menu from "../images/menu.svg";

export default function Layout({ children }) {
    const router = useRouter();
    const [hoverConcept, setHoverConcept] = useState(false);
    const [hoverOffer, setHoverOffer] = useState(false);
    const [openNavMobile, setOpenNavMobile] = useState(false);
    const [width, setWidth] = useState(null);
    const [widthMobile, setWidthMobile] = useState(null);

    useEffect(() => {
        if (typeof window !== "undefined") {
            setWidth(window.innerWidth);
            setWidthMobile(window.screen.width / window.devicePixelRatio);
        }
    }, []);

    const navMobile = () => {
        setOpenNavMobile(!openNavMobile);
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
                              backgroundColor: "#F5E89F",
                              display: "flex",
                              alignItems: "center",
                              flexDirection: "column",
                              position: "fixed",
                              height: "430px",
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
                        <div style={{ display: width < 410 && "none" }}>
                            <Image
                                src={Logo}
                                width={90}
                                height={58}
                                objectFit={"contain"}
                                alt="Logo heart-n-brain"
                                title="heart-n-brain"
                            />
                        </div>

                        <h1>
                            <span>Révélateur d'anglofans</span>
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
                                    router.pathname === "/notre-philosophie" ||
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
                                            router.pathname ===
                                            "/notre-philosophie"
                                                ? styles.derouleActive
                                                : styles.deroule
                                        }
                                    >
                                        <Link href="/notre-philosophie">
                                            Notre philosophie
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
                                            Notre methode
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
                                            accompagnement collectif
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
                            <li className={styles.li}>
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
                            <li
                                className={
                                    router.pathname === "/notre-concept" ||
                                    router.pathname === "/notre-philosophie" ||
                                    router.pathname === "/notre-methode"
                                        ? styles.liMobileActive
                                        : styles.liMobile
                                }
                            >
                                <Link href="/notre-concept">Notre concept</Link>
                            </li>
                            <li
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
                                <Link href="/nos-offres">Nos offres</Link>
                            </li>
                            <li
                                className={
                                    router.pathname === ""
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
            <main className={styles.main}>{children}</main>
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
