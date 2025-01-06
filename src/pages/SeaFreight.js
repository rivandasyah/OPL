import React from "react";
import Sea from "../assets/bgSea.jpg";
import Truk from "../assets/bgSeaTruck.jpg";
import ImporSea from "../assets/importSea.png";
import "../styles/Sea.css";

function SeaFreight() {
  return (
    <div>
      {/* Hero Section */}
      <div className="image-container">
        <img src={Sea} alt="Sea Freight Background" className="image bg-sea" />
        <div className="overlay"></div>
        <div className="overlay-content center-content">
          <p className="tagline">SEA FREIGHT</p>
        </div>
      </div>

      {/* Details Section */}
      <section className="details-section">
        <p>
          Sea Freight Service adalah pilihan yang tepat untuk pengiriman barang
          dalam jumlah besar atau barang yang tidak terlalu sensitif terhadap
          waktu, dengan menggunakan kapal sebagai alat transportasinya.
        </p>
        <div className="freight-types">
          <div className="freight-type">
            <h3>LCL (Less Container Load)</h3>
            <p>
              LCL adalah layanan pengiriman barang melalui jalur laut yang
              menggabungkan banyak barang kiriman dari berbagai pengirim lainnya
              yang dimuat dalam satu kontainer.
            </p>
          </div>
          <div className="freight-type">
            <h3>FCL (Full Container Load)</h3>
            <p>
              FCL adalah layanan pengiriman angkutan kontainer, yang tidak
              menggabungkan barang kiriman dari satu pengirim dengan pengirim
              yang lain. Sehingga muatan dalam satu kontainer ini penuh, milik
              satu orang pengirim saja.
            </p>
          </div>
        </div>
      </section>

      {/* Import Process Section */}
      <div className="import-section">
        <div className="image-container">
          {/* Background: bgSeaTruck */}
          <img src={Truk} alt="Background Truck" className="image bg-sea-truck" />
          <div className="overlay"></div>
          {/* Tagline on bgSeaTruck */}
          <div className="overlay-content center-import-content">
            <p className="tagline tagline-import">PROSES IMPORT</p>
            <img src={ImporSea} alt="Proses Pengiriman via Laut" className="import-image" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SeaFreight;