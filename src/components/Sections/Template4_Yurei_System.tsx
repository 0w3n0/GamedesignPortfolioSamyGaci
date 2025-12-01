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
    const photos = [photo1, photo2, photo3];

    return (
        <div>
            <h1 className="h1-bold-title" style={{ marginBottom: "20px", width: "100%", marginLeft: "30px" }}>
                YUREI - Narrative Level Design
            </h1>
            <div
                style={{
                    display: "flex",
                    gap: "20px",
                    padding: "0 30px",
                    // NO flexWrap — keep side-by-side
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
                    <div className="polaroid-pos polaroid-pos--left--yurei-1" aria-hidden>
                        <PolaroidVertical
                            photo={photo1}
                            style={{ transform: "rotate(2deg) scale(1.2)" }}
                            scotch={false}
                        />
                    </div>


                    <div className="polaroid-pos polaroid-pos--left--yurei-2" aria-hidden>
                        <PolaroidHorizontal
                            photo={photo3}
                            style={{
                                transform: "rotate(5deg) scale(1)"
                            }}
                            scotch={false}
                        />
                    </div>


                    <div className="polaroid-pos polaroid-pos--left--yurei-3" aria-hidden>
                        <PolaroidHorizontal
                            photo={photo4}
                            style={{
                                transform: "rotate(-5deg) scale(1.1)"
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
                    <p style={{ padding: "10px 20px 20px 20px" }}>
                        <i>"A psychological & Survival horror game set in a manga's haunted pages." - Team of 12 people (3 Game Designer), 2025/2026</i><br /> <br />

                        With Yurei, I'm responsible for the game's storyline and for integration of events based on level briefs in the Unity engine. The entire challenge of narrative level design here is specifically based on the placement of the different cameras in accordance with the blockout of the levels already designed by another game designer. I have to analyze methodically why the level was designed in what way, and how to use it in line with the cameras and what they can tell.<br /> <br /> 
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
                        <a href="https://youtu.be/B3GkEsEAW2E" target="_blank" rel="noopener noreferrer"
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
                            }}>
                            ▶ Prototype
                        </a>
                        <a href="https://drive.google.com/drive/folders/1gGuD4fj-wDLN1JVY-cxPPv12CUeQh5ll?usp=drive_link" target="_blank" rel="noopener noreferrer"
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
                            }}>
                            DOC
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Template2_Zap_System;
