import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Devaaya Holidays - Your Journey Beyond Nepal Begins Here",
  description:
    "Expert international travel services from Nepal. Discover Dubai, Maldives, Turkey, Thailand, Europe and more with personalized packages, visa assistance, and 24/7 support.",
  keywords:
    "Nepal travel agency, international travel, Dubai packages, Maldives honeymoon, Europe tours, Thailand trips, Turkey travel, visa assistance, travel packages Nepal",
  authors: [{ name: "Devaaya Holidays" }],
  openGraph: {
    title: "Devaaya Holidays - International Travel from Nepal",
    description:
      "Your trusted travel partner for international adventures from Nepal. Creating unforgettable memories worldwide since 2014.",
    url: "https://devaayaholidays.com",
    siteName: "Devaaya Holidays",
    images: [
      {
        url: "/logo.jpeg",
        width: 1200,
        height: 630,
        alt: "Devaaya Holidays",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Devaaya Holidays - International Travel from Nepal",
    description:
      "Your trusted travel partner for international adventures from Nepal.",
    images: ["/logo.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
