import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import CryptoEscrow from "../components/Crypto-escrow";
import Marketplace from "../components/Marketplace";
import TitleServices from "../components/TitleServices";

const App = () => {
  return (
   <>
   <Navbar />
   <Hero />
   <CryptoEscrow />
   <Marketplace />
   <TitleServices />
   
   </>
  );
};

export default App;
