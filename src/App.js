import React from "react";
import Homepage from "./components/Homepage/Homepage";
import CountDown from "./components/Navbars/countDown";
import Navbar from "./components/Navbars/Navbar";

const App = () => {
  return (
    <div>
      <div>
        <div>
          <CountDown />
        </div>
        <div>
          <Navbar />
        </div>
      </div>
      <div className="homepage">
        <Homepage />
      </div>
    </div>
  );
};

export default App;
