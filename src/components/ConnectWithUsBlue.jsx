import React from "react";

const SOCIAL_LINKS = [
  {
    href: "https://instagram.com/",
    label: "Instagram",
    svg: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <rect width="40" height="40" rx="12" fill="#fff" />
        <rect x="7" y="7" width="26" height="26" rx="8" fill="url(#ig-blue)" />
        <defs>
          <linearGradient id="ig-blue" x1="7" y1="7" x2="33" y2="33" gradientUnits="userSpaceOnUse">
            <stop stopColor="#60a5fa" />
            <stop offset="1" stopColor="#1e3a8a" />
          </linearGradient>
        </defs>
        <circle cx="20" cy="20" r="7" fill="#fff" opacity="0.73" />
        <circle cx="28.5" cy="11.5" r="1.5" fill="#fff" />
      </svg>
    )
  },
  {
    href: "https://facebook.com/",
    label: "Facebook",
    svg: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="20" fill="#3b5998" />
        <path
          d="M23.9 21.1h2l.5-4H24v-1.7c0-.6.2-.8 1-.8h1.4V13h-2c-2.1 0-3.1 1-3.1 3.1v1.9H18v4h2.3v7h3.1v-7z"
          fill="#fff"
        />
      </svg>
    )
  },
  {
    href: "https://linkedin.com/",
    label: "LinkedIn",
    svg: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="20" fill="#1877f2" />
        <rect x="12" y="16" width="4" height="12" rx="2" fill="#fff" />
        <circle cx="14" cy="13" r="2" fill="#fff" />
        <rect x="18" y="20" width="4" height="8" rx="2" fill="#fff" />
        <rect x="24" y="20" width="4" height="8" rx="2" fill="#fff" />
      </svg>
    )
  }
];

export default function ContactUsPremium() {
  return (
    <section className="w-full min-h-[300px] py-10 bg-gradient-to-br from-blue-100 via-blue-200 to-cyan-200">
      {/* Blue top angle accent */}
      <div className="absolute left-0 top-0 w-full h-10 bg-gradient-to-r from-cyan-500 to-blue-500" style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }} />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 px-6">
        {/* Left: Contact info and socials */}
        <div className="flex flex-col gap-4 md:gap-6 md:py-12">
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-800 mb-1 tracking-wider uppercase">Contact Us</h2>
          <p className="text-base text-slate-500 mb-2">Have questions or want to connect? Reach us anytime!</p>
          <div className="flex gap-4 mt-2">
            {SOCIAL_LINKS.map(({ href, label, svg }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 focus:scale-110 transition-transform outline-none"
                aria-label={label}
                title={label}
              >
                {svg}
              </a>
            ))}
          </div>
        </div>
        {/* Right: Refined envelope illustration */}
        <div className="flex-shrink-0 flex items-center justify-center pt-6 md:pt-0">
          <svg width="220" height="140" viewBox="0 0 340 220" fill="none">
            <ellipse cx="170" cy="175" rx="85" ry="30" fill="#60a5fa" fillOpacity="0.15" />
            <rect x="70" y="70" width="180" height="80" rx="18" fill="url(#envBlue)" />
            <defs>
              <linearGradient id="envBlue" x1="70" y1="70" x2="250" y2="150" gradientUnits="userSpaceOnUse">
                <stop stopColor="#e0e7ef" />
                <stop offset="1" stopColor="#60a5fa" />
              </linearGradient>
            </defs>
            <polygon points="70,70 160,25 250,70" fill="#2563eb" />
            <rect x="98" y="50" width="124" height="36" rx="7" fill="#fff" />
            <rect x="110" y="65" width="60" height="6" rx="3" fill="#cfe5fa" />
            <rect x="110" y="77" width="84" height="6" rx="3" fill="#cfe5fa" />
            <rect x="110" y="89" width="47" height="6" rx="3" fill="#cfe5fa" />
            {/* @ Icon */}
            <circle cx="110" cy="136" r="11" fill="#fff" stroke="#2563eb" strokeWidth="2" />
            <text x="104" y="142" fontSize="13" fontWeight="bold" fill="#2563eb">@</text>
            {/* ID Card */}
            <rect x="200" y="126" width="35" height="16" rx="3" fill="#fff" />
            <rect x="210" y="132" width="20" height="5" rx="2" fill="#b6daf3" />
            <ellipse cx="207" cy="139" rx="3" ry="3" fill="#93c5fd" />
            {/* Plane */}
            <polygon points="237,68 260,80 244,81" fill="#e7f5fb" />
            <polygon points="260,80 257,75 247,84" fill="#93c5fd" />
          </svg>
        </div>
      </div>
    </section>
  );
}
