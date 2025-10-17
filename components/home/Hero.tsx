export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/lifestyle/wedding/Wedding_Short_1.mov" type="video/quicktime" />
        <source src="/videos/lifestyle/wedding/WeddingMovie_1.MP4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-olive-900/30" />

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-peach-50 mb-6 animate-fade-in drop-shadow-lg">
          Campbell Films
        </h1>
        <p className="text-xl md:text-2xl text-peach-100 tracking-wide drop-shadow">
          Film Photography & Super 8 Videography
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <svg
            className="w-6 h-6 text-peach-50"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
