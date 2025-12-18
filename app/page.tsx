import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import BlogPreview from "@/components/sections/BlogPreview";
import Hero from "@/components/sections/Hero";
import Testimonials from "@/components/sections/Testimonials";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import { getAllPackages, getPackageById } from "@/lib/packages";
import Link from "next/link";

export default function Home() {
  const packages = getAllPackages();
  // Get Baku package (ID 13) as featured
  const featuredPackage = getPackageById(13) || packages[0];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <Hero />

        {/* FIFA World Cup 2026 CTA Section */}
        <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src="/dubai-luxury.jpg"
              alt="FIFA World Cup 2026 Stadium"
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-linear-to-r from-slate-900/90 via-slate-900/80 to-slate-900/70"></div>
          </div>

          <div className="relative max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              {/* Left: Stadium Image */}
              <div className="relative hidden lg:block">
                <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-yellow-400">
                  <img
                    src="/maldives-paradise.jpg"
                    alt="FIFA World Cup 2026 - Football Stadium"
                    className="w-full h-96 object-cover"
                  />
                </div>
              </div>

              {/* Right: Content */}
              <div className="text-white">
                <div className="mb-6 inline-block bg-linear-to-r from-yellow-400 to-amber-400 text-slate-900 px-6 py-2 rounded-full font-bold text-sm shadow-lg">
                  ⚽ LIMITED AVAILABILITY - BOOK NOW!
                </div>
                <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                  FIFA World Cup 2026
                </h2>
                <p className="text-xl text-slate-100 mb-8 leading-relaxed">
                  Experience the greatest football tournament on earth! Live
                  matches, premium seating, luxury 5-star hotels, and VIP
                  treatment.
                </p>

                <div className="space-y-4 mb-10">
                  <div className="flex items-start gap-4 bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
                    <span className="text-yellow-400 text-3xl font-bold shrink-0">
                      ✓
                    </span>
                    <div>
                      <p className="font-bold text-white text-lg">
                        3 Premium Match Tickets
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
                    <span className="text-yellow-400 text-3xl font-bold shrink-0">
                      ✓
                    </span>
                    <div>
                      <p className="font-bold text-white text-lg">
                        9 Nights 5-Star Hotels
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
                    <span className="text-yellow-400 text-3xl font-bold shrink-0">
                      ✓
                    </span>
                    <div>
                      <p className="font-bold text-white text-lg">
                        All-Inclusive Package
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
                    <span className="text-yellow-400 text-3xl font-bold shrink-0">
                      ✓
                    </span>
                    <div>
                      <p className="font-bold text-white text-lg">
                        Only 40 Spots Available
                      </p>
                    </div>
                  </div>
                </div>

                {/* Pricing */}
                <div className="bg-linear-to-r from-yellow-400 to-amber-400 text-slate-900 rounded-2xl p-8 mb-8">
                  <p className="text-sm font-bold mb-2">PRICE PER PERSON</p>
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="text-5xl font-bold">Rs. 599,900</span>
                    <span className="text-2xl line-through opacity-70">
                      Rs. 899,900
                    </span>
                  </div>
                  <p className="font-bold text-lg">
                    Save Rs. 300,000 (33% OFF!)
                  </p>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/packages/14" className="flex-1">
                    <button className="w-full bg-linear-to-r from-yellow-400 to-amber-400 hover:from-yellow-500 hover:to-amber-500 text-slate-900 px-8 py-4 rounded-xl font-bold text-lg shadow-lg transform hover:scale-105 transition-all">
                      🎫 Book World Cup Package
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 pt-16 border-t border-white/20">
              <div className="text-center">
                <p className="text-4xl font-bold text-yellow-400">32</p>
                <p className="text-slate-200 mt-2">Teams Competing</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-yellow-400">64</p>
                <p className="text-slate-200 mt-2">Exciting Matches</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-yellow-400">12</p>
                <p className="text-slate-200 mt-2">Days Experience</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-yellow-400">2026</p>
                <p className="text-slate-200 mt-2">World Cup Year</p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Travel Package - with Popular Badge */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-slate-50 to-white">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16">
              <p className="text-cyan-600 font-semibold mb-2 uppercase tracking-wider">
                Our Bestsellers
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Featured Travel Package
              </h2>
            </div>

            {/* Featured Package Card with Popular Badge */}
            {featuredPackage && (
              <div className="relative group">
                {/* Popular Badge - Red with Fire Icon - Top Right Corner */}
                <div className="absolute -top-4 right-0 flex items-center gap-2 z-10">
                  <span className="text-red-500 text-2xl">🔥</span>
                  <span className="bg-red-500 text-white px-6 py-2 rounded-full font-bold text-lg shadow-lg">
                    Popular
                  </span>
                </div>

                <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  {/* Package Image */}
                  <div className="relative h-96 overflow-hidden">
                    <img 
                      src={
                        featuredPackage.id === 13
                          ? "/dubai-luxury.jpg"
                          : featuredPackage.id === 14
                          ? "/maldives-paradise.jpg"
                          : "/istanbul-heritage.jpg"
                      }
                      alt={featuredPackage.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 to-transparent"></div>
                  </div>

                  {/* Package Details */}
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <p className="text-cyan-600 font-semibold text-sm mb-2">
                          {featuredPackage.duration}
                        </p>
                        <h3 className="text-3xl font-bold text-slate-900">
                          {featuredPackage.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-slate-600 mb-6 text-lg">
                      {featuredPackage.description}
                    </p>

                    {/* Highlights */}
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      {featuredPackage.highlights
                        .slice(0, 4)
                        .map((highlight, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <span className="text-yellow-500">✓</span>
                            <span className="text-slate-600">{highlight}</span>
                          </div>
                        ))}
                    </div>

                    {/* Pricing */}
                    <div className="mb-8 pb-8 border-b border-slate-200">
                      <div className="flex items-baseline gap-3">
                        <span className="text-3xl font-bold text-cyan-600">
                          Rs. {featuredPackage.price.toLocaleString()}
                        </span>
                        {featuredPackage.originalPrice && (
                          <>
                            <span className="text-xl text-slate-400 line-through">
                              Rs.{" "}
                              {featuredPackage.originalPrice.toLocaleString()}
                            </span>
                            <span className="text-green-600 font-bold bg-green-50 px-3 py-1 rounded-lg">
                              Save{" "}
                              {Math.round(
                                ((featuredPackage.originalPrice -
                                  featuredPackage.price) /
                                  featuredPackage.originalPrice) *
                                  100
                              )}
                              %
                            </span>
                          </>
                        )}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <Link
                      href={`/packages/${featuredPackage.id}`}
                      className="block w-full bg-linear-to-r from-cyan-600 to-cyan-500 hover:from-cyan-700 hover:to-cyan-600 text-white text-center py-4 rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    >
                      Explore Package →
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Why Choose Us Section */}
        <WhyChooseUs />

        {/* Testimonials Section */}
        <Testimonials />

        {/* Blog Preview Section */}
        <BlogPreview />

        {/* CTA Section */}
        <section className="py-20 bg-linear-to-r from-cyan-600 to-cyan-700 text-white">
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
              <button className="bg-white text-cyan-600 hover:bg-slate-100 px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-lg">
                Get Free Consultation
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-cyan-600 px-8 py-4 rounded-full text-lg font-bold transition-all duration-300">
                📞 Call +977-1-5555555
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
