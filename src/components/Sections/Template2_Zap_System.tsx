import React from "react";
import photo1 from "../../assets/images/png/Zap_From_Beyond/Affiche.png";
import photo2 from "../../assets/images/png/Zap_From_Beyond/OnePager.png";
import photo3 from "../../assets/images/png/Zap_From_Beyond/TimelineSerre.png";
import photo4 from "../../assets/images/png/Zap_From_Beyond/Prototype.png";
import PolaroidStandard from "./PolaroidStandard";
import PolaroidHorizontal from "./PolaroidHorizontal";
import PolaroidVertical from "./PolaroidVertical";
import itchLogo from "../../assets/images/png/itchio-logo.png"; // Ajoute ton logo ici

const Template2_Zap_System: React.FC<{ disableItch?: boolean }> = ({ disableItch = false }) => {
    const photos = [photo1, photo2, photo3]; // remplace null par photoX quand tu as les images
    
    return (
        <div
            style={{
                display: "flex",
                gap: "20px",
                padding: "0 30px",
            }}
        >


            {/* Colonne gauche */}
            <div
                style={{
                    width: "50%",
                    minWidth: "260px",
                    display: "flex",
                    flexDirection: "column",
                    position: "relative",
                    minHeight: "300px",
                    height: "clamp(300px, 40vw, 500px)",
                }}
            >
                <h1 className="h1-bold-title" style={{ marginBottom: "20px", width: "100%" }}>
                    ZAP FROM BEYOND - System Design (3 months project)
                </h1>
                {/* Affichage séparé des polaroids */}
                
                <PolaroidVertical
                    photo={photo1}
                    style={{
                        position: "absolute",
                        top: "clamp(120px, 10vw, 12vw)",
                        left: "clamp(-5vw, -5vw, 14vw)",
                        zIndex: 6,
                        transform: "rotate(-8deg) scale(1.3)"
                    }}
                    scotch={false}
                />
            </div>

            {/* Colonne droite */}
            <div style={{ width: "50%", lineHeight: 1.6, textAlign: "justify" }}>
                {/* <p>
                    <span className="span-important">Nom :</span> Samy Gaci
                    <br />
                    <span className="span-important">Lieu d’études actuel :</span>{" "}
                    <span className="important">UQAT - Canada</span> (échange universitaire)
                    <br />
                    <span className="span-important">Diplôme en cours d’obtention :</span>{" "}
                    Bachelor Universitaire de Technologie en Métiers du Multimédia et de
                    l’Internet (BUT MMI)
                    <br />
                    <span className="span-important">Spécialisation :</span>{" "}
                    <span className="important">Création numérique</span>
                    <br />
                    <span className="span-important">Motivations :</span> La cible a
                    toujours voulu prendre de nouvelles directions dans sa démarche{" "}
                    <span className="important">créative</span> pour se réinventer et
                    proposer des <span className="important">projets</span> qui apportent
                    tous quelque chose de différent. Il est passionné par la conception de{" "}
                    <span className="important">projets communicationnels impactant</span>,
                    et par ce qu’ils peuvent procurer au public. C'est pour ces raisons
                    qu'il souhaite s'orienter vers l'
                    <span className="important">
                        École de la Création Visuelle en publicité
                    </span>
                    , qui lui permettrait d'acquérir de nouvelles compétences en{" "}
                    <span className="important">communication</span>.
                </p> */}
                <p>
                   <i>A short, cryptic interactive story about a mysterious TV that hides more than it shows.</i><br/> <br/>

As the sole Game Designer on the project, I handled both <b>narrative and system design</b>. My goal was to build an experience that felt <b>immersive</b>, <b>replayable</b>, and explored the theme of <b>FOMO</b> — the Fear of Missing Out — through ever-changing TV channels and hidden layers of meaning.

To validate the concept early on, I coded a <b>web prototype</b> myself, testing how players might react when given control over what they choose to watch — and, more importantly, what they might miss. <br/> <br/>
<b><i>How can someone shift from being a passive observer to an active participant in the story?</i></b> <br/> <br/>
That question guided the entire design process. <br/> <br/> <center><h2><a href="https://youtu.be/oCg3Oa-JeHo" target="_blank">TRAILER</a></h2></center>
                   

                </p>
                <PolaroidHorizontal
                    photo={photo4}
                    style={{
                        position: "absolute",
                        bottom: "clamp(0vw, 12vw, 30vw)",
                        right: "clamp(0px, 32vw, 50vw)",
                        zIndex: 3,
                        transform: "rotate(5deg) scale(0.9)"
                    }}
                    scotch={false}
                />
                <PolaroidHorizontal
                    photo={photo3}
                    style={{
                        position: "absolute",
                        bottom: "clamp(-1vw, -5vw, -20vw)",
                        right: "clamp(20px, 29vw, 30vw)",
                        zIndex: 6,
                        transform: "rotate(-5deg) scale(0.8)"
                    }}
                    scotch={false}
                />
            </div>
            {!disableItch && (
                    <a
                        href="https://reglisaille.itch.io/zap-from-beyond"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            position: "absolute",
                            left: "50%",
                            transform: "translateX(-50%)",
                            bottom: "28px",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            textDecoration: "none",
                            zIndex: 10
                        }}
                    >
                        <img
                            src={itchLogo}
                            alt="Itch.io"
                            style={{
                                width: "30%",
                                height: "30%",
                                marginBottom: "4px",
                                filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.15))"
                            }}
                        />
                        <span
                            style={{
                                fontWeight: "bold",
                                color: "#fa5c5c",
                                fontSize: "1.1rem",
                                letterSpacing: "2px"
                            }}
                        >
                          
                        </span>
                    </a>
                )}
        </div>
    );
};

export default Template2_Zap_System;
