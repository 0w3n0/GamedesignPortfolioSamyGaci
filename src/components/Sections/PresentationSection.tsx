import React from "react";
// import photo1 from "../assets/images/photo1.jpg";
// import photo2 from "../assets/images/photo2.jpg";
// import photo3 from "../assets/images/photo3.jpg";

const PresentationSection: React.FC = () => {
    const photos = [null, null, null]; // remplace null par photoX quand tu as les images

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
                    display: "flex",
                    flexDirection: "column",
                    position: "relative", // relative pour contenir les polaroids absolus
                    minHeight: "300px",
                }}
            >
                <h1 className="h1-bold" style={{ marginBottom: "20px", width: "100%" }}>
                    0. Présentation
                </h1>
                {photos.map((photo, i) => (
                    <div
                        key={i}
                        className="polaroid"
                        style={{
                            position: "absolute",
                            bottom: "40px",
                            left: `${i * 30}px`, // espace entre les polaroids
                            backgroundColor: "white", // fond polaroid
                            padding: "10px 10px 20px 10px",
                            border: "1px solid #ccc",
                            boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
                            transform: `rotate(${i === 0 ? -10 : i === 1 ? 5 : -5}deg)`,
                            zIndex: 3 - i,
                        }}
                    >
                        <div
                            style={{
                                width: "150px",
                                height: "150px",
                                backgroundColor: photo ? "transparent" : "black",
                                display: "block",
                            }}
                        >
                            {photo && (
                                <img
                                    src={photo}
                                    alt={`photo ${i + 1}`}
                                    style={{ width: "100%", height: "100%", display: "block" }}
                                />
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {/* Colonne droite */}
            <div style={{ width: "50%", lineHeight: 1.6, textAlign: "justify" }}>
                <p>
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
                </p>
            </div>
        </div>
    );
};

export default PresentationSection;
