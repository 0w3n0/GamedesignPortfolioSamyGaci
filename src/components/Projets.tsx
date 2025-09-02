// MiniDossierRow.tsx
import React from "react";
import DossierMini from "./DossierMini";
import Draggable from "react-draggable";
import "../styles/projets.scss";

const Projets: React.FC = () => {
  return (
    <div className="dossier-row">
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