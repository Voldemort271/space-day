import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import React from "react";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "National Space Day | IIT Mandi",
  description:
    "Join us for celebrating Bharat's space odyssey — Chandrayaan 3 and beyond.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        <div className="w-full sticky top-0 z-50 shadow-2xl">
          <Navbar />
        </div>
        <div className="w-full h-[80vh]">
          <Header />
        </div>
        <div>{children}</div>
        <div className="w-full">
          <Footer />
        </div>
      </body>
    </html>
  );
}
