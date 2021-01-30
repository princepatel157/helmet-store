import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "./StateProvider";

function Navbar() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <nav className="navbar">
      {/* logo*/}
      <Link to="/">
        <img className="navbar_logo" src="./images/logo.jpg" alt="no img" />
      </Link>

      {/* navlinks */}
      <div className="navbar_nav">
        <Link to="/helmets" className="navbar_links">
          <div className="navbar_option">Cricket Helmet</div>
        </Link>
        <Link to="/accessories" className="navbar_links">
          <div className="navbar_option">Accessories</div>
        </Link>
        <Link to="#" className="navbar_links">
          <div className="navbar_option">From Executive</div>
        </Link>
        <Link to="/aboutus" className="navbar_links">
          <div className="navbar_option">About Us</div>
        </Link>
      </div>

      {/* right links */}
      <div className="right_links">
        <Link to="/checkout" className="navbar_links">
          <div className="navbar_basket">
            <ShoppingBasketIcon />
            <span className="navbar_option_l2 basket_count">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
