import React from "react";
import "../../styles/header.css";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/algebra_crown.svg";
import { auth } from "../../firebase/firebase.setup";
import {connect} from 'react-redux';

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

const mapStateToProps = state => ({
user: state.user.usr
})
export default connect(mapStateToProps)(Header);
