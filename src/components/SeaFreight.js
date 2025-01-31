import React from "react";
import Sea from "../assets/bgSeaFreight.jpg";
import ImporSea from "../assets/importSea.png";
import "../styles/Sea.css";
import WhatsApp from "./WhatsApp";
import { useLanguage } from "./LanguageContext";

function SeaFreight() {
  const { translations } = useLanguage();

  return (
    <div>
      <div className="image-container-air">
        <img
          src={Sea}
          alt="Sea Freight Background"
          className="image-air bg-air"
        />
        <div className="overlay-air"></div>
        <div className="overlay-content-air">
          <p className="tagline-air">SEA FREIGHT</p>
        </div>
      </div>

      {/* Details Section */}
      <section className="details-section-sea">
        <p>{translations.seaFreightDesc}</p>
        <div className="freight-types">
          <div className="freight-type">
            <h3>LCL (Less Container Load)</h3>
            <p>
              {translations.seaFreightLclDesc}
            </p>
          </div>
          <div className="freight-type">
            <h3>FCL (Full Container Load)</h3>
            <p>
              {translations.seaFreightFclDesc}
            </p>
          </div>
        </div>
      </section>

      <div className="import-section">
        <h2 className="tagline tagline-import">{translations.importProcess}</h2>
        <div className="process-content">
          <img
            src={translations.imgImportSea}
            alt="Proses Pengiriman via Laut"
            className="import-image-sea"
          />
        </div>
        <div className="overlay-sea"></div>
      </div>

      <WhatsApp />
    </div>
  );
}

export default SeaFreight;
