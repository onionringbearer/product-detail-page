import { useState } from "react";
import styles from "./styles.module.css";
import Navbar from "../../components/navbar/navbar";
import IconButton from "../../components/icon-button/icon-button";
import { ReactComponent as BackIcon } from "../../assets/icons/back.svg";
import { ReactComponent as EllipsisIcon } from "../../assets/icons/ellipsis.svg";
import { ReactComponent as ShoppingCart } from "../../assets/icons/shopping-bag.svg";
import ProductDetails from "../../features/product-details/product-details";
import { useParams, useNavigate } from "react-router-dom";
import useGetProductById from "../../hooks/useGetProductById";
import { routes } from "../../routes";

const ProductDetailsPage = () => {
  const navigate = useNavigate();
  const [selectedSku, setSelectedSku] = useState(null);
  const { productId } = useParams();
  const product = useGetProductById(productId);

  const handleSkuChanged = (newSku) => {
    setSelectedSku(newSku);
  };

  const handleGoBack = () => {
    navigate(routes.home);
  };

  return (
    <div className={styles.main}>
      <Navbar
        navIcon={<BackIcon />}
        title="Detail"
        onNavIconClick={handleGoBack}
      >
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
