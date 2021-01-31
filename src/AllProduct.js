import React from "react";
// import "./AllProduct.css";
import "./Home.css";
import Product from "./Product.js";
import Items from "./ProductItems.js";

function AllProduct() {
  return (
    <>
      <div className="line">
        <hr />
      </div>
      {/* products -helmets*/}
      <div className="container product_cat_bar">
        <div className="row align-items-center">
          <div className="col-xs-4 col-xs-offset-5">
            <div className="product_cat">All Products</div>
          </div>
        </div>
      </div>
      <div className="container row1">
        <div className="row">
          {Items.map((val) => {
            return (
              <Product
                name={val.name}
                image={val.image}
                id={val.id}
                size={val.size}
                color={val.colors}
                price={val.price}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default AllProduct;
