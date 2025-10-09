import React from "react";
import scotchImg from "../../assets/images/png/Scotch.png";
const PolaroidVertical: React.FC<{ photo: string; style?: React.CSSProperties; scotch?: boolean }> = ({ photo, style, scotch }) => (
    <div
        className="polaroid"
        style={{
            backgroundColor: "white",
            padding: "0px clamp(6px, 1vw, 10px) clamp(6px, 2vw, 3vw) clamp(6px, 1vw, 10px)",
            border: "1px solid #ccc",
            boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
            width: "clamp(90px, 14vw, 16vw)",
            height: "clamp(160px, 20vw, 24vw)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            ...style,
        }}
    >
        {scotch && (
            <img
                src={scotchImg}
                alt="scotch"
                style={{
                    position: "absolute",
                    top: "calc(-1 * clamp(20px, 5.5vh, 7vh))",
                    left: "50%",
                    transform: "translateX(-50%) rotate(60deg)",
                    width: "35%",
                    zIndex: 10,
                    pointerEvents: "none"
                }}
            />
        )}
        <div
            style={{
                width: "clamp(70px, 13vw, 15vw)",
                height: "clamp(140px, 18vw, 20vw)",
                backgroundColor: photo ? "transparent" : "black",
                display: "block",
            }}
        >
            <img
                src={photo}
                alt="polaroid vertical"
                style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                    borderRadius: "6px"
                }}
            />
        </div>
    </div>
);

export default PolaroidVertical;