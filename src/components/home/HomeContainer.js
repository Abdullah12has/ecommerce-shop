import React, { Component } from "react";
import homePageData from "../../assets/home_page";
import Homecard from "./Homecard";
import "../../styles/homeContainer.styles.css";
export default class HomeContainer extends Component {
  render() {
    return (
      <div className={"homeContainer"}>
        {homePageData.map(({ title, imageUrl, id, size }) => (
          <Homecard key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    );
  }
}
