import React from "react";
import Latar from "../assets/bgBeranda.jpg";
import Logo from "../assets/logoPutih.png";
import "../styles/Home.css";

function Home() {
  return (
    <div className="image-container">
      <img src={Latar} alt="Background" className="image" />

      <div className="overlay"></div>

      <div className="overlay-content">
        <img src={Logo} alt="Oscar Project Logistics Logo" className="logo" />
        <p className="tagline">International Freight Forwarding</p>
      </div>
    </div>
  );
}

export default Home;
