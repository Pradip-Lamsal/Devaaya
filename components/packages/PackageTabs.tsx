/**
 * PackageTabs Component
 * Tabbed content section for itinerary, includes/excludes information
 */

"use client";

import { CheckIcon, XIcon } from "@/components/ui/Icons";
import { TravelPackage } from "@/types/package";
import { useState } from "react";

interface PackageTabsProps {
  package: TravelPackage;
}

interface TabButtonProps {
  isActive: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

const TabButton = ({ isActive, onClick, children }: TabButtonProps) => (
  <button
    onClick={onClick}
    className={`px-6 py-3 font-semibold rounded-lg transition-all duration-300 ${
      isActive
        ? "bg-[#2D6E89] text-white shadow-lg"
        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
    }`}
  >
    {children}
  </button>
);

export default function PackageTabs({ package: pkg }: PackageTabsProps) {
  const [activeTab, setActiveTab] = useState("itinerary");

  return (
    <div className="max-w-6xl mx-auto">
      {/* Tab Navigation */}
      <div className="flex flex-wrap gap-4 mb-8 justify-center">
        <TabButton
          isActive={activeTab === "itinerary"}
          onClick={() => setActiveTab("itinerary")}
        >
          Itinerary
        </TabButton>
        <TabButton
          isActive={activeTab === "included"}
          onClick={() => setActiveTab("included")}
        >
          What&apos;s Included
        </TabButton>
        <TabButton
          isActive={activeTab === "excluded"}
          onClick={() => setActiveTab("excluded")}
        >
          What&apos;s Excluded
        </TabButton>
      </div>

      {/* Tab Content */}
      <div className="bg-white rounded-xl shadow-lg p-8">
        {/* Itinerary Tab */}
        {activeTab === "itinerary" && (
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Day by Day Itinerary
            </h3>
            {pkg.itinerary.map((day) => (
              <div
                key={day.day}
                className="flex gap-6 pb-8 border-b border-gray-200 last:border-b-0"
              >
                {/* Day Number */}
                <div className="shrink-0">
                  <div className="w-12 h-12 bg-[#2D6E89] text-white rounded-full flex items-center justify-center font-bold text-lg">
                    {day.day}
                  </div>
                </div>

                {/* Day Content */}
                <div className="flex-1">
                  <h4 className="text-xl font-semibold text-gray-800 mb-3">
                    Day {day.day}: {day.title}
                  </h4>
                  <ul className="space-y-2">
                    {day.activities.map((activity, actIndex) => (
                      <li
                        key={actIndex}
                        className="flex items-start gap-3 text-gray-700"
                      >
                        <CheckIcon className="w-5 h-5 text-[#2D6E89] mt-0.5 shrink-0" />
                        <span className="font-medium">{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* What's Included Tab */}
        {activeTab === "included" && (
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              What&apos;s Included in Your Package
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {pkg.includes.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-green-50 border border-green-200 rounded-lg"
                >
                  <CheckIcon className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                  <span className="text-gray-800 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* What's Excluded Tab */}
        {activeTab === "excluded" && (
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              What&apos;s Not Included
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {pkg.excludes.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-red-50 border border-red-200 rounded-lg"
                >
                  <XIcon className="w-5 h-5 text-red-600 mt-0.5 shrink-0" />
                  <span className="text-gray-800 font-medium">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <h4 className="font-semibold text-blue-900 mb-2">
                Important Note:
              </h4>
              <p className="text-blue-800 text-sm font-medium">
                Items not included can often be arranged separately. Please
                contact us for assistance with booking additional services or
                requirements.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
