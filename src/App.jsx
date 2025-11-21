import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./Component/Cart.jsx";
import Home from "./Component/Home.jsx";
import { CartContext } from "./Component/Cart.jsx";

const App = () => {
  const [itemsList, setItemsList] = React.useState([]);

  const addToCart = (product) => {
    setItemsList((prevItems) => {
      const exists = prevItems.find((item) => item.id === product.id);
      if (exists) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setItemsList((prevItems) => prevItems.filter((i) => i.id !== id));
  };

  const increaseQuantity = (id) => {
    setItemsList((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setItemsList((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const calculateTotal = () =>
    itemsList
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);

  return (
    <CartContext.Provider
      value={{
        itemsList,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        calculateTotal,
      }}
    >
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </CartContext.Provider>
  );
};

export default App;
