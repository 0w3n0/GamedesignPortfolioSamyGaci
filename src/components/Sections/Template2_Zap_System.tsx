import React from "react";
// import photo1 from "../../assets/images/png/Zap_From_Beyond/Affiche.png";
// import photo2 from "../../assets/images/png/Zap_From_Beyond/OnePager.png";
// import photo3 from "../../assets/images/png/Zap_From_Beyond/TimelineSerre.png";
// import photo4 from "../../assets/images/png/Zap_From_Beyond/Prototype.png";

import photo1 from "../../assets/images/png/Zap_From_Beyond/Affiche.png";
import photo2 from "../../assets/images/png/Zap_From_Beyond/Gameplay.png";
import photo3 from "../../assets/images/png/Zap_From_Beyond/Zap_Video1.png";
import photo4 from "../../assets/images/png/Zap_From_Beyond/Zap_Video2.png";
import photo5 from "../../assets/images/png/Zap_From_Beyond/Zap_Video3.png";

import PolaroidStandard from "./PolaroidStandard";
import PolaroidHorizontal from "./PolaroidHorizontal";
import PolaroidVertical from "./PolaroidVertical";
import itchLogo from "../../assets/images/png/itchio-logo.png";

const Template2_Zap_System: React.FC<{ disableItch?: boolean }> = ({ disableItch = false }) => {
    const photos = [photo1, photo2, photo3];

    return (
        <div>
            <h1 className="h1-bold-title" style={{ marginBottom: "20px", width: "100%", marginLeft: "30px" }}>
                ZAP FROM BEYOND - System Design (3 months project)
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
                        flex: "1 1 45%",
                        minWidth: "260px",
                        display: "flex",
                        flexDirection: "column",
                        position: "relative",
                        minHeight: "300px",
                        height: "auto",
                    }}
                >
                    {/* Image verticale en haut à gauche */}
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
                <div style={{
                    flex: "1 1 45%",
                    lineHeight: 1.6,
                    textAlign: "justify",
                    position: "relative",
                    minHeight: "400px"
                }}>
                    <p style={{ padding: "10px 40px 0px 20px" }}>
                        <i>A short, cryptic interactive story about a mysterious TV that hides more than it shows.</i><br /> <br />

                        As the sole Game Designer on the project, I handled both <b>narrative and system design</b>. My goal was to build an experience that felt <b>immersive</b>, <b>replayable</b>, and explored the theme of <b>FOMO</b> — the Fear of Missing Out — through ever-changing TV channels and hidden layers of meaning.

                        To validate the concept early on, I coded a <b>web prototype</b> myself, testing how players might react when given control over what they choose to watch — and, more importantly, what they might miss. <br /> <br />
                        <b><i>How can someone shift from being a passive observer to an active participant in the story?</i></b> <br /> <br />
                    </p>
                    <div
                        style={{
                            display: "flex",
                            gap: "clamp(12px, 2vw, 20px)",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "100%",
                            marginTop: "8px",
                            marginBottom: "18px",
                            flexWrap: "wrap",
                        }}
                    >
                        <a
                            href="https://youtu.be/oCg3Oa-JeHo"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "clamp(6px, 1vw, 10px)",
                                padding: "clamp(6px, 0.2vw, 10px) clamp(10px, 0.2vw, 14px)",
                                background: "rgba(255,255,255,0.95)",
                                borderRadius: "clamp(6px, 1vw, 10px)",
                                textDecoration: "none",
                                color: "#111",
                                boxShadow: "0 6px 18px rgba(0,0,0,0.12)",
                                fontWeight: 700,
                                fontSize: "clamp(0.75rem, 1vw, 1rem)",
                                whiteSpace: "nowrap",
                                transition: "all 0.3s ease"
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
                                gap: "clamp(6px, 1vw, 10px)",
                                padding: "clamp(6px, 0.2vw, 10px) clamp(10px, 0.2vw, 14px)",
                                background: "rgba(255,255,255,0.95)",
                                borderRadius: "clamp(6px, 1vw, 10px)",
                                textDecoration: "none",
                                color: "#111",
                                boxShadow: "0 6px 18px rgba(0,0,0,0.12)",
                                fontWeight: 700,
                                fontSize: "clamp(0.75rem, 1vw, 1rem)",
                                whiteSpace: "nowrap",
                                transition: "all 0.3s ease"
                            }}
                            aria-label="Open on itch.io"
                        >
                            <img
                                src={itchLogo}
                                alt="Itch.io"
                                style={{ width: "clamp(24px, 3vw, 36px)", height: "auto" }}
                            />
                            ITCH.IO
                        </a>
                        <a
                            href="https://example.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "clamp(6px, 1vw, 10px)",
                                padding: "clamp(6px, 0.2vw, 10px) clamp(10px, 0.2vw, 14px)",
                                background: "rgba(255,255,255,0.95)",
                                borderRadius: "clamp(6px, 1vw, 10px)",
                                textDecoration: "none",
                                color: "#111",
                                boxShadow: "0 6px 18px rgba(0,0,0,0.12)",
                                fontWeight: 700,
                                fontSize: "clamp(0.75rem, 1vw, 1rem)",
                                whiteSpace: "nowrap",
                                transition: "all 0.3s ease"
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
