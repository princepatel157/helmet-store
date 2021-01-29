import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal.js";

function Checkout() {
  return (
    <>
      <div className="line">
        <hr />
      </div>
      <div className="container checkout">
        <div className="row">
          <div className="col-lg-6 checkout_left">
            <div className="checkout_heading">
              <h2 className="checkout_title">Your Shopping Basket</h2>
            </div>
          </div>
          <div className="col-lg-4 col-lg-offset-2 checkout_right">
            <Subtotal />
          </div>
        </div>
      </div>
    </>
  );
}

export default Checkout;
