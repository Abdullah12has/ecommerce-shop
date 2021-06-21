import React, { Component } from "react";
import Collection from "./Collection";
import "../../styles/collectionItem.shop.css";

const CollectionItem = ({ name, imageUrl, price }) => (
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
  </div>
);
export default CollectionItem;
