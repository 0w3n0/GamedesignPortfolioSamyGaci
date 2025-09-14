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
import myPhoto from "../../assets/images/png/photo_cv.png"; // ⚠️ remplace par ta vraie photo

gsap.registerPlugin(Draggable);

const Sections: React.FC = () => {
    const [activeSection, setActiveSection] = useState<React.ReactNode | null>(null);
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const wrapperRefs = useRef<(HTMLDivElement | null)[]>([]);
    const sectionRef = useRef<HTMLDivElement | null>(null);

    const cardRef = useRef<HTMLDivElement | null>(null);
    const photoRef = useRef<HTMLImageElement | null>(null);

    const dossiers = [
        { title: "Section 0", component: <Section0 />, top: 100, left: 100 },
        { title: "Section 1", component: <Section1 />, top: 100, left: 400 },
        { title: "Section 2", component: <Section2 />, top: 300, left: 250 },
        { title: "Section 3", component: <Section3 />, top: 300, left: 600 },
        { title: "Section 4", component: <Section4 />, top: 100, left: 800 },
    ];

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
                    wrapperRefs.current.forEach((ref, i) => {
                        if (!ref) return;

                        const dossier = dossiers[i];
                        gsap.set(ref, {
                            position: "absolute",
                            top: dossier.top,
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
        if (cardRef.current) {
            Draggable.create(cardRef.current, {
                type: "x,y",
                inertia: true
            });
        }
    }, []);

    // --- hover photo
    useEffect(() => {
        if (!photoRef.current) return;
        const el = photoRef.current;

        const enter = () => {
            gsap.to(el, { rotation: 45, duration: 0.4, ease: "power2.out" });
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
                            top: dossier.top,
                            left: dossier.left,
                            willChange: "transform, opacity",
                        }}
                    >
                        <DossierMini
                            title={dossier.title}
                            top={dossier.top}
                            left={dossier.left}
                            contentComponent={dossier.component}
                            onMiniClick={() => handleMiniClick(index, dossier.component)}
                        />
                    </div>
                ))}
            </div>

            {/* 📌 Carte draggable bleue */}
            <div
                ref={cardRef}
                style={{
                    position: "absolute",
                    bottom: 20,
                    right: "45vw",
                    background: "#007bff",
                    borderRadius: "16px",
                    padding: "20px",
                    color: "#fff",
                    width: "50vw",
                    height: "50vh",
                    cursor: "grab",
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
                            width: "264px",
                            height: "330px",
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
                            cursor: "none",
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
