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
import myPhoto from "../../assets/images/png/photo_cv.png";
import kimz from "../../assets/images/png/kimz.png";

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
            title: "Section 0",
            bottom: "30vh",
            left: "5vw",
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
            title: "Section 1",
            bottom: "10vh",
            left: "17vw",
            colors: {
                background: "#a8325e", // rose foncé
                middle: "#ffb3d1",     // rose clair
                front: "#ffe6f0"       // rose très pâle
            },
            component: function (dossier: any) {
                return <Section1 colors={dossier.colors} />;
            },
        },
        {
            title: "Section 2",
            bottom: "30vh",
            left: "30vw",
            colors: {
                background: "#2a7c5b", // vert foncé
                middle: "#7cffc4",     // vert clair
                front: "#e6fff7"       // vert très pâle
            },
            component: function (dossier: any) {
                return <Section2 colors={dossier.colors} />;
            },
        },
        {
            title: "Section 3",
            bottom: "10vh",
            left: "42vw",
            colors: {
                background: "#7c6a2a", // jaune/moutarde foncé
                middle: "#ffe97e",     // jaune clair
                front: "#fffbe6"       // jaune très pâle
            },
            component: function (dossier: any) {
                return <Section3 colors={dossier.colors} />;
            },
        },
        {
            title: "Divers",
            bottom: "30vh",
            left: "55vw",
            colors: {
                background: "#6a2a7c", // violet foncé
                middle: "#d17eff",     // violet clair
                front: "#f3e6ff"       // violet très pâle
            },
            component: function (dossier: any) {
                return <Divers colors={dossier.colors} />;
            },
        },
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
                    className="grabbable"
                    style={{
                        position: "absolute",
                        top: "3vh",
                        left: "3vw",
                        background: "#915E5A",
                        borderRadius: "16px",
                        padding: "2vw",
                        color: "#fff",
                        width: "35vw",
                        height: "30vh",
                        boxShadow: "0 6px 12px rgba(0,0,0,0.3)",
                        userSelect: "none"
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            height: "100%",
                            width: "100%",
                            gap: "32px",
                        }}
                    >
                        {/* Image à gauche */}
                        <img
                            ref={photoRef}
                            src={myPhoto}
                            alt="Moi"
                            style={{
                                width: "35%",
                                height: "100%",
                                objectFit: "cover",
                                borderRadius: "8px",
                                boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                                flexShrink: 0
                            }}
                        />

                        {/* Texte à droite */}
                        <div style={{ flex: 1, display: "flex", flexDirection: "column", height: "100%" }}>
                            {/* Bloc centré */}
                            <div style={{ textAlign: "center" }}>
                                <h1
                                    style={{
                                        margin: 0,
                                        fontSize: "clamp(1.5rem, 3vw, 2.8rem)",
                                        fontWeight: 700,
                                    }}
                                >
                                    Samy Gaci
                                </h1>
                                <p
                                    style={{
                                        margin: 0,
                                        fontSize: "clamp(1.1rem, 2vw, 2.1rem)",
                                        opacity: 0.9,
                                        fontWeight: "bold",
                                        padding: "0px 18px 0px 0px",
                                    }}
                                >
                                    Narrative Designer
                                </p>
                            </div>
                            {/* Texte lorem ipsum aligné à gauche */}
                            <p
                                style={{
                                    margin: 0,
                                    fontSize: "clamp(0.9rem, 1vw, 1.8rem)",
                                    opacity: 0.9,
                                    textAlign: "left",
                                    paddingTop: "10px",
                                }}
                            >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                            </p>
                        </div>
                    </div>
                </div>
            )}

            {/* 📌 Carte draggable marron */}
            {brownCardVisible && (
                <div
                    ref={brownCardRef}
                    className="grabbable clickable"
                    style={{
                        position: "absolute",
                        background: "#5A7891",
                        borderRadius: "16px",
                        top: "3vh",
                        left: "45vw",
                        color: "#fff",
                        width: "30vw",
                        height: "35vh",
                        boxShadow: "0 6px 12px rgba(0,0,0,0.3)",
                        userSelect: "none",
                        display: "flex",
                        flexDirection: "column",
                        overflow: "hidden"
                    }}
                >
                    {/* Contenu principal avec polaroids */}
                    <div
                        style={{
                            flex: 1,
                            display: "flex",
                            justifyContent: "space-evenly",
                            alignItems: "center",
                            gap: "1rem"
                        }}
                    >
                        {/* Polaroid 1 */}
                        <div
                            className="clickable"
                            style={{
                                background: "#fff",
                                padding: "8px",
                                boxShadow: "0 4px 10px rgba(0,0,0,0.25)",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                width: "40%",
                                paddingBottom: "4vh",
                                cursor: "pointer"
                            }}
                            onClick={() => {
                                handleMiniClick(0, dossiers[0].component(dossiers[0]));
                            }}
                        >
                            <img
                                src={kimz}
                                alt="kimz"
                                style={{
                                    width: "100%",
                                    height: "20vh",
                                    backgroundColor: "#eee",
                                    objectFit: "cover"
                                }}
                            />
                        </div>

                        {/* Polaroid 2 */}
                        <div
                            className="clickable"
                            style={{
                                background: "#fff",
                                padding: "8px",
                                boxShadow: "0 4px 10px rgba(0,0,0,0.25)",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                width: "40%",
                                paddingBottom: "4vh",
                                cursor: "pointer"
                            }}
                            onClick={() => {
                                handleMiniClick(1, dossiers[1].component(dossiers[1]));
                            }}
                        >
                            <img
                                src={kimz}
                                alt="kimz"
                                style={{
                                    width: "100%",
                                    height: "20vh",
                                    backgroundColor: "#eee",
                                    objectFit: "cover"
                                }}
                            />
                        </div>
                    </div>

                    {/* Footer Derniers projets */}
                    <div
                        style={{
                            background: "#465B6D",
                            textAlign: "center",
                            padding: "12px 0",
                            fontSize: "clamp(1rem, 2vw, 2rem)",
                            fontWeight: "bold",
                            margin: 0
                        }}
                    >
                        Derniers projets
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
                    Vous pouvez bouger tous les éléments de la page si vous le souhaitez !
                </div>
            )}


            {!activeSection && <Notes forceOpen />}
        </div >
    );
};

export default Sections;
