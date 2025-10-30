import Image from "next/image";
import Link from "next/link";

interface PackageCardProps {
  id: number;
  image: string;
  destination: string;
  title: string;
  duration: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  highlights: string[];
  badge?: string;
}

const PackageCard = ({
  id,
  image,
  destination,
  title,
  duration,
  price,
  originalPrice,
  rating,
  reviews,
  highlights,
  badge,
}: PackageCardProps) => {
  const formatPrice = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 overflow-hidden border border-gray-100 relative hover:-translate-y-2">
      {/* Image Container */}
      <div className="relative h-64 sm:h-72 lg:h-80 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/50 transition-all duration-300"></div>

        {/* Badge */}
        {badge && (
          <div className="absolute top-4 left-4 bg-linear-to-r from-cyan-600 to-cyan-700 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg backdrop-blur-sm transform group-hover:scale-110 transition-transform duration-300">
            {badge}
          </div>
        )}

        {/* Rating */}
        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md rounded-xl px-3 py-2 flex items-center gap-1.5 shadow-lg transform group-hover:scale-110 transition-transform duration-300">
          <svg
            className="w-4 h-4 text-yellow-400 fill-current"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <span className="text-sm font-bold text-slate-800">{rating}</span>
        </div>

        {/* Destination Tag - Overlay on Image */}
        <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md text-slate-800 px-4 py-2 rounded-xl text-sm font-bold shadow-lg transform group-hover:translate-x-1 transition-transform duration-300">
          📍 {destination}
        </div>

        {/* Price Preview - Overlay on Image */}
        <div className="absolute bottom-4 right-4 bg-cyan-600/95 backdrop-blur-md text-white px-4 py-2 rounded-xl shadow-lg transform group-hover:scale-110 transition-transform duration-300">
          <div className="text-right">
            <div className="text-lg font-bold">{formatPrice(price)}</div>
            <div className="text-xs opacity-90">per person</div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 lg:p-8">
        {/* Title */}
        <h3 className="text-xl lg:text-2xl font-bold text-slate-800 mb-3 line-clamp-2 group-hover:text-cyan-600 transition-colors">
          {title}
        </h3>

        {/* Duration */}
        <div className="flex items-center gap-2 mb-4 group-hover:scale-105 transition-transform duration-300">
          <div className="p-2 bg-cyan-50 rounded-lg group-hover:bg-cyan-100 transition-colors duration-300">
            <svg
              className="w-5 h-5 text-cyan-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <span className="text-slate-700 font-semibold">{duration}</span>
        </div>

        {/* Highlights */}
        <div className="mb-6">
          <ul className="space-y-2">
            {highlights.slice(0, 3).map((highlight, index) => (
              <li
                key={index}
                className="flex items-start gap-3 text-sm text-slate-600 group-hover:text-slate-700 transition-colors duration-300"
              >
                <div className="p-1 bg-green-50 rounded-full mt-0.5 group-hover:bg-green-100 transition-colors duration-300">
                  <svg
                    className="w-3 h-3 text-green-600"
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
                <span className="leading-relaxed">{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Price and CTA */}
        <div className="border-t border-gray-100 pt-6 group-hover:border-cyan-100 transition-colors duration-300">
          <div className="flex items-center justify-between mb-4">
            <div className="flex-1">
              <div className="flex items-baseline gap-2 flex-wrap">
                {originalPrice && (
                  <span className="text-sm text-slate-500 line-through">
                    {formatPrice(originalPrice)}
                  </span>
                )}
                <span className="text-2xl lg:text-3xl font-bold text-cyan-600 group-hover:scale-105 transition-transform duration-300">
                  {formatPrice(price)}
                </span>
              </div>
              <p className="text-sm text-slate-500 font-medium">per person</p>
            </div>

            {originalPrice && (
              <div className="bg-red-50 text-red-600 px-3 py-1 rounded-full text-sm font-bold group-hover:scale-105 transition-transform duration-300">
                Save {formatPrice(originalPrice - price)}
              </div>
            )}
          </div>

          <Link
            href={`/packages/${id}`}
            className="block w-full bg-linear-to-r from-cyan-600 to-cyan-700 hover:from-cyan-700 hover:to-cyan-800 text-white px-6 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl text-center text-lg group-hover:shadow-2xl"
          >
            <span className="flex items-center justify-center gap-2">
              View Details
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>
          </Link>
        </div>

        {/* Reviews */}
        <div className="mt-4 flex items-center justify-between text-sm text-slate-500">
          <div className="flex items-center gap-2">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2v-6a2 2 0 012-2h8z"
              />
            </svg>
            <span className="font-medium">{reviews} reviews</span>
          </div>

          <div className="flex items-center gap-1 text-green-600">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="font-medium text-xs">Available</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;
