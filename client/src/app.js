import "./global.css";
import "./app.css";
import ProductDetailsPage from "./pages/product-details/product-details-page";
import axios from "axios";

const getProducts = () => {
  axios.get("http://localhost:8080/api/products").then((data) => {
    return data;
  });
};

const getProductById = (id) => {
  axios.get(`http://localhost:8080/api/product/${id}`).then((data) => {
    return data;
  });
};

const getStockPriceByCode = (code) => {
  axios.get(`http://localhost:8080/api/stock-price/${code}`).then((data) => {
    return data;
  });
};

function App() {
  console.log(getProducts());
  console.log(getProductById(127));
  console.log(getStockPriceByCode(10167));
  return <ProductDetailsPage />;
}

export default App;
