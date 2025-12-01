import React from "react";
import photo1 from "../../assets/images/png/Bring me Red/BringMeRed_Gdd.png";
import photo2 from "../../assets/images/png/Zap_From_Beyond/OnePager.png";
import photo3 from "../../assets/images/png/Bring me Red/BringMeRed_Unreal.png";
import photo4 from "../../assets/images/png/Bring me Red/BringMeRed_Menu2.png";
import PolaroidStandard from "./PolaroidStandard";
import PolaroidHorizontal from "./PolaroidHorizontal";
import PolaroidVertical from "./PolaroidVertical";
import itchLogo from "../../assets/images/png/itchio-logo.png"; // Ajoute ton logo ici

const Template2_Zap_System: React.FC<{ disableItch?: boolean }> = ({ disableItch = false }) => {
    const photos = [photo1, photo2, photo3]; // remplace null par photoX quand tu as les images

    return (
        <div>
            <h1 className="h1-bold-title" style={{ marginBottom: "20px", width: "100%", marginLeft: "30px" }}>
                BRING ME RED - System Design
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

                    <div className="polaroid-pos polaroid-pos--left--bring-1" aria-hidden>
                        <PolaroidVertical
                            photo={photo1}
                            style={{ transform: "rotate(3deg) scale(1.3)" }}
                            scotch={false}
                        />
                    </div>

                    <div className="polaroid-pos polaroid-pos--left--bring-2" aria-hidden>
                        <PolaroidHorizontal
                            photo={photo4}
                            style={{
                                transform: "rotate(2deg) scale(1)"
                            }}
                            scotch={false}
                        />
                    </div>


                    <div className="polaroid-pos polaroid-pos--left--bring-3" aria-hidden>
                        <PolaroidHorizontal
                            photo={photo3}
                            style={{
                                transform: "rotate(-5deg) scale(0.9)"
                            }}
                            scotch={false}
                        />
                    </div>

                </div>

                {/* Colonne droite */}
                <div style={{ width: "50%", lineHeight: 1.6, textAlign: "justify" }}>
                    <p style={{ padding: "10px 40px 0px 20px" }}>
                        <i>"A puzzle game where you have to feed the monster or it would feed on you..." - Team of 4 people (1 Game Designer), 2024</i><br /> <br />

                        Bring me Red is a small game in which the player must give food of the right color to the creature, except that the light of the room changes regularly, thus distorting those of the present objects. It is therefore up to the player to understand how light affects the perception of what he sees, and thus to bypass his own vision to win the game. The whole challenge of this project was to succeed in creating a simple system that would allow for rational game design, and therefore use all variable micro to generate games different from each other. I also had to prototype the color change system in blueprint on Unreal Engine, and create adaptable and customizable functions.<br /> <br />
                        <b><i>How to balance a game whose system relies heavily on randomness?</i></b> <br /> <br />
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
                            href="https://barffon200114.itch.io/bring-me-red"
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
                            aria-label="Open on itch.io"
                        >

                            ITCH.IO
                        </a>
                        <a
                            href="https://drive.google.com/drive/folders/1-F4SFI1-kaxYVDh3KYQJYjbuC31y4g6M?usp=sharing"
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
                </div>
            </div>
        </div>
    );

};

export default Template2_Zap_System;
