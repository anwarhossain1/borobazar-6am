import { Col, Row } from "antd";
import React from "react";
import SquareCard from "../SquareCard";
import "./curatedCollections.css";
import cc1 from "../../../assets/images/CuratedCollections/cc1.png";
import cc2 from "../../../assets/images/CuratedCollections/cc2.png";
import cc3 from "../../../assets/images/CuratedCollections/cc3.png";
import cc4 from "../../../assets/images/CuratedCollections/cc4.png";

const CuratedCollections = () => {
  const curated_images = [
    {
      title: "drtdetertewt",
      description: "adfadf",
      image: cc1,
    },
    {
      title: "drtdetertewt",
      description: "adfadf",
      image: cc2,
    },
    {
      title: "drtdetertewt",
      description: "adfadf",
      image: cc3,
    },
    {
      title: "drtdetertewt",
      description: "adfadf",
      image: cc4,
    },
  ];
  return (
    <div className="curated__container">
      <div className="descriptions">
        <h1>Curated collections</h1>
        <p>We have categories the best quality grocery items</p>
      </div>
      <Row>{<SquareCard images={curated_images} />}</Row>
    </div>
  );
};

export default CuratedCollections;
