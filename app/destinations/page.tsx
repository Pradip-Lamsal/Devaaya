import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Image from "next/image";
import Link from "next/link";

const destinations = [
  {
    id: "dubai",
    name: "Dubai, UAE",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&h=600&fit=crop",
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
  },
  {
    id: "maldives",
    name: "Maldives",
    image:
      "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=800&h=600&fit=crop",
    description: "Pristine beaches, overwater villas, and crystal clear waters",
    packages: 8,
    startingPrice: 2850,
    highlights: [
      "Overwater Villas",
      "Diving & Snorkeling",
      "Sunset Cruises",
      "Spa Treatments",
    ],
  },
  {
    id: "turkey",
    name: "Istanbul, Turkey",
    image:
      "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=800&h=600&fit=crop",
    description: "Where Europe meets Asia - rich history and vibrant culture",
    packages: 15,
    startingPrice: 1650,
    highlights: [
      "Hagia Sophia",
      "Blue Mosque",
      "Cappadocia",
      "Bosphorus Cruise",
    ],
  },
  {
    id: "thailand",
    name: "Bangkok, Thailand",
    image:
      "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=800&h=600&fit=crop",
    description: "Land of smiles with beautiful beaches and temples",
    packages: 18,
    startingPrice: 1250,
    highlights: [
      "Grand Palace",
      "Floating Markets",
      "Phuket Beaches",
      "Thai Cuisine",
    ],
  },
  {
    id: "paris",
    name: "Paris, France",
    image:
      "https://images.unsplash.com/photo-1502602898536-47ad22581b52?w=800&h=600&fit=crop",
    description: "The city of love, art, and timeless elegance",
    packages: 10,
    startingPrice: 2950,
    highlights: [
      "Eiffel Tower",
      "Louvre Museum",
      "Seine Cruise",
      "Versailles Palace",
    ],
  },
  {
    id: "london",
    name: "London, UK",
    image:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&h=600&fit=crop",
    description: "Historic landmarks, royal palaces, and modern attractions",
    packages: 14,
    startingPrice: 3150,
    highlights: [
      "Big Ben",
      "Buckingham Palace",
      "British Museum",
      "Tower Bridge",
    ],
  },
  {
    id: "singapore",
    name: "Singapore",
    image:
      "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&h=600&fit=crop",
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
      "https://images.unsplash.com/photo-1552832230-c0197047daf1?w=800&h=600&fit=crop",
    description: "Eternal city with ancient history and Renaissance art",
    packages: 11,
    startingPrice: 2850,
    highlights: ["Colosseum", "Vatican City", "Trevi Fountain", "Roman Forum"],
  },
  {
    id: "malaysia",
    name: "Kuala Lumpur, Malaysia",
    image:
      "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=800&h=600&fit=crop",
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
];

const formatPrice = (amount: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

export default function DestinationsPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 bg-slate-900 text-white overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1600&h=900&fit=crop"
              alt="Travel destinations"
              fill
              className="object-cover opacity-30"
            />
          </div>
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Explore Amazing Destinations
            </h1>
            <p className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              Discover incredible places around the world with our carefully
              curated travel packages from Nepal
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Plan Your Trip
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300">
                Get Expert Advice
              </button>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-12 bg-slate-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-slate-800 mb-2">
                  {destinations.length} Destinations Available
                </h2>
                <p className="text-slate-600">
                  Find your perfect getaway destination
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <select className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>Sort by Price</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Most Popular</option>
                  <option>Newest</option>
                </select>
                <select className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>All Regions</option>
                  <option>Asia</option>
                  <option>Europe</option>
                  <option>Middle East</option>
                  <option>Indian Ocean</option>
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Destinations Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {destinations.map((destination) => (
                <div
                  key={destination.id}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100"
                >
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={destination.image}
                      alt={destination.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2">
                      <span className="text-sm font-semibold text-slate-700">
                        {destination.packages} packages
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors">
                      {destination.name}
                    </h3>

                    <p className="text-slate-600 mb-4 leading-relaxed">
                      {destination.description}
                    </p>

                    {/* Highlights */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-slate-700 mb-2">
                        Top Attractions:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {destination.highlights.map((highlight, index) => (
                          <span
                            key={index}
                            className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Price and CTA */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <div>
                        <p className="text-sm text-slate-500 mb-1">
                          Starting from
                        </p>
                        <p className="text-2xl font-bold text-blue-600">
                          {formatPrice(destination.startingPrice)}
                        </p>
                      </div>
                      <Link
                        href={`/destinations/${destination.id}`}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
                      >
                        Explore
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Can&apos;t Find Your Dream Destination?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Let us create a custom travel package tailored specifically to
              your preferences and budget.
            </p>
            <button className="bg-white text-blue-600 hover:bg-slate-100 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Request Custom Package
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
