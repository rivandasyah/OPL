import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";
import logo from "../assets/logoPutih.png";
import { FaChevronDown } from "react-icons/fa";

function Header() {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <nav className="nav-links">
        <ul>
          <li>
            <Link to="/" className="active">
              Beranda
            </Link>
          </li>
          <li
            className="dropdown"
            onMouseEnter={() => setIsDropdownVisible(true)}
            onMouseLeave={() => setIsDropdownVisible(false)}
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
            </div>{" "}
            {isDropdownVisible && (
              <ul className="dropdown-menu">
                <li>
                  <Link to="/layanan-air">Air Freight Service</Link>
                </li>
                <li>
                  <Link to="/layanan-sea">Sea Freight Service</Link>
                </li>
                <li>
                  <Link to="/layanan-customs">Customs Clearance</Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link to="/tentang-kami" style={{ fontWeight: "normal" }}>
              Tentang Kami
            </Link>
          </li>
          <li>
            <Link
              to="/hitung-biaya"
              className="button"
              style={{ fontWeight: "normal" }}
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
