"use client";

import { useState } from "react";
import PortfolioGallery from "@/components/PortfolioGallery";

export default function PortfolioPage() {
  const [activeTab, setActiveTab] = useState<"wedding" | "lifestyle">("lifestyle");

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
        <PortfolioGallery category={activeTab} />
      </div>
    </div>
  );
}
