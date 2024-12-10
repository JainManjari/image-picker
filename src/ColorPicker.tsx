import React, { useState } from "react";
import styles from "./ColorPicker.module.css";

export interface IColorPickerProps {}

const ColorPicker: React.FC<IColorPickerProps> = () => {
  const [color, setColor] = useState<string>("#5524e7");
  const [image, setImage] = useState<string | null>(null);

  const openEyeDropper = async () => {};

  const handleFileInput = (e: any) => {};

  const handleCopyColor = async () => {};

  return (
    <div className={styles.wrapper}>
      <div className={styles.leftColumn}>
        <h1 className={styles.headingText}>Pick color for image</h1>
        <div className={styles.formSection}>
          <p>1. Select an image</p>
          <input onChange={handleFileInput} type="file" accept="image/*" />
        </div>

        <div className={styles.formSection}>
          <p>2. Pick color </p>
          <button className={styles.openPickerButton} onClick={openEyeDropper}>
            Open Eyedropper
          </button>
        </div>
      </div>
      <div className={styles.rightColumn}></div>
    </div>
  );
};

export default ColorPicker;
