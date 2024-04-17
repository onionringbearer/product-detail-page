import { useState } from "react";
import { useEffect } from "react";
import { getProducts } from "./../api";

const useGetProducts = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return products;
};

export default useGetProducts;
