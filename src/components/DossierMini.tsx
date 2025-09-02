// DossierMini.tsx
import React, { useRef, useState } from "react";
import "../styles/dossierMini.scss";
import { gsap } from "gsap";
import Draggable from "react-draggable";

interface DossierMiniProps {
    title: string;
    left: number;
    top: number;
    contentComponent: React.ReactNode;
    onMiniClick: () => void; // déclenchera les anims côté parent
}

const DossierMini: React.FC<DossierMiniProps> = ({ title, onMiniClick }) => {
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

    return (
        <Draggable nodeRef={backgroundRef}><div ref={backgroundRef} className="mini-dossier" style={{ cursor: "pointer" }}>
            <div className="background-layer" onClick={onMiniClick}>
                <div className="navbar">
                    <div className="nav-item">Home</div>
                </div>

                <div className="middle-layer" ref={middleRef}></div>

                <div
                    className="front-layer"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onClick={onMiniClick}
                    style={{ pointerEvents: "auto" }}
                >
                    <h1>
                        <span className="h1-bold">{title}</span>
                    </h1>
                </div>
            </div>
        </div>
        </Draggable>
    );
};

export default DossierMini;