import CheckoutItem from "../components/checkout/Item.checkout";
import React from "react";
import "../styles/checkout.css";
import { connect } from "react-redux";

const Checkout = ({ cartItems }) => {  //state of checkout stays constent and it is made it a new object everytime there are changes
  let x = 0;
  cartItems.map((item) => (x += parseInt(item.price * item.quantity))); // functional programming being used there returning function 
  return (
    <div className="checkoutMain">
      <div className="coHeader">
        <span className="cspan">Product</span>
        <span className="cspan">Description</span>
        <span className="cspan">Quality</span>
        <span className="cspan">Price</span>
        <span className="cspan">Remove</span>
      </div>
      <div className="checkoutItemsInner">
        {cartItems.map((item) => (
          <CheckoutItem key={item.id} item={item} />
        ))}
      </div>
      <div className='totalCheckout'>Total: {x} €</div>
    </div>
  );
};

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
});

export default connect(mapStateToProps)(Checkout);
