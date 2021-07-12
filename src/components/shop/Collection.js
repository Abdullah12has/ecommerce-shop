import React, { Component } from "react";
import "../../styles/collection.shop.css";
import CollectionItem from "./CollectionItem";
const Collection = ({ title, items }) => (
  <div className="collection">
    <h1 className="titlee">{title} </h1>
    <div className="items">
      {items
        .filter((item, i) => i < 4) //this is a functional way 
        .map((item) => (
        <CollectionItem key={item.id} item={item} />  
        ))}
    </div>
  </div>
);

export default Collection;
