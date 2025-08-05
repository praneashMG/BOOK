import React from "react";

const VERTICALS = [
  {
    src: "https://your-assets.com/fosterreads_logo.png",
    alt: "Foster Reads",
  },
  {
    src: "https://your-assets.com/topbooks_logo.png",
    alt: "Top Books",
  },
  {
    src: "https://your-assets.com/reviewmybooks_logo.png",
    alt: "Review My Books",
  },
  {
    src: "https://your-assets.com/nuvoicepress_logo.png",
    alt: "NU Voice Press",
  },
  {
    src: "https://your-assets.com/thewriteagency_logo.png",
    alt: "The Write Agency",
  }
];

export default function OurVerticalsPremium() {
  return (
    <section className="relative w-full min-h-[210px] bg-gradient-to-br from-blue-900 via-cyan-600 to-blue-300 py-10 px-0 overflow-hidden">
      {/* Elegant slanted header accent */}
      <div className="absolute left-0 top-0 w-full h-16 bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-100"
        style={{
          clipPath: "polygon(0 0, 100% 0, 98% 80%, 0 100%)",
        }}
      />
      {/* Title */}
      <div className="relative z-10 flex w-full justify-center pt-2">
        <h2 className="text-2xl font-bold text-center tracking-widest uppercase bg-white/80 px-6 py-2 rounded shadow border-b-4 border-yellow-300">
          Our Verticals
        </h2>
      </div>
      {/* Logo showcase grid */}
      <div className="relative z-10 mt-8 flex flex-wrap justify-center items-center gap-x-12 gap-y-8 px-8">
        {VERTICALS.map(({ src, alt }, i) => (
          <div
            key={i}
            className="bg-white/90 rounded-xl shadow-lg flex items-center justify-center w-36 h-28 transition-all duration-300 hover:shadow-blue-300/50 hover:-translate-y-2 hover:ring-2 hover:ring-cyan-300"
          >
            <img
              src={src}
              alt={alt}
              className="object-contain max-h-20 max-w-[7.5rem] transition-all"
              draggable={false}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
