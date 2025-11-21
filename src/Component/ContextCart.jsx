import React, { useContext } from "react";
import "./Cart.css";
import Product from "./product.jsx";
import { CartContext } from "./Cart.jsx";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const ContextCart = () => {
  const { itemsList, removeFromCart, calculateTotal } = useContext(CartContext);
  const [searchTerm, setSearchTerm] = React.useState("");
  const filteredItems = itemsList.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <>
      <header>
        <h1>Shopping Cart</h1>
        <Link to="/" className="home-btn">
          Home
        </Link>
      </header>
      <section>
        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          placeholder="Search Your Product"
        />
        <div className="cart-item-container">
          {filteredItems.length > 0 ? (
            filteredItems.map((currItem) => (
              <Product
                key={currItem.id}
                {...currItem}
                onRemove={() => removeFromCart(currItem.id)}
              />
            ))
          ) : (
            <p className="no-result">No products found</p>
          )}
        </div>
        <div className="card-total">
          <h2>Total: ${calculateTotal()}</h2>
        </div>
      </section>
    </>
  );
};
export default ContextCart;
