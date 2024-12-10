import React, { useState, useRef, useEffect } from "react";

export interface IColorPickerGeminiProps {
  imageUrl: string;
}

const ColorPickerGemini: React.FC<IColorPickerGeminiProps> = ({ imageUrl }) => {
  const [isMagnified, setIsMagnified] = useState(false);
  const [magnifiedImageSrc, setMagnifiedImageSrc] = useState<
    string | undefined
  >(undefined);
  const [pickedColor, setPickedColor] = useState("#000000");
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const image = imageRef.current;
    if (image) {
      image.addEventListener("mouseover", () => {
        setIsMagnified(true);
        // Create a magnified image using canvas
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d")!;
        canvas.width = image.width * 2;
        canvas.height = image.height * 2;
        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
        setMagnifiedImageSrc(canvas.toDataURL());
      });

      image.addEventListener("mouseout", () => {
        setIsMagnified(false);
        setMagnifiedImageSrc(undefined);
      });
    }
  }, [imageRef]);

  const handleMagnifiedImageHover = (e: any) => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d")!;
    const image = new Image();
    image.src = magnifiedImageSrc!;
    image.onload = () => {
      canvas.width = image.width;
      canvas.height = image.height;
      ctx.drawImage(image, 0, 0);

      const x = e.offsetX;
      const y = e.offsetY;
      const pixelData = ctx.getImageData(x, y, 1, 1).data;
      const rgbColor = `rgb(${pixelData[0]}, ${pixelData[1]}, ${pixelData[2]})`;
      setPickedColor(rgbColor);
    };
  };

  return (
    <div>
      <img
        ref={imageRef}
        src={imageUrl}
        onMouseOver={() => setIsMagnified(true)}
        onMouseOut={() => setIsMagnified(false)}
      />
      {isMagnified && (
        <div className="magnified-view" onMouseMove={handleMagnifiedImageHover}>
          <img src={magnifiedImageSrc} alt="Magnified Image" />
          <p>Picked Color: {pickedColor}</p>
        </div>
      )}
    </div>
  );
};

export default ColorPickerGemini;
