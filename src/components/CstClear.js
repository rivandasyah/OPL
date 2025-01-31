import React from "react";
import Customs from "../assets/bgCustoms.jpg";
import Clear from "../assets/bgClear.jpg";
import Deal from "../assets/bgCustomsClearance.jpg";
import "../styles/Custom.css";
import WhatsApp from "./WhatsApp";
import { useLanguage } from "./LanguageContext";

function CstClear() {
  const { translations } = useLanguage();

  return (
    <div className="custom-clear-container">
      <div className="hero-section">
        <div className="image-container">
          <img
            src={Customs}
            alt="Custom Clearance"
            className="image-customs bg-customs"
          />
          <div className="overlay"></div>
          <div className="overlay-content center-content">
            <h1 className=" no-underline">CUSTOMS CLEARANCE</h1>
          </div>
        </div>
      </div>

      {/* Details Section */}
      <section className="details-section">
        <p>{translations.customsClearanceDesc}</p>
      </section>

      <div className="bg-clear-container">
        <div className="image-container">
          <img src={Clear} alt="Clear Background" className="image bg-clear" />
          <div className="overlay"></div>
          <div className="overlay-content bg-clear-content">
            <div className="deal-image-wrapper">
              <img src={Deal} alt="Risk Management" className="image bg-deal" />
            </div>
            <div className="text-content">
              <p>{translations.customsClearanceDescTwo}</p>
              <div className="button-wrapper">
                <a
                  href="mailto:info.oscarlogistics@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="contact-button large-button">
                    {translations.contactUs}
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <WhatsApp />
    </div>
  );
}

export default CstClear;
