import React, { useState, useRef } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../styles/Header.css";
import logo from "../assets/logoPutih.png";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";

function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const timeoutRef = useRef(null);

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

  const isActive = (path) => location.pathname === path;

  return (
    <header className="header">
      <div className="logo-header">
        <img src={logo} alt="Logo" />
      </div>

      <button className="hamburger-menu" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </button>
      <nav
        className={`nav-links ${isMobileMenuOpen ? "mobile-menu-open" : ""}`}
      >
        <ul>
          <li>
            <NavLink to="/" onClick={() => setIsMobileMenuOpen(false)}>
              Beranda
            </NavLink>
          </li>
          <li
            className="dropdown"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div
            >
              <span>Layanan</span>
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
                  Air Freight Service
                </Link>
              </li>
              <li>
                <Link
                  to="/layanan-sea"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Sea Freight Service
                </Link>
              </li>
              <li>
                <Link
                  to="/layanan-customs"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Customs Clearance
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <NavLink
              to="/tentang-kami"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Tentang Kami
            </NavLink>
          </li>
        </ul>
      </nav>

      <button className="button" onClick={handleHitungBiayaClick}>
        Hitung Biaya
      </button>
    </header>
  );
}

export default Header;
