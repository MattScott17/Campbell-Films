'use client';

import PortfolioGallery from '@/components/PortfolioGallery';

export default function WeddingPortfolioPage() {
  return (
    <div className="pt-24 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-serif text-coral-600 mb-12 text-center">
          Wedding Portfolio
        </h1>
        <PortfolioGallery category="wedding" />
      </div>
    </div>
  );
}
