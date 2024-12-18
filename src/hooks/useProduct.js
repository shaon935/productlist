import { useEffect, useState } from "react";

const useProduct = () => {
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState({
    state: false,
    message: "",
  });
  const [error, setError] = useState({ state: false, message: "" });

  const fetchProductData = async () => {
    try {
      setLoading({
        ...loading,
        state: true,
        message: "Fetching product data...",
      });

      const response = await fetch(`https://fakestoreapi.com/products`);

      if (!response.ok) {
        const errorMessage = `Fetching product data failed: ${response.status}`;
        throw new Error(errorMessage);
      }

      const data = await response.json();

      const updateProductData = data.map(({ rating, ...rest }) => rest);
      setProductData(updateProductData);
    } catch (err) {
      const errorMessage = err.message || "An unexpected error occurred.";
      setError({
        state: true,
        message: errorMessage,
      });
    } finally {
      setLoading({
        ...loading,
        state: false,
        message: "",
      });
    }
  };

  useEffect(() => {
    setLoading({
      ...loading,
      state: true,
      message: "Getting products...",
    });
    fetchProductData();
  }, []);

  return {
    loading,
    error,
    productData,
  };
};

export default useProduct;
