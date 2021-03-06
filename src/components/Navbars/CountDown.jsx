import React, { useState } from "react";
import Countdown from "react-countdown";
import "./countDown.css";
import { CloseOutlined } from "@ant-design/icons";
import timer from "../../assets/images/timer.png";
const CountDown = () => {
  const [show, setShow] = useState(true);
  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a complete state
    } else {
      // Render a countdown
      return (
        <div className="all_container">
          <div className="counter__logo">
            <img alt="counter logo" src={timer} />
          </div>
          <div className="counter__title">
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
            <CloseOutlined onClick={() => setShow(false)} />
          </div>
        </div>
      );
    }
  };

  return (
    show && (
      <div className="topnav">
        <Countdown date={Date.now() + 24800000} renderer={renderer} />
      </div>
    )
  );
};

export default CountDown;
