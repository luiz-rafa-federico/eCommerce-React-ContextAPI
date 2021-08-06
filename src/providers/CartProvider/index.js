import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const getCart = JSON.parse(localStorage.getItem("cart")) || [];

  const [cart, setCart] = useState(getCart);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item, id) => {
    const itemOnCart = cart.find((itemOnCart) => itemOnCart.id === id);
    if (!cart.includes(itemOnCart)) {
      setCart([...cart, item]);
    } else {
      toast.error("ERRO! Produtos duplicados não podem ser incluídos.");
    }
  };

  const removeFromCart = (id) => {
    const newCart = cart.filter((itemOnCart) => itemOnCart.id !== id);
    setCart(newCart);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
