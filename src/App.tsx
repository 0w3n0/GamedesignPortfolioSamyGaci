import React, { useState, useRef, useEffect } from "react";
import "./App.scss";
import Tabs from "./components/Tabs";
import Home from "./components/Home";
import Cube from "./components/ExpandingBox";
import Section1 from "./components/Sections/Section1";
import dossiers from "./data/dossiers.json";
import CustomCursor from "./components/CustomCursor";
import gsap from "gsap";
import "./styles/global.scss"; // ← Import global ici

function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const dossierRef = useRef<HTMLDivElement>(null);

  // Animation GSAP à chaque changement d'onglet
  useEffect(() => {
    if (dossierRef.current) {
      gsap.fromTo(
        dossierRef.current,
        { x: 200, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
      );
    }
  }, [activeIndex]);

  return (
    <div className="app">
      <CustomCursor />
      <Home />
      {/* <Tabs
        dossiers={dossiers}
        activeIndex={activeIndex}
        onTabClick={setActiveIndex}
      />

      <div className="dossier-container" ref={dossierRef}>
        <Dossier dossier={dossiers[activeIndex]} />
      </div> */}
    </div>
  );
}

export default App;
