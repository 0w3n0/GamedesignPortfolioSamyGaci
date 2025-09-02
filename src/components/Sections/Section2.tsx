import React, { useRef, useEffect, useState } from "react";
import "../../styles/sections.scss";
import "../../styles/home.scss";
import { gsap } from "gsap";

const Section2: React.FC = () => {
    const navRefs = useRef<Array<HTMLDivElement | null>>([]);
    const contentRefs = useRef<Array<HTMLDivElement | null>>([]);
    const [activeDiv, setActiveDiv] = useState(0); // Child sélectionné

    const hoverColors = ["#ff6b6b", "#6bc1ff", "#6bff95", "#ffda6b", "#c56bff", "#ff6bbf"];
    const activeColor = "#9E9593";

    const defaultColor = "#C0AFAC"; // bleu pour le child actif


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

    return (
        <div className="home-container">
            <div className="background-layer">
                <div className="navbar">
                    {Array.from({ length: 6 }).map((_, i) => (
                        <div
                            key={i}
                            className="nav-item"
                            ref={(el) => { navRefs.current[i] = el; }}
                            onClick={() => setActiveDiv(i)}
                        >
                        </div>
                    ))}
                </div>

                <div className="middle-layer"></div>

                <div className="front-layer">
                    <h1>
                        <span className="h1-bold">
                            {activeDiv + 1}. {[
                                "Publicité et Communication",
                                "Design Graphique",
                                "Web Development",
                                "Marketing Digital",
                                "Photographie",
                                "Vidéo & Motion"
                            ][activeDiv]}
                        </span>
                    </h1>

                    {/* Contenus ciblés */}
                    {Array.from({ length: 6 }).map((_, i) => (
                        <div
                            key={i}
                            ref={(el) => { contentRefs.current[i] = el; }}
                            style={{ display: activeDiv === i ? "block" : "none" }}
                        >
                            <p>Contenu du projet {i + 1}… ici tu peux mettre texte, images, vidéos etc.</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Section2;
