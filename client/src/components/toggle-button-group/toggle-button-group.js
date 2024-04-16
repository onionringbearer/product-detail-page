import { useState } from "react";
import styles from "./styles.module.css";

const ToggleButtonGroup = ({ options, onClick, className }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleSizeClick = (item) => {
    setSelectedItem(item);
    onClick?.(item);
  };
  return (
    <>
      {options.map((item) => (
        <button
          key={item.code}
          className={`${styles.toggleButton} ${className} ${
            selectedItem === item ? styles.toggleButtonActive : ""
          }`}
          onClick={() => handleSizeClick(item)}
        >
          {item.name}
        </button>
      ))}
    </>
  );
};

export default ToggleButtonGroup;
