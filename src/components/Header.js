import React, { useState, useRef } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import "../styles/Header.css";
import logo from "../assets/logoPutih.png";
import { FaChevronDown } from "react-icons/fa";

function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef(null);

  const handleHitungBiayaClick = () => {
    if (location.pathname !== "/") {
      navigate("/");
    }
    setTimeout(() => {
      const formSection = document.getElementById("hitung-biaya-section");
      if (formSection) {
        formSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setIsOpen(true), 100); // Tambahkan delay kecil
  };

  const handleMouseLeave = () => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setIsOpen(false), 100); // Tambahkan delay kecil
  };

  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <nav className="nav-links">
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Beranda
            </NavLink>
          </li>
          <li
            className="dropdown"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <span>Layanan</span>
              <FaChevronDown style={{ marginLeft: "5px" }} />
            </div>
            <ul
              className="dropdown-menu"
              style={{
                visibility: isOpen ? "visible" : "hidden",
                opacity: isOpen ? 1 : 0,
                transition:
                  "visibility 0s linear 0.2s, opacity 0.2s ease-in-out",
              }}
            >
              <li>
                <NavLink
                  to="/layanan-air-freight"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Air Freight Service
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/layanan-sea-freight"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Sea Freight Service
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/layanan-customs-clearance"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Customs Clearance
                </NavLink>
              </li>
            </ul>
          </li>
          <li>
            <NavLink
              to="/tentang-kami"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Tentang Kami
            </NavLink>
          </li>
          <li>
            <button className="button" onClick={handleHitungBiayaClick}>
              Hitung Biaya
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
