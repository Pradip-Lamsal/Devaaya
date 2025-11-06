"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Newsletter subscription:", email);
    setEmail("");
  };

  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4 sm:mb-6">
              <Image
                src="/logo.jpeg"
                alt="Devaaya Holidays"
                width={40}
                height={40}
                className="sm:w-12 sm:h-12 rounded-lg"
              />
              <div>
                <h1 className="text-xl sm:text-2xl font-bold">Devaaya</h1>
                <p className="text-xs sm:text-sm text-slate-300 -mt-1">
                  HOLIDAYS
                </p>
              </div>
            </Link>
            <p className="text-slate-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
              Your trusted travel partner for international adventures from
              Nepal. Creating unforgettable memories worldwide since 2014.
            </p>

            {/* Social Media */}
            <div className="flex space-x-3 sm:space-x-4">
              <a
                href="#"
                className="bg-slate-800 hover:bg-cyan-600 p-2 sm:p-3 rounded-full transition-colors duration-300"
                aria-label="Facebook"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="#"
                className="bg-slate-800 hover:bg-cyan-400 p-2 sm:p-3 rounded-full transition-colors duration-300"
                aria-label="Twitter"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
              <a
                href="#"
                className="bg-slate-800 hover:bg-pink-600 p-2 sm:p-3 rounded-full transition-colors duration-300"
                aria-label="Instagram"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.596-3.205-1.533l1.714-1.271c.355.554.99.918 1.713.918 1.116 0 2.021-.905 2.021-2.021s-.905-2.021-2.021-2.021c-.723 0-1.358.364-1.713.918L5.244 10.707c.757-.937 1.908-1.533 3.205-1.533 2.266 0 4.101 1.835 4.101 4.101s-1.835 4.101-4.101 4.101zm8.67-6.709h-1.714v1.714h-1.714v1.714h1.714v1.714h1.714v-1.714h1.714v-1.714h-1.714v-1.714z" />
                </svg>
              </a>
              <a
                href="#"
                className="bg-slate-800 hover:bg-red-600 p-2 sm:p-3 rounded-full transition-colors duration-300"
                aria-label="YouTube"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">
              Quick Links
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-slate-300 hover:text-white transition-colors duration-300 text-sm sm:text-base"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/destinations"
                  className="text-slate-300 hover:text-white transition-colors duration-300 text-sm sm:text-base"
                >
                  Destinations
                </Link>
              </li>
              <li>
                <Link
                  href="/packages"
                  className="text-slate-300 hover:text-white transition-colors duration-300 text-sm sm:text-base"
                >
                  Travel Packages
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-slate-300 hover:text-white transition-colors duration-300 text-sm sm:text-base"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-slate-300 hover:text-white transition-colors duration-300 text-sm sm:text-base"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-slate-300 hover:text-white transition-colors duration-300 text-sm sm:text-base"
                >
                  Travel Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">
              Our Services
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link
                  href="/services/visa"
                  className="text-slate-300 hover:text-white transition-colors duration-300 text-sm sm:text-base"
                >
                  Visa Assistance
                </Link>
              </li>
              <li>
                <Link
                  href="/services/flights"
                  className="text-slate-300 hover:text-white transition-colors duration-300 text-sm sm:text-base"
                >
                  Flight Booking
                </Link>
              </li>
              <li>
                <Link
                  href="/services/hotels"
                  className="text-slate-300 hover:text-white transition-colors duration-300 text-sm sm:text-base"
                >
                  Hotel Reservations
                </Link>
              </li>
              <li>
                <Link
                  href="/services/insurance"
                  className="text-slate-300 hover:text-white transition-colors duration-300 text-sm sm:text-base"
                >
                  Travel Insurance
                </Link>
              </li>
              <li>
                <Link
                  href="/services/tours"
                  className="text-slate-300 hover:text-white transition-colors duration-300 text-sm sm:text-base"
                >
                  Guided Tours
                </Link>
              </li>
              <li>
                <Link
                  href="/services/customize"
                  className="text-slate-300 hover:text-white transition-colors duration-300 text-sm sm:text-base"
                >
                  Custom Packages
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">
              Contact Info
            </h3>
            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              <div className="flex items-start gap-2 sm:gap-3">
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400 mt-1 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <div>
                  <p className="text-slate-300 text-sm sm:text-base">
                    Thamel, Kathmandu
                  </p>
                  <p className="text-slate-300 text-sm sm:text-base">Nepal</p>
                </div>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <p className="text-slate-300 text-sm sm:text-base">
                  +977-1-4123456
                </p>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <p className="text-slate-300 text-sm sm:text-base">
                  info@devaayaholidays.com
                </p>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">
                Subscribe to Newsletter
              </h4>
              <form
                onSubmit={handleNewsletterSubmit}
                className="space-y-2 sm:space-y-3"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-slate-800 border border-slate-700 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-slate-400 text-sm sm:text-base"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-cyan-600 hover:bg-cyan-700 text-white px-3 py-2 sm:px-4 sm:py-3 rounded-lg font-semibold transition-colors duration-300 text-sm sm:text-base"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
            <div className="text-slate-400 text-xs sm:text-sm text-center md:text-left">
              © 2024 Devaaya Holidays. All rights reserved.
            </div>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm">
              <Link
                href="/privacy"
                className="text-slate-400 hover:text-white transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-slate-400 hover:text-white transition-colors duration-300"
              >
                Terms of Service
              </Link>
              <Link
                href="/cookies"
                className="text-slate-400 hover:text-white transition-colors duration-300"
              >
                Cookie Policy
              </Link>
              <Link
                href="/sitemap"
                className="text-slate-400 hover:text-white transition-colors duration-300"
              >
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
