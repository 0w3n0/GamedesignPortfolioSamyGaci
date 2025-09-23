import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Draggable from "gsap/Draggable";
import DossierMini from "../DossierMini";
import Section0 from "./Section0";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Notes from "./Notes";
import crossClose from "../../assets/images/png/cross-close.png";
import myPhoto from "../../assets/images/png/photo_cv.png";

gsap.registerPlugin(Draggable);

const Sections: React.FC = () => {
    const [activeSection, setActiveSection] = useState<React.ReactNode | null>(null);
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [cardVisible, setCardVisible] = useState<boolean>(true); // État pour contrôler la visibilité de la carte

    const wrapperRefs = useRef<(HTMLDivElement | null)[]>([]);
    const sectionRef = useRef<HTMLDivElement | null>(null);

    const cardRef = useRef<HTMLDivElement | null>(null);
    const photoRef = useRef<HTMLImageElement | null>(null);

    const dossiers = [
        {
            title: "Section 0",
            bottom: "5vh",
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
            bottom: "5vh",
            left: "30vw",
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
            bottom: "25vh",
            left: "17vw",
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
            bottom: "25vh",
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
            title: "Section 4",
            bottom: "5vh",
            left: "55vw",
            colors: {
                background: "#6a2a7c", // violet foncé
                middle: "#d17eff",     // violet clair
                front: "#f3e6ff"       // violet très pâle
            },
            component: function (dossier: any) {
                return <Section4 colors={dossier.colors} />;
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

        // Ajoute ceci pour la carte bleue :
        if (cardRef.current) {
            gsap.to(cardRef.current, {
                x: -window.innerWidth - 400,
                duration: 0.55,
                ease: "power2.inOut",
                onComplete: () => setCardVisible(false)
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

                    // Réaffiche la carte bleue, mais commence hors écran à gauche
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

    return (
        <div
            className="sections-wrapper"
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
                        background: "#007bff",
                        borderRadius: "16px",
                        padding: "2vw",
                        color: "#fff",
                        width: "50vw",
                        height: "40vh",
                        boxShadow: "0 6px 12px rgba(0,0,0,0.3)",
                        userSelect: "none"
                    }}
                >
                    <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
                        <img
                            ref={photoRef}
                            src={myPhoto}
                            alt="Moi"
                            style={{
                                minHeight: "120px",
                                minWidth: "90px",
                                width: "(264px)* 80%",
                                height: "(330px) * 80%",
                                objectFit: "cover",
                                transformOrigin: "center center"
                            }}
                        />
                        <div>
                            <h1 style={{ margin: 0 }}>Prénom Nom</h1>
                            <p style={{ margin: 0, fontSize: "2rem", opacity: 0.9, padding: "20px 0px 0px 0px" }}>
                                Narrative Designer
                            </p>

                            <div
                                style={{
                                    marginTop: "20px",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    gap: "6px"
                                }}
                            >
                                <span style={{ fontSize: "0.9rem" }}>Cliquez sur les projets !</span>
                                <span className="arrow" style={{ fontSize: "1.5rem" }}>⬇️</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* overlay section */}
            {activeSection && (
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
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Flèche gauche */}
                    {activeIndex !== null && activeIndex > 0 && (
                        <button
                            onClick={goToPrev}
                            style={{
                                position: "absolute",
                                top: "50%",
                                left: "30px",
                                transform: "translateY(-50%)",
                                zIndex: 10001,
                                background: "rgba(255,255,255,0.8)",
                                border: "none",
                                borderRadius: "50%",
                                width: "48px",
                                height: "48px",
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
                            onClick={goToNext}
                            style={{
                                position: "absolute",
                                top: "50%",
                                right: "30px",
                                transform: "translateY(-50%)",
                                zIndex: 10001,
                                background: "rgba(255,255,255,0.8)",
                                border: "none",
                                borderRadius: "50%",
                                width: "48px",
                                height: "48px",
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
                        onClick={(e) => {
                            e.stopPropagation();
                            handleCloseSection();
                        }}
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

                    <div>{activeSection}</div>
                    <Notes />
                </div>
            )}

            {!activeSection && <Notes forceOpen />}
        </div>
    );
};

export default Sections;
