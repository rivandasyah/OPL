import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import TentangKami from "./components/TentangKami.js";
import Footer from "./components/Footer";
import React from 'react';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tentang-kami" element={<TentangKami/>} />
      </Routes> 
      <Footer/>
    </Router>
  );
}

export default App;
