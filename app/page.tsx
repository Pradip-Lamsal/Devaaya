import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import BlogPreview from "@/components/sections/BlogPreview";
import Hero from "@/components/sections/Hero";
import Testimonials from "@/components/sections/Testimonials";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import { getAllPackages, getPackageById } from "@/lib/packages";
import Image from "next/image";
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

        {/* ICC World Cup Cricket 2026 CTA Section */}
        <section className="relative py-4 px-4 sm:px-6 lg:px-8 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src="/icc.jpg"
              alt="ICC Cricket World Cup 2026 Stadium"
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-linear-to-r from-slate-900/90 via-slate-900/80 to-slate-900/70"></div>
          </div>

          <div className="relative max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 items-center mb-4">
              {/* Left: Stadium Image */}
              <div className="relative hidden lg:block">
                <div className="rounded-2xl overflow-hidden shadow-lg border-3 border-yellow-400">
                  <Image
                    src="/stadium.jpg"
                    alt="ICC World Cup Cricket 2026 - Cricket Stadium"
                    width={600}
                    height={400}
                    className="w-full h-24 object-cover"
                  />
                </div>
              </div>

              {/* Right: Content */}
              <div className="text-white">
                <div className="mb-2 inline-block bg-linear-to-r from-yellow-400 to-amber-400 text-slate-900 px-3 py-0.5 rounded-full font-bold text-xs shadow-lg">
                  🏏 LIMITED AVAILABILITY - BOOK NOW!
                </div>
                <h2 className="text-lg md:text-xl font-bold mb-1 leading-tight">
                  ICC World Cup Cricket 2026
                </h2>
                <p className="text-xs text-slate-100 mb-3 leading-relaxed hidden sm:block">
                  Experience the greatest cricket tournament on earth! Live
                  matches, premium seating, luxury 5-star hotels, and VIP
                  treatment.
                </p>

                <div className="space-y-1 mb-3">
                  <div className="hidden sm:flex items-start gap-2 bg-white/10 backdrop-blur-sm p-1.5 rounded-lg border border-white/20">
                    <span className="text-yellow-400 text-sm font-bold shrink-0">
                      ✓
                    </span>
                    <div>
                      <p className="font-bold text-white text-xs">
                        5 Premium Cricket Match Tickets
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 bg-white/10 backdrop-blur-sm p-1.5 rounded-lg border border-white/20">
                    <span className="text-yellow-400 text-sm font-bold shrink-0">
                      ✓
                    </span>
                    <div>
                      <p className="font-bold text-white text-xs">
                        Luxury Hotels & VIP Treatment
                      </p>
                    </div>
                  </div>
                </div>

                {/* Pricing */}
                <div className="bg-linear-to-r from-yellow-400 to-amber-400 text-slate-900 rounded-lg p-2.5 mb-3">
                  <p className="text-xs font-bold mb-0">PRICE PER PERSON</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-xl font-bold">Rs. 599,900</span>
                    <span className="text-xs line-through opacity-70 hidden sm:inline">
                      Rs. 899,900
                    </span>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-1.5">
                  <Link href="/packages/14" className="flex-1">
                    <button className="w-full bg-linear-to-r from-yellow-400 to-amber-400 hover:from-yellow-500 hover:to-amber-500 text-slate-900 px-3 py-1.5 rounded-lg font-bold text-xs shadow-lg transform hover:scale-105 transition-all">
                      🎫 Book Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-4 pt-4 border-t border-white/20">
              <div className="text-center">
                <p className="text-lg font-bold text-yellow-400">20</p>
                <p className="text-slate-200 mt-0.5 text-xs">Teams</p>
              </div>
              <div className="text-center">
                <p className="text-lg font-bold text-yellow-400">55</p>
                <p className="text-slate-200 mt-0.5 text-xs">Matches</p>
              </div>
              <div className="text-center">
                <p className="text-lg font-bold text-yellow-400">14</p>
                <p className="text-slate-200 mt-0.5 text-xs">Days</p>
              </div>
              <div className="text-center">
                <p className="text-lg font-bold text-yellow-400">2026</p>
                <p className="text-slate-200 mt-0.5 text-xs">ICC Cup</p>
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

                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                  <div className="lg:flex">
                    {/* Package Image */}
                    <div className="lg:w-1/2">
                      <div className="relative h-32 lg:h-full">
                        <img
                          src={
                            featuredPackage.id === 13
                              ? "/world-cup-2026-stadium.jpg"
                              : featuredPackage.id === 14
                              ? "/cricket-world-cup-2026.svg"
                              : "/icc.jpg"
                          }
                          alt={featuredPackage.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                    </div>

                    {/* Package Details */}
                    <div className="lg:w-1/2 p-6 lg:p-8 flex flex-col justify-center">
                      <div className="mb-3">
                        <p className="text-cyan-600 font-semibold text-xs mb-2">
                          {featuredPackage.duration}
                        </p>
                        <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-3 leading-tight">
                          {featuredPackage.title}
                        </h3>
                        <p className="text-slate-600 mb-4 text-base leading-relaxed">
                          {featuredPackage.description}
                        </p>
                      </div>

                      {/* Highlights */}
                      <div className="grid grid-cols-2 gap-2 mb-4">
                        {featuredPackage.highlights
                          .slice(0, 4)
                          .map((highlight, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <span className="text-yellow-500 text-sm">✓</span>
                              <span className="text-slate-600 text-sm">
                                {highlight}
                              </span>
                            </div>
                          ))}
                      </div>

                      {/* Pricing */}
                      <div className="mb-4 pb-4 border-b border-slate-200">
                        <div className="flex items-baseline gap-2">
                          <span className="text-2xl font-bold text-cyan-600">
                            Rs. {featuredPackage.price.toLocaleString()}
                          </span>
                          {featuredPackage.originalPrice && (
                            <>
                              <span className="text-base text-slate-400 line-through">
                                Rs.{" "}
                                {featuredPackage.originalPrice.toLocaleString()}
                              </span>
                              <span className="text-green-600 font-bold bg-green-50 px-3 py-1 rounded-lg text-sm">
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
                        className="inline-flex items-center gap-2 text-cyan-600 hover:text-cyan-700 font-semibold transition-colors"
                      >
                        Explore Package →
                      </Link>
                    </div>
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
