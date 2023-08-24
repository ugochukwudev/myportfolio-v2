import React, { useState } from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isBouncing, setIsBouncing] = useState(false);
  const [rotation, setRotation] = useState(0);
  const handleGestureStart = (e) => {
    // Handle touch or mouse down event to start tracking
  };

  const handleGestureMove = (e) => {
    // Handle touch or mouse move event to update position
  };

  const handleGestureEnd = () => {
    // Handle touch or mouse up event to end tracking and apply final position
  };
  return (
    <>
      <div className="lg:flex hidden flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
      <div className="lg:hidden flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology, i) => (
          <div
            className={`glass-cage ${
              i % 2 == 0 ? "bouncing" : " bouncing reverse"
            }  hover:scale-150`}
            style={{ transform: `rotate(${rotation}deg)` }}
            onMouseDown={handleGestureStart}
            onTouchStart={handleGestureStart}
          >
            <div className="glass">
              <img src={technology.icon} className="rounded-full" alt="Image" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Tech;
