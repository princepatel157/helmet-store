import React from "react";
import "./Home.css";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import Product from "./Product.js";
import { Helmets, Acc } from "./ProductItems.js";
import { Link } from "react-router-dom";

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
                <Link to="/allproduct">
                  <button className="btn btn-primary btn1">Buy Now</button>
                </Link>
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
          <Product
            name={Helmets[0].name}
            image={Helmets[0].image}
            price={Helmets[0].price}
          />
          <Product
            name={Helmets[1].name}
            image={Helmets[1].image}
            price={Helmets[1].price}
          />
          <Product
            name={Helmets[2].name}
            image={Helmets[2].image}
            price={Helmets[2].price}
          />
          <Product
            name={Helmets[3].name}
            image={Helmets[3].image}
            price={Helmets[3].price}
          />
          <Product
            name={Helmets[4].name}
            image={Helmets[4].image}
            price={Helmets[4].price}
          />
        </div>
      </div>
      {/* products -accessories*/}
      <div className="container product_cat_bar">
        <div className="row">
          <div className="col-xs-12 ">
            <div className="product_cat">ACCESSORIES</div>
          </div>
        </div>
      </div>
      <div className="container row1">
        <div className="row">
          <Product
            name={Acc[0].name}
            image={Acc[0].image}
            price={Acc[0].price}
          />
          <Product
            name={Acc[1].name}
            image={Acc[1].image}
            price={Acc[1].price}
          />
          <Product
            name={Acc[2].name}
            image={Acc[2].image}
            price={Acc[2].price}
          />
          <Product
            name={Acc[3].name}
            image={Acc[3].image}
            price={Acc[3].price}
          />
          <Product
            name={Acc[4].name}
            image={Acc[4].image}
            price={Acc[4].price}
          />
        </div>
      </div>
    </>
  );
}

export default Home;
