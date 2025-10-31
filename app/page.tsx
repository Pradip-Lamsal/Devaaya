import BlogPreview from "@/components/BlogPreview";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PackageCard from "@/components/PackageCard";
import Testimonials from "@/components/Testimonials";
import TripFilter from "@/components/TripFilter";
import WhyChooseUs from "@/components/WhyChooseUs";
import Link from "next/link";

// Sample package data
const featuredPackages = [
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
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <Hero />

        {/* Trip Filter Section */}
        <TripFilter />

        {/* Featured Packages Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
                Featured Travel Packages
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Discover our most popular international destinations with
                carefully crafted packages designed for Nepalese travelers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
              {featuredPackages.map((pkg) => (
                <PackageCard key={pkg.id} {...pkg} />
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href="/packages">
                <button
                  className="text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:brightness-110"
                  style={{
                    background: "linear-gradient(to right, #2D6E89, #245566)",
                  }}
                >
                  View All Packages
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <WhyChooseUs />

        {/* Testimonials Section */}
        <Testimonials />

        {/* Blog Preview Section */}
        <BlogPreview />

        {/* CTA Section */}
        <section
          className="py-20 text-white"
          style={{
            background:
              "linear-gradient(135deg, #2D6E89 0%, #245566 50%, #1e4654 100%)",
          }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-90">
              Let our travel experts help you plan the perfect international
              trip. Contact us today for personalized assistance and exclusive
              offers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                className="bg-white text-cyan-600 hover:bg-slate-100 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                style={{ color: "#2D6E89" }}
              >
                Get Free Consultation
              </button>
              <button
                className="border-2 border-white text-white hover:bg-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300"
                style={
                  { "--hover-text-color": "#2D6E89" } as React.CSSProperties
                }
              >
                Call +977-1-4123456
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
