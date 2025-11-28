import React from "react";
import scotchImg from "../../assets/images/png/Scotch.png";

const PolaroidHorizontal: React.FC<{ photo: string; style?: React.CSSProperties; scotch?: boolean }> = ({ photo, style, scotch }) => (
    <div
        className="polaroid"
        style={{
            position: "relative",
            backgroundColor: "white",
            padding: "0px 0px clamp(6px, 8px, 12px) 0px",
            border: "1px solid #ccc",
            boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
            width: "clamp(120px, 100%, 280px)", // responsive sans vw, max 280px
            height: "clamp(70px, auto, 140px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            aspectRatio: "16 / 9", // keep aspect ratio
            ...style,
        }}
    >
        {scotch && (
            <img
                src={scotchImg}
                alt="scotch"
                style={{
                    position: "absolute",
                    top: "-35px",
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
                width: "95%",
                height: "95%",
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
                    objectFit: "cover",
                    display: "block",
                }}
            />
        </div>
    </div>
);

export default PolaroidHorizontal;