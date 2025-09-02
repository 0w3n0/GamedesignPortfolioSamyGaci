import React, { useRef, useState } from "react";
import { gsap } from "gsap";
import "./ExpandingBox.css";

interface CubeData {
  id: number;
  label: string;
  top: number;
  left: number;
}

const Cube: React.FC = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  // Positions fixes pour chaque cube
  const cubes: CubeData[] = [
    { id: 0, label: "Cube 1", top: 100, left: 100 },
    { id: 1, label: "Cube 2", top: 100, left: 400 },
    { id: 2, label: "Cube 3", top: 300, left: 150 },
    { id: 3, label: "Cube 4", top: 300, left: 400 },
    { id: 4, label: "Cube 5", top: 500, left: 250 },
  ];

  const cubeRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleClick = (cube: CubeData) => {
    const cubeEl = cubeRefs.current[cube.id];
    if (!cubeEl) return;

    const targetWidth = window.innerWidth * 0.8;
    const targetHeight = window.innerHeight * 0.7;

    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    const newLeft = centerX - targetWidth / 2;
    const newTop = centerY - targetHeight / 2;

    gsap.to(cubeEl, {
      width: targetWidth,
      height: targetHeight,
      left: newLeft,
      top: newTop,
      borderRadius: 0,
      duration: 0.6,
      ease: "power2.inOut",
      onStart: () => setExpandedId(cube.id),
    });
  };

  const handleClose = (cube: CubeData) => {
    const cubeEl = cubeRefs.current[cube.id];
    if (!cubeEl) return;

    gsap.to(cubeEl, {
      width: 150,
      height: 150,
      left: cube.left,
      top: cube.top,
      borderRadius: 12,
      duration: 0.6,
      ease: "power2.inOut",
      onComplete: () => setExpandedId(null),
    });
  };

  return (
    <div>
      {cubes.map((cube, i) => (
        <div
          key={cube.id}
          ref={el => void (cubeRefs.current[i] = el)}
          className="cube"
          style={{ top: cube.top, left: cube.left }}
          onClick={() => expandedId === null && handleClick(cube)}
        >
          {expandedId === cube.id && (
            <button className="close-btn" onClick={() => handleClose(cube)}>
              Fermer
            </button>
          )}
          <span>{cube.label}</span>
        </div>
      ))}
    </div>
    
  );
};

export default Cube;
