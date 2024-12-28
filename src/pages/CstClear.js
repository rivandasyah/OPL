import React from "react";
import Customs from "../assets/bgCustoms.jpg";
import Clear from "../assets/bgClear.jpg";
import Deal from "../assets/bgDeal.jpg";
import "../styles/Custom.css";

function CstClear() {
  return (
    <div className="custom-clear-container">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="image-container">
          <img src={Customs} alt="Custom Clearance" className="image bg-customs" />
          <div className="overlay"></div>
          <div className="overlay-content center-content">
            <h1 className="tagline-import no-underline">CUSTOMS CLEARANCE</h1>
          </div>
        </div>
      </div>

      {/* Details Section */}
      <section className="details-section">
        <p>
          Custom clearance adalah serangkaian aktivitas administrasi yang berhubungan dengan kepabeanan dalam proses pengiriman barang dari satu negara ke negara lain.
        </p>
      </section>

      {/* bgClear Section with bgDeal and Content */}
      <div className="bg-clear-container">
        <div className="image-container">
          <img src={Clear} alt="Clear Background" className="image bg-clear" />
          <div className="overlay"></div>
          <div className="overlay-content bg-clear-content">
            <div className="deal-image-wrapper">
              <img src={Deal} alt="Risk Management" className="image bg-deal" />
            </div>
            <div className="text-content">
              <p>
                Proses bea cukai seringkali menjadi kendala utama yang dihadapi para pengirim. Perbedaan regulasi antar negara membutuhkan informasi dan pengalaman yang komprehensif untuk memastikan kelancaran proses pengiriman, sehingga dapat meminimalkan risiko keterlambatan dan biaya tambahan.
              </p>
              <div className="button-wrapper">
                <button className="contact-button large-button">HUBUNGI KAMI</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CstClear;