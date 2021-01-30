import React from "react";
import "./Home.css";
import Product from "./Product.js";
import { Acc } from "./ProductItems.js";

const CatProduct = () => {
  return (
    <>
      <div className="line">
        <hr />
      </div>
      {/* products -helmets*/}
      <div className="container product_cat_bar">
        <div className="row">
          <div className="col-xs-12 ">
            <div className="product_cat">HELMET COLLECTIONS</div>
          </div>
        </div>
      </div>
      <div className="container row1">
        <div className="row">
          {Acc.map((val) => {
            return (
              <Product name={val.name} image={val.image} price={val.price} />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CatProduct;
