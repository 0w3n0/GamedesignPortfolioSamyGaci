import React, { useRef, useEffect, useState } from "react";
import "../../styles/sections.scss";
import "../../styles/home.scss";
import { gsap } from "gsap";
import Draggable from "gsap/Draggable";
import PresentationSection from "./Template1";
import orsay from "../../assets/images/png/Orsay_1.png";
import velizy from "../../assets/images/png/iut_velizy.png";
import Uqat from "../../assets/images/png/Uqat.png";
import Brouillon from "../../assets/images/png/IMG_20250907_135639.png";
import Sasuke from "../../assets/images/gif/sasuke-sasuke-uchiha.gif";

const Divers: React.FC<{ colors?: { background?: string; middle?: string; front?: string } }> = ({ colors }) => {
    const backgroundRef = useRef<HTMLDivElement>(null);
    const middleRef = useRef<HTMLDivElement>(null);
    const imgRefs = useRef<Array<HTMLDivElement | null>>([]);
    const frontRef = useRef<HTMLDivElement | null>(null);
    const [shadowBoxOpen, setShadowBoxOpen] = useState(false);
    const [currentImg, setCurrentImg] = useState<number>(0);
    const [activeDiv, setActiveDiv] = useState<number | null>(null); // Child sélectionné

    const hoverColors = ["#ff6b6b", "#6bc1ff", "#6bff95", "#ffda6b", "#c56bff", "#ff6bbf"];
    const activeColor = "#9E9593";

    const defaultColor = "#C0AFAC"; // bleu pour le child actif
    const images = [
        orsay,
        velizy,
        Brouillon,
        Uqat,
        orsay,
        velizy,
        Brouillon,
        Uqat,
        orsay,
        velizy,
        Brouillon,
        Uqat,
        orsay,
        velizy,
        Brouillon,
        Uqat,
    ];

    const medias = [
        { type: "image", src: orsay },
        { type: "image", src: velizy },
        { type: "image", src: Brouillon },
        { type: "image", src: Uqat },
        { type: "gif", src: Sasuke },
        { type: "video", src: "" },
        { type: "youtube", youtubeId: "dQw4w9WgXcQ" },
    ];

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

    // Initialisation Draggable pour chaque image
    useEffect(() => {
        if (middleRef.current) {
            imgRefs.current.forEach((ref) => {
                if (ref) {
                    Draggable.get(ref)?.kill();
                    Draggable.create(ref, {
                        type: "x,y",
                        bounds: middleRef.current,
                        inertia: true,
                        edgeResistance: 0.85,
                        zIndexBoost: false,
                        onPress() {
                            gsap.to(ref, { scale: 1.08, boxShadow: "0 8px 32px rgba(0,0,0,0.25)", duration: 0.2 });
                        },
                        onRelease() {
                            gsap.to(ref, { scale: 1, boxShadow: "0 2px 8px rgba(0,0,0,0.12)", duration: 0.2 });
                        }
                    });
                }
            });
        }
    }, [shadowBoxOpen]);

    useEffect(() => {
        const handleResize = () => {
            imgRefs.current.forEach((ref) => {
                if (ref) gsap.set(ref, { x: 0, y: 0 });
            });
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Shadow box navigation
    const goPrev = () => setCurrentImg((i) => (i > 0 ? i - 1 : medias.length - 1));
    const goNext = () => setCurrentImg((i) => (i < medias.length - 1 ? i + 1 : 0));

    // Animation d'entrée créative
    useEffect(() => {
        const timer = setTimeout(() => {
            if (middleRef.current) {
                gsap.fromTo(
                    middleRef.current.querySelectorAll(".grid-img"),
                    { scale: 0.7, opacity: 0, y: 60, rotate: -10 },
                    {
                        scale: 1,
                        opacity: 1,
                        y: 0,
                        rotate: 0,
                        stagger: { amount: 0.7, grid: "auto", from: "random" },
                        duration: 0.7,
                        ease: "back.out(1.7)"
                    }
                );
            }
        }, 500); // délai de 0.5s
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            handleOpen(); // ou setIsOpen(true) selon ta logique
        }, 500);
        return () => clearTimeout(timer);
    }, []);

    // Redimensionnement images pour la grille
    const cellSize = "min(16vw, 16vh)"; // taille plus grande et responsive

    return (
        <div className="home-container">
            <div
                className="background-layer"
                ref={backgroundRef}
                style={{ backgroundColor: colors?.background }}
            >
                <div
                    className="middle-layer"
                    ref={middleRef}
                    style={{
                        backgroundColor: colors?.middle,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: 0,
                        boxSizing: "border-box"
                    }}
                >
                    <div
                        className="image-grid"
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(4, 1fr)",
                            gridTemplateRows: "repeat(4, 1fr)",
                            gap: "8px",
                            width: "100%",
                            height: "100%",
                            maxWidth: "none",
                            maxHeight: "none",
                            position: "relative",
                            alignItems: "center",
                            justifyItems: "center",
                        }}
                    >
                        {medias.map((media, i) => (
                            <div
                                key={i}
                                ref={el => { imgRefs.current[i] = el; }}
                                className="grid-img clickable"
                                style={{
                                    width: cellSize,
                                    height: cellSize,
                                    background: "#fff",
                                    borderRadius: "8px",
                                    boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
                                    overflow: "hidden",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    cursor: "grab",
                                    transition: "box-shadow 0.2s",
                                    opacity: 0,
                                }}
                                onClick={() => {
                                    setCurrentImg(i);
                                    setShadowBoxOpen(true);
                                }}
                            >
                                {media.type === "image" ? (
                                    <img
                                        src={media.src}
                                        alt={`image${i + 1}`}
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "cover",
                                            objectPosition: "center"
                                        }}
                                    />
                                ) : media.type === "gif" ? (
                                    <img
                                        src={media.src}
                                        alt={`gif${i + 1}`}
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "cover",
                                            objectPosition: "center"
                                        }}
                                    />
                                ) : media.type === "youtube" ? (
                                    <div
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            position: "relative",
                                            background: "#000",
                                        }}
                                    >
                                        <iframe
                                            src={`https://www.youtube.com/embed/${media.youtubeId}?autoplay=1&mute=1&controls=0`}
                                            style={{
                                                width: "100%",
                                                height: "100%",
                                                border: "none",
                                                borderRadius: "8px",
                                                pointerEvents: "none", // ⛔ empêche l’iframe de capturer les clics pour Draggable
                                            }}
                                            allow="autoplay"
                                            allowFullScreen
                                            title={`youtube${i + 1}`}
                                        />
                                    </div>
                                ) : (
                                    <video
                                        src={media.src}
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "cover",
                                            objectPosition: "center"
                                        }}
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                    />
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                <div
                    className="front-layer"
                    ref={frontRef}
                    onClick={handleOpen}
                    style={{ backgroundColor: colors?.front }}
                >
                    <h1>
                        <span className="h1-bold">Divers
                        </span>
                    </h1>
                </div>
            </div>



            {/* Shadow box */}
            {shadowBoxOpen && (
                <div
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100vw",
                        height: "100vh",
                        background: "rgba(30,30,30,0.85)",
                        zIndex: 9999,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        animation: "fadeIn 0.4s"
                    }}
                    onClick={() => setShadowBoxOpen(false)}
                >
                    {/* Flèche gauche */}
                    <button
                        onClick={(e) => { e.stopPropagation(); goPrev(); }}
                        style={{
                            position: "absolute",
                            left: "15vw",
                            top: "50%",
                            transform: "translateY(-50%)",
                            fontSize: "3rem",
                            background: "none",
                            border: "none",
                            color: "#fff",
                            cursor: "pointer",
                            zIndex: 10001,
                            transition: "transform 0.2s",
                        }}
                        aria-label="Précédent"
                    >
                        &#8592;
                    </button>
                    {/* Média agrandi */}
                    {medias[currentImg].type === "image" ? (
                        <img
                            src={medias[currentImg].src}
                            alt={`image${currentImg + 1}`}
                            style={{
                                maxWidth: "70vw",
                                maxHeight: "80vh",
                                borderRadius: "16px",
                                boxShadow: "0 8px 32px rgba(0,0,0,0.45)",
                                objectFit: "contain",
                                background: "#fff",
                                animation: "zoomIn 0.5s cubic-bezier(.68,-0.55,.27,1.55)"
                            }}
                            onClick={e => e.stopPropagation()}
                        />
                    ) : medias[currentImg].type === "gif" ? (
                        <img
                            src={medias[currentImg].src}
                            alt={`gif${currentImg + 1}`}
                            style={{
                                maxWidth: "70vw",
                                maxHeight: "80vh",
                                borderRadius: "16px",
                                boxShadow: "0 8px 32px rgba(0,0,0,0.45)",
                                objectFit: "contain",
                                background: "#fff",
                                animation: "zoomIn 0.5s cubic-bezier(.68,-0.55,.27,1.55)"
                            }}
                            onClick={e => e.stopPropagation()}
                        />
                    ) : medias[currentImg].type === "youtube" ? (
                        <iframe
                            src={`https://www.youtube.com/embed/${medias[currentImg].youtubeId}?autoplay=1&controls=1`}
                            style={{
                                maxWidth: "70vw",
                                maxHeight: "80vh",
                                width: "70vw",
                                height: "80vh",
                                border: "none",
                                borderRadius: "16px",
                                background: "#000"
                            }}
                            allow="autoplay"
                            allowFullScreen
                            title={`youtube${currentImg + 1}`}
                            onClick={e => e.stopPropagation()}
                        />
                    ) : (
                        <video
                            src={medias[currentImg].src}
                            style={{
                                maxWidth: "70vw",
                                maxHeight: "80vh",
                                borderRadius: "16px",
                                boxShadow: "0 8px 32px rgba(0,0,0,0.45)",
                                objectFit: "contain",
                                background: "#fff",
                                animation: "zoomIn 0.5s cubic-bezier(.68,-0.55,.27,1.55)"
                            }}
                            autoPlay
                            loop
                            controls
                            muted={false}
                            playsInline={false}
                            onClick={e => e.stopPropagation()}
                        />
                    )}

                    {/* Flèche droite */}
                    <button
                        onClick={(e) => { e.stopPropagation(); goNext(); }}
                        style={{
                            position: "absolute",
                            right: "15vw",
                            top: "50%",
                            transform: "translateY(-50%)",
                            fontSize: "3rem",
                            background: "none",
                            border: "none",
                            color: "#fff",
                            cursor: "pointer",
                            zIndex: 10001,
                            transition: "transform 0.2s",
                        }}
                        aria-label="Suivant"
                    >
                        &#8594;
                    </button>
                </div>
            )}

            {/* Animations CSS */}
            <style>
                {`
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes zoomIn {
                    from { transform: scale(0.7); opacity: 0; }
                    to { transform: scale(1); opacity: 1; }
                }
                `}
            </style>
        </div>
    );
};

export default Divers;
