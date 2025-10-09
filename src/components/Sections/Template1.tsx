import React from "react";
import photo1 from "../../assets/images/png/Orsay_1.png";
import photo2 from "../../assets/images/png/iut_velizy.png";
import photo3 from "../../assets/images/png/Uqat.png";
import PolaroidStandard from "./PolaroidStandard";
import PolaroidHorizontal from "./PolaroidHorizontal";
import PolaroidVertical from "./PolaroidVertical";

const Template1: React.FC = () => {
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
                <h1 className="h1-bold" style={{ marginBottom: "20px", width: "100%" }}>
                    0. Présentation
                </h1>
                {/* Affichage séparé des polaroids */}
                <PolaroidHorizontal
                    photo={photo1}
                    style={{
                        position: "absolute",
                        top: "clamp(10px, 7vw, 8vw)",
                        left: "clamp(20px, 8vw, 60px)",
                        zIndex: 3,
                        transform: "rotate(5deg) scale(0.9)"
                    }}
                    scotch={true}
                />
                <PolaroidStandard
                    photo={photo2}
                    style={{
                        position: "absolute",
                        top: "clamp(60px, 18vw, 30vw)",
                        left: "clamp(80px, 10vw, 18vw)",
                        zIndex: 5, 
                        transform: "rotate(5deg) scale(0.6)"
                    }}
                    scotch={true}
                />
                <PolaroidVertical
                    photo={photo3}
                    style={{
                        position: "absolute",
                        top: "clamp(120px, 16vw, 320px)",
                        left: "clamp(1vw, 2vw, 14vw)",
                        zIndex: 4,
                        transform: "rotate(-8deg) scale(0.7)"
                    }}
                    scotch={true}
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et hendrerit arcu, in aliquam est. Fusce accumsan consectetur eros ac congue. Nulla nec viverra massa. Mauris sed sapien scelerisque, porta nulla ut, venenatis urna. Curabitur sed metus vitae sem pretium ornare sed dictum lectus. Aenean egestas nec elit sed suscipit. Ut vitae quam neque. Vestibulum vel leo vitae nulla rutrum volutpat. Curabitur luctus arcu ligula, sit amet vulputate tortor sollicitudin non.

                    Nam molestie risus a ex tincidunt condimentum. Donec eget enim gravida, semper purus et, faucibus nibh. Etiam ut nisi at purus blandit posuere et accumsan eros. Proin molestie ultrices nunc quis elementum. Aenean eget ultrices leo. Phasellus ut enim a purus posuere tristique. Aenean interdum felis nisl, vulputate sodales nunc egestas a. Cras imperdiet vehicula libero vel egestas. Vivamus a tincidunt enim. Mauris non sollicitudin erat. Curabitur vel est vitae ligula finibus accumsan. Duis ac sem et nunc malesuada faucibus nec ac lorem.

                    Quisque eu orci eu justo congue cursus. Donec aliquam nisl vel consequat pretium. Cras cursus vulputate nunc non eleifend. Nam lacinia turpis ac eleifend faucibus. In egestas, nisl non pretium rutrum, eros magna hendrerit urna, eget gravida lorem nisi ut mauris. Proin et sollicitudin purus. Pellentesque et volutpat felis. Cras vel erat hendrerit, ullamcorper mauris nec, porta enim. Mauris at pellentesque dui. Integer molestie odio a magna dictum lacinia. Suspendisse pretium nulla in nisl ornare, vel dignissim risus pellentesque. Praesent euismod sagittis enim, id mollis mi dapibus vel.

                </p>
            </div>
        </div>
    );
};

export default Template1;
