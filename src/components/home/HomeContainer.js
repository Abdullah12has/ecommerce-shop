import React from "react";
import homePageData from "../../assets/home_page";
import Homecard from "./Homecard";
import "../../styles/homeContainer.styles.css";
// this component converted into functional component 
const HomeContainer = ()=>{

  return (
    <div className={"homeContainer"}>
      {homePageData.map(({ title, imageUrl, id, size }) => (
        <Homecard key={id} title={title} imageUrl={imageUrl} size={size} />
      ))}
    </div>
  )
} 

export default HomeContainer;