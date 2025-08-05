import React, { useState } from "react";

const testimonials = [
  {
    text: "From editorial to creative, the team helped me refine my ideas while staying true to my vision. Their professionalism and dedication made the entire publishing process smooth and creatively fulfilling.",
    author: "Simran",
    title: "Author of 'Like A Summer Song'",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg", // Example avatar
  },
  {
    text: "Excellent experience! My book became everything I wished for and more. Communication and creativity were top-notch.",
    author: "Aarav",
    title: "Author of 'The Silent Garden'",
    avatar: "https://randomuser.me/api/portraits/men/65.jpg",
  },
  {
    text: "Professional, creative, and always ahead of deadlines. If you want your story to shine, look no further.",
    author: "Priya",
    title: "Author of 'Dusk to Dawn'",
    avatar: "https://randomuser.me/api/portraits/women/60.jpg",
  },
];

export default function TestimonialsPremiumBlue() {
  const [idx, setIdx] = useState(0);

  const prev = () => setIdx((idx - 1 + testimonials.length) % testimonials.length);
  const next = () => setIdx((idx + 1) % testimonials.length);

  return (
    <section className="relative min-h-screen w-full bg-gradient-to-b from-blue-900 via-blue-700 to-blue-500 pt-0 pb-16 overflow-x-hidden">
      {/* Wavy header */}
      <div className="w-full h-[80px] relative">
        <svg
          className="absolute top-0 left-0 w-full h-full"
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path fill="#fff" d="M0,48 C320,160 1120,0 1440,48 L1440,0 L0,0 Z" />
        </svg>
        <div className="z-10 absolute top-[38px] left-1/2 -translate-x-1/2 text-center">
          <span className="bg-white px-8 py-3 rounded-xl font-black text-blue-900 text-3xl shadow-lg tracking-widest uppercase inline-block border-b-4 border-yellow-400">
            TESTIMONIALS
          </span>
          <div className="mx-auto h-2 w-28 rounded-full mt-2 bg-yellow-400"></div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="relative flex justify-center pt-32 pb-12 px-4">
        {/* Decorative SVGs */}
        <svg width="60" height="46" className="absolute left-10 top-12 opacity-70" viewBox="0 0 60 46" fill="none">
          <text x="0" y="40" fontSize="40" fill="#FDE68A">📖</text>
        </svg>
        <svg width="64" height="64" className="absolute right-16 top-8 rotate-12" viewBox="0 0 64 64" fill="none">
          <text x="0" y="60" fontSize="60" fill="#60a5fa">💬</text>
        </svg>
        <svg width="48" height="48" className="absolute right-8 bottom-6 rotate-12 opacity-80" viewBox="0 0 48 48" fill="none">
          <text x="0" y="44" fontSize="44" fill="#FFD700">✏️</text>
        </svg>

        {/* Card */}
        <div className="w-full max-w-2xl bg-white/95 rounded-2xl shadow-2xl px-8 py-10 flex flex-col items-center relative z-10">
          <p className="text-xl text-blue-900 font-medium text-center mb-8 min-h-[96px]">&ldquo;{testimonials[idx].text}&rdquo;</p>
          <div className="flex items-center gap-3 mb-3">
            <img
              src={testimonials[idx].avatar}
              alt={testimonials[idx].author}
              className="w-10 h-10 rounded-full object-cover border-4 border-blue-400 shadow"
            />
            <div>
              <span className="block font-bold text-blue-700">{testimonials[idx].author}</span>
              <span className="block text-xs text-blue-400">{testimonials[idx].title}</span>
            </div>
          </div>
          {/* Controls and dots */}
          <div className="flex items-center justify-center gap-4 mt-3">
            <button
              onClick={prev}
              className="p-2 rounded-full bg-blue-200 hover:bg-blue-400 text-blue-900 shadow"
              aria-label="Previous Testimonial"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            {/* Dots */}
            <div className="flex gap-1">
              {testimonials.map((_, i) => (
                <span
                  key={i}
                  className={`inline-block w-2.5 h-2.5 rounded-full ${i === idx
                    ? 'bg-gradient-to-r from-blue-400 to-yellow-400'
                    : 'bg-blue-300'} transition`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="p-2 rounded-full bg-blue-200 hover:bg-blue-400 text-blue-900 shadow"
              aria-label="Next Testimonial"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
