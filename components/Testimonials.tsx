"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Sita Maharjan",
    location: "Kathmandu, Nepal",
    image:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "Devaaya Holidays made our Dubai trip absolutely perfect! From visa assistance to hotel bookings, everything was seamless. The team&apos;s expertise and personal touch made all the difference.",
    trip: "Dubai Family Package",
    date: "October 2024",
  },
  {
    id: 2,
    name: "Rajesh Shrestha",
    location: "Pokhara, Nepal",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "Our honeymoon in Maldives was a dream come true! The resort was exactly as promised, and the underwater dining experience was magical. Thank you for making our special trip unforgettable.",
    trip: "Maldives Honeymoon",
    date: "September 2024",
  },
  {
    id: 3,
    name: "Priya Tamang",
    location: "Lalitpur, Nepal",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "The Europe tour was well-organized and covered all the places we wanted to visit. Our guide was knowledgeable, and the accommodations were excellent. Highly recommend Devaaya Holidays!",
    trip: "Europe Grand Tour",
    date: "August 2024",
  },
  {
    id: 4,
    name: "Binod Thapa",
    location: "Chitwan, Nepal",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "Thailand was an adventure of a lifetime! From Bangkok&apos;s bustling markets to Phuket&apos;s pristine beaches, every moment was perfectly planned. The team&apos;s 24/7 support was incredible.",
    trip: "Thailand Adventure",
    date: "July 2024",
  },
  {
    id: 5,
    name: "Maya Gurung",
    location: "Dharan, Nepal",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "Istanbul was breathtaking! The mix of history and modern culture was fascinating. Devaaya Holidays arranged everything perfectly, from the Blue Mosque tour to the Bosphorus cruise.",
    trip: "Turkey Cultural Tour",
    date: "June 2024",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!isPaused) {
      const timer = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);

      return () => clearInterval(timer);
    }
  }, [isPaused]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        className={`w-5 h-5 ${
          index < rating ? "text-yellow-400" : "text-gray-300"
        }`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
            What Our Travelers Say
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Don&apos;t just take our word for it. Here&apos;s what some of our
            happy travelers have to say about their experiences with Devaaya
            Holidays.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full shrink-0">
                  <div className="bg-slate-50 p-6 sm:p-8 lg:p-12 rounded-xl sm:rounded-2xl">
                    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 sm:gap-8">
                      {/* Avatar */}
                      <div className="shrink-0">
                        <div className="relative w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32">
                          <Image
                            src={testimonial.image}
                            alt={testimonial.name}
                            fill
                            className="object-cover rounded-full shadow-lg"
                          />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 text-center lg:text-left">
                        {/* Stars */}
                        <div className="flex justify-center lg:justify-start mb-3 sm:mb-4">
                          {renderStars(testimonial.rating)}
                        </div>

                        {/* Quote */}
                        <blockquote className="text-base sm:text-lg lg:text-xl text-slate-700 leading-relaxed mb-4 sm:mb-6 italic">
                          &quot;{testimonial.text}&quot;
                        </blockquote>

                        {/* Author Info */}
                        <div className="border-t border-slate-200 pt-4 sm:pt-6">
                          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-2 sm:gap-0">
                            <div>
                              <h4 className="text-lg sm:text-xl font-bold text-slate-800 mb-1">
                                {testimonial.name}
                              </h4>
                              <p className="text-sm sm:text-base text-slate-600 mb-2 lg:mb-0">
                                {testimonial.location}
                              </p>
                            </div>
                            <div className="text-xs sm:text-sm text-slate-500 bg-cyan-100 px-2 sm:px-3 py-1 rounded-full inline-block">
                              {testimonial.trip} • {testimonial.date}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg hover:shadow-xl p-2 sm:p-3 rounded-full transition-all duration-300 hover:scale-110 z-10"
          >
            <svg
              className="w-4 h-4 sm:w-6 sm:h-6 text-slate-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg hover:shadow-xl p-2 sm:p-3 rounded-full transition-all duration-300 hover:scale-110 z-10"
          >
            <svg
              className="w-4 h-4 sm:w-6 sm:h-6 text-slate-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Indicators */}
        <div className="flex justify-center mt-6 sm:mt-8 gap-2 sm:gap-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-cyan-600 scale-125"
                  : "bg-slate-300 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-8 bg-slate-50 px-4 sm:px-8 py-3 sm:py-4 rounded-full">
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 text-green-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm sm:text-base text-slate-700 font-medium">
                Verified Reviews
              </span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-slate-300"></div>
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-sm sm:text-base text-slate-700 font-medium">
                4.9/5 Average Rating
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
