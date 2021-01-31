import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";
import { Link } from "react-router-dom";

const Product = (props) => {
  const [{ basket }, dispatch] = useStateValue();

  // const addToBasket = () => {
  //   //dispatch the item into the data layer
  //   dispatch({
  //     type: "ADD_TO_BASKET",
  //     item: {
  //       id: props.id,
  //       price: props.price,
  //       name: props.name,
  //       size: props.size,
  //       colors: props.colors,
  //       image: props.image,
  //     },
  //   });
  // };
  return (
    <>
      <div className="col-lg-4 col-sm-6 col-xs-12 product">
        <Link to={"/productdetail/" + props.id}>
          <div className="product_img">
            <img src={props.image[0]} alt="" />
          </div>
          <div className="product_info">{props.name}</div>
          <div className="product_price">Rs. {props.price}</div>
          {/* <button className="btn add_btn" onClick={addToBasket}>
          Add To Basket
        </button> */}
        </Link>
      </div>
    </>
  );
};
export default Product;
