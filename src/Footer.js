import React from "react";
import "./Footer.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <div className="container-fluid footer">
        <div className="row">
          {/* upper container */}
          <div className="container-fluid">
            <div className="row">
              <div className="footer_up">
                {/* footer left */}
                <div className="col-lg-4 col-sm-2 footer_left">
                  <div className="footer_img">
                    <img src="./images/logo.jpg" />
                  </div>
                  <div className="footer_head">Ashi Sports</div>
                  <div className="social_links">
                    <button>
                      <FacebookIcon />
                    </button>
                    <button>
                      <TwitterIcon />
                    </button>
                  </div>
                </div>

                {/* footer right */}
                <div className="col-lg-8 col-sm-10 footer-right">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-xs-4 block">
                        <div className="block_head">
                          <h5>INFORMATION</h5>
                        </div>
                        <div className="block_content">
                          <ul>
                            <li>
                              <Link to="/">About Us</Link>
                            </li>
                            <li>
                              <Link to="/">Privacy Policy</Link>
                            </li>
                            <li>
                              <Link to="/">Delivery & Return</Link>
                            </li>
                            <li>
                              <Link to="/">Contact Us</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-xs-4 block block2">
                        <div className="block_head">
                          <h5>SOCIAL MEDIA</h5>
                        </div>
                        <div className="block_content">
                          <ul>
                            <li>
                              <FacebookIcon />
                              Ashihelmet
                            </li>
                            <li>
                              <TwitterIcon />
                              Ashihelmet
                            </li>
                            <li>
                              <LinkedInIcon />
                              Ashihelmet
                            </li>
                            <li>
                              <InstagramIcon />
                              Ashihelmet
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-xs-4 block block2">
                        <div className="block_head">
                          <h5>HEAD OFFICE</h5>
                        </div>
                        <div className="block_content">
                          Plot No.27, <br />
                          Tirupati Industrial Area, <br />
                          Delhi Road, Meerut <br />- 250103 (U.P.) India.
                          <br /> PH: +919897278902, 01214050604
                          <br />
                          EMAIL: ashisports@ashihelmet.com
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
