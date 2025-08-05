import React from "react";

export default function PremiumFooter() {
  return (
    <footer className="w-full bg-[#f8f8f8] shadow-[0_-6px_30px_0_rgba(0,0,0,0.06)] pt-8 pb-4 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between gap-6 md:gap-2">
        {/* Logo and Partner */}
        <div className="flex items-center gap-5 min-w-[205px]">
          {/* HUBHAWKS logo */}
          <img
            src="https://i.imgur.com/f5JrS6r.png"
            alt="HUBHAWKS"
            className="w-12 h-12 rounded-full bg-white shadow-md object-contain"
            draggable={false}
          />
          <span className="text-3xl font-bold tracking-tight text-gray-800">X</span>
          {/* Audible logo */}
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Audible_logo.svg"
            alt="Audible"
            className="w-20 h-7 object-contain"
            draggable={false}
          />
        </div>

        {/* Quick Links */}
        <div>
          <div className="font-bold text-gray-800 mb-1">Quick Links</div>
          <ul className="space-y-1 text-[15px]">
            <li><a className="hover:text-blue-700" href="#">Home</a></li>
            <li><a className="hover:text-blue-700" href="#">About</a></li>
            <li><a className="hover:text-blue-700" href="#">Services</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <div className="font-bold text-gray-800 mb-1">Support</div>
          <ul className="space-y-1 text-[15px]">
            <li><a className="hover:text-blue-700" href="#">Contact</a></li>
            <li><a className="hover:text-blue-700" href="#">Terms and Conditions</a></li>
            <li><a className="hover:text-blue-700" href="#">Privacy Policy</a></li>
            <li><a className="hover:text-blue-700" href="#">Refund Policy</a></li>
          </ul>
        </div>

        {/* Address */}
        <div>
          <div className="font-bold text-gray-800 mb-1">Address</div>
          <div className="text-[15px] leading-snug text-gray-700">
            Unit-125, First floor, Vipul Trade Centre,<br />
            Sector-48, Sohna Road, South City-2<br />
            Gurugram, Haryana, 122018
          </div>
        </div>

        {/* Contact and Social */}
        <div>
          <div className="font-bold text-gray-800 mb-1">Contact</div>
          <div className="mb-2 text-[15px]">tanvi@hubhawks.com</div>
          <div className="flex flex-row gap-5 mt-1">
            {/* Instagram */}
            <a href="#" aria-label="Instagram">
              <svg width="30" height="30" viewBox="0 0 40 40" fill="none">
                <rect width="40" height="40" rx="12" fill="#fff"/>
                <rect x="7" y="7" width="26" height="26" rx="8" fill="url(#ig-blue)"/>
                <defs>
                  <linearGradient id="ig-blue" x1="7" y1="7" x2="33" y2="33" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#fdc468" />
                    <stop offset="0.5" stopColor="#df4996" />
                    <stop offset="1" stopColor="#4f5bd5" />
                  </linearGradient>
                </defs>
                <circle cx="20" cy="20" r="7" fill="#fff" opacity="0.73"/>
                <circle cx="28.5" cy="11.5" r="1.5" fill="#fff"/>
                <circle cx="34" cy="7" r="4" fill="#d11111" opacity="0.6"/>
              </svg>
            </a>
            {/* Facebook */}
            <a href="#" aria-label="Facebook">
              <svg width="30" height="30" viewBox="0 0 40 40" fill="none">
                <circle cx="20" cy="20" r="20" fill="#3b5998" />
                <path
                  d="M23.9 21.1h2l.5-4H24v-1.7c0-.6.2-.8 1-.8h1.4V13h-2c-2.1 0-3.1 1-3.1 3.1v1.9H18v4h2.3v7h3.1v-7z"
                  fill="#fff"
                />
              </svg>
            </a>
            {/* LinkedIn */}
            <a href="#" aria-label="LinkedIn">
              <svg width="30" height="30" viewBox="0 0 40 40" fill="none">
                <circle cx="20" cy="20" r="20" fill="#1877f2" />
                <rect x="12" y="16" width="4" height="12" rx="2" fill="#fff" />
                <circle cx="14" cy="13" r="2" fill="#fff" />
                <rect x="18" y="20" width="4" height="8" rx="2" fill="#fff" />
                <rect x="24" y="20" width="4" height="8" rx="2" fill="#fff" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      
      <div className="text-center text-xs text-gray-500 font-light mt-4">
        ©All rights reserved to HUBHAWKS MARKETING INDIA PRIVATE LIMITED 2025
      </div>
    </footer>
  );
}
