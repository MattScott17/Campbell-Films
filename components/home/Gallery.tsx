import Image from "next/image";

export default function Gallery() {
  const images = [
    { id: 1, src: "/images/lifestyle/Lifestyle_3.JPG", alt: "Film photography lifestyle portrait - Campbell Films" },
    { id: 2, src: "/images/lifestyle/Lifestyle_7.JPG", alt: "Candid lifestyle photography captured on 35mm film" },
    { id: 3, src: "/images/lifestyle/Lifestyle_12.JPG", alt: "Authentic moments captured on film - Southern California photographer" },
    { id: 4, src: "/images/lifestyle/Lifestyle_15.JPG", alt: "Nostalgic film photography lifestyle session" },
    { id: 5, src: "/images/lifestyle/Lifestyle_21.JPG", alt: "Timeless film photography by Campbell Films" },
    { id: 6, src: "/images/lifestyle/Lifestyle_28.JPG", alt: "Natural light film photography lifestyle portraits" },
    { id: 7, src: "/images/lifestyle/Lifestyle_31.JPG", alt: "Analog photography capturing real moments and emotions" },
    { id: 8, src: "/images/lifestyle/Lifestyle_35.JPG", alt: "Authentic film photography lifestyle moments" }
  ];

  return (
    <section className="py-20 px-6 bg-sage-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif text-coral-600 mb-12 text-center">
          Recent Work
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((image) => (
            <div
              key={image.id}
              className="relative aspect-[4/5] bg-peach-200 rounded-sm overflow-hidden group cursor-pointer"
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
      </div>
    </section>
  );
}
