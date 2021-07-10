import React from "react";
import shopData from "../assets/collections";
import Collection from "../components/shop/Collection";
import "../styles/shop.shop.css";
//  converted this page from OOP to Functional by removing classes
const Shop = (props)=>{
  return (
    <div className="shop">

      {shopData.map( ({id, ...other }) => (
        <Collection key={id} {...other} />
      ))}
    </div>
  );

}
   
  
export default Shop;
