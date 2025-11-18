import React, { useState, createContext, Children } from "react";
import "./Cart.css";
import { items } from "./items.jsx";
import ContextCart from "./ContextCart.jsx";

export const CartContext = createContext();
  
const Cart = () => {
  // all operations will update this state
  const [itemsList, setItemsList] = useState(
    items.map((item) => ({ ...item, quantity: item.quantity || 1 }))
  );

  const removeFromCart = (itemId) => {
    setItemsList((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const increaseQuantity = (itemId) => {
    setItemsList((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (itemId) => {
    setItemsList((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const calculateTotal = () => {
    const total = itemsList.reduce((acc, item) => {
      return acc + item.price * (item.quantity || 1);
    }, 0);
    return total.toFixed(2);
  };

  
  return (
    <CartContext.Provider
      value={{
        itemsList,
        removeFromCart,
        calculateTotal,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      <ContextCart />
    </CartContext.Provider>
  );
};

export default Cart;
