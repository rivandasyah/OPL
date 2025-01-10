
import React from "react";
import Sea from "../assets/bgSeaFreight.jpg";
import ImporSea from "../assets/importSea.png";
import "../styles/Sea.css";
import WhatsApp from "./WhatsApp";

function SeaFreight() {
  return (
    <div>
      <div className="image-container-air">
        <img
          src={Sea}
          alt="Sea Freight Background"
          className="image-air bg-air"
        />
        <div className="overlay-air"></div>
        <div className="overlay-content-air">
          <p className="tagline-air">SEA FREIGHT</p>
        </div>
      </div>

      {/* Details Section */}
      <section className="details-section-sea">
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
        <h2 className="tagline tagline-import">PROSES IMPORT</h2>
        <div className="process-content">
          <img
            src={ImporSea}
            alt="Proses Pengiriman via Laut"
            className="import-image-sea"
          />
        </div>
        <div className="overlay-sea"></div>
      </div>

      <WhatsApp />
    </div>
  );
}

export default SeaFreight;
