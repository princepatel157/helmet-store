import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

const Product = (props) => {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    //dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: props.id,
        price: props.price,
        name: props.name,
        image: props.image,
      },
    });
  };
  return (
    <>
      <div className="col-lg-2 product">
        <div className="product_img">
          <img src={props.image} alt="" />
        </div>
        <div className="product_info">{props.name}</div>
        <div className="product_price">Rs. {props.price}</div>
        <button className="btn add_btn" onClick={addToBasket}>
          Add to Basket
        </button>
      </div>
    </>
  );
};
export default Product;
