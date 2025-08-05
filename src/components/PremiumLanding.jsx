import React from "react";
import { motion } from "framer-motion";

export default function PremiumLanding() {
  // 3D card animation props
  const cardProps = {
    whileHover: {
      rotateY: 10,
      rotateX: 8,
      scale: 1.06,
      boxShadow: "0 12px 24px rgba(0,0,0,0.15)",
    },
    transition: { type: "spring", stiffness: 260, damping: 24 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-blue-100 relative overflow-x-hidden">
      {/* Animated decorative shapes */}
      <motion.div
        className="absolute left-0 top-0 w-40 h-40 rounded-3xl bg-cyan-200 opacity-60 shadow-xl"
        animate={{ x: [0, 10, 0], y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
      ></motion.div>
      <motion.div
        className="absolute right-0 top-0 w-28 h-28 bg-blue-300 rounded-2xl opacity-40"
        animate={{ x: [0, -8, 0], y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
      ></motion.div>
      <motion.div
        className="absolute left-[45vw] top-20 w-12 h-12 bg-orange-200 rounded-full opacity-80"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      ></motion.div>
      <motion.div
        className="absolute right-10 bottom-32 w-20 h-20 bg-indigo-100 rounded-full opacity-60"
        animate={{ y: [0, -12, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      ></motion.div>

      {/* Header */}
      <header className="flex items-center justify-between px-8 py-4 z-10 relative">
        <div className="flex items-center space-x-2">
          {/* Logo */}
          <motion.div
            className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center shadow-lg logo-3d"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
          >
            <span className="font-bold text-white text-2xl">P</span>
          </motion.div>
          <span className="text-xl font-semibold tracking-wide text-gray-800">MYBRAND</span>
        </div>
        <nav className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <a href="#about" className="hover:text-blue-600 transition">About</a>
          <a href="#services" className="hover:text-blue-600 transition">Services</a>
          <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
        </nav>
        <button className="bg-blue-500 text-white px-6 py-2 rounded-full shadow transition hover:bg-blue-600">
          Get Started
        </button>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center text-center py-24 lg:py-32 relative z-10">
        <h1 className="text-3xl md:text-5xl font-extrabold text-cyan-700 mb-6 tracking-tight drop-shadow-2xl">
          BUZZ WORTHY STRATEGIES
        </h1>
        <h2 className="text-2xl md:text-4xl font-semibold text-blue-500 mb-3">
          FUEL YOUR MARKETING JOURNEY
        </h2>
        <h3 className="text-xl md:text-2xl font-bold text-gray-700 mb-6">
          MAKE YOUR BOOK <span className="text-blue-800">BESTSELLER</span>
        </h3>
        <motion.p
          className="max-w-lg mx-auto text-lg text-gray-500 mb-8"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.4 }}
        >
          Bridging the gap between good to great, make your book the bestseller
        </motion.p>
        <motion.a
          href="#learn"
          className="inline-block mt-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:scale-105 transition"
          whileHover={{ scale: 1.08 }}
        >
          Learn More
        </motion.a>
      </section>

      {/* What We Do */}
      <section className="bg-blue-900 py-20 px-4" id="services">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mx-auto mb-8 w-20 h-20 flex items-center justify-center bg-white rounded-full shadow-2xl">
            {/* Example: icon */}
            <svg className="w-12 h-12 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M12 4v16m8-8H4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 tracking-tight">
            WHAT WE DO
          </h2>
          <p className="text-blue-200 text-lg mb-10">
            Providing tailored digital marketing, branding, and creative content solutions to supercharge your business.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <motion.div className="w-60 bg-white rounded-lg shadow-lg p-6 cursor-pointer"
              {...cardProps}>
              <h3 className="text-xl font-bold text-blue-700 mb-2">Brand Strategy</h3>
              <p className="text-gray-600">Customized plans to elevate your brand and reach your target audience effectively.</p>
            </motion.div>
            <motion.div className="w-60 bg-white rounded-lg shadow-lg p-6 cursor-pointer"
              {...cardProps}>
              <h3 className="text-xl font-bold text-blue-700 mb-2">Content Marketing</h3>
              <p className="text-gray-600">Engage your audience and grow your reputation through powerful storytelling.</p>
            </motion.div>
            <motion.div className="w-60 bg-white rounded-lg shadow-lg p-6 cursor-pointer"
              {...cardProps}>
              <h3 className="text-xl font-bold text-blue-700 mb-2">Growth Hacking</h3>
              <p className="text-gray-600">Creative campaigns designed to deliver measurable, buzz-worthy results fast.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact/CTA */}
      <footer className="py-10 bg-blue-100 text-center relative z-10">
        <h4 className="text-lg font-semibold text-gray-800 mb-2">Ready to accelerate your growth?</h4>
        <motion.button
          className="mt-3 bg-cyan-600 text-white px-6 py-2 rounded-full font-bold shadow-md hover:bg-cyan-700 transition"
          whileHover={{ scale: 1.08, backgroundColor: "rgb(6,182,212)" }}
        >
          Contact Us
        </motion.button>
        <p className="mt-6 text-gray-400 text-sm">© {new Date().getFullYear()} MYBRAND. All rights reserved.</p>
      </footer>
    </div>
  );
}
