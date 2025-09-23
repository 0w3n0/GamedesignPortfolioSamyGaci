import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import NotesForm from "./NotesForm";

interface NotesProps {
    forceOpen?: boolean; // si true => toujours ouvert
}

const Notes: React.FC<NotesProps> = ({ forceOpen = false }) => {
    const [isOpen, setIsOpen] = useState(false);
    const noteRef = useRef<HTMLDivElement | null>(null);

    const opened = isOpen || forceOpen;

    const [message, setMessage] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const value = e.target.value;
        if (value.length <= 500) {
            setMessage(value);
        }
    };

    const handleClose = () => {
        if (!noteRef.current) return;

        // Animation de rétractation
        gsap.to(noteRef.current, {
            scale: 0.8,
            opacity: 0,
            y: 50,
            duration: 0.3,
            ease: "power2.in",
            onComplete: () => setIsOpen(false), // ne ferme qu'après animation
        });
    };

    const toggleOpen = () => {
        if (opened) {
            handleClose();
        } else {
            setIsOpen(true);
        }
    };

    useEffect(() => {
        if (!noteRef.current) return;

        if (opened) {
            gsap.fromTo(
                noteRef.current,
                { scale: 0.8, opacity: 0, y: 50 },
                { scale: 1, opacity: 1, y: 0, duration: 0.4, ease: "back.out(1.7)" }
            );
        }
    }, [opened]);

    return (
        <div
            style={{
                position: "fixed",
                bottom: "20px",
                right: "20px",
                zIndex: 1000,
                display: "flex",
                flexDirection: "column-reverse", // bouton en bas, note au-dessus
                alignItems: "flex-end",
            }}
        >
            <button
                onClick={toggleOpen}
                disabled={opened && forceOpen}
                style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    background: "#ff6b6b",
                    color: "#fff",
                    border: "none",
                    cursor: opened && forceOpen ? "not-allowed" : "pointer",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
                    fontSize: "24px",
                    marginTop: "10px",
                    opacity: opened && forceOpen ? 0.5 : 1,
                    pointerEvents: opened && forceOpen ? "none" : "auto",
                }}
            >
                📒
            </button>
            {opened && (
                <div
                    ref={noteRef}
                    style={{
                        width: "17vw",
                        background: "#fff8e1",
                        border: "2px solid #ccc",
                        borderRadius: "10px",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                        padding: "15px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        position: "relative",
                        marginBottom: "10px",
                    }}
                >
                    <h3 style={{ margin: 0, color: "black", textAlign: "center" }}>Me contacter</h3>
                    <hr style={{ border: "solid", height: "2px", width: "60%", backgroundColor: "black", zIndex: 1 }} />
                    <NotesForm />

                    {!forceOpen && (
                        <button
                            onClick={handleClose}
                            style={{
                                position: "absolute",
                                top: "5px",
                                right: "5px",
                                border: "none",
                                background: "transparent",
                                cursor: "pointer",
                                fontSize: "18px",
                            }}
                        >
                            ✖
                        </button>
                    )}
                </div>
            )}
        </div>
    );
};

export default Notes;
