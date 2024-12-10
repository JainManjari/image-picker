import React, { useState } from "react";
import "./ImageMagnifier.css";

export interface IImageMagnifierProps {
  imageURL: string;
}

const ImageMagnifier: React.FC<IImageMagnifierProps> = ({ imageURL }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [showMagnifier, setShowMagnifier] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleMouseHover = (e: any) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();

    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    setPosition({ x, y });
    setCursorPosition({ x: e.pageX - left, y: e.pageY - top });
  };

  return (
    <div
      className="image-magnifier-container"
      onMouseEnter={() => setShowMagnifier(true)}
      onMouseLeave={() => setShowMagnifier(false)}
      onMouseMove={handleMouseHover}
    >
      <img className="magnifier-img" src={imageURL} alt="working image" />
      {showMagnifier && (
        <div
          style={{
            position: "absolute",
            left: `${cursorPosition.x}px`,
            top: `${cursorPosition.y}px`,
            pointerEvents: "none",
            transform: "scale(2)",
          }}
        >
          <div
            className="magnified-image"
            style={{
              backgroundImage: `url(${imageURL})`,
              backgroundPosition: `${position.x}% ${position.y}% `,
              zoom: 1,
            }}
          ></div>
        </div>
      )}
    </div>
  );
};

export default ImageMagnifier;
