import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import PackageCard from "@/components/packages/PackageCard";
import TripFilter from "@/components/ui/TripFilter";

// All available packages
const allPackages = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&h=600&fit=crop",
    destination: "Dubai, UAE",
    title: "Dubai Luxury Experience",
    duration: "5 Days, 4 Nights",
    price: 1850,
    originalPrice: 2200,
    rating: 4.9,
    reviews: 124,
    highlights: [
      "Burj Khalifa & Dubai Mall visit",
      "Desert Safari with BBQ dinner",
      "5-star hotel accommodation",
      "Dubai Marina dhow cruise",
    ],
    badge: "Best Seller",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=800&h=600&fit=crop",
    destination: "Maldives",
    title: "Maldives Honeymoon Paradise",
    duration: "6 Days, 5 Nights",
    price: 2850,
    originalPrice: 3200,
    rating: 5.0,
    reviews: 89,
    highlights: [
      "Overwater villa with private pool",
      "Underwater restaurant dining",
      "Seaplane transfers included",
      "Couples spa treatment",
    ],
    badge: "Romantic",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=800&h=600&fit=crop",
    destination: "Istanbul, Turkey",
    title: "Turkey Cultural Discovery",
    duration: "8 Days, 7 Nights",
    price: 1650,
    rating: 4.8,
    reviews: 76,
    highlights: [
      "Hagia Sophia & Blue Mosque tours",
      "Bosphorus cruise experience",
      "Cappadocia hot air balloon",
      "Turkish cuisine cooking class",
    ],
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=800&h=600&fit=crop",
    destination: "Bangkok, Thailand",
    title: "Thailand Adventure Package",
    duration: "7 Days, 6 Nights",
    price: 1250,
    originalPrice: 1450,
    rating: 4.7,
    reviews: 143,
    highlights: [
      "Bangkok temple tours",
      "Phuket beach relaxation",
      "Thai cooking class",
      "Phi Phi Islands day trip",
    ],
    badge: "Adventure",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1502602898536-47ad22581b52?w=800&h=600&fit=crop",
    destination: "Paris, France",
    title: "European Grand Tour",
    duration: "10 Days, 9 Nights",
    price: 2950,
    originalPrice: 3500,
    rating: 4.8,
    reviews: 67,
    highlights: [
      "Eiffel Tower & Louvre Museum",
      "Seine River cruise",
      "Versailles Palace tour",
      "French cuisine experience",
    ],
    badge: "Cultural",
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=600&fit=crop",
    destination: "Santorini, Greece",
    title: "Greek Islands Paradise",
    duration: "7 Days, 6 Nights",
    price: 2150,
    rating: 4.9,
    reviews: 98,
    highlights: [
      "Sunset views in Oia",
      "Traditional Greek villages",
      "Wine tasting tours",
      "Volcanic hot springs",
    ],
  },
  {
    id: 7,
    image:
      "https://images.unsplash.com/photo-1555633514-abcdc5c6061e?w=800&h=600&fit=crop",
    destination: "Tokyo, Japan",
    title: "Japan Cultural Experience",
    duration: "9 Days, 8 Nights",
    price: 2750,
    originalPrice: 3100,
    rating: 4.7,
    reviews: 112,
    highlights: [
      "Tokyo city exploration",
      "Mount Fuji day trip",
      "Traditional ryokan stay",
      "Sushi making class",
    ],
    badge: "Cultural",
  },
  {
    id: 8,
    image:
      "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6b?w=800&h=600&fit=crop",
    destination: "Bali, Indonesia",
    title: "Bali Tropical Escape",
    duration: "6 Days, 5 Nights",
    price: 1450,
    originalPrice: 1650,
    rating: 4.6,
    reviews: 156,
    highlights: [
      "Ubud rice terraces",
      "Temple tours",
      "Beach relaxation",
      "Balinese spa treatments",
    ],
    badge: "Relaxation",
  },
];

export default function PackagesPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-linear-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Explore Our Travel Packages
            </h1>
            <p className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-90">
              Discover amazing destinations worldwide with our carefully crafted
              travel packages designed for unforgettable experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl px-6 py-3 flex items-center gap-4">
                <span className="text-3xl">✈️</span>
                <div className="text-left">
                  <div className="font-bold">8+ Destinations</div>
                  <div className="text-sm opacity-80">Worldwide Coverage</div>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl px-6 py-3 flex items-center gap-4">
                <span className="text-3xl">⭐</span>
                <div className="text-left">
                  <div className="font-bold">4.8/5 Rating</div>
                  <div className="text-sm opacity-80">
                    Customer Satisfaction
                  </div>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl px-6 py-3 flex items-center gap-4">
                <span className="text-3xl">🛡️</span>
                <div className="text-left">
                  <div className="font-bold">100% Secure</div>
                  <div className="text-sm opacity-80">Safe Booking</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <TripFilter />

        {/* Packages Grid */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center mb-12">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">
                  All Travel Packages
                </h2>
                <p className="text-gray-600">
                  {allPackages.length} packages available • Sorted by popularity
                </p>
              </div>

              <div className="flex gap-4">
                <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>Sort by: Popularity</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Duration: Short to Long</option>
                  <option>Rating: Highest First</option>
                </select>

                <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                  <button className="px-4 py-2 bg-blue-600 text-white">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                    </svg>
                  </button>
                  <button className="px-4 py-2 bg-white text-gray-600 hover:bg-gray-50">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {allPackages.map((pkg) => (
                <PackageCard key={pkg.id} {...pkg} />
              ))}
            </div>

            {/* Load More Button */}
            <div className="text-center mt-16">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                Load More Packages
              </button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Can&apos;t Find What You&apos;re Looking For?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-90">
              Let our travel experts create a customized package just for you.
              Tell us your dream destination and we&apos;ll make it happen!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                🎯 Customize Your Trip
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300">
                📞 Call Our Experts
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
