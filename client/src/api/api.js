import axios from "axios";
export const getProducts = async () => {
  const res = await axios.get("http://localhost:8080/api/products");
  return res.data;
};

export const getProductById = async (id) => {
  const res = await axios.get(`http://localhost:8080/api/product/${id}`);
  return res.data;
};

export const getStockPriceByCode = async (code) => {
  const res = await axios.get(`http://localhost:8080/api/stock-price/${code}`);
  return res.data;
};
