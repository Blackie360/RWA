import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { motion } from "framer-motion";
import { ChevronLeft, Fingerprint, Globe } from 'lucide-react';

export default function FuturisticSignin({ onComplete }) {
  const [authMethod, setAuthMethod] = useState(null);
  const navigate = useNavigate();

  const handleAuth = (method) => {
    setAuthMethod(method);
    // Simulate authentication process
    setTimeout(() => {
      onComplete();
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md sm:max-w-xs" // Adjust max width for mobile screens
      >
        <div className="relative backdrop-blur-xl bg-black/30 rounded-2xl border border-gray-800 shadow-2xl p-8">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 z-0"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-center text-white mb-8">User Registration</h2>
            <button
              onClick={() => navigate(-1)} 
              aria-label="Go back"
              className="mb-8 w-full flex items-center justify-center space-x-2 rounded-full bg-gray-800 px-6 py-3 text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5" />
              <span>Back</span>
            </button>
            <p className="mb-6 text-center text-gray-400">Choose your authentication method:</p>
            <div className="space-y-4">
              <motion.button
                aria-label="Connect with NFID"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleAuth("nfid")}
                className="w-full rounded-full bg-gradient-to-r from-blue-600 to-blue-400 px-6 py-3 text-white hover:from-blue-700 hover:to-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 shadow-lg shadow-blue-500/30"
              >
                <div className="flex items-center justify-center space-x-2">
                  <Fingerprint className="w-5 h-5" />
                  <span>Connect with NFID</span>
                </div>
              </motion.button>
              <motion.button
                aria-label="Connect with Internet Identity"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleAuth("internetIdentity")}
                className="w-full rounded-full bg-gradient-to-r from-purple-600 to-purple-400 px-6 py-3 text-white hover:from-purple-700 hover:to-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-300 shadow-lg shadow-purple-500/30"
              >
                <div className="flex items-center justify-center space-x-2">
                  <Globe className="w-5 h-5" />
                  <span>Connect with Internet Identity</span>
                </div>
              </motion.button>
            </div>
            {authMethod && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}  // Optional exit animation
                transition={{ duration: 0.3 }}
                className="mt-6 text-center text-sm text-gray-400"
              >
                Authenticating with {authMethod === "nfid" ? "NFID" : "Internet Identity"}...
              </motion.p>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
