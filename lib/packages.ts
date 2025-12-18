/**
 * Utility functions for package data management
 */

import packagesData from "@/data/packages.json" assert { type: "json" };
import { PackagesData, TravelPackage } from "@/types/package";

/**
 * Get all packages
 */
export function getAllPackages(): TravelPackage[] {
  const data = packagesData as unknown as PackagesData;
  return Object.values(data.packages);
}

/**
 * Get package by ID
 */
export function getPackageById(id: string | number): TravelPackage | null {
  const data = packagesData as PackagesData;
  return data.packages[id.toString()] || null;
}

/**
 * Format price to NPR currency
 */
export function formatPrice(amount: number): string {
  return new Intl.NumberFormat("en-NP", {
    style: "currency",
    currency: "NPR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount * 130); // Convert USD to NPR
}

/**
 * Generate star rating array
 */
export function generateStarRating(rating: number): boolean[] {
  return Array.from({ length: 5 }, (_, index) => index < Math.floor(rating));
}
