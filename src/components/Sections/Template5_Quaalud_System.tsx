import React from "react";
import photo1 from "../../assets/images/png/Quaalud's Island/quaalud_ld.png";
import photo2 from "../../assets/images/png/Quaalud's Island/quaalud_ldUnreal2.png";
import photo3 from "../../assets/images/png/Quaalud's Island/quaalud_ldUnreal.png";
import photo4 from "../../assets/images/png/Quaalud's Island/quaalud_menu.png";
import PolaroidStandard from "./PolaroidStandard";
import PolaroidHorizontal from "./PolaroidHorizontal";
import PolaroidVertical from "./PolaroidVertical";
import itchLogo from "../../assets/images/png/itchio-logo.png"; // Ajoute ton logo ici

const Template2_Zap_System: React.FC<{ disableItch?: boolean }> = ({ disableItch = false }) => {
    const photos = [photo1, photo2, photo3]; // remplace null par photoX quand tu as les images

    return (
        <div>
            <h1 className="h1-bold-title" style={{ marginBottom: "20px", width: "100%", marginLeft: "30px" }}>
                QUAALUD'S ISLAND - Lead Level Design
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

                    <div className="polaroid-pos polaroid-pos--left--quaalud-1" aria-hidden>
                        <PolaroidHorizontal
                            photo={photo4}
                            style={{
                                transform: "rotate(-5deg) scale(1)"
                            }}
                            scotch={false}
                        />
                    </div>


                    <div className="polaroid-pos polaroid-pos--left--quaalud-2" aria-hidden>
                        <PolaroidHorizontal
                            photo={photo2}
                            style={{
                                transform: "rotate(-2deg) scale(0.9)"
                            }}
                            scotch={false}
                        />
                    </div>

                    <div className="polaroid-pos polaroid-pos--left--quaalud-3" aria-hidden>
                        <PolaroidHorizontal
                            photo={photo3}
                            style={{
                                transform: "rotate(5deg) scale(0.9)"
                            }}
                            scotch={false}
                        />
                    </div>


                    <div className="polaroid-pos polaroid-pos--left--quaalud-4" aria-hidden>
                        <PolaroidHorizontal
                            photo={photo1}
                            style={{
                                transform: "rotate(2deg) scale(1)"
                            }}
                            scotch={false}
                        />
                    </div>
                </div>

                {/* Colonne droite */}
                <div style={{ width: "50%", lineHeight: 1.6, textAlign: "justify" }}>
                    <p style={{ padding: "10px 40px 0px 20px" }}>
                        <i>"The traveler arrives on a new island that doesn’t look like much at first glance. By succeeding in discovering a trap door, they realized that a community, the Quaaluds, lived underground." - Team of 5 people, 2025</i><br /> <br />

                        Quaalud’s Island is a level designed as part of a blockout course. As the lead game designer of the project, I had to coordinate and design the main aspect of this non-linear open-world level. In addition to having to collaborate with a whole team of level designers, it was necessary to ensure that a very precise specification was respected in terms of metrics. The level design also had to tell something beyond simple gameplay, and be coherent with the world created. <br /> <br /> 
                        <b><i>How to tell the story of a lost civilization through both the environment and the beats of the level?</i></b> <br /> <br />
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
                            href="https://youtu.be/rnYjrKtWJEk"
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
                            ▶ Walkthrough
                        </a>
                        
                        <a
                            href="https://drive.google.com/drive/folders/1gIEUlgeaNlimj64hmPt-bh-GdiqFwozp?usp=drive_link"
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
