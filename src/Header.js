import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";

function Header() {
  return (
    <nav className="header">
      {/* search bar */}
      <div className="header_search">
        <input type="text" className="header_searchbar" />
        <SearchIcon className="header_searchicon" />
      </div>

      {/* user registration */}
      <div className="header_nav">
        <Link to="/login" className="header_links">
          <div className="header_option">
            <span>Sign In</span>
          </div>
        </Link>
      </div>
      <div className="header_nav">
        <Link to="/" className="header_links">
          <div className="header_option">
            <span>Register</span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
