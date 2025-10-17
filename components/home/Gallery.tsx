import Image from "next/image";

export default function Gallery() {
  const images = [
    { id: 1, src: "/images/lifestyle/Lifestyle_1.JPG", alt: "A woman in a white dress standing in a field of tall grass." },
    { id: 2, src: "/images/lifestyle/Lifestyle_5.JPG", alt: "A couple embracing on a beach at sunset." },
    { id: 3, src: "/images/lifestyle/Lifestyle_8.JPG", alt: "A woman sitting on a vintage car, smiling." },
    { id: 4, src: "/images/lifestyle/Lifestyle_12.JPG", alt: "A close-up of a woman's hands holding a bouquet of wildflowers." },
    { id: 5, src: "/images/lifestyle/Lifestyle_18.JPG", alt: "A couple walking hand-in-hand through a forest." },
    { id: 6, src: "/images/lifestyle/Lifestyle_21.JPG", alt: "A woman laughing while her partner whispers in her ear." },
    { id: 7, src: "/images/lifestyle/Lifestyle_28.JPG", alt: "A silhouette of a couple against a vibrant sunset." },
    { id: 8, src: "/images/lifestyle/Lifestyle_35.JPG", alt: "A woman's face partially obscured by a sunhat." },
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
              className="aspect-[4/5] bg-peach-200 rounded-sm overflow-hidden group cursor-pointer"
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
