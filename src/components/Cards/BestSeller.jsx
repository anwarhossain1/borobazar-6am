import { Button, Card, Col, Row } from "antd";
import React from "react";
import "./bestseller.css";
import freshGreen from "../../assets/images/BestSeller/i1.png";
import { dataOfBestSellerProduct } from "./bestSellerData";
const { Meta } = Card;
const BestSeller = () => {
  console.log(dataOfBestSellerProduct);
  return (
    <div className="best__seller">
      <h1>Best seller grocery near you</h1>
      <p>We provide best quality & fresh grocery items near your location</p>
      <div className="cards_row">
        <Row>
          {dataOfBestSellerProduct.map((item) => {
            return (
              <Col>
                <div className="cards_container">
                  <Card
                    className="card"
                    hoverable
                    cover={
                      <img
                        className="card_image"
                        alt="example"
                        src={item.image}
                      />
                    }
                  >
                    <button className="cards_button">+</button>
                    <Meta title={item.price} />
                    <p>{item.description}</p>
                    <p style={{ marginTop: "15px" }}>{item.quuantity}</p>
                  </Card>
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
};

export default BestSeller;
