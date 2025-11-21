import React, { useContext, useState } from "react";
import { items } from "./items.jsx";
import { CartContext } from "./Cart.jsx";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import "./Cart.css";



const Home = () => {
  const { addToCart } = useContext(CartContext);
  const [popupMessage, setPopupMessage] = useState("");
  const [searchTerm, setSearchTerm] = useState("");


  const handleAddToCart = (product) => {
    addToCart(product);
    setPopupMessage(`${product.name} added to cart!`);
    setTimeout(() => {
      setPopupMessage("");
    }, 2000);
  };

   
   const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <>
      <header>
        <h1>Product Store</h1>
        <div className="header-links">
         <Link to="/" className="home-btn"> Home </Link>
        <Link to="/cart" className="home-btn"> Cart</Link>
        </div>
       
      </header>

       <SearchBar
          searchTerm={searchTerm}e
          setSearchTerm={setSearchTerm}
          placeholder="Search Your Product"
        />

      
     {popupMessage && <div className="popup">{popupMessage}</div>}
      <div className="product-list">
           {filteredItems.length > 0 ? (
            filteredItems.map((product) => (
               <div key={product.id} className="home-product-card">
              <img src={product.image} alt={product.name} />
              <h2>{product.name}</h2>
              <p>${product.price}</p>

              <button onClick={() => handleAddToCart(product)}>
                Add to Cart
              </button>
            </div>
            ))
          ) : (
            <p className="no-result">No products found</p>
          )}
      </div>
    </>
  );
};

export default Home;
