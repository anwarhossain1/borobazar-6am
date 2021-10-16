import React from "react";
import Countdown from "react-countdown";
import "./countDown.css";
import { CloseOutlined } from "@ant-design/icons";
import timer from "../../assets/images/timer.png";
const countDown = () => {
  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a complete state
    } else {
      // Render a countdown
      return (
        <div className="all_container">
          <div style={{ margin: "7px" }}>
            <img alt="counter logo" src={timer} />
          </div>
          <div style={{ marginTop: "15px", color: "white" }}>
            <p>
              Claim your online {""}
              <strong>FREE Delivery or Shipping</strong> today! Expires in
            </p>
          </div>
          <div className="counter__container">
            <div className="counter__data">
              <div> {"0" + hours}</div>
            </div>
            :<div className="counter__data">{minutes}</div>:
            <div className="counter__data">{seconds}</div>
          </div>
          <div>
            <CloseOutlined />
          </div>
        </div>
      );
    }
  };

  return (
    <div className="topnav">
      <Countdown date={Date.now() + 24800000} renderer={renderer} />
    </div>
  );
};

export default countDown;
