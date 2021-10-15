import React from "react";
import CountDown from "./components/Navbars/countDown";

const App = () => {
  return (
    <div>
      <div>
        <div>
          <CountDown />
        </div>
        <div>Navbar</div>
      </div>
      <div className="carousel">carousel with search</div>
    </div>
  );
};

export default App;
