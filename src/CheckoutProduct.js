import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct(props) {
  const [{ basket }, dispatch] = useStateValue();

  // remove item from basket
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: props.id,
    });
  };

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct_image" src={props.image[0]} />
      <div className="checkoutProduct_info">
        <p className="checkoutProduct_title">{props.name}</p>
        <p className="checkoutProduct_color">Color: {props.colors}</p>
        <p className="checkoutProduct_size">Size: {props.size}</p>
        <p className="checkoutProduct_price">
          <small>Rs. </small>
          <strong>{props.price}</strong>
        </p>
        <button onClick={removeFromBasket} className="checkoutProduct_button">
          Remove from Busket
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
