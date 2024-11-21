import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import ProvestNavbar from "../components/ProvestNavbar";
import Hero from "../components/Hero";
import Marketplace from "./pages/Marketplace";
import BuySell from "./pages/BuySell";
import AgentsListing from "./pages/AgentsListing";
import Signin from "./pages/Signin";

// Component to manage Navbar rendering
const Layout = ({ children }) => {
  const location = useLocation();

  const renderNavbar = () => {
    if (location.pathname === "/") {
      return <Navbar />; // Render Navbar for Hero page
    } else if (location.pathname !== "/signin") {
      return <ProvestNavbar />; // Render provestNavbar for other pages except Signin
    }
    return null; // No Navbar for Signin
  };

  return (
    <>
      {renderNavbar()} {/* Render the appropriate Navbar */}
      <main>{children}</main> {/* Render the main content */}
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Hero />
            </Layout>
          }
        />
        <Route
          path="/signin"
          element={
            <Layout>
              <Signin />
            </Layout>
          }
        />
        <Route
          path="/marketplace"
          element={
            <Layout>
              <Marketplace />
            </Layout>
          }
        />
        <Route
          path="/agents"
          element={
            <Layout>
              <AgentsListing />
            </Layout>
          }
        />
        <Route
          path="/buy-sell"
          element={
            <Layout>
              <BuySell />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
