const features = [
  {
    icon: (
      <svg
        className="w-12 h-12"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      </svg>
    ),
    title: "Expert Guidance",
    description:
      "Our experienced travel consultants provide personalized recommendations and handle every detail of your journey.",
    features: ["24/7 Support", "Local Expertise", "Custom Itineraries"],
  },
  {
    icon: (
      <svg
        className="w-12 h-12"
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
    title: "Best Value",
    description:
      "We negotiate the best rates with our partners and offer transparent pricing with no hidden fees.",
    features: ["Competitive Prices", "No Hidden Fees", "Best Rate Guarantee"],
  },
  {
    icon: (
      <svg
        className="w-12 h-12"
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
    title: "Personalized Service",
    description:
      "Every trip is tailored to your preferences, budget, and travel style for an unforgettable experience.",
    features: ["Tailored Experiences", "Flexible Booking", "Personal Touch"],
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
            Why Choose Devaaya Holidays?
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            With over a decade of experience in international travel from Nepal,
            we&apos;ve helped thousands of travelers create unforgettable
            memories worldwide.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 relative"
            >
              {/* Icon */}
              <div className="text-cyan-600 mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                <div className="w-10 h-10 sm:w-12 sm:h-12">{feature.icon}</div>
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-3 sm:mb-4 group-hover:text-cyan-600 transition-colors">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-slate-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                {feature.description}
              </p>

              {/* Feature List */}
              <ul className="space-y-2 sm:space-y-3">
                {feature.features.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="flex items-center gap-2 sm:gap-3"
                  >
                    <div className="w-4 h-4 sm:w-5 sm:h-5 bg-cyan-100 rounded-full flex items-center justify-center shrink-0">
                      <svg
                        className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-cyan-600"
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
                    <span className="text-slate-700 font-medium text-sm sm:text-base">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 sm:mt-20 bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-12 shadow-lg border border-gray-100">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-cyan-600 mb-1 sm:mb-2">
                10+
              </div>
              <div className="text-slate-600 font-medium text-xs sm:text-sm lg:text-base">
                Years Experience
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-cyan-600 mb-1 sm:mb-2">
                5000+
              </div>
              <div className="text-slate-600 font-medium text-xs sm:text-sm lg:text-base">
                Happy Travelers
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-cyan-600 mb-1 sm:mb-2">
                50+
              </div>
              <div className="text-slate-600 font-medium text-xs sm:text-sm lg:text-base">
                Destinations
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-cyan-600 mb-1 sm:mb-2">
                98%
              </div>
              <div className="text-slate-600 font-medium text-xs sm:text-sm lg:text-base">
                Satisfaction Rate
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
