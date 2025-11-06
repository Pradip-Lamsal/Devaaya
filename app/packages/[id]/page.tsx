"use client";

import PackageBookingForm from "@/components/packages/PackageBookingForm";
import PackageGallery from "@/components/packages/PackageGallery";
import PackageHero from "@/components/packages/PackageHero";
import PackageOverview from "@/components/packages/PackageOverview";
import PackageTabs from "@/components/packages/PackageTabs";
import { getPackageById } from "@/lib/packages";
import { notFound } from "next/navigation";
import { use } from "react";

interface PackageDetailPageProps {
  params: Promise<{ id: string }>;
}

export default function PackageDetailPage({ params }: PackageDetailPageProps) {
  const { id } = use(params);
  const pkg = getPackageById(id);

  if (!pkg) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <PackageHero package={pkg} />
      <div className="py-16 px-4">
        <div className="container mx-auto space-y-16">
          <PackageOverview package={pkg} />
          <PackageGallery package={pkg} />
          <PackageTabs package={pkg} />
          <PackageBookingForm package={pkg} />
        </div>
      </div>
    </div>
  );
}
