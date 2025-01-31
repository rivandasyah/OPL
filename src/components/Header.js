import React, { useState, useRef, useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../styles/Header.css";
import logo from "../assets/logoPutih.png";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import { useLanguage } from "./LanguageContext.js";

function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const { language, toggleLanguage, translations } = useLanguage();

  const [isOpen, setIsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const timeoutRef = useRef(null);
  const menuRef = useRef(null);

  const handleHitungBiayaClick = () => {
    if (location.pathname !== "/") {
      navigate("/", {
        state: { scrollTo: "hitung-biaya-section", delay: true },
      });
    } else {
      setTimeout(() => {
        const formSection = document.getElementById("hitung-biaya-section");
        if (formSection) {
          formSection.scrollIntoView({ behavior: "smooth" });
        }
      }, 500);
    }
    setIsMobileMenuOpen(false);
  };

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setIsOpen(true), 100);
  };

  const handleMouseLeave = () => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setIsOpen(false), 100);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLanguageChange = () => {
    toggleLanguage();
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    }

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="header">
      <Link to="/" className="logo-header">
        <img src={logo} alt="Logo" />
      </Link>

      <button className="hamburger-menu" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </button>
      <nav
        ref={menuRef}
        className={`nav-links ${isMobileMenuOpen ? "mobile-menu-open" : ""}`}
      >
        <ul>
          <li>
            <NavLink to="/" onClick={() => setIsMobileMenuOpen(false)}>
              {translations.home}
            </NavLink>
          </li>
          <li
            className="dropdown"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div>
              <span> {translations.service}</span>
              <FaChevronDown style={{ marginLeft: "5px" }} />
            </div>
            <ul
              className="dropdown-menu"
              style={{
                display: "block",
                visibility: isOpen ? "visible" : "hidden",
                opacity: isOpen ? 1 : 0,
                justifyContent: "center",
                transition:
                  "visibility 0s linear 0.2s, opacity 0.2s ease-in-out",
              }}
            >
              <li>
                <Link
                  to="/layanan-air"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {translations.airFreightService}
                </Link>
              </li>
              <li>
                <Link
                  to="/layanan-sea"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {translations.seaFreightService}
                </Link>
              </li>
              <li>
                <Link
                  to="/layanan-customs"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {translations.customsClearance}
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <NavLink
              to="/tentang-kami"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {translations.aboutUs}
            </NavLink>
          </li>
        </ul>
      </nav>

      <button className="language-toggle" onClick={handleLanguageChange}>
        {language === "id" ? "ID" : "EN"}
      </button>

      <button className="button" onClick={handleHitungBiayaClick}>
        {translations.calculate}
      </button>
    </header>
  );
}

export default Header;
