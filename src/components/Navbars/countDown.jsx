import React from "react";
import Countdown from "react-countdown";
import "./countDown.css";
import { CloseCircleFilled } from "@ant-design/icons";
const countDown = () => {
  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a complete state
    } else {
      // Render a countdown
      return (
        <div>
          <p>
            <strong>
              Claim your online FREE Delivery or Shipping today! Expires in
            </strong>{" "}
            {"0" + hours}:{minutes}:{seconds}
          </p>
        </div>
      );
    }
  };

  return (
    <div class="topnav">
      <Countdown date={Date.now() + 24800000} renderer={renderer} />
      <CloseCircleFilled style={{ float: "right", marginLeft: "100px" }} />
    </div>
  );
};

export default countDown;
