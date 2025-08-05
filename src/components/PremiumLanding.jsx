import React from "react";
import { motion } from "framer-motion";

export default function PremiumLanding() {
  // 3D card animation props
  const cardProps = {
    whileHover: {
      rotateY: 14,
      rotateX: -8,
      scale: 1.08,
      boxShadow: "0 16px 48px rgba(37, 99, 235, 0.25)",
      background: "rgba(255 255 255 / 0.85)",
      backdropFilter: "blur(20px)",
    },
    transition: { type: "spring", stiffness: 280, damping: 24 },
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-cyan-50 via-white to-blue-100 overflow-x-hidden">
      {/* Animated decorative shapes with multi-layer glow */}
      <motion.div
        className="absolute left-0 top-0 w-40 h-40 rounded-3xl bg-cyan-400 opacity-40 shadow-2xl blur-3xl"
        animate={{ x: [0, 15, 0], y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute left-0 top-6 w-32 h-32 rounded-2xl bg-cyan-300 opacity-60 shadow-2xl blur-xl"
        animate={{ x: [0, 10, 5, 0], y: [0, 10, 0, 6] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-10 top-16 w-36 h-36 rounded-3xl bg-blue-300 opacity-50 shadow-xl blur-2xl"
        animate={{ y: [0, 14, 0] }}
        transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-10 bottom-20 w-28 h-28 rounded-full bg-indigo-200 opacity-40 shadow-lg blur-lg"
        animate={{ y: [0, -12, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      />

      {/* Header */}
      <header className="z-20 relative flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
        <div className="flex items-center space-x-3">
          {/* Logo 3D bounce */}
          <motion.div
            className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center shadow-lg shadow-blue-400"
            animate={{
              rotate: [0, 8, -8, 0],
              y: [0, -2, 2, 0],
              boxShadow: [
                "0 0 10px 4px rgba(59,130,246,0.7)",
                "0 0 15px 6px rgba(37,99,235,0.9)",
                "0 0 10px 4px rgba(59,130,246,0.7)",
              ],
            }}
            transition={{ repeat: Infinity, duration: 9, ease: "easeInOut" }}
          >
            <span className="font-extrabold text-white text-2xl select-none">P</span>
          </motion.div>
          <span className="text-xl font-extrabold tracking-widest text-blue-900 select-none">MYBRAND</span>
        </div>
        <nav className="hidden md:flex space-x-10 text-blue-700 font-semibold">
          <a href="#about" className="hover:text-cyan-700 transition">About</a>
          <a href="#services" className="hover:text-cyan-700 transition">Services</a>
          <a href="#contact" className="hover:text-cyan-700 transition">Contact</a>
        </nav>
        <button className="bg-blue-600 text-white px-8 py-3 rounded-full shadow-lg shadow-cyan-500/80 transition transform hover:scale-105 hover:shadow-cyan-500/90">
          Get Started
        </button>
      </header>

      {/* Hero Section */}
      <section className="relative text-center py-24 md:py-32 max-w-4xl mx-auto z-20 px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold text-cyan-700 drop-shadow-lg tracking-tight mb-4 leading-tight">
          BUZZ WORTHY STRATEGIES
        </h1>
        <h2 className="text-3xl md:text-5xl font-semibold text-blue-600 mb-4 drop-shadow-md">
          FUEL YOUR MARKETING JOURNEY
        </h2>
        <h3 className="text-2xl md:text-3xl font-bold text-gray-700 mb-8 drop-shadow-sm">
          MAKE YOUR BOOK <span className="text-blue-900 underline decoration-cyan-400 decoration-4">BESTSELLER</span>
        </h3>
        <motion.p
          className="text-lg md:text-xl max-w-xl mx-auto text-gray-600 drop-shadow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.6, delay: 0.4 }}
        >
          Bridging the gap between good and great, make your book the bestseller
        </motion.p>
        <motion.a
          href="#learn"
          className="inline-block mt-10 px-10 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-lg font-bold shadow-xl shadow-cyan-400/60"
          whileHover={{ scale: 1.1, boxShadow: "0 0 20px 8px rgba(14,165,233,0.6)" }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          Learn More
        </motion.a>
      </section>
    </div>
  );
}
