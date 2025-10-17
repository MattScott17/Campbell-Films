import Image from 'next/image';

interface PortfolioGalleryProps {
  category: "wedding" | "lifestyle";
}

export default function PortfolioGallery({ category }: PortfolioGalleryProps) {
  const lifestyleImages = Array.from({ length: 37 }, (_, i) => ({
    id: i + 1,
    src: `/images/lifestyle/Lifestyle_${i + 1}.JPG`,
    alt: `Lifestyle photo ${i + 1}`,
  }));

  const weddingVideos = [
    { id: 1, src: "/videos/lifestyle/wedding/Wedding_Short_1.mov", alt: "Wedding video 1" },
    { id: 2, src: "/videos/lifestyle/wedding/Wedding_Short_2.mov", alt: "Wedding video 2" },
    { id: 3, src: "/videos/lifestyle/wedding/Wedding_Short_3.mov", alt: "Wedding video 3" },
    { id: 4, src: "/videos/lifestyle/wedding/Wedding_Short_4.mov", alt: "Wedding video 4" },
    { id: 5, src: "/videos/lifestyle/wedding/WeddingMovie_1.MP4", alt: "Wedding movie 1" },
    { id: 6, src: "/videos/lifestyle/wedding/WeddingMovie_2.MP4", alt: "Wedding movie 2" },
  ];

  if (category === 'lifestyle') {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {lifestyleImages.map((image) => (
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
    );
  }

  if (category === 'wedding') {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {weddingVideos.map((video) => (
          <div key={video.id} className="aspect-video bg-black rounded-sm overflow-hidden">
            <video controls className="w-full h-full object-cover">
              <source src={video.src} />
            </video>
          </div>
        ))}
      </div>
    );
  }

  return null;
}
