import React, { useContext } from "react";
import "./Cart.css";
import { CartContext } from "./Cart.jsx";
import DeleteIcon from "@mui/icons-material/Delete";

const Product = ({ id, name, price, quantity, image, onRemove }) => {
  const { increaseQuantity, decreaseQuantity } = useContext(CartContext);

  return (
    <div className="cart-container">
      <div className="cart-item">
        <div className="item-image">
          <img src={image} alt="Product" />
        </div>

        <div className="item-details">
          <h2 className="item-name">{name}</h2>
          <p className="item-price">${price}</p>
        </div>

        <div className="item-actions">
          <button className="decrease-btn" onClick={() => decreaseQuantity(id)}>
            -
          </button>

          <span className="item-quantity">{quantity}</span>

          <button className="increase-btn" onClick={() => increaseQuantity(id)}>
            +
          </button>
        </div>

        <div className="remove-item">
          <DeleteIcon onClick={onRemove} className="delete-icon" />
        </div>
      </div>
    </div>
  );
};

export default Product;
