import React from "react";
import "../../styles/header.css";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/algebra_crown.svg";
import { auth } from "../../firebase/firebase.setup";
import CartIcon from "../CartIcon";
import { connect } from "react-redux";
import CartOpen from "../CartOpen";

const Header = ({ cuser, hidden }) => (
  <div className="header">
    <Link to="/" className="hlogo">
      <Logo />
    </Link>

    <div className="hsideGroup">
      <Link className="htitle" to="/shop">
        Algebra Shop
      </Link>
      {cuser ? (
        <Link onClick={() => auth.signOut()} className="htitle" to="">
          Sign Out
        </Link>
      ) : (
        <Link className="htitle" to="/signin">
          Sign In
        </Link>
      )}

      <CartIcon />
    </div>
    { hidden ? null : <CartOpen />}
    
  </div>
);

const mapStateToProps = ({user:{cuser}, cart:{hidden}}) => ({
  cuser,
  hidden

});

export default connect(mapStateToProps)(Header);
