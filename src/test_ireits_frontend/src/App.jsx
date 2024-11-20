import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Marketplace from "./pages/Marketplace";
import BuySell from "./pages/BuySell";
import AgentsListing from "./pages/AgentsListing";
import Signin from "./pages/Signin";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/agents" element={<AgentsListing />} />
        <Route path="/buy-sell" element={<BuySell />} />
      </Routes>
    </Router>
  );
};

export default App;
