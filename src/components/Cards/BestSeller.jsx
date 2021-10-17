import { Button, Card, Col, Row } from "antd";
import React from "react";
import "./bestseller.css";
import freshGreen from "../../assets/images/BestSeller/fresh-green.png";
const { Meta } = Card;
const BestSeller = () => {
  return (
    <div className="best__seller">
      <h1>Best seller grocery near you</h1>
      <p>We provide best quality & fresh grocery items near your location</p>
      <div className="cards_row">
        <Row>
          <Col>
            <Card
              className="card"
              hoverable
              cover={
                <img className="card_image" alt="example" src={freshGreen} />
              }
            >
              <button className="cards_button">+</button>
              <Meta title="$2.64 $2.74" />
              <p>Fresh Green Leaf Lettuce</p>
              <p style={{ marginTop: "15px" }}>1 each</p>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default BestSeller;
