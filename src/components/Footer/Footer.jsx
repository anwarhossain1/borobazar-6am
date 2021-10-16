import React from "react";
import { Row, Col, Input, Divider } from "antd";
import logo from "../../assets/images/logo.png";
import mc from "../../assets/images/mc.png";
import visa from "../../assets/images/visa-logo.png";
import paypal from "../../assets/images/paypal.png";
import skrill from "../../assets/images/skrill.jpg";

import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  YoutubeOutlined,
  MailOutlined,
  SendOutlined,
} from "@ant-design/icons";
import "./footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <Row>
        <Col md={6} sm={24} xs={24}>
          <div className="fst_col">
            <img src={logo} />
            <h3>
              We offers high-quality foods and the best delivery service, and
              the food market you can blindly trust
            </h3>
          </div>
          <div className="col_icons">
            <ul>
              <li>
                <FacebookOutlined
                  style={{ fontSize: "30px", marginRight: "10px" }}
                />
              </li>
              <li>
                <TwitterOutlined style={{ fontSize: "30px", margin: "10px" }} />
              </li>
              <li>
                <InstagramOutlined
                  style={{ fontSize: "30px", margin: "10px" }}
                />
              </li>
              <li>
                <YoutubeOutlined style={{ fontSize: "30px", margin: "10px" }} />
              </li>
            </ul>
          </div>
        </Col>
        <Col md={4} sm={12} xs={12}>
          <div className="snd_col">
            <h3>About Us</h3>
            <div className="snd__col_icons">
              <ul>
                <li>
                  <a>About us</a>
                </li>
                <li>
                  <a>Contact us</a>
                </li>
                <li>
                  <a>About team</a>
                </li>
                <li>
                  <a>Customer Support</a>
                </li>
              </ul>
            </div>
          </div>
        </Col>
        <Col md={4} sm={12} xs={12}>
          <div className="snd_col">
            <h3>Our Information</h3>
            <div className="snd__col_icons">
              <ul>
                <li>Privacy policy update</li>
                <li>Terms & conditions</li>
                <li>Return Policy</li>
                <li>Site Map</li>
              </ul>
            </div>
          </div>
        </Col>
        <Col md={4} sm={24} xs={24}>
          <div className="snd_col">
            <h3>Community</h3>
            <div className="snd__col_icons">
              <ul>
                <li>Privacy policy update</li>
                <li>Terms & conditions</li>
                <li>Return Policy</li>
                <li>Site Map</li>
              </ul>
            </div>
          </div>
        </Col>
        <Col md={6} sm={24} xs={24}>
          <div className="subs_col">
            <h3>Subscribe Now</h3>
            <p>
              Subscribe your email for newsletter and featured news based on
              your interest
            </p>
            <Input
              style={{
                height: "50px",
                borderRadius: "8px",
              }}
              placeholder="Write your email here"
              prefix={<MailOutlined style={{ marginRight: "5px" }} />}
              suffix={
                <SendOutlined
                  style={{
                    color: "#02B290",
                    cursor: "pointer",
                  }}
                />
              }
            ></Input>
          </div>
        </Col>
      </Row>
      <Divider solid />
      <Row>
        <Col md={24} sm={24}>
          <div className="copyrights">
            <p>© Copyright 2021 RedQ, Inc. All rights reserved</p>
            <ul>
              <li>
                <img src={mc} />
              </li>
              <li>
                <img src={visa} style={{ width: "2vw" }} />
              </li>
              <li>
                <img src={paypal} />
              </li>
              <li>
                <img src={skrill} />
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
