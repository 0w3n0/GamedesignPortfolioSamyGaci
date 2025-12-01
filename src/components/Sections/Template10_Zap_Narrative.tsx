import React from "react";
import photo1 from "../../assets/images/png/Zap_From_Beyond/Affiche.png";
import photo2 from "../../assets/images/png/Zap_From_Beyond/Gameplay.png";
import photo3 from "../../assets/images/png/Zap_From_Beyond/Zap_Video1.png";
import photo4 from "../../assets/images/png/Zap_From_Beyond/Zap_Video2.png";
import photo5 from "../../assets/images/png/Zap_From_Beyond/Zap_Video3.png";
import PolaroidStandard from "./PolaroidStandard";
import PolaroidHorizontal from "./PolaroidHorizontal";
import PolaroidVertical from "./PolaroidVertical";
import itchLogo from "../../assets/images/png/itchio-logo.png"; // Ajoute ton logo ici

const Template2_Zap_System: React.FC<{ disableItch?: boolean }> = ({ disableItch = false }) => {
    const photos = [photo1, photo2, photo3]; // remplace null par photoX quand tu as les images

    return (
        <div>
            <h1 className="h1-bold-title" style={{ marginBottom: "20px", width: "100%", marginLeft: "30px" }}>
                ZAP FROM BEYOND - Directing & Writing
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

                    <div className="polaroid-pos polaroid-pos--left--zapN-1" aria-hidden>
                        <PolaroidHorizontal
                            photo={photo4}
                            style={{
                                transform: "rotate(-2deg) scale(1)"
                            }}
                            scotch={false}
                        />
                    </div>


                    <div className="polaroid-pos polaroid-pos--left--zapN-2" aria-hidden>
                        <PolaroidHorizontal
                            photo={photo2}
                            style={{
                                transform: "rotate(3deg) scale(0.9)"
                            }}
                            scotch={false}
                        />
                    </div>

                    <div className="polaroid-pos polaroid-pos--left--zapN-3" aria-hidden>
                        <PolaroidHorizontal
                            photo={photo3}
                            style={{
                                transform: "rotate(-5deg) scale(0.9)"
                            }}
                            scotch={false}
                        />
                    </div>


                    <div className="polaroid-pos polaroid-pos--left--zapN-4" aria-hidden>
                        <PolaroidVertical
                            photo={photo1}
                            style={{
                                transform: "rotate(2deg) scale(0.9)"
                            }}
                            scotch={false}
                        />
                    </div>

                    <div className="polaroid-pos polaroid-pos--left--zapN-5" aria-hidden>
                        <PolaroidHorizontal
                            photo={photo5}
                            style={{
                                transform: "rotate(-2deg) scale(0.9)"
                            }}
                            scotch={false}
                        />
                    </div>
                </div>

                {/* Colonne droite */}
                <div style={{ width: "50%", lineHeight: 1.6, textAlign: "justify" }}>
                    <p style={{ padding: "10px 40px 0px 20px" }}>
                        <i>"A short, cryptic interactive story about a mysterious TV that hides more than it shows." - Team of 5 people (1 Game Designer), 2025</i><br /> <br />

                        My role as Narrative Designer on this project was to have to direct the entire content of the channels, as well as write them. The system of the game was quite complex to set up, especially because of the 3 types of channels: channels with only streaming videos, channels with changing videos according to the player’s behavior, and real-time channels directly generated with the Unity engine. So I had to coordinate all these channels and ensure that each one tells something both different and similar in order to make the player always ask himself the question of what is hidden behind the program. There are 3 possible endings in the game according to the player’s behaviors, which was a challenge because they had to make you want to play again to get the others.<br /> <br />
                        <b><i>How can someone shift from being a passive observer to an active participant in the story?</i></b> <br /> <br />
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
                            href="https://youtu.be/oCg3Oa-JeHo"
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
                            href="https://reglisaille.itch.io/zap-from-beyond"
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
                            href="https://drive.google.com/drive/folders/1oCsTsfb1ZJG3Y5JN68szgszRUE0b46-i?usp=sharing"
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
