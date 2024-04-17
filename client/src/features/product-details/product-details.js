import { useMemo, useState, useEffect } from "react";
import styles from "./styles.module.css";
import ReadMore from "../../components/read-more/read-more";
import ToggleButtonGroup from "../../components/toggle-button-group/toggle-button-group";
import { getStockPriceByCode } from "../../api/api";

const ProductDetails = ({ product, onSkuChanged, children }) => {
  const [inventory, setInventory] = useState(null);
  const [selectedSku, setSelectedSku] = useState(null);

  useEffect(() => {
    const fetchInventory = async () => {
      if (selectedSku) {
        const data = await getStockPriceByCode(selectedSku.code);
        setInventory(data);
      }
    };
    const interval = setInterval(fetchInventory, 5000);
    fetchInventory();
    return () => {
      clearInterval(interval);
    };
  }, [selectedSku]);

  const imageUrl = useMemo(() => {
    return require(`../../assets/images/${product.image}`);
  }, [product.image]);

  const price = useMemo(() => {
    return inventory?.price ? (inventory.price / 100).toFixed(2) : "0.00";
  }, [inventory?.price]);

  const handleSizeClick = (newSku) => {
    setSelectedSku(newSku);
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
