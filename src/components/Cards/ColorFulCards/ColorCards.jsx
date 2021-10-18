import { Col, Row } from "antd";
import React from "react";
import "./colorCards.css";

import c1 from "../../../assets/images/ColorFul/c1.png";
import c2 from "../../../assets/images/ColorFul/c2.png";
import c3 from "../../../assets/images/ColorFul/c3.png";
import c4 from "../../../assets/images/ColorFul/c4.png";
import CardSwipe from "../CardSwipe/CardSwipe";
const ColorCards = () => {
  const images = [
    {
      image: c1,
    },
    {
      image: c2,
    },
    {
      image: c3,
    },
    {
      image: c4,
    },
  ];
  return (
    <div className="color__container">
      <Row>
        {images &&
          images.map((card) => {
            return (
              <Col className="colll" md={6}>
                <div className="color__cards__container">
                  <div className="color__card">
                    <div className="color__card__image">
                      <img src={card.image} />
                    </div>
                  </div>
                </div>
              </Col>
            );
          })}
        {/* <CardSwipe images={images} /> */}
      </Row>
    </div>
  );
};

export default ColorCards;
