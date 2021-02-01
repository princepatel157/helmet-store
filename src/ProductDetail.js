import { React, useState } from "react";
import "./ProductDetail.css";
import Items from "./ProductItems.js";
import { useParams } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { Link } from "react-router-dom";

const ProductDetail = (props) => {
  const { id } = useParams();

  const [curr_size, newSize] = useState(Items[id - 1].size[1]);
  function updateSize(e) {
    newSize(e.target.value);
  }
  const [curr_color, newColor] = useState(Items[id - 1].colors[1]);
  function updateColor(e) {
    newColor(e.target.value);
  }

  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    //dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: Items[id - 1].id,
        price: Items[id - 1].price,
        name: Items[id - 1].name,
        size: curr_size,
        colors: curr_color,
        image: Items[id - 1].image,
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
              <img src={Items[id - 1].image[0]} alt="" />
            </div>

            <div className="container sub_img_container">
              <div className="row">
                <div className="col-lg-4 col-xs-12 sub_img">
                  <img src={Items[id - 1].image[1]} alt="" />
                  <img src={Items[id - 1].image[2]} alt="" />
                  <img src={Items[id - 1].image[3]} alt="" />
                </div>
              </div>
            </div>
          </div>
          {/* product details */}
          <div className="col-lg-7 col-lg-offset-1 col-xs-12 prod_details">
            <div className="prod_head">
              {/* name and price */}
              <h3>{Items[id - 1].name}</h3>
              <h4>Rs. {Items[id - 1].price}</h4>
            </div>
            <hr />

            {/* color */}
            <div className="prod_color">
              {/* <h5>Colors</h5> */}
              <div class="form-group">
                <label for="sel1">Select Color:</label>
                <select
                  defaultValue={curr_color}
                  onChange={updateColor}
                  class="form-control"
                  id="color"
                >
                  {Items[id - 1].colors.map((val) => {
                    return <option>{val}</option>;
                  })}
                </select>
              </div>

              <div className="prod_size">
                {/* <h5>Size</h5> */}
                <div class="form-group">
                  <label for="sel1">Select Size:</label>
                  <select
                    defaultValue={curr_size}
                    onChange={updateSize}
                    class="form-control"
                    id="sel1"
                  >
                    {Items[id - 1].size.map((val) => {
                      return <option>{val}</option>;
                    })}
                  </select>
                </div>
              </div>

              {/* add to basket button */}
            </div>
            <div className="prod_btn">
              <button className="btn add_btn" onClick={addToBasket}>
                Add To Basket
              </button>
            </div>

            {/* description */}
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
