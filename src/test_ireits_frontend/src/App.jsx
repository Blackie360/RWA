import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import CryptoEscrow from "../components/Crypto-escrow";
import Marketplace from "../components/Marketplace";
import TitleServices from "../components/TitleServices";
import BuySell from "../components/BuySell";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/crypto-escrow" element={<CryptoEscrow />} />
        <Route path="/title-services" element={<TitleServices />} />
        <Route path="/buy-sell" element={<BuySell />} />
      </Routes>
    </>
  );
};

export default App;
