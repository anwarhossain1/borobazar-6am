import React from "react";
import Banner from "./Banner";
import appleStore from "../../assets/images/app_store.png";
import googleStore from "../../assets/images/google_play.png";
import "./homepage.css";
const Homepage = () => {
  return (
    <div>
      <Banner />
      <div className="super__discount" />
      <div>Hello</div>
      <div className="app__promote">
        <div className="content">
          <h1>Make your online shop easier with our mobile app</h1>
          <p>
            BoroBazar makes online grocery shopping fast and easy. Get groceries
            delivered and order the best of seasonal farm fresh food.
          </p>
          <a href="#">
            <img alt="app store" src={appleStore} />{" "}
          </a>
          <a href="#" className="google_play_store">
            <img alt="google store" src={googleStore} />{" "}
          </a>
        </div>
      </div>
    </div>
  );
};
export default Homepage;
