import React from "react";
import "./Home.css";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import Product from "./Product.js";
import Items from "./ProductItems.js";
import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      {/* new home */}
      <div className="container-fluid home">
        <div className="row">
          {/* sub_home */}
          <div className="col-xs-12 sub_home">
            <div className="col-lg-5 col-lg-offset-1 sub_home_text">
              <h2>
                Never say never <br /> because limits,like fears,
                <br /> are often just an illusion.
              </h2>
              <div className="home_btn">
                <Link to="/allproduct">
                  <button type="button" className="btn btn-primary btn1">
                    Buy Now
                  </button>
                </Link>
                <button className="btn btn-success btn2 ">Offers</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* level-2 home left */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-12 col-lg-5 home_left col-lg-offset-1">
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
          <div className="home_right visible-lg">
            <div className="col-lg-4 ">
              <img
                className="home_img"
                src="./images/helpng.png"
                alt="no image"
              />
            </div>
          </div>
        </div>
      </div>

      {/* products -helmets*/}
      <div className="container product_cat_bar">
        <div className="row align-items-center">
          <div className="col-xs-4 col-xs-offset-5">
            <div className="product_cat">HELMET COLLECTIONS</div>
          </div>
        </div>
      </div>
      <div className="container row1">
        <div className="row align-items-center">
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
            id={Items[5].id}
            size={Items[5].size}
            color={Items[5].colors}
            price={Items[4].price}
          />
        </div>
      </div>
      {/* products -accessories*/}
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
        </div>
      </div>
    </>
  );
}

export default Home;
