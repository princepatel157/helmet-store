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
    <>
      {/* bootstrap navbar */}
      <nav class="navbar navbar-inverse header">
        <div class="container">
          <div class="navbar-header">
            <button
              type="button"
              class="navbar-toggle"
              data-toggle="collapse"
              data-target="#headerlinks"
            >
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
          </div>

          <div class="collapse navbar-collapse" id="headerlinks">
            <ul class="nav navbar-nav navbar-right">
              <li>
                <Link to={!user && "/login"} classNameName="header_links">
                  <div
                    onClick={handleAuthenticaton}
                    classNameName="header_option"
                  >
                    <span>{user ? "Sign Out" : "Sign In"}</span>
                  </div>
                </Link>
              </li>
              <li>
                <Link to={!user && "/login"} classNameName="header_links">
                  <div classNameName="header_option">
                    <span>{!user ? "Register" : user.email}</span>
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

export default Header;
