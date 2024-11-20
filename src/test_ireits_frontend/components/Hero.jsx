import { FileText } from "lucide-react";
import { Link } from "react-router-dom";
import CryptoEscrow from "../src/pages/Crypto-escrow";
import TitleServices from "./TitleServices";

export default function Hero() {
  return (
    <main className="container mx-auto px-4 pt-24">
      <div className="grid min-h-[calc(100vh-6rem)] gap-8 py-8 md:grid-cols-2 md:items-center">
        {/* Left Column */}
        <div className="space-y-8">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            24/7 Real Estate Closings
          </h1>
          <p className="text-xl text-gray-600">
            Smooth and secure transactions automated onchain
          </p>
          <button className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-medium shadow-lg transition-colors hover:bg-gray-50">
            <FileText className="h-5 w-5" />
            Drop a contract
          </button>
        </div>

        {/* Right Column - Get Started Card */}
        <div className="relative">
          <div className="rounded-2xl bg-white/80 p-8 shadow-xl backdrop-blur-sm">
            <h2 className="mb-8 text-2xl font-bold">Get Started</h2>
            <div className="space-y-4">
              <button className="w-full rounded-lg bg-gray-900 px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-800">
                I&apos;M AN AGENT
              </button>
              <button className="w-full rounded-lg bg-gray-900 px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-800">
                I&apos;M A SELLER
              </button>
              <button className="w-full rounded-lg bg-gray-900 px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-800">
                I&apos;M A BUYER
              </button>
              <Link
                to="/"
                className="mt-4 block text-center text-sm text-gray-600 transition-colors hover:text-gray-900"
              >
                I&apos;m just curious →
              </Link>
            </div>
          </div>
        </div>
      </div>
      <CryptoEscrow />
      <TitleServices />
    </main>
  );
}
