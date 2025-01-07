import React from "react";
import "../styles/TentangKami.css";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import HubungiKami from "../assets/bgHubungiKami.jpg";
import TentangPerusahaan from "../assets/bgTentangPerusahaan.jpg";

function TentangKami() {
  return (
    <div>
      <div className="image-container-tentang">
        <img
          src={HubungiKami}
          alt="Background Hubungi Kami"
          className="image-tentang"
        />
        <div className="overlay"></div>
        <div className="overlay-content">
          <h2>Hubungi Kami</h2>
        </div>
      </div>
      <div className="profil-perusahaan-section">
        <div className="profil-content">
          <div className="profil-image-container">
            <img
              src={TentangPerusahaan}
              alt="Plane and Boxes"
              className="profil-image"
            />
          </div>
          <div className="profil-text">
            <h2>Profil Perusahaan</h2>
            <p>
              OPL Indonesia adalah perusahaan jasa logistik yang telah
              berpengalaman sejak tahun 2016. Dengan komitmen untuk memberikan
              solusi logistik yang efisien dan terpercaya. Dengan menyediakan
              layanan Jasa Handling Import, Sewa Undername Export-Import, Sea
              Freight, Air Freight, Import Door to Door dan Domestik.
            </p>
            <div className="profile-contact">
              <div className="button-icon">
                <div className="contact-icons message-icon">
                  <FaEnvelope />
                </div>
                <div className="button-text">
                  <h1>Kirimkan Pesan</h1>
                  <span>OPL_Indonesia</span>
                </div>
              </div>
              <div className="button-icon">
                <div className="contact-icons call-icon">
                  <FaPhoneAlt />
                </div>
                <div className="button-text">
                  <h1>Hubungi Kami</h1>
                  <span>+62 812 3451 5052</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TentangKami;
