import React from "react";
import BestSeller from "./BestSeller/BestSeller";
import { default as PopuparProduct } from "./BestSeller/BestSeller";
import { dataOfBestSellerProduct } from "./BestSeller/bestSellerData";
import ColorCards from "./ColorFulCards/ColorCards";
import CuratedCollections from "./Curated/CuratedCollections";
import { dataOfPopularProduct } from "./popularProductData";

const Cards = () => {
  return (
    <>
      <div>
        <ColorCards />
      </div>
      <div>
        <BestSeller
          title="Best seller grocery near you"
          description="We provide best quality & fresh grocery items near your location"
          data={dataOfBestSellerProduct}
        />
      </div>
      <div className="super__discount" />
      <div>
        <PopuparProduct
          title="Popular product that we sold"
          description="We provide best quality & fresh grocery items near your location"
          data={dataOfPopularProduct}
        />
      </div>
      <div className="curated__collections">
        <CuratedCollections />
      </div>
    </>
  );
};

export default Cards;
