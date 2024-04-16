import { useMemo } from "react";
import styles from "./styles.module.css";
import ReadMore from "../../components/read-more/read-more";
import ToggleButtonGroup from "../../components/toggle-button-group/toggle-button-group";

const ProductDetails = ({ product, inventory, onSkuChanged, children }) => {
  const imageUrl = useMemo(() => {
    return require(`../../assets/images/${product.image}`);
  }, [product.image]);

  const price = useMemo(() => {
    return inventory?.price ? (inventory.price / 100).toFixed(2) : "0.00";
  }, [inventory?.price]);

  const handleSizeClick = (newSku) => {
    onSkuChanged?.(newSku);
  };

  return (
    <>
      <img src={imageUrl} alt={product.brand} className={styles.productImage} />
      <div className={styles.productDetails}>
        <div className={styles.sticker}>
          <h1 className={styles.productTitle}>{product.brand}</h1>
          <h1 className={styles.productPrice}>$ {price}</h1>
        </div>
        <div className={styles.productInfo}>
          <span>Origin: {product.origin}</span>
          <span>|</span>
          <span>Stock: {inventory?.stock}</span>
        </div>
        <div className={styles.productDescription}>
          <h3 className={styles.descriptionTitle}>Description</h3>
          <ReadMore
            textClass={styles.descriptionText}
            buttonClass={styles.readMoreButton}
          >
            {product.information}
          </ReadMore>
        </div>
        <div className={styles.productSkus}>
          <h3 className={styles.skusTitle}>Size</h3>
          <div className={styles.skuButtons}>
            <ToggleButtonGroup
              options={product.skus}
              className={styles.sizeButton}
              onClick={handleSizeClick}
            ></ToggleButtonGroup>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default ProductDetails;
