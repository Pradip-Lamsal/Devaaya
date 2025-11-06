/**
 * PackageOverview Component
 * Overview section with description and highlights
 */

import { CheckIcon } from "@/components/ui/Icons";
import { TravelPackage } from "@/types/package";

interface PackageOverviewProps {
  package: TravelPackage;
}

export default function PackageOverview({
  package: pkg,
}: PackageOverviewProps) {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Description */}
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            About This Package
          </h3>
          <p className="text-gray-700 leading-relaxed text-lg font-medium">
            {pkg.description}
          </p>
        </div>

        {/* Highlights */}
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Package Highlights
          </h3>
          <ul className="space-y-3">
            {pkg.highlights.map((highlight, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckIcon className="w-5 h-5 text-[#2D6E89] mt-0.5 shrink-0" />
                <span className="text-gray-700 font-medium">{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
