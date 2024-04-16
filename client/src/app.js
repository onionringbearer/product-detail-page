import "./global.css";
import "./app.css";
import ProductDetails from "./features/product-details/product-details";
import products from "./mocks/products";

function App() {
  return <ProductDetails product={products[0]} />;
}

export default App;
