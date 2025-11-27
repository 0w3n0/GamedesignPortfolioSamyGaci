import React, { useRef, useEffect, useState } from "react";
import "../../styles/sections.scss";
import "../../styles/home.scss";
import { gsap } from "gsap";
import PresentationSection from "./Template1";
import PresentationSection2 from "./Template2";
import PresentationSection3 from "./Template3";
import PresentationSection2_Zap_System from "./Template2_Zap_System";
import PresentationSection2_Trapped_System from "./Template3_Trapped_System";
import PresentationSection2_Yurei_System from "./Template4_Yurei_System";
import PresentationSection2_Quaalud_System from "./Template5_Quaalud_System";
import PresentationSection2_BringMeRed_System from "./Template6_BringMeRed_System";
import PresentationSection2_NoTimeForCreeps from "./Template7_NotimeForCreeps";

interface Section1Props {
    colors?: {
        background?: string;
        middle?: string;
        front?: string;
    };
}

const Section1: React.FC<Section1Props> = ({ colors }) => {
    const navRefs = useRef<Array<HTMLDivElement | null>>([]);
    const contentRefs = useRef<Array<HTMLDivElement | null>>([]);
    const frontRef = useRef<HTMLDivElement | null>(null);
    const [activeDiv, setActiveDiv] = useState<number>(0); // Child sélectionné

    const hoverColors = ["#ff6b6b", "#6bc1ff", "#6bff95", "#ffda6b", "#c56bff", "#ff6bbf"];
    const activeColor = "#9E9593";

    const defaultColor = "#C0AFAC"; // bleu pour le child actif

    const handleOpen = () => {
        if (frontRef.current) {
            gsap.to(frontRef.current, {
                duration: 1,
                rotateX: -180, // ou -90 si tu veux vers l'autre sens
                transformOrigin: "bottom center",
                ease: "power2.inOut",
            });
        }
    };

    // Hover + animation nav-items
    useEffect(() => {
        navRefs.current.forEach((ref, i) => {
            if (!ref) return;

            // Animation pour la couleur active ou par défaut
            gsap.to(ref, {
                backgroundColor: i === activeDiv ? activeColor : defaultColor,
                duration: 0.3,
                ease: "power2.out"
            });

            const handleMouseEnter = () => {
                gsap.to(ref, { backgroundColor: hoverColors[i], duration: 0.3, ease: "power2.out" });
            };

            const handleMouseLeave = () => {
                gsap.to(ref, { backgroundColor: i === activeDiv ? activeColor : defaultColor, duration: 0.3, ease: "power2.out" });
            };

            ref.addEventListener("mouseenter", handleMouseEnter);
            ref.addEventListener("mouseleave", handleMouseLeave);

            return () => {
                ref.removeEventListener("mouseenter", handleMouseEnter);
                ref.removeEventListener("mouseleave", handleMouseLeave);
            };
        });
    }, [activeDiv]);

    // Animation du contenu ciblé
    useEffect(() => {
        contentRefs.current.forEach((ref, i) => {
            if (!ref) return;
            if (i === activeDiv) {
                gsap.fromTo(ref, { x: 50, opacity: 0 }, { x: 0, opacity: 1, duration: 0.5, ease: "power2.out" });
            } else {
                gsap.to(ref, { opacity: 0, duration: 0.3, ease: "power2.out" });
            }
        });

        // Animation nav-items fade/slide + height
        navRefs.current.forEach((ref, i) => {
            if (!ref) return;
            if (i === activeDiv) {
                gsap.to(ref, { height: 65, y: -2, duration: 0.3, ease: "power2.out" });
            } else {
                gsap.to(ref, { height: 60, y: 0, duration: 0.3, ease: "power2.out" });
            }
        });
    }, [activeDiv]);

    useEffect(() => {
        const timer = setTimeout(() => {
            handleOpen(); // ou setIsOpen(true) selon ta logique
        }, 500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="home-container">
            <div
                className="background-layer"
                style={{ backgroundColor: colors?.background }}
            >
                <div className="navbar">
                    {Array.from({ length: 6 }).map((_, i) => (
                        <div
                            key={i}
                            className="nav-item"
                            ref={(el) => { navRefs.current[i] = el; }}
                            onClick={() => {
                                setActiveDiv(i);
                                console.log(i);
                                handleOpen();
                            }}
                        >
                        </div>
                    ))}
                </div>

                <div className="middle-layer" style={{ backgroundColor: colors?.middle }}>
                    {Array.from({ length: 9 }).map((_, i) => (
                        <div
                            key={i}
                            ref={el => { contentRefs.current[i] = el; }}
                            style={{
                                display: activeDiv === i ? "block" : "none",
                                position: "absolute",
                                width: "100%",
                                height: "100%",
                                top: 0,
                                left: 0,
                            }}
                        >
                            {i === 0 && <PresentationSection2_Zap_System />}
                            {i === 1 && <PresentationSection2_Yurei_System/>}
                            {i === 2 && <PresentationSection2_NoTimeForCreeps />}
                            {i === 3 && <PresentationSection2_Quaalud_System />}
                            {i === 4 && <PresentationSection2_Trapped_System />}
                            {i === 5 && <PresentationSection2_BringMeRed_System />}
                            
                            
                        </div>
                    ))}
                </div>

                <div
                    className="front-layer"
                    ref={frontRef}
                    onClick={handleOpen}
                    style={{ backgroundColor: colors?.front }}
                >
                    <h1>
                        <span className="h1-bold">System & Level Design</span>
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default Section1;
