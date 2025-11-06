"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/98 backdrop-blur-md shadow-lg border-b border-slate-200/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 shrink-0">
            <Image
              src="/logo.jpeg"
              alt="Devaaya Holidays"
              width={44}
              height={44}
              className="rounded-xl shadow-sm"
            />
            <div className="hidden sm:block">
              <h1 className="text-xl lg:text-2xl font-bold text-slate-800 leading-tight">
                Devaaya
              </h1>
              <p
                className="text-xs text-cyan-600 font-medium -mt-1 tracking-wider"
                style={{ color: "#2D6E89" }}
              >
                HOLIDAYS
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <Link
              href="/"
              className="text-slate-700 hover:text-cyan-600 font-medium transition-colors"
              style={{ "--hover-color": "#2D6E89" } as React.CSSProperties}
            >
              Home
            </Link>
            <Link
              href="/destinations"
              className="text-slate-700 hover:text-cyan-600 font-medium transition-colors"
            >
              Destinations
            </Link>
            <Link
              href="/packages"
              className="text-slate-700 hover:text-cyan-600 font-medium transition-colors"
            >
              Packages
            </Link>
            <Link
              href="/about"
              className="text-slate-700 hover:text-cyan-600 font-medium transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-slate-700 hover:text-cyan-600 font-medium transition-colors"
            >
              Contact
            </Link>
            <Link
              href="/booking"
              className="text-white px-6 py-2.5 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg hover:brightness-110"
              style={{
                background: "linear-gradient(to right, #2D6E89, #245566)",
              }}
            >
              Book Now
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2.5 rounded-lg hover:bg-slate-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center relative">
              <span
                className={`block w-6 h-0.5 bg-slate-700 transition-all duration-300 absolute ${
                  isMenuOpen ? "rotate-45" : "-translate-y-1.5"
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-slate-700 transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-slate-700 transition-all duration-300 absolute ${
                  isMenuOpen ? "-rotate-45" : "translate-y-1.5"
                }`}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden transition-all duration-300 overflow-hidden ${
            isMenuOpen ? "max-h-80 pb-6" : "max-h-0"
          }`}
        >
          <nav className="flex flex-col space-y-4 pt-4 border-t border-slate-200">
            <Link
              href="/"
              className="text-slate-700 hover:text-cyan-600 font-medium transition-colors py-2"
            >
              Home
            </Link>
            <Link
              href="/destinations"
              className="text-slate-700 hover:text-cyan-600 font-medium transition-colors py-2"
            >
              Destinations
            </Link>
            <Link
              href="/packages"
              className="text-slate-700 hover:text-cyan-600 font-medium transition-colors py-2"
            >
              Packages
            </Link>
            <Link
              href="/about"
              className="text-slate-700 hover:text-cyan-600 font-medium transition-colors py-2"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-slate-700 hover:text-cyan-600 font-medium transition-colors py-2"
            >
              Contact
            </Link>
            <Link
              href="/booking"
              className="text-white px-6 py-3 rounded-full transition-colors font-medium text-center mt-4 hover:brightness-110"
              style={{ background: "#2D6E89" }}
            >
              Book Now
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
