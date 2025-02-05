import React from "react";
import { Helmet } from "react-helmet";
import { useLanguage } from "./LanguageContext";
import { LogoBerwarna } from "../assets/logoBerwarna.png";

const HelmetConfig = () => {
  const { translations } = useLanguage();

  return (
    <Helmet>
      <title>{"Oscar Project Logistics"}</title>

      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <meta
        name="description"
        content={translations.aboutUsCompanyProfileDesc}
      />
      <meta
        name="keywords"
        content="oscar project logistics, opl indonesia, jasa pengiriman barang ke luar negeri, logistik internasional, sea freight, sea freight service, air freight, air freight service, customs clearance, customs clearance Indonesia, import export, jasa import barang. cek ongkir cargo, cargo, cargo opl indonesia, hitung biaya impor barang"
      />
      <meta name="author" content="Oscar Project Logistics" />

      <link rel="canonical" href="https://www.oplindonesia.com/" />

      <meta name="robots" content="index, follow" />

      <meta property="og:title" content="Oscar Project Logistics" />
      <meta
        property="og:description"
        content={translations.aboutUsCompanyProfileDesc}
      />
      <meta property="og:image" content={LogoBerwarna} />
      <meta property="og:url" content="https://www.oplindonesia.com/" />
      <meta property="og:type" content="website" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Oscar Project Logistics" />
      <meta
        name="twitter:description"
        content={translations.aboutUsCompanyProfileDesc}
      />
      <meta name="twitter:image" content={LogoBerwarna} />
    </Helmet>
  );
};

export default HelmetConfig;
