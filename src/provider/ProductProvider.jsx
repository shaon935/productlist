import { ProductContext } from "../context";
import { useProduct } from "../hooks";
const ProductProvider = ({ children }) => {
  const { productData, categories, error, loading } = useProduct();
  return (
    <ProductContext.Provider
      value={{ productData, categories, error, loading }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
