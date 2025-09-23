// DossierMini.tsx
import React, { useRef, useState, useEffect } from "react";
import "../styles/dossierMini.scss";
import { gsap } from "gsap";
import Draggable from "gsap/Draggable";

gsap.registerPlugin(Draggable);

interface DossierMiniProps {
    title: string;
    left: string;
    bottom: string;
    contentComponent: React.ReactNode;
    onMiniClick: () => void;
    colors?: {
        background?: string;
        middle?: string;
        front?: string;
    };
}

const DossierMini: React.FC<DossierMiniProps> = ({
    title,
    onMiniClick,
    colors = {}
}) => {
    const middleRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);
    const backgroundRef = useRef<HTMLDivElement>(null);


    const handleMouseEnter = () => {
        setIsHovered(true);
        if (middleRef.current) {
            gsap.to(middleRef.current, { y: -5, duration: 0.3, ease: "power2.out" });
        }
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        if (middleRef.current) {
            gsap.to(middleRef.current, { y: 0, duration: 0.3, ease: "power2.out" });
        }
    };

    useEffect(() => {
        if (backgroundRef.current) {
            gsap.set(backgroundRef.current, { x: 0, y: 0 });
            Draggable.create(backgroundRef.current, {
                type: "x,y",
                bounds: ".sections-wrapper",
                inertia: true
            });
        }
        // Reset position on resize
        const resetPosition = () => {
            if (backgroundRef.current) {
                gsap.set(backgroundRef.current, { x: 0, y: 0 });
            }
        };
        window.addEventListener("resize", resetPosition);
        return () => window.removeEventListener("resize", resetPosition);
    }, []);

    return (
        <div ref={backgroundRef} className="mini-dossier" style={{ cursor: "grab" }}>
            <div
                className="background-layer"
                onClick={onMiniClick}
                style={{ backgroundColor: colors.background }}
            >
                <div className="navbar">
                    <div className="nav-item">Home</div>
                </div>
                <div
                    className="middle-layer"
                    ref={middleRef}
                    style={{ backgroundColor: colors.middle }}
                ></div>
                <div
                    className="front-layer"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onClick={onMiniClick}
                    style={{
                        pointerEvents: "auto",
                        backgroundColor: colors.front
                    }}
                >
                    <h1>
                        <span className="h1-bold">{title}</span>
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default DossierMini;