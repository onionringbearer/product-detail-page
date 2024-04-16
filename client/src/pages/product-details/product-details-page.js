import { useState, useMemo } from "react";
import styles from "./styles.module.css";
import Navbar from "../../components/navbar/navbar";
import IconButton from "../../components/icon-button/icon-button";
import { ReactComponent as BackIcon } from "../../assets/icons/back.svg";
import { ReactComponent as EllipsisIcon } from "../../assets/icons/ellipsis.svg";
import { ReactComponent as ShoppingCart } from "../../assets/icons/shopping-bag.svg";
import ProductDetails from "../../features/product-details/product-details";
import products from "../../mocks/products";
import stockPrice from "../../mocks/stock-price";
import { useParams } from "react-router-dom";

const getProductById = (productId) => {
  const id = parseInt(productId.split("-")[0]);
  return products.find((product) => product.id === id);
};

const ProductDetailsPage = () => {
  const [selectedSku, setSelectedSku] = useState(null);
  const { productId } = useParams();
  const product = getProductById(productId);

  const inventory = useMemo(() => {
    return selectedSku ? stockPrice[selectedSku.code] : null;
  }, [selectedSku]);

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
      <ProductDetails
        product={product}
        inventory={inventory}
        onSkuChanged={handleSkuChanged}
      ></ProductDetails>
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
