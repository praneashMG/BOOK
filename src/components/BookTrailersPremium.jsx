import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const videos = [
  {
    title: "Cultural Fusion",
    preview: "https://img.youtube.com/vi/2Vv-BfVoq4g/maxresdefault.jpg",
    url: "#",
  },
  {
    title: "Ariyan The CEO",
    preview: "https://img.youtube.com/vi/aqz-KE-bpKQ/maxresdefault.jpg",
    url: "#",
  },
  {
    title: "Book Character",
    preview: "https://img.youtube.com/vi/hTWKbfoikeg/maxresdefault.jpg",
    url: "#",
  },
];

export default function PremiumBookTrailersBlue() {
  const [[page, direction], setPage] = useState([0, 0]);
  const len = videos.length;

  const wrapIndex = (index) => (index + len) % len;

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 500 : -500,
      opacity: 0,
      scale: 0.92,
      filter: "brightness(0.78)",
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      filter: "brightness(1)",
      transition: { type: "spring", stiffness: 340, damping: 32 },
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 500 : -500,
      opacity: 0,
      scale: 0.92,
      filter: "brightness(0.7)",
      transition: { duration: 0.4 },
    }),
  };

  return (
    <section className="relative min-h-screen pt-0 pb-24 overflow-hidden bg-gradient-to-b from-blue-900 via-blue-700 to-blue-500">
      {/* Wavy header */}
      <div className="w-full h-[80px] relative">
        <svg
          className="absolute top-0 left-0 w-full h-full"
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            fill="#fff"
            d="M0,48 C320,160 1120,0 1440,48 L1440,0L0,0Z"
          />
        </svg>
        <div className="z-10 absolute top-[38px] left-1/2 -translate-x-1/2 text-center">
          <span className="bg-white px-8 py-3 rounded-xl font-black text-blue-900 text-3xl shadow-lg tracking-widest uppercase inline-block border-b-4 border-yellow-400">
            Book Trailers
          </span>
          <div className="mx-auto h-2 w-32 rounded-full mt-3 bg-yellow-400"></div>
        </div>
      </div>

      {/* Carousel container */}
      <div className="relative max-w-5xl mx-auto flex justify-center items-center pt-32">
        {/* Prev Arrow */}
        <button
          onClick={() => paginate(-1)}
          aria-label="Previous"
          className="absolute left-[-3.2rem] z-10 px-3 py-3 rounded-full bg-gradient-to-br from-blue-900 to-blue-700 shadow-lg text-white hover:scale-110 hover:shadow-blue-300 transition-transform"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            strokeWidth={3}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Video Card */}
        <div
          className="w-[480px] h-[300px] rounded-3xl shadow-2xl bg-gradient-to-br from-blue-900/90 via-blue-800/80 to-blue-700/90 flex items-center justify-center overflow-hidden relative"
          style={{ backdropFilter: "blur(20px)" }}
        >
          <AnimatePresence initial={false} custom={direction}>
            <motion.img
              key={page}
              src={videos[wrapIndex(page)].preview}
              alt={videos[wrapIndex(page)].title}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.13}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = Math.abs(offset.x) * velocity.x;
                if (swipe < -600) paginate(1);
                else if (swipe > 600) paginate(-1);
              }}
              className="object-cover w-full h-full rounded-3xl shadow-xl"
            />
          </AnimatePresence>
          {/* Play Button Overlay */}
          <a
            href={videos[wrapIndex(page)].url}
            className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-30 rounded-3xl opacity-0 hover:opacity-95 transition-opacity"
            aria-label={`Play ${videos[wrapIndex(page)].title} trailer`}
          >
            <span className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-400 rounded-full flex justify-center items-center shadow-xl hover:scale-110 transition-transform">
              <svg
                className="w-12 h-12 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <polygon points="9.5,7.5 16.5,12 9.5,16.5" />
              </svg>
            </span>
          </a>
        </div>

        {/* Next Arrow */}
        <button
          onClick={() => paginate(1)}
          aria-label="Next"
          className="absolute right-[-3.2rem] z-10 px-3 py-3 rounded-full bg-gradient-to-br from-blue-900 to-blue-700 shadow-lg text-white hover:scale-110 hover:shadow-blue-300 transition-transform"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            strokeWidth={3}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
}
