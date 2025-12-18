"use client";

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const destinations = [
  {
    id: "dubai",
    name: "Dubai, UAE",
    image:
      "https://images.unsplash.com/photo-1512453941012-c82a02ba1903?w=800&h=600&fit=crop",
    description:
      "Experience luxury, adventure, and culture in the city of gold",
    packages: 12,
    startingPrice: 1850,
    highlights: [
      "Burj Khalifa",
      "Desert Safari",
      "Dubai Mall",
      "Palm Jumeirah",
    ],
    badge: "Luxury",
  },
  {
    id: "maldives",
    name: "Maldives",
    image:
      "https://images.unsplash.com/photo-1514282401471-a975e89986d8?w=800&h=600&fit=crop",
    description: "Pristine beaches, overwater villas, and crystal clear waters",
    packages: 8,
    startingPrice: 2850,
    highlights: [
      "Overwater Villas",
      "Diving & Snorkeling",
      "Sunset Cruises",
      "Spa Treatments",
    ],
    badge: "Paradise",
  },
  {
    id: "turkey",
    name: "Istanbul, Turkey",
    image:
      "https://images.unsplash.com/photo-1548640552-b8215b1c798f?w=800&h=600&fit=crop",
    description: "Where Europe meets Asia - rich history and vibrant culture",
    packages: 15,
    startingPrice: 1650,
    highlights: [
      "Hagia Sophia",
      "Blue Mosque",
      "Cappadocia",
      "Bosphorus Cruise",
    ],
    badge: "Heritage",
  },
  {
    id: "thailand",
    name: "Bangkok, Thailand",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    description: "Land of smiles with beautiful beaches and temples",
    packages: 18,
    startingPrice: 1250,
    highlights: [
      "Grand Palace",
      "Floating Markets",
      "Phuket Beaches",
      "Thai Cuisine",
    ],
    badge: "Adventure",
  },
  {
    id: "paris",
    name: "Paris, France",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&h=600&fit=crop",
    description: "The city of love, art, and timeless elegance",
    packages: 10,
    startingPrice: 2950,
    highlights: [
      "Eiffel Tower",
      "Louvre Museum",
      "Seine Cruise",
      "Versailles Palace",
    ],
    badge: "Romance",
  },
  {
    id: "london",
    name: "London, UK",
    image:
      "https://images.unsplash.com/photo-1533929736992-db87c60e3e2c?w=800&h=600&fit=crop",
    description: "Historic landmarks, royal palaces, and modern attractions",
    packages: 14,
    startingPrice: 3150,
    highlights: [
      "Big Ben",
      "Buckingham Palace",
      "British Museum",
      "Tower Bridge",
    ],
    badge: "Historic",
  },
  {
    id: "singapore",
    name: "Singapore",
    image:
      "https://images.unsplash.com/photo-1512904521712-6f9a50b8c341?w=800&h=600&fit=crop",
    description: "Garden city with futuristic architecture and diverse culture",
    packages: 9,
    startingPrice: 1750,
    highlights: [
      "Marina Bay Sands",
      "Gardens by the Bay",
      "Sentosa Island",
      "Hawker Centers",
    ],
  },
  {
    id: "rome",
    name: "Rome, Italy",
    image:
      "https://images.unsplash.com/photo-1566131537154-8d557ae60c57?w=800&h=600&fit=crop",
    description: "Eternal city with ancient history and Renaissance art",
    packages: 11,
    startingPrice: 2850,
    highlights: ["Colosseum", "Vatican City", "Trevi Fountain", "Roman Forum"],
  },
  {
    id: "malaysia",
    name: "Kuala Lumpur, Malaysia",
    image:
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&h=600&fit=crop",
    description: "Modern metropolis with cultural diversity and natural beauty",
    packages: 7,
    startingPrice: 1450,
    highlights: [
      "Petronas Towers",
      "Batu Caves",
      "Street Food",
      "Cameron Highlands",
    ],
  },
  {
    id: "baku",
    name: "Baku, Azerbaijan",
    image: "/baku1.jpg",
    description:
      "Vibrant blend of ancient heritage, modern architecture and Caspian Sea beauty",
    packages: 6,
    startingPrice: 149900,
    currency: "Rs.",
    highlights: [
      "Old City UNESCO Site",
      "Flame Towers",
      "Yanar Dag Fire Mountain",
      "Caspian Sea Beaches",
    ],
    badge: "New Destination",
  },
];

const formatPrice = (amount: number, currency: string = "$") => {
  if (currency === "Rs.") {
    return `${currency} ${amount.toLocaleString()}`;
  }
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

export default function DestinationsPage() {
  const [email, setEmail] = useState("");
  const [sortBy, setSortBy] = useState("featured");
  const [selectedRegion, setSelectedRegion] = useState("all");

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-96 bg-linear-to-r from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&h=800&fit=crop"
            alt="Explore destinations"
            fill
            className="object-cover absolute inset-0 opacity-40"
          />
          <div className="absolute inset-0 bg-linear-to-r from-black/60 via-black/50 to-black/60"></div>
          <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
              Explore Amazing Destinations
            </h1>
            <p className="text-xl sm:text-2xl mb-8 max-w-2xl opacity-90">
              Discover incredible places around the world with our carefully
              curated travel packages
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <button className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Plan Your Trip
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300">
                Get Expert Advice
              </button>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="sticky top-20 z-40 py-6 bg-white border-b border-gray-200 shadow-sm">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-slate-800 mb-2">
                  {destinations.length} Destinations
                </h2>
                <p className="text-slate-600">Find your perfect getaway</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent hover:border-cyan-500 transition-colors"
                >
                  <option value="featured">Sort by Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="popular">Most Popular</option>
                </select>
                <select
                  value={selectedRegion}
                  onChange={(e) => setSelectedRegion(e.target.value)}
                  className="px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent hover:border-cyan-500 transition-colors"
                >
                  <option value="all">All Regions</option>
                  <option value="asia">Asia</option>
                  <option value="europe">Europe</option>
                  <option value="middle-east">Middle East</option>
                  <option value="island">Island</option>
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Destinations Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {destinations.map((destination) => (
                <div
                  key={destination.id}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-gray-100"
                >
                  {/* Image Container */}
                  <div className="relative h-44 overflow-hidden bg-linear-to-br from-cyan-400 to-blue-400">
                    <Image
                      src={destination.image}
                      alt={destination.name}
                      fill
                      className="object-cover group-hover:scale-125 transition-transform duration-700"
                    />
                    {/* Badge */}
                    {destination.badge && (
                      <div className="absolute top-4 left-4 bg-linear-to-r from-amber-400 to-orange-400 text-slate-900 px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                        {destination.badge}
                      </div>
                    )}
                    {/* Package Count */}
                    <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                      <span className="text-sm font-bold text-slate-700">
                        {destination.packages} packages
                      </span>
                    </div>
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    {/* Title */}
                    <h3 className="text-lg font-bold text-slate-800 mb-1 group-hover:text-cyan-600 transition-colors">
                      {destination.name}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-600 text-xs mb-3 leading-relaxed line-clamp-2">
                      {destination.description}
                    </p>

                    {/* Highlights */}
                    <div className="mb-3">
                      <h4 className="text-xs font-bold text-slate-700 mb-2 uppercase tracking-wide">
                        Top Attractions:
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {destination.highlights.map((highlight, index) => (
                          <span
                            key={index}
                            className="text-xs bg-cyan-50 text-cyan-700 px-2 py-0.5 rounded-full font-medium border border-cyan-200 hover:bg-cyan-100 transition-colors"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Divider */}
                    <div className="border-t border-gray-200 my-3"></div>

                    {/* Price and CTA */}
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs text-slate-500 font-medium mb-0.5">
                          Starting from
                        </p>
                        <p className="text-lg font-bold text-cyan-600">
                          {formatPrice(
                            destination.startingPrice,
                            destination.currency || "$"
                          )}
                        </p>
                      </div>
                      <Link
                        href={`/packages/${destination.id}`}
                        className="bg-linear-to-r from-cyan-600 to-cyan-700 hover:from-cyan-700 hover:to-cyan-800 text-white px-3 py-2 rounded-full font-bold transition-all duration-300 transform hover:scale-110 shadow-lg text-xs"
                      >
                        Explore →
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* World Cup CTA Section */}
        <section className="relative py-6 overflow-hidden mt-4 mb-4 bg-white group hover:shadow-2xl transition-all duration-500 cursor-pointer rounded-2xl border border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center transform group-hover:scale-105 transition-transform duration-500 origin-center">
                {/* Left Content */}
                <div className="text-slate-800">
                  <div className="mb-1.5 inline-block bg-yellow-400 text-cyan-700 px-3 py-1 rounded-full text-xs font-bold">
                    ✈️ EXCLUSIVE OFFER
                  </div>
                  <h2 className="text-lg md:text-xl font-bold mb-1.5 leading-tight">
                    Your Journey Beyond Nepal Awaits
                  </h2>
                  <p className="text-slate-600 text-xs mb-2.5">
                    Embark on unforgettable adventures with our premium travel
                    packages worldwide.
                  </p>
                  <div className="space-y-1.5 mb-3">
                    <div className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-md bg-yellow-400 text-cyan-700 font-bold flex items-center justify-center shrink-0 text-xs">
                        ✓
                      </div>
                      <div>
                        <p className="font-semibold text-slate-800 text-xs">
                          Premium Accommodations
                        </p>
                        <p className="text-slate-600 text-xs">
                          5-star luxury stays included
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-md bg-yellow-400 text-cyan-700 font-bold flex items-center justify-center shrink-0 text-xs">
                        ✓
                      </div>
                      <div>
                        <p className="font-semibold text-slate-800 text-xs">
                          Expert Guides & Support
                        </p>
                        <p className="text-slate-600 text-xs">
                          24/7 travel assistance
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-md bg-yellow-400 text-cyan-700 font-bold flex items-center justify-center shrink-0 text-xs">
                        ✓
                      </div>
                      <div>
                        <p className="font-semibold text-slate-800 text-xs">
                          All-Inclusive Packages
                        </p>
                        <p className="text-slate-600 text-xs">
                          Meals, tours & transfers
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-orange-100 border-l-4 border-orange-400 p-2 rounded">
                    <p className="text-orange-700 font-semibold text-xs">
                      ⏰ Early Bird Discount: Save 25% this month!
                    </p>
                  </div>
                </div>

                {/* Right Card */}
                <div className="relative transform group-hover:scale-110 transition-transform duration-500 origin-center">
                  <div className="bg-white rounded-2xl shadow-xl p-4 group-hover:shadow-2xl transition-shadow duration-500 overflow-hidden relative">
                    {/* Background Image - Trophy */}
                    <div className="absolute inset-0 opacity-5 z-0">
                      <img
                        src="/trophy.jpg"
                        alt="trophy background"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* Card Content */}
                    <div className="relative z-10">
                      <div className="absolute -top-3 right-4 bg-yellow-400 text-cyan-700 px-3 py-1 rounded-full font-bold text-xs shadow-lg">
                        LIMITED SLOTS
                      </div>
                      <h3 className="text-lg font-bold text-slate-800 mb-1.5">
                        Premium Travel Pass
                      </h3>
                      <p className="text-slate-600 text-xs mb-3">
                        Experience 3 destinations in one epic journey
                      </p>
                      <div className="bg-gray-50 rounded-xl p-3 mb-3 border border-gray-200">
                        <p className="text-slate-600 text-xs mb-0.5">
                          Starting from
                        </p>
                        <div className="flex items-baseline gap-2 mb-0.5">
                          <span className="text-2xl font-bold text-cyan-600">
                            $3,999
                          </span>
                          <span className="text-slate-400 line-through text-xs">
                            $5,499
                          </span>
                        </div>
                        <p className="text-green-600 font-semibold text-xs">
                          Save $1,500 (27% OFF)
                        </p>
                      </div>
                      <div className="mb-3 space-y-1 text-xs text-slate-700">
                        <p className="flex items-center gap-2">
                          <span className="text-cyan-600 font-bold">•</span> 12
                          days / 11 nights luxury stay
                        </p>
                        <p className="flex items-center gap-2">
                          <span className="text-cyan-600 font-bold">•</span> 3
                          premium destination packages
                        </p>
                        <p className="flex items-center gap-2">
                          <span className="text-cyan-600 font-bold">•</span> All
                          meals & activities included
                        </p>
                        <p className="flex items-center gap-2">
                          <span className="text-cyan-600 font-bold">•</span>{" "}
                          Private airport transfers
                        </p>
                        <p className="flex items-center gap-2">
                          <span className="text-cyan-600 font-bold">•</span>{" "}
                          Travel insurance covered
                        </p>
                      </div>
                      <button className="w-full bg-linear-to-r from-cyan-600 to-cyan-700 hover:from-cyan-700 hover:to-cyan-800 text-white px-4 py-2 rounded-lg font-bold text-xs transition-all duration-300 shadow-lg transform hover:scale-105">
                        🎫 Book Your Journey Today!
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20 bg-linear-to-r from-cyan-600 to-cyan-700 text-white">
          <div className="max-w-2xl mx-auto text-center px-4">
            <h2 className="text-4xl font-bold mb-6">
              Subscribe for Travel Inspiration
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get exclusive deals, destination guides & special offers delivered
              to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-6 py-4 rounded-full text-slate-800 focus:outline-none focus:ring-4 focus:ring-yellow-400 placeholder-slate-400"
              />
              <button className="bg-yellow-400 hover:bg-yellow-500 text-cyan-700 px-8 py-4 rounded-full font-bold transition-all transform hover:scale-105 whitespace-nowrap shadow-lg">
                Subscribe
              </button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-linear-to-r from-slate-50 to-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-6">
              Can&apos;t Find Your Dream Destination?
            </h2>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
              Let us create a custom travel package tailored specifically to
              your preferences, budget, and travel style.
            </p>
            <button className="bg-linear-to-r from-cyan-600 to-cyan-700 hover:from-cyan-700 hover:to-cyan-800 text-white px-10 py-4 rounded-full text-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-lg inline-block">
              Request Custom Package
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
