import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Latar from "../assets/bgBeranda.jpg";
import Logo from "../assets/logoPutih.png";
import SeaFreight from "../assets/bgSeaFreight.jpg";
import AirFreight from "../assets/bgAirFreight.jpg";
import CustomsClearance from "../assets/bgCustomsClearance.jpg";
import ImportExport from "../assets/bgImportExport.png";
import "../styles/Home.css";
import { FaInfoCircle } from "react-icons/fa";
import HitungBiaya from "./HitungBiaya.js";
import WhatsApp from "./WhatsApp.js";
import { useLanguage } from "./LanguageContext.js";

function Home() {
  const location = useLocation();
  const { translations } = useLanguage();

  useEffect(() => {
    if (location.state?.scrollTo === "hitung-biaya-section") {
      const scrollToSection = () => {
        const formSection = document.getElementById("hitung-biaya-section");
        if (formSection) {
          formSection.scrollIntoView({ behavior: "smooth" });
        }
      };

      if (location.state.delay) {
        setTimeout(scrollToSection, 300);
      } else {
        scrollToSection();
      }
    }
  }, [location]);

  return (
    <div>
      <div className="image-container-home">
        <img
          src={Latar}
          alt="Background"
          className="image-home"
          loading="lazy"
        />
        <div className="overlay-home"></div>
        <div className="overlay-content">
          <img
            src={Logo}
            alt="Oscar Project Logistics Logo"
            className="logo"
            loading="lazy"
          />
          <p className="tagline">International Freight Forwarding</p>
        </div>
      </div>

      <div className="services-container">
        <h2 className="services-title">{translations.homeService}</h2>
        <p className="services-subtitle">{translations.homeServiceDesc}</p>
        <div className="services">
          <div className="service">
            <img
              src={SeaFreight}
              alt="Sea Freight"
              className="service-image"
              loading="lazy"
            />
            <h3 className="service-title">Sea Freight</h3>
            <Link className="service-link" to="/layanan-sea">
              {translations.homeSeeMore}
            </Link>
          </div>
          <div className="service">
            <img
              src={AirFreight}
              alt="Air Freight"
              className="service-image"
              loading="lazy"  
            />
            <h3 className="service-title">Air Freight</h3>
            <Link className="service-link" to="/layanan-air">
              {translations.homeSeeMore}
            </Link>
          </div>
          <div className="service">
            <img
              src={CustomsClearance}
              alt="Customs Clearance"
              className="service-image"
              loading="lazy"
            />
            <h3 className="service-title">Customs Clearance</h3>
            <Link className="service-link" to="/layanan-customs">
              {translations.homeSeeMore}
            </Link>
          </div>
        </div>
      </div>

      <div className="home-container">
        <section className="section service-section">
          <h2>{translations.homeHelp}</h2>
          <div className="service-cards">
            <div className="card">
              <div className="card-content">
                <FaInfoCircle
                  style={{
                    color: "#822544",
                    marginRight: "8px",
                    fontSize: "25px",
                  }}
                />
                <h3>{translations.homeHelpOne}</h3>
                <p>{translations.homeHelpOneDesc}</p>
              </div>
            </div>
            <div className="card">
              <div className="card-content">
                <FaInfoCircle
                  style={{
                    color: "#822544",
                    marginRight: "8px",
                    fontSize: "25px",
                  }}
                />
                <h3>{translations.homeHelpTwo}</h3>
                <p>{translations.homeHelpTwoDesc}</p>
              </div>
            </div>
            <div className="card">
              <div className="card-content">
                <FaInfoCircle
                  style={{
                    color: "#822544",
                    marginRight: "8px",
                    fontSize: "25px",
                  }}
                />
                <h3>{translations.homeHelpThree}</h3>
                <p>{translations.homeHelpThreeDesc}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section import-export-section">
          <img
            src={translations.imgImportExport}
            alt="Import and Export"
            loading="lazy"
            className="import-export-image"
          />
        </section>

        <section className="calculate-section" id="hitung-biaya-section">
          <h2 style={{ color: "white" }}>{translations.homeCalculate}</h2>
          <HitungBiaya />
        </section>
      </div>

      <WhatsApp />
    </div>
  );
}

export default Home;
