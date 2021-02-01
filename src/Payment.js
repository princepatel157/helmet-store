import React from "react";
import "./Payment.css";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";

const Payment = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="payment">
      <div className="payment_container">
        {/* payment delivery */}
        <div className="payment_section">
          <div className="payment_title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment_address">
            <p>{user?.email}</p>
          </div>
        </div>

        {/* review items */}
        <div className="payment_section">
          <div className="payment_title">
            <h3>Review items and Delivery</h3>
          </div>
          <div className="payment_items">
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                name={item.name}
                image={item.image}
                colors={item.colors}
                size={item.size}
                price={item.price}
              />
            ))}
          </div>
        </div>

        {/* payment method */}
        <div className="payment_section"></div>
      </div>
    </div>
  );
};

export default Payment;
