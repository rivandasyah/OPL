import React, { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const storedLanguage = localStorage.getItem("language") || "id";
  const [language, setLanguage] = useState(storedLanguage);

  const languages = {
    id: {
      home: "Beranda",
      service: "Layanan",
      airFreightService: "Air Freight Service",
      seaFreightService: "Sea Freight Service",
      customsClearance: "Customs Clearance",
      aboutUs: "Tentang Kami",
      calculate: "Hitung Biaya",
      homeService: "Layanan Kami",
      homeServiceDesc: "Solusi masalah pengiriman barang Anda",
      airService: "Air Freight",
      seaService: "Sea Service",
      homeSeeMore: "Lihat Selengkapnya",
      homeHelp: "Kami ada untuk Anda",
      homeHelpOne: "Pelayanan  Profesional",
      homeHelpOneDesc:
        "Selalu melayani secara profesional dengan mengutamakan kenyamanan custumer",
      homeHelpTwo: "Berpengalaman",
      homeHelpTwoDesc:
        "Lebih dari 10 tahun melayanin berbagai pengiriman barang-barang Export dan Import",
      homeHelpThree: "Aman dan Cepat",
      homeHelpThreeDesc:
        "Jasa yang ditawarkan selalu tepat waktu dan sangat menjaga keamanan paket pelanggan",
      homeCalculate: "Hitung Biaya Import",
      homeCalculateCountry: "Negara",
      homeCalculateChooseCountry: "Pilih Negara",
      homeCalculateMustChooseCountry: "Negara harus dipilih",
      homeCalculateVia: "Via",
      homeCalculateChooseVia: "Pilih Via",
      homeCalculateAir: "UDARA",
      homeCalculateSea: "LAUT",
      homeCalculateMustChooseVia: "Via harus dipilih",
      homeCalculateItemName: "Nama Barang",
      homeCalculateChooseItemName: "Pilih Nama Barang",
      homeCalculateMustChooseItemName: "Nama barang harus dipilih",
      homeCalculateInputMinimum: "Masukkan Minimum",
      homeCalculateMinimum: "Minimum",
      homeCalculateMustChooseMinimum: "Minimum harus diisi",
      homeCalculateErrorMinimum: "Minimum untuk negara",
      homeCalculateErrorIs:
      "adalah",
      homeCalculateItemPrice: "Harga Barang (Otomatis)",
      homeCalculateItemPriceWithout: "Harga Barang",
      homeCalculateInputItemPrice:
        "Harga barang akan muncul setelah memilih negara dan via",
      homeCalculateTotalPrice: "Total Biaya:",
      homeCalculateTotal: "Total Biaya",
      homeCalculateWhatsapp: "Apakah harga kami sesuai dengan anda?",
      homeCalculateCallUs: "Call Us",
      homeCalculateWhatsappMessage: "Halo, saya ingin memesan jasa.",
      homeCalculateWhatsappMessageTwo: "Terima kasih! Mohon info lebih lanjut. 🙏",
      footerDesc:
        ["Selamat Datang di ", "Oscar Project Logistics", ", Kami berkomitmen untuk memberikan solusi logistik terbaik kepada Anda, dengan pelayanan yang sepenuh hati."],
      contactUs: "Hubungi Kami",
      footerPhone: "+6281234515052",
      footerEmail: "info.oscarlogistics@gmail.com",
      footerAddress:
        "Jalan Raya Ciangsana Raya No.178,\nKec. Gunung Putri, Bogor, Indonesia, 16968",
      airFreightDesc:
        "Air Freight Service adalah solusi yang sangat baik untuk pengiriman barang yang memerlukan kecepatan, keamanan, dan jangkauan yang luas dengan memanfaatkan pesawat terbang sebagai alat transportasi utama. Waktu pengiriman jauh lebih singkat dibandingkan dengan pengiriman laut atau darat, terutama untuk jarak jauh.",
      importProcess: "PROSES IMPORT",
      seaFreightDesc:
        "Sea Freight Service adalah pilihan yang tepat untuk pengiriman barang dalam jumlah besar atau barang yang tidak terlalu sensitif terhadap waktu, dengan menggunakan kapal sebagai alat transportasinya.",
      seaFreightLcl: "LCL (Less Container Load)",
      seaFreightLclDesc:
        "LCL adalah layanan pengiriman barang melalui jalur laut yang menggabungkan banyak barang kiriman dari berbagai pengirim lainnya yang dimuat dalam satu kontainer.",
      seaFreightFcl: "FCL (Full Container Load)",
      seaFreightFclDesc:
        "FCL adalah layanan pengiriman angkutan kontainer, yang tidak menggabungkan barang kiriman dari satu pengirim dengan pengirim yang lain. Sehingga muatan dalam satu kontainer ini penuh, milik satu orang pengirim saja.",
      customsClearanceDesc:
        "Custom clearance adalah serangkaian aktivitas administrasi yang berhubungan dengan kepabeanan dalam proses pengiriman barang dari satu negara ke negara lain.",
      customsClearanceDescTwo:
        "Proses bea cukai seringkali menjadi kendala utama yang dihadapi para pengirim. Perbedaan regulasi antar negara membutuhkan informasi dan pengalaman yang komprehensif untuk memastikan kelancaran proses pengiriman, sehingga dapat meminimalkan risiko keterlambatan dan biaya tambahan.",
      aboutUsCompanyProfile: "Profil Perushaan",
      aboutUsCompanyProfileDesc:
        "OPL Indonesia adalah perusahaan jasa logistik yang telah berpengalaman sejak tahun 2016. Dengan komitmen untuk memberikan solusi logistik yang efisien dan terpercaya. Dengan menyediakan layanan Jasa Handling Import, Sewa Undername Export-Import, Sea Freight, Air Freight, Import Door to Door dan Domestik.",
      aboutUsSendEmail: "Kirimkan Pesan",
      aboutUsEmail: "OPL_Indonesia",
      aboutUsPhone: "+62 812 3451 5052",
    },
    en: {
      home: "Home",
      service: "Service",
      airFreightService: "Air Freight Service",
      seaFreightService: "Sea Freight Service",
      customsClearance: "Customs Clearance",
      aboutUs: "About Us",
      calculate: "Calculate",
      homeService: "Our Service",
      homeServiceDesc: "Solution to your shipping problems",
      airService: "Air Freight",
      seaService: "Sea Service",
      homeSeeMore: "See more...",
      homeHelp: "We are here to help you",
      homeHelpOne: "Professional Service",
      homeHelpOneDesc:
        "We are committed to providing professional service with a focus on customer comfort",
      homeHelpTwo: "Experienced",
      homeHelpTwoDesc:
        "Our company has a proven track record of over 10 years in delivering specialized export and import services",
      homeHelpThree: "Secure and Expeditious",
      homeHelpThreeDesc:
        "We are committed to providing prompt and secure delivery services for our valued customers",
      homeCalculate: "Calculate Import Costs",
      homeCalculateCountry: "Country",
      homeCalculateChooseCountry: "Choose Country",
      homeCalculateMustChooseCountry: "Country must be selected",
      homeCalculateVia: "Via",
      homeCalculateChooseVia: "Choose Via",
      homeCalculateAir: "AIR",
      homeCalculateSea: "SEA",
      homeCalculateMustChooseVia: "Via must be selected",
      homeCalculateItemName: "Item Name",
      homeCalculateChooseItemName: "Choose Item Name",
      homeCalculateMustChooseItemName: "Item Name must be selected",
      homeCalculateInputMinimum: "Minimum input required",
      homeCalculateMinimum: "Minimum",
      homeCalculateMustChooseMinimum: "Minimum is required",
      homeCalculateErrorMinimum:
        "The minimum weight for shipments to",
      homeCalculateErrorIs:
      "is",
      homeCalculateItemPrice: "Item Price (Automatic)",
      homeCalculateItemPriceWithout: "Item Price",
      homeCalculateInputItemPrice:
        "The item price will appear after selecting the country and shipping method.",
      homeCalculateTotalCost: "Total Cost: Rp. ",
      homeCalculateTotal: "Total Cost",
      homeCalculateWhatsapp: "Is our price suitable for you?",
      homeCalculateCallUs: "Call Us",
      homeCalculateWhatsappMessage: "Hello, I would like to order a shipping service.",
      homeCalculateWhatsappMessageTwo: "Thank you! Please provide more details.",
      footerDesc:
        ["Welcome to ", "Oscar Project Logistics", ", We are dedicated to providing you with the best logistics solutions, backed by our unwavering commitment to exceptional service"],
      contactUs: "Contact Us",
      footerPhone: "+6281234515052",
      footerEmail: "info.oscarlogistics@gmail.com",
      footerAddress:
      "Jalan Raya Ciangsana Raya No.178,\nKec. Gunung Putri, Bogor, Indonesia, 16968",
      airFreightDesc:
        "Air freight service offers a superior solution for shipments requiring rapid delivery, enhanced security, and extensive global reach, leveraging aircraft as the primary mode of transportation. Compared to ocean or land freight, delivery times are significantly reduced, especially for long-haul distances.",
      importProcess: "IMPORT PROCESS",
      seaFreightDesc:
        "For cost-effective and efficient transportation of large-scale shipments, sea freight is the preferred method, utilizing the vast capabilities of ocean carriers.",
      seaFreightLcl: "LCL (Less Container Load)",
      seaFreightLclDesc:
        "Less than Container Load (LCL) is a maritime transportation service that involves the consolidation of smaller shipments from multiple consignors into a single container, providing a practical and economical shipping option for businesses with less-than-container-load quantities.",
      seaFreightFcl: "FCL (Full Container Load)",
      seaFreightFclDesc:
        "Full Container Load (FCL) is a shipping service where a single shipper exclusively occupies an entire shipping container. The container's entire capacity is dedicated to one shipper's cargo,  This service offers greater control, security, and efficiency in the transportation of goods.",
      customsClearanceDesc:
        "Customs clearance encompasses a series of administrative procedures pertaining to customs regulations within the context of international goods transportation.",
      customsClearanceDescTwo:
        "Customs clearance is a complex process that can lead to delays and increased costs if not handled properly. A comprehensive understanding of international regulations is essential for efficient clearance.",
      aboutUsCompanyProfile: "Company Profile",
      aboutUsCompanyProfileDesc:
        "As a leading logistics provider since 2016, OPL Indonesia is dedicated to tailoring efficient and reliable logistics solutions to meet your specific needs. Our services encompass import handling, export-import undername services, sea freight, air freight, import door-to-door, and domestic transportation.",
      aboutUsSendEmail: "Send Message",
      aboutUsEmail: "OPL_Indonesia",
      aboutUsPhone: "+62 812 3451 5052",
    },
  };

  const toggleLanguage = () => {
    const newLanguage = language === "id" ? "en" : "id";
    setLanguage(newLanguage);
    localStorage.setItem("language", newLanguage); //
  };

  const translations = languages[language];
  console.log(translations.homeCalculateChooseVia);

  return (
    <LanguageContext.Provider
      value={{ language, toggleLanguage, translations }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
