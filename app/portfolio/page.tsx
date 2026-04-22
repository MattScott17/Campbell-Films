"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import PortfolioGallery from "@/components/PortfolioGallery";
import Doodle from "@/components/Doodle";

export default function PortfolioPage() {
  const [activeTab, setActiveTab] = useState<"wedding-films" | "wedding-photos" | "lifestyle">("wedding-films");
  const [lifestyleImages, setLifestyleImages] = useState<{ id: number; src: string; alt: string }[]>([]);
  const [weddingPhotos, setWeddingPhotos] = useState<{ id: number; src: string; alt: string }[]>([]);
  useEffect(() => {
    fetch('/api/lifestyle-images')
      .then((res) => res.json())
      .then((data) => setLifestyleImages(data));
    fetch('/api/wedding-photos')
      .then((res) => res.json())
      .then((data) => setWeddingPhotos(data));
  }, []);

  return (
    <div className="pt-20 md:pt-16 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="relative flex items-center justify-center mb-2 md:mb-6">
          {activeTab === "wedding-films" && (
            <>
              {/* Mobile cake icon */}
              <Doodle
                src="/images/doodles/CampbellFilms_Icon_Cake.png"
                alt="Cake doodle"
                width={35}
                height={35}
                hideOnMobile={false}
                hideOnDesktop={true}
                right="auto"
                left="30px"
                top="5%"
                rotation={-10}
              />
              {/* Desktop cake icon */}
              <Doodle
                src="/images/doodles/CampbellFilms_Icon_Cake.png"
                alt="Cake doodle"
                width={110}
                height={110}
                hideOnMobile={true}
                hideOnDesktop={false}
                right="auto"
                left="175px"
                top="15%"
                rotation={-10}
              />
            </>
          )}
          {activeTab === "lifestyle" && (
            <>
              {/* Mobile shell icon */}
              <Doodle
                src="/images/doodles/CampbellFilms_Icon_shell.png"
                alt="Shell doodle"
                width={35}
                height={35}
                hideOnMobile={false}
                hideOnDesktop={true}
                left="auto"
                right="-10px"
                top="50%"
                rotation={10}
              />
              {/* Desktop shell icon */}
              <Doodle
                src="/images/doodles/CampbellFilms_Icon_shell.png"
                alt="Shell doodle"
                width={120}
                height={120}
                hideOnMobile={true}
                hideOnDesktop={false}
                left="auto"
                right="175px"
                top="60%"
                rotation={10}
              />
              {/* Mobile starfish icon */}
              <Doodle
                src="/images/doodles/CampbellFilms_Icon_StarFish.png"
                alt="Starfish doodle"
                width={35}
                height={35}
                hideOnMobile={false}
                hideOnDesktop={true}
                left="auto"
                right="25px"
                top="10%"
                rotation={15}
              />
              {/* Desktop starfish icon */}
              <Doodle
                src="/images/doodles/CampbellFilms_Icon_StarFish.png"
                alt="Starfish doodle"
                width={120}
                height={120}
                hideOnMobile={true}
                hideOnDesktop={false}
                left="auto"
                right="40px"
                top="40%"
                rotation={15}
              />
            </>
          )}
          <h1 className="text-6xl md:text-8xl font-serif text-softBrown-500 text-center">
            Portfolio
          </h1>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-6 md:mb-12">
          <div className="inline-flex bg-sage-100 rounded-sm p-1">
            <button
              onClick={() => setActiveTab("wedding-films")}
              className={`px-3 py-2 md:px-8 md:py-3 rounded-sm font-medium uppercase text-xs md:text-sm tracking-wide transition-colors ${
                activeTab === "wedding-films"
                  ? "bg-olive-500 text-peach-50"
                  : "text-olive-700 hover:text-olive-500"
              }`}
            >
              Wedding Films
            </button>
            <button
              onClick={() => setActiveTab("wedding-photos")}
              className={`px-3 py-2 md:px-8 md:py-3 rounded-sm font-medium uppercase text-xs md:text-sm tracking-wide transition-colors ${
                activeTab === "wedding-photos"
                  ? "bg-olive-500 text-peach-50"
                  : "text-olive-700 hover:text-olive-500"
              }`}
            >
              Wedding Photos
            </button>
            <button
              onClick={() => setActiveTab("lifestyle")}
              className={`px-3 py-2 md:px-8 md:py-3 rounded-sm font-medium uppercase text-xs md:text-sm tracking-wide transition-colors ${
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
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {weddingPhotos.map((image) => (
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
        {activeTab === "lifestyle" && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
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
