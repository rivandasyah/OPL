import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Header.css";
import logo from "../assets/logoPutih.png";
import { FaChevronDown } from "react-icons/fa";

function Header() {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const location = useLocation();

  // Fungsi untuk menentukan apakah link aktif
  const isActive = (path) => location.pathname === path;

  const handleMouseEnter = () => setIsDropdownVisible(true);
  const handleMouseLeave = () => setIsDropdownVisible(false);

  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <nav className="nav-links">
        <ul>
          <li>
            <Link
              to="/"
              className={isActive("/") ? "active" : ""}
            >
              Beranda
            </Link>
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
            {isDropdownVisible && (
              <ul className="dropdown-menu">
                <li>
                  <Link
                    to="/layanan-air"
                    className={isActive("/layanan-air") ? "active" : ""}
                  >
                    Air Freight Service
                  </Link>
                </li>
                <li>
                  <Link
                    to="/layanan-sea"
                    className={isActive("/layanan-sea") ? "active" : ""}
                  >
                    Sea Freight Service
                  </Link>
                </li>
                <li>
                  <Link
                    to="/layanan-customs"
                    className={isActive("/layanan-customs") ? "active" : ""}
                  >
                    Customs Clearance
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link
              to="/tentang-kami"
              className={isActive("/tentang-kami") ? "active" : ""}
            >
              Tentang Kami
            </Link>
          </li>
          <li>
            <Link
              to="/hitung-biaya"
              className={`button ${isActive("/hitung-biaya") ? "active" : ""}`}
            >
              Hitung Biaya
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;