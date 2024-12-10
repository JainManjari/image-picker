import React, { useState } from "react";
import "./ImageMagnifier.css";

export interface IImageMagnifierProps {
  imageURL: string;
}

const ImageMagnifier: React.FC<IImageMagnifierProps> = ({ imageURL }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [showMagnifier, setShowMagnifier] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  return (
    <div className="image-magnifier-container">
      <img className="magnifier-img" src={imageURL} alt="working image" />
      <div>
        <div
          className="magnified-image"
          style={{
            backgroundImage: `url(${imageURL})`,
            backgroundPosition: `${position.x}% ${position.y}% `,
          }}
        ></div>
      </div>
    </div>
  );
};

export default ImageMagnifier;
