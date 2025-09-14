import React, { useEffect, useState } from "react";
import cursorImgNormal from "../assets/images/png/cursor.png";
import cursorImgPointer from "../assets/images/png/cursor-pointer.png";

const CustomCursor: React.FC = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isPointer, setIsPointer] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e: MouseEvent) => {
            if ((e.target as HTMLElement).closest(".clickable")) {
                setIsPointer(true);
            } else {
                setIsPointer(false);
            }
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseover", handleMouseOver);
        window.addEventListener("mouseover", handleMouseOver);
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, []);

    return (
        <div
            style={{
                position: "fixed",
                top: position.y,
                left: position.x,
                transform: isPointer ? "translate(-27px, 7px)  rotate(-45deg)" : "translate(-12px, 7px) rotate(-45deg)",
                pointerEvents: "none",
                zIndex: 9999,
                width: isPointer ? 40 : 32,       // exemple de taille
                height: isPointer ? 40 : 32,
            }}
        >
            <img src={isPointer ? cursorImgPointer : cursorImgNormal} alt="cursor" width={64} style={{
                transform: isPointer ? "rotate(405deg)" : "rotate(45deg)",
                transition: "transform 0.1s ease",
            }} />
        </div>
    );
};

export default CustomCursor;
