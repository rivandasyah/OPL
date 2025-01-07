import React from "react";
import Plane from "../assets/bgAir.jpg";
import Log from "../assets/bgAirlog.jpg";
import ImporAir from "../assets/importAir.png";
import ImportProcessFlow from "../assets/importAir.png"; // Gambar proses import
import "../styles/Air.css";

function AirFreight() {
  return (
    <div className="air-freight-container">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="image-container">
          <img src={Plane} alt="Air Freight Background" className="image bg-air" />
          <div className="overlay"></div>
          <div className="overlay-content">
            <h1 className="tagline">AIR FREIGHT</h1>
          </div>
        </div>
      </div>

      {/* Details Section */}
      <section className="details-section">
        <p>
          Air Freight Service adalah solusi yang sangat baik untuk pengiriman barang yang memerlukan kecepatan, keamanan, dan
          jangkauan yang luas dengan memanfaatkan pesawat terbang sebagai alat transportasi utama.
          Waktu pengiriman jauh lebih singkat dibandingkan dengan pengiriman laut atau darat, terutama untuk jarak jauh.
        </p>
      </section>

      {/* Import Process Section */}
      <div className="import-section">
        <div className="image-containerr">
          <img src={Log} alt="Background Air Log" className="image bg-air-log" />
          <div className="overlay"></div>
          <div className="overlay-content">
            {/* Tagline PROSES IMPORT */}
            <h2 className="tagline tagline-import">PROSES IMPORT</h2>
            {/* Gambar ImportAir */}
            <img src={ImporAir} alt="Proses Pengiriman via Udara" className="import-image" />
          </div>
        </div>
      </div>

      {/* Process Flow Section */}
      <div className="process-flow-section">
        <h2 className="tagline tagline-import">Flow Proses Import</h2>
        <div className="process-content">
          <img
            src={ImportProcessFlow}
            alt="Proses Import Flow"
            className="process-flow-image"
          />
        </div>
      </div>
    </div>
  );
}

export default AirFreight;
