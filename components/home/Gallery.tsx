export default function Gallery() {
  // Placeholder images - replace with actual portfolio images
  const images = [
    { id: 1, alt: "Wedding moment 1" },
    { id: 2, alt: "Wedding moment 2" },
    { id: 3, alt: "Lifestyle shot 1" },
    { id: 4, alt: "Wedding moment 3" },
    { id: 5, alt: "Lifestyle shot 2" },
    { id: 6, alt: "Wedding moment 4" },
  ];

  return (
    <section className="py-20 px-6 bg-sage-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif text-coral-600 mb-12 text-center">
          Recent Work
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image) => (
            <div
              key={image.id}
              className="aspect-[4/5] bg-peach-200 rounded-sm overflow-hidden group cursor-pointer"
            >
              {/* Placeholder - replace with actual images */}
              <div className="w-full h-full bg-gradient-to-br from-peach-200 via-gold-200 to-dustyBlue-200 transition-transform duration-500 group-hover:scale-105" />
              {/* In production, use:
              <Image
                src={`/images/gallery/${image.id}.jpg`}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
