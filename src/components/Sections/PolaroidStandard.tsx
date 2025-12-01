import React from "react";
import scotchImg from "../../assets/images/png/Scotch.png";

const PolaroidStandard: React.FC<{ photo: string; style?: React.CSSProperties; scotch?: boolean }> = ({ photo, style, scotch }) => (
    <div
        className="polaroid"
        style={{
            backgroundColor: "white",
            padding: "8px",
            border: "1px solid #ccc",
            boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
            width: "clamp(100px, 120px, 160px)", // fixed size, responsive
            height: "clamp(100px, 120px, 160px)", // square aspect ratio
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
                    top: "-30px",
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
                height: "100%",
                backgroundColor: photo ? "transparent" : "black",
                display: "block",
                borderRadius: "4px",
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
                    borderRadius: "4px"
                }}
            />
        </div>
    </div>
);

export default PolaroidStandard;