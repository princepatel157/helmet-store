import React from "react";
import "./Home.css";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import Product from "./Product.js";
import Items from "./ProductItems.js";

function Home() {
  return (
    <>
      {/* new home */}
      <div className="container-fluid home">
        <div className="row">
          {/* sub_home */}
          <div className="col-xs-12 sub_home">
            <div className="col-lg-6 sub_home_text">
              <h2>
                Never say never <br /> because limits,like fears,
                <br /> are often just an illusion.
              </h2>
              <div className=" home_btn">
                <button className="btn btn-primary btn1">Buy Now</button>
                <button className="btn btn-success btn2 ">Offers</button>
              </div>
            </div>
          </div>

          {/* home left */}
          <div className="col-xs-6 home_left">
            <div className="cards">
              <div className="well">
                <div className="card_icon">
                  <EqualizerIcon></EqualizerIcon>
                </div>
                <div className="card_heading">PERFORMANCE</div>
                <div className="card_txt">
                  designed for a secure and comfortable fit for long days in the
                  field.
                </div>
              </div>
              <div className="well">
                <div className="card_icon">
                  <EqualizerIcon></EqualizerIcon>
                </div>
                <div className="card_heading">PERFORMANCE</div>
                <div className="card_txt">
                  designed for a secure and comfortable fit for long days in the
                  field.
                </div>
              </div>
            </div>
          </div>

          {/* home right */}
          <div className="home_right hidden-sm">
            <div className="col-lg-4 ">
              <img
                className="home_img"
                src="./images/kohli.png"
                alt="no image"
              />
            </div>
          </div>
        </div>
      </div>

      {/* products */}
      <div className="container product_cat_bar">
        <div className="row">
          <div className="col-xs-12 ">
            <div className="product_cat">COLLECTIONS</div>
          </div>
        </div>
      </div>
      {/* <div className="row1">
        {HelmetCat1.map((val) => {
          return (
            <Product name={val.name} image={val.image} price={val.price} />
          );
        })}
      </div> */}
      <div className="container row1">
        <div className="row">
          {Items.map((val) => {
            return (
              <Product name={val.name} image={val.image} price={val.price} />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Home;
