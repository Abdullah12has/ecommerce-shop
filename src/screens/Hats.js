import React from "react";
import shopData from "../assets/collections";
import CollectionItem from "../components/shop/CollectionItem";
import "../styles/shop.shop.css";
class Hats extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="shopCollection">
        {shopData
          .filter((item) => item.id === 1)

          .map(({ title, items }) => (
            <div className="collection">
              <h1 className="titlee">{title} </h1>
              <div className="items">
                {items.map((item) => (
                  <CollectionItem key={item.id} item={item} />
                ))}
              </div>
            </div>
          ))}
      </div>
    );
  }
}

export default Hats;
