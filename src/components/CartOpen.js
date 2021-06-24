import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import "../styles/cartOpen.css";
import CartItem from "./Item.cart";
import { connect } from "react-redux";
import cartReducer from "../redux/cartReducer";

const CartOpen = ({ cartItems }) => (
  <div className="cartOpen">
    <div className="cartItems">
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>

    <Button
      type="submit"
      className="btn3"
      variant="contained"
      color="secondary"
    >
      GO TO CHECKOUT
    </Button>
  </div>
);
// same problem
const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
});

export default connect(mapStateToProps)(CartOpen);
