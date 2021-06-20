import React from "react";
import "../../styles/homecard.styles.css";

const Homecard = ({ id, title, imageUrl, size }) => {
  return (
    <div className={`${size} outer`}>
      <div
        className="bgImage"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className="inner">
        <h1 className="title">{title}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default Homecard;
