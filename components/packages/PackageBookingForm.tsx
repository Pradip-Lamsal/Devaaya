/**
 * PackageBookingForm Component
 * Booking form for travel packages with validation and state management
 */

"use client";

import {
  MailIcon,
  PhoneIcon,
  UserIcon,
  UsersIcon,
} from "@/components/ui/Icons";
import { formatPrice } from "@/lib/packages";
import { FormData, TravelPackage } from "@/types/package";
import { useState } from "react";

interface PackageBookingFormProps {
  package: TravelPackage;
}

interface InputFieldProps {
  label: string;
  icon: React.ReactNode;
  type: string;
  name: string;
  value: string | number;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  placeholder: string;
  required?: boolean;
  min?: number;
  max?: number;
  minDate?: string;
}

const InputField = ({
  label,
  icon,
  type,
  name,
  value,
  onChange,
  placeholder,
  required = false,
  min,
  max,
  minDate,
}: InputFieldProps) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-2">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <div className="relative">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
        {icon}
      </div>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        min={type === "date" ? minDate : min}
        max={max}
        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2D6E89] focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500 bg-white"
      />
    </div>
  </div>
);

export default function PackageBookingForm({
  package: pkg,
}: PackageBookingFormProps) {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    preferredDate: "",
    travelers: 2,
    budget: "",
    requirements: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "travelers" ? parseInt(value) || 0 : value,
    }));
  };

  const calculateTotal = () => {
    return pkg.price * formData.travelers;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setSubmitMessage(
        "Thank you for your booking inquiry! We will contact you within 24 hours to confirm your reservation."
      );

      // Reset form
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        preferredDate: "",
        travelers: 2,
        budget: "",
        requirements: "",
      });
    } catch {
      setSubmitMessage(
        "There was an error submitting your booking. Please try again or contact us directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // Get tomorrow's date for min date
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split("T")[0];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-linear-to-r from-[#2D6E89] to-[#245566] text-white p-6">
          <h3 className="text-2xl font-bold mb-2">Book This Package</h3>
          <p className="opacity-90">
            Fill out the form below to start your booking process
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Personal Information */}
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-4">
              Personal Information
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InputField
                label="Full Name"
                icon={<UserIcon />}
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="Enter your full name"
                required
              />
              <InputField
                label="Email Address"
                icon={<MailIcon />}
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
                required
              />
              <InputField
                label="Phone Number"
                icon={<PhoneIcon />}
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Enter your phone number"
                required
              />
              <InputField
                label="Preferred Date"
                icon={<div className="w-5 h-5">📅</div>}
                type="date"
                name="preferredDate"
                value={formData.preferredDate}
                onChange={handleInputChange}
                placeholder=""
                required
                minDate={minDate}
              />
            </div>
          </div>

          {/* Travel Details */}
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-4">
              Travel Details
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InputField
                label="Number of Travelers"
                icon={<UsersIcon />}
                type="number"
                name="travelers"
                value={formData.travelers}
                onChange={handleInputChange}
                placeholder="Number of people"
                required
                min={pkg.bookingInfo.minPax}
                max={pkg.bookingInfo.maxPax}
              />
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Budget Range (Optional)
                </label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, budget: e.target.value }))
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2D6E89] focus:border-transparent transition-all duration-200 text-gray-900 bg-white"
                >
                  <option value="">Select budget range</option>
                  <option value="budget">Budget Friendly</option>
                  <option value="mid-range">Mid Range</option>
                  <option value="luxury">Luxury</option>
                  <option value="ultra-luxury">Ultra Luxury</option>
                </select>
              </div>
            </div>
          </div>

          {/* Special Requirements */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Special Requirements (Optional)
            </label>
            <textarea
              name="requirements"
              value={formData.requirements}
              onChange={handleInputChange}
              placeholder="Any special dietary requirements, accessibility needs, or other preferences..."
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2D6E89] focus:border-transparent transition-all duration-200 resize-none text-gray-900 placeholder-gray-500 bg-white"
            />
          </div>

          {/* Price Summary */}
          <div className="bg-gray-50 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-gray-800 mb-4">
              Price Summary
            </h4>
            <div className="space-y-3">
              <div className="flex justify-between text-gray-800">
                <span className="font-medium">Package Price per person:</span>
                <span className="font-semibold">{formatPrice(pkg.price)}</span>
              </div>
              <div className="flex justify-between text-gray-800">
                <span className="font-medium">Number of Travelers:</span>
                <span className="font-semibold">{formData.travelers}</span>
              </div>
              <div className="border-t pt-3 flex justify-between text-lg font-bold text-[#2D6E89]">
                <span>Total Estimated Cost:</span>
                <span>{formatPrice(calculateTotal())}</span>
              </div>
              <p className="text-sm text-gray-700 mt-2 font-medium">
                * Final price may vary based on specific requirements and
                availability
              </p>
            </div>
          </div>

          {/* Booking Information */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h5 className="font-semibold text-blue-900 mb-2">
              Important Booking Information:
            </h5>
            <ul className="text-sm text-blue-800 space-y-1 font-medium">
              <li>• {pkg.bookingInfo.availability}</li>
              <li>
                • Minimum advance booking: {pkg.bookingInfo.advanceBooking}
              </li>
              <li>
                • Group size: {pkg.bookingInfo.minPax}-{pkg.bookingInfo.maxPax}{" "}
                people
              </li>
              <li>• {pkg.bookingInfo.cancellation}</li>
            </ul>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-300 ${
              isSubmitting
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-[#2D6E89] hover:bg-[#245566] active:transform active:scale-95"
            } text-white`}
          >
            {isSubmitting ? "Submitting..." : "Submit Booking Inquiry"}
          </button>

          {/* Submit Message */}
          {submitMessage && (
            <div
              className={`p-4 rounded-lg ${
                submitMessage.includes("error")
                  ? "bg-red-50 text-red-700 border border-red-200"
                  : "bg-green-50 text-green-700 border border-green-200"
              }`}
            >
              {submitMessage}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
