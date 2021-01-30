import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <nav className="header">
      {/* search bar */}
      <div className="header_search">
        <input type="text" className="header_searchbar" />
        <SearchIcon className="header_searchicon" />
      </div>

      {/* user registration */}
      <div className="header_nav">
        <Link to={!user && "/login"} className="header_links">
          <div onClick={handleAuthenticaton} className="header_option">
            <span>{user ? "Sign Out" : "Sign In"}</span>
          </div>
        </Link>
      </div>
      <div className="header_nav">
        <Link to={!user && "/login"} className="header_links">
          <div className="header_option">
            <span>{!user ? "Register" : user.email}</span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
