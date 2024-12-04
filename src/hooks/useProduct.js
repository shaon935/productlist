import { useEffect, useState } from "react";

const useProduct = () => {
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState({
    state: false,
    message: "",
  });
  const [error, setError] = useState(null);

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
      setError(err);
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
    productData,
    error,
    loading,
  };
};

export default useProduct;
