import React, { Component } from "react";
import "../../styles/collection.shop.css";

const Collection = ({ title, items }) => (
  <div className="collection">
    <h1 className="title">{title} </h1>
    <div className="items">
      {items
        .filter((item, i) => i < 4)
        .map((itm) => (
          <div key={itm.id}>{itm.name} </div>
        ))}
    </div>
  </div>
);

export default Collection;
