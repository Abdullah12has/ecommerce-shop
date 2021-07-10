import React from "react";
import shopData from "../assets/collections";
import CollectionItem from "../components/shop/CollectionItem";
import "../styles/collection.shop.css";
import "../styles/hats.collections.css";
//this whole function is a good example of functional programming 
const Hats = (props) => {  

  return (
    <div className="shopCollection">
      {shopData
        .filter( 
          (item) => item.routeName === /[^/]*$/.exec(props.location.pathname)[0] // shopData.filter is another example of functional programming
        )
        .map(({ title, items }) => (
          <div key={title} className="collection">
            <h1 className="titlee">{title} </h1>

          
            <div className="hcollections">
              {items.map((item) => (  //example of functional programming
                <CollectionItem key={item.id} item={item} />
              ))}
            </div>
          </div>
        ))}
    </div>
  );
};

export default Hats;
