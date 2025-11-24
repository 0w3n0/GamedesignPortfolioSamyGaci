import React from "react";
import scotchImg from "../../assets/images/png/Scotch.png";
const PolaroidHorizontal: React.FC<{ photo: string; style?: React.CSSProperties; scotch?: boolean }> = ({ photo, style, scotch }) => (
    <div
        className="polaroid"
        style={{
            position: "relative",
            backgroundColor: "white",
            padding: "0px 0px clamp(6px, 1vw, 2vw) 0px",
            border: "1px solid #ccc",
            boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
            width: "clamp(140px, 26vw, 30vw)",
            height: "clamp(80px, 30vw, 15vw)",
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
                    top: "calc(-1 * clamp(20px, 10vh, 12vh))",
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
                width: "clamp(120px, 24vw, 30vw)",
                height: "clamp(60px, 12vw, 15vw)",
                backgroundColor: photo ? "transparent" : "black",
                display: "block",
            }}
        >
            <img
                src={photo}
                alt="polaroid horizontal"
                style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    display: "block",
                }}
            />
        </div>
    </div>
);

export default PolaroidHorizontal;