import React from "react";
import scotchImg from "../../assets/images/png/Scotch.png";

const PolaroidStandard: React.FC<{ photo: string; style?: React.CSSProperties; scotch?: boolean }> = ({ photo, style, scotch }) => (
    <div
        className="polaroid"
        style={{
            backgroundColor: "white",
            padding: "0px clamp(6px, 1vw,2vw) clamp(12px, 2vw, 2vw) clamp(6px, 1vw, 2vw)",
            border: "1px solid #ccc",
            boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
            width: "clamp(100px, 18vw, 20vw)",
            height: "clamp(100px, 18vw, 20vw)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            ...style,
        }}
    >
        {scotch && (
            <img
                src={scotchImg}
                alt="scotch"
                style={{
                    position: "absolute",
                    top: "calc(-1 * clamp(20px, 7vh, 10vh))",
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
                width: "100%",
                height: "clamp(80px, 14vw, 16vw)",
                backgroundColor: photo ? "transparent" : "black",
                display: "block",
            }}
        >
            <img
                src={photo}
                alt="polaroid"
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

export default PolaroidStandard;