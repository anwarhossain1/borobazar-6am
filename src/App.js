import React from "react";
import Homepage from "./components/Homepage/Homepage";
import CountDown from "./components/Navbars/CountDown";
import Navbar from "./components/Navbars/Navbar";
import Footer from "./components/Footer/Footer";
import MiddleNavbar from "./components/Navbars/MiddleNavbar";
import AllProducts from "./components/AllProducts/AllProducts";
const App = () => {
  return (
    <div>
      <div>
        <div>
          <CountDown />
        </div>
        <div>
          <MiddleNavbar />
        </div>
        <div>
          <Navbar />
        </div>
      </div>
      <div className="homepage">
        <Homepage />
      </div>

      <div className="Footer">
        <Footer />
      </div>
    </div>
  );
};

export default App;
