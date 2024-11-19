import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      {/* Navigation Bar */}
      <nav className="fixed top-0 z-50 w-full bg-white/80 backdrop-blur-md shadow-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          {/* Logo */}
          <a href="/" className="flex items-center text-2xl font-bold text-orange-600">
            <img src="/logo.jpeg" alt="logo" className="h-8 w-8 mr-2" /> ProVest
          </a>

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
            <div className="flex items-center gap-1 text-sm font-medium text-gray-700 cursor-pointer hover:text-orange-600">
              Buy
              <ChevronDown className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-1 text-sm font-medium text-gray-700 cursor-pointer hover:text-orange-600">
              Sell
              <ChevronDown className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-1 text-sm font-medium text-gray-700 cursor-pointer hover:text-orange-600">
              For Agents
              <ChevronDown className="h-4 w-4" />
            </div>
            <div className="text-sm font-medium text-gray-700 cursor-pointer hover:text-orange-600">
              Title & Escrow
            </div>
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <button className="text-sm font-medium text-gray-600 hover:text-gray-800">
              Open Escrow
            </button>
            <button className="rounded-full bg-orange-600 px-4 py-2 text-sm font-medium text-white hover:bg-orange-500">
              SIGN IN
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white shadow-md">
            <div className="flex flex-col items-start gap-4 p-4">
              <div className="flex items-center gap-1 text-sm font-medium text-gray-700 cursor-pointer hover:text-orange-600">
                Buy
                <ChevronDown className="h-4 w-4" />
              </div>
              <div className="flex items-center gap-1 text-sm font-medium text-gray-700 cursor-pointer hover:text-orange-600">
                Sell
                <ChevronDown className="h-4 w-4" />
              </div>
              <div className="flex items-center gap-1 text-sm font-medium text-gray-700 cursor-pointer hover:text-orange-600">
                For Agents
                <ChevronDown className="h-4 w-4" />
              </div>
              <div className="text-sm font-medium text-gray-700 cursor-pointer hover:text-orange-600">
                Title & Escrow
              </div>
              <button className="text-sm font-medium text-gray-600 hover:text-gray-800">
                Open Escrow
              </button>
              <button className="rounded-full bg-orange-600 px-4 py-2 text-sm font-medium text-white hover:bg-orange-500">
                SIGN IN
              </button>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
