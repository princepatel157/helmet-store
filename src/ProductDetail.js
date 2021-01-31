import React from "react";
import "./ProductDetail.css";
import Items from "./ProductItems.js";
import { useParams } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { Link } from "react-router-dom";

const ProductDetail = (props) => {
  const { id } = useParams();

  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    //dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: Items[id].id,
        price: Items[id].price,
        name: Items[id].name,
        size: Items[id].size,
        colors: Items[id].colors,
        image: Items[id].image,
      },
    });
  };

  return (
    <>
      <div className="line">
        <hr />
      </div>
      <div className="container prod">
        <div className="row align-items-center">
          <div className="col-lg-4 col-xs-12 prod_img">
            <div className="big_img">
              <img src={Items[id].image[0]} alt="" />
            </div>

            <div className="container sub_img_container">
              <div className="row">
                <div className="col-lg-4 col-xs-12 sub_img">
                  <img src={Items[id].image[1]} alt="" />
                  <img src={Items[id].image[2]} alt="" />
                  <img src={Items[id].image[3]} alt="" />
                </div>
              </div>
            </div>
          </div>
          {/* product details */}
          <div className="col-lg-7 col-lg-offset-1 col-xs-12 prod_details">
            <div className="prod_head">
              <h3>{Items[id - 1].name}</h3>
              <h4>Rs. {Items[id - 1].price}</h4>
            </div>
            <hr />
            <div className="prod_color">
              <h5>Colors</h5>
              {Items[id - 1].colors.map((val) => {
                return (
                  <button
                    style={{ color: { val } }}
                    className="btn prod_color_btn"
                    value={val}
                  >
                    {val}
                  </button>
                );
              })}

              <div className="prod_size">
                <h5>Size</h5>
                {Items[id - 1].size.map((val) => {
                  return <button>{val}</button>;
                })}
              </div>
            </div>
            <div className="prod_btn">
              <button className="btn add_btn" onClick={addToBasket}>
                Add To Basket
              </button>
            </div>

            <div className="prod_desc">
              <hr />
              <h3>Item Details</h3>
              {Items[id - 1].desc.map((val) => {
                return <p>* {val}</p>;
              })}
              <div className="prod_comp_desc">
                <hr />
                {Items[id - 1].comp.map((val) => {
                  return <p>{val}</p>;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
