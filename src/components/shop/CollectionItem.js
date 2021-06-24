import React, { Component } from "react";
import { connect } from "react-redux";
import Collection from "./Collection";
import "../../styles/collectionItem.shop.css";
import { Button } from "@material-ui/core";
import { addToCart } from "../../redux/cartAction";

const CollectionItem = ({ item, addToCart }) => {
  const { name, imageUrl, price } = item;

  return (
    <div className="outerCI">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />

      <div className="footer">
        <div className="name"> {name}</div>
        <div className="price"> {price}€ </div>
      </div>
      <Button
        type="submit"
        className="btn4"
        variant="contained"
        color="secondary"
        onClick={() => addToCart(item)}
      >
        Add to Cart
      </Button>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  addToCart: (item) => dispatch(addToCart(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
