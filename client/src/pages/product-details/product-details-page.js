import { useState, useEffect } from "react";
import styles from "./styles.module.css";
import Navbar from "../../components/navbar/navbar";
import IconButton from "../../components/icon-button/icon-button";
import { ReactComponent as BackIcon } from "../../assets/icons/back.svg";
import { ReactComponent as EllipsisIcon } from "../../assets/icons/ellipsis.svg";
import { ReactComponent as ShoppingCart } from "../../assets/icons/shopping-bag.svg";
import ProductDetails from "../../features/product-details/product-details";
import { useParams } from "react-router-dom";
import useGetProductById from "../../hooks/useGetProductById";

const ProductDetailsPage = () => {
  const [selectedSku, setSelectedSku] = useState(null);
  const { productId } = useParams();
  const product = useGetProductById(productId);

  const handleSkuChanged = (newSku) => {
    setSelectedSku(newSku);
  };

  return (
    <div className={styles.main}>
      <Navbar navIcon={<BackIcon />} title="Detail">
        <IconButton className={styles.navIcon}>
          <EllipsisIcon />
        </IconButton>
      </Navbar>
      {product && (
        <ProductDetails
          product={product}
          onSkuChanged={handleSkuChanged}
        ></ProductDetails>
      )}
      <div className={styles.cartButtons}>
        <IconButton className={styles.shoppingBagButton}>
          <ShoppingCart />
        </IconButton>
        <button disabled={!selectedSku} className={styles.addButton}>
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
