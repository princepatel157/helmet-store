import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal.js";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <>
      <div className="line">
        <hr />
      </div>
      <div className="container checkout">
        <div className="row">
          <div className="col-lg-4 checkout_right">
            <Subtotal />
          </div>
          <div className="col-lg-6 checkout_left">
            <div className="checkout_heading">
              <h5 className="checkout_user">Hello, {user?.email}</h5>
              <h2 className="checkout_title">Your Shopping Basket</h2>
              <div className="checkout_items">
                {basket.map((item) => (
                  <CheckoutProduct
                    id={item.id}
                    name={item.name}
                    image={item.image}
                    price={item.price}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Checkout;
