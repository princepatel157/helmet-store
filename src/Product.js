import React from "react";
import "./Product.css";

const Poduct = (props) => {
  return (
    <>
      {/* <div className="product">
        <div className="product_img">
          <img src={props.image} alt="" />
        </div>
        <div className="product_info">{props.name}</div>
        <div className="product_price">{props.price}</div>
      </div> */}

      <div className="col-lg-2 product">
        <div className="product_img">
          <img src={props.image} alt="" />
        </div>
        <div className="product_info">{props.name}</div>
        <div className="product_price">Rs. {props.price}</div>
        <button className="btn add_btn">Add to Basket</button>
      </div>
    </>
  );
};

export default Poduct;
