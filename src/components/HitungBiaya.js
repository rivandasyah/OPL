import React, { useState, useEffect } from "react";
import "../styles/Home.css";

const negaraData = {
  singapore: {
    udara: { price: 120000, min: 10 },
    laut: { price: 7000000, min: 1 },
  },
  malaysia: {
    udara: { price: 145000, min: 10 },
    laut: { price: 9000000, min: 1 },
  },
  shenzen: {
    udara: { price: 240000, min: 10 },
    laut: { price: 7000000, min: 3 },
  },
  yiwu: {
    udara: { price: 285000, min: 50 },
    laut: { price: 7000000, min: 1 },
  },
  guangzhou: {
    udara: { price: 185000, min: 10 },
    laut: { price: 5000000, min: 1 },
  },
  shanghai: {
    udara: { price: 240000, min: 10 },
    laut: { pirce: 9000000, min: 1 },
  },
  hongkong: {
    udara: { price: 230000, min: 10 },
    laut: { price: 9000000, min: 1 },
  },
  korea: {
    udara: { price: 230000, min: 10 },
    laut: { price: 15000000, min: 3 },
  },
  jepang: {
    udara: { price: 250000, min: 50 },
    laut: { price: 16000000, min: 3 },
  },
  taiwan: {
    udara: { price: 230000, min: 10 },
    laut: { price: 17000000, min: 1 },
  },
  bangkok: {
    udara: { price: 165000, min: 10 },
    laut: { price: 8500000, min: 1 },
  },
  belanda: {
    udara: { price: 260000, min: 50 },
    laut: { price: 19650000, min: 3 },
  },
  inggris: {
    udara: { price: 260000, min: 50 },
    laut: { price: 18000000, min: 3 },
  },
  italy: {
    udara: { price: 270000, min: 50 },
    laut: { price: 18500000, min: 3 },
  },
  germany: {
    udara: { price: 270000, min: 50 },
    laut: { price: 18500000, min: 3 },
  },
  amerika: {
    udara: { price: 260000, min: 50 },
    laut: { price: 18500000, min: 3 },
  },
  australia: {
    udara: { price: 240000, min: 50 },
    laut: { price: 17350000, min: 3 },
  },
  vietnam: {
    udara: { price: 230000, min: 50 },
    laut: { price: 16350000, min: 3 },
  },
  india: {
    udara: { price: 275000, min: 50 },
    laut: { price: 17000000, min: 3 },
  },
};

const HitungBiaya = () => {
  const [negara, setNegara] = useState("");
  const [via, setVia] = useState("");
  const [minimum, setMinimum] = useState("");
  const [namaBarang, setNamaBarang] = useState("");
  const [hargaBarang, setHargaBarang] = useState("");
  const [errorMessages, setErrorMessages] = useState({
    negara: "",
    via: "",
    minimum: "",
  });
  const [biayaPengiriman, setBiayaPengiriman] = useState(null);

  const formatRupiah = (angka) => {
    if (!angka) return "";
    return `Rp. ${angka.toLocaleString("id-ID")}`;
  };

  useEffect(() => {
    if (negara && via) {
      const { price, min } = negaraData[negara][via];
      setHargaBarang(price);

      if (!minimum) {
        setErrorMessages((prev) => ({
          ...prev,
          minimum: "",
        }));
      } else if (minimum < min) {
        setErrorMessages((prev) => ({
          ...prev,
          minimum: `Minimum untuk negara ${negara.toUpperCase()} via ${via.toUpperCase()} adalah ${min} ${
            via === "udara" ? "kg" : "m³"
          }`,
        }));
      }
    }
  }, [negara, via, minimum]);

  const handleCalculate = (e) => {
    e.preventDefault();

    let isValid = true;
    let newErrorMessages = { negara: "", via: "", minimum: "" };

    if (!negara) {
      newErrorMessages.negara = "Negara harus dipilih";
      isValid = false;
    }
    if (!via) {
      newErrorMessages.via = "Via harus dipilih";
      isValid = false;
    }
    if (!minimum) {
      newErrorMessages.minimum = "Minimum harus diisi";
      isValid = false;
    } else if (Number(minimum) < negaraData[negara][via].min) {
      newErrorMessages.minimum = `Minimum untuk negara ${negara.toUpperCase()} via ${via.toUpperCase()} adalah ${
        negaraData[negara][via].min
      } ${via === "udara" ? "kg" : "m³"}`;
      isValid = false;
    }
    if (!namaBarang) {
      newErrorMessages.namaBarang = "Nama barang harus dipilih";
      isValid = false;
    }

    setErrorMessages(newErrorMessages);

    if (isValid) {
      const totalBiaya = hargaBarang * Number(minimum);
      setBiayaPengiriman(totalBiaya);
    } else {
      setBiayaPengiriman(null);
    }
  };

  const whatsappMessage = `
Halo, saya ingin memesan jasa.

Negara: ${negara.toUpperCase()}
Via: ${via.toUpperCase()}
Nama barang: ${namaBarang}
Minimum: ${minimum} ${via === "udara" ? "kg" : "m³"}
Harga barang: ${formatRupiah(hargaBarang)}
Total biaya: ${formatRupiah(biayaPengiriman)}
  `;

  const whatsappLink = `https://wa.me/6283139283871?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <div className="form-card">
      <form className="calculate-form" onSubmit={handleCalculate}>
        <div className="form-group">
          <label htmlFor="negara">Negara</label>
          <select
            id="negara"
            value={negara}
            onChange={(e) => {
              const value = e.target.value;
              setNegara(value);
              setErrorMessages((prev) => ({
                ...prev,
                negara: value ? "" : "Negara harus dipilih",
              }));
            }}
          >
            <option value="">Pilih Negara</option>
            {Object.keys(negaraData).map((negaraKey) => (
              <option key={negaraKey} value={negaraKey}>
                {negaraKey.toUpperCase()}
              </option>
            ))}
          </select>
          {errorMessages.negara && (
            <div className="error-message">{errorMessages.negara}</div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="via">Via</label>
          <select
            id="via"
            value={via}
            onChange={(e) => {
              const value = e.target.value;
              setVia(value);

              if (negara && value) {
                const min = negaraData[negara][value].min;
                setErrorMessages((prev) => ({
                  ...prev,
                  via: value ? "" : "Via harus dipilih",
                  minimum:
                    minimum && minimum < min
                      ? `Minimum untuk negara ${negara.toUpperCase()} via ${value.toUpperCase()} adalah ${min} ${
                          value === "udara" ? "kg" : "m³"
                        }`
                      : "",
                }));
              } else {
                setErrorMessages((prev) => ({
                  ...prev,
                  via: value ? "" : "Via harus dipilih",
                  minimum: "",
                }));
              }
            }}
          >
            <option value="">Pilih Via</option>
            <option value="udara">UDARA</option>
            <option value="laut">LAUT</option>
          </select>
          {errorMessages.via && (
            <div className="error-message">{errorMessages.via}</div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="namaBarang">Nama Barang</label>
          <select
            id="namaBarang"
            value={namaBarang}
            onChange={(e) => {
              setNamaBarang(e.target.value);
              setErrorMessages((prev) => ({
                ...prev,
                namaBarang: e.target.value ? "" : "Nama barang harus dipilih",
              }));
            }}
          >
            <option value="">Pilih Nama Barang</option>
            <option value="generalCargo">GENERAL CARGO</option>
            <option value="spareParts">SPARE PARTS MURNI</option>
          </select>
          {errorMessages.namaBarang && (
            <div className="error-message">{errorMessages.namaBarang}</div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="minimum">Minimum</label>
          <input
            id="minimum"
            type="number"
            value={minimum}
            onChange={(e) => {
              const value = e.target.value;
              setMinimum(value);

              if (via && negara) {
                const min = negaraData[negara][via].min;
                setErrorMessages((prev) => ({
                  ...prev,
                  minimum:
                    value >= min
                      ? ""
                      : `Minimum untuk negara ${negara.toUpperCase()} via ${via.toUpperCase()} adalah ${min} ${
                          via === "udara" ? "kg" : "m³"
                        }`,
                }));
              }
            }}
            placeholder="Masukkan minimum"
          />
          {errorMessages.minimum && (
            <div className="error-message">{errorMessages.minimum}</div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="hargaBarang">Harga Barang (Otomatis)</label>
          <input
            id="hargaBarang"
            type="text"
            value={formatRupiah(hargaBarang)}
            readOnly
            placeholder="Harga barang akan muncul setelah memilih negara dan via"
          />
        </div>

        <button type="submit" className="calculate-button">
          Hitung Biaya
        </button>
      </form>

      {biayaPengiriman !== null && (
        <div className="price-feedback-container">
          <div className="price-feedback-total">
            <p>
              <strong>Total Biaya:</strong> {formatRupiah(biayaPengiriman)}
            </p>
          </div>
          <div className="price-feedback-row">
            <span className="price-feedback-text">
              Apakah harga kami sesuai dengan anda?
            </span>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="price-feedback-whatsapp-button"
            >
              <svg
                fill="#ffffff"
                height="24px"
                width="24px"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 308.00 308.00"
                stroke="#ffffff"
                strokeWidth="0.003"
                className="price-feedback-whatsapp-icon"
              >
                <g id="SVGRepo_iconCarrier">
                  <g id="XMLID_468_">
                    <path
                      id="XMLID_469_"
                      d="M227.904,176.981c-0.6-0.288-23.054-11.345-27.044-12.781c-1.629-0.585-3.374-1.156-5.23-1.156 c-3.032,0-5.579,1.511-7.563,4.479c-2.243,3.334-9.033,11.271-11.131,13.642c-0.274,0.313-0.648,0.687-0.872,0.687 c-0.201,0-3.676-1.431-4.728-1.888c-24.087-10.463-42.37-35.624-44.877-39.867c-0.358-0.61-0.373-0.887-0.376-0.887 c0.088-0.323,0.898-1.135,1.316-1.554c1.223-1.21,2.548-2.805,3.83-4.348c0.607-0.731,1.215-1.463,1.812-2.153 c1.86-2.164,2.688-3.844,3.648-5.79l0.503-1.011c2.344-4.657,0.342-8.587-0.305-9.856c-0.531-1.062-10.012-23.944-11.02-26.348 c-2.424-5.801-5.627-8.502-10.078-8.502c-0.413,0,0,0-1.732,0.073c-2.109,0.089-13.594,1.601-18.672,4.802 c-5.385,3.395-14.495,14.217-14.495,33.249c0,17.129,10.87,33.302,15.537,39.453c0.116,0.155,0.329,0.47,0.638,0.922 c17.873,26.102,40.154,45.446,62.741,54.469c21.745,8.686,32.042,9.69,37.896,9.69c0.001,0,0.001,0,0.001,0 c2.46,0,4.429-0.193,6.166-0.364l1.102-0.105c7.512-0.666,24.02-9.22,27.775-19.655c2.958-8.219,3.738-17.199,1.77-20.458 C233.168,179.508,230.845,178.393,227.904,176.981z"
                    ></path>
                    <path
                      id="XMLID_470_"
                      d="M156.734,0C73.318,0,5.454,67.354,5.454,150.143c0,26.777,7.166,52.988,20.741,75.928L0.212,302.716 c-0.484,1.429-0.124,3.009,0.933,4.085C1.908,307.58,2.943,308,4,308c0.405,0,0.813-0.061,1.211-0.188l79.92-25.396 c21.87,11.685,46.588,17.853,71.604,17.853C240.143,300.27,308,232.923,308,150.143C308,67.354,240.143,0,156.734,0z M156.734,268.994c-23.539,0-46.338-6.797-65.936-19.657c-0.659-0.433-1.424-0.655-2.194-0.655c-0.407,0-0.815,0.062-1.212,0.188 l-40.035,12.726l12.924-38.129c0.418-1.234,0.209-2.595-0.561-3.647c-14.924-20.392-22.813-44.485-22.813-69.677 c0-65.543,53.754-118.867,119.826-118.867c66.064,0,119.812,53.324,119.812,118.867 C276.546,215.678,222.799,268.994,156.734,268.994z"
                    ></path>
                  </g>
                </g>
              </svg>
              <span className="price-feedback-whatsapp-text">Call Us</span>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default HitungBiaya;
