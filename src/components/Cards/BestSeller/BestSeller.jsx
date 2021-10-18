import { Button, Card, Col, Row } from "antd";
import React from "react";
import "./bestseller.css";

const { Meta } = Card;
const BestSeller = ({ title, description, data }) => {
  return (
    <div className="best__seller">
      <h1>{title}</h1>
      <p>{description}</p>
      <div className="cards_row">
        <Row align="center">
          {data &&
            data.map((item) => {
              return (
                <Col md={4} sm={8} xs={12}>
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
