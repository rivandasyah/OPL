import React from "react";
import Latar from "../assets/bgBeranda.jpg";
import Logo from "../assets/logoPutih.png";
import SeaFreight from "../assets/bgSeaFreight.jpg";
import AirFreight from "../assets/bgAirFreight.jpg";
import CustomsClearance from "../assets/bgCustomsClearance.jpg";
import ImportExport from "../assets/bgImportExport.png";
import "../styles/Home.css";
import { FaInfoCircle } from "react-icons/fa";
import HitungBiaya from "./HitungBiaya.js";

function Home() {

  return (
    <div>
      <div className="image-container-home">
        <img src={Latar} alt="Background" className="image-home" />
        <div className="overlay"></div>
        <div className="overlay-content">
          <img src={Logo} alt="Oscar Project Logistics Logo" className="logo" />
          <p className="tagline">International Freight Forwarding</p>
        </div>
      </div>

      <div className="services-container">
        <h2 className="services-title">Layanan Kami</h2>
        <p className="services-subtitle">
          Solusi masalah pengiriman barang Anda
        </p>
        <div className="services">
          <div className="service">
            <img src={SeaFreight} alt="Sea Freight" className="service-image" />
            <h3 className="service-title">Sea Freight</h3>
            <a className="service-link" href="/layanan-sea-freight">
              Lihat Selengkapnya
            </a>
          </div>
          <div className="service">
            <img src={AirFreight} alt="Air Freight" className="service-image" />
            <h3 className="service-title">Air Freight</h3>
            <a className="service-link" href="/layanan-air-freight">
              Lihat Selengkapnya
            </a>
          </div>
          <div className="service">
            <img
              src={CustomsClearance}
              alt="Customs Clearance"
              className="service-image"
            />
            <h3 className="service-title">Customs Clearance</h3>
            <a className="service-link" href="/layanan-customs-clearance">
              Lihat Selengkapnya
            </a>
          </div>
        </div>
      </div>

      <div className="home-container">
        <section className="section service-section">
          <h2>Kami ada untuk Anda</h2>
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
                <h3>Pelayanan Profesional</h3>
                <p>
                  Selalu melayani secara profesional dengan mengutamakan
                  kenyamanan customer.
                </p>
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
                <h3>Berpengalaman</h3>
                <p>
                  Lebih dari 10 tahun melayani berbagai pengiriman barang Export
                  dan Import.
                </p>
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
                <h3>Aman dan Cepat</h3>
                <p>
                  Jasa yang ditawarkan selalu tepat waktu dan sangat menjaga
                  keamanan paket pelanggan.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section import-export-section">
          <img
            src={ImportExport}
            alt="Import and Export"
            className="import-export-image"
          />
        </section>

        <section className="calculate-section" id="hitung-biaya-section">
          <h2 style={{ color: "white" }}>Hitung Biaya Import</h2>
          <HitungBiaya/>
        </section>
      </div>
    </div>
  );
}

export default Home;
