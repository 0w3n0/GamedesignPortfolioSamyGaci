import React from "react";
import photo1 from "../../assets/images/png/Orsay_1.png";
import photo2 from "../../assets/images/png/iut_velizy.png";
import photo3 from "../../assets/images/png/Uqat.png";
import PolaroidStandard from "./PolaroidStandard";
import PolaroidHorizontal from "./PolaroidHorizontal";
import PolaroidVertical from "./PolaroidVertical";
import itchLogo from "../../assets/images/png/itchio-logo.png"; // Ajoute ton logo ici

const Template3: React.FC<{ disableItch?: boolean }> = ({ disableItch = false }) => {
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
                    2. Présentation
                </h1>
                {/* Affichage séparé des polaroids */}
                <PolaroidStandard
                    photo={photo2}
                    style={{
                        position: "absolute",
                        top: "clamp(10px, 16vw, 21vw)",
                        left: "clamp(80px, 8vw, 10vw)",
                        zIndex: 5, 
                        transform: "rotate(5deg) scale(0.8)"
                    }}
                    scotch={true}
                />
                <PolaroidHorizontal
                    photo={photo1}
                    style={{
                        position: "absolute",
                        top: "clamp(120px, 4vw, 10vw)",
                        left: "clamp(0vw, 1vw, 2vw)",
                        zIndex: 3,
                        transform: "rotate(-8deg) scale(0.9)"
                    }}
                    scotch={true}
                />
            </div>

            {/* Colonne droite */}
            <div style={{ width: "50%", lineHeight: 1.6, textAlign: "justify" }}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et hendrerit arcu, in aliquam est. Fusce accumsan consectetur eros ac congue. Nulla nec viverra massa. Mauris sed sapien scelerisque, porta nulla ut, venenatis urna. Curabitur sed metus vitae sem pretium ornare sed dictum lectus. Aenean egestas nec elit sed suscipit. Ut vitae quam neque. Vestibulum vel leo vitae nulla rutrum volutpat. Curabitur luctus arcu ligula, sit amet vulputate tortor sollicitudin non.

                    Nam molestie risus a ex tincidunt condimentum. Donec eget enim gravida, semper purus et, faucibus nibh. Etiam ut nisi at purus blandit posuere et accumsan eros. Proin molestie ultrices nunc quis elementum. Aenean eget ultrices leo. Phasellus ut enim a purus posuere tristique. Aenean interdum felis nisl, vulputate sodales nunc egestas a. Cras imperdiet vehicula libero vel egestas. Vivamus a tincidunt enim. Mauris non sollicitudin erat. Curabitur vel est vitae ligula finibus accumsan. Duis ac sem et nunc malesuada faucibus nec ac lorem.
                </p>

                <PolaroidStandard
                    photo={photo2}
                    style={{
                        position: "absolute",
                        bottom: "clamp(-2vw, -4vw, -10vw)",
                        right: "clamp(20px, -8vw, -14vw)",
                        zIndex: 3,
                        transform: "rotate(5deg) scale(0.5)"
                    }}
                    scotch={true}
                />
                <PolaroidHorizontal
                    photo={photo3}
                    style={{
                        position: "absolute",
                        bottom: "clamp(-1vw, -5vw, -20vw)",
                        right: "clamp(20px, 12vw, 20vw)",
                        zIndex: 3,
                        transform: "rotate(-5deg) scale(0.5)"
                    }}
                    scotch={true}
                />
            </div>
            {!disableItch && (
                    <a
                        href="https://itch.io/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            position: "absolute",
                            left: "50%",
                            transform: "translateX(-50%)",
                            bottom: "24px",
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
                                width: "48px",
                                height: "48px",
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
                            }}>
                        </span>
                    </a>
                )}
        </div>
    );
};

export default Template3;
