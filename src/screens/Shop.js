import React from "react";
import shopData from "../assets/collections";
import Collection from "../components/shop/Collection";
import "../styles/shop.shop.css";
class Shop extends React.Component {
  constructor(props) {
    super(props);

   
  }

  render() {
   
    return (
      <div className="shop">
        {shopData.map( ({id, ...other }) => (
          <Collection key={id} {...other} />
        ))}
      </div>
    );
  }
}

export default Shop;
