import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import TentangKami from "./components/TentangKami.js";
import Footer from "./components/Footer";
import React from "react";
import AirFreight from "./pages/AirFreight";
import SeaFreight from "./pages/SeaFreight";
import CstClear from "./pages/CstClear";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tentang-kami" element={<TentangKami />} />
        <Route path="/layanan-air" element={<AirFreight />} />
        <Route path="/layanan-sea" element={<SeaFreight />} />
        <Route path="/layanan-customs" element={<CstClear />} />
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
