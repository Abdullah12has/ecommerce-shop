import React from "react";
import shopData from "../assets/collections";
import CollectionItem from "../components/shop/CollectionItem";
import "../styles/collection.shop.css";
import "../styles/hats.collections.css";
const Hats = (props) => {

  return (
    <div className="shopCollection">
      {shopData
        .filter(
          (item) => item.routeName === /[^/]*$/.exec(props.location.pathname)[0]
        )
        .map(({ title, items }) => (
          <div key={title} className="collection">
            <h1 className="titlee">{title} </h1>

          
            <div className="hcollections">
              {items.map((item) => (
                <CollectionItem key={item.id} item={item} />
              ))}
            </div>
          </div>
        ))}
    </div>
  );
};

export default Hats;
