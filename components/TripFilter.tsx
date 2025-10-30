"use client";

import { useState } from "react";

interface FilterState {
  destination: string;
  tripType: string;
  duration: string;
  budget: number[];
}

const destinations = [
  "All Destinations",
  "Dubai, UAE",
  "Istanbul, Turkey",
  "Maldives",
  "Bangkok, Thailand",
  "Paris, France",
  "London, UK",
  "Rome, Italy",
  "Singapore",
  "Kuala Lumpur, Malaysia",
];

const tripTypes = [
  "All Types",
  "Beach",
  "City",
  "Adventure",
  "Cruise",
  "Cultural",
  "Luxury",
  "Family",
];

const durations = [
  "Any Duration",
  "3-5 Days",
  "6-7 Days",
  "8-10 Days",
  "11-14 Days",
  "15+ Days",
];

const TripFilter = () => {
  const [filters, setFilters] = useState<FilterState>({
    destination: "All Destinations",
    tripType: "All Types",
    duration: "Any Duration",
    budget: [500, 5000], // USD
  });

  const [isOpen, setIsOpen] = useState(false);

  const handleSearch = () => {
    console.log("Searching with filters:", filters);
    // Handle search logic here
  };

  const formatBudget = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <section className="relative -mt-16 sm:-mt-20 z-30 mx-4 sm:mx-6 lg:mx-8">
      <div className="container mx-auto">
        <div className="bg-white rounded-xl lg:rounded-2xl shadow-2xl p-4 sm:p-6 lg:p-8 border border-gray-100">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-6 lg:mb-8">
            <div className="mb-4 lg:mb-0">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-800 mb-2">
                Find Your Perfect Trip
              </h2>
              <p className="text-sm sm:text-base text-slate-600">
                Customize your search to discover amazing destinations
              </p>
            </div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-white px-4 py-2.5 rounded-lg font-semibold flex items-center gap-2 w-full sm:w-auto justify-center transition-colors hover:brightness-110"
              style={{ background: "#198450" }}
            >
              <span>Filter Options</span>
              <svg
                className={`w-4 h-4 transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>

          <div
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 lg:gap-6 transition-all duration-300 ${
              isOpen ? "block" : "hidden lg:grid"
            }`}
          >
            {/* Destination Filter */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-slate-700">
                Destination
              </label>
              <select
                value={filters.destination}
                onChange={(e) =>
                  setFilters({ ...filters, destination: e.target.value })
                }
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent transition-all"
                style={
                  {
                    "--focus-ring-color": "#198450",
                    focusRingColor: "#198450",
                  } as React.CSSProperties
                }
              >
                {destinations.map((dest) => (
                  <option key={dest} value={dest}>
                    {dest}
                  </option>
                ))}
              </select>
            </div>

            {/* Trip Type Filter */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-slate-700">
                Trip Type
              </label>
              <select
                value={filters.tripType}
                onChange={(e) =>
                  setFilters({ ...filters, tripType: e.target.value })
                }
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
              >
                {tripTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            {/* Duration Filter */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-slate-700">
                Duration
              </label>
              <select
                value={filters.duration}
                onChange={(e) =>
                  setFilters({ ...filters, duration: e.target.value })
                }
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
              >
                {durations.map((duration) => (
                  <option key={duration} value={duration}>
                    {duration}
                  </option>
                ))}
              </select>
            </div>

            {/* Budget Filter */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-slate-700">
                Budget Range
              </label>
              <div className="space-y-3">
                <input
                  type="range"
                  min="500"
                  max="10000"
                  step="100"
                  value={filters.budget[0]}
                  onChange={(e) =>
                    setFilters({
                      ...filters,
                      budget: [parseInt(e.target.value), filters.budget[1]],
                    })
                  }
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-sm text-slate-600">
                  <span>{formatBudget(filters.budget[0])}</span>
                  <span>{formatBudget(filters.budget[1])}</span>
                </div>
              </div>
            </div>

            {/* Search Button */}
            <div className="flex items-end">
              <button
                onClick={handleSearch}
                className="w-full text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 hover:brightness-110"
                style={{
                  background: "linear-gradient(to right, #198450, #15704a)",
                }}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                Search
              </button>
            </div>
          </div>

          {/* Quick Filters */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <div className="flex flex-wrap gap-3">
              <span className="text-sm font-semibold text-slate-700 mr-3">
                Popular:
              </span>
              {[
                "Dubai Weekend",
                "Maldives Honeymoon",
                "Europe Tour",
                "Thailand Adventure",
              ].map((filter) => (
                <button
                  key={filter}
                  className="px-4 py-2 bg-slate-100 hover:bg-cyan-100 text-slate-700 hover:text-cyan-700 rounded-full text-sm font-medium transition-all duration-200"
                  style={
                    { "--hover-text-color": "#198450" } as React.CSSProperties
                  }
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TripFilter;
