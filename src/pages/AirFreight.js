import React from "react";
import Plane from "../assets/bgAir.jpg";
import ImportProcessFlow from "../assets/importAir.png"; 
import "../styles/Air.css";
import WhatsApp from "../components/WhatsApp";

function AirFreight() {
  return (
    <div className="air-freight-container">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="image-container-air">
          <img src={Plane} alt="Air Freight Background" className="image-air bg-air" />
          <div className="overlay-air"></div>
          <div className="overlay-content">
            <h1 className="tagline">AIR FREIGHT</h1>
          </div>
        </div>
      </div>

      {/* Details Section */}
      <section className="details-section-air">
        <p >
          Air Freight Service adalah solusi yang sangat baik untuk pengiriman barang yang memerlukan kecepatan, keamanan, dan
          jangkauan yang luas dengan memanfaatkan pesawat terbang sebagai alat transportasi utama.
          Waktu pengiriman jauh lebih singkat dibandingkan dengan pengiriman laut atau darat, terutama untuk jarak jauh.
        </p>
      </section>

        {/* Process Flow Section */}
        <div className="process-flow-section">
        <h2 className="tagline tagline-import">Proses Import</h2>
        <div className="process-content">
          <img
            src={ImportProcessFlow}
            alt="Proses Import"
            className="process-flow-image"
          />
        </div>
        <div className="overlay-air-bot"></div>
      </div>

      <WhatsApp/>

    </div>
  );
}

export default AirFreight;
