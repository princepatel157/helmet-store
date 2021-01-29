import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./Header.js";
import Navbar from "./Navbar.js";
import Home from "./Home.js";
import Checkout from "./Checkout.js";
import Footer from "./Footer.js";
// import Checkout from "./Checkout.js";
// import "./App.css";

function App() {
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
            <Route path="/cart">
              <h1>cart</h1>
            </Route>
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}
export default App;
