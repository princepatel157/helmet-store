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
            <div className="product_cat">HELMETS</div>
          </div>
        </div>
      </div>
      <div className="container row1">
        <div className="row">
          <Product
            name={Items[0].name}
            image={Items[0].image}
            id={Items[0].id}
            size={Items[0].size}
            color={Items[0].colors}
            price={Items[0].price}
          />
          <Product
            name={Items[1].name}
            image={Items[1].image}
            id={Items[1].id}
            size={Items[1].size}
            color={Items[1].colors}
            price={Items[1].price}
          />
          <Product
            name={Items[2].name}
            image={Items[2].image}
            id={Items[2].id}
            size={Items[2].size}
            color={Items[2].colors}
            price={Items[2].price}
          />
          <Product
            name={Items[3].name}
            image={Items[3].image}
            id={Items[3].id}
            size={Items[3].size}
            color={Items[3].colors}
            price={Items[3].price}
          />
          <Product
            name={Items[4].name}
            image={Items[4].image}
            id={Items[4].id}
            size={Items[4].size}
            color={Items[4].colors}
            price={Items[4].price}
          />
          <Product
            name={Items[5].name}
            image={Items[5].image}
            id={Items[5].id}
            size={Items[5].size}
            color={Items[5].colors}
            price={Items[5].price}
          />
          <Product
            name={Items[6].name}
            image={Items[6].image}
            id={Items[6].id}
            size={Items[6].size}
            color={Items[6].colors}
            price={Items[6].price}
          />
          <Product
            name={Items[7].name}
            image={Items[7].image}
            id={Items[7].id}
            size={Items[7].size}
            color={Items[7].colors}
            price={Items[7].price}
          />
          <Product
            name={Items[8].name}
            image={Items[8].image}
            id={Items[8].id}
            size={Items[8].size}
            color={Items[8].colors}
            price={Items[8].price}
          />
          <Product
            name={Items[9].name}
            image={Items[9].image}
            id={Items[9].id}
            size={Items[9].size}
            color={Items[9].colors}
            price={Items[9].price}
          />
          <Product
            name={Items[10].name}
            image={Items[10].image}
            id={Items[10].id}
            size={Items[10].size}
            color={Items[10].colors}
            price={Items[10].price}
          />
          <Product
            name={Items[11].name}
            image={Items[11].image}
            id={Items[11].id}
            size={Items[11].size}
            color={Items[11].colors}
            price={Items[11].price}
          />
          <Product
            name={Items[12].name}
            image={Items[12].image}
            id={Items[12].id}
            size={Items[12].size}
            color={Items[12].colors}
            price={Items[12].price}
          />
          <Product
            name={Items[13].name}
            image={Items[13].image}
            id={Items[13].id}
            size={Items[13].size}
            color={Items[13].colors}
            price={Items[13].price}
          />
          <Product
            name={Items[14].name}
            image={Items[14].image}
            id={Items[14].id}
            size={Items[14].size}
            color={Items[14].colors}
            price={Items[14].price}
          />
          <Product
            name={Items[15].name}
            image={Items[15].image}
            id={Items[15].id}
            size={Items[15].size}
            color={Items[15].colors}
            price={Items[15].price}
          />
        </div>
      </div>
    </>
  );
};

export default CatProduct;
