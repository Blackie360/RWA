import { ChevronDown } from 'lucide-react'

export default function Navbar() {
  return (
    <div>
    {/* Navigation Bar */}
    <nav className="fixed top-0 z-50 w-full bg-white/80 backdrop-blur-md shadow-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <a href="/" className="flex items-center text-2xl font-bold text-orange-600">
          ProVest
        </a>

        {/* Navigation Links - Desktop */}
        <div className="hidden items-center gap-8 md:flex">
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
        <div className="flex items-center gap-4">
          <button className="hidden text-sm font-medium text-gray-600 hover:text-gray-800 md:block">
            Open Escrow
          </button>
          <button className="rounded-full bg-orange-600 px-4 py-2 text-sm font-medium text-white hover:bg-orange-500">
            SIGN IN
          </button>
        </div>
      </div>

      {/* Mobile Navigation Placeholder */}
      <div className="flex items-center justify-between md:hidden px-4 py-2">
        <button className="text-gray-600">
          <span className="sr-only">Open Menu</span>
          {/* You can use a menu icon (like Hamburger) here */}
          ☰
        </button>
      </div>
    </nav>
  </div>
  )
}