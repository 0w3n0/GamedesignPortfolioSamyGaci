import React from "react";
import photo1 from "../../assets/images/png/Yurei/Yurei_LevelDesign_UnityVertical.png";
import photo2 from "../../assets/images/png/Zap_From_Beyond/OnePager.png";
import photo3 from "../../assets/images/png/Yurei/Yurei_LevelDesign_Unity.png";
import photo4 from "../../assets/images/png/Yurei/Yurei_LevelDesign_Menu.png";
import PolaroidStandard from "./PolaroidStandard";
import PolaroidHorizontal from "./PolaroidHorizontal";
import PolaroidVertical from "./PolaroidVertical";
import itchLogo from "../../assets/images/png/itchio-logo.png"; // Ajoute ton logo ici

const Template2_Zap_System: React.FC<{ disableItch?: boolean }> = ({ disableItch = false }) => {
    const photos = [photo1, photo2, photo3]; // remplace null par photoX quand tu as les images

    return (
        <div>
            <h1 className="h1-bold-title" style={{ marginBottom: "20px", width: "100%", marginLeft: "30px" }}>
                YUREI - Writing
            </h1>
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
                    {/* Affichage séparé des polaroids */}

                    <PolaroidVertical
                        photo={photo1}
                        style={{
                            position: "absolute",
                            top: "clamp(1vw, 4vw, 12vw)",
                            left: "clamp(-5vw, 15vw, 14vw)",
                            zIndex: 6,
                            transform: "rotate(2deg) scale(1.2)"
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
                    <p style={{ padding: "10px 40px 20px 20px" }}>
                        <i>"A psychological & Survival horror game set in a manga's haunted pages." - Team of 12 people (3 Game Designer), 2025/2026</i><br /> <br />

                        For the story of Yurei, I wanted to explore themes related to the creative process and the relationship an artist can have with their work. That’s why all the symbols found in the game, mixed with the imagination of horror, echo the very fact of creating something. The biggest challenge with this project is to be able to successfully make players understand the multiple layers of reading offered: The narrative of the manga itself, as well as the story of the one who wrote it.<br /> <br /> 
                        <b><i>How to provoke feelings of unease and horror by mixing the different codes of both manga and video games?</i></b> <br /> <br />
                    </p>
                    <div
                        style={{
                            display: "flex",
                            gap: "20px",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "100%",
                            marginTop: "8px",
                            marginBottom: "18px",
                        }}
                    >
                        <a
                            href="https://youtu.be/B3GkEsEAW2E"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "10px",
                                padding: "8px 12px",
                                background: "rgba(255,255,255,0.95)",
                                borderRadius: 10,
                                textDecoration: "none",
                                color: "#111",
                                boxShadow: "0 6px 18px rgba(0,0,0,0.12)",
                                fontWeight: 700
                            }}
                            aria-label="Watch trailer"
                        >
                            ▶ PROTOTYPE
                        </a>
                        
                        <a
                            href="https://drive.google.com/drive/folders/1gGuD4fj-wDLN1JVY-cxPPv12CUeQh5ll?usp=drive_link"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "10px",
                                padding: "8px 12px",
                                background: "rgba(255,255,255,0.95)",
                                borderRadius: 10,
                                textDecoration: "none",
                                color: "#111",
                                boxShadow: "0 6px 18px rgba(0,0,0,0.12)",
                                fontWeight: 700
                            }}
                            aria-label="Other link"
                        >
                            DOC
                        </a>
                    </div>

                    <PolaroidHorizontal
                        photo={photo4}
                        style={{
                            position: "absolute",
                            bottom: "clamp(5vw, 15vw, 30vw)",
                            right: "clamp(0px, 47vw, 50vw)",
                            zIndex: 3,
                            transform: "rotate(-5deg) scale(1.1)"
                        }}
                        scotch={false}
                    />
                    <PolaroidHorizontal
                        photo={photo3}
                        style={{
                            position: "absolute",
                            bottom: "clamp(-5vw, 0vw, 50vw)",
                            right: "clamp(20px, 50vw, 90vw)",
                            zIndex: 5,
                            transform: "rotate(5deg) scale(1)"
                        }}
                        scotch={false}
                    />
                </div>
            </div>
        </div>
    );

};

export default Template2_Zap_System;
