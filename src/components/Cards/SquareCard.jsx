import React from "react";
import "./squareCard.css";
import cc1 from "../../assets/images/CuratedCollections/cc1.png";
import { Col } from "antd";

const SquareCard = ({ images }) => {
  return (
    images &&
    images.map((card) => {
      return (
        <Col md={6} style={{ alignItems: "center" }}>
          <div className="square__card__container">
            <div className="square__card">
              <div className="square__card__image">
                <img src={card.image} />
              </div>
              <div className="square__card__description">
                <h1>{card.title}</h1>
                <p>{card.description}</p>
              </div>
            </div>
          </div>
        </Col>
      );
    })
  );
};

export default SquareCard;
