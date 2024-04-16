import IconButton from "../../components/icon-button/icon-button";
import styles from "./styles.module.css";

const Navbar = ({ navIcon, title, children }) => {
  return (
    <nav className={styles.navbar}>
      <IconButton className={styles.navIcon}>{navIcon}</IconButton>
      <h2 className={styles.pageTitle}>{title}</h2>
      {children}
    </nav>
  );
};

export default Navbar;
