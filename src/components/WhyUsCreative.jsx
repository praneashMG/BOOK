import React from "react";
import { motion } from "framer-motion";

// 3D tilt animation for feature cards
const cardProps = {
  whileHover: {
    rotateY: 14,
    rotateX: -8,
    scale: 1.09,
    boxShadow: "0 12px 40px rgba(37,99,235,0.18)",
    background: "rgba(219,234,254,0.95)",
  },
  transition: { type: "spring", stiffness: 250, damping: 16 },
};

const features = [
  {
    icon: (
      // Growth Chart SVG
      <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
        <path d="M4 20V10m4 10V4m4 16v-7m4 7v-5"/>
        <path d="M3 20h18"/>
      </svg>
    ),
    label: "Compelling Content",
  },
  {
    icon: (
      // Globe Strategy SVG
      <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="9" />
        <path d="M15 9l-6 6m0-6l6 6"/>
      </svg>
    ),
    label: "Marketing Strategy",
  },
  {
    icon: (
      // Video SVG
      <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
        <rect x="3" y="7" width="18" height="10" rx="2"/>
        <path d="M16 13.5V10.5L19 12L16 13.5Z"/>
      </svg>
    ),
    label: "Video Trailer",
  },
  {
    icon: (
      // Book SVG
      <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
        <rect x="5" y="4" width="14" height="16" rx="2"/>
        <path d="M9 8h6M9 12h6M9 16h2"/>
      </svg>
    ),
    label: "Book Cover Design",
  }
];

export default function WhyUsPremiumBlue() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-200 via-blue-400 to-blue-700 overflow-x-hidden">
      {/* Wavy Top Gold Accent */}
      <svg className="absolute top-0 left-0 w-full" height="56" viewBox="0 0 1440 56" fill="none" preserveAspectRatio="none">
        <path d="M0,40 C320,110 1120,0 1440,40 L1440,0 L0,0 Z" fill="#fde68a" opacity="0.85" />
      </svg>

      {/* Section Title */}
      <div className="mt-20 mb-10 text-center relative z-10">
        <h2 className="text-4xl font-black tracking-wide text-white drop-shadow-xl mb-4 uppercase">
          Why Us?
        </h2>
        <div className="flex justify-center items-center mb-4">
          <span className="block h-1 w-24 bg-gradient-to-r from-yellow-200 to-yellow-400 rounded" />
        </div>
        <p className="text-blue-50 font-medium text-lg">Let&apos;s do great work together!</p>
      </div>

      {/* 3D Feature Cards */}
      <div className="flex flex-wrap gap-10 justify-center py-10 z-10">
        {features.map((f, idx) => (
          <motion.div
            key={idx}
            className="bg-white/60 rounded-3xl shadow-2xl px-10 py-10 flex flex-col items-center hover:bg-blue-50 backdrop-blur-lg transition border border-blue-100 hover:shadow-yellow-200"
            style={{ minWidth: 210, minHeight: 210, perspective: 1200 }}
            {...cardProps}
          >
            <div className="mb-6 text-blue-600 drop-shadow-xl">{f.icon}</div>
            <span className="text-xl font-semibold text-blue-800 text-center tracking-tight drop-shadow">
              {f.label}
            </span>
            <span className="block mt-2 h-1 w-8 bg-gradient-to-r from-yellow-200 to-yellow-400 rounded" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
