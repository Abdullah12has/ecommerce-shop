import React, { Component } from "react";
import "../../styles/item.checkout.css";
import { connect } from "react-redux";
import {
  DeleteFromCart,
  ReduceFromCart,
  addToCart,
} from "../../redux/cartAction";

// this compoentent is completely functional 

const CheckoutItem = ({ reduceItem, addItem, deleteItem, item }) => {
  const { imageUrl, name, price, quantity } = item;
  return (
    <div className="itemMain">
      <div className="itemImage">
        <img src={imageUrl} />
      </div>
      <span className="COname">{name} </span>
      <span className="COquantity">
        <div onClick={() => reduceItem(item)} className="cartinc">
          &#10094;
        </div>
        <span className="COquantityVal">{quantity}</span>
        <div onClick={() => addItem(item)} className="cartinc">
          &#10095;
        </div>
      </span>
      <span className="COprice">{price} </span>
      <span onClick={() => deleteItem(item)} className="COremove">
        &#10005;
      </span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  deleteItem: (item) => dispatch(DeleteFromCart(item)),
  addItem: (item) => dispatch(addToCart(item)),
  reduceItem: (item) => dispatch(ReduceFromCart(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
