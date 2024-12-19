import { CartContext } from "../context";
import { useLocalStorage } from "../hooks";
const CartProvider = ({ children }) => {
  const [carts, setCarts] = useLocalStorage("carts", []);
  const addToCarts = (id) => {
    setCarts([...carts, { id }]);
  };
  const removeFromCarts = (id) => {
    const restCarts = carts.filter((pro) => pro.id !== id);
    setCarts(restCarts);
  };
  const itemCount = carts.length;
  return (
    <CartContext.Provider
      value={{ addToCarts, removeFromCarts, carts, itemCount }}
    >
      {children}
    </CartContext.Provider>
  );
};
export default CartProvider;
