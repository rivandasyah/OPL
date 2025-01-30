import React from "react";
import "../styles/TentangKami.css";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import HubungiKami from "../assets/bgHubungiKami.jpg";
import TentangPerusahaan from "../assets/bgTentangPerusahaan.jpg";
import WhatsApp from "./WhatsApp";
import { useLanguage } from "./LanguageContext";

function TentangKami() {
  const { translations } = useLanguage();

  return (
    <div>
      <div className="image-container-tentang">
        <img
          src={HubungiKami}
          alt="Background Hubungi Kami"
          className="image-tentang"
        />
        <div className="overlay-kami"></div>
        <div className="overlay-content">
          <h2 className="tagline-kami">{translations.contactUs}</h2>
        </div>
      </div>
      <div className="profil-perusahaan-section">
        <div className="profil-content">
          <div className="profil-image-container">
            <img
              src={TentangPerusahaan}
              alt="Plane and Boxes"
              className="profil-image"
            />
          </div>
          <div className="profil-text">
            <h2>{translations.aboutUsCompanyProfile}</h2>
            <p>
              {translations.aboutUsCompanyProfileDesc}</p>
            <div className="profile-contact">
              <a
                href="mailto:info.oscarlogistics@gmail.com"
                className="button-icon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="contact-icons message-icon">
                  <FaEnvelope />
                </div>
                <div className="button-text">
                  <h1>{translations.aboutUsSendEmail}</h1>
                  <span>{translations.aboutUsEmail}</span>
                </div>
              </a>

              <a href="tel:+6281234515052" className="button-icon">
                <div className="contact-icons call-icon">
                  <FaPhoneAlt />
                </div>
                <div className="button-text">
                  <h1>{translations.contactUs}</h1>
                  <span>+62 812 3451 5052</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <WhatsApp />
    </div>
  );
}

export default TentangKami;
