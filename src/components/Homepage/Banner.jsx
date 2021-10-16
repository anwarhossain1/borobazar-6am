import React from "react";
import { Input, Space } from "antd";
import { AudioOutlined } from "@ant-design/icons";
import banner from "../../assets/images/banner.jpg";
import "./banner.css";
const { Search } = Input;

const Banner = () => {
  return (
    <div>
      <div className="banner">
        <div className="banner__container">
          <div className="banner__content">
            <h1>Healthy vegetable that you deserve to eat fresh</h1>
            <p>
              We source and sell the very best beef, lamb and pork, sourced with
              the greatest care from farmer.
            </p>
          </div>
          <div className="search">
            <Search placeholder="What are you looking" enterButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
