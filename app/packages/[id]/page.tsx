"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import { notFound } from "next/navigation";
import { useState } from "react";

// Extended package data for details page
const packageDetails = {
  1: {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&h=800&fit=crop",
    destination: "Dubai, UAE",
    title: "Dubai Luxury Experience",
    duration: "5 Days, 4 Nights",
    price: 1850,
    originalPrice: 2200,
    rating: 4.9,
    reviews: 124,
    badge: "Best Seller",
    gallery: [
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1546412414-e5e2e2c8d7d7?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?w=800&h=600&fit=crop",
    ],
    description:
      "Experience the opulence of Dubai with our comprehensive luxury package. From the world's tallest building to pristine beaches, Dubai offers an unmatched blend of modern marvels and traditional Arabian hospitality.",
    highlights: [
      "Burj Khalifa & Dubai Mall visit",
      "Desert Safari with BBQ dinner",
      "5-star hotel accommodation",
      "Dubai Marina dhow cruise",
      "Visit to Gold & Spice Souks",
      "Professional tour guide",
      "All transfers included",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival & Dubai Mall",
        activities: [
          "Airport pickup",
          "Hotel check-in",
          "Visit Burj Khalifa",
          "Dubai Mall exploration",
          "Dubai Fountain show",
        ],
      },
      {
        day: 2,
        title: "Modern Dubai Tour",
        activities: [
          "Dubai Marina visit",
          "Palm Jumeirah tour",
          "Atlantis Hotel visit",
          "Beach time at JBR",
          "Dubai Tram ride",
        ],
      },
      {
        day: 3,
        title: "Traditional Dubai",
        activities: [
          "Dubai Creek tour",
          "Gold & Spice Souks",
          "Al Fahidi Historic District",
          "Dubai Museum",
          "Traditional dinner",
        ],
      },
      {
        day: 4,
        title: "Desert Adventure",
        activities: [
          "Desert Safari",
          "Camel riding",
          "Sand boarding",
          "BBQ dinner",
          "Traditional entertainment",
        ],
      },
      {
        day: 5,
        title: "Departure",
        activities: [
          "Leisure morning",
          "Last-minute shopping",
          "Hotel checkout",
          "Airport transfer",
          "Departure",
        ],
      },
    ],
    includes: [
      "5-star hotel accommodation",
      "Daily breakfast",
      "Airport transfers",
      "All tours and activities mentioned",
      "Professional English-speaking guide",
      "Entry tickets to attractions",
      "Desert Safari with dinner",
    ],
    excludes: [
      "International flights",
      "Personal expenses",
      "Meals not mentioned",
      "Optional activities",
      "Travel insurance",
      "Visa fees",
    ],
    bookingInfo: {
      availability: "Daily departures available",
      minPax: 2,
      maxPax: 15,
      advanceBooking: "7 days minimum",
      cancellation: "Free cancellation up to 24 hours before departure",
    },
  },
  2: {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=1200&h=800&fit=crop",
    destination: "Maldives",
    title: "Maldives Honeymoon Paradise",
    duration: "6 Days, 5 Nights",
    price: 2850,
    originalPrice: 3200,
    rating: 5.0,
    reviews: 89,
    badge: "Romantic",
    gallery: [
      "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1590523278191-995cbcda646b?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1571501679680-de32f1e7aad4?w=800&h=600&fit=crop",
    ],
    description:
      "Escape to paradise with your loved one in the Maldives. Crystal clear waters, pristine beaches, and luxurious overwater villas create the perfect setting for an unforgettable romantic getaway.",
    highlights: [
      "Overwater villa with private pool",
      "Underwater restaurant dining",
      "Seaplane transfers included",
      "Couples spa treatment",
      "Sunset dolphin cruise",
      "Private beach dinner",
      "Snorkeling equipment provided",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Paradise",
        activities: [
          "Seaplane transfer",
          "Villa check-in",
          "Welcome cocktails",
          "Resort tour",
          "Romantic sunset viewing",
        ],
      },
      {
        day: 2,
        title: "Water Adventures",
        activities: [
          "Snorkeling excursion",
          "Dolphin watching",
          "Water sports",
          "Couples spa treatment",
          "Beachside lunch",
        ],
      },
      {
        day: 3,
        title: "Island Exploration",
        activities: [
          "Local island visit",
          "Cultural experience",
          "Fishing trip",
          "Private beach picnic",
          "Stargazing",
        ],
      },
      {
        day: 4,
        title: "Underwater Wonders",
        activities: [
          "Underwater restaurant",
          "Diving experience",
          "Marine life encounter",
          "Photography session",
          "Sunset cruise",
        ],
      },
      {
        day: 5,
        title: "Relaxation Day",
        activities: [
          "Villa breakfast",
          "Pool relaxation",
          "Beach activities",
          "Couples massage",
          "Farewell dinner",
        ],
      },
      {
        day: 6,
        title: "Departure",
        activities: [
          "Final breakfast",
          "Souvenir shopping",
          "Villa checkout",
          "Seaplane transfer",
          "Departure",
        ],
      },
    ],
    includes: [
      "Overwater villa accommodation",
      "All meals (breakfast, lunch, dinner)",
      "Seaplane transfers",
      "Airport transfers in Male",
      "All water sports equipment",
      "Couples spa treatment",
      "Sunset cruise",
    ],
    excludes: [
      "International flights",
      "Alcoholic beverages",
      "Personal expenses",
      "Optional diving courses",
      "Travel insurance",
      "Visa fees",
    ],
    bookingInfo: {
      availability: "Year-round availability",
      minPax: 2,
      maxPax: 2,
      advanceBooking: "14 days minimum",
      cancellation: "Free cancellation up to 48 hours before departure",
    },
  },
  3: {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=1200&h=800&fit=crop",
    destination: "Istanbul, Turkey",
    title: "Turkey Cultural Discovery",
    duration: "8 Days, 7 Nights",
    price: 1650,
    originalPrice: undefined,
    rating: 4.8,
    reviews: 76,
    badge: null,
    gallery: [
      "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1560709499-0c3023fbc5b6?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop",
    ],
    description:
      "Discover the rich cultural heritage of Turkey, where East meets West. From the magnificent Hagia Sophia to the otherworldly landscapes of Cappadocia, experience the magic of Turkish history and hospitality.",
    highlights: [
      "Hagia Sophia & Blue Mosque tours",
      "Bosphorus cruise experience",
      "Cappadocia hot air balloon",
      "Turkish cuisine cooking class",
      "Topkapi Palace visit",
      "Grand Bazaar shopping",
      "Traditional Turkish bath",
    ],
    itinerary: [
      {
        day: 1,
        title: "Istanbul Arrival",
        activities: [
          "Airport pickup",
          "Hotel check-in",
          "Sultanahmet area walk",
          "Welcome dinner",
          "Traditional music show",
        ],
      },
      {
        day: 2,
        title: "Historic Istanbul",
        activities: [
          "Hagia Sophia tour",
          "Blue Mosque visit",
          "Topkapi Palace",
          "Basilica Cistern",
          "Grand Bazaar shopping",
        ],
      },
      {
        day: 3,
        title: "Bosphorus & Modern Istanbul",
        activities: [
          "Bosphorus cruise",
          "Dolmabahce Palace",
          "Galata Tower",
          "Taksim Square",
          "Turkish cooking class",
        ],
      },
      {
        day: 4,
        title: "Flight to Cappadocia",
        activities: [
          "Morning flight",
          "Goreme Open Air Museum",
          "Pasabag Valley",
          "Pottery workshop",
          "Cave hotel check-in",
        ],
      },
      {
        day: 5,
        title: "Cappadocia Adventure",
        activities: [
          "Hot air balloon ride",
          "Underground city tour",
          "Love Valley hike",
          "Traditional lunch",
          "Sunset viewing",
        ],
      },
      {
        day: 6,
        title: "Return to Istanbul",
        activities: [
          "Morning exploration",
          "Flight to Istanbul",
          "Spice Bazaar visit",
          "Turkish bath experience",
          "Farewell dinner",
        ],
      },
      {
        day: 7,
        title: "Free Day",
        activities: [
          "Leisure morning",
          "Optional tours",
          "Last-minute shopping",
          "Relaxation",
          "Packing",
        ],
      },
      {
        day: 8,
        title: "Departure",
        activities: ["Hotel checkout", "Airport transfer", "Departure"],
      },
    ],
    includes: [
      "4-star hotel accommodation",
      "Daily breakfast",
      "Domestic flights",
      "All transfers",
      "Professional guide",
      "Entry fees to attractions",
      "Turkish cooking class",
    ],
    excludes: [
      "International flights",
      "Lunches and dinners (except mentioned)",
      "Personal expenses",
      "Optional activities",
      "Travel insurance",
      "Visa fees",
    ],
    bookingInfo: {
      availability: "March to November",
      minPax: 4,
      maxPax: 20,
      advanceBooking: "10 days minimum",
      cancellation: "Free cancellation up to 72 hours before departure",
    },
  },
  4: {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=1200&h=800&fit=crop",
    destination: "Bangkok, Thailand",
    title: "Thailand Adventure Package",
    duration: "7 Days, 6 Nights",
    price: 1250,
    originalPrice: 1450,
    rating: 4.7,
    reviews: 143,
    badge: "Adventure",
    gallery: [
      "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1552550049-db5c2c3a5ccd?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=800&h=600&fit=crop",
    ],
    description:
      "Embark on an exciting journey through Thailand's most captivating destinations. From bustling Bangkok temples to pristine Phuket beaches, experience the perfect blend of culture, adventure, and relaxation.",
    highlights: [
      "Bangkok temple tours",
      "Phuket beach relaxation",
      "Thai cooking class",
      "Phi Phi Islands day trip",
      "Floating market visit",
      "Traditional Thai massage",
      "Elephant sanctuary visit",
    ],
    itinerary: [
      {
        day: 1,
        title: "Bangkok Arrival",
        activities: [
          "Airport pickup",
          "Hotel check-in",
          "Wat Pho temple visit",
          "Traditional Thai dinner",
          "Tuk-tuk city tour",
        ],
      },
      {
        day: 2,
        title: "Bangkok Exploration",
        activities: [
          "Grand Palace tour",
          "Wat Arun temple",
          "Floating market",
          "Thai cooking class",
          "Chao Phraya river cruise",
        ],
      },
      {
        day: 3,
        title: "Bangkok to Phuket",
        activities: [
          "Morning flight",
          "Phuket hotel check-in",
          "Patong Beach",
          "Beach activities",
          "Sunset viewing",
        ],
      },
      {
        day: 4,
        title: "Phi Phi Islands",
        activities: [
          "Early boat departure",
          "Maya Bay visit",
          "Snorkeling",
          "Beach lunch",
          "Island hopping",
          "Return to Phuket",
        ],
      },
      {
        day: 5,
        title: "Phuket Adventures",
        activities: [
          "Elephant sanctuary",
          "Big Buddha visit",
          "Old Town Phuket",
          "Local market tour",
          "Thai massage",
        ],
      },
      {
        day: 6,
        title: "Beach Relaxation",
        activities: [
          "Free beach day",
          "Water sports",
          "Shopping",
          "Farewell dinner",
          "Traditional dance show",
        ],
      },
      {
        day: 7,
        title: "Departure",
        activities: [
          "Hotel checkout",
          "Last-minute shopping",
          "Airport transfer",
          "Departure",
        ],
      },
    ],
    includes: [
      "3-star hotel accommodation",
      "Daily breakfast",
      "Domestic flights",
      "All transfers",
      "Phi Phi Islands day trip",
      "Thai cooking class",
      "Temple entrance fees",
    ],
    excludes: [
      "International flights",
      "Lunches and dinners (except mentioned)",
      "Personal expenses",
      "Optional activities",
      "Travel insurance",
      "Visa fees",
    ],
    bookingInfo: {
      availability: "Year-round availability",
      minPax: 2,
      maxPax: 16,
      advanceBooking: "5 days minimum",
      cancellation: "Free cancellation up to 24 hours before departure",
    },
  },
};

interface PackageDetailPageProps {
  params: { id: string };
}

export default function PackageDetailPage({ params }: PackageDetailPageProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [activeTab, setActiveTab] = useState("overview");

  const packageId = parseInt(params.id);
  const pkg = packageDetails[packageId as keyof typeof packageDetails];

  if (!pkg) {
    notFound();
  }

  const formatPrice = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        className={`w-5 h-5 ${
          index < Math.floor(rating) ? "text-yellow-400" : "text-gray-300"
        }`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-96 lg:h-[500px] overflow-hidden">
          <Image
            src={pkg.gallery[selectedImage]}
            alt={pkg.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent"></div>

          {/* Content Overlay */}
          <div className="absolute inset-0 flex items-end">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-12">
              <div className="text-white max-w-3xl">
                {pkg.badge && (
                  <div className="inline-block bg-linear-to-r from-red-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
                    {pkg.badge}
                  </div>
                )}
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                  {pkg.title}
                </h1>
                <div className="flex flex-wrap items-center gap-6 text-lg">
                  <span className="flex items-center gap-2">
                    📍 {pkg.destination}
                  </span>
                  <span className="flex items-center gap-2">
                    ⏱️ {pkg.duration}
                  </span>
                  <div className="flex items-center gap-2">
                    {renderStars(pkg.rating)}
                    <span className="ml-2">({pkg.reviews} reviews)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Thumbnails */}
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex gap-4 overflow-x-auto pb-4">
              {pkg.gallery.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative w-24 h-24 rounded-xl overflow-hidden shrink-0 transition-all duration-300 ${
                    selectedImage === index
                      ? "ring-4 ring-blue-500 scale-105"
                      : "hover:scale-105"
                  }`}
                >
                  <Image
                    src={image}
                    alt={`Gallery ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Left Content */}
              <div className="lg:col-span-2">
                {/* Tab Navigation */}
                <div className="flex flex-wrap gap-4 mb-8 border-b border-gray-200">
                  {[
                    { key: "overview", label: "Overview" },
                    { key: "itinerary", label: "Itinerary" },
                    { key: "includes", label: "Includes/Excludes" },
                  ].map((tab) => (
                    <button
                      key={tab.key}
                      onClick={() => setActiveTab(tab.key)}
                      className={`px-6 py-3 font-semibold transition-colors duration-300 border-b-2 ${
                        activeTab === tab.key
                          ? "text-blue-600 border-blue-600"
                          : "text-gray-600 border-transparent hover:text-blue-600"
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                {/* Tab Content */}
                {activeTab === "overview" && (
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-4">
                        About This Package
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-lg">
                        {pkg.description}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-4">
                        Package Highlights
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {pkg.highlights.map((highlight, index) => (
                          <div
                            key={index}
                            className="flex items-start gap-3 p-4 bg-blue-50 rounded-xl"
                          >
                            <div className="p-1 bg-blue-100 rounded-full">
                              <svg
                                className="w-4 h-4 text-blue-600"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </div>
                            <span className="text-gray-700 font-medium">
                              {highlight}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "itinerary" && (
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-gray-800">
                      Daily Itinerary
                    </h3>
                    {pkg.itinerary.map((day) => (
                      <div
                        key={day.day}
                        className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm"
                      >
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                            {day.day}
                          </div>
                          <h4 className="text-xl font-bold text-gray-800">
                            {day.title}
                          </h4>
                        </div>
                        <ul className="space-y-2">
                          {day.activities.map((activity, index) => (
                            <li
                              key={index}
                              className="flex items-center gap-3 text-gray-600"
                            >
                              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                              {activity}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === "includes" && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-2xl font-bold text-green-600 mb-4">
                        ✅ Includes
                      </h3>
                      <ul className="space-y-3">
                        {pkg.includes.map((item, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <svg
                              className="w-5 h-5 text-green-500 mt-0.5"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-red-600 mb-4">
                        ❌ Excludes
                      </h3>
                      <ul className="space-y-3">
                        {pkg.excludes.map((item, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <svg
                              className="w-5 h-5 text-red-500 mt-0.5"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>

              {/* Right Sidebar - Booking Card */}
              <div className="lg:col-span-1">
                <div className="sticky top-24">
                  <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
                    <div className="text-center mb-6">
                      <div className="flex items-baseline justify-center gap-2 mb-2">
                        {pkg.originalPrice && (
                          <span className="text-lg text-gray-500 line-through">
                            {formatPrice(pkg.originalPrice)}
                          </span>
                        )}
                        <span className="text-4xl font-bold text-blue-600">
                          {formatPrice(pkg.price)}
                        </span>
                      </div>
                      <p className="text-gray-600">per person</p>
                      {pkg.originalPrice && (
                        <div className="bg-red-50 text-red-600 px-3 py-1 rounded-full text-sm font-bold inline-block mt-2">
                          Save {formatPrice(pkg.originalPrice - pkg.price)}
                        </div>
                      )}
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h4 className="font-bold text-gray-800 mb-3">
                          Booking Information
                        </h4>
                        <div className="space-y-2 text-sm text-gray-600">
                          <div className="flex justify-between">
                            <span>Availability:</span>
                            <span className="font-medium">
                              {pkg.bookingInfo.availability}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span>Group Size:</span>
                            <span className="font-medium">
                              {pkg.bookingInfo.minPax}-{pkg.bookingInfo.maxPax}{" "}
                              people
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span>Advance Booking:</span>
                            <span className="font-medium">
                              {pkg.bookingInfo.advanceBooking}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span>Cancellation:</span>
                            <span className="font-medium text-green-600">
                              Free
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <button className="w-full bg-linear-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl">
                          Book Now
                        </button>
                        <button className="w-full border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-4 rounded-xl font-bold transition-all duration-300">
                          Get Quote
                        </button>
                        <button className="w-full border border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-4 rounded-xl font-medium transition-all duration-300">
                          💬 Chat with Expert
                        </button>
                      </div>

                      <div className="pt-6 border-t border-gray-200">
                        <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                          <svg
                            className="w-4 h-4 text-green-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span>Instant confirmation</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
