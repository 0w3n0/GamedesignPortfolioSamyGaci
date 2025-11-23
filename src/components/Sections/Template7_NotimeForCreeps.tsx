import React from "react";
import photo1 from "../../assets/images/png/NoTimeForCreeps/NoTimeForCreeps_gameplay.png";
import photo2 from "../../assets/images/png/NoTimeForCreeps/NoTimeForCreeps_GDD.png";
import photo3 from "../../assets/images/png/NoTimeForCreeps/NoTimeForCreeps_monsters.png";
import photo4 from "../../assets/images/png/NoTimeForCreeps/NoTimeForCreeps_Menu.png";
import PolaroidStandard from "./PolaroidStandard";
import PolaroidHorizontal from "./PolaroidHorizontal";
import PolaroidVertical from "./PolaroidVertical";
import itchLogo from "../../assets/images/png/itchio-logo.png"; // Ajoute ton logo ici

const Template2_Zap_System: React.FC<{ disableItch?: boolean }> = ({ disableItch = false }) => {
    const photos = [photo1, photo2, photo3]; // remplace null par photoX quand tu as les images

    return (
        <div>
            <h1 className="h1-bold-title" style={{ marginBottom: "20px", width: "100%", marginLeft: "30px" }}>
                NO TIME FOR CREEPS - System & Level Design
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

                    <PolaroidHorizontal
                        photo={photo1}
                        style={{
                            position: "absolute",
                            top: "clamp(1vw, 4vw, 12vw)",
                            left: "clamp(-5vw, 6vw, 14vw)",
                            zIndex: 8,
                            transform: "rotate(2deg) scale(0.9)"
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
                        <i>"A 3D cooperative shooter game in which you play as Jet and Rachel, two young aliens who want to escape a nightclub because they’ve had enough." 
                            - Team of 10 people (2 Game Designers), 2024</i><br /> <br />

                        On this project, I first thought to try to introduce something fresh to the genre of the classic shoot em up: a front-facing 3D view, a crowd system and a color-based cooperation system. I thus had to precisely document to the team the design intentions related to these features (variables, enemies, physics, projectiles, etc). I also had to design the entire level, first on paper and then directly on Unity thanks to a tool requested from the programmers that I had to learn.  <br /> <br /> 
                        <b><i>How to pace a single level game designed for two players while introducing different mechanics?</i></b> <br /> <br />
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
                            href="https://youtu.be/uPAqtuuVmP0?si=jDSOYMXhTgEqZ6Ze"
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
                            ▶ TRAILER
                        </a>

                        <a
                            href="https://kerorr.itch.io/no-time-for-creeps"
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
                             ITCH.IO
                        </a>
                        
                        <a
                            href="https://drive.google.com/drive/folders/1-Ni70NFy-G7_rThxCgiebG4x5pIMsjc5?usp=sharing"
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
                            right: "clamp(0px, 50vw, 50vw)",
                            zIndex: 10,
                            transform: "rotate(-5deg) scale(1)"
                        }}
                        scotch={false}
                    />

                    <PolaroidHorizontal
                        photo={photo2}
                        style={{
                            position: "absolute",
                            bottom: "clamp(-5vw, 0vw, 30vw)",
                            right: "clamp(0px, 30vw, 50vw)",
                            zIndex: 7,
                            transform: "rotate(-2deg) scale(0.9)"
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
                            transform: "rotate(5deg) scale(0.9)"
                        }}
                        scotch={false}
                    />
                </div>
            </div>
        </div>
    );

};

export default Template2_Zap_System;
