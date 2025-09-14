import React, { useRef, useEffect } from "react";
import DossierMini from "./DossierMini";
import Draggable from "react-draggable";
import { gsap } from "gsap";
import "../styles/projets.scss";

const Projets: React.FC = () => {
  const photoRef = useRef<HTMLImageElement>(null);
  const arrowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Effet flèche en va-et-vient
    if (arrowRef.current) {
      gsap.to(arrowRef.current, {
        y: 10,
        repeat: -1,
        yoyo: true,
        duration: 0.6,
        ease: "power1.inOut",
      });
    }
  }, []);

  const handleMouseEnter = () => {
    if (photoRef.current) {
      gsap.to(photoRef.current, { rotate: 45, duration: 0.5, ease: "power2.out" });
    }
  };

  const handleMouseLeave = () => {
    if (photoRef.current) {
      gsap.to(photoRef.current, { rotate: 0, duration: 0.5, ease: "power2.out" });
    }
  };

  return (
    <div className="dossier-row">
      {/* Ta carte personnalisée draggable */}
      <Draggable>
        <div
          className="presentation-card"
          style={{
            background: "#3498db",
            color: "white",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "20px",
            borderRadius: "15px",
            width: "350px",
            cursor: "grab",
            userSelect: "none",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", width: "100%" }}>
            <img
              ref={photoRef}
              src="ton_image.jpg"
              alt="portrait"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              style={{
                width: "100px",
                height: "100px",
                borderRadius: "50%",
                objectFit: "cover",
                marginRight: "20px",
              }}
            />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <h2 style={{ margin: 0 }}>Ton Nom</h2>
              <h2 style={{ margin: 0 }}>Ton Prénom</h2>
              <p style={{ margin: 0, fontStyle: "italic" }}>Narrative Designer</p>
            </div>
          </div>

          <div
            ref={arrowRef}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginTop: "20px",
              fontWeight: "bold",
            }}
          >
            <span>Cliquez sur les projets !</span>
            <span style={{ fontSize: "24px" }}>⬇️</span>
          </div>
        </div>
      </Draggable>

      {/* Ton ancienne boucle pour les DossierMini */}
      {Array.from({ length: 5 }).map((_, i) => (
        <Draggable key={i}>
          <div>
            {/* <DossierMini /> */}
          </div>
        </Draggable>
      ))}
    </div>
  );
};

export default Projets;
