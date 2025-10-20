"use client";

import Image from 'next/image';
import { useRef } from 'react';

interface PortfolioGalleryProps {
  category: "wedding" | "lifestyle";
}

export default function PortfolioGallery({ category }: PortfolioGalleryProps) {
  const lifestyleImages = Array.from({ length: 37 }, (_, i) => ({
    id: i + 1,
    src: `/images/lifestyle/Lifestyle_${i + 1}.JPG`,
    alt: `Film photography lifestyle portrait ${i + 1} - Campbell Films Southern California`,
  }));

  const weddingVideos = [
    { id: 1, src: "/videos/wedding/WeddingMovie_2.MP4", alt: "Complete wedding film on Super 8" },
    { id: 2, src: "/videos/wedding/WeddingMovie_1.MP4", alt: "Full Super 8 wedding film by Campbell Films" },
    { id: 3, src: "/videos/wedding/Wedding_Short_1.mp4", alt: "Super 8 wedding film - Campbell Films" },
    { id: 4, src: "/videos/wedding/Wedding_Short_2.mp4", alt: "Nostalgic Super 8 wedding videography" },
    { id: 5, src: "/videos/wedding/Wedding_Short_3.mp4", alt: "Analog wedding film capturing authentic moments" },
    { id: 6, src: "/videos/wedding/Wedding_Short_4.mp4", alt: "Super 8 film wedding cinematography" },
    { id: 7, src: "/videos/wedding/Wedding_Short_5.mp4", alt: "Timeless Super 8 wedding video" },
    { id: 8, src: "/videos/wedding/Wedding_Short_6.mp4", alt: "Film wedding videography Southern California" },
  ];

  const VideoCard = ({ video }: { video: typeof weddingVideos[0] }) => {
    const videoRef = useRef<HTMLVideoElement>(null);

    const handleMouseEnter = () => {
      if (videoRef.current) {
        videoRef.current.play();
      }
    };

    const handleMouseLeave = () => {
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    };

    return (
      <div
        key={video.id}
        className="aspect-video bg-black rounded-sm overflow-hidden cursor-pointer"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          muted
          loop
          playsInline
          preload="metadata"
          aria-label={video.alt}
        >
          <source src={video.src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    );
  };

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
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    );
  }

  return null;
}