import React from "react";
import Banner from "./Banner";
import appleStore from "../../assets/images/app_store.png";
import googleStore from "../../assets/images/google_play.png";
import "./homepage.css";
import image1 from "../../assets/images/app_promote.png";
import image2 from "../../assets/images/superDiscount.png";
import image3 from "../../assets/images/steak.png";

import Cards from "../Cards/Cards";
import CardSwipe from "../Cards/CardSwipe/CardSwipe";
const Homepage = () => {
  const images = [
    {
      image: image1,
    },
    {
      image: image2,
    },
    {
      image: image3,
    },
  ];

  return (
    <div>
      {/* <Banner /> */}
      <CardSwipe images={images} />
      <div className="cards">
        <Cards />
      </div>
      <div className="app__promote">
        <div className="content">
          <h1>Make your online shop easier with our mobile app</h1>
          <p>
            BoroBazar makes online grocery shopping fast and easy. Get groceries
            delivered and order the best of seasonal farm fresh food.
          </p>
        </div>
        <div className="app__promote__buttons">
          <a>
            <img alt="app store" src={appleStore} />{" "}
          </a>
          <a className="google_play_store">
            <img alt="google store" src={googleStore} />{" "}
          </a>
        </div>
      </div>
    </div>
  );
};
export default Homepage;
