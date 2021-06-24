import React from "react";
import "../styles/cartIcon.css";
import { ReactComponent as Icon } from "../assets/shopping-bag.svg";
import { connect } from "react-redux";
import { toggleCart } from "../redux/cartAction";

const CartIcon = ({ toggleCart }) => (
  <div className="cartIcon" onClick={toggleCart}>
    <Icon className="shoppingIcon" />
    <span className="countItem">0</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCart: () => dispatch(toggleCart())
});

export default connect(null, mapDispatchToProps)(CartIcon);
