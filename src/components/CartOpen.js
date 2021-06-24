import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import "../styles/cartOpen.css";

const CartOpen = () => (
  <div className="cartOpen">
    <div className="cartItem" />

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

export default CartOpen;
