import React, { Component } from "react";
import "../styles/item.cart.css";

const CartItem = ({ item: { price, imageUrl, name, quantity } }) => (
  <div className="cartItem">
    <img src={imageUrl} alt="item" />
    <div className="details">
      <span className="name">{name}</span>
      <span className="name">
        {quantity} x ${price}
      </span>
    </div>
  </div>
);

export default CartItem;
