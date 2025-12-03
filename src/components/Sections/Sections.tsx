import React, { useEffect, useRef, useState, useLayoutEffect } from "react";
import { gsap } from "gsap";
import Draggable from "gsap/Draggable";
import DossierMini from "../DossierMini";
import Section0 from "./Section0";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Divers from "./Divers";
import Notes from "./Notes";
import crossClose from "../../assets/images/png/cross-close.png";
import myPhoto from "../../assets/images/png/photoo_cv.png";
import kimz from "../../assets/images/png/kimz.png";
import zap from "../../assets/images/png/zap.png";
import "../../styles/sections.scss";

gsap.registerPlugin(Draggable);

const Sections: React.FC = () => {
    const [activeSection, setActiveSection] = useState<React.ReactNode | null>(null);
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [cardVisible, setCardVisible] = useState<boolean>(true); // État pour contrôler la visibilité de la carte
    const [brownCardVisible, setBrownCardVisible] = useState(true);
    const [footerVisible, setFooterVisible] = useState(true);


    const wrapperRefs = useRef<(HTMLDivElement | null)[]>([]);
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const prevArrowRef = useRef<HTMLButtonElement | null>(null);
    const nextArrowRef = useRef<HTMLButtonElement | null>(null);

    const cardRef = useRef<HTMLDivElement | null>(null);
    const brownCardRef = useRef<HTMLDivElement | null>(null);
    const photoRef = useRef<HTMLImageElement | null>(null);
    const sectionsWrapperRef = useRef<HTMLDivElement | null>(null);
    const footerRef = useRef<HTMLDivElement | null>(null);


    const dossiers = [
        {
            title: "Narrative Design",
            bottom: "30vh",
            left: "35vw",
            colors: {
                background: "#2a3d7c", // bleu foncé
                middle: "#7ec4ff",     // bleu clair
                front: "#d6e6fa"       // bleu très pâle
            },
            component: function (dossier: any) {
                return <Section0 colors={dossier.colors} />;
            },
        },
        {
            title: "System & Level Design",
            bottom: "30vh",
            left: "50vw",
            colors: {
                background: "#a8325e", // rose foncé
                middle: "#ffb3d1",     // rose clair
                front: "#ffe6f0"       // rose très pâle
            },
            component: function (dossier: any) {
                return <Section1 colors={dossier.colors} />;
            },
        },
        // {
        //     title: "Other Stuff",
        //     bottom: "30vh",
        //     left: "30vw",
        //     colors: {
        //         background: "#2a7c5b", // vert foncé
        //         middle: "#7cffc4",     // vert clair
        //         front: "#e6fff7"       // vert très pâle
        //     },
        //     component: function (dossier: any) {
        //         return <Section2 colors={dossier.colors} />;
        //     },
        // },
        
        // {
        //     title: "Gallery",
        //     bottom: "10vh",
        //     left: "42vw",
        //     colors: {
        //         background: "#6a2a7c", // violet foncé
        //         middle: "#d17eff",     // violet clair
        //         front: "#f3e6ff"       // violet très pâle
        //     },
        //     component: function (dossier: any) {
        //         return <Divers colors={dossier.colors} />;
        //     },
        // },
    ];

    // bottom: "5vh", left: "5vw" },
    // bottom: "5vh", left: "30vw" }
    // bottom: "25vh", left: "17vw" 
    // bottom: "25vh", left: "42vw" 
    // bottom: "5vh", left: "55vw" }

    const disableWrappersPointer = (disable = true) => {
        wrapperRefs.current.forEach((r) => {
            if (!r) return;
            r.style.pointerEvents = disable ? "none" : "auto";
        });
    };

    const handleMiniClick = (index: number, component: React.ReactNode) => {
        setActiveIndex(index);

        const clicked = wrapperRefs.current[index];
        if (clicked) {
            gsap.to(clicked, {
                x: window.innerWidth + 200,
                duration: 0.55,
                ease: "power2.inOut",
            });
        }

        // Carte bleue
        if (cardRef.current) {
            gsap.to(cardRef.current, {
                x: -window.innerWidth - 400,
                duration: 0.55,
                ease: "power2.inOut",
                onComplete: () => setCardVisible(false)
            });
        }
        // Carte marron
        if (brownCardRef.current) {
            gsap.to(brownCardRef.current, {
                x: -window.innerWidth - 400,
                duration: 0.55,
                ease: "power2.inOut",
                onComplete: () => setBrownCardVisible(false)
            });
        }

        // Footer : disparait par le bas
        if (footerRef.current) {
            gsap.to(footerRef.current, {
                y: 200,
                opacity: 0,
                duration: 0.45,
                ease: "power2.inOut",
                onComplete: () => setFooterVisible(false)
            });
        }

        wrapperRefs.current.forEach((ref, i) => {
            if (!ref || i === index) return;
            gsap.to(ref, {
                y: -220,
                opacity: 0,
                duration: 0.45,
                ease: "power2.inOut",
            });
        });

        disableWrappersPointer(true);
        setActiveSection(component);
    };

    const goToPrev = () => {
        if (activeIndex !== null && activeIndex > 0) {
            setActiveSection(dossiers[activeIndex - 1].component(dossiers[activeIndex - 1]));
            setActiveIndex(activeIndex - 1);
        }
    };

    const goToNext = () => {
        if (activeIndex !== null && activeIndex < dossiers.length - 1) {
            setActiveSection(dossiers[activeIndex + 1].component(dossiers[activeIndex + 1]));
            setActiveIndex(activeIndex + 1);
        }
    };

    const handleCloseSection = () => {
        if (sectionRef.current) {
            gsap.to(sectionRef.current, {
                x: "100%",
                opacity: 0,
                duration: 0.45,
                ease: "power2.in",
                onComplete: () => {
                    setActiveSection(null);
                    setActiveIndex(null);

                    // Réaffiche la carte bleue
                    setCardVisible(true);
                    setTimeout(() => {
                        if (cardRef.current) {
                            gsap.set(cardRef.current, { opacity: 0, x: 0, y: 0 });
                            gsap.to(cardRef.current, {
                                opacity: 1,
                                duration: 0.4,
                                ease: "power2.out"
                            });
                        }
                    }, 10);

                    // Carte marron
                    setBrownCardVisible(true);
                    setTimeout(() => {
                        if (brownCardRef.current) {
                            gsap.set(brownCardRef.current, { opacity: 0, x: 0, y: 0 });
                            gsap.to(brownCardRef.current, {
                                opacity: 1,
                                duration: 0.4,
                                ease: "power2.out"
                            });
                        }
                    }, 10);

                    // Footer : réapparait par le bas
                    setFooterVisible(true);
                    setTimeout(() => {
                        if (footerRef.current) {
                            gsap.set(footerRef.current, { y: 200, opacity: 0 });
                            gsap.to(footerRef.current, {
                                y: 0,
                                opacity: 1,
                                duration: 0.4,
                                ease: "power2.out"
                            });
                        }
                    }, 10);

                    wrapperRefs.current.forEach((ref, i) => {
                        if (!ref) return;
                        const dossier = dossiers[i];
                        gsap.set(ref, {
                            position: "absolute",
                            bottom: dossier.bottom,
                            left: dossier.left,
                            clearProps: "transform,opacity"
                        });
                        gsap.fromTo(
                            ref,
                            { y: -20, opacity: 0 },
                            { y: 0, opacity: 1, duration: 0.4, ease: "power2.out" }
                        );
                    });
                    disableWrappersPointer(false);
                },
            });
        } else {
            setActiveSection(null);
            setActiveIndex(null);
            setCardVisible(true);
            setTimeout(() => {
                if (cardRef.current) {
                    gsap.set(cardRef.current, { opacity: 0, x: 0, y: 0 });
                    gsap.to(cardRef.current, {
                        opacity: 1,
                        duration: 0.4,
                        ease: "power2.out"
                    });
                }
            }, 10);
            setBrownCardVisible(true);
            setTimeout(() => {
                if (brownCardRef.current) {
                    gsap.set(brownCardRef.current, { opacity: 0, x: 0, y: 0 });
                    gsap.to(brownCardRef.current, {
                        opacity: 1,
                        duration: 0.4,
                        ease: "power2.out"
                    });
                }
            }, 10);
            // Footer : réapparait par le bas
            setFooterVisible(true);
            setTimeout(() => {
                if (footerRef.current) {
                    gsap.set(footerRef.current, { y: 200, opacity: 0 });
                    gsap.to(footerRef.current, {
                        y: 0,
                        opacity: 1,
                        duration: 0.4,
                        ease: "power2.out"
                    });
                }
            }, 10);
            disableWrappersPointer(false);
        }
    };

    useEffect(() => {
        if (activeSection && sectionRef.current) {
            gsap.fromTo(
                sectionRef.current,
                { x: "-100%", opacity: 0 },
                { x: 0, opacity: 1, duration: 0.55, ease: "power3.out" }
            );
        }
    }, [activeSection]);

    // --- init draggable pour la carte bleue
    useEffect(() => {
        if (cardVisible && cardRef.current) {
            gsap.set(cardRef.current, { x: 0, y: 0 });
            Draggable.create(cardRef.current, {
                type: "x,y",
                inertia: true,
                bounds: ".sections-wrapper",
            });
        }
    }, [cardVisible]);

    // --- init draggable pour la carte brune
    useEffect(() => {
        if (brownCardRef.current) {
            // Détruit les anciennes instances Draggable
            Draggable.get(brownCardRef.current)?.kill();
        }
        if (brownCardVisible && brownCardRef.current) {
            gsap.set(brownCardRef.current, { x: 0, y: 0 });
            Draggable.create(brownCardRef.current, {
                type: "x,y",
                inertia: true,
                bounds: ".sections-wrapper",
            });
        }
    }, [brownCardVisible]);

    // --- hover photo
    useEffect(() => {
        if (!photoRef.current) return;
        const el = photoRef.current;

        const enter = () => {
            gsap.to(el, { rotation: 2, duration: 0.4, ease: "power2.out" });
        };
        const leave = () => {
            gsap.to(el, { rotation: 0, duration: 0.4, ease: "power2.out" });
        };

        el.addEventListener("mouseenter", enter);
        el.addEventListener("mouseleave", leave);

        return () => {
            el.removeEventListener("mouseenter", enter);
            el.removeEventListener("mouseleave", leave);
        };
    }, []);

    // --- anim flèche
    useEffect(() => {
        const tl = gsap.timeline({ repeat: -1, yoyo: true });
        tl.to(".arrow", { y: 10, duration: 0.6, ease: "power1.inOut" });
    }, []);

    useEffect(() => {
        const resetCardPosition = () => {
            if (cardRef.current) {
                gsap.set(cardRef.current, { x: 0, y: 0 });
            }
        };
        window.addEventListener("resize", resetCardPosition);
        return () => window.removeEventListener("resize", resetCardPosition);
    }, []);

    useEffect(() => {
        if (footerRef.current) {
            Draggable.get(footerRef.current)?.kill();
        }
        if (footerVisible && footerRef.current) {
            gsap.set(footerRef.current, { x: 0, y: 0 });
            Draggable.create(footerRef.current, {
                type: "x,y",
                inertia: true,
                bounds: ".sections-wrapper",
            });
        }
    }, [footerVisible]);

    return (
        <div
            className="sections-wrapper"
            ref={sectionsWrapperRef}
            style={{ position: "relative", width: "100%", height: "100%" }}
        >
            <div
                className="sections-row"
                style={{ position: "relative", width: "100%", height: "100%" }}
            >
                {dossiers.map((dossier, index) => (
                    <div
                        key={index}
                        ref={(el) => {
                            wrapperRefs.current[index] = el;
                        }}
                        className="mini-wrapper clickable"
                        style={{
                            position: "absolute",
                            bottom: dossier.bottom,
                            left: dossier.left,
                            willChange: "transform, opacity",
                        }}
                    >
                        <DossierMini
                            title={dossier.title}
                            bottom={dossier.bottom}
                            left={dossier.left}
                            contentComponent={dossier.component(dossier)} // <-- Appelle la fonction ici
                            colors={dossier.colors}
                            onMiniClick={() => handleMiniClick(index, dossier.component(dossier))}
                        />
                    </div>
                ))}
            </div>

            {/* 📌 Carte draggable bleue */}
            {cardVisible && (
                <div
                    ref={cardRef}
                    className="grabbable card"  // <-- replaced inline sizing with class
                    style={{
                        position: "absolute",
                        top: "3vh",
                        left: "3vw",
                        background: "#fff9e5",
                        color: "#fff",
                        userSelect: "none"
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            height: "100%",
                            width: "100%",
                            gap: "1.6rem",
                            flexWrap: "wrap",
                            justifyContent: "center"
                        }}
                    >
                        {/* Image à gauche */}
                        <img
                            ref={photoRef}
                            src={myPhoto}
                            alt="Moi"
                            style={{
                                width: "clamp(80px, 35%, 230px)",
                                height: "auto",
                                maxHeight: "40vh",
                                objectFit: "contain",
                                borderRadius: "8px",
                                boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                                flexShrink: 0,
                                alignSelf: "flex-start"
                            }}
                        />

                        {/* Texte à droite */}
                        <div style={{ flex: "1 1 200px", display: "flex", flexDirection: "column", height: "100%" }}>
                            {/* Bloc centré */}
                            <div style={{ textAlign: "center" }}>
                                <h1 className="h1-title-card-presentation"
                                    style={{
                                        margin: 0,
                                        color: "black",
                                        fontWeight: 900,
                                    }}
                                >
                                    Samy Gaci
                                </h1>
                                <p className="p-up-title-card-presentation"
                                    style={{
                                        margin: "8px 0 0 0",
                                        opacity: 0.9,
                                        fontWeight: "700",
                                        color: "#d82639",
                                        padding: "0 8px",
                                    }}
                                >
                                    Narrative & System Designer
                                </p>
                            </div>

                            {/* Texte descriptif */}
                            <p className="p-title-card-presentation"
                                style={{
                                    margin: "12px 0 0 0",
                                    lineHeight: 1.4,
                                    color: "#222",
                                    textAlign: "left",
                                    paddingTop: "10px",
                                }}
                            >
                                As a Narrative & System Designer, I bridge storytelling and game mechanics : designing emotions, meaning, and consequences that live inside the rules of play. I believe the best stories aren’t just written, they are played.
                            </p>

                            {/* Row of round action buttons (ITCH.IO - LINKEDIN - CV) */}
                            <div
                                style={{
                                    display: "flex",
                                    gap: "12px",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    marginTop: "14px",
                                    paddingBottom: "6px"
                                }}
                            >
                                {/* Itch.io */}
                                <a
                                    href="https://reglisaille.itch.io/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Open on itch.io"
                                    style={{
                                        width: 56,
                                        height: 56,
                                        borderRadius: "50%",
                                        background: "#fff",
                                        display: "inline-flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        boxShadow: "0 6px 14px rgba(0,0,0,0.12)",
                                        textDecoration: "none",
                                        color: "#fa5c5c",
                                        fontWeight: 800,
                                        fontSize: "0.85rem"
                                    }}
                                >
                                    ITCH.IO
                                </a>

                                {/* LinkedIn */}
                                <a
                                    href="https://www.linkedin.com/in/samygaci/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Open LinkedIn"
                                    style={{
                                        width: 56,
                                        height: 56,
                                        borderRadius: "50%",
                                        background: "#0a66c2",
                                        display: "inline-flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        boxShadow: "0 6px 14px rgba(0,0,0,0.12)",
                                        textDecoration: "none",
                                        color: "#fff",
                                        fontWeight: 700,
                                        fontSize: "0.85rem"
                                    }}
                                >
                                    IN
                                </a>

                                {/* CV */}
                                <a
                                    href="/assets/images/CV_NarrativeDesign_ENG.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Open CV"
                                    style={{
                                        width: 56,
                                        height: 56,
                                        borderRadius: "50%",
                                        background: "#222",
                                        display: "inline-flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        boxShadow: "0 6px 14px rgba(0,0,0,0.12)",
                                        textDecoration: "none",
                                        color: "#fff",
                                        fontWeight: 700,
                                        fontSize: "0.85rem"
                                    }}
                                >
                                    CV
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* 📌 Carte draggable marron */}
            {brownCardVisible && (
                <div
                    ref={brownCardRef}
                    className="grabbable clickable last-projects-card"
                    style={{
                        position: "absolute",
                        top: "3vh",
                        left: "45vw"
                    }}
                >
                    {/* Contenu principal avec polaroids */}
                    <div className="last-projects-content">
                        {/* Polaroid 1 */}
                        <div
                            className="clickable lp-polaroid"
                            onClick={() => {
                                handleMiniClick(0, dossiers[0].component(dossiers[0]));
                            }}
                        >
                            <img
                                src={kimz}
                                alt="kimz"
                                className="lp-img"
                            />
                        </div>

                        {/* Polaroid 2 */}
                        <div
                            className="clickable lp-polaroid"
                            onClick={() => {
                                handleMiniClick(1, dossiers[1].component(dossiers[1]));
                            }}
                        >
                            <img
                                src={zap}
                                alt="zap"
                                className="lp-img"
                            />
                        </div>
                    </div>

                    {/* Footer Derniers projets */}
                    <div className="last-projects-footer">
                        Last Projects
                    </div>
                </div>
            )
            }




            {/* overlay section */}
            {
                activeSection && (
                    <div
                        ref={sectionRef}
                        className="section-container"
                        style={{
                            position: "fixed",
                            top: 0,
                            left: 0,
                            width: "100vw",
                            height: "100vh",
                            background: "none",
                            zIndex: 9999,
                            overflow: "auto",
                            pointerEvents: "auto",
                        }}
                    >
                        {/* Bouton géant invisible derrière le contenu */}
                        <button
                            onClick={handleCloseSection}
                            style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100vw",
                                height: "100vh",
                                zIndex: 99, // juste sous le contenu interactif
                                background: "transparent",
                                border: "none",
                                padding: 0,
                                margin: 0,
                                opacity: 0,
                            }}
                            aria-label="Fermer en cliquant dans le vide"
                            tabIndex={-1}
                        />

                        {/* Flèche gauche */}
                        {activeIndex !== null && activeIndex > 0 && (
                            <button
                                ref={prevArrowRef}
                                onClick={e => { e.stopPropagation(); goToPrev(); }}
                                style={{
                                    position: "absolute",
                                    top: "50%",
                                    left: "30px",
                                    transform: "translateY(-50%)",
                                    zIndex: 10001,
                                    background: "rgba(255,255,255,0.8)",
                                    border: "none",
                                    borderRadius: "50%",
                                    width: "4.5vw",
                                    height: "4.5vw",
                                    fontSize: "2rem",
                                    cursor: "pointer",
                                    boxShadow: "0 2px 8px rgba(0,0,0,0.15)"
                                }}
                                aria-label="Dossier précédent"
                            >
                                &#8592;
                            </button>
                        )}

                        {/* Flèche droite */}
                        {activeIndex !== null && activeIndex < dossiers.length - 1 && (
                            <button
                                ref={nextArrowRef}
                                onClick={e => { e.stopPropagation(); goToNext(); }}
                                style={{
                                    position: "absolute",
                                    top: "50%",
                                    right: "30px",
                                    transform: "translateY(-50%)",
                                    zIndex: 10001,
                                    background: "rgba(255,255,255,0.8)",
                                    border: "none",
                                    borderRadius: "50%",
                                    width: "4.5vw",
                                    height: "4.5vw",
                                    fontSize: "2rem",
                                    cursor: "pointer",
                                    boxShadow: "0 2px 8px rgba(0,0,0,0.15)"
                                }}
                                aria-label="Dossier suivant"
                            >
                                &#8594;
                            </button>
                        )}

                        <button
                            type="button"
                            className="close-btn clickable"
                            onClick={e => { e.stopPropagation(); handleCloseSection(); }}
                            style={{
                                position: "absolute",
                                bottom: 20,
                                left: "50%",
                                transform: "translateX(-50%)",
                                zIndex: 10000,
                                background: "transparent",
                                border: "none",
                                padding: 0,
                            }}
                        >
                            <img src={crossClose} alt="Fermer" width={64} />
                        </button>

                        {/* Le contenu du dossier et la note, on empêche la propagation */}
                        <div onClick={e => e.stopPropagation()}>
                            {activeSection}
                            <Notes />
                        </div>
                    </div>
                )
            }

            {footerVisible && (
                <div
                    ref={footerRef}
                    className="grabbable"
                    style={{
                        position: "fixed",
                        bottom: "20px",       // distance par rapport au bas
                        left: "50vw",          // centré horizontalement
                        transform: "translateX(-50%)",
                        background: "#333",   // fond foncé
                        color: "#fff",
                        padding: "12px 24px",
                        borderRadius: "12px",
                        fontSize: "clamp(1rem, 1.8vw, 1.6rem)", // texte responsive
                        fontWeight: "500",
                        boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
                        cursor: "grab",
                        userSelect: "none",
                        zIndex: 10000
                    }}
                >
                    Nothing’s fixed here. Move things, have fun!
                </div>
            )}


            {!activeSection && <Notes forceOpen />}
        </div >
    );
};

export default Sections;
