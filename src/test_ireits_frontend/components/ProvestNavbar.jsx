import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ProvestNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClose = () => {
    setMenuOpen(false);
  };

  return (
    <div>
      {/* Navigation Bar */}
      <nav className="fixed top-0 z-50 w-full bg-white/80 backdrop-blur-md shadow-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          {/* Logo */}
          <Link to="/" className="flex items-center text-2xl font-bold text-orange-600">
            <img src="/logo.jpeg" alt="logo" className="h-12 w-12 mr-2" /> ProVest
          </Link>

          {/* Display Provest Token Value */}
          <div className="hidden md:block text-sm font-medium text-gray-700">
            1 Provest Token = $1
          </div>

          {/* Hamburger Menu - Mobile */}
          <button
            className="text-gray-600 md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="sr-only">Toggle Menu</span>
            ☰
          </button>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/marketplace"
              className="text-sm font-medium text-gray-700 cursor-pointer hover:text-orange-600"
            >
              Marketplace
            </Link>
            <Link
              to="/buy-sell"
              className="text-sm font-medium text-gray-700 cursor-pointer hover:text-orange-600"
            >
              Buy/Sell
            </Link>
            <Link
              to="/agents"
              className="text-sm font-medium text-gray-700 cursor-pointer hover:text-orange-600"
            >
              For Agents
            </Link>
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <button className="text-sm font-medium text-gray-600 hover:text-gray-800">
              Open Escrow
            </button>
            <Link
              to="/signin" // Sign In Route
              className="rounded-full bg-orange-600 px-4 py-2 text-sm font-medium text-white hover:bg-orange-500"
            >
              SIGN IN
            </Link>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white shadow-md">
            <div className="flex flex-col items-start gap-4 p-4">
              {/* Close Button (X) */}
              <button
                onClick={handleMenuClose}
                className="text-gray-600 hover:text-gray-800 text-xl self-end"
              >
                &times;
              </button>

              <Link
                to="/marketplace"
                className="text-sm font-medium text-gray-700 cursor-pointer hover:text-orange-600"
                onClick={handleMenuClose} // Close menu on link click
              >
                Marketplace
              </Link>
              <Link
                to="/buy-sell"
                className="text-sm font-medium text-gray-700 cursor-pointer hover:text-orange-600"
                onClick={handleMenuClose} // Close menu on link click
              >
                Buy/Sell
              </Link>
              <Link
                to="/agents"
                className="text-sm font-medium text-gray-700 cursor-pointer hover:text-orange-600"
                onClick={handleMenuClose} // Close menu on link click
              >
                For Agents
              </Link>
              <button className="text-sm font-medium text-gray-600 hover:text-gray-800">
                Open Escrow
              </button>
              <Link
                to="/signin" // Sign In Route for Mobile Menu
                className="rounded-full bg-orange-600 px-4 py-2 text-sm font-medium text-white hover:bg-orange-500"
                onClick={handleMenuClose} // Close menu on link click
              >
                SIGN IN
              </Link>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default ProvestNavbar;
