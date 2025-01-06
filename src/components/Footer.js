import React from "react";
import { FaInstagram, FaYoutube, FaFacebook } from "react-icons/fa";
import { MdPhone, MdEmail, MdLocationOn } from "react-icons/md";
import "../styles/Footer.css";
import Logo from "../assets/logoBerwarna.png";

function Footer() {
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
            Selamat Datang di <b>Oscar Project Logistics</b>, Kami berkomitmen
            untuk memberikan solusi logistik terbaik kepada Anda, dengan
            pelayanan yang sepenuh hati.
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
          <h2>Hubungi Kami</h2>
          <div className="contact-info">
            <div className="contact-item">
              <MdPhone className="contact-icon" />
              <span>
                +6281234515052
              </span>
            </div>
            <div className="contact-item">
              <MdEmail className="contact-icon" />
              <span>
                info.oscarlogistics@gmail.com
              </span>
            </div>
            <div className="contact-item">
              <MdLocationOn className="contact-icon" />
              <span>
                Jalan raya ciangsana raya No.178,
                <br />
                Kec. gunung putri, Bogor, Indonesia, 16968
              </span>
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
