import { getProductById } from "../api/api";
import { useState, useEffect } from "react";

const useGetProductById = (productId) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      if (productId) {
        const id = parseInt(productId.split("-")[0]);
        const data = await getProductById(id);
        setProduct(data);
      }
    };
    fetchProduct();
  }, [productId]);

  return product;
};

export default useGetProductById;
