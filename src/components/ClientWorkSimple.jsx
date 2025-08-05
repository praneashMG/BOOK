import React from "react";

const books = [
  {
    title: "Ashoka's Secret",
    author: "Chinmay",
    img: "https://covers.openlibrary.org/b/id/11121133-L.jpg",
    buy: "#"
  },
  {
    title: "Rediscover Your Midlife Mojo",
    author: "Nandita Kaushik",
    img: "https://covers.openlibrary.org/b/id/11021132-L.jpg",
    buy: "#"
  },
  {
    title: "The Shark & The Dolphins",
    author: "Prabhu",
    img: "https://covers.openlibrary.org/b/id/11121041-L.jpg",
    buy: "#"
  },
  {
    title: "The Wandering Star",
    author: "S.P. Nittson",
    img: "https://covers.openlibrary.org/b/id/11125023-L.jpg",
    buy: "#"
  },
];

export default function ClientWorkBluePremium() {
  return (
    <section className="relative min-h-screen w-full bg-gradient-to-b from-blue-200 via-blue-400 to-blue-700 pt-0 pb-20 overflow-x-hidden">
      {/* Wavy header */}
      <div className="w-full h-[80px] relative">
        <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path fill="#fff" d="M0,48 C320,160 1120,0 1440,48 L1440,0 L0,0 Z" />
        </svg>
        <div className="z-10 absolute top-[38px] left-1/2 -translate-x-1/2 text-center">
          <span className="bg-white px-7 py-3 rounded-xl font-black text-blue-800 text-2xl shadow-lg tracking-widest uppercase inline-block border-b-4 border-yellow-400">
            OUR CLIENT WORK
          </span>
          <div className="mx-auto h-2 w-24 rounded-full mt-2 bg-yellow-400"></div>
        </div>
      </div>
      <div className="pt-32 text-center">
        <h2 className="text-lg sm:text-xl tracking-widest uppercase font-semibold text-blue-100 mb-2">
          Book Covers
        </h2>
        <div className="flex items-center justify-center mb-10">
          <span className="block h-1 w-16 bg-gradient-to-r from-yellow-200 to-yellow-400 rounded"></span>
        </div>
      </div>

      {/* Book covers */}
      <div className="mx-auto max-w-7xl flex gap-9 flex-wrap justify-center items-start px-2 py-6">
        {books.map((book, i) => (
          <div
            key={i}
            className="bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 rounded-2xl shadow-2xl flex flex-col items-center p-6 w-64 transition hover:-translate-y-3 hover:shadow-blue-400/60 duration-200 relative"
            style={{
              boxShadow: "0 16px 44px 0 rgba(37, 99, 235, 0.11), 0 6px 32px 0 rgba(37, 99, 235, 0.07)"
            }}
          >
            <div className="w-36 h-52 bg-white rounded-xl mb-4 shadow-lg overflow-hidden flex items-center justify-center relative">
              <img
                src={book.img}
                alt={book.title}
                className="object-cover w-full h-full rounded-xl"
                style={{ boxShadow: "0 1px 16px 2px rgba(59, 130, 246, 0.12)" }}
              />
            </div>
            <div className="mb-1 text-lg font-extrabold text-blue-800 text-center tracking-wide drop-shadow">
              {book.title}
            </div>
            <div className="text-xs text-blue-500 mb-3 italic drop-shadow">{book.author}</div>
            <a
              href={book.buy}
              className="px-5 py-1.5 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 text-white text-xs font-semibold shadow-md hover:bg-blue-800 transition-all"
            >
              Buy Now
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
