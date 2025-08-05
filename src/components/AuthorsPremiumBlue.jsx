import React from "react";

const authors = [
  {
    name: "Abhishek Krishnan",
    img: "https://randomuser.me/api/portraits/men/49.jpg",
  },
  {
    name: "Simran Dudeja",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Abhiveer Soni",
    img: "https://randomuser.me/api/portraits/men/46.jpg",
  },
  {
    name: "S.P. Mittson",
    img: "https://covers.openlibrary.org/b/id/11121133-L.jpg",
  },
];

export default function AuthorsPremiumBlue() {
  return (
    <section className="relative min-h-screen w-full bg-gradient-to-b from-blue-900 via-blue-700 to-blue-500 pt-0 pb-20 overflow-x-hidden">
      {/* Wavy header */}
      <div className="w-full h-[80px] relative">
        <svg
          className="absolute top-0 left-0 w-full h-full"
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path fill="#fff" d="M0,48 C320,160 1120,0 1440,48 L1440,0L0,0Z" />
        </svg>
        <div className="z-10 absolute top-[38px] left-1/2 -translate-x-1/2 text-center">
          <span className="bg-white px-7 py-3 rounded-xl font-black text-blue-900 text-2xl shadow-lg tracking-widest uppercase inline-block border-b-4 border-yellow-400">
            Authors We Have Worked With
          </span>
          <div className="mx-auto h-2 w-40 rounded-full mt-2 bg-yellow-400"></div>
        </div>
      </div>
      {/* Section Title (spacing only, no text needed) */}
      <div className="pt-32"></div>
      {/* Author Cards */}
      <div className="mx-auto max-w-7xl flex gap-9 flex-wrap justify-center items-start px-2 py-6">
        {authors.map((author, i) => (
          <div
            key={i}
            className="bg-gradient-to-br from-blue-700 via-blue-600 to-blue-500 rounded-2xl shadow-2xl flex flex-col items-center p-6 w-64 transition hover:-translate-y-3 hover:shadow-blue-900/60 duration-200"
            style={{
              boxShadow:
                "0 16px 44px 0 rgba(37,78,235,0.22), 0 6px 32px 0 rgba(37,78,235,0.17)",
            }}
          >
            <div className="w-36 h-52 bg-white rounded-xl mb-4 shadow-lg overflow-hidden flex items-center justify-center relative">
              <img
                src={author.img}
                alt={author.name}
                className="object-cover w-full h-full rounded-xl"
                style={{ boxShadow: "0 1px 16px 2px rgba(20,62,206,0.25)" }}
              />
            </div>
            <div className="mt-2 text-lg font-extrabold text-blue-100 text-center tracking-wide drop-shadow">
              {author.name}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
