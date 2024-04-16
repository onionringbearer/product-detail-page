import defaultStyles from "./styles.module.css";

const IconButton = ({ styles = {}, className, onClick, children }) => {
  return (
    <button
      className={`${defaultStyles.iconButton} ${className}`}
      style={styles}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default IconButton;
