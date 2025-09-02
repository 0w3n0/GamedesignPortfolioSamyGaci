import React from "react";
import "../styles/tabs.scss";

interface TabsProps {
  dossiers: { title: string }[];
  activeIndex: number;
  onTabClick: (index: number) => void;
}

const Tabs: React.FC<TabsProps> = ({ dossiers, activeIndex, onTabClick }) => {
  return (
    <div className="tabs">
      {dossiers.map((dossier, index) => (
        <button
          key={index}
          className={`tab ${index === activeIndex ? "active" : ""}`}
          onClick={() => onTabClick(index)}
        >
          {dossier.title}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
