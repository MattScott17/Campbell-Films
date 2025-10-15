interface PortfolioGalleryProps {
  category: "wedding" | "lifestyle";
}

export default function PortfolioGallery({ category }: PortfolioGalleryProps) {
  // Placeholder data - replace with actual portfolio images
  const weddingImages = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    alt: `Wedding photo ${i + 1}`,
  }));

  const lifestyleImages = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    alt: `Lifestyle photo ${i + 1}`,
  }));

  const images = category === "wedding" ? weddingImages : lifestyleImages;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {images.map((image) => (
        <div
          key={image.id}
          className="aspect-[4/5] bg-peach-200 rounded-sm overflow-hidden group cursor-pointer"
        >
          {/* Placeholder - replace with actual images */}
          <div
            className={`w-full h-full transition-transform duration-500 group-hover:scale-105 ${
              category === "wedding"
                ? "bg-gradient-to-br from-peach-200 via-gold-200 to-sage-200"
                : "bg-gradient-to-br from-sage-200 via-dustyBlue-200 to-mustard-200"
            }`}
          />
          {/* In production, use:
          <Image
            src={`/images/${category}/${image.id}.jpg`}
            alt={image.alt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          */}
        </div>
      ))}
    </div>
  );
}
