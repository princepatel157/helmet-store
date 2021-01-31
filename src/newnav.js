import React from "react";

const newnav = () => {
  return (
    <nav class="navbar extra">
      <div class="container">
        <div class="navbar-header">
          <button
            type="button"
            class="navbar-toggle"
            data-toggle="collapse"
            data-target="#navlinks"
          >
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
        </div>

        <div class="collapse navbar-collapse" id="navlinks">
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
          <form class="form-inline my-2 my-lg-0">
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default newnav;
