import React from "react";
import Plane from "../assets/bgAirFreight.jpg";
import ImportProcessFlow from "../assets/importAir.png";
import "../styles/Air.css";
import WhatsApp from "./WhatsApp";
import { useLanguage } from "./LanguageContext";

function AirFreight() {
  const { translations } = useLanguage();

  return (
    <div className="air-freight-container">
      <div className="image-container-air">
        <img
          src={Plane}
          alt="Air Freight Background"
          className="image-air bg-air"
        />
        <div className="overlay-air"></div>
        <div className="overlay-content-air">
          <h1 className="tagline-air">AIR FREIGHT</h1>
        </div>
      </div>

      <section className="details-section-air">
        <p>
          {translations.airFreightDesc}
        </p>
      </section>

      <div className="process-flow-section">
        <h2 className="tagline tagline-import">{translations.importProcess}</h2>
        <div className="process-content">
          <img
            src={ImportProcessFlow}
            alt="Proses Import"
            className="process-flow-image"
          />
        </div>
        <div className="overlay-air-bot"></div>
      </div>

      <WhatsApp />
    </div>
  );
}

export default AirFreight;