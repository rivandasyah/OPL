import React from "react";
import { FaInstagram, FaYoutube, FaFacebook } from "react-icons/fa";
import { MdPhone, MdEmail, MdLocationOn } from "react-icons/md";
import "../styles/Footer.css";
import Logo from "../assets/logoBerwarna.png";
import { useLanguage } from "./LanguageContext";

function Footer() {
  const address = `Jalan raya ciangsana raya No.178,
Kec. gunung putri, Bogor, Indonesia, 16968`;

  const { translations } = useLanguage();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <img
            src={Logo}
            alt="Oscar Project Logistics Logo"
            className="footer-logo"
          />
          <p>
            {translations.footerDesc[0]}
            <b>{translations.footerDesc[1]}</b>
            {translations.footerDesc[2]}
          </p>
          <div className="social-icons">
            <a
              href="https://www.instagram.com/opl_indonesia/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.youtube.com/@OPLindonesia"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FaYoutube />
            </a>
            <a
              href="https://www.facebook.com/oscarprojectlogistics"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FaFacebook />
            </a>
          </div>
        </div>
        <div className="footer-right">
          <h2>{translations.contactUs}</h2>
          <div className="contact-info">
            <div className="contact-item">
              <MdPhone className="contact-icon" />
              <span>{translations.footerPhone}</span>
            </div>
            <div className="contact-item">
              <MdEmail className="contact-icon" />
              <span>{translations.footerEmail}</span>
            </div>
            <div className="contact-item">
              <MdLocationOn className="contact-icon" />
              <span
                dangerouslySetInnerHTML={{
                  __html: address.replace(/\n/g, "<br />"),
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024, Oscar Project Logistics All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
