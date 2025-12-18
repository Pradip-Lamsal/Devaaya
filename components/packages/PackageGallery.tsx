/**
 * PackageGallery Component
 * Interactive photo gallery with lightbox functionality
 */

"use client";

import {
  ChevronLeftIcon,
  ChevronRightIcon,
  XIcon,
} from "@/components/ui/Icons";
import { TravelPackage } from "@/types/package";
import { useState } from "react";

interface PackageGalleryProps {
  package: TravelPackage;
}

export default function PackageGallery({ package: pkg }: PackageGalleryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setLightboxIndex((prev) => (prev + 1) % pkg.gallery.length);
  };

  const previousImage = () => {
    setLightboxIndex(
      (prev) => (prev - 1 + pkg.gallery.length) % pkg.gallery.length
    );
  };

  return (
    <>
      <div className="max-w-6xl mx-auto">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Photo Gallery</h3>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {pkg.gallery.map((image, index) => (
            <div
              key={index}
              className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group"
              onClick={() => openLightbox(index)}
            >
              <img
                src={image}
                alt={`${pkg.title} - Photo ${index + 1}`}
                loading={index === 0 ? "eager" : "lazy"}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-6">
          <button
            onClick={() => openLightbox(0)}
            className="inline-flex items-center px-6 py-3 bg-[#2D6E89] text-white rounded-lg hover:bg-[#245566] transition-colors duration-300"
          >
            View All Photos ({pkg.gallery.length})
          </button>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              closeLightbox();
            }}
            className="absolute top-4 right-4 text-white p-3 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 transition-all duration-200 z-10 border border-white/30"
          >
            <XIcon className="w-6 h-6" />
          </button>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              previousImage();
            }}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white p-3 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 transition-all duration-200 z-10 border border-white/30"
          >
            <ChevronLeftIcon className="w-6 h-6" />
          </button>

          {/* Main Image Container */}
          <div
            className="relative w-full h-full max-h-[90vh] flex items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={pkg.gallery[lightboxIndex]}
              alt={`Gallery image ${lightboxIndex + 1}`}
              className="max-w-full max-h-[90vh] object-contain"
              key={lightboxIndex}
            />
          </div>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white p-3 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 transition-all duration-200 z-10 border border-white/30"
          >
            <ChevronRightIcon className="w-6 h-6" />
          </button>

          {/* Image Counter */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white bg-black bg-opacity-75 px-4 py-2 rounded-full font-semibold border border-white/20">
            {lightboxIndex + 1} / {pkg.gallery.length}
          </div>
        </div>
      )}
    </>
  );
}
