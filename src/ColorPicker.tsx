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
      Color Picker
      <div className={styles.leftColumn}></div>
      <div className={styles.rightColumn}></div>
    </div>
  );
};

export default ColorPicker;
