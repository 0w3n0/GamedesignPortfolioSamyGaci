import React from "react";
import scotchImg from "../../assets/images/png/Scotch.png";

const PolaroidVertical: React.FC<{ photo: string; style?: React.CSSProperties; scotch?: boolean }> = ({ photo, style, scotch }) => (
    <div
        className="polaroid"
        style={{
            backgroundColor: "white",
            padding: "8px",
            border: "1px solid #ccc",
            boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
            width: "clamp(80px, 100px, 130px)",
            height: "clamp(140px, 180px, 240px)",
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
                    top: "-28px",
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
                alt="polaroid vertical"
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

export default PolaroidVertical;