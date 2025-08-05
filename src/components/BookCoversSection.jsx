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

    export default function BookCoversPremiumBlue() {
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
                Social media
            </span>
            <div className="mx-auto h-2 w-24 rounded-full mt-2 bg-yellow-400"></div>
            </div>
        </div>

        {/* Section Title */}
        <div className="pt-32 text-center">
            
        
        </div>

        {/* Book Cards */}
        <div className="mx-auto max-w-7xl flex gap-9 flex-wrap justify-center items-start px-2 py-6">
            {books.map((book, i) => (
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
                    src={book.img}
                    alt={book.title}
                    className="object-cover w-full h-full rounded-xl"
                    style={{ boxShadow: "0 1px 16px 2px rgba(20,62,206,0.25)" }}
                />
                </div>
                <div className="mb-1 text-lg font-extrabold text-blue-100 text-center tracking-wide drop-shadow">
                {book.title}
                </div>
                <div className="text-xs text-blue-200 mb-3 italic drop-shadow">{book.author}</div>
                <a
                href={book.buy}
                className="px-5 py-1.5 rounded-full bg-gradient-to-r from-blue-600 to-blue-900 text-white text-xs font-semibold shadow-md hover:bg-blue-800 transition-all"
                >
                Buy Now
                </a>
            </div>
            ))}
        </div>
        </section>
    );
    }
