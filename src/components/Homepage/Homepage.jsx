import React from "react";
import Banner from "./Banner";
import appleStore from "../../assets/images/app_store.png";
import googleStore from "../../assets/images/google_play.png";
import "./homepage.css";
import image1 from "../../assets/images/steak.png";
import image2 from "../../assets/images/steak.png";
import image3 from "../../assets/images/steak.png";

import Cards from "../Cards/Cards";
import CardSwipe from "../Cards/CardSwipe/CardSwipe";
import AllProducts from "../AllProducts/AllProducts";
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
      <div className="all__products">
        <AllProducts />
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
