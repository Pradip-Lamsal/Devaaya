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
import Image from "next/image";
import { useState } from "react";

interface PackageGalleryProps {
  package: TravelPackage;
}

interface LightboxProps {
  images: string[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
}

const Lightbox = ({
  images,
  currentIndex,
  isOpen,
  onClose,
  onPrevious,
  onNext,
}: LightboxProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white p-3 rounded-full bg-black bg-opacity-75 hover:bg-opacity-90 transition-all duration-200 z-10 border border-white/20"
      >
        <XIcon className="w-6 h-6" />
      </button>

      {/* Previous Button */}
      <button
        onClick={onPrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white p-3 rounded-full bg-black bg-opacity-75 hover:bg-opacity-90 transition-all duration-200 z-10 border border-white/20"
      >
        <ChevronLeftIcon className="w-6 h-6" />
      </button>

      {/* Next Button */}
      <button
        onClick={onNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white p-3 rounded-full bg-black bg-opacity-75 hover:bg-opacity-90 transition-all duration-200 z-10 border border-white/20"
      >
        <ChevronRightIcon className="w-6 h-6" />
      </button>

      {/* Main Image */}
      <div className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center p-4">
        <Image
          src={images[currentIndex]}
          alt={`Gallery image ${currentIndex + 1}`}
          fill
          className="object-contain"
          sizes="100vw"
        />
      </div>

      {/* Image Counter */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white bg-black bg-opacity-75 px-4 py-2 rounded-full font-semibold border border-white/20">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
};

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
              <Image
                src={image}
                alt={`${pkg.title} - Photo ${index + 1}`}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 25vw"
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

      {/* Lightbox */}
      <Lightbox
        images={pkg.gallery}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={closeLightbox}
        onNext={nextImage}
        onPrevious={previousImage}
      />
    </>
  );
}
