import React from "react";
import "../styles/cartIcon.css";
import { ReactComponent as Icon } from "../assets/shopping-bag.svg";
import { connect } from "react-redux";
import { toggleCart } from "../redux/cartAction";
const CartIcon = ({ toggleCart, count }) => (
  <div className="cartIcon" onClick={toggleCart}>
    <Icon className="shoppingIcon" />
    <span className="countItem">{count}</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCart: () => dispatch(toggleCart()),
});

const mapStateToProps = ({ cart: { cartItems } }) => ({
  count: cartItems.reduce((total, item) => total + item.quantity, 0)
});

export default connect( mapStateToProps, mapDispatchToProps)(CartIcon);
