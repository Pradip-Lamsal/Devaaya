/**
 * Type definitions for travel packages
 */

export interface ItineraryDay {
  day: number;
  title: string;
  activities: string[];
}

export interface BookingInfo {
  availability: string;
  minPax: number;
  maxPax: number;
  advanceBooking: string;
  cancellation: string;
}

export interface TravelPackage {
  id: number;
  image: string;
  destination: string;
  title: string;
  duration: string;
  price: number;
  originalPrice?: number | null;
  rating: number;
  reviews: number;
  badge?: string | null;
  gallery: string[];
  description: string;
  highlights: string[];
  itinerary: ItineraryDay[];
  includes: string[];
  excludes: string[];
  bookingInfo: BookingInfo;
}

export interface PackagesData {
  packages: {
    [key: string]: TravelPackage;
  };
}

export interface FormData {
  fullName: string;
  email: string;
  phone: string;
  preferredDate: string;
  travelers: number;
  budget: string;
  requirements: string;
}
