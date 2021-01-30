import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./Header.js";
import Navbar from "./Navbar.js";
import Home from "./Home.js";
import Checkout from "./Checkout.js";
import Footer from "./Footer.js";
import Login from "./Login.js";
import AboutUs from "./AboutUs";
import "./App.css";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <>
      <BrowserRouter>
        <div className="app">
          <Header />
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/checkout">
              <Checkout />
            </Route>
            <Route path="/aboutus">
              <AboutUs />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}
export default App;
