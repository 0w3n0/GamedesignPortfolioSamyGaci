// Sections.tsx
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import DossierMini from "../DossierMini";
import Section0 from "./Section0";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import crossClose from "../../assets/images/png/cross-close.png";

const Sections: React.FC = () => {
    const [activeSection, setActiveSection] = useState<React.ReactNode | null>(null);
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const dossiers = [
        { title: "Section 0", component: <Section0 />, top: 100, left: 100 },
        { title: "Section 1", component: <Section1 />, top: 100, left: 400 },
        { title: "Section 2", component: <Section2 />, top: 300, left: 250 },
        { title: "Section 3", component: <Section3 />, top: 300, left: 600 },
        { title: "Section 4", component: <Section4 />, top: 100, left: 800 },
    ];

    const wrapperRefs = useRef<(HTMLDivElement | null)[]>([]);
    const sectionRef = useRef<HTMLDivElement | null>(null);

    const disableWrappersPointer = (disable = true) => {
        wrapperRefs.current.forEach((r) => {
            if (!r) return;
            r.style.pointerEvents = disable ? "none" : "auto";
        });
    };

    const handleMiniClick = (index: number, component: React.ReactNode) => {
        setActiveIndex(index);

        // 1) Le cliqué part vers la droite
        const clicked = wrapperRefs.current[index];
        if (clicked) {
            gsap.to(clicked, {
                x: window.innerWidth + 200, // suffisamment pour sortir
                duration: 0.55,
                ease: "power2.inOut",
            });
        }

        // 2) Les autres montent vers le haut + fade out
        wrapperRefs.current.forEach((ref, i) => {
            if (!ref || i === index) return;
            gsap.to(ref, {
                y: -220,
                opacity: 0,
                duration: 0.45,
                ease: "power2.inOut",
            });
        });

        // 3) empêcher toute interaction sur minidossiers pendant l'overlay
        disableWrappersPointer(true);

        // 4) afficher la section (animation d'entrée gérée par useEffect)
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

                    // remettre les mini-dossiers à leur position initiale
                    wrapperRefs.current.forEach((ref, i) => {
                        if (!ref) return;

                        const dossier = dossiers[i];
                        // réapplique top & left
                        gsap.set(ref, {
                            position: "absolute",
                            top: dossier.top,
                            left: dossier.left,
                            clearProps: "transform,opacity" // on garde top/left
                        });

                        // petite anim de retour clean
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


    // animation d'entrée : la section arrive depuis la gauche
    useEffect(() => {
        if (activeSection && sectionRef.current) {
            gsap.fromTo(
                sectionRef.current,
                { x: "-100%", opacity: 0 },
                { x: 0, opacity: 1, duration: 0.55, ease: "power3.out" }
            );
        }
    }, [activeSection]);

    return (
        <div
            className="sections-wrapper"
            style={{ position: "relative", width: "100%", height: "100%" }}
        >
            <div className="sections-row" style={{ position: "relative", width: "100%", height: "100%" }}>
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
                            // onMiniClick déclenche les anims parentales
                            onMiniClick={() => handleMiniClick(index, dossier.component)}
                        />
                    </div>
                ))}
            </div>

            {/* overlay section (fixed, au-dessus) */}
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
                    // empêcher les clicks de "tomber" aux éléments sous-jacents
                    onClick={(e) => {
                        e.stopPropagation();
                    }}
                >
                    <button
                        type="button"
                        className="close-btn clickable"
                        onClick={(e) => { e.stopPropagation(); handleCloseSection(); }}
                        style={{
                            position: "absolute",
                            bottom: 20,
                            left: "50%",             // centre horizontalement
                            transform: "translateX(-50%)", // ajuste pour être exactement au centre
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
                </div>
            )}
        </div>
    );
};

export default Sections;
