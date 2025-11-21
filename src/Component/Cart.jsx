import { createContext } from "react";
import "./Cart.css";
import ContextCart from "./ContextCart.jsx";

export const CartContext = createContext();

const Cart = () => {
  return <ContextCart />;
};

export default Cart;
