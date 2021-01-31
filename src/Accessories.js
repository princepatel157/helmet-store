import React from "react";
import "./Home.css";
import Product from "./Product.js";
import Items from "./ProductItems.js";

const CatProduct = () => {
  return (
    <>
      <div className="line">
        <hr />
      </div>
      {/* products -helmets*/}
      <div className="container product_cat_bar">
        <div className="row align-items-center">
          <div className="col-xs-4 col-xs-offset-5">
            <div className="product_cat">ACCESSORIES</div>
          </div>
        </div>
      </div>
      <div className="container row1">
        <div className="row">
          <Product
            name={Items[16].name}
            image={Items[16].image}
            id={Items[16].id}
            size={Items[16].size}
            color={Items[16].colors}
            price={Items[16].price}
          />
          <Product
            name={Items[17].name}
            image={Items[17].image}
            id={Items[17].id}
            size={Items[17].size}
            color={Items[17].colors}
            price={Items[17].price}
          />
          <Product
            name={Items[18].name}
            image={Items[18].image}
            id={Items[18].id}
            size={Items[18].size}
            color={Items[18].colors}
            price={Items[18].price}
          />
          <Product
            name={Items[19].name}
            image={Items[19].image}
            id={Items[19].id}
            size={Items[19].size}
            color={Items[19].colors}
            price={Items[19].price}
          />
          <Product
            name={Items[20].name}
            image={Items[20].image}
            id={Items[20].id}
            size={Items[20].size}
            color={Items[20].colors}
            price={Items[20].price}
          />
          <Product
            name={Items[21].name}
            image={Items[21].image}
            id={Items[21].id}
            size={Items[21].size}
            color={Items[21].colors}
            price={Items[21].price}
          />
          <Product
            name={Items[22].name}
            image={Items[22].image}
            id={Items[22].id}
            size={Items[22].size}
            color={Items[22].colors}
            price={Items[22].price}
          />
          <Product
            name={Items[23].name}
            image={Items[23].image}
            id={Items[23].id}
            size={Items[23].size}
            color={Items[23].colors}
            price={Items[23].price}
          />
          <Product
            name={Items[24].name}
            image={Items[24].image}
            id={Items[24].id}
            size={Items[24].size}
            color={Items[24].colors}
            price={Items[24].price}
          />
          <Product
            name={Items[25].name}
            image={Items[25].image}
            id={Items[25].id}
            size={Items[25].size}
            color={Items[25].colors}
            price={Items[25].price}
          />
        </div>
      </div>
    </>
  );
};

export default CatProduct;
