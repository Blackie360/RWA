import { Link } from "react-router-dom";



export default function CryptoEscrow() {
  return (
    <section className="w-full bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Crypto Escrow with Coinbase Prime
          </h2>
          <p className="mb-8 max-w-3xl text-lg text-gray-600">
            Skip early conversions, reduce exposure to market volatility, and avoid premature tax
            implications—all within a compliant, streamlined process.
          </p>
          <Link
            href="/learn-more"
            className="mb-12 rounded-full bg-blue-500 px-8 py-3 font-semibold text-white transition-colors hover:bg-blue-600"
          >
            LEARN MORE
          </Link>
          
          <div className="relative mb-8 w-full max-w-2xl">
            <img
              src="/image.png"
              alt="Cryptocurrency coins illustration"
              width={800}
              height={200}
              className="h-auto w-full"
            />
          </div>
          
          <div className="flex items-center gap-2 text-sm text-gray-600">
            Secured by
            <span className="font-semibold">coinbase</span>
            Prime
          </div>
        </div>
      </div>
    </section>
  )
}