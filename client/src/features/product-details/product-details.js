import React, { useMemo, useState } from "react";
import styles from "./styles.module.css";
import { ReactComponent as BackIcon } from "../../assets/icons/back.svg";
import { ReactComponent as EllipsisIcon } from "../../assets/icons/ellipsis.svg";
import { ReactComponent as ShoppingCart } from "../../assets/icons/shopping-bag.svg";
import IconButton from "../../components/icon-button/icon-button";
import ReadMore from "../../components/read-more/read-more";

const ProductDetails = ({ product, onSizeClick }) => {
  const [selectedSku, setSelectedSku] = useState(null);

  const imageUrl = useMemo(() => {
    return require(`../../assets/images/${product.image}`);
  }, [product.image]);

  const handleSizeClick = (sku) => {
    setSelectedSku(sku);
    onSizeClick?.(sku);
  };

  return (
    <div className={styles.main}>
      {/* Separate into navBar/header component */}
      <div className={styles.productHeader}>
        <IconButton className={styles.navIcon}>
          <BackIcon />
        </IconButton>
        <h2 className={styles.pageTitle}>Detail</h2>
        <IconButton className={styles.navIcon}>
          <EllipsisIcon />
        </IconButton>
      </div>
      <img src={imageUrl} alt={product.brand} className={styles.productImage} />
      <div className={styles.productDetails}>
        <div className={styles.sticker}>
          <h1 className={styles.productTitle}>{product.brand}</h1>
          {/* Price needs to be shown here based on the selected sku */}
          <h1 className={styles.productPrice}>$45.50</h1>
        </div>
        <div className={styles.productInfo}>
          {/* Stock needs to be shown based on the selected sku */}
          <span>Origin: {product.origin}</span>
          <span>|</span>
          <span>Stock: 15</span>
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
          {/* Refactor into toggleButtons component to be used here */}
          <div className={styles.skuButtons}>
            {product.skus.map((sku) => (
              <button
                key={sku.code}
                className={`${styles.sizeButton} ${
                  selectedSku === sku ? styles.sizeButtonActive : ""
                }`}
                onClick={() => handleSizeClick(sku)}
              >
                {sku.name}
              </button>
            ))}
          </div>
        </div>
        {/* Separate into inner cartButtons component (?) */}
        <div className={styles.cartButtons}>
          <IconButton className={styles.shoppingBagButton}>
            <ShoppingCart />
          </IconButton>
          <button className={styles.addButton}>Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
