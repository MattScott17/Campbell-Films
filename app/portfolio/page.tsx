"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import PortfolioGallery from "@/components/PortfolioGallery";

export default function PortfolioPage() {
  const [activeTab, setActiveTab] = useState<"wedding-films" | "wedding-photos" | "lifestyle">("wedding-films");
  const [lifestyleImages, setLifestyleImages] = useState<{ id: number; src: string; alt: string }[]>([]);
  useEffect(() => {
    fetch('/api/lifestyle-images')
      .then((res) => res.json())
      .then((data) => setLifestyleImages(data));
  }, []);

  return (
    <div className="pt-24 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-serif text-softBrown-500 mb-12 text-center">
          Portfolio
        </h1>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-sage-100 rounded-sm p-1">
            <button
              onClick={() => setActiveTab("wedding-films")}
              className={`px-8 py-3 rounded-sm font-medium uppercase text-sm tracking-wide transition-colors ${
                activeTab === "wedding-films"
                  ? "bg-olive-500 text-peach-50"
                  : "text-olive-700 hover:text-olive-500"
              }`}
            >
              Wedding Films
            </button>
            <button
              onClick={() => setActiveTab("wedding-photos")}
              className={`px-8 py-3 rounded-sm font-medium uppercase text-sm tracking-wide transition-colors ${
                activeTab === "wedding-photos"
                  ? "bg-olive-500 text-peach-50"
                  : "text-olive-700 hover:text-olive-500"
              }`}
            >
              Wedding Photos
            </button>
            <button
              onClick={() => setActiveTab("lifestyle")}
              className={`px-8 py-3 rounded-sm font-medium uppercase text-sm tracking-wide transition-colors ${
                activeTab === "lifestyle"
                  ? "bg-olive-500 text-peach-50"
                  : "text-olive-700 hover:text-olive-500"
              }`}
            >
              Lifestyle
            </button>
          </div>
        </div>

        {/* Gallery */}
        {activeTab === "wedding-films" && (
          <PortfolioGallery category="wedding" />
        )}
        {activeTab === "wedding-photos" && (
          <div className="flex flex-col items-center justify-center py-20">
            <p className="text-5xl md:text-7xl font-serif text-olive-500">Coming Soon</p>
          </div>
        )}
        {activeTab === "lifestyle" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {lifestyleImages.map((image) => (
              <div
                key={image.id}
                className="aspect-[4/5] bg-peach-200 rounded-sm overflow-hidden group cursor-pointer relative"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
