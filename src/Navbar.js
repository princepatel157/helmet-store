import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "./StateProvider";

function Navbar() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <>
      {/* bootstrap navbar */}
      <nav class="navbar  navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid pr-4">
          <div class="navbar-header">
            <button
              type="button"
              class="navbar-toggle hamburger"
              data-toggle="collapse"
              data-target="#navlinks"
            >
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <Link to="/" class="navbar-band">
              <img
                className="navbar_logo"
                src="./images/logo.jpg"
                alt="no img"
              />
            </Link>
          </div>

          <div class="collapse navbar-collapse" id="navlinks">
            <ul class="nav navbar-nav navbar-right">
              <li>
                <Link to="/helmets" className="navbar_links">
                  <div className="navbar_option">Cricket Helmet</div>
                </Link>
              </li>
              <li>
                <Link to="/accessories" className="navbar_links">
                  <div className="navbar_option">Accessories</div>
                </Link>
              </li>
              <li>
                <Link to="#" className="navbar_links">
                  <div className="navbar_option">From Executive</div>
                </Link>
              </li>
              <li>
                <Link to="/aboutus" className="navbar_links">
                  <div className="navbar_option">About Us</div>
                </Link>
              </li>
              <li className="navbar-right my-5 ">
                <Link to="/checkout" className="navbar_links ">
                  <div className="navbar_basket ">
                    <ShoppingBasketIcon />
                    <span className="navbar_option_l2 basket_count">
                      {basket?.length}
                    </span>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
