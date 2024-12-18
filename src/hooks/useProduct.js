import { useContext, useEffect, useState } from "react";
import { FilterContext } from "../context";
const useProduct = () => {
  const [productData, setProductData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState({
    state: false,
    message: "",
  });
  const [error, setError] = useState({ state: false, message: "" });
  
  const { selectedCategory } = useContext(FilterContext);
  const baseUrl = "https://fakestoreapi.com/products";
  const fetchUrl = selectedCategory ? `${baseUrl}/category/${selectedCategory}` : baseUrl
  const fetchProductData = async () => {
    try {
      setLoading({
        ...loading,
        state: true,
        message: "Fetching product data...",
      });
      const response = await fetch(fetchUrl);
      const response2 = await fetch(`https://fakestoreapi.com/products/categories`);

      if (!response.ok || !response2.ok) {
        const errorMessage = `Fetching product data failed: ${response.status}`;
        throw new Error(errorMessage);
      }

      const data = await response.json();
      const data2 =await response2.json();

      const updateProductData = data.map(({ rating, ...rest }) => rest);
      setProductData(updateProductData);
      setCategories(data2);
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
  }, [selectedCategory]);

  return {
    loading,
    error,
    productData,
    categories,
  };
};

export default useProduct;
