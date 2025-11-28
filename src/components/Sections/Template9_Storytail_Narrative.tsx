import React from "react";
import photo1 from "../../assets/images/png/Storytail/Storytail_Affiche.png";
import photo2 from "../../assets/images/png/Storytail/storytail_storyboard.jpg";
import photo3 from "../../assets/images/png/Storytail/storytail_behind2.jpg";
import photo4 from "../../assets/images/png/Storytail/Storytail_Menu.png";
import PolaroidStandard from "./PolaroidStandard";
import PolaroidHorizontal from "./PolaroidHorizontal";
import PolaroidVertical from "./PolaroidVertical";
import itchLogo from "../../assets/images/png/itchio-logo.png"; // Ajoute ton logo ici

const Template2_Zap_System: React.FC<{ disableItch?: boolean }> = ({ disableItch = false }) => {
    const photos = [photo1, photo2, photo3]; // remplace null par photoX quand tu as les images

    return (
        <div>
            <h1 className="h1-bold-title" style={{ marginBottom: "20px", width: "100%", marginLeft: "30px" }}>
                STORYTAIL - Cutscenes & Writing
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
                            left: "clamp(-20vw, -9vw, 14vw)",
                            zIndex: 6,
                            transform: "rotate(-4deg) scale(1.3)"
                        }}
                        scotch={false}
                    />

                    <PolaroidVertical
                        photo={photo2}
                        style={{
                            position: "absolute",
                            top: "clamp(1vw, 4vw, 12vw)",
                            left: "clamp(-10vw, 10vw, 14vw)",
                            zIndex: 6,
                            transform: "rotate(4deg) scale(1.3)"
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
                    <p style={{ padding: "10px 40px 0px 20px" }}>
                        <i>"An immersive cooperative experience composed of 4 giant screens where children are part of a tale in a dreamlike world..." - Team of 6 people (2 Game Designers), 2023/2024</i><br /> <br />

                        On Storytail, I took care of all the cutscenes of the experience, from their design to their integration on the Unity engine. One of the biggest challenges for me was having to create a narration enhanced by the device put in place on the experience: I had to make sure to use as much as possible the 4 available screens to make them all interesting and immersive. The writing and directing of actors was a major challenge, as the experience was intended for the general audience, children and adults had to find the experience interesting. <br /> <br />
                        <b><i>How to tell a story at several levels of readings and link them to interaction design?</i></b> <br /> <br />
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
                            href="https://youtu.be/NMjPYXWXWzA?si=qyGc9Ursxin5dNJ1"
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
                            ▶ DEMO
                        </a>
                        
                        <a
                            href="https://drive.google.com/drive/folders/1ldFIjVmxqqrqzvbP7dwuzXECXQwCRFlQ?usp=sharing"
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
                            bottom: "clamp(-15vw, 0vw, 30vw)",
                            right: "clamp(0px, 30vw, 50vw)",
                            zIndex: 10,
                            transform: "rotate(5deg) scale(0.9)"
                        }}
                        scotch={false}
                    />

                    
                    <PolaroidHorizontal
                        photo={photo3}
                        style={{
                            position: "absolute",
                            bottom: "clamp(-10vw, 0vw, 20vw)",
                            right: "clamp(20px, 50vw, 80vw)",
                            zIndex: 9,
                            transform: "rotate(-5deg) scale(0.9)"
                        }}
                        scotch={false}
                    />

                    
                </div>
            </div>
        </div>
    );

};

export default Template2_Zap_System;
