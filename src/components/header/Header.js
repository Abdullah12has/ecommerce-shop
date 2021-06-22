import React from "react";
import "../../styles/header.css";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/algebra_crown.svg";
import { auth } from "../../firebase/firebase.setup";

const Header = ({user}) => (
  <div className="header">
    <Link to="/" className="hlogo">
      <Logo />
    </Link>

    <div className="hsideGroup">
      <Link className="htitle" to='/shop' >Algebra Shop</Link>
      {
        user ?
        <Link onClick={()=>auth.signOut()} className="htitle" to=''>Sign Out</Link>
        :
        <Link className="htitle" to='/signin'>Sign In</Link>

      }
      
      <div>Cart</div>
    </div>
  </div>
);

export default Header;
