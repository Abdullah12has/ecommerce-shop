import React from "react";
import Button from "@material-ui/core/Button";
import "../styles/cartOpen.css";
import CartItem from "./Item.cart";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { toggleCart } from "../redux/cartAction";

const CartOpen = ({ cartItems, dispatch }) => {
  return (
    <div className="cartOpen">
      <div className="cartItems">
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} item={item} />)
        ) : (
          <span>Your cart is empty</span>
        )}
      </div>
      <Link className="btn3" to="/checkout">
        <Button
          className="btn3"
          variant="contained"
          color="secondary"
          onClick={() => {dispatch(toggleCart())}} 
        >
          GO TO CHECKOUT
        </Button>
      </Link>
    </div>
  );
};

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
});

export default connect(mapStateToProps)(CartOpen);
