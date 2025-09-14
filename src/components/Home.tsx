import React, { useRef, useState, useEffect } from "react";
import "../styles/home.scss";
import { gsap } from "gsap";
import Sections from "./Sections/Sections";

const Home: React.FC = () => {
    const middleRef = useRef<HTMLDivElement>(null);
    const frontRef = useRef<HTMLDivElement>(null);
    const backgroundRef = useRef<HTMLDivElement>(null);
    const projetsRef = useRef<HTMLDivElement>(null);
    const [isClicked, setIsClicked] = useState(false);
    const [showProjets, setShowProjets] = useState(true);

    const handleMouseEnter = () => {
        if (middleRef.current && !isClicked) {
            gsap.to(middleRef.current, { y: -10, duration: 0.3, ease: "power2.out" });
        }
    };

    const handleMouseLeave = () => {
        if (middleRef.current && !isClicked) {
            gsap.to(middleRef.current, { y: 0, duration: 0.3, ease: "power2.out" });
        }
    };

    const handleClick = () => {
        if (middleRef.current && backgroundRef.current) {
            // monte middle-layer
            gsap.to(middleRef.current, { y: "-200%", duration: 0.5, ease: "power2.out" });

            // fait disparaître background-layer vers la droite
            gsap.to(backgroundRef.current, {
                x: "100%",
                opacity: 0,
                duration: 0.5,
                ease: "power2.inOut",
                onComplete: () => setShowProjets(true) // montre Projets après animation
            });
        }
    };

    // animation d'entrée de Projets depuis la gauche
    useEffect(() => {
        if (showProjets && projetsRef.current) {
            gsap.fromTo(
                projetsRef.current,
                { x: "-100%" },
                { x: "0%", duration: 0.7, ease: "power2.out" }
            );
        }
    }, [showProjets]);

    return (
        <div className="home-container">
            {/* <div className="background-layer" ref={backgroundRef}>
                <div className="navbar">
                    <div className="nav-item">Home</div>
                    <div className="nav-item">Dossiers</div>
                    <div className="nav-item">Contact</div>
                </div>
                <div className="middle-layer" ref={middleRef}></div>
                <div
                    className="front-layer"
                    ref={frontRef}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onClick={handleClick}
                >
                    <h1>
                        <span className="h1-bold">Portfolio 2024</span> <br />
                        Samy Gaci
                    </h1>
                    <div className="click-instruction">
                        <p>Cliquer pour entrer Cliquer pour entrer  pour entrer  pour entrer  pour entrer  pour entrer  pour entrer  pour entrer pour entrer  pour entrer  pour entrer  pour entrer  pour entrer </p>
                        
                    </div>
                </div>
            </div> */}

            {showProjets && (
                <div className="projets-container" ref={projetsRef}>
                    <Sections />
                </div>
            )}
        </div>
    );
};

export default Home;
