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
          minimum: `Minimum untuk negara ${negara.toUpperCase()} via ${via.toUpperCase()} adalah ${min} ${via === "udara" ? "kg" : "m³"}`,
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
      newErrorMessages.minimum = `Minimum untuk negara ${negara.toUpperCase()} via ${via.toUpperCase()} adalah ${negaraData[negara][via].min} ${
        via === "udara" ? "kg" : "m³"
      }`;
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

      <div className="form-group">
        {biayaPengiriman !== null && (
          <div style={{ color: "black", fontSize: "18px", marginTop: "30px" }}>
            <strong>
              Biaya Pengiriman: Rp. {biayaPengiriman.toLocaleString()}
            </strong>
          </div>
        )}
      </div>
    </div>
  );
};

export default HitungBiaya;
