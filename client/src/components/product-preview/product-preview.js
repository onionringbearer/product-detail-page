import { useMemo } from "react";
import styles from "./styles.module.css";
import IconButton from "../icon-button/icon-button";
import { ReactComponent as PlusIcon } from "../../assets/icons/plus.svg";

const ProductPreview = ({ item, onClick }) => {
  const imageUrl = useMemo(() => {
    return require(`../../assets/images/${item.image}`);
  }, [item.image]);

  return (
    <div className={styles.product}>
      <p className={styles.itemName}>{item.brand}</p>
      <img src={imageUrl} alt={item.name} className={styles.itemImage} />
      <IconButton className={styles.addButton} onClick={onClick}>
        <PlusIcon />
      </IconButton>
    </div>
  );
};

export default ProductPreview;
