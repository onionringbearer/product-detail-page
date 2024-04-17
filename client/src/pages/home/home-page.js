import styles from "./styles.module.css";
import { ReactComponent as MenuIcon } from "../../assets/icons/menu.svg";
import Navbar from "../../components/navbar/navbar";
import ProductPreview from "../../components/product-preview/product-preview";
import { useNavigate } from "react-router-dom";
import { routes } from "../../routes";
import useGetProducts from "../../api/hooks/useGetProducts";

const HomePage = () => {
  const navigate = useNavigate();
  const products = useGetProducts();

  const handleProductClick = (product) => {
    const fullId = `${product.id} ${product.brand}`
      .replace(/\s/g, "-")
      .toLowerCase();
    navigate(routes.productDetails.replace(":productId", fullId));
  };

  return (
    <div className={styles.main}>
      <Navbar navIcon={<MenuIcon />}>
        <img
          src={require("../../assets/icons/profile-pic.jpg")}
          alt="profile"
          className={styles.profilePic}
        />
      </Navbar>
      <header className={styles.header}>
        <p className={styles.greeting}>Hi, Mr. Michael,</p>
        <h1 className={styles.welcome}>Welcome Back</h1>
      </header>
      <section className={styles.popular}>
        <h2 className={styles.popularTitle}>Popular</h2>
        <div className={styles.products}>
          {products &&
            products.map((product) => (
              <ProductPreview
                key={product.id}
                item={product}
                onClick={() => handleProductClick(product)}
              />
            ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
