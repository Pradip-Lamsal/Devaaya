import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";

const teamMembers = [
  {
    name: "Ramesh Sharma",
    position: "Founder & CEO",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
    bio: "With 15+ years in the travel industry, Ramesh founded Devaaya Holidays to make international travel accessible for all Nepalese.",
  },
  {
    name: "Sunita Thapa",
    position: "Head of Operations",
    image:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
    bio: "Sunita ensures every trip runs smoothly with her exceptional organizational skills and attention to detail.",
  },
  {
    name: "Bijay Gurung",
    position: "Visa Specialist",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
    bio: "Bijay has helped thousands of Nepalese travelers obtain visas with a 98% success rate across all destinations.",
  },
  {
    name: "Kavita Rai",
    position: "Customer Relations Manager",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
    bio: "Kavita ensures every customer has an exceptional experience from booking to returning home safely.",
  },
];

const achievements = [
  {
    icon: (
      <svg
        className="w-12 h-12 text-blue-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
        />
      </svg>
    ),
    title: "IATA Certified",
    description:
      "International Air Transport Association certified travel agency",
  },
  {
    icon: (
      <svg
        className="w-12 h-12 text-blue-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: "Best Value Guarantee",
    description: "We match any competitor&apos;s price for identical packages",
  },
  {
    icon: (
      <svg
        className="w-12 h-12 text-blue-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
        />
      </svg>
    ),
    title: "24/7 Support",
    description: "Round-the-clock assistance during your travels",
  },
  {
    icon: (
      <svg
        className="w-12 h-12 text-blue-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
    title: "98% Satisfaction",
    description: "Consistently high customer satisfaction ratings",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 bg-slate-900 text-white overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1600&h=900&fit=crop"
              alt="Our team"
              fill
              className="object-cover opacity-30"
            />
          </div>
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              About Devaaya Holidays
            </h1>
            <p className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              Your trusted travel partner for international adventures from
              Nepal since 2014
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-8">
                Our Mission
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed mb-12">
                To make international travel accessible, affordable, and
                unforgettable for every Nepalese traveler. We believe that
                everyone deserves to explore the world and create lasting
                memories, regardless of their background or budget.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">
                    10+
                  </div>
                  <div className="text-slate-600">Years of Excellence</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">
                    5000+
                  </div>
                  <div className="text-slate-600">Happy Travelers</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">
                    50+
                  </div>
                  <div className="text-slate-600">Global Destinations</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-6">
                    Our Story
                  </h2>
                  <div className="space-y-6 text-slate-600 leading-relaxed">
                    <p>
                      Founded in 2014 by Ramesh Sharma, Devaaya Holidays began
                      with a simple vision: to help fellow Nepalese explore the
                      world beyond our beautiful borders. Having experienced the
                      challenges of international travel firsthand, Ramesh
                      wanted to create a service that would eliminate the stress
                      and confusion often associated with overseas trips.
                    </p>
                    <p>
                      What started as a small office in Thamel has grown into
                      one of Nepal&apos;s most trusted travel agencies.
                      We&apos;ve helped thousands of families, couples, and solo
                      travelers discover amazing destinations across Asia,
                      Europe, and beyond.
                    </p>
                    <p>
                      Our success comes from our commitment to personalized
                      service, competitive pricing, and genuine care for every
                      traveler who entrusts us with their dream vacation. We
                      don&apos;t just book trips; we create experiences that
                      last a lifetime.
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <Image
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=500&fit=crop"
                    alt="Our office"
                    width={600}
                    height={500}
                    className="rounded-2xl shadow-lg"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-2xl shadow-xl">
                    <div className="text-2xl font-bold">2014</div>
                    <div className="text-sm">Since</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-6">
                Our Values
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                These core values guide everything we do and shape every
                interaction with our customers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-slate-50 rounded-2xl hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex justify-center mb-4">
                    {achievement.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3">
                    {achievement.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-6">
                Meet Our Team
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Our experienced team of travel professionals is dedicated to
                making your journey extraordinary.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                >
                  <div className="relative w-32 h-32 mx-auto mb-6">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-semibold mb-4">
                    {member.position}
                  </p>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Join thousands of satisfied travelers who have trusted us with
              their international adventures. Let&apos;s plan your perfect trip
              today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 hover:bg-slate-100 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Get Free Consultation
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300">
                View Packages
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
