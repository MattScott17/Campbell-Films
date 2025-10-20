"use client";

import { useState } from "react";
import Image from "next/image";
import PortfolioGallery from "@/components/PortfolioGallery";

export default function PortfolioPage() {
  const [activeTab, setActiveTab] = useState<"wedding" | "lifestyle">("wedding");

  const lifestyleImages = Array.from({ length: 36 }, (_, i) => ({
    id: i + 1,
    src: `/images/lifestyle/Lifestyle_${i + 1}.JPG`,
    alt: `Film photography lifestyle portrait ${i + 1} - Campbell Films Southern California`,
  }));

  return (
    <div className="pt-24 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-serif text-coral-600 mb-12 text-center">
          Portfolio
        </h1>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-sage-100 rounded-sm p-1">
            <button
              onClick={() => setActiveTab("wedding")}
              className={`px-8 py-3 rounded-sm font-medium uppercase text-sm tracking-wide transition-colors ${
                activeTab === "wedding"
                  ? "bg-coral-500 text-peach-50"
                  : "text-olive-700 hover:text-coral-500"
              }`}
            >
              Wedding
            </button>
            <button
              onClick={() => setActiveTab("lifestyle")}
              className={`px-8 py-3 rounded-sm font-medium uppercase text-sm tracking-wide transition-colors ${
                activeTab === "lifestyle"
                  ? "bg-coral-500 text-peach-50"
                  : "text-olive-700 hover:text-coral-500"
              }`}
            >
              Lifestyle
            </button>
          </div>
        </div>

        {/* Gallery */}
        {activeTab === "wedding" ? (
          <PortfolioGallery category="wedding" />
        ) : (
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
