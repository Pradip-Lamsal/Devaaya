/**
 * PackageHero Component
 * Hero section for package detail pages featuring image, title, rating, and key info
 */

"use client";

import {
  ClockIcon,
  LocationIcon,
  StarIcon,
  UsersIcon,
} from "@/components/ui/Icons";
import { formatPrice, generateStarRating } from "@/lib/packages";
import { TravelPackage } from "@/types/package";
import Image from "next/image";

interface PackageHeroProps {
  package: TravelPackage;
}

export default function PackageHero({ package: pkg }: PackageHeroProps) {
  const stars = generateStarRating(pkg.rating);

  return (
    <div className="relative h-[70vh] overflow-hidden">
      {/* Background Image */}
      <Image
        src={pkg.image}
        alt={pkg.title}
        fill
        className="object-cover"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/50 to-black/20" />

      {/* Content */}
      <div className="absolute inset-0 flex items-end">
        <div className="container mx-auto px-4 pb-16">
          <div className="max-w-4xl text-white">
            {/* Badge */}
            {pkg.badge && (
              <div className="mb-4">
                <span className="inline-block px-4 py-2 bg-[#2D6E89] text-white rounded-full text-sm font-semibold">
                  {pkg.badge}
                </span>
              </div>
            )}

            {/* Title */}
            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight text-white drop-shadow-lg">
              {pkg.title}
            </h1>

            {/* Location */}
            <div className="flex items-center mb-4">
              <LocationIcon className="w-5 h-5 mr-2 text-white bg-[#2D6E89] rounded-full p-1" />
              <span className="text-xl text-white drop-shadow-lg">
                {pkg.destination}
              </span>
            </div>

            {/* Rating and Reviews */}
            <div className="flex items-center mb-6">
              <div className="flex items-center mr-4">
                {stars.map((filled, index) => (
                  <StarIcon
                    key={index}
                    filled={filled}
                    className="w-5 h-5 text-yellow-400 drop-shadow"
                  />
                ))}
                <span className="ml-2 text-lg font-semibold text-white drop-shadow">
                  {pkg.rating}
                </span>
              </div>
              <span className="text-gray-200 drop-shadow">
                ({pkg.reviews} reviews)
              </span>
            </div>

            {/* Package Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {/* Duration */}
              <div className="flex items-center">
                <ClockIcon className="w-6 h-6 mr-3 text-white bg-[#2D6E89] rounded-full p-1" />
                <div>
                  <div className="text-sm text-gray-200 font-medium">
                    Duration
                  </div>
                  <div className="text-lg font-semibold text-white drop-shadow">
                    {pkg.duration}
                  </div>
                </div>
              </div>

              {/* Group Size */}
              <div className="flex items-center">
                <UsersIcon className="w-6 h-6 mr-3 text-white bg-[#2D6E89] rounded-full p-1" />
                <div>
                  <div className="text-sm text-gray-200 font-medium">
                    Group Size
                  </div>
                  <div className="text-lg font-semibold text-white drop-shadow">
                    {pkg.bookingInfo.minPax}-{pkg.bookingInfo.maxPax} people
                  </div>
                </div>
              </div>

              {/* Price */}
              <div className="flex items-center">
                <div>
                  <div className="text-sm text-gray-200 font-medium">
                    Starting from
                  </div>
                  <div className="flex items-center">
                    <span className="text-3xl font-bold text-white bg-[#2D6E89] px-3 py-1 rounded-lg drop-shadow-lg">
                      {formatPrice(pkg.price)}
                    </span>
                    {pkg.originalPrice && (
                      <span className="ml-2 text-lg text-gray-300 line-through drop-shadow">
                        {formatPrice(pkg.originalPrice)}
                      </span>
                    )}
                  </div>
                  <div className="text-sm text-gray-200 font-medium">
                    per person
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
