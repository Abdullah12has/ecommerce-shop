import React from "react";
import "../../styles/homecard.styles.css";
import { Link } from "react-router-dom";

// component is functional 

const Homecard = ({ id, title, imageUrl, size }) => {
  const lnk = `/shop/${title.toLowerCase()}` ;
  return (
    <div className={`${size} outerh`}>
      <div
        className="bgImage"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />

      <Link
        style={{ textDecoration: "none" }}
        className="inner"
        to={lnk}
      >
        <h1 className="title">{title.toUpperCase()}</h1>

        <span className="subtitle">SHOP NOW</span>
      </Link>
    </div>
  );
};

export default Homecard;
