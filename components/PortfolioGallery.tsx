import Image from 'next/image';

interface PortfolioGalleryProps {
  category: "wedding" | "lifestyle";
}

export default function PortfolioGallery({ category }: PortfolioGalleryProps) {
  const lifestyleImages = Array.from({ length: 36 }, (_, i) => ({
    id: i + 1,
    src: `/images/lifestyle/Lifestyle_${i + 1}.JPG`,
    alt: `Film photography lifestyle portrait ${i + 1} - Campbell Films Southern California`,
  }));

  const weddingVideos = [
    { id: 1, src: "/videos/lifestyle/wedding/Wedding_Short_1.mov", type: "video/quicktime", alt: "Super 8 wedding film - Campbell Films" },
    { id: 2, src: "/videos/lifestyle/wedding/Wedding_Short_2.mov", type: "video/quicktime", alt: "Nostalgic Super 8 wedding videography" },
    { id: 3, src: "/videos/lifestyle/wedding/Wedding_Short_3.mov", type: "video/quicktime", alt: "Analog wedding film capturing authentic moments" },
    { id: 4, src: "/videos/lifestyle/wedding/Wedding_Short_4.mov", type: "video/quicktime", alt: "Super 8 film wedding cinematography" },
    { id: 5, src: "/videos/lifestyle/wedding/Wedding_Short_5.mov", type: "video/quicktime", alt: "Timeless Super 8 wedding video" },
    { id: 6, src: "/videos/lifestyle/wedding/Wedding_Short_6.mov", type: "video/quicktime", alt: "Film wedding videography Southern California" },
    { id: 7, src: "/videos/lifestyle/wedding/WeddingMovie_1.MP4", type: "video/mp4", alt: "Full Super 8 wedding film by Campbell Films" },
    { id: 8, src: "/videos/lifestyle/wedding/WeddingMovie_2.MP4", type: "video/mp4", alt: "Complete wedding film on Super 8" },
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
          <div key={video.id} className="aspect-video bg-black rounded-sm overflow-hidden group">
            <video
              controls
              className="w-full h-full object-cover"
              preload="metadata"
              aria-label={video.alt}
            >
              <source src={video.src} type={video.type} />
              Your browser does not support the video tag.
            </video>
          </div>
        ))}
      </div>
    );
  }

  return null;
}
