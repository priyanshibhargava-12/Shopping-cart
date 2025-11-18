import React, { useContext } from "react";
import "./Cart.css";
import Product from "./product.jsx";
import { CartContext } from "./Cart.jsx";
// import SearchIcon from "@mui/icons-material/Search";

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
        <div className="Search">
          <input
            type="text"
            placeholder="Search Your Product"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {/* <SearchIcon className="search-icon" />
          <input
            type="text"
            placeholder="Search Your Product"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          /> */}
        </div>
      </header>
      <section>
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
